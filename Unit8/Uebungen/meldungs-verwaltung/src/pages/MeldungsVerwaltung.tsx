import { useState } from 'react';
import { Meldung } from '../types/types';
import { initialMeldungen } from '../data/mockData';
import MeldungFormular from '../components/MeldungFormular';
import MeldungsListe from '../components/MeldungsListe';

const statusReihenfolge: Meldung['status'][] = ['offen', 'aktiv', 'kritisch', 'erledigt'];

function MeldungsVerwaltung() {
  const [meldungen, setMeldungen] = useState<Meldung[]>(initialMeldungen);
  const [formularOffen, setFormularOffen] = useState(false);
  const [gespeichert, setGespeichert] = useState(false);

  function handleSave(data: Omit<Meldung, 'id'>) {
    const newId = Math.max(...meldungen.map((m) => m.id)) + 1;
    setMeldungen([...meldungen, { ...data, id: newId }]);
    setFormularOffen(false);
    setGespeichert(true);
    // PROBLEM 10: Rueckmeldung verschwindet nach 2 Sekunden ohne klares Feedback.
    // Es gibt keine Ankuendigung fuer Screenreader (kein aria-live).
    setTimeout(() => setGespeichert(false), 2000);
  }

  function handleDelete(id: number) {
    setMeldungen(meldungen.filter((m) => m.id !== id));
  }

  function handleStatusChange(id: number) {
    setMeldungen(
      meldungen.map((m) => {
        if (m.id !== id) return m;
        const idx = statusReihenfolge.indexOf(m.status);
        const next = statusReihenfolge[(idx + 1) % statusReihenfolge.length];
        return { ...m, status: next };
      })
    );
  }

  return (
    <div className="page">
      {/* PROBLEM 11: <h3> als einzige und erste Ueberschrift – falsche Hierarchie.
          Es gibt weder <h1> noch <h2> davor. Kein <header>-Landmark. */}
      <h3 className="page-title">Interne Verwaltung</h3>

      <div className="page-toolbar">
        {/* PROBLEM 12: Klickbares <div> statt <button>.
            Nicht per Tastatur erreichbar, kein role="button", kein tabIndex. */}
        <div
          className="btn-neu"
          onClick={() => setFormularOffen(!formularOffen)}
        >
          Hier klicken
        </div>

        {/* PROBLEM 13: Rueckmeldung nach dem Speichern ist vage ("OK"),
            sehr klein, nur gruen gefaerbt und nicht fuer Screenreader angekuendigt. */}
        {gespeichert && (
          <span style={{ color: 'green', fontSize: '12px', marginLeft: '10px' }}>
            OK
          </span>
        )}
      </div>

      {formularOffen && (
        <MeldungFormular
          onSave={handleSave}
          onCancel={() => setFormularOffen(false)}
        />
      )}

      <MeldungsListe
        meldungen={meldungen}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default MeldungsVerwaltung;
