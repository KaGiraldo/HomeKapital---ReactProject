import React, { Component } from "react";
import Navbar from '../../commons/Navbar_home';
import Title from '../../commons/Title';
import BigTitle from '../../commons/Title_section';
import Section from './home_main/home_main'

class home extends Component{
    render(){
        return(    
            <div className="container-fluid h-100 w-100 bg-white">
                <Navbar />
                <BigTitle text_h1 = "Welcome" text_span="Mango Soft Inc"/>
                <Title text="Your products"/>
                <Section />
                <div className="container-fluid  d-flex  justify-content-center align-items-center p-5 bg-white b-primary-2">
                    <a href="#">Terms</a>
                </div>
            </div>
        )
    }
}

export default home;
