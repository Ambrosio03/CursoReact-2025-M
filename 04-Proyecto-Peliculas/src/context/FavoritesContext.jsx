import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const addToFavorites = (movie) => {
        if (favorites.some(m => m?.id === movie.id)) {
            toast   .error("La película ya está en favoritos", {
                style: {
                    background: 'red',
                    color: 'white',
                    border: "1px solid black",
                },
                icon: "♥️",
            });
            return;
        }

        const updatedFavorites = [...favorites, movie];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        toast.success("Película añadida a favoritos", {
            style: {
                background: 'yellow',
                color: 'black',
                border: "1px solid black",
            },
            icon: "♥️",
        });
    };

    const removeFromFavorites = (movieId) => {
        const updatedFavorites = favorites.filter(m => m.id !== movieId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        toast.success("Película eliminada de favoritos", {
            style: {
                background: 'green',
                color: 'white',
                border: "1px solid black",
            },
            icon: "💔",
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error("useFavorites debe ser usado dentro de un FavoritesProvider");
    }
    return context;
};
