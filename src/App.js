import "./App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/homepage",
    element: <Home />,
  },
  { path: "/todo", element: <Todo /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
