import React, { useState, useEffect } from 'react';
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
            <div className="Card" style={{ display: `${opt.available ? "inline" : "none"}` }} key={index}>
                <div className="Card-body">
                    <div className="">
                        <div className="img-food" style={{backgroundImage:`url('${opt.imagen}')`}}></div>
                        <h6 id="nombre" className="Food-nombre">{opt.plate_name}</h6>
                        <h6 id="precio" className=" text-md-start"><strong>Precio:</strong> ${opt.price}</h6>
                        <h6 id="descripcion" className="card-text text-md-start"> <strong>Descripion:</strong> {opt.description}</h6>
                        <h6 id="categoria" className="card-text text-md-start"><strong>Categoria:</strong> {opt.category}</h6>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="Menu">
            <div className="header">
                    <h1>Menú</h1>
            </div>
        
            <div className="Menu-body">
                    {renderMenu}
            </div>
        </div>
    );
}

export default Menu;