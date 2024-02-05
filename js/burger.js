document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.getElementById("burgerMenu");
  var mobileMenu = document.getElementById("mobileMenu");

  if (burgerMenu && mobileMenu) {
    burgerMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }
});
