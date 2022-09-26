import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Components from "../pages/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/components",
    element: <Components />,
  },
]);
