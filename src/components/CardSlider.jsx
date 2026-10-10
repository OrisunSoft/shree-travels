import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Reusable interactive horizontal CardSlider component with:
 * - Prev / Next navigation buttons
 * - Auto-slide with pause-on-hover and touch support
 * - Smooth scroll-snap pagination dots
 * - Configurable cards per view on desktop/tablet/mobile
 */
const CardSlider = ({
  children,
  autoPlay = true,
  interval = 4200,
  cardsPerView = 3,
  className = '',
  showDots = true
}) => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const items = React.Children.toArray(children);
  const totalItems = items.length;

  const scrollToIndex = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track || totalItems === 0) return;
      const clampedIndex = ((index % totalItems) + totalItems) % totalItems;
      const cardElement = track.children[clampedIndex];
      if (cardElement) {
        setIsFading(true);
        const scrollLeft = cardElement.offsetLeft - track.offsetLeft;
        track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        setActiveIndex(clampedIndex);
        setTimeout(() => setIsFading(false), 360);
      }
    },
    [totalItems]
  );

  const handlePrev = () => {
    scrollToIndex(activeIndex - 1);
  };

  const handleNext = useCallback(() => {
    const track = trackRef.current;
    if (!track || totalItems === 0) return;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScrollLeft - 16) {
      setIsFading(true);
      track.scrollTo({ left: 0, behavior: 'smooth' });
      setActiveIndex(0);
      setTimeout(() => setIsFading(false), 360);
    } else {
      scrollToIndex(activeIndex + 1);
    }
  }, [activeIndex, scrollToIndex, totalItems]);

  useEffect(() => {
    if (!autoPlay || isPaused || totalItems <= 1) return undefined;
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, handleNext, totalItems]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const firstCardWidth = track.children[0].offsetWidth || 300;
    const newIndex = Math.round(track.scrollLeft / (firstCardWidth + 20));
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalItems) {
      setActiveIndex(newIndex);
    }
  };

  const colClass =
    cardsPerView === 4
      ? 'card-slider-item card-slider-cols-4'
      : cardsPerView === 2
      ? 'card-slider-item card-slider-cols-2'
      : 'card-slider-item card-slider-cols-3';

  return (
    <div
      className={`card-slider-wrapper position-relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {totalItems > 1 && (
        <>
          <button
            type="button"
            className="card-slider-nav-btn card-slider-prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <FaChevronLeft size={15} />
          </button>
          <button
            type="button"
            className="card-slider-nav-btn card-slider-next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <FaChevronRight size={15} />
          </button>
        </>
      )}

      <div
        ref={trackRef}
        className="card-slider-track"
        onScroll={handleScroll}
      >
        {items.map((child, idx) => (
          <div
            className={`${colClass} ${idx === activeIndex ? 'slider-item-active' : ''} ${
              isFading && idx !== activeIndex ? 'slider-item-fading' : ''
            }`}
            key={idx}
          >
            {child}
          </div>
        ))}
      </div>

      {showDots && totalItems > 1 && (
        <div className="card-slider-dots d-flex justify-content-center align-items-center gap-2 mt-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              className={`card-slider-dot ${idx === activeIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSlider;
