import { useNavigate } from "react-router-dom";
import { cards } from "./Obj-Cards";
import img22 from "../../assets/img22.png"

function Cardlist() {
    let navigate = useNavigate()
    return(
        <div className="Cardlist">
            {
                cards.map((card)=>(
                    <div className="card" onClick={()=> navigate(`/card/${card.id}`)}>
                        <img src={card.avatar} alt="" />
                        <p>{card.module}</p>
                        <h3>{card.price}</h3>
                        <mark>{card.monthly}</mark>
                        <button className="card-button"><img src={img22} alt="" /></button>
                        <button className="card-botton2">Muddatli to'lov</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Cardlist