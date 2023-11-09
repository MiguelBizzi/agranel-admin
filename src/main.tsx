import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SideMenu from "./pages/SideMenu.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import UsersManagement from "./pages/UsersManagement.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ProductsManagement from "./pages/ProductsManagement.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenu />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products",
        element: <ProductsManagement />,
      },
      {
        path: "users",
        element: <UsersManagement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
