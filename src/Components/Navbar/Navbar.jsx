import React from 'react';
import '../Navbar/Navbar.css';
import {Link} from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';


export const Navbar = ()=> {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fontTitle" to="/">Rasu-indumentaria</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-items" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/ListProducts">JERSEYS</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                        <CartWidget/>
                </div>
            </nav>
    )
}