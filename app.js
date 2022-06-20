// login page
const loginForm = document.querySelector('.login_form')
const welcomeLogin = document.getElementById('login_username_label');
const usernameLogin = document.getElementById('login_username');
const loginInputs = document.querySelectorAll('#exampleInput');
const loginInputsCheckBox = document.getElementById('exampleInputCheckBox');
const copyrightDate = document.querySelector('.copyright_date')

loginForm.addEventListener('input', (e) =>{
    if (usernameLogin.value === '' || usernameLogin.value === undefined)
    {
        welcomeLogin.innerText = ``;
    }
    else
    {
        welcomeLogin.innerText = `Welcome ${usernameLogin.value}!`
    }
})

let copyright = new Date().getFullYear();
copyrightDate.innerText = copyright;

// homepage
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);