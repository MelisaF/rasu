import { useGetItems } from '../../hooks/useGetItems';
import {Card} from '../Card/Card';
import './ItemListContainer.css';

export const ItemListContainer =() => {
    const {loading, productos} = useGetItems()
    return (
        <>
            {
                loading ? (
                    <div className="d-flex justify-content-center" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) 
                : (
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
                        ))} 
                    </div>
                )}
        </>
    );
};