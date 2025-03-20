
let names = [];
let surNames = [];
let emails = [];
let passwords = [];
let radioButton = document.getElementsByName("gender");
let date = document.getElementById("date");
let contents = [];
let backgroundColors = [];
let textColors = [];

function saveData() {

    let name = document.getElementById("name");

    let surName = document.getElementById("surName");

    let numberOrEmail = document.getElementById("numberOrEmail");

    let password = document.getElementById("password");

    if (name.value.trim() == "" || numberOrEmail.value.trim() == "" || password.value.trim() == "") {
        return;
    }

    names.push(name.value);
    surNames.push(surName.value);
    emails.push(numberOrEmail.value);
    passwords.push(password.value);
    contents.push(new Array());
    backgroundColors.push(new Array());
    textColors.push(new Array());

    localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("surNames", JSON.stringify(surNames));
    localStorage.setItem("emails", JSON.stringify(emails));
    localStorage.setItem("passwords", JSON.stringify(passwords));
    localStorage.setItem("contents", JSON.stringify(contents));
    localStorage.setItem("backgroundColors", JSON.stringify(backgroundColors));
    localStorage.setItem("textColors", JSON.stringify(textColors));

    name.value = "";
    surName.value = "";
    numberOrEmail.value = "";
    password.value = "";
    date.value = "";

    for (let i = 0; i < radioButton.length; i++) {
        radioButton[i].checked = false;
    }
    alert("Account created successfully!");
}

// localStorage.clear();
