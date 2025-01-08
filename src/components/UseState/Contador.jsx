import { useState } from "react"

const Contador = () => {

    //espacio para los hoocks
    const [total, setTotal] = useState(0);

    //espacio para declarar las funciones


    const handlerClickIncrement = () =>{
       setTotal(total + 1)
    }

    const handlerClickDecrement = () => {
        setTotal(total - 1)
    }


  return (
    <>
        <h1>Contador en react</h1>
        <h2>{total}</h2>
        <button onClick={handlerClickIncrement}>Incrementar</button>
        <button onClick={handlerClickDecrement}>Decrementar</button>
    </>
  )
}

export default Contador