import { useTranslation } from "react-i18next";
import "../styles/components/navbar.scss";
import logo from "../../public/logo3.png";

function Navbar({ isHidden, navItems, navItemsLabels }) {
  const { t } = useTranslation();

  return (
    <nav
      className={`home__navbar ${isHidden ? "home__navbar--hidden" : ""}`}
      aria-label={t("home.nav.aria")}
    >
      <div className="home__nav-inner">
        <a className="home__brand" href="#inicio">
          <img
            src={logo}
            alt="Logo Casa Perelos"
            className="navbar__logo"
          />
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
  );
}

export default Navbar;

