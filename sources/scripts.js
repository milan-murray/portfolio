document.getElementById("ReturnToTopBtn").style.display = "none";

let scrollTopBtn = document.getElementById("ReturnToTopBtn");

window.onscroll = function() {showScrollBtn()};

function showScrollBtn() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}
