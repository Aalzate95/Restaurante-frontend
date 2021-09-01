import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Menu = () => {
return (
<Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-3 text-center mt-5">
                <div class="card">
                    <img src="/imagenes/guatita.jpg" class="card-img-top" alt=""></img>
                    <div class="card-body">
                        <h6 id="nombre" class="card-title text-md-start size">Card title</h6>
                        <h6 id="precio" class=" text-md-start">Precio</h6>
                        <h6 id="descripcion" class="card-text text-md-start">Some quick example text to build on the
                            card title and make
                            up the bulk of
                            the card's content.</h6>
                        <h6 id="categoria" class="card-text text-md-start">categoria.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
);
}

export default Menu;