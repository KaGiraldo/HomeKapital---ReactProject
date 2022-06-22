import React, { } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const productCard = ({cardTitle, cardInfo, cardSpan, icon}) => {

    return(
        <div className=" conmtainer-fluid card w-100 border-0 border-left  border border-primary border-bottom">
        <div className="card-body p-4 ">
            <div className="row card-text ">
                <div className="col-4 d-flex justify-content-center align-items-center">
                 <FontAwesomeIcon icon={icon} className="display-1 pt-2 text-primary"/>

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
