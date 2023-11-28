import Main from "./layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Transport from "./Pages/Transport";
import Lab from "./Pages/Lab1";
import Cargo from "./Pages/Cargo";
import Forwarder from "./Pages/Fowarder";
import Footer from "./Pages/Footer";

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
