import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import HeroIntro from "../components/home/HeroIntro";
import StorySection from "../components/home/StorySection";
import RoomsSection from "../components/home/RoomsSection";
import ServicesSection from "../components/home/ServicesSection";
import ExperiencesSection from "../components/home/ExperiencesSection";
import GallerySection from "../components/home/GallerySection";
import ContactSection from "../components/home/ContactSection";
import heroImage from "../assets/fachada1.jpg";


function Home() {
  const { t } = useTranslation();

  const [selectedLang, setSelectedLang] = useState(null);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullText = "Bienvenidos a Casa Perelos, tu alojamiento rural en el corazón de Galicia.";
    let index = 0;
    const typing = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 70);
    return () => clearInterval(typing);
  }, []);

  const navItems = [
    { key: "inicio", href: "#inicio" },
    { key: "laCasa", href: "#la-casa" },
    { key: "estancias", href: "#estancias" },
    { key: "servicios", href: "#servicios" },
    { key: "entorno", href: "#entorno" },
    { key: "contacto", href: "#contacto" },
  ];

  const navItemsLabels = t("home.nav.items", { returnObjects: true }) || {};

  return (
    <>
      {selectedLang && (
        <Navbar isHidden={false} navItems={navItems} navItemsLabels={navItemsLabels} />
      )}

      <main>
        <HeroIntro
          heroImage={heroImage}
          displayedText={displayedText}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />
        <StorySection />
        <RoomsSection />
        <ServicesSection />
        <ExperiencesSection />
        <GallerySection />
        <ContactSection />
      </main>
    </>
  );
}

export default Home;
