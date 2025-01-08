import React, { useState } from 'react'

const ContinuacionNumeros = () => {
    const [number, setNumber] = useState([5,2,3,1,4])

    const handlerAdd = () =>{
        const maxNumber = Math.max(...number);
        setNumber((prevNumber) => [...prevNumber , maxNumber + 1])
    }
  return (
    <div>
        <button className='bg-slate-400 rounded mb-2 mx-2' onClick={handlerAdd}>Añade el siguiente numero</button>
    </div>

    // crea una funcion que añada el numero siguiente a mi array de numeros(y hay k ordenarlos)

   
  )
}

export default ContinuacionNumeros