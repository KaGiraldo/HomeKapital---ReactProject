import React, { } from "react";
import Title from '../../../commons/Title';
import Navbar from '../../../commons/Navbar';
import Section from './transaction__Section'
const Transactions = () => {

    return(
    <div className='App bg-white'>
        <div className="container-fluid h-100 p-0 bg-white">
            <Navbar />
            <Title text="TRANSACTIONS"/>
            <div className="container-fluid p-3">
                 <button className="btn btn-primary w-100 h-10 p-3" type="button">TRANSACTIONS</button>
            </div>
            <Section />
               
        </div>
    </div>
     
    )
};

export default Transactions;
