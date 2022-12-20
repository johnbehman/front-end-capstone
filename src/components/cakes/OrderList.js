import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
// import { AddCakeOrder } from "./AddCakeOrder";
import "./OrderList.css";


export const OrderList = ( ) => {
  const [order, setOrder] = useState([]);
  // const [add,setAdd] = useState([]);
  const navigate = useNavigate();
  // const { ordersId } = useParams();
  
  const localProjectUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localProjectUser);


  const [needRefresh, setNeedRefresh] = useState(false);
  
  


  useEffect(() => {
    
  const url = projectUserObject.isStaff ? `http://localhost:8088/order?_expand=cakeShape&_expand=cakeFlavors&_expand=icingType&_expand=size&_expand=design` : `http://localhost:8088/order?_expand=cakeShape&_expand=cakeFlavors&_expand=icingType&_expand=size&_expand=design&customerId=${projectUserObject.id}`

    const fetchData = async () => {
      const response = await fetch(url);
      const orderArray = await response.json();
      setOrder(orderArray);
    };
    fetchData();
  }, [needRefresh]);



  const deleteButton = (ordersId ) => {
   
    return (
      <button
        onClick={() => {
          fetch(
            `http://localhost:8088/order/${ordersId}`,
            {
              method: "DELETE"
            }
            )
            .then(setNeedRefresh(true));
        }}
        className="delete"
      >
        DELETE
      </button>
    );

  };

  // useEffect(() => {
  //   fetch(`http://localhost:8088/orders/${ordersId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAdd(data);
  //     });
  // }, [ordersId]);

  // const handleSaveButtonClick = (e) => {
  //   e.preventDefault();

  //   return fetch(`http://localhost:8088/orders/${add.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(add),
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       navigate("/order");
  //     });
  
  // };
  return (
    <>
   <div className="orderMain">
    <div className="header">
      <h1> order List</h1>
      
</div>
      <article className="order">
        {order.map((order) => {
          return (
            <section key={order.id} className="orderList">
              {/* <p>{order.address} - {order.imageUrl} square feet</p> */}
              <div>
                <div className="font-list">
                  {/* < className="order" src={order.id} alt="wedding cake" /> */}
                  <div>
                    {/* <p>Name: {order.name} </p> */}
                    <Link to={`/order/${order.id}`}>Name: {order.name} </Link>
                  </div>
                  <div>
                    <p>pickUpDate: {order.pickUpDate}</p>
                  </div>
                  <div>
                    <p>Address: {order.address}</p>
                  </div>

                  <div>
                    <p>phone: {order.phone}</p>
                  </div>
                  <div>
                    <p>Email: {order.email}</p>
                  </div>
                  <div>
                    <p>cakeShape: {order.cakeShape.shape}</p>
                  </div>
                  <div>
                    <p>cakeFlavors: {order.cakeFlavors.flavor}</p>
                  </div>
                  <div>
                    <p>icingType: {order.icingType.type}</p>
                  </div>
                  <div>
                    <p>size: {order.size.size}</p>
                  </div>
                  <div>
                    <p>design: {order.design.design}</p>
                  </div>
                </div>
              </div>
              {deleteButton(order.id)}
              <div>
              <button onClick={() => navigate("/order/create")}>Create order</button>
              </div>
              {/* <button
          onClick={(clickEvent) => {
            handleSaveButtonClick(clickEvent);
          }}
          className="editCake"
          >
          Edit 
        </button> */}
    
            </section>
          );
        })}
      </article>
      </div>
    </>
  );
};
