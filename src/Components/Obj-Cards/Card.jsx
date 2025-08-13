import { useParams } from "react-router-dom";
import { card, cards } from "./Obj-Cards";
import "./Card.css"
import Navbar from "../Navbar";
import Cotalog from "../Catalog";

import img1 from "../../assets/img1.png"

import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";

import { CiCircleInfo } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { CiMedal } from "react-icons/ci";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Footer from "../Footer";




function Card() {
    let {id}=useParams()
    let cards = card.find((item)=> item.id.toString()==id)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(

        <>
        <Navbar/>
        <Cotalog/>
        <div className="Crad">
            <pre>
                Asosiy     /    Smartfon, telefon, gadjet, aksessuarlar    /    Smartfonlar
            </pre>

            <h1>{cards.module} </h1>
             <div className="sharh">
                    <p>⭐⭐⭐⭐⭐  <span>0 sharhlar</span></p>
                    <pre><IoIosStats size={25}/>   <span>Taqqoslashga qo'shish </span>       <CiHeart size={25}/> <span>Saralanganlarga qo'shish</span>      <HiMiniArrowUturnRight size={25}/> <span>Ulashish  </span> </pre>
             </div>
                <div className="cards-information">

                            <div className="media">

                        <div className="Img-infor">



            <Swiper
        style={{
          '--swiper-navigation-color': '#999',
          '--swiper-navigation-background': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className="swipper-1">
            <img src={cards.avatar} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipper-1">
            <img src={cards.avatar2} alt="" />
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        spaceBetween={10}
        navigation={true}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        >
        <SwiperSlide className="swipper-2">
            <img src={cards.avatar} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipper-2">
            <img src={cards.avatar2} alt="" />
        </SwiperSlide>

       
      </Swiper>


                        <div className="darian">
                            <div>
                                <h2>Narxlar <span>1</span></h2>
                            <h3>DARIAN  <CiMedal/></h3>
                            </div>
                            <p>Manzilga qarab 1 ish kunidan 2 ish <br /> kunigacha yetkazib beriladi</p>
                            <div className="pric">
                                <h1>
                                {cards.price}
                                </h1>
                                <h4>Kafolat: <span>1 oy</span></h4>
                                <button>Savatchaga qo'shish</button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="Information">
                        <h3>Rangi:</h3>
                        <div className="color">
                            <div className="black"></div>
                            <div className="white"></div>
                            <div className="gray"></div>
                        </div>
                        <div className="storoge">
                        <h3>Xotira</h3>

                            <button>8/128 GB</button>
                            <button>8/256 GB</button>
                            <button>12/256 GB</button>

                                <div className="malumot">
                                    <h4>Vazni <span></span><b> 180 g</b></h4>
                                    <h3>O‘lchami <span></span> <b> 162,16*74,92*8,24 mm</b></h3>
                                    <h2>Rangi <span></span><b> Midnight Black</b></h2>
                                    <h2>Rangi <span></span> <b> Ocean Blue</b></h2>
                                    <h2>Rangi <span></span><b> Aurora purple</b></h2>
                                </div>
                        </div>

                    </div>

                            </div>
                    <div className="Bg-Sazan">
                        <div className="Sazan">
                            <h2>{cards.price} </h2>
                            <pre>Yetkazib berish to'g'risida ma'lumot:            <CiCircleInfo  size={30}/></pre>
                                
                                <h4><CiDeliveryTruck className="gruz"  size={30} color="black"/>  Standart yetkazib berish</h4>
                                <p>Manzilga qarab 3 soatdan 3 kungacha <br /> yetkazib beriladi</p>
                                <hr />
                                <button className="savatcha"><FiShoppingBag size={25} /> Savatchaga qo'shish</button>
                                <button className="olish">Blikda sotib olish</button>
                            <h3>Sazan <CiMedal size={30}/></h3>
                        </div>
                        <div className="credit">

                                <h3>Bo'lib to'lash:</h3>
                                <h2>{cards.monthly}</h2>
                                <button className="img-button"><img src={img1} alt="" /></button>
                                <hr />
                                <button className="credit-button">Bo'lib to'lash</button>

                        </div>
                    </div>
                </div>

            {/* <h1>{card.price} </h1>
            <h1>{card.monthly} </h1> */}
            {/* <Footer/> */}
            <Footer/>
        </div>


        </>
        
    )
}
export default Card