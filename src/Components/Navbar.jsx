import "./Navbar.css";
import img20 from "../assets/img20.png"
function Navbar() {
  function button1() {}
  return (

    <>
    <header> <img src={img20} alt="" /></header>
        <nav>
      <div className="navbox-left">
        <button className="left-button1">0% Mddatli tolo'v</button>
        <button className="left-button2">Chegrmalar</button>
        <button className="left-button1">Yutuqli O'yinlar</button>
        <span>Sayt xaritasi</span>
      </div>
      <div className="navbox-right">
        <h1>+998 (90) 694-12-84</h1>
        <button>olchada soting</button>
        <div className="languages">
          <h3>Узб</h3>
          <h3>O'z</h3>
          <h3>Рус</h3>
        </div>
      </div>
    </nav>

    </>

  );
}
export default Navbar;
