import React from "react";
import { useNavigate } from "react-router-dom";
import { useState} from "react";

export const AddCakeOrder = () => {


    const navigate = useNavigate()
    // const {ordersId} = useParams()
    
      const localProjectUser = localStorage.getItem("project_user");
      const projectUserObject = JSON.parse(localProjectUser);



    const [order, update] = useState({
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

//   useEffect(
//     () => {
//         const fetchData = async () => {
//             const response = await fetch(`http://localhost:8088/order/${ordersId}`)
//             const responseJSON = await response.json()
//             update(responseJSON)
//         }
//         fetchData()
//     },
//     []
// )
// useEffect(() => {
   
//     fetch(
//       `http://localhost:8088/orders/${ordersId}`
    
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         update(data[0]);
//       });
//   }, [ordersId]);




  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    const orderToSendAPI = {
      customerId: projectUserObject.id,
      pickUpDate: order.pickUpDate,
      name: order.name,
      address: order.address,
      phone: order.phone,
      email: order.email,
      cakeFlavorsId: order.cakeFlavorsId,
      icingTypeId: order.icingTypeId,
      designId: order.designId,
      cakeShapeId: order.cakeShapeId,
      sizeId: order.sizeId,
    };

    // userId: 0,
    // pickUpDate: "",
    // name: "",
    // address: "",
    // phone: "",
    // email: "",
    // cakeFlavorsId: 0,
    // icingTypeId: 0,
    // designId: 0,
    // cakeShapeId: 0,
    // sizeId: 0,

    // Edit

    return fetch(`http://localhost:8088/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderToSendAPI),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/order");
      });
  };
  // {order.name}
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

            // value={order.name}
            // value="monkey"
            onChange={(evt) => {
              const copy = { ...order };
              copy.name = evt.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            // value={order.address}
            onChange={(evt) => {
              const copy = { ...order };
              copy.address = evt.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            // value={order.phone}
            onChange={(evt) => {
              const copy = { ...order };
              copy.phone = evt.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            // value={order.email}
            onChange={(evt) => {
              const copy = { ...order };
              copy.email = evt.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="cakeFlavor">Cake Flavor:</label>
          <select
            // value={order.cakeFlavorsId}
            onChange={(evt) => {
              const copy = { ...order };
              copy.cakeFlavorsId = parseInt(evt.target.value);

              update(copy);
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
            // value={order.icingTypeId}
            onChange={(evt) => {
              const copy = { ...order };
              copy.icingTypeId = parseInt(evt.target.value);
              update(copy);
            }}
          >
            <option value="1"></option>
            <option value="2">White vanilla Buttercream Frosting</option>
            <option value="3"> chocolate Buttercream Frosting</option>
            <option value="4">Fondant</option>
            <option value="5">Cream Cheese Frosting</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="design">Design:</label>
          <select
            // value={order.designId}
            onChange={(evt) => {
              const copy = { ...order };
              copy.designId = parseInt(evt.target.value);
              update(copy);
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
            // value={order.cakeShapeId}
            onChange={(evt) => {
              const copy = { ...order };
              copy.cakeShapeId = parseInt(evt.target.value);
              update(copy);
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
            // value={order.sizeId}
            onChange={(evt) => {
              const copy = { ...order };
              copy.sizeId = parseInt(evt.target.value);
              update(copy);
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
