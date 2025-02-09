import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.scss'
import App from './App.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Logement from './Components/Logement/Logement.jsx'
import Propos from "./Components/A propos/Propos.jsx"
import Page from "../src/Components/Page/Page.jsx"
import Error from "../src/Components/Error/Error.jsx"

const root = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path: "/navbar",
        element: <Navbar />,
        errorElement: <Error />
    },
    {
        path: "/banner",
        element: <Banner />,
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
