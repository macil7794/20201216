$(document).ready(function () {
  setTimeout(() => {
    var animationToPoint = document.getElementById("animation-to-point")
    animationToPoint.beginElement()
    setTimeout(() => {
      $("polygon.st20")[0].style.transition = "fill 0.5s ease"
    }, 500)
  }, 2850)
})