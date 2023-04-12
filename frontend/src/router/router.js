import {createBrowserRouter, Link} from "react-router-dom";
import RootLayout from "./RootLayout";
import App from "../App";
import {appChildren} from "./appChildren";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <>
            <h1>404</h1>
            <Link to={"/"}>Home</Link>
        </>,
        children: [
            {
                path: "/",
                element: <App/>,
                children: appChildren
            }
        ]

    }

])