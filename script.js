// 九九乘法表練習 - 完整題庫
// 包含2×2到9×9的所有組合，結果類型和因數類型各64題，共128題

// 解決iOS Safari vh跳動問題
function setVhVariable() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 頁面載入時執行一次
setVhVariable();

// 當視窗大小改變時再次執行
window.addEventListener('resize', setVhVariable);

const questions = [
    // === 結果類型題目：a × b = (?) ===
    
    // 2的乘法
    { id: 1, num1: 2, num2: 2, answer: 4, type: 'result', difficulty: 'easy' },
    { id: 2, num1: 2, num2: 3, answer: 6, type: 'result', difficulty: 'easy' },
    { id: 3, num1: 2, num2: 4, answer: 8, type: 'result', difficulty: 'easy' },
    { id: 4, num1: 2, num2: 5, answer: 10, type: 'result', difficulty: 'easy' },
    { id: 5, num1: 2, num2: 6, answer: 12, type: 'result', difficulty: 'easy' },
    { id: 6, num1: 2, num2: 7, answer: 14, type: 'result', difficulty: 'easy' },
    { id: 7, num1: 2, num2: 8, answer: 16, type: 'result', difficulty: 'easy' },
    { id: 8, num1: 2, num2: 9, answer: 18, type: 'result', difficulty: 'easy' },
    
    // 3的乘法
    { id: 9, num1: 3, num2: 2, answer: 6, type: 'result', difficulty: 'easy' },
    { id: 10, num1: 3, num2: 3, answer: 9, type: 'result', difficulty: 'easy' },
    { id: 11, num1: 3, num2: 4, answer: 12, type: 'result', difficulty: 'hard' },
    { id: 12, num1: 3, num2: 5, answer: 15, type: 'result', difficulty: 'hard' },
    { id: 13, num1: 3, num2: 6, answer: 18, type: 'result', difficulty: 'hard' },
    { id: 14, num1: 3, num2: 7, answer: 21, type: 'result', difficulty: 'hard' },
    { id: 15, num1: 3, num2: 8, answer: 24, type: 'result', difficulty: 'hard' },
    { id: 16, num1: 3, num2: 9, answer: 27, type: 'result', difficulty: 'hard' },
    
    // 4的乘法
    { id: 17, num1: 4, num2: 2, answer: 8, type: 'result', difficulty: 'easy' },
    { id: 18, num1: 4, num2: 3, answer: 12, type: 'result', difficulty: 'hard' },
    { id: 19, num1: 4, num2: 4, answer: 16, type: 'result', difficulty: 'hard' },
    { id: 20, num1: 4, num2: 5, answer: 20, type: 'result', difficulty: 'hard' },
    { id: 21, num1: 4, num2: 6, answer: 24, type: 'result', difficulty: 'hard' },
    { id: 22, num1: 4, num2: 7, answer: 28, type: 'result', difficulty: 'hard' },
    { id: 23, num1: 4, num2: 8, answer: 32, type: 'result', difficulty: 'hard' },
    { id: 24, num1: 4, num2: 9, answer: 36, type: 'result', difficulty: 'hard' },
    
    // 5的乘法
    { id: 25, num1: 5, num2: 2, answer: 10, type: 'result', difficulty: 'easy' },
    { id: 26, num1: 5, num2: 3, answer: 15, type: 'result', difficulty: 'hard' },
    { id: 27, num1: 5, num2: 4, answer: 20, type: 'result', difficulty: 'hard' },
    { id: 28, num1: 5, num2: 5, answer: 25, type: 'result', difficulty: 'hard' },
    { id: 29, num1: 5, num2: 6, answer: 30, type: 'result', difficulty: 'hard' },
    { id: 30, num1: 5, num2: 7, answer: 35, type: 'result', difficulty: 'hard' },
    { id: 31, num1: 5, num2: 8, answer: 40, type: 'result', difficulty: 'hard' },
    { id: 32, num1: 5, num2: 9, answer: 45, type: 'result', difficulty: 'hard' },
    
    // 6的乘法
    { id: 33, num1: 6, num2: 2, answer: 12, type: 'result', difficulty: 'easy' },
    { id: 34, num1: 6, num2: 3, answer: 18, type: 'result', difficulty: 'hard' },
    { id: 35, num1: 6, num2: 4, answer: 24, type: 'result', difficulty: 'hard' },
    { id: 36, num1: 6, num2: 5, answer: 30, type: 'result', difficulty: 'hard' },
    { id: 37, num1: 6, num2: 6, answer: 36, type: 'result', difficulty: 'hard' },
    { id: 38, num1: 6, num2: 7, answer: 42, type: 'result', difficulty: 'hard' },
    { id: 39, num1: 6, num2: 8, answer: 48, type: 'result', difficulty: 'hard' },
    { id: 40, num1: 6, num2: 9, answer: 54, type: 'result', difficulty: 'hard' },
    
    // 7的乘法
    { id: 41, num1: 7, num2: 2, answer: 14, type: 'result', difficulty: 'easy' },
    { id: 42, num1: 7, num2: 3, answer: 21, type: 'result', difficulty: 'hard' },
    { id: 43, num1: 7, num2: 4, answer: 28, type: 'result', difficulty: 'hard' },
    { id: 44, num1: 7, num2: 5, answer: 35, type: 'result', difficulty: 'hard' },
    { id: 45, num1: 7, num2: 6, answer: 42, type: 'result', difficulty: 'hard' },
    { id: 46, num1: 7, num2: 7, answer: 49, type: 'result', difficulty: 'hard' },
    { id: 47, num1: 7, num2: 8, answer: 56, type: 'result', difficulty: 'hard' },
    { id: 48, num1: 7, num2: 9, answer: 63, type: 'result', difficulty: 'hard' },
    
    // 8的乘法
    { id: 49, num1: 8, num2: 2, answer: 16, type: 'result', difficulty: 'easy' },
    { id: 50, num1: 8, num2: 3, answer: 24, type: 'result', difficulty: 'hard' },
    { id: 51, num1: 8, num2: 4, answer: 32, type: 'result', difficulty: 'hard' },
    { id: 52, num1: 8, num2: 5, answer: 40, type: 'result', difficulty: 'hard' },
    { id: 53, num1: 8, num2: 6, answer: 48, type: 'result', difficulty: 'hard' },
    { id: 54, num1: 8, num2: 7, answer: 56, type: 'result', difficulty: 'hard' },
    { id: 55, num1: 8, num2: 8, answer: 64, type: 'result', difficulty: 'hard' },
    { id: 56, num1: 8, num2: 9, answer: 72, type: 'result', difficulty: 'hard' },
    
    // 9的乘法
    { id: 57, num1: 9, num2: 2, answer: 18, type: 'result', difficulty: 'easy' },
    { id: 58, num1: 9, num2: 3, answer: 27, type: 'result', difficulty: 'hard' },
    { id: 59, num1: 9, num2: 4, answer: 36, type: 'result', difficulty: 'hard' },
    { id: 60, num1: 9, num2: 5, answer: 45, type: 'result', difficulty: 'hard' },
    { id: 61, num1: 9, num2: 6, answer: 54, type: 'result', difficulty: 'hard' },
    { id: 62, num1: 9, num2: 7, answer: 63, type: 'result', difficulty: 'hard' },
    { id: 63, num1: 9, num2: 8, answer: 72, type: 'result', difficulty: 'hard' },
    { id: 64, num1: 9, num2: 9, answer: 81, type: 'result', difficulty: 'hard' },
    
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

        // 限制最多20筆記錄，但保護前10名記錄
        if (records.length > this.maxRecords) {
            this.protectTopRecords(records);
        }

        localStorage.setItem(this.storageKey, JSON.stringify(records));
    }

    // 保護前10名記錄不被刪除
    protectTopRecords(records) {
        // 按題數分組，每組保護前10名
        const topRecordsByQuestionCount = {};
        
        records.forEach(record => {
            const count = record.questionCount;
            if (!topRecordsByQuestionCount[count]) {
                topRecordsByQuestionCount[count] = [];
            }
            topRecordsByQuestionCount[count].push(record);
        });
        
        // 每組按時間排序，保護前10名
        const protectedRecords = [];
        const otherRecords = [];
        
        Object.values(topRecordsByQuestionCount).forEach(groupRecords => {
            // 按時間排序
            groupRecords.sort((a, b) => a.totalTime - b.totalTime);
            
            // 前10名為保護記錄
            const top10 = groupRecords.slice(0, 10);
            const others = groupRecords.slice(10);
            
            protectedRecords.push(...top10);
            otherRecords.push(...others);
        });
        
        // 從其他記錄中刪除多餘的記錄
        const availableSlots = this.maxRecords - protectedRecords.length;
        if (otherRecords.length > availableSlots) {
            // 按日期排序，保留最新的記錄
            otherRecords.sort((a, b) => new Date(b.date + ' ' + b.startTime) - new Date(a.date + ' ' + a.startTime));
            otherRecords.splice(availableSlots);
        }
        
        // 重新組合：保護記錄 + 其他記錄
        records.length = 0;
        records.push(...protectedRecords, ...otherRecords);
    }

    // 獲取特定題數的最快記錄
    getFastestRecord(questionCount) {
        const records = this.getRecords();
        const sameCountRecords = records.filter(record => record.questionCount === questionCount);
        
        if (sameCountRecords.length === 0) return null;
        
        return sameCountRecords.reduce((fastest, current) => 
            current.totalTime < fastest.totalTime ? current : fastest
        );
    }

    // 獲取特定記錄在同題數中的排名
    getRecordRank(record) {
        const records = this.getRecords();
        const sameCountRecords = records.filter(r => r.questionCount === record.questionCount);
        
        if (sameCountRecords.length === 0) return null;
        
        // 按時間排序
        const sortedRecords = sameCountRecords.sort((a, b) => a.totalTime - b.totalTime);
        
        // 找到當前記錄的排名
        const rank = sortedRecords.findIndex(r => r.id === record.id) + 1;
        
        return rank > 0 ? rank : null;
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
        this.audioContext = null; // Web Audio API context
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

        // 練習模式子選單邏輯
        this.setupPracticeModeOptions();

        // 切換選項卡事件處理
        this.setupLeaderboardTabs();
    }

    // 設定排行榜選項卡
    setupLeaderboardTabs() {
        const tabs = document.querySelectorAll('.leaderboard-tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const questionCount = parseInt(tab.dataset.questions);
                this.switchLeaderboard(questionCount);
            });
            
            // iPad觸控支援
            tab.addEventListener('touchend', (e) => {
                e.preventDefault();
                const questionCount = parseInt(tab.dataset.questions);
                this.switchLeaderboard(questionCount);
            });
        });
    }

    // 設定練習模式選項邏輯
    setupPracticeModeOptions() {
        const questionCountRadios = document.querySelectorAll('input[name="question-count"]');
        const practiceTypeRadios = document.querySelectorAll('input[name="practice-type"]');
        const practiceOptions = document.getElementById('practice-mode-options');
        const numberSelection = document.getElementById('number-selection');

        // 監聽題目數量選擇變化
        questionCountRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.value === 'practice') {
                    practiceOptions.style.display = 'block';
                } else {
                    practiceOptions.style.display = 'none';
                }
            });
        });

        // 監聽練習類型選擇變化
        practiceTypeRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.value === 'multiplicand' || radio.value === 'multiplier') {
                    numberSelection.style.display = 'block';
                } else {
                    numberSelection.style.display = 'none';
                }
            });
        });
    }

    // 切換排行榜顯示
    switchLeaderboard(questionCount) {
        // 更新選項卡狀態
        document.querySelectorAll('.leaderboard-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-questions="${questionCount}"]`).classList.add('active');
        
        // 載入對應題數的記錄
        this.loadLeaderboard(questionCount);
    }

    // 顯示歷史記錄頁面
    showRecords() {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('records-screen').style.display = 'flex';
        // 預設顯示10題排行榜
        this.loadLeaderboard(10);
    }

    // 返回開始頁面
    backToStart() {
        document.getElementById('records-screen').style.display = 'none';
        document.getElementById('start-screen').style.display = 'flex';
    }

    // 載入排行榜（按題數分組顯示前10名）
    loadLeaderboard(questionCount) {
        const records = this.practiceRecords.getRecords();
        const recordsList = document.getElementById('records-list');
        
        // 過濾出指定題數的記錄
        const filteredRecords = records.filter(record => record.questionCount === questionCount);
        
        if (filteredRecords.length === 0) {
            recordsList.innerHTML = `<div class="no-records">還沒有${questionCount}題的練習記錄，開始第一次練習吧！</div>`;
            return;
        }
        
        // 按時間排序（最快到最慢）並取前10名
        const topRecords = filteredRecords
            .sort((a, b) => a.totalTime - b.totalTime)
            .slice(0, 10);
        
        const recordsHTML = topRecords.map((record, index) => {
            const rank = index + 1;
            const { date, time } = this.practiceRecords.formatDateTime(record.date + ' ' + record.startTime);
            
            // 獲取排名圖標
            let rankIcon = '';
            let rankClass = '';
            if (rank === 1) {
                rankIcon = '🏆';
                rankClass = 'rank-1';
            } else if (rank === 2) {
                rankIcon = '🥈';
                rankClass = 'rank-2';
            } else if (rank === 3) {
                rankIcon = '🥉';
                rankClass = 'rank-3';
            }
            
            return `
                <div class="leaderboard-item ${rankClass}" data-rank="${rank}">
                    <div class="rank-section">
                        <div class="rank-number">${rank}</div>
                        ${rankIcon ? `<div class="rank-icon">${rankIcon}</div>` : ''}
                    </div>
                    <div class="record-info">
                        <div class="record-datetime">${date} ${record.startTime}</div>
                    </div>
                    <div class="record-time">
                        ${this.practiceRecords.formatTime(record.totalTime)}
                        <div class="time-detail">${(record.averageTimePerQuestion).toFixed(1)}秒/題</div>
                    </div>
                </div>
            `;
        }).join('');
        
        recordsList.innerHTML = recordsHTML;
    }

    // 載入記錄列表（保留舊方法，但不再使用）
    loadRecords() {
        const records = this.practiceRecords.getRecords();
        const recordsList = document.getElementById('records-list');
        
        if (records.length === 0) {
            recordsList.innerHTML = '<div class="no-records">還沒有練習記錄，開始第一次練習吧！</div>';
            return;
        }
        
        // 按題數分組並找出每組最快記錄
        const fastestByQuestionCount = {};
        records.forEach(record => {
            const count = record.questionCount;
            if (!fastestByQuestionCount[count] || record.totalTime < fastestByQuestionCount[count].totalTime) {
                fastestByQuestionCount[count] = record;
            }
        });
        
        const fastestRecords = Object.values(fastestByQuestionCount);
        const fastestIds = fastestRecords.map(r => r.id);
        
        // 將記錄分為最快記錄和其他記錄
        const otherRecords = records.filter(record => !fastestIds.includes(record.id));
        
        // 排序：最快記錄按時間最短排序，其他記錄按日期排序
        fastestRecords.sort((a, b) => a.totalTime - b.totalTime);
        otherRecords.sort((a, b) => new Date(b.date + ' ' + b.startTime) - new Date(a.date + ' ' + a.startTime));
        
        // 組合顯示：最快記錄在前，其他記錄在後
        const allRecordsToShow = [...fastestRecords, ...otherRecords].slice(0, 10);
        
        const recordsHTML = allRecordsToShow.map(record => {
            const { date, time } = this.practiceRecords.formatDateTime(record.date + ' ' + record.startTime);
            const isFastest = fastestIds.includes(record.id);
            
            return `
                <div class="record-item ${isFastest ? 'fastest-record' : ''}">
                    <div class="record-info">
                        <div class="record-datetime">
                            ${isFastest ? '<span class="champion-icon">🏆</span> ' : ''}
                            ${date} ${record.startTime}
                        </div>
                        <div class="record-details">
                            ${record.questionCount}題
                            ${isFastest ? '<span class="fastest-badge">最快記錄</span>' : ''}
                        </div>
                    </div>
                    <div class="record-time">${this.practiceRecords.formatTime(record.totalTime)}</div>
                </div>
            `;
        }).join('');
        
        recordsList.innerHTML = recordsHTML;
    }

    // 從完整題庫中隨機選取指定數量的題目
    getRandomQuestions(count) {
        if (count === 10) {
            // 10題模式：只從結果類型選取，前2題普通+後8題困難
            const resultQuestions = questions.filter(q => q.type === 'result');
            const easyQuestions = resultQuestions.filter(q => q.difficulty === 'easy');
            const hardQuestions = resultQuestions.filter(q => q.difficulty === 'hard');

            // 隨機選取2題普通題目
            const shuffledEasy = [...easyQuestions].sort(() => Math.random() - 0.5);
            const selectedEasy = shuffledEasy.slice(0, 2);

            // 隨機選取8題困難題目
            const shuffledHard = [...hardQuestions].sort(() => Math.random() - 0.5);
            const selectedHard = shuffledHard.slice(0, 8);

            // 組合並返回（前2題普通，後8題困難）
            return [...selectedEasy, ...selectedHard];
        } else {
            // 20題模式：維持原有邏輯
            const shuffled = [...questions].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, count);
        }
    }

    // 練習模式：按九九乘法表順序生成題目
    generatePracticeQuestions(practiceType = 'all', selectedNumbers = []) {
        const practiceQuestions = [];

        if (practiceType === 'all') {
            // 生成 2×1 到 9×9 的順序題目（只生成結果類型題目）
            for (let num1 = 2; num1 <= 9; num1++) {
                for (let num2 = 1; num2 <= 9; num2++) {
                    practiceQuestions.push({
                        id: practiceQuestions.length + 1,
                        num1: num1,
                        num2: num2,
                        answer: num1 * num2,
                        type: 'result'
                    });
                }
            }
        } else if (practiceType === 'multiplicand') {
            // 選擇特定被乘數（第一個數字）
            selectedNumbers.forEach(num1 => {
                for (let num2 = 1; num2 <= 9; num2++) {
                    practiceQuestions.push({
                        id: practiceQuestions.length + 1,
                        num1: parseInt(num1),
                        num2: num2,
                        answer: parseInt(num1) * num2,
                        type: 'result'
                    });
                }
            });
        } else if (practiceType === 'multiplier') {
            // 選擇特定乘數（第二個數字）
            selectedNumbers.forEach(num2 => {
                for (let num1 = 2; num1 <= 9; num1++) {
                    practiceQuestions.push({
                        id: practiceQuestions.length + 1,
                        num1: num1,
                        num2: parseInt(num2),
                        answer: num1 * parseInt(num2),
                        type: 'result'
                    });
                }
            });
        }

        return practiceQuestions;
    }

    startPractice() {
        // 獲取設定
        const questionCountRadio = document.querySelector('input[name="question-count"]:checked');
        const questionCountValue = questionCountRadio.value;
        const showVirtualKeyboard = document.getElementById('show-virtual-keyboard').checked;
        this.inputMethod = showVirtualKeyboard ? 'both' : 'voice';

        // 讀取自動語音設定
        const autoVoiceCheckbox = document.getElementById('auto-voice');
        this.autoVoiceEnabled = autoVoiceCheckbox ? autoVoiceCheckbox.checked : false;

        // 判斷是否為練習模式
        this.practiceMode = (questionCountValue === 'practice');

        if (this.practiceMode) {
            // 練習模式：不計時，不記錄排行榜
            this.showTimer = false;

            // 獲取練習類型和選擇的數字
            const practiceTypeRadio = document.querySelector('input[name="practice-type"]:checked');
            const practiceType = practiceTypeRadio ? practiceTypeRadio.value : 'all';

            let selectedNumbers = [];
            if (practiceType !== 'all') {
                const checkedBoxes = document.querySelectorAll('.number-checkbox:checked');
                selectedNumbers = Array.from(checkedBoxes).map(cb => cb.value);

                // 如果沒有選擇任何數字，提示用戶
                if (selectedNumbers.length === 0) {
                    alert('請至少選擇一個數字');
                    return;
                }
            }

            // 生成題目並設定數量
            this.currentQuestions = this.generatePracticeQuestions(practiceType, selectedNumbers);
            this.questionCount = this.currentQuestions.length;

            // 儲存練習資訊供完成頁面使用
            this.practiceInfo = {
                type: practiceType,
                selectedNumbers: selectedNumbers
            };
        } else {
            // 一般模式：按原有邏輯
            this.showTimer = document.getElementById('show-timer').checked;
            this.questionCount = parseInt(questionCountValue);
            this.currentQuestions = this.getRandomQuestions(this.questionCount);
        }

        // 隱藏開始頁面，顯示練習頁面
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('practice-screen').style.display = '';

        // 根據設定顯示或隱藏計時器
        const timerContainer = document.querySelector('.timer-container');
        if (timerContainer) {
            timerContainer.style.display = this.showTimer ? 'flex' : 'none';
        }

        // 初始化音效系統（一律開啟）
        this.initSoundEffects();

        this.init();
    }

    init() {
        this.startTime = Date.now();
        if (this.showTimer) {
            this.startTimer();
        }
        this.setupInputMethod(); // 設定輸入方式
        this.showQuestion();
        this.setupEventListeners();
    }

    setupInputMethod() {
        const numberPad = document.getElementById('number-pad');
        const micButton = document.getElementById('mic-input-btn');
        const practiceContainer = document.getElementById('practice-screen');

        // 移除之前的模式類別
        practiceContainer.classList.remove('input-mode-keyboard', 'input-mode-voice', 'input-mode-both');

        if (this.inputMethod === 'voice') {
            // 只顯示語音輸入
            numberPad.style.display = 'none';
            micButton.style.display = 'inline-block';
            practiceContainer.classList.add('input-mode-voice');
            this.setupVoiceRecognition(); // 初始化語音識別
        } else if (this.inputMethod === 'both') {
            // 兩者都顯示
            numberPad.style.display = 'flex';
            micButton.style.display = 'inline-block';
            practiceContainer.classList.add('input-mode-both');
            this.setupVoiceRecognition(); // 初始化語音識別
        }
    }

    setupVoiceRecognition() {
        // 檢查瀏覽器支援
        if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            console.warn('瀏覽器不支援語音識別');
            // 如果不支援語音，只顯示虛擬鍵盤
            const numberPad = document.getElementById('number-pad');
            const micButton = document.getElementById('mic-input-btn');
            numberPad.style.display = 'flex';
            micButton.style.display = 'none';
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();

        // 設定語音識別參數
        this.recognition.lang = 'zh-TW';
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 3;

        // 語音識別狀態
        this.isListening = false;
        this.shouldAutoRestart = false;

        // 事件處理
        this.recognition.onstart = () => {
            console.log('語音識別開始');
            this.isListening = true;
            this.updateMicButton();
        };

        this.recognition.onresult = (event) => {
            console.log('語音識別結果:', event);

            let finalTranscript = '';
            let interimTranscript = '';

            for (let i = 0; i < event.results.length; i++) {
                const result = event.results[i];
                const transcript = result[0].transcript;

                if (result.isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }

            // 處理最終結果
            if (finalTranscript) {
                console.log('最終結果:', finalTranscript);
                setTimeout(() => {
                    this.processVoiceInput(finalTranscript);
                }, 100);
            }
        };

        this.recognition.onerror = (event) => {
            console.error('語音識別錯誤:', event.error);
            this.isListening = false;
            this.updateMicButton();
        };

        this.recognition.onend = () => {
            console.log('語音識別結束');
            this.isListening = false;
            this.updateMicButton();

            // 如果啟用自動語音且應該繼續監聽
            if (this.autoVoiceEnabled && this.shouldAutoRestart) {
                setTimeout(() => {
                    this.startVoiceRecognition();
                }, 500); // 0.5秒後自動重啟
            }
        };
    }

    processVoiceInput(transcript) {
        console.log('處理語音輸入:', transcript);

        if (!transcript || transcript.trim() === '') {
            // 沒有接收到語音
            this.showIncorrectFeedback('voice', undefined);
            return;
        }

        // 轉換為數字
        const number = this.convertTextToNumber(transcript.trim());
        console.log('轉換結果:', number);

        if (number !== null) {
            // 填入答案輸入框
            const answerInput = document.getElementById('answer-input');
            answerInput.value = number;

            // 自動檢查答案，傳遞語音來源和辨識的數字
            this.checkAnswer('voice', number);
        } else {
            // 無法轉換為數字 - 傳遞原始識別文字
            this.showIncorrectFeedback('voice', false, transcript.trim());
        }
    }

    convertTextToNumber(text) {
        // 移除空白和標點符號
        text = text.replace(/[，。！？\s這]/g, '');

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
            '是': 4,  // 處理「四」被識別為「是」的情況
            '五': 5, '伍': 5,
            '六': 6, '陸': 6,
            '七': 7, '柒': 7,
            '八': 8, '捌': 8,
            '吧': 8,  // 處理「八」被識別為「吧」的情況
            '九': 9, '玖': 9
        };

        // 處理特殊情況
        if (text === '十') return 10;
        if (text === '是吧') return 48;  // 處理「四八」被識別為「是吧」的情況

        // 處理 X十Y 格式（如：二十四）
        const tenMatch = text.match(/^([一二三四五六七八九]?)十([零一二三四五六七八九]?)$/);
        if (tenMatch) {
            const tens = tenMatch[1] ? chineseDigits[tenMatch[1]] : 1;
            const ones = tenMatch[2] ? chineseDigits[tenMatch[2]] : 0;
            return tens * 10 + ones;
        }

        // 處理連續數字（如：四二 → 42、三六 → 36）
        if (text.length === 2) {
            const digit1 = chineseDigits[text[0]];
            const digit2 = chineseDigits[text[1]];
            if (digit1 !== undefined && digit2 !== undefined) {
                const result = digit1 * 10 + digit2;
                if (result >= 10 && result <= 99) {
                    console.log(`連續數字轉換: "${text}" → ${result}`);
                    return result;
                }
            }
        }

        // 處理純個位數
        if (text.length === 1 && chineseDigits.hasOwnProperty(text)) {
            return chineseDigits[text];
        }

        return null;
    }

    startListening() {
        if (!this.recognition || this.isListening) return;

        try {
            console.log('啟動語音識別...');
            this.recognition.start();
        } catch (error) {
            console.error('啟動語音識別失敗:', error);
        }
    }

    stopListening() {
        if (this.recognition && this.isListening) {
            console.log('停止語音識別');
            this.recognition.stop();
        }
    }

    startVoiceRecognition() {
        if (!this.recognition) {
            console.warn('語音識別未初始化');
            return;
        }

        try {
            this.recognition.start();
        } catch (error) {
            console.error('啟動語音識別失敗:', error);
        }
    }

    updateMicButton() {
        const micButton = document.getElementById('mic-input-btn');
        if (!micButton) return;

        if (this.isListening) {
            micButton.textContent = '🔴';
            micButton.classList.add('listening');
        } else {
            micButton.textContent = '🎤';
            micButton.classList.remove('listening');
        }
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

        // 麥克風按鈕事件
        const micButton = document.getElementById('mic-input-btn');
        if (micButton) {
            micButton.addEventListener('click', () => {
                if (!this.autoVoiceEnabled) {
                    // 手動模式：正常開關
                    if (this.isListening) {
                        this.stopListening();
                    } else {
                        this.startListening();
                    }
                } else {
                    // 自動模式下：點擊按鈕切換暫停/繼續
                    if (this.isListening) {
                        this.shouldAutoRestart = false;
                        this.recognition.stop();
                    } else {
                        this.shouldAutoRestart = true;
                        this.startVoiceRecognition();
                    }
                }
            });
        }
        
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

        // 如果啟用自動語音，自動開始監聽
        if (this.autoVoiceEnabled && (this.inputMethod === 'voice' || this.inputMethod === 'both')) {
            this.shouldAutoRestart = true;
            setTimeout(() => {
                this.startVoiceRecognition();
            }, 300); // 給一點時間讓題目顯示
        }
    }

    checkAnswer(source = 'keyboard', voiceNumber = null) {
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
            // 答對時停止自動重啟
            this.shouldAutoRestart = false;
            if (this.recognition && this.isListening) {
                this.recognition.stop(); // 停止監聽
            }

            this.showCorrectFeedback();
            // 所有裝置都在1.2秒後自動進入下一題
            setTimeout(() => {
                this.nextQuestion();
                this.isProcessingAnswer = false; // 完成後重置標誌
            }, 1200);
        } else {
            this.showIncorrectFeedback(source, voiceNumber);
            answerInput.value = ''; // 清空錯誤答案
            this.isProcessingAnswer = false; // 錯誤答案立即重置標誌
        }
    }

    showCorrectFeedback() {
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = '太棒了！ ✓';
        feedbackEl.className = 'feedback correct';

        // 播放答對音效
        this.playCorrectSound();
    }

    showIncorrectFeedback(source = 'keyboard', voiceNumber = null, originalText = null) {
        const feedbackEl = document.getElementById('feedback');

        if (source === 'voice') {
            if (voiceNumber === false) {
                // 語音辨識到非數字 - 顯示實際識別到的文字
                feedbackEl.textContent = `識別到：${originalText}，再試一次！`;
            } else if (voiceNumber !== null && voiceNumber !== undefined) {
                // 語音辨識成功但答錯
                feedbackEl.textContent = `${voiceNumber}，再試一次！`;
            } else {
                // 沒有接收到語音
                feedbackEl.textContent = '沒有語音，再試一次！';
            }
        } else {
            // 鍵盤輸入維持原樣
            feedbackEl.textContent = '再試一次！';
        }

        feedbackEl.className = 'feedback incorrect';

        // 播放答錯音效
        this.playIncorrectSound();

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

    // 初始化音效系統
    initSoundEffects() {
        if (!this.audioContext && (window.AudioContext || window.webkitAudioContext)) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    // 播放答對音效（簡短成功音）
    playCorrectSound() {
        if (!this.audioContext) return;

        try {
            const notes = [523.25, 783.99]; // C5, G5
            const volume = 0.25;

            notes.forEach((freq, i) => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);

                oscillator.type = 'triangle';
                oscillator.frequency.value = freq;

                const startTime = this.audioContext.currentTime + (i * 0.15);
                const duration = 0.2;

                gainNode.gain.setValueAtTime(0, startTime);
                gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                oscillator.start(startTime);
                oscillator.stop(startTime + duration);
            });
        } catch (error) {
            console.warn('音效播放失敗:', error);
        }
    }

    // 播放答錯音效（溫和下降音）
    playIncorrectSound() {
        if (!this.audioContext) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.type = 'sine';
            const duration = 0.3;
            const volume = 0.25;

            oscillator.frequency.setValueAtTime(350, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + duration);

            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        } catch (error) {
            console.warn('音效播放失敗:', error);
        }
    }

    // 播放遊戲過關音效（一般完成）
    playCompletionSound() {
        if (!this.audioContext) return;

        try {
            const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99]; // C-E-G-C-E-G
            const volume = 0.25;

            notes.forEach((freq, i) => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);

                oscillator.type = 'sine';
                oscillator.frequency.value = freq;

                const startTime = this.audioContext.currentTime + (i * 0.1);
                const duration = 0.15;

                gainNode.gain.setValueAtTime(0, startTime);
                gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                oscillator.start(startTime);
                oscillator.stop(startTime + duration);
            });
        } catch (error) {
            console.warn('完成音效播放失敗:', error);
        }
    }

    // 播放經典勝利號角（進入排行榜）
    playVictoryFanfareSound() {
        if (!this.audioContext) return;

        try {
            const notes = [
                {freq: 261.63, start: 0, duration: 0.2},      // C4 - 等
                {freq: 329.63, start: 0.2, duration: 0.2},   // E4 - 能
                {freq: 392.00, start: 0.4, duration: 0.2},   // G4 - 等
                {freq: 523.25, start: 0.6, duration: 0.3}    // C5 - 登登～
            ];
            const volume = 0.25;

            notes.forEach(note => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);

                oscillator.type = 'square';
                oscillator.frequency.value = note.freq;

                const startTime = this.audioContext.currentTime + note.start;

                gainNode.gain.setValueAtTime(0, startTime);
                gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(volume * 0.7, startTime + note.duration * 0.7);
                gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + note.duration);

                oscillator.start(startTime);
                oscillator.stop(startTime + note.duration);
            });
        } catch (error) {
            console.warn('勝利號角播放失敗:', error);
        }
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

        if (this.practiceMode) {
            // 練習模式：簡化的完成頁面，不保存記錄
            this.showPracticeCompletion();
            return;
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


        // 獲取最快記錄比較和排名檢查
        const fastestRecord = this.practiceRecords.getFastestRecord(this.questionCount);
        const currentRank = this.practiceRecords.getRecordRank(record);
        let fastestCompareText = '';
        let completionClass = '';

        // 根據排名顯示不同的慶祝效果
        if (currentRank === 1) {
            // 第1名 - 冠軍
            fastestCompareText = `<div class="rank-achievement rank-1-achievement">🏆 恭喜！你創下${this.questionCount}題最快記錄！ 👑</div>`;
            completionClass = 'new-record rank-1-celebration';
        } else if (currentRank === 2) {
            // 第2名 - 亞軍
            fastestCompareText = `<div class="rank-achievement rank-2-achievement">🥈 太棒了！你創下${this.questionCount}題第 2 快紀錄！ 🌟</div>`;
            completionClass = 'rank-2-celebration';
        } else if (currentRank === 3) {
            // 第3名 - 季軍
            fastestCompareText = `<div class="rank-achievement rank-3-achievement">🥉 恭喜！你創下${this.questionCount}題第 3 快紀錄！ ⭐</div>`;
            completionClass = 'rank-3-celebration';
        } else if (fastestRecord) {
            // 其他排名 - 顯示與最快記錄的差距
            const fastestDiff = completionTime - fastestRecord.totalTime;
            if (currentRank && currentRank <= 10) {
                fastestCompareText = `<div class="fastest-record-compare">🎯 太棒了！你排名第${currentRank}名！</div>`;
            } else if (fastestDiff > 0) {
                fastestCompareText = `<div class="fastest-record-compare">🏃‍♂️ 距離最快記錄還有${fastestDiff}秒，繼續加油！</div>`;
            } else if (fastestDiff === 0) {
                fastestCompareText = `<div class="fastest-record-compare">🏆 平了最快記錄！太棒了！</div>`;
            }
        }

        // 播放完成音效
        if (currentRank && currentRank <= 10) {
            // 進入前10名排行榜 - 播放經典勝利號角
            this.playVictoryFanfareSound();
        } else {
            // 未進入排行榜 - 播放遊戲過關音效
            this.playCompletionSound();
        }

        const appEl = document.getElementById('app');
        appEl.innerHTML = `
            <div class="completion ${completionClass}">
                <h1>🎉 恭喜完成！</h1>
                <div class="completion-stats">
                    <p>總共花費時間：<strong>${minutes > 0 ? minutes + '分' : ''}${seconds}秒</strong></p>
                    ${fastestCompareText}
                </div>
                <button onclick="location.reload()" class="restart-btn">重新練習</button>
            </div>
        `;
    }

    // 練習模式完成頁面
    showPracticeCompletion() {
        const appEl = document.getElementById('app');
        let completionMessage = '';
        let detailMessage = '';

        // 根據練習類型生成不同的完成訊息
        if (this.practiceInfo && this.practiceInfo.type !== 'all') {
            const numbers = this.practiceInfo.selectedNumbers.join('、');
            const totalQuestions = this.currentQuestions.length;

            if (this.practiceInfo.type === 'multiplicand') {
                completionMessage = `🌟 恭喜完成 ${numbers} 的乘法表練習！`;
                detailMessage = `共完成 ${totalQuestions} 道題目，你已經熟練掌握了 ${numbers} 的乘法！`;
            } else if (this.practiceInfo.type === 'multiplier') {
                completionMessage = `🌟 恭喜完成乘以 ${numbers} 的練習！`;
                detailMessage = `共完成 ${totalQuestions} 道題目，你已經熟練掌握了乘以 ${numbers} 的計算！`;
            }
        } else {
            completionMessage = `🌟 恭喜完成 ${this.questionCount} 道九九乘法表練習！`;
            detailMessage = '從 2×1 到 9×9，你已經熟練掌握了所有基礎乘法！';
        }

        // 播放遊戲過關音效（練習模式無排行榜）
        this.playCompletionSound();

        appEl.innerHTML = `
            <div class="completion">
                <h1>🎉 練習完成！</h1>
                <div class="completion-stats">
                    <p>${completionMessage}</p>
                    <p style="color: var(--text-secondary); margin-top: var(--spacing-m);">
                        ${detailMessage}
                    </p>
                </div>
                <div style="display: flex; gap: var(--spacing-m); flex-wrap: wrap; justify-content: center; margin-top: var(--spacing-xl);">
                    <button onclick="location.reload()" class="restart-btn">再練習一次</button>
                    <button onclick="location.reload()" class="view-records-btn">返回首頁</button>
                </div>
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