import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import patioImage from "../../assets/patio2.jpg";
import terraceImage from "../../assets/terraza.jpg";
import kitchenImage from "../../assets/cocina.png";
import waterfallImage from "../../assets/fervenza2.png";

const galleryImageMap = {
  patio: patioImage,
  terraza: terraceImage,
  cocina: kitchenImage,
  entorno: waterfallImage,
};

function GallerySection() {
  const { t } = useTranslation();
  const galleryImages = t("home.gallery.images", { returnObjects: true }) || [];

  return (
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
            <img src={galleryImageMap[image.key] ?? patioImage} alt={image.caption} loading="lazy" />
            <figcaption>{image.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
