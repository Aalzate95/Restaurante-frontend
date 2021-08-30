import React,{useState} from 'react';
import './Home.css'

const Home = () => {
    return ( 
        <div className="Home">
            <div className="HomeMediaTitles">
                <div>
                    <div className="MediaTitle">
                        <h1>La esquina de Alex:</h1>
                        <h1>La mejor comida italiana de Guayaquil</h1>
                    </div>
                    <div className="MediaDescription">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="MediaButton">
                        <button>Reservaciones</button>
                    </div>
                </div>
                <div className="MediaImage">
                    <img src="https://elcomensal.es/wp-content/uploads/2021/06/%C2%BFQue-bebo-en-el-restaurante-Comida-italiana.jpg" alt="Restaurante"/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;