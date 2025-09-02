// 九九乘法表練習 - 題目數據和邏輯
// 基於LaTeX版本的50道題目

const questions = [
    // 第一欄（1-16題）
    { id: 1, num1: 9, num2: 3, answer: 27, type: 'result' },      // 9 × 3 = (?)
    { id: 2, num1: 7, num2: 2, answer: 14, type: 'result' },      // 7 × 2 = (?)
    { id: 3, num1: 8, num2: 4, answer: 32, type: 'result' },      // 8 × 4 = (?)
    { id: 4, num1: 6, num2: 3, answer: 18, type: 'result' },      // 6 × 3 = (?)
    { id: 5, num1: 4, num2: 4, answer: 16, type: 'result' },      // 4 × 4 = (?)
    { id: 6, num1: 9, num2: 4, answer: 4, type: 'factor', result: 36 },       // 9 × (?) = 36
    { id: 7, num1: 6, num2: 7, answer: 42, type: 'result' },      // 6 × 7 = (?)
    { id: 8, num1: 7, num2: 8, answer: 56, type: 'result' },      // 7 × 8 = (?)
    { id: 9, num1: 8, num2: 9, answer: 72, type: 'result' },      // 8 × 9 = (?)
    { id: 10, num1: 5, num2: 4, answer: 20, type: 'result' },     // 5 × 4 = (?)
    { id: 11, num1: 9, num2: 7, answer: 63, type: 'result' },     // 9 × 7 = (?)
    { id: 12, num1: 4, num2: 7, answer: 7, type: 'factor', result: 28 },      // 4 × (?) = 28
    { id: 13, num1: 8, num2: 3, answer: 24, type: 'result' },     // 8 × 3 = (?)
    { id: 14, num1: 2, num2: 9, answer: 9, type: 'factor', result: 18 },      // 2 × (?) = 18
    { id: 15, num1: 7, num2: 5, answer: 35, type: 'result' },     // 7 × 5 = (?)
    { id: 16, num1: 9, num2: 8, answer: 8, type: 'factor', result: 72 },      // 9 × (?) = 72

    // 第二欄（17-33題）
    { id: 17, num1: 6, num2: 5, answer: 30, type: 'result' },     // 6 × 5 = (?)
    { id: 18, num1: 8, num2: 5, answer: 5, type: 'factor', result: 40 },      // 8 × (?) = 40
    { id: 19, num1: 7, num2: 9, answer: 63, type: 'result' },     // 7 × 9 = (?)
    { id: 20, num1: 6, num2: 8, answer: 48, type: 'result' },     // 6 × 8 = (?)
    { id: 21, num1: 9, num2: 4, answer: 36, type: 'result' },     // 9 × 4 = (?)
    { id: 22, num1: 5, num2: 3, answer: 15, type: 'result' },     // 5 × 3 = (?)
    { id: 23, num1: 8, num2: 8, answer: 64, type: 'result' },     // 8 × 8 = (?)
    { id: 24, num1: 3, num2: 8, answer: 8, type: 'factor', result: 24 },      // 3 × (?) = 24
    { id: 25, num1: 8, num2: 4, answer: 4, type: 'factor', result: 32 },      // 8 × (?) = 32
    { id: 26, num1: 9, num2: 6, answer: 54, type: 'result' },     // 9 × 6 = (?)
    { id: 27, num1: 4, num2: 3, answer: 12, type: 'result' },     // 4 × 3 = (?)
    { id: 28, num1: 7, num2: 7, answer: 49, type: 'result' },     // 7 × 7 = (?)
    { id: 29, num1: 8, num2: 6, answer: 48, type: 'result' },     // 8 × 6 = (?)
    { id: 30, num1: 5, num2: 9, answer: 9, type: 'factor', result: 45 },      // 5 × (?) = 45
    { id: 31, num1: 9, num2: 9, answer: 81, type: 'result' },     // 9 × 9 = (?)
    { id: 32, num1: 5, num2: 2, answer: 10, type: 'result' },     // 5 × 2 = (?)
    { id: 33, num1: 8, num2: 2, answer: 16, type: 'result' },     // 8 × 2 = (?)

    // 第三欄（34-50題）
    { id: 34, num1: 6, num2: 6, answer: 36, type: 'result' },     // 6 × 6 = (?)
    { id: 35, num1: 7, num2: 7, answer: 7, type: 'factor', result: 49 },      // 7 × (?) = 49
    { id: 36, num1: 9, num2: 3, answer: 3, type: 'factor', result: 27 },      // 9 × (?) = 27
    { id: 37, num1: 7, num2: 4, answer: 28, type: 'result' },     // 7 × 4 = (?)
    { id: 38, num1: 7, num2: 6, answer: 42, type: 'result' },     // 7 × 6 = (?)
    { id: 39, num1: 6, num2: 4, answer: 24, type: 'result' },     // 6 × 4 = (?)
    { id: 40, num1: 9, num2: 5, answer: 45, type: 'result' },     // 9 × 5 = (?)
    { id: 41, num1: 5, num2: 5, answer: 25, type: 'result' },     // 5 × 5 = (?)
    { id: 42, num1: 6, num2: 9, answer: 54, type: 'result' },     // 6 × 9 = (?)
    { id: 43, num1: 8, num2: 7, answer: 56, type: 'result' },     // 8 × 7 = (?)
    { id: 44, num1: 9, num2: 8, answer: 72, type: 'result' },     // 9 × 8 = (?)
    { id: 45, num1: 4, num2: 2, answer: 8, type: 'result' },      // 4 × 2 = (?)
    { id: 46, num1: 8, num2: 7, answer: 7, type: 'factor', result: 56 },      // 8 × (?) = 56
    { id: 47, num1: 6, num2: 2, answer: 12, type: 'result' },     // 6 × 2 = (?)
    { id: 48, num1: 9, num2: 2, answer: 18, type: 'result' },     // 9 × 2 = (?)
    { id: 49, num1: 7, num2: 3, answer: 21, type: 'result' },     // 7 × 3 = (?)
    { id: 50, num1: 8, num2: 5, answer: 40, type: 'result' }      // 8 × 5 = (?)
];

