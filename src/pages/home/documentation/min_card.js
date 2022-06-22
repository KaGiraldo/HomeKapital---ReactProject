import React, { } from "react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines as icon1} from  '@fortawesome/free-solid-svg-icons'
import {faEye as icon2} from  '@fortawesome/free-solid-svg-icons'


const productCard = ({cardTitle, cardInfo}) => {

    return(
        <div className="container-fluid card w-100  border border-0  ">
        <div className="card-body p-0 border border-0  ">
            <div className="row card-text mt-2 ">
                <div className="col p-0 bg-primary d-flex justify-content-center align-items-center text-light">
                <FontAwesomeIcon icon={icon1} className="h1"/>

                </div>
             
                <div className="col-6 p-2 d-flex flex-column justify-content-center align-items-start border border-0  ">
                    <p className="text-primary"> {cardTitle}</p>
                    <p>{cardInfo}</p>
                </div>
                <div className="col d-flex justify-content-center align-items-center p-3  border-primary border-left">
               
                    <Link to="/documentation/docview" className="">
                        <FontAwesomeIcon icon={icon2} className="h1"/>
                    </Link>
                </div>
            
            </div>
         
        </div>
        </div>
     
    )
};

export default productCard;
