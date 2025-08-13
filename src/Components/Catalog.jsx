import { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import "./Catalog.css";
import { Link } from "react-router-dom";

import { IoIosStats } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { useSelector } from "react-redux";

import { IoMenu } from "react-icons/io5";
import { PiXBold } from "react-icons/pi";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "./i18n";

function Cotalog() {
  const { t } = useTranslation();
  let [modal, setmodal] = useState(false);

  let cardlength = useSelector((state) => state.shop.cart.length);
  let wishlist = useSelector((state) => state.shop.wishlist.length);
  return (
    <div className="Catalog">
      <Link to={"/"}>
        <img src={img1} alt="Img" className="img1" />
      </Link>

      <div className="group">
        <span onClick={() => setmodal(true)}>
          {" "}
          <IoMenu size={20} />{" "}
        </span>
        <span onClick={() => setmodal(true)} className="none">
          {t("katralog")}
        </span>
      </div>

      {modal && (
        <div className="Katalog">
          <div className="Katalog-left">
            <span className="X" onClick={() => setmodal(false)}>
              <PiXBold size={30} />{" "}
            </span>

            <h2>Olcha Market</h2>
            <p>Televizor, foto-video va audio</p>
            <p>Noutbuk, printer, kompyuterlar</p>
            <p>Smartfon, telefon, gadjet, aksessuarlar</p>
            <p>Maishiy texnika</p>
            <p>Barchasi oshxona uchun</p>
            <p>Sport anjomlari</p>
            <p>Go‘zallik va salomatlik</p>
            <p>Avto jihozlar</p>
            <p>Barchasi ofis, uy va bog‘ uchun</p>
            <p>Bolalar uchun o‘yinchoq va mahsulotlar</p>
            <p>Mebel</p>
            <p>Geymerlar uchun</p>
            <p>Barchasi ta’mirlash va qurilish uchun</p>
            <p>Elektrotransport</p>
            <p>Sovg‘alar va suvenirlar</p>
            <p>Qulay takliflar</p>
            <p>Dubaydan tovarlar</p>
            <p>Olcha Qo‘ldan</p>
          </div>

          <div className="Katalog-right">
            <table>
              <tr>
                <th>Telvizorlar</th>
                <th>Vidiotexnika</th>
                <th>O‘yin konsollari</th>
              </tr>
              <tr>
                <td>LG</td>
                <td>Uy kinoteatri</td>
                <td>PlayStation</td>
              </tr>
              <tr>
                <td>Samsung</td>
                <td>DVD-pleer</td>
                <td>Geympadlar</td>
              </tr>

              <tr>
                <td>Shivaki</td>
                <td>Xavfsizlik kameralari</td>
                <td>Virtual ko‘zoynaklar</td>
              </tr>
              <tr>
                <td>Sony</td>
                <td>Video uskunalar uchun</td>
                <td>PlayStation uchun o‘yinlar</td>
              </tr>
              <tr>
                <td>Artel</td>
                <td>aksessuarlar</td>
                <th>Kronshteynlar</th>
              </tr>
              <tr>
                <td>Vesta</td>
                <th>Media Player</th>
                <td>NB</td>
              </tr>
              <tr>
                <td>Premier</td>
                <td>Xiaomi</td>
                <td>LeoStar</td>
              </tr>
              <tr>
                <td>Avalon</td>
                <td>Yandeks</td>
                <td>North Bayou</td>
              </tr>
              <tr>
                <td>Ziffler</td>
                <td>Apple</td>
                <td>Artel</td>
              </tr>
              <tr>
                <td>Hisense</td>
                <td>No Name</td>
                <td>2E</td>
              </tr>
              <tr>
                <td>Toshiba</td>
                <td>Olcha.uz</td>
                <td>Zeno</td>
              </tr>
              <tr>
                <td>TCL</td>
                <th>Diktofonlar</th>
                <td></td>
              </tr>
              <tr>
                <td>Xiaomi</td>
                <td>Sony</td>
                <td></td>
              </tr>
              <tr>
                <td>Immer</td>
                <th>Foto, video</th>
                <td></td>
              </tr>
              <tr>
                <td>Skyworth</td>
                <td>
                  Foto va videokameralar uchun <br /> aksessuarlar
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Rulls</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Moonx</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Audio</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Musiqa sistemalari</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Akustika</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Mikrofonlar</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      )}

      <Link to={"/search"}>
        <input type="text" placeholder={t("palacehollder")} />
      </Link>

      <img src={img2} alt="Img" className="img3" />

      <div className="karzina">
        <div className="imgdiv1">
          <Link to={""}>
            <IoIosStats size={30} color="black" />
          </Link>
          <p>{t("taqqos")}</p>
        </div>
        <div className="imgdiv1">
          <Link to={"/addedCard"}>
            <BsCart2 size={30} color="black" />
          </Link> 
          {cardlength}

          <p>{t("karzina")}</p>
        </div>
        <div className="imgdiv1">
          <Link to={"/addwishlis"}>
            <CiHeart size={30} color="black" />
          </Link>
          {wishlist}
          <p>{t("sevmli")}</p>
        </div>
        <div className="imgdiv1 md-err">
          <IoMdContact size={30} />

          <p>{t("qoshilish")}</p>
        </div>
      </div>
    </div>
  );
}
export default Cotalog;
