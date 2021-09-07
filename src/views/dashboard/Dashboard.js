import React,{useState} from 'react';
import './Dashboard.css'
import {useHistory} from "react-router-dom";

const Dashboard = () => {
    const history = useHistory()

    const handleClick = (path) => {
        history.push(path);
      }

    return ( 
        <div className="Home">
            <div class="container-fluid" id="containerBanner">
                <div class="row">
                    <div class="col-md-8 " id="bannerIzq">
                        <div class="jumbotron vertical-center">
                                <h1>
                                    La Esquina de Alex
                                </h1>
                                <h2>
                                    La mejor comida Italiana de Guayaquil.
                                </h2>
                                <p>
                                    <a class="btn btn-primary btn-large" onClick={()=>{handleClick('/reservar')}}>Reservar</a>
                                </p>
                            </div>
                    </div>
                    <div class="col-md-4 vertical-center" id="bannerDer">
                        <img src="logo512.png"></img>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;