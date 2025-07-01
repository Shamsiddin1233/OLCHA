import "./Swippers.css";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";
import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Swippers() {
  return (
    <div className="Swippers">
      <div className="Swippers-left">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img13} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img14} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img15} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img16} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="Swiipers-right">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swip-card1">
              <h3>Kun mahsuloti</h3>
              <img src={img17} alt="" />
              <p>
                Diska mashina uchun R15 R123 <br /> Gloss Balck red lip 4*100
                ET35
              </p>
              <h2>3 831 065 so'm</h2>
              <del>3 909 250 so'm</del>
              <mark>449 000 so'm x 12 oy</mark>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swip-card1">
              <h3>Kun mahsuloti</h3>
              <img src={img18} alt="" />
              <p>
                Bolalar uchun multi-vitamin Numa <br /> Kids Funny 60 dona
              </p>
              <h2>351 000 so'm</h2>
              <del>390 000 so'm</del>
              <mark>42 000 so'm x 12 oy</mark>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swip-card1">
              <h3>Kun mahsuloti</h3>
              <img src={img19} alt="" />
              <p>
                Elektr blender Healthy Lifestyle <br /> R.2834
              </p>
              <h2>348 000 so'm</h2>
              <mark>41 000 so'm x 12 oy</mark>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Swippers;
