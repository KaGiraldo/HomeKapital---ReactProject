import React from "react";
import Logo from '../../assets/recoveryImg.png';
import LightTitle from '../../commons/Title_light';
import Input from '../../commons/LabelIput';
import {Link} from 'react-router-dom';
function recovery(){
  
   return (
    <div className="App">
        <div className=" d-flex align-items-center justify-content-center h-100 p-4">
              
            <div className="bg-white w-100 h-50 d-flex flex-column align-items-center justify-content-around  p-2">
                <div className="w-100 h-25 p-1 d-flex justify-content-around  ">
                            <img src={Logo} alt="Company Logo" className=""></img>
                </div>
                <LightTitle text="Account Recovery" className="text-black"/>
                <Input 
                    attribute={{
                        id:"",
                        inpName:"",
                        labelTxt:"Email Address",
                        inputType:"email"
                    }}
                />
                <Link to="/recoveryDone" className="form__input">
                    <button className="btn btn-primary w-75 p-2">SEND</button>
                </Link>
                <Link to="/" className="form__input">
                    <button className="btn border border-dark text-dark w-75 p-2">CANCEL</button>
                </Link>
            </div>
        </div>
    </div>
  
    )
};

export default recovery;