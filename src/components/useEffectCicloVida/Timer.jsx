import { useEffect, useState } from 'react'

const Timer = () => {
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     //NUNCA crear funciones asincronas en el useEffect pero si llamarlas
    //     console.log("Componente montado");

    //     // si no le paso ARRAY de dependencias se ejecuta cada vez que se renderiza el componente

    // })

    // useEffect(() => {
    //     console.log("Componente montado solo una vez");
    //     // si el array de dependencias esta vacio solo se ejecuta una vez
        
    // },[])

    useEffect(() => {
        //NUNCA crear funciones asincronas en el useEffect pero si llamarlas
        console.log("Componente montado cada vez que se modifica algo del array de dependencias");
        
    },[counter])
    
  return (
    <>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(prevCounter => prevCounter+1)}>Iniciar</button>
    </>
  )
}

export default Timer