import React, { } from "react";
import Title from '../../../commons/Title';
import Navbar from '../../../commons/Navbar';
import Section from './transaction__Section'

const Transactions = () => {

    const startDate = document.getElementById('date1');
    const endDate = document.getElementById('date2');

    function filterDate(){
        const dates = ['2012-03-07', "2021-06-07", "2022-05-07"]
        const filteredDate = dates.filter(dateFilter);
        function dateFilter(date){
            return date >= startDate.value && date <= endDate.value;
        }
        console.log(dates)
        console.log(filteredDate)
        console.log(startDate.value,endDate.value)

    }

    return(

    <div className='App bg-white'>
        <div className="container-fluid h-100 p-0 bg-white">
            <Navbar />
            <Title text="TRANSACTIONS"/>
            <div className="container-fluid p-3 d-flex justify-content-around">
               <div className="row w-50 p-2">
                    <label className="text-primary">Initial Date</label>
                    <input type="date" className=" border border-primary text-black border-0 border-bottom" id="date1" onChange={filterDate}></input>
                    

               </div>
               <div className="row w-50 p-2">
                    <label className="text-primary">Final Date</label>
                    <input type="date" className=" border border-primary text-black border-0 border-bottom" id="date2" onChange={filterDate}></input>
               </div>


            </div>
            <Section />
               
        </div>
    </div>
     
    )
};

export default Transactions;
