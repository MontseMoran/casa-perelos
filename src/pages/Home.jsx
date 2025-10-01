import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import heroImage from "../assets/fachada.jpg";
import livingRoomImage from "../assets/salaestar3.jpg";
import suiteImage from "../assets/habitacioncordas1.jpg";
import corteRoomImage from "../assets/habitacioncorte.jpg";
import lareiraImage from "../assets/salaestar.jpg";
import patioImage from "../assets/patio2.jpg";
import terraceImage from "../assets/terraza.jpg";
import kitchenImage from "../assets/cocina.png";
import waterfallImage from "../assets/fervenza2.png";

const navItems = [
  { key: "inicio", href: "#inicio" },
  { key: "laCasa", href: "#la-casa" },
  { key: "estancias", href: "#estancias" },
  { key: "servicios", href: "#servicios" },
  { key: "entorno", href: "#entorno" },
  { key: "contacto", href: "#contacto" },
];

const roomImageMap = {
  cordas: suiteImage,
  corte: corteRoomImage,
  salon: lareiraImage,
};

const galleryImageMap = {
  patio: patioImage,
  terraza: terraceImage,
  cocina: kitchenImage,
  entorno: waterfallImage,
};

function Home() {
  const { t } = useTranslation();
  const [showIntro, setShowIntro] = useState(true);
  const [isFadingIntro, setIsFadingIntro] = useState(false);
  const [allowEnter, setAllowEnter] = useState(false);
  const [shouldCloseIntro, setShouldCloseIntro] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const navLabels = t("home.nav.items", { returnObjects: true });
  const storyPoints = t("home.story.points", { returnObjects: true });
  const roomCardsTranslations = t("home.rooms.cards", { returnObjects: true });
  const highlightTranslations = t("home.highlights.items", { returnObjects: true });
  const experienceTranslations = t("home.experiences.items", { returnObjects: true });
  const galleryTranslations = t("home.gallery.images", { returnObjects: true });

  const navItemsLabels = navLabels && typeof navLabels === "object" ? navLabels : {};
  const storyList = Array.isArray(storyPoints) ? storyPoints : [];
  const roomCards = Array.isArray(roomCardsTranslations)
    ? roomCardsTranslations.map((room) => ({
        ...room,
        image: roomImageMap[room.key] ?? suiteImage,
      }))
    : [];
  const highlights = Array.isArray(highlightTranslations) ? highlightTranslations : [];
  const experiences = Array.isArray(experienceTranslations) ? experienceTranslations : [];
  const galleryImages = Array.isArray(galleryTranslations)
    ? galleryTranslations.map((image) => ({
        ...image,
        src: galleryImageMap[image.key] ?? heroImage,
      }))
    : [];

  useEffect(() => {
    const allowTimer = setTimeout(() => setAllowEnter(true), 3200);
    const autoTimer = setTimeout(() => setShouldCloseIntro(true), 6500);

    return () => {
      clearTimeout(allowTimer);
      clearTimeout(autoTimer);
    };
  }, []);

  useEffect(() => {
    if (!shouldCloseIntro) {
      return;
    }

    setIsFadingIntro(true);
    const finishTimer = setTimeout(() => {
      setShowIntro(false);
      setHasEntered(true);
    }, 700);

    return () => clearTimeout(finishTimer);
  }, [shouldCloseIntro]);

  const handleEnter = () => {
    if (!allowEnter || shouldCloseIntro) {
      return;
    }

    setShouldCloseIntro(true);
  };

  return (
    <div className="home">
      {showIntro && (
        <div
          className={`home__entry fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center transition-opacity duration-700 ${
            isFadingIntro ? "animate-fade-out" : ""
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          }}
          aria-hidden={hasEntered}
        >
          <div className="home__entry-overlay" aria-hidden="true" />
          <div className="home__entry-content">
            <img
              src="/logo3.png"
              alt={t("home.introAnimation.logoAlt")}
              className={`home__entry-logo ${isFadingIntro ? "" : "animate-heartbeat"}`}
            />
            <p className="home__entry-message">{t("home.introAnimation.message")}</p>
            <button
              type="button"
              className="home__entry-button"
              onClick={handleEnter}
              disabled={!allowEnter}
            >
              {allowEnter ? t("home.entry.button") : t("home.entry.waiting")}
            </button>
            <p className="home__entry-helper">{t("home.entry.helper")}</p>
          </div>
        </div>
      )}

      <nav
        className={`home__navbar ${showIntro ? "home__navbar--hidden" : ""}`}
        aria-label={t("home.nav.aria")}
      >
        <div className="home__nav-inner">
          <a className="home__brand" href="#inicio">
            {t("home.nav.brand")}
          </a>
          <ul className="home__nav-list">
            {navItems.map((item) => (
              <li key={item.key}>
                <a className="home__nav-link" href={item.href}>
                  {navItemsLabels[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        <section
          id="inicio"
          className="home__hero"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.65)), url(${heroImage})`,
          }}
        >
          <motion.div
            className="home__hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasEntered ? 1 : 0, y: hasEntered ? 0 : 40 }}
            transition={{ duration: 0.8 }}
          >
            <p className="home__eyebrow">{t("home.hero.eyebrow")}</p>
            <h1>{t("home.hero.title")}</h1>
            <p className="home__hero-text">{t("home.hero.subtitle")}</p>
            <div className="home__hero-actions">
              <a className="home__cta" href="#estancias">
                {t("home.hero.cta")}
              </a>
              <a className="home__cta home__cta--light" href="#contacto">
                {t("home.hero.secondaryCta")}
              </a>
            </div>
          </motion.div>
        </section>

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
                {storyList.map((point) => (
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

        <section className="home__rooms" id="estancias">
          <div className="home__section-header">
            <h2>{t("home.rooms.title")}</h2>
            <p>{t("home.rooms.subtitle")}</p>
          </div>
          <div className="home__rooms-grid">
            {roomCards.map((room, index) => (
              <motion.article
                key={room.key}
                className="home__room-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <img className="home__room-image" src={room.image} alt={room.imageAlt} loading="lazy" />
                <div className="home__room-body">
                  <h3>{room.title}</h3>
                  <p>{room.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="home__services" id="servicios">
          <div className="home__section-header">
            <h2>{t("home.highlights.title")}</h2>
            <p>{t("home.highlights.subtitle")}</p>
          </div>
          <div className="home__highlights">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                className="home__highlight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

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

        <section className="home__gallery" id="galeria">
          <div className="home__section-header">
            <h2>{t("home.gallery.title")}</h2>
            <p>{t("home.gallery.subtitle")}</p>
          </div>
          <div className="home__gallery-mosaic">
            {galleryImages.map((image, index) => (
              <motion.figure
                key={image.key}
                className={`home__gallery-tile home__gallery-tile--${index + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img src={image.src} alt={image.imageAlt ?? image.caption} loading="lazy" />
                <figcaption>{image.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="home__contact" id="contacto">
          <motion.div
            className="home__contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t("home.contact.title")}</h2>
            <p>{t("home.contact.body")}</p>
            <a className="home__cta home__cta--light" href="mailto:hola@casaperelos.com">
              {t("home.contact.cta")}
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default Home;
