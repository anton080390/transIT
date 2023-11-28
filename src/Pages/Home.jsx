import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import backImage from "../images/1.jpg";
import HomeData from "../constants/HomeData";
import "./home.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";

function Home() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "100vh",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image": `url(${backImage})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {HomeData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="title" data-swiper-parallax="-300">
              <h3>{slide.title}</h3>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              <h3>{slide.subtitle}</h3>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ fontSize: "1.4rem" }}>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Home;
