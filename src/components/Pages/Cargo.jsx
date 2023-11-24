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
    <div className="cargo-container">
      <Grid
        container
        spacing={1}
        sx={{
          alignItems: "center",
        }}
        xs={12}
      >
        <Grid item xs={12} md={12} className="cargo-text">
          <h1 className="cargo-h1">Перевалка зернових</h1>
          <p className="cargo-p">
            Індивідуальний підхід до кожного клієнта - це лише частина наших
            принципів. Ми горді тим, що надаємо повний спектр послуг для вашого
            комфорту та успішності. У нас ви отримаєте не лише високу якість
            перевалки зерна за найнижчими цінами, але й повний цикл
            обслуговування вашого зернового бізнесу. Наша компанія пропонує
            додаткові послуги, такі як диспетчеризація автотранспорту під час
            вивантаження, проведення лабораторних аналізів, зберігання зерна з
            найвищими стандартами безпеки, а також ефективне завантаження на
            судна та повний облік усіх процесів. Ми працюємо в усіх портах Дунаю
            та в портах 'Великої' Одеси, надаючи нашим клієнтам надійну
            підтримку та високі стандарти обслуговування. З нами ваш бізнес стає
            ще ефективнішим та конкурентоспроможнішим.
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
