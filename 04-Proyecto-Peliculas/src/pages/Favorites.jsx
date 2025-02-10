import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const [moviesFav, setMoviesFav] = useState([]);
  
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setMoviesFav(JSON.parse(storedFavorites));
    }
  }, [])
  
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-sky-950 mb-10">Mis peliculas favoritas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {moviesFav.length > 0 ? 
          moviesFav.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
          :
          <p className="text-center text-sky-600">No tienes peliculas favoritas</p>
        }
        </div>
      </div>
    </div>
  )
}

export default Favorites