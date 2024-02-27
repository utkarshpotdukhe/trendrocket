const featureSlider = document.querySelector('.feature-slider');
const slides = featureSlider.querySelectorAll('.feature-slide');
const dots = featureSlider.querySelectorAll('.w-slider-dot');

let currentSlide = 0;

function goToSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    slide.style.transition = 'transform 500ms ease';

    dots[index].setAttribute('aria-pressed', index === slideIndex);
  });

  currentSlide = slideIndex;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

goToSlide(currentSlide);
