
const passwordBox = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    let password = "";
    const allChars = uppercase + lowercase + numbers + symbols;
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomNum);
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}