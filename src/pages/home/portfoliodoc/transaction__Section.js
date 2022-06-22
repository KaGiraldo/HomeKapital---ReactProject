import React, { Component } from "react";
import StaticDb from '../staticDB/transactions';


class Section extends Component{
    render(){
        return(
          <div className="  d-flex flex-column justify-content-start align-items-center p-3 col-12 h-100 overflow-auto section">
              <StaticDb />
          </div>
        )
    }
}


export default Section;
