import { createContext, useContext, useState } from "react";
import { toast } from "sonner"
const PokemonContext = createContext();


export function PokemonProvider({children}){
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (pokemon)=>{
        if(favorites.some( p=>p?.id===pokemon.id)){
            toast.error("Pokemon ya añadido a favoritos", {
                style:{
                    background: 'red',
                    color: 'white',
                    border: "1px solid black",
                    
                },
                icon:"⭐",
            })
            return;
        }
        setFavorites((prevFavorites) => [...prevFavorites,pokemon])
        toast.success("Pokemon añadido a favoritos", {
            style:{
                background: 'yellow',
                color: 'white',
                border: "1px solid black",
                
            },
            icon:"⭐",
        });
        console.log(favorites);
    }


    const removeFromFavorites = (pokemonId) =>{
        setFavorites(prevFavorites => prevFavorites.filter(p=>p?.id!==pokemonId))
        toast.success("Pokemon eliminado de favoritos", {
            style:{
                background: 'green',
                color: 'white',
                border: "1px solid black",
                
            },
            icon:"🗑",
        })
    }

    return(
        <PokemonContext.Provider value= {{favorites,addToFavorites, removeFromFavorites}}>
            {children}
        </PokemonContext.Provider>
    )
}

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if(context===undefined){
        throw new Error("error")
    }
    return context;
}

