import { useState } from "react"

const ContadorDoble = () => {
    const [frieds, setFrieds] = useState(
        {juan:0,
        pedro:0,
        maria:0,
    })

    const [pAmigos, setPAmigos]= useState(0);
    

    const hanxleClick = (nombre, valor) =>{
        promedioFriends()
        setFrieds((prevFriends) =>
            {
                return{...prevFriends,
                    [nombre]: prevFriends[nombre] >= 0 ? prevFriends[nombre] +valor: 0
                }
            });

            
    }

    const promedioFriends = () =>{
        const valores = Object.values(frieds);
        const totalAmigos = valores.reduce((acc,numAmigo)=>{
            return acc +numAmigo;
        })
        setPAmigos(valores.length > 0 ? totalAmigos / valores.length : 0);
    }

    // crear un contador que permita aumentar los amigos de juanny otro de maria
  return (
    <>
    <div >ContadorDoble</div>
    <h1 className="text-2xl bg-cyan-200 text-center">Contador de amigos</h1>
    <div className="text-center">
        <span className="mb-5 py-10">Juan tiene <strong>{frieds.juan}</strong>amigos</span>
        <button className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-2 rounded" onClick={()=>hanxleClick("juan",1)}>Incrementar amigos</button>
        <button className="bg-red-500 text-white hover:bg-red-700 font-bold py-2 px-2 rounded" onClick={()=>hanxleClick("juan",-1)}>Decrementar amigos</button>
        <br />
        <span>Maria tiene <strong>{frieds.maria}</strong>amigos</span>
        <button className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-2 rounded" onClick={() => hanxleClick("maria",1)}>Incrementar amigos</button>
        <button className="bg-red-500 text-white hover:bg-red-700 font-bold py-2 px-2 rounded" onClick={() => hanxleClick("maria",-1)}>Decrementar amigos</button>
        <br />
        <span>Promedio de amigos: {pAmigos}</span>
    </div>
    </>
  ) 
}

export default ContadorDoble