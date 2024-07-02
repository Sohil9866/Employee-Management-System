import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/loginForm";
import Signup from "./Components/Signup"
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/signup",
      element: <Signup/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
