let menu = document.getElementById("menu")
let navigation_bar = document.getElementsByClassName("nav")[0]
menu.addEventListener("click", function () {
  navigation_bar.classList.toggle("open");
  this.classList.toggle("close")
})