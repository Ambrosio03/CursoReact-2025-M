import Contador from "./components/UseState/Contador"
import ContadorDoble from "./components/UseState/ContadorDoble"
import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"
import GuitarHeroe from "./components/UseState/GuitarHeroe"
import RegistrarFormulario from "./components/UseState/RegistrarFormulario"


const App = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">Hola mundo</div>
      <Contador />
      <hr></hr>
      <ContadorDoble/>
      <hr></hr>
      <ContinuacionNumeros/>
      <hr className="mt-10"></hr>
      <RegistrarFormulario/>
      <hr className="mt-10"></hr>
      <GuitarHeroe/>
    </>
  )
}

export default App
