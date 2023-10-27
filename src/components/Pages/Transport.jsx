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
          <h1 className="transport-h1">Перевозка вантажу</h1>
          <p className="transport-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </Grid>
        <Grid item xs={12} md={5} className="transport-images">
          <Element name="ti1">
            <img
              src={ti1}
              alt="Изображение 1"
              style={{
                maxWidth: "80%",
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
                width: "80%",
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
