export const routes = {
    HOME: {path: "/", name: "Home"},


    PRODUCT_DETAIL: {
        path: "/product/:id",
        realPath: (id) => "/product/" + id
    },

    ACTIVATE_ACCOUNT: {path: "/activate/:id"},
    LOGIN: {path: "/login", name: "Login"},

    LIVING_ROOM: {
        path: "",
        name: "living room",
        subitem: [{
            path: "/shop",
            name: "shop 1",

        }
        ]
    },
    BED_ROOM: {
        path: "",
        name: "bed room",
        subitem: [{
            path: "/bedroom/:id",
            name: "shop 2",
            realPath: (id) => "/category/" + id
        }
        ]
    },
    SOFAS: {path: "/sofas", name: "sofas"},
    LATEST_PRODUCT: {path: "/latestproduct", name: "latest product"},
    BEST_SELER: {
        path: "",
        name: "best seler",
        subitem: [{
            path: "/product/:id",
            name: "product detail",
            realPath: (id) => "/product/" + id
        },
            {
                path: "cart",
                name: "cart",
            },
            {
                path: "checkout",
                name: "checkout",
            }
        ]
    },
    SHOP: {path: "/shop", name: "Shop"},

    REGISTER: {
        path: "/register",
        name: "Register",
    },
    LATEST_NEWS: {
        path: "/news",
        name: "Latest news",
        subitem: [{
            path: "/new",
            name: "Subrout"
        },
            {
                path: "/new1",
                name: "Subrout1"
            }
        ]
    },
    CONTACT: {path: "/contact", name: "Contact us"},
    CART: {path: "/cart", name: "Cart"},
    CATEGORY_PRODUCTS: {
        path: "/shop/:category",
        realPath: (category) => "/shop/" + category
    },
    //DASHBOARD ROUTES
    DASHBOARD: {path: "/dashboard"}
}

export const mainNavbarItem = [
    routes.LIVING_ROOM, routes.BED_ROOM,
    routes.SOFAS, routes.LATEST_PRODUCT, routes.BEST_SELER, routes.LATEST_NEWS, routes.CONTACT,
]