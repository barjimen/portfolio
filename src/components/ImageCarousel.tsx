import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import styles from "./ImageCarousel.module.css";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, current]);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  const goTo = (index: number) => setCurrent(index);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = () =>
    setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const lightboxNext = () =>
    setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <>
      <div className={styles.carousel}>
        <div
          className={styles.mainImageWrapper}
          onClick={() => openLightbox(current)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`${alt} ${current + 1}`}
              className={styles.mainImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                className={`${styles.navBtn} ${styles.navBtnPrev}`}
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Anterior"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                className={`${styles.navBtn} ${styles.navBtnNext}`}
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Siguiente"
              >
                <FiChevronRight size={18} />
              </button>
              <span className={styles.counter}>
                {current + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className={styles.thumbnails}>
            {images.map((img, i) => (
              <button
                key={i}
                className={`${styles.thumbnail} ${
                  i === current ? styles.thumbnailActive : ""
                }`}
                onClick={() => goTo(i)}
                aria-label={`Imagen ${i + 1}`}
              >
                <img src={img} alt="" className={styles.thumbnailImg} />
              </button>
            ))}
          </div>
        )}
      </div>

      {createPortal(
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              className={styles.lightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightboxOpen(false)}
            >
              <button
                className={styles.lightboxClose}
                onClick={() => setLightboxOpen(false)}
                aria-label="Cerrar"
              >
                <FiX size={20} />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      lightboxPrev();
                    }}
                    aria-label="Anterior"
                  >
                    <FiChevronLeft size={24} />
                  </button>
                  <button
                    className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      lightboxNext();
                    }}
                    aria-label="Siguiente"
                  >
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}

              <motion.img
                key={lightboxIndex}
                src={images[lightboxIndex]}
                alt={`${alt} ${lightboxIndex + 1}`}
                className={styles.lightboxImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              />

              {images.length > 1 && (
                <span className={styles.lightboxCounter}>
                  {lightboxIndex + 1} / {images.length}
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};