import React from "react"; 

import { CustomerViews} from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"
export const ApplicationViews = () => {

    const localProjectUser = localStorage.getItem("project_user")
    const projectUserObject = JSON.parse(localProjectUser)
  
    if(projectUserObject.isStaff){
      return <EmployeeViews/>
    } else {
      return <CustomerViews/>
    }
  }