import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import suiteImage from "../../assets/habitacioncordas1.jpg";
import corteRoomImage from "../../assets/habitacioncorte.jpg";
import lareiraImage from "../../assets/salaestar.jpg";

const roomImageMap = {
  cordas: suiteImage,
  corte: corteRoomImage,
  salon: lareiraImage,
};

function RoomsSection() {
  const { t } = useTranslation();
  const roomCards = t("home.rooms.cards", { returnObjects: true }) || [];

  return (
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
            <img
              className="home__room-image"
              src={roomImageMap[room.key] ?? suiteImage}
              alt={room.imageAlt}
              loading="lazy"
            />
            <div className="home__room-body">
              <h3>{room.title}</h3>
              <p>{room.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default RoomsSection;
