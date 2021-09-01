import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchMenu } from '../../utils/api';

const Menu = () => {
    const [options, setOptios] = useState([
        {
            "plate_name": "Huevos a la Italian",
            "price": 5,
            "description": "El mejor desayuno",
            "category": "Desayuno",
            "available": true
        },
        {
            "plate_name": "Lasagna",
            "price": 6,
            "description": "Porción",
            "category": "Plato Fuerte",
            "available": true
        },
        {
            "plate_name": "Helado",
            "price": 8,
            "description": "Chocolate",
            "category": "Postre",
            "available": false
        },
        {
            "plate_name": "Tallarin Al Pesto",
            "price": 9,
            "description": "Tres capas de queso",
            "category": "Plato Fuerte",
            "available": true
        },
        {
            "plate_name": "Mega Margarita",
            "price": 10,
            "description": "Bebida refrescante",
            "category": "Bebidas",
            "available": true
        },
        {
            "plate_name": "Risotto",
            "price": 14.5,
            "description": "Mucho queso",
            "category": "Plato Fuerte",
            "available": true
        },
        {
            "plate_name": "Tiramisú",
            "price": 9,
            "description": "El mejor postre",
            "category": "Postre",
            "available": true
        },
        {
            "plate_name": "Ossobuco",
            "price": 10,
            "description": "La mejor carne del dia!",
            "category": "Plato Fuerte",
            "available": false
        },

    ]);

    /* useEffect(() => {
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
 */
    /* const getData = async () => {
        try {
            let data = await fetchMenu()
            console.log(data)
        } catch (e) {
            console.error(e);
        }
    } */
    const renderMenu = options.map((opt, index) => {
        return (
            <div className="col-md-3 text-center mt-5" style={{ display: `${opt.available ? "inline" : "none"}` }} key={index}>
                <div className="card">
                    <div className="card-body">
                        <h6 id="nombre" className="card-title text-md-start size">{opt.plate_name}</h6>
                        <h6 id="precio" className=" text-md-start">{opt.price}</h6>
                        <h6 id="descripcion" className="card-text text-md-start">{opt.description}</h6>
                        <h6 id="categoria" className="card-text text-md-start">{opt.category}</h6>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">

                {renderMenu}
            </div>
        </div>
    );
}

export default Menu;