import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ServicesSection() {
  const { t } = useTranslation();
  const highlights = t("home.highlights.items", { returnObjects: true }) || [];

  return (
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
  );
}

export default ServicesSection;
