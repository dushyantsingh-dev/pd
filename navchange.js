function navchange() {
  if (document.scrollingElement.scrollTop > 200) {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("header").style.boxShadow = "0px 0px 10px #000000";
    document.getElementById("header").style.borderBottom = "1px solid #000000";
    document.getElementById("header").style.color = "black";
    document.getElementById("hamburgermenu").setAttribute("fill", "#333");
    for (
      var i = 0;
      i < document.getElementsByClassName("navlink").length;
      i++
    ) {
      document.getElementsByClassName("navlink")[i].style.color = "black";
    }
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.boxShadow = "none";
    document.getElementById("header").style.borderBottom = "none";
    document.getElementById("header").style.color = "#f5f5f5";
    for (
      var i = 0;
      i < document.getElementsByClassName("navlink").length;
      i++
    ) {
      document.getElementsByClassName("navlink")[i].style.color = "#f5f5f5";
    }
  }
}
document.addEventListener("scroll", navchange);
