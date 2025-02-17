import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'
import App from './App.jsx'
import Propos from "./Header/Page/Propos.jsx"
import Carrousel from "./Header/Page/Carrousel/Carrousel.jsx"
import Page from "./Header/Page.jsx"
import Error from "./Header/Page/Error.jsx"
import Root from "./Root.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />, 
        children: [
            { path: "/", element: <App /> },
            { path: "/propos", element: <Propos /> },
            { path: "/carrousel/:id", element: <Carrousel /> },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
