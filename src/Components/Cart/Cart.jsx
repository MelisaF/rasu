import React, {useContext} from 'react'
import { ItemContext } from '../../context/ItemContext';
import './cart.css';
import {Link} from 'react-router-dom';


export const Cart = () => {
    
    const {cart} = useContext(ItemContext);
    const totalFinal = [];
    const precioFinal = (prev, next) => prev + next;

    return (
        <div>
            <h1 className="mt-3 ms-4">Cart</h1>
                {cart.length=== 0 ? (
                    <p className="notProduct">NO HAY PRODUCTOS AGREGADOS</p>
                )
                : (
                    cart.map (item => {
                    const total = item.price * item.cantidad
                    totalFinal.push(total);
                    
                    return (
                        <div className="table-cart">
                            <table className="table table-dark table-striped" style= {{width: "95%"}}>
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Count</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.key}{item.description}</td>
                                        <td>{item.cantidad}</td>
                                        <td>$ {item.price}</td>
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash align-center" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                )}
                ))
                }
                <h3 className="mt-3 ms-4"> Total Cart: ${totalFinal.length >0 ? totalFinal.reduce(precioFinal) :0}</h3>
                <Link to="/ListProducts" className="btn btn-dark ms-4">
                    Ver productos
                </Link>
        </div>
    );}