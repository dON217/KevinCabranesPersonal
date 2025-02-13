
document.addEventListener('DOMContentLoaded', () => {
    // Get all slider containers on the page
    const sliderContainers = document.querySelectorAll('.slider-container');
  
    // Loop over each container to create independent slider functionality
    sliderContainers.forEach((container) => {
      // Parse the images array from the data attribute
      const imagesData = container.getAttribute('data-images');
      const sliderImages = JSON.parse(imagesData);
      let currentSlide = 0;
  
      const sliderImageElement = container.querySelector('.slider-image');
      const prevButton = container.querySelector('.slider-btn.prev');
      const nextButton = container.querySelector('.slider-btn.next');
  
      // Function to show the correct slide
      function showSlide(index) {
        if (index < 0) {
          currentSlide = sliderImages.length - 1;
        } else if (index >= sliderImages.length) {
          currentSlide = 0;
        } else {
          currentSlide = index;
        }
        sliderImageElement.src = sliderImages[currentSlide];
        sliderImageElement.alt = `Slide ${currentSlide + 1}`;
      }
  
      // Event listeners for slider buttons
      prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
      });
      nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
      });
    });
  });