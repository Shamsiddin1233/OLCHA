import { useDispatch, useSelector } from "react-redux"
import { removeFromWishlist } from "../Redux/ShopSlice";
import Navbar from "./Navbar";
import Cotalog from "./Catalog";
import img23 from "../assets/img23.png"
import { BsCart2 } from "react-icons/bs";
import "./Addedcard.css"
import Footer from "./Footer";

function Addwishlis() {
    let dispatch =useDispatch()
    let wishlist = useSelector((state) => state.shop.wishlist);

    return(
        <div className="AddedCard">
            <Navbar/>
            <Cotalog/>
            <h1>Sevillilardagi mahsulotlar</h1>

                <div className="bg-card">

            {wishlist.length <1? <div className="yoq"><img src={img23}/><p>Sevimli mahsulotlar yo'q</p></div>:
                wishlist.map((item)=>(
        <div className="Card" key={item.id} style={{ color: "black" }}>
          <div>
              <div className="img_wrapper">
            <img className="avatar" src={item.avatar} alt="" />

          </div>
          <h3>{item.module}</h3>
          <h3>{item.price} </h3>
          <mark>{item.monthly}</mark>
          <button onClick={() => dispatch(removeFromWishlist(item.id))}>delete</button>
                      <div>
                      <button className="card-button" onClick={()=>dispatch(addToCart(card))}>
                      <BsCart2 size={23}/>
                      </button>
                      <button className="card-botton2">Muddatli to'lov</button>
                      </div>
          </div>
        </div>
                ))
            }


                </div>
    
            <Footer/>
        </div>
    )
    
}
export default Addwishlis