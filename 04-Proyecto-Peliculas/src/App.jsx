import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { FavoritesProvider } from "./context/FAvoritesContext"
import { ReseñasProvider } from "./context/reseñasContext"
import { Toaster } from "sonner"


const App = () => {
  return (
    <>
      <FavoritesProvider>
        <ReseñasProvider>
          <Toaster position="bottom-right" duration={2000} />
          <RouterProvider router={router}/>
        </ReseñasProvider>
      </FavoritesProvider>

    </>
  )
}

export default App