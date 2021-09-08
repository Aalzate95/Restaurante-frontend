import React from 'react';
import {useHistory} from "react-router-dom";
import './Navbar.css'

const Navbar = ({children}) => {
    const history = useHistory()

    const handleClick = (path) => {
        history.push(path);
      }
    

    
    return ( 
        <div className="Navbar">
            <div className="Navbar-style">
                <div className="Navbar-content logo">
                <a href="/" className="logo">
                    <img src="logo192.png"></img>
                </a>
                </div>
                <div className="Navbar-content">
                    <p onClick={()=>{handleClick("/")}}>Inicio</p>
                    <p onClick={()=>{handleClick("/menu")}}>Menu</p>
                    <p onClick={()=>{handleClick("/contact-us")}}>Contacto</p>
                </div>
                <div className="Navbar-content RightAlign">
                    <button>Admin</button>
                    <button onClick={()=>{handleClick('/reservar')}}>Reservar</button>
                </div>
            </div>
            <div style={{paddingTop:"4em"}}>
                {children}
            </div>
        </div>
     );
}
 
export default Navbar;