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
            
            <Section />
               
        </div>
    </div>
     
    )
};

export default Transactions;
