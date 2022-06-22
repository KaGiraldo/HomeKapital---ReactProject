import React from "react";
import Logo from '../../assets/lightLogo.png';
import LightTitle from '../../commons/Title_light';
import Title from '../../commons/Title';

import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock as icon} from  '@fortawesome/free-solid-svg-icons'

function resetPass(){
  
   return (
    <div className="App">
        <div className=" d-flex align-items-end  h-100 p-0">
              
            <div className="bg-white w-100 h-75 d-flex flex-column align-items-center justify-content-around  p-0">
                <div className="w-100 h-25 p-0 d-flex justify-content-around  bg-primary p-0">
                    <img src={Logo} alt="Company Logo" className="img-fluid h-100 w-100"></img>
                </div>
                <div className="w-100 h-75 p-0 d-flex justify-content-around  flex-column">
                    <FontAwesomeIcon icon={icon} className="w-100 h-25 text-primary"/>
                    <LightTitle text="¿Forgot your Password?" className="text-black"/>
                    <LightTitle subtext="Click on the link bellow:" className="text-black"/>
                    <Link to="/verify" className="form__input">
                        <button className="btn btn-primary w-75 p-2">RESET PASSWORD</button>
                    </Link>
                  
                </div>
           
               
            </div>
        </div>
    </div>
    )
};



export default resetPass;
