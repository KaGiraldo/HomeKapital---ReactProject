import React  from "react";


const LabelInput = ({ attribute, handleChange, param }) => {
    return(
        <div className="form__input">
            <label className="text-primary">{attribute.labelTxt}</label>
            <input
                id={attribute.id}
                type={attribute.inputType} 
                name={attribute.inpName}
                className="form__input-cont text-center"
             ></input>
        </div>
    )
};



export default LabelInput;
