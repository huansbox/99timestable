// 九九乘法表練習 - 完整題庫
// 包含2×2到9×9的所有組合，結果類型和因數類型各64題，共128題

const questions = [
    // === 結果類型題目：a × b = (?) ===
    
    // 2的乘法
    { id: 1, num1: 2, num2: 2, answer: 4, type: 'result' },
    { id: 2, num1: 2, num2: 3, answer: 6, type: 'result' },
    { id: 3, num1: 2, num2: 4, answer: 8, type: 'result' },
    { id: 4, num1: 2, num2: 5, answer: 10, type: 'result' },
    { id: 5, num1: 2, num2: 6, answer: 12, type: 'result' },
    { id: 6, num1: 2, num2: 7, answer: 14, type: 'result' },
    { id: 7, num1: 2, num2: 8, answer: 16, type: 'result' },
    { id: 8, num1: 2, num2: 9, answer: 18, type: 'result' },
    
    // 3的乘法
    { id: 9, num1: 3, num2: 2, answer: 6, type: 'result' },
    { id: 10, num1: 3, num2: 3, answer: 9, type: 'result' },
    { id: 11, num1: 3, num2: 4, answer: 12, type: 'result' },
    { id: 12, num1: 3, num2: 5, answer: 15, type: 'result' },
    { id: 13, num1: 3, num2: 6, answer: 18, type: 'result' },
    { id: 14, num1: 3, num2: 7, answer: 21, type: 'result' },
    { id: 15, num1: 3, num2: 8, answer: 24, type: 'result' },
    { id: 16, num1: 3, num2: 9, answer: 27, type: 'result' },
    
    // 4的乘法
    { id: 17, num1: 4, num2: 2, answer: 8, type: 'result' },
    { id: 18, num1: 4, num2: 3, answer: 12, type: 'result' },
    { id: 19, num1: 4, num2: 4, answer: 16, type: 'result' },
    { id: 20, num1: 4, num2: 5, answer: 20, type: 'result' },
    { id: 21, num1: 4, num2: 6, answer: 24, type: 'result' },
    { id: 22, num1: 4, num2: 7, answer: 28, type: 'result' },
    { id: 23, num1: 4, num2: 8, answer: 32, type: 'result' },
    { id: 24, num1: 4, num2: 9, answer: 36, type: 'result' },
    
    // 5的乘法
    { id: 25, num1: 5, num2: 2, answer: 10, type: 'result' },
    { id: 26, num1: 5, num2: 3, answer: 15, type: 'result' },
    { id: 27, num1: 5, num2: 4, answer: 20, type: 'result' },
    { id: 28, num1: 5, num2: 5, answer: 25, type: 'result' },
    { id: 29, num1: 5, num2: 6, answer: 30, type: 'result' },
    { id: 30, num1: 5, num2: 7, answer: 35, type: 'result' },
    { id: 31, num1: 5, num2: 8, answer: 40, type: 'result' },
    { id: 32, num1: 5, num2: 9, answer: 45, type: 'result' },
    
    // 6的乘法
    { id: 33, num1: 6, num2: 2, answer: 12, type: 'result' },
    { id: 34, num1: 6, num2: 3, answer: 18, type: 'result' },
    { id: 35, num1: 6, num2: 4, answer: 24, type: 'result' },
    { id: 36, num1: 6, num2: 5, answer: 30, type: 'result' },
    { id: 37, num1: 6, num2: 6, answer: 36, type: 'result' },
    { id: 38, num1: 6, num2: 7, answer: 42, type: 'result' },
    { id: 39, num1: 6, num2: 8, answer: 48, type: 'result' },
    { id: 40, num1: 6, num2: 9, answer: 54, type: 'result' },
    
    // 7的乘法
    { id: 41, num1: 7, num2: 2, answer: 14, type: 'result' },
    { id: 42, num1: 7, num2: 3, answer: 21, type: 'result' },
    { id: 43, num1: 7, num2: 4, answer: 28, type: 'result' },
    { id: 44, num1: 7, num2: 5, answer: 35, type: 'result' },
    { id: 45, num1: 7, num2: 6, answer: 42, type: 'result' },
    { id: 46, num1: 7, num2: 7, answer: 49, type: 'result' },
    { id: 47, num1: 7, num2: 8, answer: 56, type: 'result' },
    { id: 48, num1: 7, num2: 9, answer: 63, type: 'result' },
    
    // 8的乘法
    { id: 49, num1: 8, num2: 2, answer: 16, type: 'result' },
    { id: 50, num1: 8, num2: 3, answer: 24, type: 'result' },
    { id: 51, num1: 8, num2: 4, answer: 32, type: 'result' },
    { id: 52, num1: 8, num2: 5, answer: 40, type: 'result' },
    { id: 53, num1: 8, num2: 6, answer: 48, type: 'result' },
    { id: 54, num1: 8, num2: 7, answer: 56, type: 'result' },
    { id: 55, num1: 8, num2: 8, answer: 64, type: 'result' },
    { id: 56, num1: 8, num2: 9, answer: 72, type: 'result' },
    
    // 9的乘法
    { id: 57, num1: 9, num2: 2, answer: 18, type: 'result' },
    { id: 58, num1: 9, num2: 3, answer: 27, type: 'result' },
    { id: 59, num1: 9, num2: 4, answer: 36, type: 'result' },
    { id: 60, num1: 9, num2: 5, answer: 45, type: 'result' },
    { id: 61, num1: 9, num2: 6, answer: 54, type: 'result' },
    { id: 62, num1: 9, num2: 7, answer: 63, type: 'result' },
    { id: 63, num1: 9, num2: 8, answer: 72, type: 'result' },
    { id: 64, num1: 9, num2: 9, answer: 81, type: 'result' },
    
    // === 因數類型題目：a × (?) = result ===
    
    // 2的因數題
    { id: 65, num1: 2, num2: 2, answer: 2, type: 'factor', result: 4 },
    { id: 66, num1: 2, num2: 3, answer: 3, type: 'factor', result: 6 },
    { id: 67, num1: 2, num2: 4, answer: 4, type: 'factor', result: 8 },
    { id: 68, num1: 2, num2: 5, answer: 5, type: 'factor', result: 10 },
    { id: 69, num1: 2, num2: 6, answer: 6, type: 'factor', result: 12 },
    { id: 70, num1: 2, num2: 7, answer: 7, type: 'factor', result: 14 },
    { id: 71, num1: 2, num2: 8, answer: 8, type: 'factor', result: 16 },
    { id: 72, num1: 2, num2: 9, answer: 9, type: 'factor', result: 18 },
    
    // 3的因數題
    { id: 73, num1: 3, num2: 2, answer: 2, type: 'factor', result: 6 },
    { id: 74, num1: 3, num2: 3, answer: 3, type: 'factor', result: 9 },
    { id: 75, num1: 3, num2: 4, answer: 4, type: 'factor', result: 12 },
    { id: 76, num1: 3, num2: 5, answer: 5, type: 'factor', result: 15 },
    { id: 77, num1: 3, num2: 6, answer: 6, type: 'factor', result: 18 },
    { id: 78, num1: 3, num2: 7, answer: 7, type: 'factor', result: 21 },
    { id: 79, num1: 3, num2: 8, answer: 8, type: 'factor', result: 24 },
    { id: 80, num1: 3, num2: 9, answer: 9, type: 'factor', result: 27 },
    
    // 4的因數題
    { id: 81, num1: 4, num2: 2, answer: 2, type: 'factor', result: 8 },
    { id: 82, num1: 4, num2: 3, answer: 3, type: 'factor', result: 12 },
    { id: 83, num1: 4, num2: 4, answer: 4, type: 'factor', result: 16 },
    { id: 84, num1: 4, num2: 5, answer: 5, type: 'factor', result: 20 },
    { id: 85, num1: 4, num2: 6, answer: 6, type: 'factor', result: 24 },
    { id: 86, num1: 4, num2: 7, answer: 7, type: 'factor', result: 28 },
    { id: 87, num1: 4, num2: 8, answer: 8, type: 'factor', result: 32 },
    { id: 88, num1: 4, num2: 9, answer: 9, type: 'factor', result: 36 },
    
    // 5的因數題
    { id: 89, num1: 5, num2: 2, answer: 2, type: 'factor', result: 10 },
    { id: 90, num1: 5, num2: 3, answer: 3, type: 'factor', result: 15 },
    { id: 91, num1: 5, num2: 4, answer: 4, type: 'factor', result: 20 },
    { id: 92, num1: 5, num2: 5, answer: 5, type: 'factor', result: 25 },
    { id: 93, num1: 5, num2: 6, answer: 6, type: 'factor', result: 30 },
    { id: 94, num1: 5, num2: 7, answer: 7, type: 'factor', result: 35 },
    { id: 95, num1: 5, num2: 8, answer: 8, type: 'factor', result: 40 },
    { id: 96, num1: 5, num2: 9, answer: 9, type: 'factor', result: 45 },
    
    // 6的因數題
    { id: 97, num1: 6, num2: 2, answer: 2, type: 'factor', result: 12 },
    { id: 98, num1: 6, num2: 3, answer: 3, type: 'factor', result: 18 },
    { id: 99, num1: 6, num2: 4, answer: 4, type: 'factor', result: 24 },
    { id: 100, num1: 6, num2: 5, answer: 5, type: 'factor', result: 30 },
    { id: 101, num1: 6, num2: 6, answer: 6, type: 'factor', result: 36 },
    { id: 102, num1: 6, num2: 7, answer: 7, type: 'factor', result: 42 },
    { id: 103, num1: 6, num2: 8, answer: 8, type: 'factor', result: 48 },
    { id: 104, num1: 6, num2: 9, answer: 9, type: 'factor', result: 54 },
    
    // 7的因數題
    { id: 105, num1: 7, num2: 2, answer: 2, type: 'factor', result: 14 },
    { id: 106, num1: 7, num2: 3, answer: 3, type: 'factor', result: 21 },
    { id: 107, num1: 7, num2: 4, answer: 4, type: 'factor', result: 28 },
    { id: 108, num1: 7, num2: 5, answer: 5, type: 'factor', result: 35 },
    { id: 109, num1: 7, num2: 6, answer: 6, type: 'factor', result: 42 },
    { id: 110, num1: 7, num2: 7, answer: 7, type: 'factor', result: 49 },
    { id: 111, num1: 7, num2: 8, answer: 8, type: 'factor', result: 56 },
    { id: 112, num1: 7, num2: 9, answer: 9, type: 'factor', result: 63 },
    
    // 8的因數題
    { id: 113, num1: 8, num2: 2, answer: 2, type: 'factor', result: 16 },
    { id: 114, num1: 8, num2: 3, answer: 3, type: 'factor', result: 24 },
    { id: 115, num1: 8, num2: 4, answer: 4, type: 'factor', result: 32 },
    { id: 116, num1: 8, num2: 5, answer: 5, type: 'factor', result: 40 },
    { id: 117, num1: 8, num2: 6, answer: 6, type: 'factor', result: 48 },
    { id: 118, num1: 8, num2: 7, answer: 7, type: 'factor', result: 56 },
    { id: 119, num1: 8, num2: 8, answer: 8, type: 'factor', result: 64 },
    { id: 120, num1: 8, num2: 9, answer: 9, type: 'factor', result: 72 },
    
    // 9的因數題
    { id: 121, num1: 9, num2: 2, answer: 2, type: 'factor', result: 18 },
    { id: 122, num1: 9, num2: 3, answer: 3, type: 'factor', result: 27 },
    { id: 123, num1: 9, num2: 4, answer: 4, type: 'factor', result: 36 },
    { id: 124, num1: 9, num2: 5, answer: 5, type: 'factor', result: 45 },
    { id: 125, num1: 9, num2: 6, answer: 6, type: 'factor', result: 54 },
    { id: 126, num1: 9, num2: 7, answer: 7, type: 'factor', result: 63 },
    { id: 127, num1: 9, num2: 8, answer: 8, type: 'factor', result: 72 },
    { id: 128, num1: 9, num2: 9, answer: 9, type: 'factor', result: 81 }
]; // 完整題庫，不在這裡打亂，而是在選題時隨機選取

