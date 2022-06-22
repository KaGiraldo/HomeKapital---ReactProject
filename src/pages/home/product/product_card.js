import React, { } from "react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines as icon1} from  '@fortawesome/free-solid-svg-icons'
import {faEye as icon2} from  '@fortawesome/free-solid-svg-icons'


const productCard = () => {

    return(
        <div className=" conmtainer-fluid card w-100 border-0 border-left  border border-primary border-0 border-bottom ">
        <div className="card-body  ">
            <h5 className="card-title">Portfolio Loan PL-000</h5>
            <div className="row card-text">
                <div className="col-lg-6 col-md-6  col-sm-6 col-6">
                    <p className="text-primary">Amount</p>
                    <p>$ 0,000,000.00</p>
                </div>
                <div className="col-lg-6 col-md-6  col-sm-6 col-6 ">
                    <p className="text-primary">Investment Date</p>
                    <p>00-00-0000</p>
                </div>
                <div className="col-lg-6 col-md-6  col-sm-6 col-6">
                    <p className="text-primary">Monthly Installment</p>
                    <p>$0,000.00</p>
                </div>
                <div className="col-lg-6 col-md-6  col-sm-6 col-6 d-flex justify-content-around p-3">
                    <Link to="/home/documentation" className="">
                        <FontAwesomeIcon icon={icon1} className="h1 pt-2"/>
                    </Link>
                    <Link to="/home/portfoliodoc" className="">
                        <FontAwesomeIcon icon={icon2} className="h1 pt-2"/>
                    </Link>
                </div>
            
            </div>
         
        </div>
        </div>
     
    )
};

export default productCard;
