import React, { Component } from "react";
import Logo from '../assets/homeLogo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff as icon1} from  '@fortawesome/free-solid-svg-icons'
import {faAngleLeft as icon2} from  '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


class navbar extends Component{
    render(){
        return(
            <div>
                <div className="navbar navbar-dark bg-white text-primary d-flex justify-content-around p-4">
                     
                    <Link to="#" className="">
                        <FontAwesomeIcon icon={icon2} className=" text-white"/>
                    </Link>
                    <img src={Logo} alt="Company Logo" className="img-fluid"></img>
                    <Link to="/" className="">
                        <FontAwesomeIcon icon={icon1} className="text-white"/>
                    </Link>

                </div>
            </div>
        )
    }
}

export default navbar;
