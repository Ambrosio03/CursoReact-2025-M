import { useNavigate } from "react-router-dom"
import isAuthenticated from "../helpers/isAuthenticated";


const Home = () => {

const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('token',"1234");
        navigate("/dashboard");
    }
  return (
    <div className="text-center">
        {!isAuthenticated() ?(
            <section>
            <h1 className="text.3xl font-bold mb-8">Bienvenido a Ejercicio 1 de React Router Dom v7</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold py-2 px-4"
            onClick={handleLogin}>
                login
            </button>
        </section>
        )
        : (
            <section>
            <h1 className="text.3xl font-bold mb-8">Bienvenido</h1>
            </section>
        )
        }
    </div>
  )
}

export default Home