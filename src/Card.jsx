import React from 'react'
import {NavLink} from 'react-router-dom'

const Card = (props) =>{
    return(
        <>
        
                
                    <div className="col-lg-4 col-md-6 col-10 mx-auto">
                        <div className="card">
                            <img src={props.img} className="card-img-top" alt="error"/>
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.text} </p>
                                <NavLink exact to="/" className="btn btn-primary">Click Here</NavLink>
                            </div>
                        </div>
                    </div>
                
        </>
    );
};

export default Card;