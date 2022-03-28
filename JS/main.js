// hearder-slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}

// Section id
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("sectionid").style.padding = "30px 10px 30px 10px";
    document.getElementById("sectionid").style.background = "#00283f";
  } else {
    document.getElementById("sectionid").style.padding = "60px 40px 60px 40px";
    document.getElementById("sectionid").style.background = "none";
  }
}

document.getElementById('btn-open').onclick = function(){
  document.getElementById("navigation").style.display = "block"
};
document.getElementById('x-mark').onclick = function(){
  document.getElementById("navigation").style.display = "none"
};


// Parallax
$(".parallax-window").parallax({
  imageSrc: "./Images/Background/1920x616_img1.jpg",
});
$(".parallax-window").parallax({
  imageSrc: "./Images/Background/1920x999_bg1.jpg",
});



