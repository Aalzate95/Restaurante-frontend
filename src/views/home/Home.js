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
            <div className="container-fluid" id="containerBanner">
                <div className="row">
                    <div className="col-md-8 " id="bannerIzq">
                        <div className="jumbotron vertical-center">
                                <h1>
                                    La Esquina de Alex
                                </h1>
                                <h2>
                                    La mejor comida Italiana de Guayaquil.
                                </h2>
                                <p>
                                    <a className="btn btn-primary btn-large" onClick={()=>{handleClick('/reservar')}}>Reservar</a>
                                </p>
                            </div>
                    </div>
                    <div className="col-md-4 vertical-center" id="bannerDer">
                        <img src="logo512.png"></img>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;