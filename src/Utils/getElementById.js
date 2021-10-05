import {productos} from "../data/productos";

export const getElementById = (id)  => productos.find(p => p.id ===id);

