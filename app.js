// Selectors
const password_input = document.getElementById("password");
const signup_password_input = document.getElementById("s-password");
const repeat_password_input = document.getElementById("r-password");
const vispass = document.getElementById("vispass");
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const privacy = document.getElementById("accespt");
const btn_signup = document.getElementById("btn-signup");
const btn_signup_disabled = document.getElementById("btn-signup-disable");
const btn_change_text = document.getElementById("btn-change-text");
const forget_pass = document.getElementById("forget-pass")


const visiblePassword = () => {
    if(password_input.type == "password"){
        password_input.type = "text";
        repeat_password_input.type = "text";
        signup_password_input.type = "text";
        vispass.textContent = "Hide Password🔒🔑";
    }
    else{
        password_input.type = "password";
        repeat_password_input.type = "password";
        signup_password_input.type = "password";
        vispass.textContent = "Show Password🔒🔑";
    }
}

const showSignup = () => {
    login.style.display = "none";
    signup.style.display = "flex";
}

const showLogin = () => {
    signup.style.display = "none";
    login.style.display = "flex";
    forget_pass.style.display = "none";
}

const change = () => {
    if(login.style.display == "flex"){
        showSignup()
        btn_change_text.textContent = "Login"
    }
    else{
        showLogin()
        btn_change_text.textContent = "SignUp";
    }
}

const privacy_accespt = () => {
    if(privacy.checked){
        btn_signup.style.display = "block";
        btn_signup_disabled.style.display = "none";
    }
    else{
        btn_signup.style.display = "none";
        btn_signup_disabled.style.display = "block";
    }
}


const forgetPassword = () => {
    login.style.display = "none";
    forget_pass.style.display = "flex";
}