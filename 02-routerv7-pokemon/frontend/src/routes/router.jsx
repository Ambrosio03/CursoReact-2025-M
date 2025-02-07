//IMPORTACIONES 

import { createBrowserRouter } from "react-router-dom";
import RootLayaut from "../layouts/RootLayaut";
import ErrorPage from "../pages/ErrorPage";
import { ROUTES } from "./paths";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import FavoritesPage from "../pages/FavoritesPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage";
import AboutPage from "../pages/AboutPage ";


export const router = createBrowserRouter([
    {
        element: <RootLayaut />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                path: ROUTES.SEARCH,
                element: <SearchPage />,
            },
            {
                path: ROUTES.FAVORITES,
                element: <FavoritesPage />,
            },
            {
                path: ROUTES.POKEMONS_DETAIL,
                element: <PokemonDetailsPage />,
                errorElement: <ErrorPage/>,
                loader: async ({params}) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                    if(!response.ok){
                        throw new Error("Pokemon no encontrado")
                    }
                    return response.json();
                }
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage />,
            }
            
        ],
    }
]);