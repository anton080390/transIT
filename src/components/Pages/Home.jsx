import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import backImage from "../images/1.jpg";

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
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h3>Місія компанії</h3>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h3>ТОВ "Транс ІТ"</h3>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p style={{ fontSize: "1.5rem" }}>
              Наша місія полягає в наданні високоякісних та інноваційних послуг
              з перевезення, лабораторного дослідження, перевалки, обробки та
              оформлення експортних документів зернових культур, сприяючи
              розвитку агросектору та забезпечуючи наших клієнтів надійним та
              ефективним партнерством.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h3>Мета компанії</h3>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h3>ТОВ "Транс АЙ ТІ"</h3>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p style={{ fontSize: "1.5rem" }}>
              Наша мета – стати лідерами у галузі агроперевезень та обробки
              зернових, надаючи інтегровані рішення, які враховують найсучасніші
              технології та екологічні стандарти. Ми прагнемо до постійного
              розвитку, створюючи інноваційні рішення для оптимізації ланцюга
              постачання та підтримки сталого сільськогосподарського розвитку в
              Україні.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h3>Цінності компанії</h3>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h3>ТОВ "Транс АЙ ТІ"</h3>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p style={{ fontSize: "1.5rem" }}>
              Наші цінності базуються на індивідуальному підході до кожного
              клієнта, якості обслуговування та взаємовигідних відносинах. Ми
              прагнемо до чесності та прозорості в усіх наших діях, враховуючи
              потреби клієнтів та сприяючи їх успіху.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Home;
