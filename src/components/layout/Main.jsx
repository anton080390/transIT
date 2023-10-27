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

  const scrollToSection = (sectionName) => {
    switch (sectionName) {
      case "Про нас":
        if (homeRef.current) {
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Логістика":
        if (transportRef.current) {
          transportRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Лабораторні дослідження":
        if (labRef.current) {
          labRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Експортна документація":
        if (forwarderRef.current) {
          forwarderRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
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
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
}

export default Main;
