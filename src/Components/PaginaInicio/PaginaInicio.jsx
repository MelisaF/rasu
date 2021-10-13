import React from 'react';
import { Link } from 'react-router-dom';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const PaginaInicio = () => {
    return (
        <div>
            <Link to="/ListProducts">
                <img src="/imgResponsive.png" className="img-fluid" alt="imagen de jugadores de basket"></img>
            </Link>
            <h3 className="text-center">PRODUCTOS</h3>
            <ItemListContainer/>
        </div>
    )
}
