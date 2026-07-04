import { useState } from 'react';
import { Meldung, Status, Prioritaet, Kategorie } from '../types/types';

interface MeldungFormularProps {
  onSave: (meldung: Omit<Meldung, 'id'>) => void;
  onCancel: () => void;
}

function MeldungFormular({ onSave, onCancel }: MeldungFormularProps) {
  const [titel, setTitel] = useState('');
  const [beschreibung, setBeschreibung] = useState('');
  const [kategorie, setKategorie] = useState<Kategorie>('aufgabe');
  const [status, setStatus] = useState<Status>('offen');
  const [prioritaet, setPrioritaet] = useState<Prioritaet>('mittel');

  function handleSubmit() {
    if (!titel.trim()) return;
    onSave({ titel, beschreibung, kategorie, status, prioritaet });
    setTitel('');
    setBeschreibung('');
  }

  return (
    <div className="formular">
      {/* PROBLEM 1: Kein <label> fuer dieses Feld – nur ein Placeholder.
          Screenreader und Tastaturnutzer erhalten keinen Kontext. */}
      <div className="form-group">
        <input
          type="text"
          placeholder="Titel eingeben..."
          value={titel}
          onChange={(e) => setTitel(e.target.value)}
          className="form-input"
        />
      </div>

      {/* PROBLEM 2: Das Label "Feld 2:" ist nicht aussagekraeftig und
          nicht per htmlFor mit dem Textarea verbunden. */}
      <div className="form-group">
        <label className="form-label">Feld 2:</label>
        <textarea
          placeholder="Beschreibung..."
          value={beschreibung}
          onChange={(e) => setBeschreibung(e.target.value)}
          className="form-textarea"
          rows={3}
        />
      </div>

      {/* PROBLEM 3: Kein Label fuer die Kategorie-Auswahl. */}
      <div className="form-group">
        <select
          value={kategorie}
          onChange={(e) => setKategorie(e.target.value as Kategorie)}
          className="form-select"
        >
          <option value="fehler">Fehler</option>
          <option value="anfrage">Anfrage</option>
          <option value="aufgabe">Aufgabe</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      {/* PROBLEM 4: Das Label "Status:" steht visuell ueber dem Prioritaet-Feld,
          nicht ueber dem Status-Feld. Beide Labels fehlt htmlFor.
          Das zweite Select hat gar kein Label. */}
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Status:</label>
          <select
            value={prioritaet}
            onChange={(e) => setPrioritaet(e.target.value as Prioritaet)}
            className="form-select"
          >
            <option value="niedrig">Niedrig</option>
            <option value="mittel">Mittel</option>
            <option value="hoch">Hoch</option>
          </select>
        </div>
        <div className="form-group">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="form-select"
          >
            <option value="offen">Offen</option>
            <option value="aktiv">Aktiv</option>
            <option value="kritisch">Kritisch</option>
            <option value="erledigt">Erledigt</option>
          </select>
        </div>
      </div>

      {/* PROBLEM 5: Buttons "OK" und "Weiter" sind unklar beschriftet.
          Welche Aktion wird ausgefuehrt? Was passiert bei "Weiter"? */}
      <div className="form-buttons">
        <button className="btn-primary" onClick={handleSubmit}>
          OK
        </button>
        <button className="btn-secondary" onClick={onCancel}>
          Weiter
        </button>
      </div>
    </div>
  );
}

export default MeldungFormular;
