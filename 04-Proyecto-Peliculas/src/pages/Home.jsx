import { useState } from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom"



const Home = () => {
    const api_token = import.meta.env.VITE_API_TOKEN;
    const [movies, setMovies] = useState([]);

    const fetching = async () => {
        const response = await fetch(`https://api.thmoviedb.otg/3/movie/popular?api key=${api_token}`);
        if(!response.ok){
            throw new Error(`Error al obtener los datos: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.result)

    }
    useEffect(() => {
        fetching()
    }, [])
  return (
    <div className="space-y-8">
        <header className="text-center">
            <h1 className="text-4xl font-bold text-sky-950">
                Bienvenido a mi Movie App
            </h1>
            <p className="mt-2  text-gray-600">
                La mejor aplicacion para buscar peliculas y leer reseñas
            </p>
        </header>
        <section>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold" >
                    Peliculas populares
                </h2>
                <Link to="/movies" className="text-sky-900 hover:underline">Ver todas</Link>
            </div>
        </section>
        {/* Grid con las peliculas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Aqui pintaran las peliculas */}
            {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    </div>
  )
}

export default Home