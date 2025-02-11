import {  createContext, useState } from "react";


const AuthContext = createContext();

const url = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false);
    //funciones en mi contexto
    //login

        const login = async (username, password) => {
            try{
            const response = await fetch(`${url}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
                credentials: 'include', // para mantener las cookies se guarden en el servidor
            });
            if(!response.ok) {
                return {succes:false, message:"Usuario o contraseña incorrectos"}
            }
            setIsLogged(true);
            return {succes:true, message:"Sesion inicida correctamente "}
        } catch (error) {
            console.error(error);
        }
    }

    //check auth -> para verificcar si el usuario esta autenticado siempre que monte o renderice el componente

    

    //logout
    //register
}