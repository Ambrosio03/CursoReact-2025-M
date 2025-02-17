import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import Search from "../pages/Search";
import Reviews from "../pages/Reviews";
import Favorites from "../pages/Favorites";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                element: <Home/>,

            },
            {
                path:"movies",
                element: <MovieList/>,
            },
            {
                path:"movies/:id",
                element: <MovieDetail/>,
            },
            {
                path:"search",
                element: <Search/>
            },
            {
                path:"reviews",
                element:<Reviews/>
            },
            {
                path:"favorites",
                element:<Favorites/>
            }
        ]
    }
])