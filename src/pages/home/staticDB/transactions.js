import React from "react";
import Card from '../portfoliodoc/transaction__card';

function transactionList(){
  
    const cardsorig = [
        {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2022-05-07",
        },
        {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2022-06-10",
        },
        {
            cardTitle:"$1,000,0132320.00",
            cardInfo:"Payment of Installment",
            date:"2022-06-20",
        },  {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2021-07-07",
        },  {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2021-03-07",
        },  {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2021-03-07",
        },  {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2012-03-20",
        },
    ]

    var cards=cardsorig;

    /* var filtercardsdate2 = cardsorig.filter(arrayfilter);
    function arrayfilter(element){
        return element.date=="2012-03-20";
    }
    console.log(filtercardsdate2); */

    const hola ="qwnejwh";
    var variable="Hola que hace";

    function filterDate(){
        const startDate = document.getElementById('date1');
        const endDate = document.getElementById('date2');

        const dates = []

        for (let i = 0; i < cards.length; i++) {
            dates[i]=cards[i].date;
        }

        const filteredDate = dates.filter(dateFilter);
        function dateFilter(date){
            return date >= startDate.value && date <= endDate.value;
        }

        var filtercardsdate=[];
        for (let j = 0; j < filteredDate.length; j++) {
            /* console.log(filteredDate[j]); */
            const datesearch=filteredDate[j];

            cardsorig.forEach(element => {
                if (element.date==datesearch) {
                    filtercardsdate.push(element);
                }
            });
        }

        cards=filtercardsdate;

        for (let m = 0; m < cards.length; m++) {
            <Card  cardTitle={card.cardTitle} cardInfo={card.cardInfo} date={card.date}/>            
        }

    }


    console.log(cards);
    const cardList = cards.map( card =>(

    <Card  cardTitle={card.cardTitle} cardInfo={card.cardInfo} date={card.date}/>
    
    ))

    return (
     <div className="container-fluid">
        <div className="container-fluid p-3 d-flex justify-content-around">
               <div className="row w-50 p-2">
                    <label className="text-primary">Initial Date</label>
                    <input type="date" className=" border border-primary text-black border-0 border-bottom" id="date1"></input>
                    

               </div>
               <div className="row w-50 p-2">
                    <label className="text-primary">Final Date</label>
                    <input type="date" className=" border border-primary text-black border-0 border-bottom" id="date2" onChange={filterDate}></input>
               </div>


        </div>
           {cardList}
     </div>
    )
};



export default transactionList;
