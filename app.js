// login page
const loginForm = document.querySelector(".login_form");
const welcomeLogin = document.getElementById("login_username_label");
const usernameLogin = document.getElementById("login_username");
const loginInputs = document.querySelectorAll("#exampleInput");
const loginInputsCheckBox = document.getElementById("exampleInputCheckBox");
const copyrightDate = document.querySelector(".copyright_date");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const submitBtn = document.querySelector('.submit_btn');
const checkBoxLogin = document.getElementById('exampleInputCheckBox');

checkBox = () => {
  submitBtn.style.background = '#f96332';
  checkBoxLogin.disabled = true;
}

if(submitBtn.disabled = false){
  submitBtn.disabled = true;
}

loginForm.addEventListener('submit', function(e){
  e.preventDefault();

  document.querySelector('.spinners_login').classList.remove('d-none');
  document.querySelector('.submit_text').classList.add('d-none');
  setInterval(function(){
    location.href = "landing_page.html"
  }, 2000);
})

loginForm.addEventListener("input", (e) => {
  if (usernameLogin.value === "" || usernameLogin.value === undefined) {
    welcomeLogin.innerText = ``;
  } else {
    welcomeLogin.innerText = `Welcome ${usernameLogin.value}!`;
  }
});



let copyright = new Date().getFullYear();
copyrightDate.innerText = copyright;

