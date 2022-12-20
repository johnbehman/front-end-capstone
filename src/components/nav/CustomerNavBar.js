import React from "react";
// import { Gallary } from "../gallary/Gallary"
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const CustomerNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navImgContainer">
              <div className="navBarLinks">
        <div className="navbar__item active">
        </div>
        
        {/* <div className="navbar__item active">
          <Link className="navbar__link" to="/edit">
            Edit Cake Order
          </Link>
        </div> */}

      <div className="navBarLinks">
        <div className="navbar__item active">
          <Link className="navbar__link" to="/order">
            Order
          </Link>
        </div>
        <div className="navbar__item active">
          <Link className="navbar__link" to="/gallary">
            Gallary
          </Link>
        </div>  
        <div className="navbar__item active">
          <Link className="navbar__link" to="/aboutUs">
            About Us
          </Link>
        </div>
        {localStorage.getItem("project_user") ? (
          <div className="navbar__item navbar__logout">
            <Link
              className="navbar__link"
              to=""
              onClick={() => {
                localStorage.removeItem("project_user");
                navigate("/", { replace: true });
              }}
              >
              Logout
            </Link>
          </div>
        ) : (
          ""
          )}
      </div>
      </div>
      
    </div>

  );
};
