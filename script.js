document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
  
    
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("bx-x");
    });
  
   
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
      });
    });
  });
  