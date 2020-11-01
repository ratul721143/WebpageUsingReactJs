import React from 'react'
import {NavLink} from 'react-router-dom'


const Common =(props)=>{
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                  <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                          <h1>
                            {props.greetingtext}<strong className="h1-brand"> Code To Crack</strong>
                          </h1>
                          
                          <h2 className="my-3 pt-4">
                            {props.text}
                          </h2>
                          <div className="mt-7">
                            <NavLink exact to={props.buttonUrl} className="btn-get-started">{props.buttonLink}</NavLink>
                          </div>
                        </div>

                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                            <img className="imgAnimate" src={props.image} alt="error"/>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Common;