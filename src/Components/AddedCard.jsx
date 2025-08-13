import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/ShopSlice";
import Navbar from "./Navbar";
import Cotalog from "./Catalog";
import img23 from "../assets/img23.png"
import "./Addedcard.css"
import { BsCart2 } from "react-icons/bs";

function AddedCard() {
  let dispatch = useDispatch();
  let Card = useSelector((state) => state.shop.cart);

  return (
    <div className="AddedCard">
      <Navbar/>
      <Cotalog/>
      <h1>Savatchadagi mahsulotlar</h1>
        
      <div className="bg-card">
      {Card.length <1? <div className="yoq"><img src={img23}/><p>Sevimli mahsulotlar yo'q</p></div>:
        Card.map((item) => (
        <div className="Card" key={item.id} style={{ color: "black" }}>
          <div>
              <div className="img_wrapper">
            <img className="avatar" src={item.avatar} alt="" />

          </div>
          <h3>{item.module}</h3>
          <h3>{item.price} </h3>
          <mark>{item.monthly}</mark>
          <button onClick={() => dispatch(removeFromCart(item.id))}>delete</button>
                      <div>
                      <button className="card-button" onClick={()=>dispatch(addToCart(card))}>
                      <BsCart2 size={23}/>
                      </button>
                      <button className="card-botton2">Muddatli to'lov</button>
                      </div>
          </div>
        </div>
      ))}

      </div>
    </div>
  );
}
export default AddedCard;








// 1200  900 632 480  