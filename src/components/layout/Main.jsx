import Navigation from "../Navigation/Navigation";
import Grid from "@mui/material/Grid";
import Home from "../Pages/Home";
import Transport from "../Pages/Transport";
import Lab from "../Pages/Lab1";
import Cargo from "../Pages/Cargo";
import Forwarder from "../Pages/Fowarder";
import Footer from "../Pages/Footer";

function Main() {
  return (
    <div className="App">
      <Navigation />
      <Grid container>
        <Grid item xs={12}>
          <Home />
        </Grid>
        <Grid item xs={12}>
          <Transport />
        </Grid>
        <Grid item xs={12}>
          <Lab />
        </Grid>
        <Grid item xs={12}>
          <Cargo />
        </Grid>
        <Grid item xs={12}>
          <Forwarder />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
