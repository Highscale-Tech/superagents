import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./routes/index";
import Explore from "./routes/explore";
import { SelectValueProvider } from "./components/selectValueContext";
import Log from "./routes/log";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/log",
    element: <Log />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectValueProvider>
      <RouterProvider router={router} />
    </SelectValueProvider>
  </React.StrictMode>
);
