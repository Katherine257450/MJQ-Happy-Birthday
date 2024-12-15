document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("passwordModal").style.display = "block";
});

// 密碼檢查功能
document.getElementById("submitPassword").addEventListener("click", function () {
    const correctPassword = "You"; // 正確密碼
    const enteredPassword = document.getElementById("passwordInput").value;
    const passwordError = document.getElementById("password-error");
    const passwordModal = document.getElementById("passwordModal");
    const fortuneContainer = document.getElementById("fortune-container");

    if (enteredPassword === correctPassword) {
        passwordModal.style.display = "none";
        fortuneContainer.style.display = "block";
    } else {
        passwordError.style.display = "block";
    }
});

// 設置一個標記，初始值為 false
let hasDrawn = false;

// 為按鈕添加點擊事件監聽器
document.getElementById("drawButton").addEventListener("click", function() {
    if (hasDrawn) {
        // 若已抽過，提示用戶
        alert("您已經抽過了，不能重複抽籤！");
        return;
    }

    // 設置為已抽籤
    hasDrawn = true;

    // 抽籤邏輯
    const outcomes = ["吉", "小吉", "大吉"];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const result = outcomes[randomIndex];
    document.getElementById("result").textContent = `抽籤結果：${result}`;

    let urls = [];
    if (result === "吉") {
        urls = [
            "https://docs.google.com/document/d/1KVnht4qE1emSyXp0Ck5a7VKJjvjRwn2aM5toTQ8snjE/edit", 
            "https://docs.google.com/document/d/1JlQfGNHXH0KkZXJjEO25eyjHkaB0emuI-jRYJvwcjeA/edit", 
            "https://docs.google.com/document/d/1Jlyxj3-mHTbZVOLbae23p12j4OypUE47Lydr6iYJjz4/edit"
        ];
    } else if (result === "小吉") {
        urls = [
            "https://docs.google.com/document/d/1KihfB0-OKXEHC3IREwvI74HLv09VtiIE49S8UzR-5bY/edit",
            "https://docs.google.com/document/d/1L7jXYNn00UDANlNeDvqAQxRKIWvLOP1xXzy6Q9IfR7U/edit",
            "https://docs.google.com/document/d/1LTUyoioDR_H0tL3je5y4IhKNFBhLPi2hqBhz0uprqvk/edit"
        ];
    } else if (result === "大吉") {
        urls = [
            "https://docs.google.com/document/d/1Lz8xFrO0ZBHemmdcneW5myQU0vYRGn1a1_9jauhqi1Y/edit",
            "https://docs.google.com/document/d/1LhI7xdIrc-3bJ70y1qex--SgPE8UiBheq8lztqannrM/edit",
            "https://docs.google.com/document/d/1MFNc4AnPnnwFTA56wUHmm3L-gstRLRHb9lj89TnYnNQ/edit"
        ];
    }

    // 隨機選取一個網址
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];

    // 建立彈跳視窗顯示結果
    const popup = window.open("", "Popup", "width=400,height=300");
    popup.document.write(`
        <style>
            body {
                font-family: "Microsoft JhengHei", Arial, sans-serif;
                text-align: center;
                color: #800080; /* 紫色文字 */
                margin: 0;
                padding: 20px;
            }
            a {
                color: #800080;
                font-weight: bold;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
        </style>
        <h1>恭喜你抽到 ${result}!</h1>
        <p><a href="${randomUrl}" target="_blank">點擊這裡查看你的結果</a></p>
    `);
});
