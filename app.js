// login page
const loginForm = document.querySelector(".login_form");
const welcomeLogin = document.getElementById("login_username_label");
const usernameLogin = document.getElementById("login_username");
const loginInputs = document.querySelectorAll("#exampleInput");
const loginInputsCheckBox = document.getElementById("exampleInputCheckBox");
const copyrightDate = document.querySelector(".copyright_date");

loginForm.addEventListener("input", (e) => {
  if (usernameLogin.value === "" || usernameLogin.value === undefined) {
    welcomeLogin.innerText = ``;
  } else {
    welcomeLogin.innerText = `Welcome ${usernameLogin.value}!`;
  }
});

let copyright = new Date().getFullYear();
copyrightDate.innerText = copyright;


