import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AboutUs } from "../aboutUs/AboutUs";
// import { Favorites } from "../cakes/Favorites";
import { Gallary } from "../cakes/Gallary";
import { EditCakeForm } from "../cakes/EditCakeForm";
import "./CustomerView.css";
// import "./OrderList.css";

// import { Orders } from "../cakes/OrderList"
import { OrderList } from "../cakes/OrderList";
import { AddCakeOrder } from "../cakes/AddCakeOrder";

// const localProjectUser = localStorage.getItem("project_user");
//   const projectUserObject = JSON.parse(localProjectUser);

export const CustomerViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="formHeader">
              <h1>Magic Cakes</h1>
            </div>
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<AboutUs />} />
        <Route path="aboutUs" element={<AboutUs />} />
        {/* <Route path="favorite" element={<Favorites />} /> */}

        <Route path="editCakeForm" element={<EditCakeForm />} />
        <Route path="gallary" element={<Gallary />} />
        <Route path="order" element={<OrderList />} />
        <Route path="order/create" element={<AddCakeOrder />} />
        <Route path="order/:ordersId" element={<EditCakeForm />} />
      </Route>
    </Routes>
  );
};
