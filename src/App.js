import "./App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth/>,
  },
  {
    path: "/homepage",
    element: <Home/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
