import React,{useState} from 'react';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory} from "react-router-dom";

const fecha = new Date();

const Dashboard = () => {
    const history = useHistory()

    const handleClick = (path) => {
        history.push(path);
      }

    return ( 
        <body>
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">La Esquina de Alex</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    <a class="nav-link px-3" href="#">Cerrar Sesión</a>
                </div>
            </div>
        </header>

        <div class="container-fluid">
        <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                    Reservaciones
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">
                    <span data-feather="file"></span>
                    Menu
                </a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
</div>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
      </div>
      
      <div class="container-fluid">
	<div class="row">
		<div class="col-md-6">
			<div class="card bg-default">
				<h5 class="card-header">
					Numero de Reservas
				</h5>
				<div class="card-body">
					<p class="card-text">
						10 reservaciones
					</p>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card">
				<h5 class="card-header">
					Fecha y Hora
				</h5>
				<div class="card-body">
					<p  id = "time" class="card-text">
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Numero de Personas</th>
      <th scope="col">Horario</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Angie Tuarez</th>
      <td>4</td>
      <td>11:00</td>
      <td><a href="">Llegó</a> / <a href="">No llegó</a> / <a href="">Eliminar</a></td>
    </tr>
    <tr>
      <th scope="row">Cesar Carlier</th>
      <td>4</td>
      <td>11:30</td>
      <td><a href="">Llegó</a> / <a href="">No llegó</a> / <a href="">Eliminar</a></td>
    </tr>
    <tr>
      <th scope="row">Juan Diego Vallejo</th>
      <td>4</td>
      <td>11:35</td>
      <td><a href="">Llegó</a> / <a href="">No llegó</a> / <a href="">Eliminar</a></td>
    </tr>
  </tbody>
</table>
    </main>
</body>
     );
}
 
export default Dashboard;

window.onload = function(){
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
        updateClock();
        
};
