import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

type TabType = "todos" | "trabajo" | "personal";

const getItemsPerView = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
};

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const [activeTab, setActiveTab] = useState<TabType>("todos");
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProjects =
    activeTab === "todos"
      ? [...projects].sort((a, b) => a.order - b.order)
      : projects.filter((p) => p.type === activeTab).sort((a, b) => a.order - b.order);

  const maxIndex = Math.max(0, filteredProjects.length - itemsPerView);

  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const goTo = (index: number) => setCurrent(index);

  const totalDots = maxIndex + 1;

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrent(0);
  };

  return (
    <div className={styles.projects}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>
          <span className={styles.titleAccent}>{t("projects.title")}</span>
        </h1>
        <p className={styles.subtitle}>
          {t("projects.subtitle")}
        </p>

        <div className={styles.tabs}>
          {(
            [
              { key: "todos", label: t("projects.tabs.all") },
              { key: "trabajo", label: t("projects.tabs.work") },
              { key: "personal", label: t("projects.tabs.personal") },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ""}`}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className={styles.carousel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${current * (100 / itemsPerView)}%)`,
            }}
          >
            {filteredProjects.map((project) => {
              const title = isEn && project.titleEn ? project.titleEn : project.title;
              const subtitle = isEn && project.subtitleEn ? project.subtitleEn : project.subtitle;
              const description = isEn && project.descriptionEn ? project.descriptionEn : project.description;
              return (
                <div key={project.id} className={styles.slide}>
                  <Link to={`/projects/${project.id}`} className={styles.card}>
                    <div className={styles.cardImageWrapper}>
                      <img
                        src={project.image}
                        alt={title}
                        className={styles.cardImage}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTags}>
                        {project.company && (
                          <span className={styles.companyTag}>
                            {project.company}
                          </span>
                        )}
                        {project.role && (
                          <span className={styles.roleTag}>
                            {isEn && project.roleEn ? project.roleEn : project.role}
                          </span>
                        )}
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className={styles.cardTag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={styles.cardTitle}>{title}</h3>
                      <p className={styles.cardSubtitle}>{subtitle}</p>
                      <p className={styles.cardDesc}>{description}</p>
                      <span className={styles.cardCta}>
                        {t("projects.viewProject")} <FiArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {filteredProjects.length > itemsPerView && (
            <div className={styles.controls}>
              <button
                className={styles.controlBtn}
                onClick={prev}
                aria-label="Anterior"
              >
                <FiChevronLeft size={20} />
              </button>

              <div className={styles.dots}>
                {Array.from({ length: totalDots }).map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Página ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className={styles.controlBtn}
                onClick={next}
                aria-label="Siguiente"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};