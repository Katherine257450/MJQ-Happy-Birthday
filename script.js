document.getElementById("drawButton").addEventListener("click", function() {
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

    // 建立彈跳視窗
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
