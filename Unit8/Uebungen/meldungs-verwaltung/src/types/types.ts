export type Status = 'offen' | 'aktiv' | 'kritisch' | 'erledigt';
export type Prioritaet = 'niedrig' | 'mittel' | 'hoch';
export type Kategorie = 'fehler' | 'anfrage' | 'aufgabe' | 'sonstiges';

export interface Meldung {
  id: number;
  titel: string;
  beschreibung: string;
  kategorie: Kategorie;
  status: Status;
  prioritaet: Prioritaet;
}
