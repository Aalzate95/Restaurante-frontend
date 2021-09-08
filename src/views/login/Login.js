import {React, useState} from 'react'

import {useHistory} from "react-router-dom";



const Login = ({userLogin,userAuthenticated}) => {

    const [usuario,setUsuario] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleLogin = async (e) =>{
        e.preventDefault()
        try{
            let token = "ebASJHDAJKWK"
            userLogin(token.token)
            
            return history.push('/home')
        }catch(error){
            setError(true)
        }
    }

    return (
        <div>
            <div className="login" >
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <span>Usa tu cuenta</span>
                            <input type="text" placeholder='Usuario' onChange={(e)=>{setUsuario(e.target.value)}} />
                            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                            <a href="/RecoverPassword">Olvidaste la contraseña?</a>
                            <button onClick={(e)=>{handleLogin(e)}}>Sign In</button>
                            <p style={{display:`${error===true?"flex":"none"}`}}>Datos incorrectos... Vuelva a intentarlo</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;