// lista de productos renderizados

import { useEffect, useState } from "react"

const ProductList = () => {
    const [productos, setProductos] = useState([]);
    const [CardGuitar, setCardGuitar] = useState([]);

    const fetchProducts = async () => {
        try{
            const response = await fetch("http://localhost:5173/src/data/db1.json");

            if(!response.ok){
                throw new Error("Algo salio mal");
            }

            setProductos  (await response.json());
        }catch(error){
            console.log("Error", error);
        }
    }

    useEffect(() => {
      fetchProducts()
    }, [])
    
  return (
    <div>ProductList</div>
  )
}

export default ProductList