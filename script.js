const navLinks = document.querySelectorAll(".menu > ul > li");
const mobileMenu = document.querySelector(".mobile__menu");
const hamburger = document.querySelector(".hamburger");
const hamburgerBtn = document.querySelector(".hamburger__btn");
const closeBtn = document.querySelector(".close__btn");

// toggle active class when a user clicks a link and remove the active class on that link if the user clicks another link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((link) => {
      if (!link.contains(event.target)) {
        link.classList.remove("active");
      }
    });

    link.classList.toggle("active");
  });
});

// Remove active class from the clicked link when the user scrolls
window.addEventListener("scroll", () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
});

// Remove active class from the clicked link when the user clicks outside the menu
window.addEventListener("click", (event) => {
  if (!event.target.closest(".menu")) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  if (
    !event.target.closest(".hamburger") &&
    !event.target.closest(".mobile__menu")
  ) {
    //Remove active class from mobile menu
    mobileMenu.classList.remove("active");
    hamburgerBtn.style.display = "block";
    closeBtn.style.display = "none";
  }
});

// Add active class to menu when the user clicks on the hamburger button
hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
});

// Remove active class from menu when the user clicks on the close button
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  hamburgerBtn.style.display = "block";
  closeBtn.style.display = "none";
});
