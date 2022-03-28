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
// Parallax
$(".parallax-window").parallax({
  imageSrc: "./Images/Background/1920x616_img1.jpg",
});
$(".parallax-window").parallax({
  imageSrc: "./Images/Background/1920x999_bg1.jpg",
});

$(document).ready(function () {
  $(".slider-page-content").slick({
    dots: false,
    arrows: true,
    nextArrow: "<button>OK</button>",
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });
});
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider-content");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function toTop() {
  $("html, body").animate({ scrollTop: 0 }, "2000");
}
$(window).scroll(function (event) {
  if (window.scrollY > 1400) {
    $(".toTop").fadeIn();
  } else {
    $(".toTop").fadeOut();
  }
});
