import {createBrowserRouter} from "react-router-dom";
import RootLayout from "./RootLayout";
import App from "../App";
import {appChildren} from "./appChildren";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <App/>,
                children: appChildren
            }
        ]
    }
    
])