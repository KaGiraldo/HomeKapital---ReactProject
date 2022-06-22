import React from "react";
import LightTitle from '../../commons/Title_light';
import Navbar from '../../commons/Navbar_home.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserShield as icon} from  '@fortawesome/free-solid-svg-icons'

function setPass(){
  
   return (
    <div className="App">
        <Navbar />

        <div className=" d-flex align-items-end  h-100 p-0">
              
            <div className=" w-100 h-100 d-flex flex-column align-items-center justify-content-around  p-0 bg-white">
                <div className="w-100 h-75 p-0 d-flex justify-content-around  flex-column">
               
                    <div className="h-100 d-flex  flex-column align-items-center justify-content-around">
                        <div className="h-25 ">
                            <FontAwesomeIcon icon={icon} className="w-100 h-75 text-primary"/>
                        </div>
                        <div className="w-75 text-center">
                             <LightTitle text="Security Verification" subtext="We have sent a 6 digits security code to your phone number" mintext=" ** ** 3333"/>
                        </div>
                       
                        <LightTitle subtext="Click on the link bellow:" className="text-black"/>
                        <input className="btn border border-primary w-75 p-3 text-primary" type="text" placeholder="9 9 9 9 9 9"></input>

                        <button className="btn btn-primary w-75 p-3">VERIFY</button>
                        <button className="btn border border-primary text-primary w-75 p-3">RESEND CODE</button>


                    </div>
                  
                  
                </div>
           
               
            </div>
        </div>
    </div>
    )
};



export default setPass;
