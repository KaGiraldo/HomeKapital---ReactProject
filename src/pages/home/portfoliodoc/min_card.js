import React, { } from "react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines as icon1} from  '@fortawesome/free-solid-svg-icons'
import {faEye as icon2} from  '@fortawesome/free-solid-svg-icons'


const productCard = ({cardTitle, cardInfo, cardSpan}) => {

    return(
        <div className=" conmtainer-fluid card w-100 border-0 border-left  border border-primary border-bottom">
        <div className="card-body p-4 ">
            <div className="row card-text ">
                <div className="col-4 d-flex justify-content-center align-items-center">
                 <FontAwesomeIcon icon={icon1} className="display-1 pt-2 text-primary"/>

                </div>
                <div className="col-6 ">
                    <p className="h2">{cardTitle}</p>
                    <p className="text-primary h6">{cardInfo}</p>
                    <p className=" ">{cardSpan}</p>

                </div>
               
              
            
            </div>
         
        </div>
        </div>
     
    )
};

export default productCard;
