import { motion } from "framer-motion";

function HeroIntro({ heroImage, displayedText, selectedLang, setSelectedLang }) {
  return (
    <section
      id="inicio"
      className="home__hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="home__hero-overlay"></div>

      <motion.div className="home__intro-card">
        <img src="/logo3.png" alt="Logo Casa Perelos" className="home__intro-logo" />
        <p className="home__intro-text">{displayedText}</p>

        <div className="home__intro-buttons">
          <button className="home__lang-btn" onClick={() => setSelectedLang("es")}>
            Español
          </button>
          <button className="home__lang-btn" onClick={() => setSelectedLang("en")}>
            English
          </button>
        </div>

        {selectedLang && (
          <p className="home__intro-text fade-in">
            {selectedLang === "es"
              ? "Bienvenido a tu alojamiento rural en el corazón de Galicia."
              : "Welcome to your rural home in the heart of Galicia."}
          </p>
        )}
      </motion.div>
    </section>
  );
}

export default HeroIntro;

