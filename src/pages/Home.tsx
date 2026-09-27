import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../data/portfolio";
import { projects } from "../data/projects";
import styles from "./Home.module.css";

const featuredProjects = projects.filter((p) => p.featured);

export const Home = () => {
  const { t } = useTranslation();
  const { personal } = portfolioData;

  return (
    <div className={styles.home}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t("home.greeting")}
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className={styles.nameAccent}>{personal.name}</span>
        </motion.h1>

        <motion.p
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {t("home.role")}
        </motion.p>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t("home.tagline")}
        </motion.p>

        <motion.div
          className={styles.heroActions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/about" className={`${styles.btn} ${styles.btnPrimary}`}>
            {t("home.knowMore")} <FiArrowRight />
          </Link>
          <Link to="/projects" className={`${styles.btn} ${styles.btnGhost}`}>
            {t("home.viewProjects")}
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.projectsSide}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className={styles.projectsFade} />
        <div className={styles.projectsScroll}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Link
                to={`/projects/${project.id}`}
                className={styles.projectCard}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectThumb}
                />
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}

          <Link to="/projects" className={styles.viewAll}>
            {t("home.viewAll")} <FiArrowRight size={14} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
};