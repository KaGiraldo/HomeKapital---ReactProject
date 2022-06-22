import React, { } from "react";

const transactionCard = ({cardTitle, cardInfo, date, icon}) => {

    return(
        <div className=" conmtainer-fluid card w-100 border-0 border-left  border border-primary border-bottom ">
            <div className="card-body p-3 ">
                <div className="row card-text ">
                    <div className="col-12">
                        <p className="h2">{cardTitle}</p>
                        <p className="text-primary h6">{cardInfo}</p>
                        <p className=" ">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default transactionCard;
