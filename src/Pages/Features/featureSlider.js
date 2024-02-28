const slider = document.querySelector('.feature-slider');
const dots = document.querySelectorAll('.w-slider-dot');
const paragraphs = document.querySelectorAll('.feature-slide-paragraph');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('w-active'));

    dot.classList.add('w-active');

    const totalSlides = dots.length;
    slider.querySelector('.w-slider-aria-label').textContent = `Slide ${index + 1} of ${totalSlides}`;

    
    paragraphs.forEach((p, i) => {
      if (i === index) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  });
});
