import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom";
import './Reservar.css'
import Modal from '../../components/modal/Modal'

const Reserva = () => {
    const history = useHistory()
    const [show, setShow] = useState(false)
    const [cantPersonas,setCantPersonas] = useState('');
    const [fechaReserva,setFechaReserva] = useState('')

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

            <div className="Reservar-header">
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
                        <label>Personas: </label>
                        <select onChange={(e)=>{setCantPersonas(e.target.value)}}>
                            {RenderCantPersonas}
                        </select>
                    </div>

                    <div>
                        <label>fecha y hora requerida:</label>
                        <input onChange={(e)=>{setFechaReserva(e.target.value)}} type="datetime-local"/>
                    </div>
                </div>
                <div className="Reserva-announcement">
                    <p>
                    Por favor, tomar en cuenta que el consumo mínimo por persona reservada es de$30.
                    <br/>
                    Respetando las medidas del COE Nacional las mesas deberan ser maximo de 6 personas.
                    </p>
                </div>
                <div>
                    <h3>Area del restaurante</h3>
                    <select>
                        {RenderAmbientes}
                    </select>
                </div>
                
                <br/>

                <button onClick={ShowModal}>Reservar</button>
            </div>
        </div>
     );
}
 
export default Reserva;