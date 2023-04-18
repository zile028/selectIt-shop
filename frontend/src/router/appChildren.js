import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import {routes} from "./routes";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ActivateAccountPage from "../pages/ActivateAccountPage/ActivateAccountPage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const appChildren = [
    {
        path: routes.HOME.path,
        element: <HomePage/>
    },
    {
        path: routes.SHOP.path,
        element: <ShopPage/>
    },
    {
        path: routes.REGISTER.path,
        element: <RegisterPage/>
    },
    {
        path: routes.ACTIVATE_ACCOUNT.path,
        element: <ActivateAccountPage/>
    },
    {
        path: routes.LOGIN.path,
        element: <LoginPage/>
    }
]
