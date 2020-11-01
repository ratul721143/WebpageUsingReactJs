import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = ()=>{
    return(
            <>
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand ml-5" exact to="/">Code To Crack</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item">
                          <NavLink className="nav-link mr-3" activeClassName="Link_active" exact to="/">
                            Home 
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link mr-3" activeClassName="Link_active" exact to="/About">
                            About
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link mr-3" activeClassName="Link_active" exact to="/Services">
                            Services
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link mr-3" activeClassName="Link_active" exact to="/Contact">
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
              </div>
            </div>
          </div>
            
            
            
        </>
    );
};

export default Navbar;