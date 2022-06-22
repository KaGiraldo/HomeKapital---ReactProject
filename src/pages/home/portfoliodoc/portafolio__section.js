import React, { Component } from "react";
import Card from './min_card';

class Section extends Component{
    render(){
        return(
          <div className="  d-flex flex-column justify-content-start align-items-center p-3 col-12 h-75 overflow-auto section">
                <Card  cardTitle="$100,000.00" cardInfo="Amount"/>
                <Card cardTitle="$1,000.00" cardInfo="Monthly Installment"/>
                <Card  cardTitle="00.00%" cardInfo="Rate"/>
                <Card cardTitle="8/12" cardInfo="Last Installment" cardSpan="00-00-0000"/>
          
          </div>
        )
    }
}

export default Section;
