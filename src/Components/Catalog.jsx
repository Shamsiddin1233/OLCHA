import { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import "./Catalog.css";
function Cotalog() {
  let [modal, setmodal] = useState(false);
  return (
    <div className="Catalog">
      <img src={img1} alt="Img" className="img1" />

      <div className="group">
        <span onClick={() => setmodal(false)}>X </span>
        <span onClick={() => setmodal(true)}>Katlog</span>
      </div>

      {modal && (
        <div className="Katalog">
          <div className="Katalog-left">
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
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      )}

      <input type="text" placeholder="Katalog Bo'yicha Qidirish" />
      <img src={img2} alt="Img" className="img3" />
      <div className="imgdiv1">
        <img src={img3} alt="Img" className="img2" />
        <p>Taqqoslash</p>
      </div>
      <div className="imgdiv1">
        <img src={img4} alt="Img" className="img2" />
        <p>Taqqoslash</p>
      </div>
      <div className="imgdiv1">
        <img src={img5} alt="Img" className="img2" />
        <p>Taqqoslash</p>
      </div>
      <div className="imgdiv1">
        <img src={img6} alt="Img" className="img2" />
        <p>Taqqoslash</p>
      </div>
    </div>
  );
}
export default Cotalog;
