export const routes: Record<RouteKeys, Route> = {
    login: {
        path: "/",
        name: "Login",
    },
    dashboard: {
        path: "/dashboard",
        name: "Dashboard"
    },
    tickets: {
        path: "/tickets",
        name: "Tickets"
    },
    newTicket: {
        path: "/tickets/new",
        name: "Neues Ticket Erfassen"
    },
    settings: {
        path: "/einstellungen",
        name: "Einstellungen"
    },
}

export interface Route {
    path: string
    name: string
}

type RouteKeys = "login" | "dashboard" | "tickets" | "newTicket" | "settings"
