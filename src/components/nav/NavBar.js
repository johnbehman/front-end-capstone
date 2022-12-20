import React from "react";
import { CustomerNavBar } from "./CustomerNavBar";
import { EmployeeNavBar } from "./EmployeeNavBar"
import "./NavBar.css"

export const NavBar = () => {
    const localProjectUser = localStorage.getItem("project_user")
    const localUserObject = JSON.parse(localProjectUser)
  
  
  
  if (localUserObject.isStaff){
      return <EmployeeNavBar/>
  
  }else{
      return <CustomerNavBar/>
  }

}