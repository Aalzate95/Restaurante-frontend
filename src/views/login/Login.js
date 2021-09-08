import {React, useState} from 'react'
import './Login.css'
import {useHistory} from "react-router-dom";



const Login = ({userLogin,userAuthenticated}) => {

    const [usuario,setUsuario] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleLogin = async (e) =>{
        history.push('/Dashboard')
        /* e.preventDefault()
        try{
            let token = "ebASJHDAJKWK"
            userLogin(token.token)
            
            return history.push('/Dashboard')
        }catch(error){
            setError(true)
        } */
    }

    return (
        <div className="Login" >
            <div className="header">
                    <h1>Iniciar Sesión</h1>
            </div>
            <div className="Login-body">
                <input type="text" placeholder='Usuario' onChange={(e)=>{setUsuario(e.target.value)}} />
                <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <a href="/RecoverPassword">Olvidaste la contraseña?</a>
                <button onClick={(e)=>{handleLogin(e)}}>Sign In</button>
                <p style={{display:`${error===true?"flex":"none"}`}}>Datos incorrectos... Vuelva a intentarlo</p>
            </div>
        </div>
     );
}
 
export default Login;