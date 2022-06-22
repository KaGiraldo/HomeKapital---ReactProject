import React, {  } from "react";


const BigTitle = ({text_h1, text_span}) => {
    return(
        <div className="bg-white text-primary d-flex justify-content-around d-flex flex-column  justify-content-center align-items-center p-5">
            <h2 className="h1">{text_h1}</h2>
            <span className="h3 text-dark text-uppercase">{text_span}</span>
            

        </div>
    )
};


export default BigTitle;
