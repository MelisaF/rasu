import React, {useState} from 'react';
import './itemCount.css';

export const ItemCount = ({onAdd}) => {
    const [contador, setContador] = useState(0);
    const sumar = () => {
        setContador(contador +1);
    }
    const restar = () => {
        if (contador === 0) {
            return;
        }
        setContador(contador -1);
    }
    

    return (
        <div className="counter-container">
            <div className="btn-count">
                <button className="btn btn-dark me-3" onClick={restar}>-</button>
                <span>{contador}</span>
                <button className="btn btn-dark ms-3" onClick={sumar}>+</button>
            </div>
                <div className="btn-addCart">
                    <button className="btn btn-dark ms-3" onClick={() => { if (contador===0) {return;} onAdd(contador)}}>Agregar al carrito</button>
                </div>
        </div>
    )
}
