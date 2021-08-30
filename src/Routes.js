import React,{useState,useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import ContactUs from "./views/contactUs/ContactUs";
import Home from "./views/home/Home";
import Menu from "./views/menu/Menu";
import Navbar from './components/navbar/Navbar';

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar>
                        <Home/>
                    </Navbar>
                </Route>
                <Route path="/menu">
                    <Navbar>
                        <Menu/>
                    </Navbar>
                </Route>
                <Route path="/contact-us">
                    <Navbar>
                        <ContactUs/>
                    </Navbar>
                </Route>
            </Switch>
        </Router>
     );
}
 
export default Routes;