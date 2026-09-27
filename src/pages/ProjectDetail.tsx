import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import { ImageCarousel } from "../components/ImageCarousel";
import styles from "./ProjectDetail.module.css";

export const ProjectDetail = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const isEn = i18n.language === "en";

  if (!project) {
    return (
      <div className={styles.detail}>
        <p>{t("projects.notFound")}</p>
        <Link to="/projects" className={styles.back}>
          <FiArrowLeft /> {t("projects.back")}
        </Link>
      </div>
    );
  }

  const projectImages = project.images?.length
    ? project.images
    : [project.image];

  const title = isEn && project.titleEn ? project.titleEn : project.title;
  const subtitle = isEn && project.subtitleEn ? project.subtitleEn : project.subtitle;
  const description = isEn && project.descriptionEn ? project.descriptionEn : project.description;

  return (
    <div className={styles.detail}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/projects" className={styles.back}>
          <FiArrowLeft /> {t("projects.back")}
        </Link>

        <div className={styles.tags}>
          {project.company && (
            <span className={styles.companyTag}>{project.company}</span>
          )}
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitBtn}
          >
            <FiExternalLink size={16} />
            {t("projects.visitWeb")}
          </a>
        )}

        <div className={styles.mainLayout}>
          <div className={styles.leftCol}>
            <ImageCarousel images={projectImages} alt={title} />
          </div>

          <div className={styles.rightCol}>
            <div className={styles.sections}>
              {project.sections.map((section, i) => {
                const sTitle = isEn && section.titleEn ? section.titleEn : section.title;
                const sContent = isEn && section.contentEn ? section.contentEn : section.content;
                return (
                  <motion.section
                    key={section.id + i}
                    id={section.id}
                    className={styles.section}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <h2 className={styles.sectionTitle}>{sTitle}</h2>
                    <p className={styles.sectionContent}>{sContent}</p>
                  </motion.section>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};