import React from 'react'
import { NavLink } from 'react-router-dom'
import {RouteElement, routes} from "../routes.ts";

// Sidebar-Navigation – wird auf allen Seiten angezeigt
function Sidebar(): React.ReactElement {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-icon">📦</span>
        <span className="sidebar-title">Lagerverwaltung</span>
      </div>

      <nav>
        <ul className="nav-menu">
            {Object.keys(routes).map(key => {
                const entry: RouteElement = routes[key]
                return <li className="nav-item" key={key}>
                    <NavLink
                        to={entry.path}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                        {entry.icon && <span className="nav-icon">{entry.icon}</span>}
                        {entry.name}
                    </NavLink>
                </li>
            })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
