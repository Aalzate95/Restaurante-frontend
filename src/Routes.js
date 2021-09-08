import React,{useState,useCallback} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import ContactUs from "./views/contactUs/ContactUs";
import Home from "./views/home/Home";
import Menu from "./views/menu/Menu";
import Navbar from './components/navbar/Navbar';
import Reservar from './views/reservar/Reservar';
import Dashboard from './views/dashboard/Dashboard';
import Login from "./views/login/Login";

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
      />
    )
}

const Routes = ({token,userLogin,userAuthenticated}) => {

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

                <PrivateRoute  authed={userAuthenticated} path="/dashboard" component={()=><Dashboard userAuthenticated={userAuthenticated} userLogin={userLogin}/>}/> 


                <Route path="/signin">
                    <Navbar>
                        <Login
                            userAuthenticated={userAuthenticated}
                            userLogin={userLogin}
                        />
                    </Navbar>
                </Route>

            </Switch>
        </Router>
     );
}
 
export default Routes;