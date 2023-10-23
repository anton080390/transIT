import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { Element } from "react-scroll";
import l1 from "../images/lab/l1.jpg";
import l2 from "../images/lab/l2.jpg";
import l3 from "../images/lab/l3.jpg";
import l4 from "../images/lab/l4.jpg";
import l5 from "../images/lab/l5.jpg";
import l6 from "../images/lab/l6.jpg";
import "./lab.css";

function Lab() {
  useEffect(() => {
    const handleScroll = () => {
      const l1Element = document.getElementById("l1");
      const l2Element = document.getElementById("l2");
      const l3Element = document.getElementById("l3");
      const l4Element = document.getElementById("l4");
      const l5Element = document.getElementById("l5");
      const l6Element = document.getElementById("l6");

      const animateImage = (element, delay) => {
        if (
          element &&
          element.getBoundingClientRect().top < window.innerHeight
        ) {
          setTimeout(() => {
            element.classList.add("animate");
          }, delay);
        }
      };

      animateImage(l1Element, 0);
      animateImage(l2Element, 500);
      animateImage(l3Element, 1000);
      animateImage(l4Element, 1500);
      animateImage(l5Element, 1700);
      animateImage(l6Element, 1900);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lab-container" style={{ height: "100vh" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <div className="lab-images">
            <Element name="l1">
              <img
                src={l1}
                alt="Изображение 1"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(-25deg)",
                }}
                id="l1"
                className="animated-element"
              />
            </Element>
            <Element name="l2">
              <img
                src={l2}
                alt="Изображение 2"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(15deg)",
                }}
                id="l2"
                className="animated-element"
              />
            </Element>
            <Element name="l3">
              <img
                src={l3}
                alt="Изображение 3"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(35deg)",
                }}
                id="l3"
                className="animated-element"
              />
            </Element>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="lab-images">
            <Element name="l4">
              <img
                src={l4}
                alt="Изображение 4"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(10deg)",
                }}
                id="l4"
                className="animated-element"
              />
            </Element>
            <Element name="l5">
              <img
                src={l5}
                alt="Изображение 5"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(-25deg)",
                }}
                id="l5"
                className="animated-element"
              />
            </Element>
            <Element name="l6">
              <img
                src={l6}
                alt="Изображение 6"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(15deg)",
                }}
                id="l6"
                className="animated-element"
              />
            </Element>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div className="lab-text">
            <h1 className="lab-h1">Лабораторні дослидження</h1>
            <p className="lab-p">
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
      </Grid>
    </div>
  );
}

export default Lab;
