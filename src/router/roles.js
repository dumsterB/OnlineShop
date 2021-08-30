const roles = {
    Doctor: {
        routes: [ "Products", "Home", "Order", ],
    }, // admin

    Admin: {
        routes: ["Products","Home", ],
    }, // moderator

    User: {
        routes: ["Home",],
    }, // user
}

export default roles
