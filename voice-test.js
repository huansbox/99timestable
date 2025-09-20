class VoiceTest {
    constructor() {
        this.recognition = null;
        this.isSupported = false;
        this.isListening = false;

        this.testQuestions = [
            { num1: 2, num2: 3, answer: 6 },
            { num1: 4, num2: 5, answer: 20 },
            { num1: 6, num2: 7, answer: 42 },
            { num1: 3, num2: 8, answer: 24 },
            { num1: 9, num2: 4, answer: 36 },
            { num1: 5, num2: 6, answer: 30 },
            { num1: 7, num2: 8, answer: 56 },
            { num1: 2, num2: 9, answer: 18 },
            { num1: 8, num2: 3, answer: 24 },
            { num1: 9, num2: 9, answer: 81 }
        ];

        this.currentQuestionIndex = 0;
        this.results = [];
        this.startTime = null;

        this.init();
    }

    init() {
        this.checkSupport();
        this.setupEventListeners();
        this.loadQuestion();
    }

    async checkSupport() {
        const statusEl = document.getElementById('status');

        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            this.isSupported = true;
            statusEl.textContent = '✅ 瀏覽器支援語音識別';
            statusEl.className = 'status supported';

            // 檢查麥克風權限
            try {
                await this.checkMicrophonePermission();
                this.setupSpeechRecognition();
            } catch (error) {
                console.error('麥克風權限檢查失敗:', error);
                statusEl.textContent = '⚠️ 需要麥克風權限才能使用語音識別';
                statusEl.className = 'status';
            }
        } else {
            this.isSupported = false;
            statusEl.textContent = '❌ 瀏覽器不支援語音識別 - 請使用 Chrome 或 Edge';
            statusEl.className = 'status unsupported';
            document.getElementById('mic-button').disabled = true;
        }
    }

    async checkMicrophonePermission() {
        if (navigator.permissions) {
            try {
                const permission = await navigator.permissions.query({ name: 'microphone' });
                console.log('麥克風權限狀態:', permission.state);

                if (permission.state === 'denied') {
                    throw new Error('麥克風權限被拒絕');
                }

                return permission.state;
            } catch (error) {
                console.log('權限查詢失敗，嘗試直接使用:', error);
                return 'unknown';
            }
        }
        return 'unknown';
    }

    setupSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();

        // 設定語音識別參數
        this.recognition.lang = 'zh-TW';  // 繁體中文
        this.recognition.continuous = false;  // 單次識別
        this.recognition.interimResults = true;  // 顯示中間結果
        this.recognition.maxAlternatives = 3;  // 最多3個候選結果

        // 事件處理
        this.recognition.onstart = () => {
            console.log('語音識別開始');
            this.isListening = true;
            this.updateMicButton();
            this.startTime = Date.now();
        };

        this.recognition.onresult = (event) => {
            console.log('語音識別結果:', event);
            console.log('結果數量:', event.results.length);

            let finalTranscript = '';
            let interimTranscript = '';

            // 處理所有結果
            for (let i = 0; i < event.results.length; i++) {
                const result = event.results[i];
                console.log(`結果 ${i}:`, result[0].transcript, '是否最終:', result.isFinal);

                if (result.isFinal) {
                    finalTranscript += result[0].transcript;
                } else {
                    interimTranscript += result[0].transcript;
                }
            }

            // 顯示中間結果
            if (interimTranscript) {
                document.getElementById('transcript-text').textContent =
                    `(識別中) ${interimTranscript}`;
                document.getElementById('transcript-box').style.display = 'block';
            }

            // 處理最終結果
            if (finalTranscript) {
                console.log('最終識別結果:', finalTranscript);
                this.processVoiceInput(finalTranscript);
            }
        };

        this.recognition.onerror = (event) => {
            console.error('語音識別錯誤:', event.error);
            this.showError(`語音識別錯誤: ${event.error}`);
            this.isListening = false;
            this.updateMicButton();
        };

        this.recognition.onend = () => {
            console.log('語音識別結束');
            this.isListening = false;
            this.updateMicButton();

            // 不重新創建 recognition 物件，避免權限重複請求
            // 保持同一個 recognition 實例
        };
    }

    setupEventListeners() {
        const micButton = document.getElementById('mic-button');
        const nextButton = document.getElementById('next-button');

        // 麥克風按鈕：點擊切換模式
        micButton.addEventListener('click', () => {
            if (!this.isSupported) return;

            if (this.isListening) {
                this.stopListening();
            } else {
                this.startListening();
                // 3秒後自動停止
                setTimeout(() => {
                    if (this.isListening) {
                        this.stopListening();
                    }
                }, 3000);
            }
        });

        // 下一題按鈕
        nextButton.addEventListener('click', () => {
            this.nextQuestion();
        });
    }

    startListening() {
        if (!this.recognition) return;

        // 防止重複啟動
        if (this.isListening) {
            console.log('語音識別已在運行中');
            return;
        }

        try {
            this.recognition.start();
            this.hideError();
            document.getElementById('transcript-box').style.display = 'none';
        } catch (error) {
            console.error('啟動語音識別失敗:', error);

            // 處理常見錯誤
            if (error.name === 'InvalidStateError' || error.message.includes('already started')) {
                this.showError('語音識別已在運行中，請稍候再試');
                // 強制重置狀態
                setTimeout(() => {
                    this.isListening = false;
                    this.updateMicButton();
                }, 1000);
            } else {
                this.showError(`啟動語音識別失敗: ${error.message || error}`);
            }
        }
    }

    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
        }
    }

    updateMicButton() {
        const button = document.getElementById('mic-button');
        if (this.isListening) {
            button.textContent = '🔴';
            button.classList.add('listening');
        } else {
            button.textContent = '🎤';
            button.classList.remove('listening');
        }
    }

    processVoiceInput(transcript) {
        console.log('處理語音輸入:', transcript);

        // 顯示識別結果
        document.getElementById('transcript-text').textContent = transcript;
        document.getElementById('transcript-box').style.display = 'block';

        // 轉換為數字
        const number = this.convertToNumber(transcript.trim());
        document.getElementById('answer-display').textContent =
            number !== null ? `答案: ${number}` : '無法識別數字';

        // 檢查答案
        if (number !== null) {
            this.checkAnswer(number, transcript);
        } else {
            // 識別失敗，記錄但不算答錯
            const responseTime = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;
            this.results.push({
                question: this.getCurrentQuestion(),
                expected: this.testQuestions[this.currentQuestionIndex].answer,
                transcript: transcript,
                recognized: null,
                correct: false,
                responseTime: responseTime,
                recognitionFailed: true
            });
            this.updateStats();
        }
    }

    convertToNumber(text) {
        console.log('轉換文字到數字:', text);

        // 移除空白和標點符號
        text = text.replace(/[，。！？\s]/g, '');

        // 直接是阿拉伯數字
        if (/^\d+$/.test(text)) {
            const num = parseInt(text);
            return num >= 0 && num <= 99 ? num : null;
        }

        // 中文數字對照表
        const chineseDigits = {
            '零': 0, '〇': 0,
            '一': 1, '壹': 1,
            '二': 2, '貳': 2, '兩': 2,
            '三': 3, '參': 3,
            '四': 4, '肆': 4,
            '五': 5, '伍': 5,
            '六': 6, '陸': 6,
            '七': 7, '柒': 7,
            '八': 8, '捌': 8,
            '九': 9, '玖': 9
        };

        const chineseUnits = {
            '十': 10, '拾': 10
        };

        // 處理特殊情況
        if (text === '十') return 10;
        if (text === '一十') return 10;

        // 處理 X十Y 格式 (如:二十三)
        const tenMatch = text.match(/^([一二三四五六七八九]?)十([零一二三四五六七八九]?)$/);
        if (tenMatch) {
            const tens = tenMatch[1] ? chineseDigits[tenMatch[1]] : 1;
            const ones = tenMatch[2] ? chineseDigits[tenMatch[2]] : 0;
            return tens * 10 + ones;
        }

        // 處理純個位數
        if (text.length === 1 && chineseDigits.hasOwnProperty(text)) {
            return chineseDigits[text];
        }

        // 處理英文數字（基本）
        const englishNumbers = {
            'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
            'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
            'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13,
            'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17,
            'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
            'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70,
            'eighty': 80, 'ninety': 90
        };

        const lowerText = text.toLowerCase();
        if (englishNumbers.hasOwnProperty(lowerText)) {
            return englishNumbers[lowerText];
        }

        // 無法識別
        console.log('無法轉換為數字:', text);
        return null;
    }

    checkAnswer(userAnswer, transcript) {
        const expectedAnswer = this.testQuestions[this.currentQuestionIndex].answer;
        const correct = userAnswer === expectedAnswer;
        const responseTime = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;

        // 記錄結果
        this.results.push({
            question: this.getCurrentQuestion(),
            expected: expectedAnswer,
            transcript: transcript,
            recognized: userAnswer,
            correct: correct,
            responseTime: responseTime,
            recognitionFailed: false
        });

        // 顯示結果
        const answerDisplay = document.getElementById('answer-display');
        if (correct) {
            answerDisplay.innerHTML = `<span style="color: green;">✓ 正確！答案是 ${userAnswer}</span>`;
        } else {
            answerDisplay.innerHTML = `<span style="color: red;">✗ 錯誤！你說的是 ${userAnswer}，正確答案是 ${expectedAnswer}</span>`;
        }

        this.updateResults();
        this.updateStats();

        // 顯示下一題按鈕
        document.getElementById('next-button').style.display = 'block';
    }

    getCurrentQuestion() {
        const q = this.testQuestions[this.currentQuestionIndex];
        return `${q.num1} × ${q.num2}`;
    }

    loadQuestion() {
        if (this.currentQuestionIndex < this.testQuestions.length) {
            const question = this.testQuestions[this.currentQuestionIndex];
            document.getElementById('question').textContent =
                `${question.num1} × ${question.num2} = ?`;
            document.getElementById('answer-display').textContent = '等待語音輸入...';
            document.getElementById('next-button').style.display = 'none';
            document.getElementById('transcript-box').style.display = 'none';
        } else {
            this.showFinalResults();
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    updateResults() {
        const resultsList = document.getElementById('results-list');
        resultsList.innerHTML = '';

        this.results.forEach((result, index) => {
            const div = document.createElement('div');
            div.className = 'result-item';

            const statusClass = result.recognitionFailed ? 'result-incorrect' :
                                result.correct ? 'result-correct' : 'result-incorrect';

            div.innerHTML = `
                <span>${result.question} = ${result.expected}</span>
                <span class="${statusClass}">
                    ${result.recognitionFailed ? '識別失敗' :
                      result.correct ? '✓' : `✗ (${result.recognized})`}
                    (${result.responseTime.toFixed(1)}s)
                </span>
            `;
            resultsList.appendChild(div);
        });
    }

    updateStats() {
        const totalTests = this.results.length;
        const successfulRecognitions = this.results.filter(r => !r.recognitionFailed).length;
        const correctAnswers = this.results.filter(r => r.correct).length;
        const totalTime = this.results.reduce((sum, r) => sum + r.responseTime, 0);

        document.getElementById('success-rate').textContent =
            totalTests > 0 ? `${Math.round(correctAnswers / totalTests * 100)}%` : '0%';

        document.getElementById('total-tests').textContent = totalTests;

        document.getElementById('avg-time').textContent =
            totalTests > 0 ? `${(totalTime / totalTests).toFixed(1)}s` : '0s';

        document.getElementById('accuracy').textContent =
            totalTests > 0 ? `${Math.round(successfulRecognitions / totalTests * 100)}%` : '0%';
    }

    showFinalResults() {
        document.getElementById('question').textContent = '測試完成！';
        document.getElementById('answer-display').textContent =
            `共完成 ${this.results.length} 道題目`;
        document.getElementById('mic-button').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';

        // 詳細統計
        const correctCount = this.results.filter(r => r.correct).length;
        const recognitionFailures = this.results.filter(r => r.recognitionFailed).length;
        const avgResponseTime = this.results.reduce((sum, r) => sum + r.responseTime, 0) / this.results.length;

        console.log('=== 最終測試結果 ===');
        console.log(`總題數: ${this.results.length}`);
        console.log(`答對題數: ${correctCount}`);
        console.log(`答錯題數: ${this.results.length - correctCount - recognitionFailures}`);
        console.log(`識別失敗: ${recognitionFailures}`);
        console.log(`平均反應時間: ${avgResponseTime.toFixed(2)}秒`);
        console.log(`正確率: ${(correctCount / this.results.length * 100).toFixed(1)}%`);
        console.log(`識別成功率: ${((this.results.length - recognitionFailures) / this.results.length * 100).toFixed(1)}%`);
    }

    showError(message) {
        const errorEl = document.getElementById('error-message');
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }

    hideError() {
        document.getElementById('error-message').style.display = 'none';
    }
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', () => {
    new VoiceTest();
});