import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import TableWithProducts from "./pages/TableWithProducts";
import CreateModal from "./pages/CreateModal";
import UpdateModal from "./pages/UpdateModal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="order-summary-page" element={<OrderSummaryPage />} />
      <Route path="table-with-products" element={<TableWithProducts />} />
      <Route path="create-modal" element={<CreateModal />} />
      <Route path="update-modal" element={<UpdateModal />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
