
function createNewAccount() {
    location = "./Sign Up/index.html";
}

let emails = localStorage.getItem("emails");
emails = JSON.parse(emails);
let passwords = localStorage.getItem("passwords");
passwords = JSON.parse(passwords);
console.log(emails);
let index = [];

function login() {

    let currentEmail = document.getElementById("email");
    let currentPassword = document.getElementById("password");
    let isEmailFound = false;
    let passwordIndex = -1;

    if (currentEmail.value.trim() == "" || currentPassword.value.trim() == "") {
        return;
    }

    if (emails == null) {
        currentEmail.value = "";
        currentPassword.value = "";
        alert(`Wrong credentials, Invalid username or password`);
        return;
    }

    for (let i = 0; i < emails.length; i++) {
        if (currentEmail.value === emails[i]) {
            isEmailFound = true;
            passwordIndex = i;
        }
    }
    
    if (currentPassword.value === passwords[passwordIndex]) {
        event.preventDefault();
        localStorage.setItem("index", JSON.stringify(passwordIndex));
        location = "./Post/index.html";
    } else {
        alert(`Wrong credentials, Invalid username or password`);
    }

}
