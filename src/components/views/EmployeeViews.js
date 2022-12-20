import React from "react"; 
import { Outlet, Route, Routes } from "react-router-dom"
import { AboutUs } from "../aboutUs/AboutUs";
import { EditCakeForm  } from "../cakes/EditCakeForm";
import { Gallary  } from "../cakes/Gallary"
import { OrderList } from "../cakes/OrderList";
import "./EmployeeView.css"


export const EmployeeViews = () => {
	return (
        <Routes>
          <Route
            path="/"
            element={
              <>
              <h1>Employee view</h1> 
                <Outlet />
              </>
            }
          >
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="order/:ordersId" element={<EditCakeForm />} />
            <Route path="order" element={<OrderList />} />
            <Route path="Gallary" element={<Gallary />} />



          </Route>
        </Routes>
      );
    };