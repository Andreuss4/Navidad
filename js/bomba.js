document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".containerReal").style.display = "block";
  }, 5000);
});