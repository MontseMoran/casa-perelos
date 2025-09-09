import { motion } from "framer-motion";
import i18n from "i18next";
import { useTranslation } from "react-i18next";


function Landing({onFinish}) {
  const {t} = useTranslation();

  return (
    <div className="landing">
      <img src="/logo3.png" alt="Logo Casa Perelos" className="logo3" />

      <motion.h1 className="title" key={i18n.language}>
        {t("landing.title").split("").map((char, index) => (
          <motion.span
            key={index}
            className="title-char"
            style={{ "--char-index": index }} 
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p className="subtitle">
       {t("landing.subtitle")}
      </motion.p>

      <button className= "enter-btn"onClick={onFinish}>{t("landing.button")}</button>
<div className="lang-switcher">
  <button onClick={() => i18n.changeLanguage("es")}>Español</button>
  <button onClick={() => i18n.changeLanguage("en")}>English</button>
</div>

    </div>
  );
}
export default Landing;