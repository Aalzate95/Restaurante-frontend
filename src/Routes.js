import React,{useState,useEffect,useCallback} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import ContactUs from "./views/contactUs/ContactUs";
import Home from "./views/home/Home";
import Menu from "./views/menu/Menu";
import Navbar from './components/navbar/Navbar';
import Reservar from './views/reservar/Reservar';
import Dashboard from './views/dashboard/Dashboard';
import Login from "./views/login/Login";

const Routes = () => {

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

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
                <Route path="/reservar">
                    <Navbar>
                        <Reservar
                            forceUpdate={forceUpdate}
                        />
                    </Navbar>
                </Route>
                <Route path="/Dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/Signin">
                    <Navbar>
                        <Login/>
                    </Navbar>
                </Route>

            </Switch>
        </Router>
     );
}
 
export default Routes;