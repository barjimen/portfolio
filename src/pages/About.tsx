import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../data/portfolio";
import styles from "./About.module.css";

type Tab = "experience" | "education" | "skills";

const skillCategories = [
  { title: "Frontend", items: ["React", "Vue.js", "Angular", "TypeScript", "HTML + CSS"] },
  { title: "Backend", items: [".NET", "C#", "Python", "APIs REST"] },
  { title: "Bases de datos", items: ["SQL", "ClickHouse", "Redis"] },
  { title: "Cloud & DevOps", items: ["Docker", "AWS", "Azure"] },
  { title: "Herramientas", items: ["Git", "Figma", "WordPress", "Power Platform"] },
  { title: "Metodologías", items: ["Scrum", "Kanban", "Prototipado y wireframing"] },
  { title: "Soft Skills", items: ["Liderazgo técnico", "Mentoría de juniors", "Aprendizaje rápido", "Comunicación con clientes", "Trabajo en equipo", "Resolución de problemas", "Adaptabilidad", "Organización"], wide: true },
];

const skillCategoriesEn = [
  { title: "Frontend", items: ["React", "Vue.js", "Angular", "TypeScript", "HTML + CSS"] },
  { title: "Backend", items: [".NET", "C#", "Python", "REST APIs"] },
  { title: "Databases", items: ["SQL", "ClickHouse", "Redis"] },
  { title: "Cloud & DevOps", items: ["Docker", "AWS", "Azure"] },
  { title: "Tools", items: ["Git", "Figma", "WordPress", "Power Platform"] },
  { title: "Methodologies", items: ["Scrum", "Kanban", "Prototyping & wireframing"] },
  { title: "Soft Skills", items: ["Technical leadership", "Junior mentoring", "Fast learner", "Client communication", "Teamwork", "Problem solving", "Adaptability", "Organization"], wide: true },
];

export const About = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const [activeTab, setActiveTab] = useState<Tab>("experience");
  const { experience, education, certifications } = portfolioData;

  return (
    <div className={styles.about}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>
          {t("about.titleBefore")} <span className={styles.titleAccent}>{t("about.titleAccent")}</span>
        </h1>
        <p className={styles.subtitle}>
          {t("about.subtitle")}
        </p>
      </motion.div>

      <motion.div
        className={styles.tabs}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {(["experience", "education", "skills"] as Tab[]).map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {t(`about.tabs.${tab}`)}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className={styles.content}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "experience" && (
            <div className={styles.timeline}>
              {experience.map((exp, i) => {
                const role = isEn && exp.roleEn ? exp.roleEn : exp.role;
                const period = isEn && exp.periodEn ? exp.periodEn : exp.period;
                const location = isEn && exp.locationEn ? exp.locationEn : exp.location;
                const highlights = isEn && exp.highlightsEn ? exp.highlightsEn : exp.highlights;
                return (
                  <motion.div
                    key={exp.company}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineCard}>
                      <div className={styles.timelineHeader}>
                        <div>
                          <h3 className={styles.timelineRole}>{role}</h3>
                          <p className={styles.timelineCompany}>{exp.company}</p>
                        </div>
                        <span className={styles.timelinePeriod}>{period}</span>
                      </div>
                      <p className={styles.timelineLocation}>{location}</p>
                      <ul className={styles.timelineList}>
                        {highlights.map((h, j) => (
                          <li key={j} className={styles.timelineListItem}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {activeTab === "education" && (
            <>
              <div className={styles.eduGrid}>
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.institution}
                    className={styles.eduCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <h3 className={styles.eduDegree}>{edu.degree}</h3>
                    <p className={styles.eduInstitution}>{edu.institution}</p>
                    <span className={styles.eduPeriod}>{edu.period}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className={styles.certSectionTitle}>{t("about.certifications")}</h3>
              <div className={styles.certList}>
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    className={styles.certCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className={styles.certImage}
                    />
                    <div className={styles.certInfo}>
                      <p className={styles.certName}>{cert.name}</p>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {activeTab === "skills" && (
            <div className={styles.skillsContainer}>
              <div className={styles.skillCategories}>
                {(isEn ? skillCategoriesEn : skillCategories).map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    className={`${styles.skillCategory} ${cat.wide ? styles.skillCategoryWide : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <h4 className={styles.skillCategoryTitle}>{cat.title}</h4>
                    <div className={styles.skillCategoryList}>
                      {cat.items.map((item) => (
                        <span key={item} className={styles.skillCategoryItem}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};