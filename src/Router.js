import Main from "./components/layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Films from "./components/Pages/Films";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/films",
        element: <Films />,
      },
    ],
  },
]);

export default router;
