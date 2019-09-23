
  // Navigation Functions

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");


  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger animation
    burger.classList.toggle('toggle');
  });
}

  // Accordion

const collapseables = document.querySelectorAll('button.collapse');

for(let i = 0; i < collapseables.length; i ++) {
  collapseables[i].onclick = function(){
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
};




  // Call Functions
navSlide();
