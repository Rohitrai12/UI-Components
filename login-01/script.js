let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log('Email:', email.value);
    console.log('Password:', password.value);
    // process and send to API 
});

let title = document.getElementById("title");
let loginButton = document.getElementById("Login_button");
let createLink = document.getElementById("Create_account");
let reset = document.getElementById("resetPassword")

createLink.onclick = function() {
    title.innerHTML = "SignUp";
    loginButton.value = "Signup";
    createLink.innerHTML = "Login";
    confirmPassword.classList.add("show");
    reset.style.display = "none"
}
