
let text = document.getElementById("post-text");
let textColorInput = document.getElementById("text-color-input");

let contentText = document.getElementById("content-input");

function changeTextColor() {
    contentText.style.color = textColorInput.value;
}

let postButton = document.getElementById("post-button");

contentText.addEventListener("input", function () {
    if (contentText.value.trim() !== "") {
        postButton.removeAttribute("disabled");
    } else {
        postButton.setAttribute("disabled", true);
    }
});

let bgColor = document.getElementById("color-input");
bgColor.value = "#FFFFFF";

function changeColor() {
    contentText.style.backgroundColor = bgColor.value;
}

let contents = localStorage.getItem("contents");
contents = JSON.parse(contents);

let names = localStorage.getItem("names");
names = JSON.parse(names);

let surNames = localStorage.getItem("surNames");
surNames = JSON.parse(surNames);

let backgroundColors = localStorage.getItem("backgroundColors");
backgroundColors = JSON.parse(backgroundColors);

let textColors = localStorage.getItem("textColors");
textColors = JSON.parse(textColors);

let index = localStorage.getItem("index");
index = JSON.parse(index);

let content = contents;
let contentBackgrounds = backgroundColors;

contentText.placeholder = `What's on your mind, ${names[index]} ${surNames[index]}?`;

function saveContent() {
    content[index].push(contentText.value);
    contentBackgrounds[index].push(bgColor.value);
    textColors[index].push(textColorInput.value);

    localStorage.setItem("contents", JSON.stringify(content));
    localStorage.setItem("backgroundColors", JSON.stringify(contentBackgrounds));
    localStorage.setItem("textColors", JSON.stringify(textColors));

    generatePost(content[index].length-1);
}

let savedContents = localStorage.getItem("contents");
content = JSON.parse(savedContents) || [];

let savedContentBackgroundColors = localStorage.getItem("backgroundColors");
contentBackgrounds = JSON.parse(savedContentBackgroundColors) || [];

let savedTextColors = localStorage.getItem("textColors");
textColors = JSON.parse(savedTextColors) || [];

let postName = document.getElementById("userName");

function generatePost(i) {

    let container = document.getElementById("posts-container");

    container.innerHTML += `
    <div class="post-content">
        <div class="post-header">
            <img src="../image/logo-icon_LE_upscale_balanced_x4.jpg" alt="Logo" class="logo" />
            <p class="user-name">${names[index]} ${surNames[index]}</p>
        </div>
        <div class="post-body" style="background-color: ${contentBackgrounds[index][i]};">
            <p id="post-text" style="color: ${textColors[index][i]};">${content[index][i]}</p>
        </div>
    </div>
    `;
    bgColor.value = "#FFFFFF";
    contentText.value = "";
    contentText.style.color = "#000000";
    textColorInput.value = "#000000";
    contentText.style.backgroundColor = bgColor.value;
    postButton.setAttribute("disabled", true);
}

for (let i = 0; i < content[index].length; i++) {
    generatePost(i);
}

let userName = document.getElementsByClassName("user-name");
userName[0].innerHTML = `${names[index]} ${surNames[index]}`;
