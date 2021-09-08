import React,{useState} from 'react'
import './ContactUs.css'

const ContactUs = () => {
    const [mailMensaje,setMailMensaje] = useState("")
    const [mailNombre,setMailNombre] = useState("")

    return ( 
        <div className="ContactUs">
            <div className="header">
                    <h1>Contactenos</h1>
            </div>

            <div className="Contacto">
                <div className="Contacto-content">
                    <div className="form-group">
                        <input className="form-control" name="from_name" type="text" id="nombre" placeholder="NOMBRE" onChange={(e)=>{setMailNombre(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" type="text" placeholder="MENSAJE" onChange={(e)=>{setMailMensaje(e.target.value)}}/>
                    </div>
                    <div className="form-group contact-button">
                        <a href={`mailto:alex.alzate95@gmail.com?subject=Quiero contactar contigo, mi nombre es ${mailNombre}&body=${mailMensaje}`} className="form-button">Enviar</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;