import react from "react";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import "./sidebar.css";

import { BrowserRouter,Route,Link, Redirect, Switch } from "react-router-dom";

import Resume from "./Resume"


const ResumeHolder=()=>{
    return(
        <>
        <div className="App">
         <div className="container">
          <div className="row">
           <div className="col-lg-3" >
            <Sidebar/>
            
          </div>
          <div className="col-lg-9 main_portion">
          
          <Resume/>
      
          </div>
        </div>
        </div>
        </div>
        
     
       
        </>
    )

}

export default ResumeHolder;