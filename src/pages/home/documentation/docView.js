import React, { } from "react";
import Title_light from '../../../commons/Title_light';
import Navbar from '../../../commons/Navbar';
// import {Link} from 'react-router-dom';

const product = () => {

    return(
    <div className='App bg-white '>
        <div className="container-fluid h-100 p-0 bg-white flex__container">
            <Navbar />
            <Title_light  text="Lender’s Application Form"/>

            <div className=" p-3  overflow-auto d-flex flex-column justify-content-start align-items-center flex__container">
                <div className="card border-primary mb-3" >
                <div className="card-header">Section 1</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">Document Title</h5>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolore quis nihil eos sint, quos beatae modi in amet incidunt iusto fuga at consequuntur temporibus, doloremque distinctio ut architecto libero velit a autem. Quasi atque est eaque possimus deleniti vel repellat commodi impedit. Doloremque sint cumque nobis recusandae eaque ipsa repudiandae voluptatem molestias ducimus corporis reprehenderit autem repellendus repellat tempore sed rem ea unde, voluptas sunt eveniet ratione modi, pariatur ipsum! Perspiciatis distinctio quaerat, aliquam excepturi possimus est ad a provident dicta cumque impedit voluptatum atque nam ipsam recusandae!</p>
                </div>
                </div>

          
            </div>
        </div>
    </div>
     
    )
};

export default product;
