import React,{useState} from 'react';
import './Home.css'
import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory()

    const handleClick = (path) => {
        history.push(path);
      }

    return ( 
        <div className="Home">
            <div class="container-fluid" id="containerBanner">
                <div class="row">
                    <div class="col-md-8" id="bannerIzq">
                        <div class="jumbotron">
                                <h1>
                                    La Esquina de Alex
                                </h1>
                                <h2>
                                    La mejor comida Italiana de Guayaquil.
                                </h2>
                                <p>
                                    <a class="btn btn-primary btn-large" href="#">Learn more</a>
                                </p>
                            </div>
                    </div>
                    <div class="col-md-4" id="bannerDer">
                        <img src="logo512.png" alt="Logo Restaurante"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;