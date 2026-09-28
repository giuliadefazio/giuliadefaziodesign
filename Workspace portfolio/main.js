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

      if (navList) {
        const drawerList = navList.cloneNode(true);
        // Aggiunge "Home" in cima al menu a tendina (su desktop il logo porta gia' alla home)
        if (!drawerList.querySelector('a[href="index.html"]')) {
          const homeItem = document.createElement('li');
          const homeLink = document.createElement('a');
          homeLink.href = 'index.html';
          homeLink.textContent = 'Home';
          const currentPage = window.location.pathname.split('/').pop();
          if (currentPage === '' || currentPage === 'index.html') {
            homeLink.classList.add('active');
          }
          homeItem.appendChild(homeLink);
          drawerList.insertBefore(homeItem, drawerList.firstChild);
        }
        mobileDrawer.appendChild(drawerList);
      }
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
  const heroBtnText = document.getElementById('hero-slide-btn-text');
  const arrowPrev = document.getElementById('hero-arrow-prev');
  const arrowNext = document.getElementById('hero-arrow-next');

  const heroData = [
    {
      title: "Flow State",
      desc: "Capsule collection di acqua premium pensata come rituale quotidiano per rilassarsi e gestire lo stress.",
      link: "flowstate.html",
      btnText: "Vedi progetto"
    },
    {
      title: "Trama",
      desc: "Un’installazione urbana sui difetti che nascondiamo e su come cambiano quando li guardiamo attraverso gli occhi di uno sconosciuto.",
      link: "trama.html",
      btnText: "Vedi progetto"
    },
    {
      title: "Nomen",
      desc: "Cortometraggio mystery ambientato nella Torino esoterica, tra tarocchi, coincidenze inquietanti e una parola misteriosa.",
      link: "nomen.html",
      btnText: "Vedi progetto"
    },
    {
      title: 'Copertina "Il compagno di sbronze"',
      desc: 'Copertina illustrata di "Compagno di sbronze" di Charles Bukowski, realizzata per la collana Narratori di Feltrinelli.',
      link: "illustrazioni.html#charles",
      btnText: "Vedi illustrazione"
    },
    {
      title: 'Locandina "Il Re Leone"',
      desc: 'Locandina del film Il Re Leone, realizzata in digitale con Procreate per un progetto universitario, disponibile a colori e in monocromatico.',
      link: "illustrazioni.html#re-leone",
      btnText: "Vedi illustrazione"
    },
    {
      title: "L'inganno della donna del bosco",
      desc: "Illustrazione sulla duplice natura della Huldra, spirito del folklore scandinavo: bellezza luminosa in superficie e natura animale riflessa.",
      link: "illustrazioni.html#linganno",
      btnText: "Vedi illustrazione"
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
        if (heroBtnText) {
          heroBtnText.textContent = heroData[targetIndex].btnText || 'Vedi progetto';
        }

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

  // ---------- EDITORIAL PROJECT INDEX (FLOATING CURSOR PREVIEW) ----------
  const projectIndex = document.getElementById('project-index');
  const previewCard = document.getElementById('project-preview-card');

  if (projectIndex && previewCard) {
    const projectRows = projectIndex.querySelectorAll('.project-row');
    const previewImages = previewCard.querySelectorAll('.project-preview-card__img');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none)').matches;

    if (!isTouchDevice && !prefersReducedMotion) {
      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let isVisible = false;
      let isAnimating = false;

      function updatePosition() {
        if (!isVisible && Math.abs(targetX - currentX) < 0.5 && Math.abs(targetY - currentY) < 0.5) {
          isAnimating = false;
          return;
        }

        // Smooth fluid lerp
        currentX += (targetX - currentX) * 0.14;
        currentY += (targetY - currentY) * 0.14;

        previewCard.style.left = `${currentX.toFixed(1)}px`;
        previewCard.style.top = `${currentY.toFixed(1)}px`;

        requestAnimationFrame(updatePosition);
      }

      function onMouseMove(e) {
        const cardWidth = previewCard.offsetWidth || 320;
        const cardHeight = previewCard.offsetHeight || 200;

        // Position slightly to the right of cursor
        let x = e.clientX + 32;
        let y = e.clientY - (cardHeight / 2);

        // Keep inside viewport bounds
        if (x + cardWidth > window.innerWidth - 24) {
          x = e.clientX - cardWidth - 32;
        }
        if (y < 24) {
          y = 24;
        } else if (y + cardHeight > window.innerHeight - 24) {
          y = window.innerHeight - cardHeight - 24;
        }

        targetX = x;
        targetY = y;

        if (!isAnimating) {
          isAnimating = true;
          requestAnimationFrame(updatePosition);
        }
      }

      projectRows.forEach((row) => {
        row.addEventListener('mouseenter', (e) => {
          const idx = row.getAttribute('data-project-idx');
          projectIndex.classList.add('has-hovered-row');

          // Activate matching preview image
          previewImages.forEach((img) => {
            img.classList.toggle('is-active', img.getAttribute('data-preview-idx') === idx);
          });

          // Compute immediate position on first enter to prevent jumping
          const cardWidth = previewCard.offsetWidth || 320;
          const cardHeight = previewCard.offsetHeight || 200;
          let initX = e.clientX + 32;
          let initY = e.clientY - (cardHeight / 2);
          if (initX + cardWidth > window.innerWidth - 24) initX = e.clientX - cardWidth - 32;
          if (initY < 24) initY = 24;

          if (!isVisible) {
            currentX = initX;
            currentY = initY;
            previewCard.style.left = `${currentX}px`;
            previewCard.style.top = `${currentY}px`;
          }

          targetX = initX;
          targetY = initY;

          isVisible = true;
          previewCard.classList.add('is-visible');

          if (!isAnimating) {
            isAnimating = true;
            requestAnimationFrame(updatePosition);
          }
        });
      });

      projectIndex.addEventListener('mousemove', onMouseMove);

      projectIndex.addEventListener('mouseleave', () => {
        projectIndex.classList.remove('has-hovered-row');
        previewCard.classList.remove('is-visible');
        isVisible = false;
      });
    }
  }

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

  // ---------- 3D PAPER SKETCHBOOK (MANUAL CLOSED -> OPEN DUAL-PAGE SYSTEM) ----------
  const sketchbook = document.getElementById('sketchbook');
  if (sketchbook) {
    const sheets = Array.from(sketchbook.querySelectorAll('.sketchbook__sheet'));
    const counterEl = document.getElementById('sketchbook-counter');
    const hintEl = document.getElementById('sketchbook-hint');
    const totalSheets = sheets.length; // 5 sheets (0 = cover, 1..4 = plates 1..4)
    const maxSpread = totalSheets; // 0 = closed cover, 1..4 = plates, 5 = CTA end spread
    let currentSpread = 0; // starts closed at spread 0
    let isFlipping = false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set resting z-indices for all sheets based on current spread
    function updateRestingZIndices(spread) {
      sheets.forEach((sheet, i) => {
        if (i < spread) {
          // Flipped to left stack: sheet i is on top of sheet i-1
          sheet.style.zIndex = i + 1;
        } else {
          // Unflipped on right stack: sheet i is on top of sheet i+1
          sheet.style.zIndex = totalSheets - i;
        }
      });
    }

    // Update UI elements (counter and hint)
    function updateMeta(spread) {
      const tapWord = window.matchMedia('(pointer: coarse)').matches ? 'Tocca' : 'Clicca';
      const numPlates = totalSheets - 1;
      if (counterEl) {
        if (spread >= 1 && spread <= numPlates) {
          counterEl.textContent = `0${spread} / 0${numPlates}`;
        } else {
          counterEl.textContent = '';
        }
      }

      if (hintEl) {
        if (spread === 0) {
          hintEl.textContent = `${tapWord} per aprire`;
        } else if (spread === maxSpread) {
          hintEl.textContent = `${tapWord} per richiudere`;
        } else {
          hintEl.textContent = `${tapWord} per sfogliare`;
        }
      }
    }

    // Adatta l'album alla larghezza disponibile (su telefono lo rimpicciolisce,
    // mantenendo la doppia pagina visibile). Su desktop la scala resta 1.
    function fitBookToWidth() {
      const holder = sketchbook.parentElement;
      if (!holder) return;
      const avail = holder.clientWidth;
      if (!avail) return;
      // un po' di margine ai lati (94%) cosi' l'album non tocca i bordi dello schermo
      const sOpen = Math.min(1, (avail * 0.94) / 586);
      const sClosed = Math.min(1, (avail * 0.94) / 300);
      sketchbook.style.setProperty('--s-open', sOpen.toFixed(4));
      sketchbook.style.setProperty('--s-closed', sClosed.toFixed(4));
    }
    fitBookToWidth();
    window.addEventListener('resize', fitBookToWidth);
    window.addEventListener('orientationchange', fitBookToWidth);

    // Initialize book in closed state
    function initBook() {
      sketchbook.classList.add('is-closed');
      sketchbook.classList.remove('is-open');
      sheets.forEach(sheet => {
        sheet.classList.remove('is-flipped', 'is-turning');
      });
      updateRestingZIndices(0);
      updateMeta(0);
    }

    // Core flip function
    function flipTo(targetSpread) {
      if (isFlipping) return;
      if (targetSpread === currentSpread) return;
      if (targetSpread < 0 || targetSpread > maxSpread) return;

      isFlipping = true;
      const goingForward = targetSpread > currentSpread;
      const count = Math.abs(targetSpread - currentSpread);
      sketchbook.classList.add('is-turning-sheet');

      // Book closed/open state toggling
      if (targetSpread === 0) {
        const closeSlideDelay = count > 1 ? 500 : 250;
        setTimeout(() => {
          sketchbook.classList.add('is-closed');
          sketchbook.classList.remove('is-open');
        }, closeSlideDelay);
      } else {
        // Opening the book: slide to center immediately
        sketchbook.classList.remove('is-closed');
        sketchbook.classList.add('is-open');
      }

      updateMeta(targetSpread);

      if (prefersReducedMotion) {
        // Simple direct transition without 3D rotation
        sheets.forEach((sheet, i) => {
          sheet.classList.toggle('is-flipped', i < targetSpread);
        });
        updateRestingZIndices(targetSpread);
        currentSpread = targetSpread;
        sketchbook.classList.remove('is-turning-sheet');
        isFlipping = false;
        return;
      }

      if (goingForward) {
        let delay = 0;
        for (let i = currentSpread; i < targetSpread; i++) {
          const sheet = sheets[i];
          const sheetIdx = i;
          setTimeout(() => {
            sheet.style.zIndex = 50 + (sheetIdx - currentSpread);
            sheet.classList.add('is-turning', 'is-flipped');

            setTimeout(() => {
              sheet.classList.remove('is-turning');
            }, 800);
          }, delay);
          delay += (count > 1 ? 90 : 0);
        }

        setTimeout(() => {
          currentSpread = targetSpread;
          updateRestingZIndices(currentSpread);
          sketchbook.classList.remove('is-turning-sheet');
          isFlipping = false;
        }, delay + 820);

      } else {
        let delay = 0;
        for (let i = currentSpread - 1; i >= targetSpread; i--) {
          const sheet = sheets[i];
          const sheetIdx = i;
          setTimeout(() => {
            sheet.style.zIndex = 50 + (currentSpread - 1 - sheetIdx);
            sheet.classList.add('is-turning');
            sheet.classList.remove('is-flipped');

            setTimeout(() => {
              sheet.classList.remove('is-turning');
            }, 800);
          }, delay);
          delay += (count > 1 ? 90 : 0);
        }

        setTimeout(() => {
          currentSpread = targetSpread;
          updateRestingZIndices(currentSpread);
          sketchbook.classList.remove('is-turning-sheet');
          isFlipping = false;
        }, delay + 820);
      }
    }

    function flipNext() {
      if (currentSpread < maxSpread) {
        flipTo(currentSpread + 1);
      } else if (currentSpread === maxSpread) {
        flipTo(0);
      }
    }

    function flipPrev() {
      if (currentSpread > 0) {
        flipTo(currentSpread - 1);
      }
    }

    // Direct click on sketchbook
    sketchbook.addEventListener('click', (e) => {
      // Allow clicking normal links inside pages (e.g. CTA button on page 6)
      if (e.target.closest('a')) return;

      if (isFlipping) return;

      // When closed, any click opens the book to spread 1
      if (currentSpread === 0) {
        flipTo(1);
        return;
      }

      // When on the final page, clicking anywhere on the book closes it back
      if (currentSpread === maxSpread) {
        flipTo(0);
        return;
      }

      // When open on spreads 1..5: determine if click is on left or right half
      const rect = sketchbook.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const isLeftClick = clickX < (rect.width * 0.48);

      if (isLeftClick) {
        flipPrev();
      } else {
        flipNext();
      }
    });

    // Touch Swipe navigation on Mobile
    let touchStartX = 0;
    let touchStartY = 0;

    sketchbook.addEventListener('touchstart', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    sketchbook.addEventListener('touchend', (e) => {
      if (e.target.closest('a')) return;
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const dx = touchEndX - touchStartX;
      const dy = touchEndY - touchStartY;

      // Horizontal swipe threshold: > 35px and more horizontal than vertical
      if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        if (dx < 0) {
          flipNext(); // Swipe left -> advance (or close on last page)
        } else {
          flipPrev(); // Swipe right -> back
        }
      }
    }, { passive: true });

    // Keyboard Arrow navigation (active when teaser section is visible or book has focus)
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;

      const teaserSection = document.getElementById('illustrazioni');
      if (!teaserSection) return;
      const rect = teaserSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      const isFocused = document.activeElement === sketchbook || sketchbook.contains(document.activeElement);

      if (!inView && !isFocused) return;

      if (e.key === 'ArrowRight') {
        flipNext();
      } else if (e.key === 'ArrowLeft') {
        flipPrev();
      }
    });

    // Initialize
    initBook();
  }

});