// 練習記錄管理類
class PracticeRecords {
    constructor() {
        this.storageKey = 'multiplication-practice-records';
        this.maxRecords = 20;
    }

    // 獲取所有記錄
    getRecords() {
        const records = localStorage.getItem(this.storageKey);
        return records ? JSON.parse(records) : [];
    }

    // 保存記錄
    saveRecord(record) {
        const records = this.getRecords();
        records.unshift(record); // 新記錄加在前面

        // 限制最多20筆記錄
        if (records.length > this.maxRecords) {
            records.splice(this.maxRecords);
        }

        localStorage.setItem(this.storageKey, JSON.stringify(records));
    }

    // 獲取相同題數的最近記錄（用於比較進步）
    getLastRecordWithSameQuestionCount(questionCount) {
        const records = this.getRecords();
        // 從後往前找，獲取最新的相同題數記錄
        for (let i = records.length - 1; i >= 0; i--) {
            if (records[i].questionCount === questionCount) {
                return records[i];
            }
        }
        return null;
    }

    // 格式化時間顯示
    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return minutes > 0 ? `${minutes}分${secs}秒` : `${secs}秒`;
    }

    // 格式化日期時間
    formatDateTime(date) {
        const d = new Date(date);
        return {
            date: `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`,
            time: `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
        };
    }
}

// 應用程式狀態
class MultiplicationApp {
    constructor() {
        this.currentQuestion = 0;
        this.startTime = null;
        this.attempts = 0;
        this.totalAttempts = 0;
        this.timerInterval = null;
        this.isProcessingAnswer = false; // 防止重複處理答案
        this.showTimer = true; // 是否顯示計時器
        this.questionCount = 10; // 題目數量
        this.currentQuestions = []; // 當前使用的題目
        this.practiceRecords = new PracticeRecords(); // 記錄管理
        this.initStartScreen();
    }

    initStartScreen() {
        const startBtn = document.getElementById('start-practice');
        const viewRecordsBtn = document.getElementById('view-records');
        const backFromRecordsBtn = document.getElementById('back-from-records');
        
        // 使用更強的事件綁定，包含觸控事件
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.startPractice();
        });
        
        viewRecordsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.showRecords();
        });
        
        // 返回按鈕使用多種事件類型確保在iPad上工作
        backFromRecordsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.backToStart();
        });
        
        backFromRecordsBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.backToStart();
        });
    }

    // 顯示歷史記錄頁面
    showRecords() {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('records-screen').style.display = 'flex';
        this.loadRecords();
    }

    // 返回開始頁面
    backToStart() {
        document.getElementById('records-screen').style.display = 'none';
        document.getElementById('start-screen').style.display = 'flex';
    }

    // 載入記錄列表
    loadRecords() {
        const records = this.practiceRecords.getRecords();
        const recordsList = document.getElementById('records-list');
        
        if (records.length === 0) {
            recordsList.innerHTML = '<div class="no-records">還沒有練習記錄，開始第一次練習吧！</div>';
            return;
        }
        
        const recordsHTML = records.slice(0, 10).map(record => {
            const { date, time } = this.practiceRecords.formatDateTime(record.date + ' ' + record.startTime);
            return `
                <div class="record-item">
                    <div class="record-info">
                        <div class="record-datetime">${date} ${record.startTime}</div>
                        <div class="record-details">${record.questionCount}題</div>
                    </div>
                    <div class="record-time">${this.practiceRecords.formatTime(record.totalTime)}</div>
                </div>
            `;
        }).join('');
        
        recordsList.innerHTML = recordsHTML;
    }

    // 從完整題庫中隨機選取指定數量的題目
    getRandomQuestions(count) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    startPractice() {
        // 獲取設定
        this.showTimer = document.getElementById('show-timer').checked;
        const questionCountRadio = document.querySelector('input[name="question-count"]:checked');
        this.questionCount = parseInt(questionCountRadio.value);

        // 從完整題庫中隨機選取指定數量的題目
        this.currentQuestions = this.getRandomQuestions(this.questionCount);

        // 隱藏開始頁面，顯示練習頁面
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('practice-screen').style.display = 'block';

        // 根據設定顯示或隱藏計時器
        const timerContainer = document.querySelector('.timer-container');
        if (timerContainer) {
            timerContainer.style.display = this.showTimer ? 'flex' : 'none';
        }

        this.init();
    }

    init() {
        this.startTime = Date.now();
        if (this.showTimer) {
            this.startTimer();
        }
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
                // 依裝置類型設定不同延遲時間
                const delay = this.isDesktop 
                    ? (currentValue.length === 1 ? 600 : 300)  // 桌面：1位數600ms，2位數300ms
                    : (currentValue.length === 1 ? 800 : 400); // 觸控：1位數800ms，2位數400ms
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
                        // 觸控裝置延遲時間（虛擬鍵盤專用）
                        const delay = currentValue.length === 1 ? 800 : 400;
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
        const question = this.currentQuestions[this.currentQuestion];
        const questionEl = document.getElementById('question');
        const progressEl = document.getElementById('progress');
        const progressFillEl = document.getElementById('progress-fill');
        const answerInput = document.getElementById('answer-input');

        // 更新進度
        progressEl.textContent = `第 ${this.currentQuestion + 1} 題 / 共 ${this.currentQuestions.length} 題`;
        
        // 更新進度條
        const progressPercent = ((this.currentQuestion + 1) / this.currentQuestions.length) * 100;
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
        const correctAnswer = this.currentQuestions[this.currentQuestion].answer;

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
        
        if (this.currentQuestion >= this.currentQuestions.length) {
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
        const averageTime = Math.round(completionTime / this.questionCount * 10) / 10;
        
        // 保存練習記錄
        const now = new Date();
        const record = {
            id: now.getTime(),
            date: now.toISOString().split('T')[0],
            startTime: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
            questionCount: this.questionCount,
            totalTime: completionTime,
            averageTimePerQuestion: averageTime
        };
        this.practiceRecords.saveRecord(record);
        
        // 獲取進步指標
        const lastRecord = this.practiceRecords.getLastRecordWithSameQuestionCount(this.questionCount);
        let progressText = '';
        if (lastRecord && lastRecord.id !== record.id) {
            const timeDiff = lastRecord.totalTime - completionTime;
            if (timeDiff > 0) {
                progressText = `<div class="progress-indicator">📈 比上次快了${timeDiff}秒！ ⭐</div>`;
            } else if (timeDiff < 0) {
                progressText = `<div class="progress-indicator">📈 比上次慢了${Math.abs(timeDiff)}秒，下次再加油！</div>`;
            } else {
                progressText = `<div class="progress-indicator">📈 和上次時間相同！</div>`;
            }
        } else {
            progressText = `<div class="progress-indicator">🎊 第一次練習${this.questionCount}題，加油！</div>`;
        }
        
        const appEl = document.getElementById('app');
        appEl.innerHTML = `
            <div class="completion">
                <h1>🎉 恭喜完成！</h1>
                <div class="completion-stats">
                    <p>總共花費時間：<strong>${minutes > 0 ? minutes + '分' : ''}${seconds}秒</strong></p>
                    ${progressText}
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