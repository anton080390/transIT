import Grid from "@mui/material/Grid";
import { Element, scroller } from "react-scroll";
import "./home.css";
import React, { useRef, useState } from "react";
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
    <div className="forwarder" style={{ height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="forwarder-text">
            <h1 className="forwarder-h1">
              Оформлення экспедиторської документації
            </h1>
            <p className="forwarder-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
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
          style={{ width: "400px", height: "600px" }}
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
