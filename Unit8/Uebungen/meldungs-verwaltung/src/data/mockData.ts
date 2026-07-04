import { Meldung } from '../types/types';

export const initialMeldungen: Meldung[] = [
  {
    id: 1,
    titel: 'Login-Seite überarbeiten',
    beschreibung: 'Der Login-Button ist auf mobilen Geräten schwer zu finden.',
    kategorie: 'aufgabe',
    status: 'offen',
    prioritaet: 'mittel',
  },
  {
    id: 2,
    titel: 'Fehler beim Dateiupload',
    beschreibung: 'Upload schlägt bei Dateien über 5 MB fehl.',
    kategorie: 'fehler',
    status: 'kritisch',
    prioritaet: 'hoch',
  },
  {
    id: 3,
    titel: 'Neues Dashboard erstellen',
    beschreibung: 'Ein Übersichts-Dashboard für Administratoren wird benötigt.',
    kategorie: 'anfrage',
    status: 'aktiv',
    prioritaet: 'mittel',
  },
  {
    id: 4,
    titel: 'Passwort-Reset testen',
    beschreibung: 'Die Funktion zum Zurücksetzen des Passworts vollständig testen.',
    kategorie: 'aufgabe',
    status: 'erledigt',
    prioritaet: 'niedrig',
  },
  {
    id: 5,
    titel: 'E-Mail-Benachrichtigungen',
    beschreibung: 'Automatische Benachrichtigungen bei Statusänderungen einrichten.',
    kategorie: 'anfrage',
    status: 'offen',
    prioritaet: 'mittel',
  },
];
