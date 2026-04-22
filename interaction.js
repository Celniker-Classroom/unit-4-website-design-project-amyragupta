
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



var amyrathoughtstxt = "";
if (document.title==='Miral Page'){
  amyrathoughtstxt='Miral is my childhood best friend. I have experienced so much with her including vacations.';
}

else if (document.title==='Naisha Page'){
  amyrathoughtstxt=`Although Naisha is not really my best friend yet, I know she will be one day.
  She is almost 8 years younger than me, so we don't really have much to connect over. I know she
  really looks up to me, and I try to help her out. One of my favorite memories with her was when
  she was a baby especially during COVID. We spent so much time together, and watching her grow 
  up has been one of the highlights of my life. We do fight; however, I hope in the future we 
  will be closer than ever.`;
}

else if (document.title==="Juliana Page"){
  amyrathoughtstxt=`Juliana has been my best friend for 3 and a half years. We met on the 
  first day of sixth grade and have been inseparable since. Juliana is the most empathetic 
  person I know, and she inspires me everyday. She brings out the best version of myself 
  and her positive energy brings a spark to my day. She was the only good part of middle
  school and I can't imagine my life without her.`;

}

else if (document.title==="Nina Page"){
  amyrathoughtstxt=`Although I met Nina recently, she has quickly become one 
  of my best friends. We understand almost everything about each other. She has been 
  one of best parts of highschool.`;

}

var k = 0;
var speed = 50;
  
function typeWriter() {
    alert("button pressed");
    if (k < amyrathoughtstxt.length) {
        document.getElementById("ducky").innerHTML += aboutmetxt.charAt(k);
        k++;
        setTimeout(typeWriter, speed);
  }
}

