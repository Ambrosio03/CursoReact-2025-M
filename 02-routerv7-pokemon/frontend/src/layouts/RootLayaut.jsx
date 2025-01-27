import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayaut = () => {
  return (
    <div className="min-h-screen bg-gray-100">
         <Navbar />
        
        <Outlet />

    </div>
  )
}

export default RootLayaut