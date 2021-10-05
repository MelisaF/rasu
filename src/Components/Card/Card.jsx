import React from "react";
import {Link} from 'react-router-dom';

export const Card = ({price, img, description, id}) => {
    return(
        <div className="card mb-5 border-0" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt={description}/>
            <hr/>
            <div className="card-body">
                <p className="card-text">$ {price}</p>
                <p className="card-text">{description}</p>
                <Link to={`/producto/${id}`} className="btn btn-dark">
                    Ver detalle
                </Link>
            </div>
        </div>
    )
}