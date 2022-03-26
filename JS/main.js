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

$(".parallax-window").parallax({
  imageSrc: "./Images/Background/1920x616_img1.jpg",
});
$(".parallax-window").parallax({
  imageSrc: "./Images/Background/1920x999_bg1.jpg",
});

// $('.slider-content').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 2
// });
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

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

//button back to top
// var offset = 300,
//   offsetOpacity = 1200,
//   scrollDuration = 700;
(function () {
  // Back to Top - by CodyHouse.co
  var backTop = document.getElementsByClassName("button-totop")[0],
    offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 700,
    scrolling = false;

  if (backTop) {
    //update back to top visibility on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkBackToTop, 250)
          : window.requestAnimationFrame(checkBackToTop);
      }
    });

    //smooth scroll to top
    backTop.addEventListener("click", function (event) {
      event.preventDefault();
      !window.requestAnimationFrame
        ? window.scrollTo(0, 0)
        : Util.scrollTo(0, scrollDuration);
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    windowTop > offset
      ? Util.addClass(backTop, "cd-top--is-visible")
      : Util.removeClass(backTop, "cd-top--is-visible cd-top--fade-out");
    windowTop > offsetOpacity && Util.addClass(backTop, "cd-top--fade-out");
    scrolling = false;
  }
})();
