import { Link, Outlet, useNavigate } from "react-router-dom"
import isAuthenticated from "../helpers/isAuthenticated"



const RootLayout = () => {
    const navigate = useNavigate();

    const handleLogaut = () => {
        localStorage.removeItem("token")
        navigate("/");
    }
  return (
    <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
            <div className="msx-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link
                    to="/"
                    className="font-bold text-xl hover:text-gray-800">
                        Home</Link>
                        <Link
                    to="/profile"
                    className="font-bold text-xl hover:text-gray-800">
                        Profile</Link>
                        <Link
                    to="/dashboard"
                    className="font-bold text-xl hover:text-gray-800">
                        Dashboard
                        </Link>
                    {isAuthenticated() && (
                        <button
                        className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg "
                        onClick={handleLogaut}>
                            Cerrar Sesion
                        </button>
                    )}
                </div>
            </div>
        </nav>
        <main className="max-w-6xl mx-auto mt-8 px-4">
            <Outlet />
        </main>
        
    </div>
  )
}

export default RootLayout