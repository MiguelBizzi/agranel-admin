import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SideMenu from "./pages/SideMenu.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import StorageManagement from "./pages/StorageManagement.tsx";
import UsersManagement from "./pages/UsersManagement.tsx";
import ProductsManagement from "./pages/ProductsManagement.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenu />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "storage",
        element: <StorageManagement />,
      },
      {
        path: "users",
        element: <UsersManagement />,
      },
      {
        path: "products",
        element: <ProductsManagement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
