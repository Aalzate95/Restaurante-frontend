import React,{useState,useEffect} from 'react'
import './DailySchedule.css'

const DailySchedule = (props) => {

    const Cell = (id,hours,ocupado = false) =>{
        return(
            <td key={id} style={{backgroundColor:`${ocupado?"red":"green"}`}} className="Cell-Schedule" onClick={(e)=>{props.handleReservar(id)}}>{hours}</td>
        )
    }

    const RenderFranjaHoraria = (row,index) =>{
       return(
           <tr key={index}>
            {
                row.map((col,index)=>{
                    return(
                        Cell(col.id,col.hora,col.ocupado)
                        )
                })
            }
            </tr>
        )
    }

    const RenderHorario = props.data.map((row,index)=>{
                return(
                    RenderFranjaHoraria(row,index)
                    )
                })


        


    return ( 
        <table className="Reservar-table">
            <thead>
                <tr>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sabado</th>
                    <th>Domingo</th>
                </tr>
            </thead>
            <tbody>
                {RenderHorario}
            </tbody>
        </table>
     );
}
 
export default DailySchedule;
