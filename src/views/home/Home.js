import React,{useState} from 'react';
import './Home.css'

const Home = () => {
    return ( 
        <div>
        <div id="Welcome">
  
          <nav class="navbar navbar-expand-lg navbar fixed-top  navbar-light bg-light">
          <a class="navbar-brand" href="#Welcome">
              <img src="assets/images/logo.png" width="50" height="50" class="d-inline-block" alt="" /> La Esquina de Alex
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#Welcome">Welcome</a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Restaurant">Restaurant</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Menu">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Reservation">Reservation</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#OurLocation">Our Location</a>
                </li>
              
              </ul>
          </div>
        </nav>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 img-fluid img-slider" src="https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="First slide" />
                <div class="carousel-caption">
                  <h2>Welcome!</h2>
                <p>...</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider2.jpg" alt="Second slide" />
                  <div class="carousel-caption">
                  <h2>Traditional Italian Cuisine</h2>
                <p>...</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100 img-fluid img-slider" src="https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Third slide" />
                  <div class="carousel-caption">
                  <h2>Selected Products</h2>
                <p>...</p>
              </div>
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
        <div class="container">
        
        <div class="row" id="Menu">
          <div class="col navMenu">
                <h2 class="text-center" >~ Menu ~</h2>
          </div>
        </div>
        <div class="row bg-light">
          <div class="col-md-4" data-aos="slide-up">
            <div class="card view zoom">
                <img class="card-img-top img-fluid " src="assets/images/meat-menu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Carnes ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Bocconcini di carne in nido di sfoglia</li>
                    <li class="list-group-item">Bruschette con maiale al curry</li>
                  <li class="list-group-item">Uova al prosciutto</li>
                  <li class="list-group-item">Vitello tonnato</li>
                  <li class="list-group-item">Fesa di tacchino marinata con olive</li>
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid " src="assets/images/fish-menu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Frutos del mar ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Carpaccio di polpo</li>
                    <li class="list-group-item">Cozze al verde</li>
                  <li class="list-group-item">Cocktail di gamberi</li>
                  <li class="list-group-item">Risotto alla crema di scampi</li>
                  <li class="list-group-item">Ravioli di pesce con crema di scampi</li>
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid" src="assets/images/menu-vegetarian.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Vegetariano ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Parmigiana di melanzane</li>
                    <li class="list-group-item">Strudel con ricotta e spinaci</li>
                  <li class="list-group-item">Polpette di spinaci e ricotta</li>
                  <li class="list-group-item">Frittata di patate al forno</li>
                  <li class="list-group-item">Spaghetti con le polpettine vegetariane</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
        <div class="row" id="Reservation">
          <div class="col navMenu">
                <h2 class="text-center">~ Reservaciones ~</h2>
          </div>
        </div>
        <div class="row">
          <div class=" col-lg-12 reserve-container" data-aos="fade-up">
            <img class="img-fluid image-reserve" src="assets/images/reserve.jpg" />
            <div class="reserve-text col-lg-12 ">
              <h1 class="text-center">Horarios</h1>
              <div class="row">
                <div class="col-6">
                    <h2 class="text-center">Almuerzo</h2>
                    <h5 class="text-center">12:00 - 15:00</h5>
                </div>
                <div class="col-6">
                    <h2 class="text-center">Cena</h2>
                    <h5 class="text-center">19:30 - 23:30</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row bg-light">
          <div class="col">
            <form>
              <div class="form-row">
                  <div class="form-group col-6">
                    <h3>Reserve</h3>
                    <label for="inputDate"> Date</label>
                    <input type="date" class="form-control" id="inputDate" placeholder="Data gg/mm/aaaa" />
                  </div>
                  <div class="form-group col-6">
                    <h3>Details</h3>
                    <label for="inputName"> Name</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Name" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputTime"> Timetables</label>
                    <input type="time" class="form-control" id="inputTime" placeholder="Timetables" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputEmail"> Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputNumber"> Number of Guests</label>
                    <input type="number" class="form-control" id="inputNumber" placeholder="Number of Guests" />
                  </div>
                  <div class="form-group col-6">
                    <label for="inputCel"> Phone</label>
                    <input type="tel" class="form-control" id="inputCel" placeholder="Phone" />
                  </div>
                  <div class="form-group col-12">
                    <label for="inputComment"> Further requests</label>
                  <textarea class="form-control" rows="4" id="inputComment" placeholder="Further requests"></textarea>
                </div>
              </div>
              <div class="row">
                  <div class="col-md-4 col-md-offset-4">
                    <button type="submit" class="btn btn-secondary btn-block">Reserve</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
        <div class="row" id="OurLocation">
          <div class="col navMenu">
            <h2 class="text-center">~ Donde Estamos ~</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h3>Direccion:</h3>
            <p>En pleno centro de tu corazon </p>
          </div>
          <div class="col-md-6">
            <h3>Email:</h3>
            <p>info@laesquinadealex.com</p>
          </div>
        </div>
        <div class="row footer bg-light">
          <div class="col">
            <p class="text-center">Siguenos: 
              <a class="social-icon" href="#"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="#"><i class="fab fa-instagram"></i></a></p>
          </div>
          <div class="col">
            <p class="text-center">Copyright &copy; 2020</p>
          </div>
          <div class="col">
            <p class="text-center">Powered by: <a href="#">harto cafe y falta de sueño</a></p>
          </div>
        </div>
    </div>
  </div>
     );
}
 
export default Home;