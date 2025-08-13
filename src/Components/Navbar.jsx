import "./Navbar.css";
import img20 from "../assets/img20.png";

import "./i18n"; // i18n konfiguratsiyasi
import { useTranslation } from "react-i18next";
import { changeLanguage } from "./i18n";

function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <header>
        {" "}
        <img src={img20} alt="" />
      </header>
      <nav>
        <div className="navbox-left">
          <button className="left-button1">{t("credit")}</button>
          <button className="left-button2">{t("Chegrmalar")}</button>
          <button className="left-button1">{t("oynlar")}</button>
          <span>{t("map")}</span>
        </div>
        <div className="navbox-right">
          <h1>+998 (90) 694-12-84</h1>
          <button>{t("sotsh")}</button>
          <div className="languages">
            <h3 onClick={() => changeLanguage("en")}>Eng</h3>
            <h3 onClick={() => changeLanguage("uz")}>O'z</h3>
            <h3 onClick={() => changeLanguage("ru")}>Рус</h3>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
