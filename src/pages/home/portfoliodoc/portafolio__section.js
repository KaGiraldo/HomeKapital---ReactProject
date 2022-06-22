import React, { Component } from "react";
import Card from './min_card';
import {faSackDollar as icon1,faChartLine as icon2,faCoins as icon3,faCalendarDays as icon4} from  '@fortawesome/free-solid-svg-icons'

class Section extends Component{
    render(){
        return(
          <div className="  d-flex flex-column justify-content-start align-items-center p-3 col-12 h-75 overflow-auto section">
                <Card  cardTitle="$100,000.00" cardInfo="Amount" icon={icon1}/>
                <Card cardTitle="$1,000.00" cardInfo="Monthly Installment" icon={icon2}/>
                <Card  cardTitle="00.00%" cardInfo="Rate" icon={icon3}/>
                <Card cardTitle="8/12" cardInfo="Last Installment" cardSpan="00-00-0000" icon={icon4}/>
          
          </div>
        )
    }
}

export default Section;
