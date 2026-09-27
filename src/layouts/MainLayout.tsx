import { NavLink, Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../data/portfolio";
import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const navItems = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.projects"), to: "/projects" },
  ];

  return (
    <div className={styles.layout}>
      <motion.nav
        className={styles.navbar}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.navLeft}>
          <Link to="/" className={styles.logoTab}>
            {"<BJ/>"}
          </Link>
        </div>

        <div className={styles.navCenter}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `${styles.navTab} ${isActive ? styles.navTabActive : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className={styles.navRight}>
          <motion.button
            className={styles.langBtn}
            onClick={toggleLanguage}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </motion.button>
          <motion.a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin />
          </motion.a>
        </div>
      </motion.nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};