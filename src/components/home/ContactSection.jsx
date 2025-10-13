import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ContactSection() {
  const { t } = useTranslation();

  return (
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
  );
}

export default ContactSection;
