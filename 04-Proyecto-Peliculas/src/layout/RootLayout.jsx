import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    //Contenedor principal
    <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Seccion izquierda del nav */}
                    <div className="flex items-center">
                        <NavLink to="/" className="text-lg font-bold">
                            VideoClub 
                        </NavLink>
                        <div className="flex space-x-4 ml-8">
                            <NavLink to="/movies" className="hover:text-amber-600">Peliculas</NavLink>
                            <NavLink to="/search" className="hover:text-amber-600">Buscar</NavLink>
                            <NavLink to="/reviews" className="hover:text-amber-600">Reviews</NavLink>
                            <NavLink to="/favorites" className="hover:text-amber-600">Favoritos</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* Contenedor principal para el outlet */}
        <main className="max-w-7xl mx-auto px-4 py-6">
            <Outlet/>
        </main>
        <footer className="bg-sky-950 text-white text-center p-4">
            <div className="max-w-7xl mx-auto px-4  mt-auto">
                <p className="text-center">VideoClub © 2025</p>
            </div>
        </footer>
    </div>
  )
}

export default RootLayout