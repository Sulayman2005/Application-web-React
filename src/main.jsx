import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.scss'
import App from './App.jsx'
import Logement from "./Components/Logement/Logement.jsx"
import Propos from "./Header/Page/Propos.jsx"
import Page from "./Header/Page.jsx"
import Error from "./Header/Page/Error.jsx"

const root = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path: "/propos",
        element: <Propos />,
        errorElement: <Error />
    },
    {
        path: "/logement",
        element: <Logement />,
        errorElement: <Error />
    },
    {
        path: "/page",
        element: <Page />,
        errorElement: <Error />
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={root} />
    </React.StrictMode>
)
