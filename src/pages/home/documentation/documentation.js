import React, { } from "react";
import Title from '../../../commons/Title';
import Title_light from '../../../commons/Title_light';
import Navbar from '../../../commons/Navbar';
import MinCard from './min_card';
// import {Link} from 'react-router-dom';

const product = () => {

    return(
    <div className='App bg-white '>
        <div className="container-fluid h-100 p-0 bg-white flex__container">
            <Navbar />
            <Title text="DOCUMENTATION "subtext="Portfolio Loan " mintext="PL-000"/>
            <div className=" p-3  overflow-auto d-flex flex-column justify-content-start align-items-center flex__container h-75">
                <Title_light  text="Client Documents "/>
                <MinCard cardTitle="Lender’s Application Form" cardInfo="00-00-0000"/>
                <MinCard cardTitle="Lender’s Bank Info" cardInfo="00-00-0000"/>
                <MinCard cardTitle="US Tax Certificate" cardInfo="00-00-0000"/>
                <MinCard cardTitle="W-8" cardInfo="00-00-0000"/>

                <Title_light  text="Product Documents "/>
                <MinCard cardTitle="Promissory Note" cardInfo="00-00-0000"/>
                <MinCard cardTitle="Amortization Schedule" cardInfo="00-00-0000"/>
                <MinCard cardTitle="Stamp Tax" cardInfo="00-00-0000"/>
            

          
            </div>
        </div>
    </div>
     
    )
};

export default product;
