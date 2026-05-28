import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Articles from './pages/Articles'
import Warnings from './pages/Warnings'
import Settings from './pages/Settings'
import './App.css'
import {routes} from "./routes.ts";

// Hauptkomponente – definiert das Layout und alle Routen
function App(): React.ReactElement {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar wird auf jeder Seite angezeigt */}
        <Sidebar />

        {/* Hauptinhalt – wechselt je nach aktiver Route */}
        <main className="main-content">
          <Routes>
            <Route path={routes.dashboard.path} element={<Dashboard />} />
            <Route path={routes.articles.path} element={<Articles />} />
            <Route path={routes.warnings.path} element={<Warnings />} />
            <Route path={routes.settings.path} element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
