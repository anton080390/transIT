import Grid from "@mui/material/Grid";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "./cargo.css";
import c2 from "../images/cargo/c2.jpeg";
import c3 from "../images/cargo/c3.jpeg";
import c4 from "../images/cargo/c4.jpeg";
import c5 from "../images/cargo/c5.jpeg";
import c6 from "../images/cargo/c6.jpeg";

function Cargo() {
  return (
    <div className="cargo-container" style={{ margin: "3rem" }}>
      <Grid
        container
        spacing={1}
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid item xs={12} md={12} className="cargo-text">
          <h1 className="cargo-h1">Перевалка зерновых</h1>
          <p className="cargo-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </Grid>
      </Grid>

      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 120,
          stretch: 10,
          depth: 110,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={c2} alt="Изображение 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="Изображение 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c4} alt="Изображение 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c5} alt="Изображение 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c6} alt="Изображение 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Cargo;
