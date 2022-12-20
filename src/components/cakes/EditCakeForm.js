import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditCakeForm.css";

export const EditCakeForm = () => {
 
  const [cakeOrder,  setCakeOrder] = useState({
    userId: 0,
    pickUpDate: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    cakeFlavorsId: 0,
    icingTypeId: 0,
    designId: 0,
    cakeShapeId: 0,
    sizeId: 0,
  });

  const { ordersId } = useParams();
  const navigate = useNavigate();

  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);

  // Display

  useEffect(() => {
    console.log(projectUserObject.id);
    fetch(
      `http://localhost:8088/order?_expand=cakeShape&_expand=cakeFlavors&_expand=icingType&_expand=size&_expand=design&id=${ordersId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCakeOrder(data[0]);
      });
  }, []);

  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    

    // Edit

    return fetch(`http://localhost:8088/order/${cakeOrder.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cakeOrder),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/order");
      });
  };
  // {cakeOrder.name}
  return (
    <form className="cakeForm">
   
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
            autoFocus
            type="text"
            // className="form-control"

            value={cakeOrder.name}
            // value="monkey"
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.name = evt.target.value;
              setCakeOrder(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            value={cakeOrder.address}
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.address = evt.target.value;
              setCakeOrder(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            value={cakeOrder.phone}
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.phone = evt.target.value;
              setCakeOrder(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={cakeOrder.email}
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.email = evt.target.value;
              setCakeOrder(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="cakeFlavor">Cake Flavor:</label>
          <select
            value={cakeOrder.cakeFlavorsId}
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.cakeFlavorsId = parseInt(evt.target.value);

              setCakeOrder(copy);
            }}
          >
            <option value="0"></option>
            <option value="1">Vanilla</option>
            <option value="2">Strawberry</option>
            <option value="3">Red velvet</option>
            <option value="4">Chocolate</option>
            <option value="5">Marble</option>
            <option value="6">Lemon</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="icingType">Icing Type:</label>
          <select
            value={cakeOrder.icingTypeId}
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.icingTypeId = parseInt(evt.target.value);
              setCakeOrder(copy);
            }}
          >
            <option value="0"></option>
            <option value="1">White vanilla Buttercream Frosting</option>
            <option value="2"> chocolate Buttercream Frosting</option>
            <option value="3">Fondant</option>
            <option value="4">Cream Cheese Frosting</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="design">Design:</label>
          <select
            value={cakeOrder.designId}
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.designId = parseInt(evt.target.value);
              setCakeOrder(copy);
            }}
          >
            <option value="0"></option>
            <option value="1">For Graduation</option>
            <option value="2">For Bithday</option>
            <option value="3">baby shower</option>
            <option value="4">For Wedding</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="cakeShape">Cake Shape:</label>
          <select
            value={cakeOrder.cakeShapeId}
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.cakeShapeId = parseInt(evt.target.value);
              setCakeOrder(copy);
            }}
          >
            <option value="0"></option>
            <option value="1">round</option>
            <option value="2">Square</option>
            <option value="3">Custom Cake</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <select
            value={cakeOrder.sizeId}
            onChange={(evt) => {
              const copy = { ...cakeOrder };
              copy.sizeId = parseInt(evt.target.value);
              setCakeOrder(copy);
            }}
          >
            <option value="0"></option>
            <option value="1">1/4 sheet</option>
            <option value="2">1/2 sheet</option>
            <option value="3">full sheet</option>
            <option value="4">3 tire wedding cake</option>
            <option value="5">5 tire wedding cake</option>
          </select>
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Submit Cake orders
      </button>
</form>
  );
};
