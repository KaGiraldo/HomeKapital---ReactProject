import React, { } from "react";
import Title from '../../../commons/Title';
import Navbar from '../../../commons/Navbar';
import Section from './portafolio__section'
import {Link} from 'react-router-dom';

const product = () => {

    return(
    <div className='App bg-white'>
        <div className="container-fluid h-100 p-0 bg-white">
            <Navbar />
            <Title text="PORTFOLIO LOAN PL-000"/>
                <Section />
                <Link to="/home/transactions" className="d-grid w-100 p-3">
                    <button className="btn btn-primary w-100 h-10 p-3" type="button">TRANSACTIONS</button>
                </Link>
               
        </div>
    </div>
     
    )
};

export default product;
