// proteccion de rutas atraves de un componente usando la funcion isAuthenticated()

import { createBrowserRouter, Navigate } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import DashBoard from "../pages/DashBoard";
import RootLayout from "../layout/RootLayout";
import isAuthenticated from "../helpers/isAuthenticated";


const ProtectedRoute = ({ children }) => {
    //condicion de autentificacion
    if(!isAuthenticated()){
        return <Navigate to="/" replace={true} />
    }
    return children;
}

export const router =createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index:true,
                element: <Home/> //es la ruta por defecto
            },
            {
                path: "profile",
                element: (
                <ProtectedRoute>
                    <Profile/>
                </ProtectedRoute>),
            },
            {
                path: "dashboard",
                element:( 
                <ProtectedRoute>
                    <DashBoard/>
                </ProtectedRoute>),
            }
        ]
    }
])