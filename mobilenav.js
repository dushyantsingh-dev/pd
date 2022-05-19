function showMobileNav() {
  var x = document.getElementById("mobileNav");
  x.style.display = "block";
  document.body.style.overflow = "hidden";
}

document
  .getElementById("mobilenavbtn")
  .addEventListener("click", showMobileNav);

function hideMobileNav() {
  var x = document.getElementById("mobileNav");
  x.style.display = "none";
  document.body.style.overflow = "auto";
}
document
  .getElementById("closemobilenav")
  .addEventListener("click", hideMobileNav);
