import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import HomePage from "../../Pages/HomePage/HomePage";
import Contact from "../../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router
