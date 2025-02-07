import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPAge from "../pages/ErrorPAge";
import Login from "../pages/Login";
import AdminLAyout from "../layout/AdminLAyout";
import ProtectedRoute from "../components/PRotectedRoute";




export const router=createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
        errorElement: <ErrorPAge/>,
        children:[
            {
                index:true,
                element: <Login/>,

            },
            {
                path:"admin",
                element: (
                    <ProtectedRoute>
                        <AdminLAyout/>
                    </ProtectedRoute>
                ),
                children:[

                ]
            }
        ]
    }
])