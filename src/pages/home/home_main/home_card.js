import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


const card = ({cardTxt, span, data, icon, iconArrow}) => {
    return(
        <div className="container-fluid  border border-primary border-0 border-bottom p-3 d-flex home__card">
            <div className="container-fluid w-50   bg-primary d-flex justify-content-center align-items-center home__icon">
                <FontAwesomeIcon icon={icon} className="display-1 pt-2 text-light"/>
            </div>
            <div className="container-fluid w-50   d-flex  flex-column justify-content-center align-items-start p-3 card__info">
                <h2 className="h6">{cardTxt}</h2>
                <span className="text-primary">{span}</span>
                <h6 className="text-primary ">{data}</h6>
            </div>
            <div className="container-fluid w-25 d-flex justify-content-center align-items-end">
                <Link to="/home/product" className="">
                    <FontAwesomeIcon icon={iconArrow} className="h1 pt-2 text-primary"/>
                </Link>
            </div>
          
        </div>
    )
};

export default card;
