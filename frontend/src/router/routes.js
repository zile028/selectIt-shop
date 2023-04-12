export const routes = {
    HOME: {path: "/", name: "Home"},
    SHOP: {path: "/shop", name: "Shop"},
    CONTACT: {path: "/contact", name: "Contact"},
    PRODUCT_DETAIL: {
        path: "/product/:id",
        realPath: (id) => "/product/" + id
    },
    REGISTER: {path: "/register", name: "Register"},
    ACTIVATE_ACCOUNT: {path: "/activate/:id"},
    LOGIN: {path: "/login", name: "Login"}
}

export const mainNavbarItem = [routes.HOME, routes.SHOP, routes.CONTACT, routes.REGISTER, routes.LOGIN]