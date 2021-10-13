import { collection, onSnapshot } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../firebase/firebase'


export const useGetItems = (id = 0) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState (true);
    console.log(productos)
    useEffect (() => {
        setLoading(true);
        onSnapshot(collection(db,"Productos"), async (snapshot)=> {
            const filteredProducts = await snapshot.doc.map (item=> ({
                ...item.data(),
                id: item.id
            }));
            if(id === 0) {
                setProductos(filteredProducts);
            }
            else {
                setProductos(filteredProducts.find(item => item.id === id))
            }
                setLoading(false);
        })
}, [id] );
    return {
        loading,
        productos
    }
}
