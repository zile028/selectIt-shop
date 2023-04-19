import MyAccount from "../component/Dashboard/MyAccount";
import {routes} from "./routes";

export const dashboardChildren = [
    {
        path: routes.DASHBOARD.path,
        element: <MyAccount/>
    }
]