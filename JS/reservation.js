window.onscroll = function () {
    scrollFunction();
  };
function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("sectionid").style.marginTop = "-180px";
      document.getElementById("sectionid").style.paddingTop = "70px";
      document.getElementById("sectionid").style.background = "#00283f";
      document.getElementById("sectionid").style.position = "fixed";
    } else {
        document.getElementById("sectionid").style.marginTop = "0px";
      document.getElementById("sectionid").style.padding = "0px 40px 0px 40px";
      document.getElementById("sectionid").style.background = "none";
    }
  }

  document.getElementById('btn-open').onclick = function(){
    document.getElementById("navigation").style.display = "block";
    document.getElementById('btn-close').style.display = "block";
    document.getElementById("btn-open").style.display = "none";
  };
  document.getElementById('btn-close').onclick = function(){
    document.getElementById("navigation").style.display = "none";
    document.getElementById('btn-close').style.display = "none";
    document.getElementById("btn-open").style.display = "block";
  };