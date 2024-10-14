const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Get the navbar
const navbar = document.getElementById("banner");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add scroll event listener
window.onscroll = function() {
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};


