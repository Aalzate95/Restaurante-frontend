import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom";
import './Reservar.css'
import Modal from '../../components/modal/Modal'

import {makeReservation} from '../../utils/api'

const Reserva = () => {
    const history = useHistory()
    const [show, setShow] = useState(false)
    const [cantPersonas,setCantPersonas] = useState(1);
    const [fechaReserva,setFechaReserva] = useState('');
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [description,setDescription] = useState('');

    

    const handleReservar = async () =>{
        if(nombre!=='' && cedula !== ''&& fechaReserva !== ''){
            try{
                await makeReservation({
                    "name":nombre,
                    "id_number":cedula,
                    "description":description,
                    "number_of_persons":cantPersonas,
                    "reservation_date":fechaReserva
                })
                setShow(true);
            }catch (e) {
                console.error(e);
            }
        }else{
            alert('Campos invalidos, revise la información ingresada')
        }
        
    }
        
    const ShowModal = (e,index) => {
        setShow(true)
      };

    const HideModal = () => {
        setShow(false)
      };

    const handleClick = (path) => {
        history.push(path);
      }

    const reservaRealizada = () =>{
        HideModal()
        handleClick('/')
    }

    const RenderCantPersonas = [...Array(6).keys()].map(e =>{
        return(
            <option key={e+1} value={e+1}>{e+1}</option>
            )
    })

    const RenderAmbientes = ['Terraza', 'Salón Principal', 'Balcón','Jardín'].map(ambiente=>{
        return(
            <option key={ambiente} value={ambiente}>{ambiente}</option>)
    })

    const RenderValidator = ()=>{
        let validator = fechaReserva !== ''
        if (validator){
            return(
                <div className="Reservar-modal green" style={{display:`${validator}`}}>
                    <h1>Reserva realizada con exito!</h1>
                    <button onClick={()=>reservaRealizada()}>Continuar</button>
                </div>
                )
        }else{
            return(
                <div className="Reservar-modal red" style={{display:`${validator}`}}>
                    <h1>Error, no se pudo reservar.</h1>
                    <button onClick={()=>HideModal()}>volver</button>
                </div>
            )
        }
    }


    return ( 
        <div className="Reservar">
            <Modal show={show} handleClose={HideModal}>
                {RenderValidator()}
            </Modal>

            <div className="header">
                    <h1>Reservas</h1>
            </div>
            <div className="Reservar-body">
                <div className="Reserva-announcement">
                    <p>
                    De acuerdo a las regulaciones dispuestas por el Ministerio de Turismo y ARCSA, para salvaguardar la salud de nuestros clientes, hemos dispuesto un distanciamiento de 2mts entre cada mesa.
                    </p>
                </div>
                <br/>
                <label>Seleccione la cantidad de comensales y fecha requerida:</label>
                <div className="Reservar-options">
                    <div>
                        <label>Nombre:</label>
                        <input type="text" onChange={(e)=>{setNombre(e.target.value)}}/>

                        <label>No. de Cedula</label>
                        <input type="text" onChange={(e)=>{setCedula(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Cantidad de personas: </label>
                        <select onChange={(e)=>{setCantPersonas(e.target.value)}}>
                            {RenderCantPersonas}
                        </select>
                    </div>

                    <div>
                        <label>fecha y hora requerida:</label>
                        <input onChange={(e)=>{setFechaReserva(e.target.value)}}type="datetime-local"/>
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <textarea onChange={(e)=>{setDescription(e.target.value)}} placeholder="P. ej. Voy con una persona que usa silla de ruedas."></textarea>
                    </div>
                </div>
                <br/>
                <div className="Reserva-announcement">
                    <p>
                    Por favor, tomar en cuenta que el consumo mínimo por persona reservada es de$30.
                    <br/>
                    Respetando las medidas del COE Nacional las mesas deberan ser maximo de 6 personas.
                    </p>
                    
                </div>
                <br/>

                <button onClick={()=>handleReservar()}>Reservar</button>
            </div>
        </div>
     );
}
 
export default Reserva;