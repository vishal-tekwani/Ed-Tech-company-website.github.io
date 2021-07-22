burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
     rightNav.classList.toggle('v-class-resp');
     navList.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');
})
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }