import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "./cargo.css";
import c2 from "../images/cargo/c2.jpeg";
import c3 from "../images/cargo/c3.jpeg";
import c4 from "../images/cargo/c4.jpeg";
import c5 from "../images/cargo/c5.jpeg";
import c6 from "../images/cargo/c6.jpeg";

function Cargo() {
  useEffect(() => {
    const handleScroll = () => {
      const c1Element = document.getElementById("c1");
      const c2Element = document.getElementById("c2");
      const c3Element = document.getElementById("c3");
      const c4Element = document.getElementById("c4");
      const c5Element = document.getElementById("c5");
      const c6Element = document.getElementById("c6");

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

      animateImage(c1Element, 0);
      animateImage(c2Element, 500);
      animateImage(c3Element, 1000);
      animateImage(c4Element, 1500);
      animateImage(c5Element, 1700);
      animateImage(c6Element, 1900);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lab-container" style={{ height: "100vh" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <div className="cargo-text">
            <h1 className="cargo-h1">Перевалка зерновых</h1>
            <p className="cargo-p">
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
      <Grid
        container
        spacing={3}
        justifyContent="center"
        marginLeft="-5rem"
        marginTop="2rem"
      >
        {/* <Grid item xs={12} md={2}>
          <div className="lab-images">
            <Element name="c1">
              <img
                src={c1}
                alt="Изображение 1"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(-25deg)",
                }}
                id="c1"
                className="animated-element"
              />
            </Element>
          </div>
        </Grid> */}
        <Grid item xs={12} md={2}>
          <div className="lab-images">
            <Element name="c2">
              <img
                src={c2}
                alt="Изображение 2"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(15deg)",
                }}
                id="c2"
                className="animated-element"
              />
            </Element>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="lab-images">
            <Element name="c3">
              <img
                src={c3}
                alt="Изображение 3"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(30deg)",
                }}
                id="c3"
                className="animated-element"
              />
            </Element>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="lab-images">
            <Element name="c4">
              <img
                src={c4}
                alt="Изображение 4"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(-10deg)",
                }}
                id="c4"
                className="animated-element"
              />
            </Element>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="lab-images">
            <Element name="c5">
              <img
                src={c5}
                alt="Изображение 5"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(-25deg)",
                }}
                id="c5"
                className="animated-element"
              />
            </Element>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="lab-images">
            <Element name="c6">
              <img
                src={c6}
                alt="Изображение 6"
                style={{
                  width: "300px",
                  border: "10px solid white",
                  transform: "rotate(15deg)",
                }}
                id="c6"
                className="animated-element"
              />
            </Element>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cargo;
