import { cards } from "./Obj-Cards/Obj-Cards"
import img22 from "../assets/img22.png"
import "./Search.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
function Search() {
    let [search,setSearch]=useState("")
    let ref1 = useRef(null)
    console.log(search);

    let navigate =useNavigate()

    useEffect(()=> {
      ref1.current.focus()
    }, [])
    
    
    return(
    <div className="searchlist">
        <div className="search">
            <input ref={ref1} onChange={(e)=> setSearch(e.target.value)} />

            
        </div>
         <div className="Cardlist">
                  {     
                  cards.filter((item)=>{
                    if(search==""){
                        return item
                    }
                    else if (item.module.toLowerCase().includes(search.toLowerCase())){
                        return item
                    }

                  })
                  
                  .map((card) => (
                    <div className="card" key={card.id  } onClick={() => navigate(`/card/${card.id}`)}>
                      <div className="img_wrapper">
                        <img src={card.avatar} alt="" />
                      </div>
                      <div className="card_info">
                        <p>{card.module}</p>
                        <h3>{card.price}</h3>
                        <mark>{card.monthly}</mark>
                        <button className="card-button">
                          <img src={img22} alt="" />
                        </button> 
                        <button className="card-botton2">Muddatli to'lov</button>
                      </div>
                    </div>
                  ))
                  
                  }
                </div>  
    </div>
    )
}
export default Search