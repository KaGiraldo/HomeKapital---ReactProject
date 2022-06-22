import React, { useState} from "react";
import Title from '../../commons/Title';
import Input from '../../commons/LabelIput';
import logo from '../../assets/svgLogo.svg';
import {Link} from 'react-router-dom';


const LoginForm = () => {
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value) {
        if(name === 'username'){
            setUser(value)
        }
        if(name === 'password'){
            setPassword(value)
        }
    }
    
    function handleSubmit(){
        let account = (user,password)
        if(account){
            console.log(account)
        }
    }



    return(
    <div className='App'>
        <div className="container-fluid d-flex justify-content-center align-items-center h-50 login__header">
            <img src={logo} alt="logo"></img>
        </div>
        <div className="container-fluid   bg-light h-75 w-100 login__form-container p-0 bg-white">
                
            <Title text="Welcome"/>

            <form className="d-flex flex-column justify-content-around align-items-center  h-75 ">
                <h3 className="text-primary">Log In</h3>

                <Input 
                    attribute={{
                        id:"username",
                        inpName:"username",
                        labelTxt:"Username",
                        inputType:"text"
                    }}
                    handleChange={handleChange}
                />
                <Input 
                    attribute={{
                        id:"password",
                        inpName:"password",
                        labelTxt:"Password",
                        inputType:"password"
                    }}
                    handleChange={handleChange}
                />
            
                <Link to="/home" className="form__input">
                    <button class="btn btn-primary form__input" onClick={handleSubmit}>
                        <span class="h4 text-uppercase">Log In</span>
                    </button>
                </Link>

                <Link to="/recovery" className="form__input">
                <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal">
                    <a href="#"> Forgot your password?</a>
                </button>
                </Link>
        
            

            </form>
        </div>
    </div>
     
    )
};

export default LoginForm;
