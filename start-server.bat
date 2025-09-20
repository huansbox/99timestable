@echo off
echo 啟動本地測試伺服器...
echo.
echo 請在瀏覽器開啟下列網址進行測試：
echo http://localhost:8000/voice-test-v2.html (推薦)
echo http://localhost:8000/voice-test.html
echo http://localhost:8000/simple-voice-test.html
echo.
echo 按 Ctrl+C 停止伺服器
echo.
python -m http.server 8000