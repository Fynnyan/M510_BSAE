import {produkte} from './data/mockData'
import {DataTable} from "./component/DataTable.tsx";

export default function App() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#1565c0' }}>Lagerverwaltung</h1>
        <p style={{ color: '#666', marginTop: '0.25rem' }}>
          {produkte.length} Produkte geladen · Übung: Tabelle mit Paginierung
        </p>
      </header>

      <main>
          <DataTable products={produkte}/>
      </main>
    </div>
  )
}
