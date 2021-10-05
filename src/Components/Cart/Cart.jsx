import React, {useContext} from 'react'
import { ItemContext } from '../../context/ItemContext';
import './cart.css'

export const Cart = () => {
    const {cart} = useContext(ItemContext);
    const totalFinal = [];

    
    return (
        <div>
            <h1 className="mt-3 ms-4">Cart</h1>
            <ul>
                {cart.map (item => {
                    const total = item.price * item.cantidad
                    totalFinal.push(total);
                    return (
                        <div>
                            <table class="table table-dark table-striped" style= {{width: "95%"}}>
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Count</th>
                                    <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.key}{item.description}</td>
                                        <td>{item.cantidad}</td>
                                        <td>$ {item.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        );
                    })
                }
            </ul>
            <h3 className="mt-3 ms-4"> Total Cart: ${totalFinal.reduce((prev, next)=> prev + next)}</h3>
            <button className="btn btn-dark btn-cancel">Cancelar compra</button>
        </div>
    )
}
