import MyAccount from "../component/Dashboard/MyAccount";
import {routes} from "./routes";
import AddProduct from "../component/Dashboard/AddProduct";

export const dashboardChildren = [
	{
		path: routes.DASHBOARD.path,
		element: <MyAccount/>
	},
	{
		path: routes.ADD_PRODUCT.path,
		element: <AddProduct/>
	}
]