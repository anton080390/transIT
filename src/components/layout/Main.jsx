import React, { useRef } from "react";
import Navigation from "../Navigation/Navigation";
import Grid from "@mui/material/Grid";
import Home from "../Pages/Home";
import Transport from "../Pages/Transport";
import Lab from "../Pages/Lab1";
import Cargo from "../Pages/Cargo";
import Forwarder from "../Pages/Fowarder";
import Footer from "../Pages/Footer";

function Main() {
  const homeRef = useRef(null);
  const transportRef = useRef(null);
  const labRef = useRef(null);
  const cargoRef = useRef(null);
  const forwarderRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (sectionName) => {
    let targetRef = null;

    switch (sectionName) {
      case "Про нас":
        targetRef = homeRef;
        break;
      case "Логістика":
        targetRef = transportRef;
        break;
      case "Лабораторні дослідження":
        targetRef = labRef;
        break;
      case "Експортна документація":
        targetRef = forwarderRef;
        break;
      case "Нащі контакти":
        targetRef = footerRef;
        break;
      default:
        break;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />

      <Grid item xs={12} ref={homeRef}>
        <Home />
      </Grid>
      <Grid item xs={12} ref={transportRef}>
        <Transport />
      </Grid>
      <Grid item xs={12} ref={labRef}>
        <Lab />
      </Grid>
      <Grid item xs={12} ref={cargoRef}>
        <Cargo />
      </Grid>
      <Grid item xs={12} ref={forwarderRef}>
        <Forwarder />
      </Grid>
      <Grid item xs={12} ref={footerRef}>
        <Footer />
      </Grid>
    </>
  );
}

export default Main;
