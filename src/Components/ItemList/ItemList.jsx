import React from 'react';
import {productos} from '../../data/productos';
import {Card} from '../Card/Card';
import './ItemList.css';


export const ItemList =() => {
    return (
        <div className="items-container mt-5">
            {productos.map((p) => (
            <Card img= {p.img}
                description= {p.description}
                price= {p.price}
                size= {p.size}
                stock= {p.stock}
                id= {p.id}
                key= {p.id}
            />
            ))
            } 
        </div>
    );
};