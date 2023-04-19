import {createBrowserRouter, Navigate} from "react-router-dom";
import RootLayout from "./RootLayout";
import App from "../App";
import {appChildren} from "./appChildren";
import {routes} from "./routes";
import Dashboard from "../pages/Dashboard/Dashboard";
import {dashboardChildren} from "./dashboardChildren";
import {AuthUtils} from "../utils/authUtils";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <App/>,
                children: appChildren
            },
            {
                path: routes.DASHBOARD.path,
                element: <DashboardProtect><Dashboard/></DashboardProtect>,
                children: dashboardChildren
            },

        ]
    }
])

function DashboardProtect({children}) {
    if (AuthUtils.isLogged()) {
        return children
    }
    return <Navigate to={routes.LOGIN.path}/>
}