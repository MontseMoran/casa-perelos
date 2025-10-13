
import { useTranslation } from "react-i18next";
import livingRoomImage from "../../assets/salaestar3.jpg";
import { motion } from "framer-motion";

function StorySection() {
  const { t } = useTranslation();
  const storyPoints = t("home.story.points", { returnObjects: true }) || [];

  return (
    <section className="home__story" id="la-casa">
      <div className="home__section-header">
        <h2>{t("home.story.title")}</h2>
        <p>{t("home.story.body")}</p>
      </div>

      <div className="home__story-grid">
        <motion.div
          className="home__story-details"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="home__story-points">
            {storyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          className="home__story-media"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={livingRoomImage} alt={t("home.story.imageAlt")} loading="lazy" />
          <figcaption>{t("home.story.caption")}</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

export default StorySection;
