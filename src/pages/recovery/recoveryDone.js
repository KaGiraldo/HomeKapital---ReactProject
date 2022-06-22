import React from "react";
import Logo from '../../assets/recoveryImg.png';
import LightTitle from '../../commons/Title_light';
import {Link} from 'react-router-dom';
function recoveryDone(){
  
   return (
    <div className="App">
        <div className=" d-flex align-items-center justify-content-center h-100 p-4">
              
            <div className="bg-white w-100 h-50 d-flex flex-column align-items-center justify-content-around  p-2">
                <div className="w-100 h-25 p-1 d-flex justify-content-around  ">
                            <img src={Logo} alt="Company Logo" className=""></img>
                </div>
                <LightTitle text="Email sent!" className="text-black"/>
            
                <Link to="/reset" className="form__input">
                    <button className="btn btn-primary w-75 p-3">GOT IT</button>
                </Link>
            </div>
        </div>
    </div>
  
    )
};



export default recoveryDone;
