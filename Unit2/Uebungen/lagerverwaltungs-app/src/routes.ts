export const routes: Record<string, RouteElement> = {
    dashboard: {path: "/", name: "Dashboard", icon: "🏠"},
    articles: {path: "/artikel", name: "Artikel", icon: "🧺"},
    warnings: {path: "/warnungen", name: "Warnungen", icon: "💥"},
    settings: {path: "/einstellungen", name: "Einstellungen", icon: "🛠️"},
}

export interface RouteElement {
    path: string
    name: string
    icon?: string
}