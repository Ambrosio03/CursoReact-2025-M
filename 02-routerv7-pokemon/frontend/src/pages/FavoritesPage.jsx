

import { usePokemon } from "../context/PokemonContext"
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";
const FavoritesPage = () => {
  const { favorites , removeFromFavorites} = usePokemon();

  if(favorites.length===0){
    return(
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold mb-4">Favoritos</h1>
        <p>No tienes pokemons favoritos</p>
        <Link to={ROUTES.HOME}>Volver al inicio</Link>
      </div>
    )
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tus pokemons favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map(pokemon => (
            <div className="border rounded-lg p-4 shadow-amber-200" key={pokemon.id}>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} ></img>
                <h2 className="text-xl font-semibold text-center capitalize mt-2">{pokemon.name}</h2>
                <div className="mt-4 space-y-2 ">
                    <Link to={`${ROUTES.SEARCH}/${pokemon.name}`}
                    className="block w-full text-center  bg-blue-500 text-white px-4 py-2 rounded-lg">
                      Ver detalles</Link>

                    <button className="w-full text-center bg-red-500 text-white px-4 py-2 rounded-lg" 
                    onClick={()=>removeFromFavorites(pokemon.id)}>
                      Eliminar
                      </button>
                </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default FavoritesPage