import { Meldung } from '../types/types';
import StatusBadge from './StatusBadge';

interface MeldungsListeProps {
  meldungen: Meldung[];
  onDelete: (id: number) => void;
  onStatusChange: (id: number) => void;
}

function MeldungsListe({ meldungen, onDelete, onStatusChange }: MeldungsListeProps) {
  return (
    <div className="liste">
      {/* PROBLEM 6: Keine semantische Tabellenstruktur (<table>, <th scope>).
          Die Spaltenkoepfe sind nur visuelle divs ohne Bedeutung fuer Hilfstechnologien. */}
      <div className="liste-header">
        <span>Status</span>
        <span>Titel</span>
        <span>Kategorie</span>
        <span>Priorität</span>
        <span>Aktionen</span>
      </div>

      {meldungen.length === 0 && (
        <div className="liste-leer">Keine Einträge vorhanden.</div>
      )}

      {meldungen.map((meldung) => (
        // PROBLEM 7: Klickbares <div> statt semantischem Element.
        // Kein tabIndex, kein onKeyDown – per Tastatur nicht erreichbar.
        <div
          key={meldung.id}
          className="liste-zeile"
          onClick={() => onStatusChange(meldung.id)}
        >
          {/* PROBLEM 8: StatusBadge zeigt nur einen farbigen Punkt.
              Kein Text, kein aria-label – Status nicht erkennbar ohne Farbe. */}
          <span className="liste-zelle">
            <StatusBadge status={meldung.status} />
          </span>

          <span className="liste-zelle meldung-titel">{meldung.titel}</span>
          <span className="liste-zelle">{meldung.kategorie}</span>
          <span className="liste-zelle">{meldung.prioritaet}</span>

          <span className="liste-zelle liste-aktionen">
            {/* PROBLEM 9: Buttons "X" und "!" haben keinen aussagekraeftigen Text.
                Kein aria-label, kein Kontext – welche Meldung wird geloescht? */}
            <button
              className="btn-aktion"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(meldung.id);
              }}
            >
              X
            </button>
            <button
              className="btn-aktion btn-aktion--warn"
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(meldung.id);
              }}
            >
              !
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default MeldungsListe;
