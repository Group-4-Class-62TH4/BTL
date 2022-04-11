window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("header-nav").style.marginTop = "-180px";
    document.getElementById("header-nav").style.marginLeft = "-18px";
    document.getElementById("header-nav").style.paddingTop = "70px";
    document.getElementById("header-nav").style.background = "#00283f";
    document.getElementById("header-nav").style.position = "fixed";
    document.getElementById("header-nav").style.width = "100vw";
  } else {
    document.getElementById("header-nav").style.marginTop = "0px";
    document.getElementById("header-nav").style.padding = "0px 40px 0px 40px";
    document.getElementById("header-nav").style.background = "none";
  }
}

// document.getElementById("btn-open").onclick= function(){
//   document.getElementById("header-nav").style.display="block";
//   document.getElementById("header-nav").style.background = "#00283f";
// }



// $(document).ready(function(){
//   $("btn-open").click(function(){
//     $("header-nav").slideToggle();
//   });



