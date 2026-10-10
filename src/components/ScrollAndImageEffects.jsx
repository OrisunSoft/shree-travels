import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace only the 2 images where "AMRUTA" is painted directly across the center of the bus body
// Note: Keep 26.jpg, 29.jpg, 31.jpg, 32.jpg or clean equivalents as needed; cover bottom-right logo via CSS badge
const CLEAN_IMAGE_REPLACEMENTS = {
  '/img/Keyword Based Image/bus-on-rent-in-pune.jpeg': '/img/Keyword Based Image/Keyword Based Image-47.jpg',
  '/img/Keyword Based Image/Keyword Based Image-33.jpg': '/img/Keyword Based Image/Keyword Based Image-34.jpg'
};

const ScrollAndImageEffects = () => {
  const location = useLocation();

  useEffect(() => {
    let intersectionObserver = null;

    // Position a precision corner cover over any Keyword Based Image whose parent also contains .card-body or text
    const syncDirectImageBadgePosition = (img) => {
      const parent = img.parentElement;
      if (!parent) return;

      let badge = parent.querySelector(`.shree-direct-img-cover[data-for-img="${img.dataset.shreeImgId}"]`);
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'shree-direct-img-cover';
        badge.dataset.forImg = img.dataset.shreeImgId;
        badge.textContent = '✓ SHREE TRAVELS';
        const computedPos = window.getComputedStyle(parent).position;
        if (computedPos === 'static') {
          parent.style.position = 'relative';
        }
        parent.appendChild(badge);
      }

      const w = img.offsetWidth;
      const h = img.offsetHeight;
      if (w > 40 && h > 40) {
        const badgeW = Math.min(185, Math.max(96, Math.round(w * 0.215)));
        const badgeH = Math.min(72, Math.max(36, Math.round(h * 0.235)));
        badge.style.width = `${badgeW}px`;
        badge.style.height = `${badgeH}px`;
        badge.style.top = `${img.offsetTop + h - badgeH}px`;
        badge.style.left = `${img.offsetLeft + w - badgeW}px`;
        badge.style.display = 'flex';
      }
    };

    // 1. Show 100% Full Image (No Zoom) & Cover Bottom-Right "Amruta Travels" Logo via CSS Badge
    const applyLogoHidingEffects = () => {
      const images = document.querySelectorAll('main img');

      images.forEach((img, index) => {
        // Speed & Performance optimization: Async decoding and lazy loading
        if (!img.getAttribute('loading') && index > 0) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.getAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

        const rawSrc = img.getAttribute('src') || '';
        if (!rawSrc) return;

        const decodedSrc = decodeURIComponent(rawSrc);

        if (CLEAN_IMAGE_REPLACEMENTS[decodedSrc]) {
          img.setAttribute('src', CLEAN_IMAGE_REPLACEMENTS[decodedSrc]);
        }

        const currentSrc = decodeURIComponent(img.getAttribute('src') || '');
        const isKeywordImage =
          currentSrc.includes('Keyword Based Image') &&
          !currentSrc.includes('comfort-1') &&
          !currentSrc.includes('comfort-2') &&
          !currentSrc.includes('comfort-3') &&
          !currentSrc.includes('comfort-4');

        if (!isKeywordImage) return;

        // Add class that preserves 100% full image aspect ratio (zero zoom/crop)
        img.classList.add('amruta-logo-crop');

        if (!img.dataset.shreeImgId) {
          img.dataset.shreeImgId = `img-${index}-${Math.random().toString(36).slice(2, 7)}`;
        }

        const parent = img.parentElement;
        if (!parent) return;

        // Check if parent is a dedicated image container (no .card-body or text blocks below the image)
        const hasSiblingContent = Array.from(parent.children).some(
          (child) =>
            child !== img &&
            !child.classList.contains('position-absolute') &&
            !child.classList.contains('badge') &&
            !child.classList.contains('shree-direct-img-cover')
        );

        if (!hasSiblingContent && !parent.classList.contains('card') && !/\bcol(-\w+)*\b/.test(parent.className)) {
          parent.classList.add('amruta-logo-mask');
        } else {
          // Parent also holds card-body or padding — align cover badge directly to img bottom-right
          syncDirectImageBadgePosition(img);
          if (!img.dataset.loadListenerBound) {
            img.dataset.loadListenerBound = 'true';
            img.addEventListener('load', () => syncDirectImageBadgePosition(img));
          }
        }
      });
    };

    // 2. Tag Cards, Columns, Headings & Content Blocks for Scroll-Down Pop-Up & Both-Side Slide-In
    const setupScrollRevealElements = () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scroll-revealed');
              if (intersectionObserver) {
                intersectionObserver.unobserve(entry.target);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px 60px 0px',
          threshold: 0.02
        }
      );

      const allSections = Array.from(document.querySelectorAll('main section'));

      allSections.forEach((section, sectionIdx) => {
        section.classList.add('scroll-effect-section');

        const headings = section.querySelectorAll('h2, .lead, .section-header');
        headings.forEach((h) => {
          if (!h.dataset.scrollBound) {
            h.dataset.scrollBound = 'true';
            h.classList.add('scroll-reveal-item', 'scroll-reveal-pop');
          }
        });

        const rows = section.querySelectorAll('.row:not(.mobile-swipe-row):not(.areas-we-serve-grid)');
        rows.forEach((row) => {
          const isTopHeroRow = sectionIdx === 0 && row === section.querySelector('.row');
          const cols = Array.from(row.children).filter((child) =>
            /\bcol(-\w+)*\b/.test(child.className)
          );

          cols.forEach((col, colIdx) => {
            if (col.querySelector('.row, .card-slider-wrapper, .table-responsive, .area-grid-card')) return;
            if (col.closest('.areas-we-serve-grid')) return;
            if (isTopHeroRow && colIdx === 0) return;

            if (!col.dataset.scrollBound) {
              col.dataset.scrollBound = 'true';
              const sideClass = colIdx % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right';
              col.classList.add('scroll-reveal-item', sideClass);
              const staggerMs = (colIdx % 4) * 75;
              col.style.setProperty('--scroll-stagger', `${staggerMs}ms`);
            }
          });
        });

        const sliders = section.querySelectorAll('.card-slider-wrapper, .mobile-swipe-row');
        sliders.forEach((slider, sIdx) => {
          if (!slider.dataset.scrollBound) {
            slider.dataset.scrollBound = 'true';
            const sideClass = sIdx % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right';
            slider.classList.add('scroll-reveal-item', sideClass);
          }

          const items = slider.querySelectorAll('.card-slider-item, [class*="col-"]');
          items.forEach((item, itemIdx) => {
            if (!item.dataset.scrollBound) {
              item.dataset.scrollBound = 'true';
              const itemSide = itemIdx % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right';
              item.classList.add('scroll-reveal-item', itemSide);
              item.style.setProperty('--scroll-stagger', `${(itemIdx % 4) * 80}ms`);
            }
          });
        });

        // Do NOT put transform on .table-responsive or tbody tr so mobile horizontal table scroll works natively
        const standaloneItems = section.querySelectorAll('.accordion-item');
        standaloneItems.forEach((item, idx) => {
          if (!item.dataset.scrollBound) {
            item.dataset.scrollBound = 'true';
            const sideClass = idx % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right';
            item.classList.add('scroll-reveal-item', sideClass);
            item.style.setProperty('--scroll-stagger', `${(idx % 3) * 65}ms`);
          }
        });
      });

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const allRevealItems = document.querySelectorAll('.scroll-reveal-item');

      allRevealItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.88 && rect.bottom > 0) {
          el.classList.add('scroll-revealed');
        }
        intersectionObserver.observe(el);
      });
    };

    applyLogoHidingEffects();
    setupScrollRevealElements();

    const timerId = setTimeout(() => {
      applyLogoHidingEffects();
      setupScrollRevealElements();
    }, 200);

    const handleResize = () => {
      document.querySelectorAll('main img.amruta-logo-crop').forEach((img) => {
        const parent = img.parentElement;
        if (parent && !parent.classList.contains('amruta-logo-mask')) {
          syncDirectImageBadgePosition(img);
        }
      });
    };

    window.addEventListener('resize', handleResize);

    const mutationObserver = new MutationObserver(() => {
      applyLogoHidingEffects();
    });

    const mainEl = document.querySelector('main');
    if (mainEl) {
      mutationObserver.observe(mainEl, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', handleResize);
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollAndImageEffects;
