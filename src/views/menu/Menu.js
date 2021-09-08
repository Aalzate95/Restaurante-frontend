import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchMenu } from '../../utils/api';
import './Menu.css'

const Menu = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const getData = async () => {
        try {
            let data = await fetchMenu()
            setOptions(data)

        } catch (e) {
            console.error(e);
        }
    }
    
    const renderMenu = options.map((opt, index) => {
        return (
            <div className="col-md-3 text-center mt-5" style={{ display: `${opt.available ? "inline" : "none"}` }} key={index}>
                <div className="card">
                    <div className="card-body">
                        <h6 id="nombre" className="card-header text-md-start size">{opt.plate_name}</h6>
                        <h6 id="precio" className=" text-md-start"><strong>Precio:</strong> ${opt.price}</h6>
                        <h6 id="descripcion" className="card-text text-md-start"> <strong>Descripion:</strong> {opt.description}</h6>
                        <h6 id="categoria" className="card-text text-md-start"><strong>Categoria:</strong> {opt.category}</h6>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="header">
                    <h1>Menú</h1>
            </div>
        
            <div className="container Menu">
                <div className="row">
                    {renderMenu}
                </div>
            </div>
        </div>
    );
}

export default Menu;