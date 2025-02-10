import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { FavoritesProvider } from "./context/FAvoritesContext"
import { ReseñasProvider } from "./context/reseñasContext"

const App = () => {
  return (
    <>
      <FavoritesProvider>
        <ReseñasProvider>
            <RouterProvider router={router}/>
        </ReseñasProvider>
      </FavoritesProvider>
    </>
  )
}

export default App