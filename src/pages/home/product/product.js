import React, { } from "react";
import Title from '../../../commons/Title';
import Navbar from '../../../commons/Navbar';
import ProdCard from './product_card';
// import {Link} from 'react-router-dom';

const product = () => {

    return(
    <div className='App bg-white'>
        <div className="container-fluid h-100 p-0 bg-white">
            <Navbar />
            <Title text="PORTFOLIO LOAN"/>
            <div className="h-75 p-4  overflow-auto">
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />

                <ProdCard />

                <ProdCard />
                <ProdCard />
                <ProdCard />


          
            </div>
        </div>
    </div>
     
    )
};

export default product;
