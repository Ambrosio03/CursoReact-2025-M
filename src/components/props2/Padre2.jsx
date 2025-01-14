
import { useState } from "react"
import Hijo2 from "./Hijo2";

const Padre2 = (props) => {


  return (
    <div>
        <h1>Hola soy tu padre</h1>
        {props.children}
    </div>
  )
}

export default Padre2