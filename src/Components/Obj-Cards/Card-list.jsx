  import { useNavigate } from "react-router-dom";
import { cards } from "./Obj-Cards";
import "./Card-list.css"


import { IoIosStats } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../Redux/ShopSlice";

import { BsCart2 } from "react-icons/bs";

function Cardlist() {
  let navigate = useNavigate();
  let dispatch =useDispatch()
  
  
  
  return (
    <div className="Cardlist">


    


                {cards.map((card) => (
        <div className="card" key={card.id}>
            <div  onClick={() => navigate(`/card/${card.id}`)}>
                <div className="img_wrapper">
            <img className="avatar" src={card.avatar} alt="" />

          </div>
           <div className="card_info">
            <p>{card.module}</p>
            <h3>{card.price}</h3>
            <mark>{card.monthly}</mark>
            </div>



          </div>



            <div>
            <button className="card-button" onClick={()=>dispatch(addToCart(card))}>
            <BsCart2 size={23}/>
            </button>
            <button className="card-botton2">Muddatli to'lov</button>
            </div>




              <div className="card-wrapperr">
                <CiHeart size={30} className="hert"  onClick={()=>dispatch(addToWishlist(card))} />

                <IoIosStats color="" size={30} className="state" />
            </div>


        </div>
      ))}





    </div>
  );
}
export default Cardlist;
