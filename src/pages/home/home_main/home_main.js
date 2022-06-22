import React, { Component } from "react";
import Card from './home_card';
import {faHandHoldingDollar as icon1 ,faChevronRight as arrow , faCoins as icon2,faHouse as icon3} from  '@fortawesome/free-solid-svg-icons'

class navbar extends Component{
    render(){
        return(
          <div className="container-fluid home_section d-flex flex-column justify-content-start align-items-center p-3">
                <Card  cardTxt="Portfolio Loan" span="Amount" data="$ 000,000,000.00" icon={icon1} iconArrow={arrow}/>
                <Card cardTxt="Mortgage Loan"  span="Mortgage" data="7 Mortgages" icon={icon2} iconArrow={arrow}/>
                <Card  cardTxt="DREI" span="Investment" data="$ 000,000,000.00" icon={icon3} iconArrow={arrow}/>



             
          </div>
         
        )
    }
}

export default navbar;
