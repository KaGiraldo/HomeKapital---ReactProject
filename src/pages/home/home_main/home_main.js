import React, { Component } from "react";
import Card from './home_card';

class navbar extends Component{
    render(){
        return(
          <div className=" home_section d-flex flex-column justify-content-start align-items-center p-3">
                <Card  cardTxt="Portfolio Loan" span="Amount" data="$ 000,000,000.00"/>
                <Card cardTxt="Mortgage Loan"  span="Mortgage" data="7 Mortgages"/>
                <Card  cardTxt="DREI" span="Investment" data="$ 000,000,000.00"/>



             
          </div>
         
        )
    }
}

export default navbar;
