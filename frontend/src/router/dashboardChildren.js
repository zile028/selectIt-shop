import MyAccount from "../component/Dashboard/MyAccount";
import {routes} from "./routes";
import AddProduct from "../component/Dashboard/AddProduct";
import MyOrders from "../component/Dashboard/MyOrders";

export const dashboardChildren = [
	{
		path: routes.DASHBOARD.path,
		element: <MyAccount/>
	},
	{
		path: routes.ADD_PRODUCT.path,
		element: <AddProduct/>
	},
	{
		path: routes.ORDERS.path,
		element: <MyOrders />
	}
]