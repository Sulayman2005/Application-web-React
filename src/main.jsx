import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.scss'
import App from './App.jsx'
import Propos from "./Pages/Propos/Propos.jsx"
import Logement from "./Pages/Logement/Logement.jsx"
import Error from "./Pages/Error/Error.jsx"
import Root from "./Root.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />, 
        children: [
            { path: "/", element: <App /> },
            { path: "/propos", element: <Propos /> },
            { path: "/logement/:id", element: <Logement /> },
            { path: "/error", element: <Error /> },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
