import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import heroImage from "../assets/fachada.jpg";
import patioImage from "../assets/patio1.jpg";
import livingRoomImage from "../assets/salaestar.jpg";
import suiteImage from "../assets/habitacioncordas1.jpg";
import terraceImage from "../assets/terraza.jpg";
import waterfallImage from "../assets/fervenza.png";

const galleryImages = [
  { src: heroImage, key: "fachada" },
  { src: patioImage, key: "patio" },
  { src: livingRoomImage, key: "salon" },
  { src: suiteImage, key: "suite" },
  { src: terraceImage, key: "terraza" },
  { src: waterfallImage, key: "entorno" },
];

function Home() {
  const { t } = useTranslation();
  const highlights = t("home.highlights", { returnObjects: true });
  const galleryCaptions = t("home.galleryCaptions", { returnObjects: true });

  return (
    <div className="home">
      <section
        className="home__hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        }}
      >
        <motion.div
          className="home__hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="home__eyebrow">Casa Perelos</p>
          <h1>{t("home.hero.title")}</h1>
          <p className="home__hero-text">{t("home.hero.subtitle")}</p>
          <a className="home__cta" href="#gallery">
            {t("home.hero.cta")}
          </a>
        </motion.div>
      </section>

      <section className="home__intro">
        <motion.div
          className="home__intro-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t("home.intro.title")}</h2>
          <p>{t("home.intro.body")}</p>
        </motion.div>

        <div className="home__highlights">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="home__highlight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="home__gallery" id="gallery">
        <div className="home__section-header">
          <h2>{t("home.gallery.title")}</h2>
          <p>{t("home.gallery.subtitle")}</p>
        </div>
        <div className="home__gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.key}
              className="home__gallery-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img src={image.src} alt={galleryCaptions[index]} loading="lazy" />
              <figcaption>{galleryCaptions[index]}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="home__experience">
        <motion.div
          className="home__experience-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t("home.experience.title")}</h2>
          <p>{t("home.experience.body")}</p>
          <a className="home__cta home__cta--light" href="mailto:hola@casaperelos.com">
            {t("home.experience.cta")}
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
