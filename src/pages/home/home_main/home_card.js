import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingDollar as icon1, faChevronRight as icon2 , faHouse as icon3} from  '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


const card = ({cardTxt, span, data}) => {
    return(
        <div className="container-fluid  border border-primary border-0 border-bottom p-3 d-flex home__card">
            <div className="container-fluid w-50   bg-primary d-flex justify-content-center align-items-center home__icon">
                <FontAwesomeIcon icon={icon1} className="display-1 pt-2 text-light"/>
            </div>
            <div className="container-fluid w-50   d-flex  flex-column justify-content-center align-items-start p-3 card__info">
                <h2 className="h6">{cardTxt}</h2>
                <span className="text-primary">{span}</span>
                <h6 className="text-primary ">{data}</h6>
            </div>
            <div className="container-fluid w-25 d-flex justify-content-center align-items-end">
                <Link to="/home/product" className="">
                    <FontAwesomeIcon icon={icon2} className="h1 pt-2 text-primary"/>
                </Link>
            </div>
          
        </div>
    )
};

export default card;
