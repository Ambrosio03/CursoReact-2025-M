import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { FavoritesProvider } from "./context/FAvoritesContext"

const App = () => {
  return (
    <>
      <FavoritesProvider>
        <RouterProvider router={router}/>
      </FavoritesProvider>
    </>
  )
}

export default App