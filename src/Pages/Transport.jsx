import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { Element } from "react-scroll";
import ti1 from "../images/transport/t1.jpg";
import ti2 from "../images/transport/t2.jpg";
import "./home.css";

function Transport() {
  useEffect(() => {
    const handleScroll = () => {
      const ti1Element = document.getElementById("ti1");
      const ti2Element = document.getElementById("ti2");

      if (
        ti1Element &&
        ti1Element.getBoundingClientRect().top < window.innerHeight
      ) {
        ti1Element.classList.add("animate");
      }

      if (
        ti2Element &&
        ti2Element.getBoundingClientRect().top < window.innerHeight
      ) {
        setTimeout(() => {
          ti2Element.classList.add("animate");
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="transport">
      <Grid container xs={12} sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={6} className="transport-text">
          <h1 className="transport-h1">Перевезення вантажу</h1>
          <p className="transport-p">
            Ми - ваш надійний партнер у справах перевезення
            сільськогосподарської продукції та інших вантажів по всій території
            України. Завдяки власному сучасному автопарку, який включає в себе
            техніку таких відомих брендів, як Renault, MAN, Scania та нашим
            надійним партнерам, ми забезпечуємо ефективні та безпечні
            перевезення. Наша компетентна команда логістичних експертів володіє
            великим досвідом у сфері перевезень і готова допомогти вам обрати
            оптимальні маршрути для доставки вашої продукції. Довірте нам ваші
            вантажі, і ми забезпечимо їх надійну та швидку доставку з
            використанням сучасних логістичних рішень.
          </p>
        </Grid>
        <Grid item xs={12} md={5} className="transport-images">
          <Element name="ti1">
            <img
              src={ti1}
              alt="Изображение 1"
              style={{
                maxWidth: "70%",
                border: "10px solid white",
                transform: "rotate(-15deg)",
              }}
              id="ti1"
              className="animated-element"
            />
          </Element>
          <Element name="ti2">
            <img
              src={ti2}
              alt="Изображение 2"
              style={{
                width: "70%",
                border: "10px solid white",
                transform: "rotate(15deg)",
              }}
              id="ti2"
              className="animated-element"
            />
          </Element>
        </Grid>
      </Grid>
    </div>
  );
}

export default Transport;
