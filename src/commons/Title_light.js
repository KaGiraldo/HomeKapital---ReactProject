import React, {  } from "react";


const Title = ({text,subtext,mintext}) => {
    return(
        <div className="navbar navbar-dark bg-white text-primary d-flex flex-column justify-content-center p-3">
            <span className="h2">{text}</span>
            <span className="h">{subtext}</span>
            <span className="p">{mintext}</span>
        </div>
    )
};


export default Title;
