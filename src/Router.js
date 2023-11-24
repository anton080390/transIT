import Main from "./components/layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../src/components/Pages/Home";
import Transport from "../src/components/Pages/Transport";
import Lab from "../src/components/Pages/Lab1";
import Cargo from "../src/components/Pages/Cargo";
import Forwarder from "../src/components/Pages/Fowarder";
import Footer from "./components/Pages/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        name: "/transport",
        element: <Transport />,
      },
      {
        name: "/lab",
        element: <Lab />,
      },
      {
        name: "/cargo",
        element: <Cargo />,
      },
      {
        name: "/forwarder",
        element: <Forwarder />,
      },
      {
        name: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

export default router;
