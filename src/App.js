import React,{useState} from 'react';
import './App.css';
import Routes from './Routes';

const App = () => {
  const [token,setToken] = useState(null)
  const [userAuthenticated,setUserAuthenticated] = useState(false)
  const userLogin = (tok) =>{
    setToken(tok)
    token!==null?setUserAuthenticated(true):setUserAuthenticated(false)
  }
  return ( 
    <Routes
    userLogin={userLogin}
    token = {token}
    userAuthenticated={userAuthenticated}
    />
   );
}
 
export default App;
