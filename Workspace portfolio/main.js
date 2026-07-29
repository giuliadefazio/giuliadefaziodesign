document.addEventListener('DOMContentLoaded', () => {

  // ---------- MOBILE MENU TOGGLE & DRAWER ----------
  const header = document.querySelector('.site-header');
  if (header) {
    const navList = header.querySelector('.nav-links-list');
    const contactBtn = header.querySelector('.button-043');

    let toggleBtn = header.querySelector('.mobile-nav-toggle');
    if (!toggleBtn && navList) {
      toggleBtn = document.createElement('button');
      toggleBtn.className = 'mobile-nav-toggle';
      toggleBtn.setAttribute('aria-label', 'Menu');
      toggleBtn.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
      `;
      header.appendChild(toggleBtn);

      const mobileDrawer = document.createElement('div');
      mobileDrawer.className = 'mobile-nav-drawer';

      if (navList) mobileDrawer.appendChild(navList.cloneNode(true));
      if (contactBtn) mobileDrawer.appendChild(contactBtn.cloneNode(true));

      document.body.appendChild(mobileDrawer);

      toggleBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('is-open');
        toggleBtn.classList.toggle('is-active', isOpen);
        document.body.classList.toggle('nav-drawer-open', isOpen);
      });

      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('is-open');
          toggleBtn.classList.remove('is-active');
          document.body.classList.remove('nav-drawer-open');
        });
      });
    }
  }

  // ---------- HERO SLIDESHOW ----------
  const heroSlides = document.querySelectorAll('.home-hero__slide');
  const heroDots = document.querySelectorAll('.home-hero__dot');
  const heroTitle = document.getElementById('hero-slide-title');
  const heroDesc = document.getElementById('hero-slide-desc');
  const heroLink = document.getElementById('hero-slide-link');
  const arrowPrev = document.getElementById('hero-arrow-prev');
  const arrowNext = document.getElementById('hero-arrow-next');

  const heroData = [
    {
      title: "Flow State",
      desc: "Capsule collection di acqua premium pensata come rituale quotidiano per rilassarsi e gestire lo stress.",
      link: "flowstate.html"
    },
    {
      title: "Trama",
      desc: "Un’installazione urbana sui difetti che nascondiamo e su come cambiano quando li guardiamo attraverso gli occhi di uno sconosciuto.",
      link: "trama.html"
    },
    {
      title: "Nomen",
      desc: "Cortometraggio mystery ambientato nella Torino esoterica, tra tarocchi, coincidenze inquietanti e una parola misteriosa.",
      link: "nomen.html"
    },
    {
      title: "Welcome back, Champion",
      desc: "Campagna per SUSTAINera che presenta i ricambi rigenerati come prodotti affidabili, performanti e sostenibili.",
      link: "welcome-back-champion.html"
    }
  ];

  let currentSlide = 0;
  let slideInterval = null;

  const goToSlide = (index) => {
    let targetIndex = index;
    if (targetIndex < 0) targetIndex = heroSlides.length - 1;
    if (targetIndex >= heroSlides.length) targetIndex = 0;

    heroSlides.forEach(slide => slide.classList.remove('is--current'));
    heroDots.forEach(dot => dot.classList.remove('is--current'));

    if (heroSlides[targetIndex]) heroSlides[targetIndex].classList.add('is--current');
    if (heroDots[targetIndex]) heroDots[targetIndex].classList.add('is--current');

    currentSlide = targetIndex;

    if (heroTitle && heroDesc && heroLink && heroData[targetIndex]) {
      heroTitle.style.opacity = '0';
      heroDesc.style.opacity = '0';

      setTimeout(() => {
        heroTitle.textContent = heroData[targetIndex].title;
        heroDesc.textContent = heroData[targetIndex].desc;
        heroLink.setAttribute('href', heroData[targetIndex].link);

        heroTitle.style.opacity = '1';
        heroDesc.style.opacity = '1';
      }, 150);
    }
  };

  if (heroSlides.length > 0) {
    // Dot click listeners
    heroDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetTimer();
      });
    });

    // Arrow click listeners
    if (arrowPrev) {
      arrowPrev.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetTimer();
      });
    }

    if (arrowNext) {
      arrowNext.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetTimer();
      });
    }

    // Auto-scroll every 3000ms (3 seconds)
    const startTimer = () => {
      slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 3000);
    };

    const resetTimer = () => {
      clearInterval(slideInterval);
      startTimer();
    };

    startTimer();
  }

  // ---------- ORBIT TILES 3D TILT EFFECT ----------
  const tiltCards = document.querySelectorAll('[data-orbit-tilt]');
  
  tiltCards.forEach(card => {
    const tiltInner = card.querySelector('.orbit-card__tilt');
    if (!tiltInner) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      tiltInner.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      tiltInner.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });

  // ---------- GLOBAL REVEAL ON SCROLL ----------
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      // Check if already in viewport on load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view');
      } else {
        revealObserver.observe(el);
      }
    });
  }

  // ---------- PROJECT DETAIL PAGE IMAGE CAROUSELS ----------
  const projectCarousels = document.querySelectorAll('.carousel-container');

  projectCarousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-img');
    const prevBtn = carousel.querySelector('.carousel-arrow.prev');
    const nextBtn = carousel.querySelector('.carousel-arrow.next');

    if (images.length <= 1) return;

    let activeIdx = Array.from(images).findIndex(img => img.classList.contains('active'));
    if (activeIdx === -1) activeIdx = 0;

    const showImage = (index) => {
      let targetIndex = index;
      if (targetIndex < 0) targetIndex = images.length - 1;
      if (targetIndex >= images.length) targetIndex = 0;

      images.forEach(img => img.classList.remove('active'));
      images[targetIndex].classList.add('active');
      activeIdx = targetIndex;
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showImage(activeIdx - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showImage(activeIdx + 1);
      });
    }

    carousel.setAttribute('tabindex', '0');
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-roledescription', 'carosello');
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        showImage(activeIdx + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showImage(activeIdx - 1);
      }
    });
  });

  // ---------- EXPERIENCE CAROUSELS (TRAMA & GABBIA) ----------
  const expCarousels = document.querySelectorAll('.experience-carousel-wrap');

  expCarousels.forEach(carousel => {
    const track = carousel.querySelector('.experience-carousel-track');
    const slides = carousel.querySelectorAll('.experience-slide');
    const prevBtn = carousel.querySelector('.exp-btn.prev');
    const nextBtn = carousel.querySelector('.exp-btn.next');
    const counter = carousel.querySelector('.experience-counter');
    const dotsContainer = carousel.querySelector('.experience-dots');

    if (!track || slides.length === 0) return;

    let currentExpSlide = 0;

    if (dotsContainer && dotsContainer.children.length === 0) {
      slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('exp-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => updateExpSlide(i));
        dotsContainer.appendChild(dot);
      });
    }

    const updateExpSlide = (index) => {
      let targetIndex = index;
      if (targetIndex < 0) targetIndex = slides.length - 1;
      if (targetIndex >= slides.length) targetIndex = 0;

      track.style.transform = `translateX(-${targetIndex * 100}%)`;

      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === targetIndex);
      });

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.exp-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === targetIndex);
        });
      }

      currentExpSlide = targetIndex;

      if (counter) {
        const currentStr = String(currentExpSlide + 1).padStart(2, '0');
        const totalStr = String(slides.length).padStart(2, '0');
        counter.textContent = `${currentStr} / ${totalStr}`;
      }
    };

    updateExpSlide(0);

    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        updateExpSlide(currentExpSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        updateExpSlide(currentExpSlide - 1);
      }
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateExpSlide(currentExpSlide - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateExpSlide(currentExpSlide + 1);
      });
    }
  });

  // ---------- READING PROGRESS BAR (SINGLE PROJECT PAGES ONLY) ----------
  if (document.querySelector('.project-nav')) {
    const progressBar = document.createElement('div');
    progressBar.classList.add('read-progress-bar');
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
      }
    });
  }

});
