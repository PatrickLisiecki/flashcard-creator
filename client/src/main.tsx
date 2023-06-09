import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Deck from "./Deck";

//Whenever a user accesses the slash URL, it will display our React App
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/decks/:deckId",
        element: <Deck />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
