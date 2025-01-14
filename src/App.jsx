// import Contador from "./components/UseState/Contador"
// import ContadorDoble from "./components/UseState/ContadorDoble"
// import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"
// import GuitarHeroe from "./components/UseState/GuitarHeroe"
// import RegistrarFormulario from "./components/UseState/RegistrarFormulario"

// import Padre from "./components/props/Padre"
import Hijo2 from "./components/props2/Hijo2"
import Nieto2 from "./components/props2/Nieto2"
import Padre2 from "./components/props2/Padre2"
import GestUser from "./components/useEffect/gestUser"
import Main1 from "./components/useEffect/Main1"
import NavUser from "./components/useEffect/NavUser"
import Timer from "./components/useEffectCicloVida/Timer"
import UsersPlaceholder from "./components/useEffectCicloVida/UsersPlaceholder"


const App = () => {
  return (
    <>
      {/* <div className="text-3xl font-bold underline">Hola mundo</div>
      <Contador />
      <hr></hr>
      <ContadorDoble/>
      <hr></hr>
      <ContinuacionNumeros/>
      <hr className="mt-10"></hr>
      <RegistrarFormulario/>
      <hr className="mt-10"></hr>
      <GuitarHeroe/> */}
      {/* <UsersPlaceholder/> */}
      <GestUser>
        <NavUser/>
        <Main1/>
      </GestUser>
    </>
  )
}

export default App
