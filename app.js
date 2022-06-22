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

submitBtn.addEventListener('click', function(e){
      if(emailLogin.value !== 'admin@gmail.com'){
        emailLogin.style.borderColor = 'red'
        alert('Wrong Credentials!');
        e.preventDefault()
      }else if(passwordLogin.value !== '123456'){
        passwordLogin.style.borderColor = 'red'
        alert('Wrong Credentials!');
        e.preventDefault()
      }
      else if(usernameLogin.value === '') {
        usernameLogin.style.borderColor = 'red'
      }
      else if (passwordLogin.value === '') {
        passwordLogin.style.borderColor = 'red'
      }
      else if (emailLogin.value === '') {
        emailLogin.style.borderColor = 'red'
      } 
})


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

