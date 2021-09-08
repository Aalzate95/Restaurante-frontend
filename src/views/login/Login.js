import {React, useState} from 'react'
import './Login.css'
import {useHistory} from "react-router-dom";
import {makeLogin} from  '../../utils/api'


const Login = ({userLogin,userAuthenticated}) => {

    const [usuario,setUsuario] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleLogin = async (e) =>{
        e.preventDefault()
        try{
            let token = await makeLogin(usuario,password)
            userLogin(token.token)
            
            return history.push('/dashboard')
        }catch(error){
            setError(true)
        }
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