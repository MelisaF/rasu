import React, { useContext } from 'react';
import {useParams} from 'react-router';
import { getElementById } from '../../Utils/getElementById';
import { ItemCount } from '../ItemCount/ItemCount';
import {ItemContext} from '../../context/ItemContext';
import './itemDetail.css';

export const ItemDetail = () => {
    const {id} = useParams();
    const item = getElementById(parseInt(id));

    const {setCart} = useContext (ItemContext);
    const Add = (cantidad) => {
        const itemCantidad = {...item, cantidad};
        setCart (prev => {
            return [...prev, itemCantidad]; 
        }); 
        if(item === item.id) {
            item.cantidad++
        }
    }
    return (
        <div>
            <h1 className="mt-3 mx-3">Detail</h1>
            <div className="card border-0">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={item.img} className="img-detail" alt={item.description}/>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h3 className="card-title">{item.description}</h3>
                            <h4 className="card-text"><small className="text-muted">Stock: disponible</small></h4>
                            <h4><small className="text-muted">Talle:</small></h4>
                            <select style= {{width:"50px"}}>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                            <h4 className="card-text"><small className="text-muted"> ${item.price}</small></h4>
                            <ItemCount onAdd= {Add}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
