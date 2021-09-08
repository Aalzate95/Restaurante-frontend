import React,{useState, useEffect} from 'react';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';
import { fetchReservations,deleteReservation } from '../../utils/api';

const Dashboard = ({token,userLogin,userAuthenticated}) => {
    const [reservas,setReservas] = useState([])

    useEffect(() => {
      getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    const getData = async () => {
      try {
          let data = await fetchReservations()
          setReservas(data)
      } catch (e) {
          console.error(e);
      }
  }

  const deleteReservation = async (id) =>{
    try {
      await deleteReservation(id)
    } catch (e) {
      console.error(e);
    }
  }

    const renderReservas = reservas.map((reserva)=>{
      return(
        <tr key={reserva.id}>
          <th scope="row">{reserva.name}</th>
          <td>{reserva.id_number}</td>
          <td>{reserva.description}</td>
          <td>{reserva.number_of_persons}</td>
          <td>{reserva.reservation_date.slice(0,16)}</td>
          <td><label className="dashboard-actions">Llegó</label> / <label className="dashboard-actions">No llegó</label> / <label className="dashboard-actions" onClick={()=>{deleteReservation(reserva.id)}}>Eliminar</label></td>
        </tr>
        )
    })
    

    function updateClock() {
        var d = new Date(); // current date
        var seconds = d.getSeconds().toString().length == 1 ? '0'+d.getSeconds() : d.getSeconds();
        var minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes();
        var hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
        var ampm = d.getHours() >= 12 ? 'pm' : 'am';
        var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        var days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
        
        
        var date = days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear()+' // '+hours+':'+minutes+':'+seconds+" "+ampm;
        
        // set the content of the element with the ID time to the formatted string
        document.getElementById('time').innerHTML = date;
        
        // call this function again in 1000ms
        setTimeout(updateClock, 1000);
    }

    document.addEventListener("DOMContentLoaded", function(){
        updateClock()
    });

    return ( 
        <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">La Esquina de Alex</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="/signin" onClick={()=>{userLogin(null)}}>Cerrar Sesión</a>
                </div>
            </div>
        </header>

        <div className="container-fluid">
        <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Reservaciones
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    Menu
                </a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
</div>
<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>
      
      <div className="container-fluid">
	<div className="row">
		<div className="col-md-6">
			<div className="card bg-default">
				<h5 className="card-header">
					Numero de Reservas
				</h5>
				<div className="card-body">
					<p className="card-text">
						{reservas.length}
					</p>
				</div>
			</div>
		</div>
		<div className="col-md-6">
			<div className="card">
				<h5 className="card-header">
					Fecha y Hora
				</h5>
				<div className="card-body">
					<p  id = "time" className="card-text"></p>
				</div>
			</div>
		</div>
	</div>
</div>

<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Cedula</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Numero de Personas</th>
      <th scope="col">Fecha de Reservacion</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
      {renderReservas}
  </tbody>
</table>
    </main>
</div>
     );
}
 
export default Dashboard;


