import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
    return (
            <nav>

                <Link to="/btns" className="devPage">
                    <span className="orange">Dev</span><b>challenges.io</b>
                </Link>

                <div className="item-navbar">
    
                    <NavLink activeStyle={{
                                color: "black"
                            }}
                            className="item"
                            exact
                            to="/btns" >
                                Buttons
                    </NavLink>
                    <NavLink activeStyle={{
                                color: "black"
                            }}
                            className="item"
                            exact
                            to="/inputs" >
                                Inputs
                    </NavLink>

                </div>
            </nav>
    )
}
