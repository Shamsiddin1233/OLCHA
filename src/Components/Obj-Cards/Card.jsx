import { useParams } from "react-router-dom";
import { cards } from "./Obj-Cards";

function Card() {
    let {id}=useParams()
    let card = cards.find((item)=> item.id.toString()==id)

    return(
        <div className="Crad">
            <h1>{card.module} </h1>
            <h1>{card.price} </h1>
            <h1>{card.monthly} </h1>
        </div>
    )
}
export default Card