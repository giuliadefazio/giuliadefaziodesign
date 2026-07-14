document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  
  revealEls.forEach(el => io.observe(el));

  // CAROUSEL LOGIC
  const carousels = document.querySelectorAll('.carousel-container');
  carousels.forEach(carousel => {
    const imgs = carousel.querySelectorAll('.carousel-img');
    const prevBtn = carousel.querySelector('.carousel-arrow.prev');
    const nextBtn = carousel.querySelector('.carousel-arrow.next');
    let currentIndex = 0;
    
    if (imgs.length === 0 || !prevBtn || !nextBtn) return;
    
    const showImage = (index) => {
      imgs.forEach(img => img.classList.remove('active'));
      imgs[index].classList.add('active');
    };
    
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
      showImage(currentIndex);
    });
    
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % imgs.length;
      showImage(currentIndex);
    });
  });
});
