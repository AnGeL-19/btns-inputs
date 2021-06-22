import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Buttons } from '../components/buttons/Buttons';
import { Inputs } from '../components/inputs/Inputs';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (

        <>
        
            <Router>
                <div className="container">
                    <div className="nav-left">
                        <Navbar />
                    </div>
                    
                    <div className="contend"> 
                        <Switch>
                            <Route path="/btns" component={Buttons} />
                            <Route path="/inputs" component={Inputs} />
                            <Redirect to="/btns" />
                        </Switch>
                    </div>
                </div>
            </Router>
            

        </>
    )
}
