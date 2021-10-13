import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Cart} from '../Components/Cart/Cart'
import { Contact } from '../Components/Contact/Contact';
import { ItemDetail } from '../Components/ItemDetail/ItemDetail';
import { Navbar } from '../Components/Navbar/Navbar';
import { PaginaInicio } from '../Components/PaginaInicio/PaginaInicio';
import { ItemListContainer}  from '../Components/ItemListContainer/ItemListContainer';

export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path= "/" exact component={PaginaInicio}/>
                    <Route path= "/ListProducts" exact component={ItemListContainer}/>
                    <Route path= "/producto/:id" exact component={ItemDetail}/>
                    <Route path= "/contact" exact component={Contact}/>
                    <Route path= "/Cart" exact component={Cart}/>
                </Switch>
            </Router>
        </div>
    )
}
