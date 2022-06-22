// Set the date we're counting down to
var countDownDate = new Date("Jun 30, 2022 15:37:25").getTime();

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
    
  // Output the result in an element with id="demo"
  
  document.getElementById("countdown_timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.getElementById("countdown_timer").style.borderRadius = '10px';
  document.getElementById("countdown_timer").style.background = 'linear-gradient(#45054d, #521b58, #74247e)';

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Search Button Links
function searchBtn(e){
    location.href = './search_page.html'    
}
searchBtnCategoryPuma = () => {
    location.href = './search_page.html'   
}
searchBtnCategoryNike = () => {
    location.href = './search_page.html'   
}
searchBtnCategoryFila = () => {
    location.href = './search_page.html'   
}
searchBtnCategoryUA = () => {
    location.href = './search_page.html'   
}

// back to homepage logo
searchPageLogo = () => {
    location.href = './landing_page.html';   
}
nikeCategoryLogo = () => {
    location.href = './landing_page.html';  
}
pumaCategoryLogo = () => {
    location.href = './landing_page.html';  
}
filaCategoryLogo = () => {
    location.href = './landing_page.html';  
}
uaCategoryLogo = () => {
    location.href = './landing_page.html';  
}



// homepage carousel
carouselLink1= () => {
    location.href = './category_page_nike.html'    
}
carouselLink2= () => {
    location.href = './category_page_fila.html'    
}
carouselLink3= () => {
    location.href = './category_page_underarmour.html'    
}
carouselLink4= () => {
    location.href = './category_page_puma.html'    
}

const categoryNike = document.querySelector('.card_nike');
const categoryPuma = document.querySelector('.card_puma');
const categoryUnderArmour = document.querySelector('.card_under_armour');
const categoryFila = document.querySelector('.card_fila');
const categoryTitleNike = document.querySelector('.card_title_nike');
const categoryTitlePuma = document.querySelector('.card_title_puma');
const categoryTitleUA = document.querySelector('.card_title_under');
const categoryTitleFila = document.querySelector('.card_title_fila');


categoryNike.addEventListener('mouseover', function(){
  categoryTitleNike.style.background = 'linear-gradient(#45054d, #521b58, #74247e)'
  
  categoryTitleNike.style.borderRadius = '5px';
  categoryTitleNike.style.color = 'white';  
  categoryTitleNike.style.transition = '.5s';
})
categoryNike.addEventListener('mouseout', function(){
    categoryTitleNike.style.background = 'transparent'
    categoryTitleNike.style.border = '1px solid transparent';
    categoryTitleNike.style.color = 'black';    
    categoryTitleNike.style.transition = '.5s';
})

categoryPuma.addEventListener('mouseover', function(){
    categoryTitlePuma.style.background = 'linear-gradient(#45054d, #521b58, #74247e)'
    
    categoryTitlePuma.style.borderRadius = '5px';
    categoryTitlePuma.style.color = 'white';    
    categoryTitlePuma.style.transition = '.5s';
})
categoryPuma.addEventListener('mouseout', function(){
    categoryTitlePuma.style.background = 'transparent'
    categoryTitlePuma.style.border = '1px solid transparent';
    categoryTitlePuma.style.color = 'black';    
    categoryTitlePuma.style.transition = '.5s';
})

categoryUnderArmour.addEventListener('mouseover', function(){
    categoryTitleUA.style.background = 'linear-gradient(#45054d, #521b58, #74247e)'
  
    categoryTitleUA.style.borderRadius = '5px';
    categoryTitleUA.style.color = 'white';    
    categoryTitleUA.style.transition = '.5s';
})
categoryUnderArmour.addEventListener('mouseout', function(){
    categoryTitleUA.style.background = 'transparent'
    categoryTitleUA.style.border = '1px solid transparent';
    categoryTitleUA.style.color = 'black';    
    categoryTitleUA.style.transition = '.5s';
})

categoryFila.addEventListener('mouseover', function(){
    categoryTitleFila.style.background = 'linear-gradient(#45054d, #521b58, #74247e)'
    
    categoryTitleFila.style.borderRadius = '5px';
    categoryTitleFila.style.color = 'white';    
    categoryTitleFila.style.transition = '.5s';
})
categoryFila.addEventListener('mouseout', function(){
    categoryTitleFila.style.background = 'transparent'
    categoryTitleFila.style.border = '1px solid transparent';
    categoryTitleFila.style.color = 'black';    
    categoryTitleFila.style.transition = '.5s';
})


