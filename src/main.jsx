import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteRoot from "./Templates/SiteRoot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteRoot />,
    errorElement: <div>error page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <SiteRoot />
  </React.StrictMode>
);
