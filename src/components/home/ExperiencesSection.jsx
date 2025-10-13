import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import waterfallImage from "../../assets/fervenza2.png";

function ExperiencesSection() {
  const { t } = useTranslation();
  const experiences = t("home.experiences.items", { returnObjects: true }) || [];

  return (
    <section className="home__experiences" id="entorno">
      <motion.div
        className="home__experiences-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="home__experiences-text">
          <h2>{t("home.experiences.title")}</h2>
          <p>{t("home.experiences.subtitle")}</p>
          <ul>
            {experiences.map((experience) => (
              <li key={experience.title}>
                <h3>{experience.title}</h3>
                <p>{experience.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="home__experiences-media">
          <img src={waterfallImage} alt={t("home.experiences.imageAlt")} loading="lazy" />
          <figcaption>{t("home.experiences.imageCaption")}</figcaption>
        </figure>
      </motion.div>
    </section>
  );
}

export default ExperiencesSection;
