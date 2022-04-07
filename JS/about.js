window.onscroll = function () {
    scrollFunction();
  };
function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("sectionid").style.marginTop = "-180px";
      document.getElementById("sectionid").style.paddingTop = "80px";
      document.getElementById("sectionid").style.background = "#00283f";
      document.getElementById("sectionid").style.position = "fixed";
    } else {
        document.getElementById("sectionid").style.marginTop = "0px";
      document.getElementById("sectionid").style.padding = "0px 0px 0px 40px";
      document.getElementById("sectionid").style.background = "none";
    }
  }

  $(".parallax-window").parallax({
    imageSrc: "./Images/Background/1920x999_bg1.jpg",
  });

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }