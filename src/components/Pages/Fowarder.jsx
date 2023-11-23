import Grid from "@mui/material/Grid";
import "./home.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import f1 from "../images/forwarder/Phyto.jpg";
import f2 from "../images/forwarder/draft.jpeg";
import f3 from "../images/forwarder/radio.jpg";
import f4 from "../images/forwarder/Phito1.png";

function Forwarder() {
  return (
    <div className="forwarder" style={{ margin: "2rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="forwarder-text" style={{ textAlign: "center" }}>
            <h1 className="forwarder-h1">Экспортна документація</h1>
            <p className="forwarder-p">
              Наша компанія - надійний партнер у сфері міжнародного експорту. Ми
              з радістю Вам допоможемо в оформленні документації, забезпечуючи
              вас необхідними дозвільними документами для експорту в усі країни
              світу. З нашим досвідом та висококваліфікованою командою фахівців
              ви можете бути впевнені в тому, що ваше зерно буде високоякісно
              оброблене та відправлене в будь-який куточок світу. Обираючи нас
              для повного циклу обслуговування експорту зерна, ми зробимо ваш
              бізнес ще більш успішним та конкурентоспроможним на міжнародному
              ринку.
            </p>
          </div>
        </Grid>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{ width: "400px", height: "500px", marginTop: "-3rem" }}
        >
          <SwiperSlide>
            <div className="swiper-image-container">
              <img src={f1} alt="Изображение 1" className="swiper-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image-container">
              <img src={f2} alt="Изображение 2" className="swiper-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image-container">
              <img src={f4} alt="Изображение 4" className="swiper-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image-container">
              <img src={f3} alt="Изображение 3" className="swiper-image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </div>
  );
}

export default Forwarder;