// 應用程式狀態
class MultiplicationApp {
    constructor() {
        this.currentQuestion = 0;
        this.startTime = null;
        this.attempts = 0;
        this.totalAttempts = 0;
        this.timerInterval = null;
        this.isProcessingAnswer = false; // 防止重複處理答案
        this.init();
    }

    init() {
        this.startTime = Date.now();
        this.startTimer();
        this.showQuestion();
        this.setupEventListeners();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        const timerEl = document.getElementById('timer');
        timerEl.textContent = `${minutes} 分 ${seconds} 秒`;
    }

    setupEventListeners() {
        const answerInput = document.getElementById('answer-input');
        const submitBtn = document.getElementById('submit-btn');
        const numberPad = document.getElementById('number-pad');
        const exitBtn = document.getElementById('exit-btn');

        // 檢測裝置類型 - 桌面版需要大螢幕且有精確游標（排除觸控裝置）
        this.isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
        
        // 只有桌面版才啟用輸入框，其他裝置完全使用虛擬鍵盤
        if (this.isDesktop) {
            answerInput.removeAttribute('readonly');
            answerInput.removeAttribute('inputmode');
        } else {
            // 確保iPad和手機完全不會彈出系統鍵盤
            answerInput.setAttribute('readonly', true);
            answerInput.setAttribute('inputmode', 'none');
            answerInput.addEventListener('focus', (e) => {
                e.preventDefault();
                e.target.blur();
            });
        }

        // 提交答案
        submitBtn.addEventListener('click', () => this.checkAnswer());
        
        // 退出按鈕
        exitBtn.addEventListener('click', () => this.handleExit());
        
        // Enter鍵提交
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.checkAnswer();
            }
        });

        // 桌面版和所有裝置的input自動檢查（有防護機制）
        answerInput.addEventListener('input', (e) => {
            const currentValue = e.target.value;
            // 當輸入2位數或1位數時，延遲自動檢查
            if (currentValue.length >= 1 && !isNaN(parseInt(currentValue)) && !this.isProcessingAnswer) {
                const delay = currentValue.length === 1 ? 600 : 300; // 1位數600ms，2位數300ms
                setTimeout(() => {
                    // 再次檢查是否還在處理中，以及輸入值是否改變
                    if (!this.isProcessingAnswer && answerInput.value === currentValue) {
                        this.checkAnswer();
                    }
                }, delay);
            }
        });

        // 桌面版額外鍵盤支援
        if (this.isDesktop) {
            document.addEventListener('keydown', (e) => {
                // 數字鍵輸入
                if (e.key >= '0' && e.key <= '9' && !answerInput.contains(document.activeElement)) {
                    answerInput.focus();
                    answerInput.value = e.key;
                }
                
                // 空格鍵也可以確認答案
                if (e.key === ' ') {
                    e.preventDefault();
                    this.checkAnswer();
                }
                
                // ESC鍵清空輸入
                if (e.key === 'Escape') {
                    answerInput.value = '';
                    answerInput.focus();
                }
            });

            // 桌面版自動聚焦
            answerInput.focus();
        }

        // 虛擬數字鍵盤（所有非桌面裝置）
        if (numberPad) {
            numberPad.addEventListener('click', (e) => {
                if (e.target.classList.contains('number-btn')) {
                    const digit = e.target.textContent;
                    if (digit === 'C') {
                        answerInput.value = '';
                    } else if (digit === '⌫') {
                        answerInput.value = answerInput.value.slice(0, -1);
                    } else {
                        // 只允許輸入數字，限制最大2位數
                        if (answerInput.value.length < 2 && !isNaN(digit)) {
                            answerInput.value += digit;
                        }
                    }
                    
                    // 恢復自動檢查功能，但有防護機制
                    const currentValue = answerInput.value;
                    if (currentValue.length > 0 && !isNaN(parseInt(currentValue)) && !this.isProcessingAnswer) {
                        const delay = currentValue.length === 1 ? 600 : 300; // 與鍵盤輸入相同時間
                        setTimeout(() => {
                            // 再次檢查是否還在處理中，以及輸入值是否改變
                            if (!this.isProcessingAnswer && answerInput.value === currentValue) {
                                this.checkAnswer();
                            }
                        }, delay);
                    }
                }
            });
        }

        // 監聽視窗大小變化
        window.addEventListener('resize', () => {
            this.isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
            
            if (this.isDesktop) {
                answerInput.removeAttribute('readonly');
                answerInput.removeAttribute('inputmode');
                answerInput.focus();
            } else {
                // 非桌面裝置確保只使用虛擬鍵盤
                answerInput.setAttribute('readonly', true);
                answerInput.setAttribute('inputmode', 'none');
            }
        });
    }

    showQuestion() {
        const question = questions[this.currentQuestion];
        const questionEl = document.getElementById('question');
        const progressEl = document.getElementById('progress');
        const progressFillEl = document.getElementById('progress-fill');
        const answerInput = document.getElementById('answer-input');

        // 更新進度
        progressEl.textContent = `第 ${this.currentQuestion + 1} 題 / 共 50 題`;
        
        // 更新進度條
        const progressPercent = ((this.currentQuestion + 1) / questions.length) * 100;
        progressFillEl.style.width = `${progressPercent}%`;

        // 顯示題目
        if (question.type === 'result') {
            questionEl.innerHTML = `${question.num1} × ${question.num2} = <span class="answer-blank">(?)</span>`;
        } else {
            // factor type - 求missing factor
            questionEl.innerHTML = `${question.num1} × <span class="answer-blank">(?)</span> = ${question.result}`;
        }

        // 清空輸入框
        answerInput.value = '';
        
        // 桌面版自動聚焦
        if (this.isDesktop) {
            answerInput.focus();
        }
        
        this.attempts = 0;
        
        // 重置處理狀態
        this.isProcessingAnswer = false;

        // 重置樣式
        this.resetFeedback();
    }

    checkAnswer() {
        // 防止重複處理答案
        if (this.isProcessingAnswer) {
            return;
        }

        const answerInput = document.getElementById('answer-input');
        const userAnswer = parseInt(answerInput.value);
        const correctAnswer = questions[this.currentQuestion].answer;

        // 如果輸入為空或非數字，不進行處理
        if (isNaN(userAnswer) || answerInput.value.trim() === '') {
            return;
        }

        this.isProcessingAnswer = true; // 設置處理標誌
        this.attempts++;
        this.totalAttempts++;

        if (userAnswer === correctAnswer) {
            this.showCorrectFeedback();
            // 所有裝置都在1.2秒後自動進入下一題
            setTimeout(() => {
                this.nextQuestion();
                this.isProcessingAnswer = false; // 完成後重置標誌
            }, 1200);
        } else {
            this.showIncorrectFeedback();
            answerInput.value = ''; // 清空錯誤答案
            this.isProcessingAnswer = false; // 錯誤答案立即重置標誌
        }
    }

    showCorrectFeedback() {
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = '太棒了！ ✓';
        feedbackEl.className = 'feedback correct';
    }

    showIncorrectFeedback() {
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = '再試一次！';
        feedbackEl.className = 'feedback incorrect';
        
        // 1秒後清除錯誤提示
        setTimeout(() => {
            this.resetFeedback();
        }, 1000);
    }

    resetFeedback() {
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = '';
        feedbackEl.className = 'feedback';
    }

    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion >= questions.length) {
            this.showCompletion();
        } else {
            this.showQuestion();
        }
    }

    showCompletion() {
        // 停止計時器
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        const completionTime = Math.round((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(completionTime / 60);
        const seconds = completionTime % 60;
        
        const appEl = document.getElementById('app');
        appEl.innerHTML = `
            <div class="completion">
                <h1>🎉 恭喜完成！</h1>
                <div class="completion-stats">
                    <p>總共花費時間：<strong>${minutes} 分 ${seconds} 秒</strong></p>
                    <p>總嘗試次數：<strong>${this.totalAttempts}</strong></p>
                    <p>平均每題：<strong>${(this.totalAttempts / questions.length).toFixed(1)}</strong> 次</p>
                </div>
                <button onclick="location.reload()" class="restart-btn">重新練習</button>
            </div>
        `;
    }

    handleExit() {
        // 停止計時器
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // 詢問確認
        const confirmed = confirm('確定要退出練習嗎？目前的進度將會遺失。');
        
        if (confirmed) {
            // 檢查是否為PWA模式或全螢幕模式
            if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
                // PWA模式：顯示退出提示
                const appEl = document.getElementById('app');
                appEl.innerHTML = `
                    <div class="completion">
                        <h1>👋 練習已退出</h1>
                        <p style="margin: var(--spacing-l) 0;">感謝使用九九乘法表練習！</p>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">
                            請手動關閉此應用程式或返回主畫面
                        </p>
                        <button onclick="location.reload()" class="restart-btn" style="margin-top: var(--spacing-l);">
                            重新開始
                        </button>
                    </div>
                `;
            } else {
                // 瀏覽器模式：嘗試關閉視窗或重新載入
                try {
                    window.close();
                } catch(e) {
                    // 無法關閉視窗，回到重新開始
                    location.reload();
                }
            }
        } else {
            // 用戶取消，重新啟動計時器
            this.startTimer();
        }
    }
}

// 等DOM載入完成後啟動應用程式
document.addEventListener('DOMContentLoaded', () => {
    new MultiplicationApp();
});