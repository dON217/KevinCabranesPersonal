document.addEventListener('DOMContentLoaded', () => {
    /* --- Multi-Slider Functionality --- */
    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach((container) => {
      const imagesData = container.getAttribute('data-images');
      const sliderImages = JSON.parse(imagesData);
      let currentSlide = 0;
      const sliderImageElement = container.querySelector('.slider-image');
      const prevButton = container.querySelector('.slider-btn.prev');
      const nextButton = container.querySelector('.slider-btn.next');
  
      function showSlide(index) {
        if (index < 0) {
          currentSlide = sliderImages.length - 1;
        } else if (index >= sliderImages.length) {
          currentSlide = 0;
        } else {
          currentSlide = index;
        }
        
        // Fade out
        sliderImageElement.style.opacity = 0;
        
        // Wait for the fade-out transition to complete
        setTimeout(() => {
          // Update image source and alt text
          sliderImageElement.src = sliderImages[currentSlide];
          sliderImageElement.alt = `Slide ${currentSlide + 1}`;
          
          // Fade in the new image
          sliderImageElement.style.opacity = 1;
        }, 500); // Delay should match the CSS transition duration (500ms here)
      }
  
      prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
      });
  
      nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
      });
    });
  
    /* --- Dark Mode Toggle --- */
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌒";
    });
  
    /* --- Back-to-Top Button --- */
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    /* --- Navigation Active Link Highlighting --- */
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('main section');
    function activateNavLink() {
      let index = sections.length;
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      navLinks.forEach((link) => link.classList.remove('active'));
      if (navLinks[index]) {
        navLinks[index].classList.add('active');
      }
    }
    activateNavLink();
    window.addEventListener('scroll', activateNavLink);
  
  });
  