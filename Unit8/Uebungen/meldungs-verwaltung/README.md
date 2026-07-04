# Übung / Simulationsprüfung: React-Anwendung barriereärmer machen

## Ausgangslage

Sie erhalten eine kleine bestehende React-Anwendung: eine interne **Meldungsverwaltung**. Die Anwendung ist grundsätzlich lauffähig, weist jedoch mehrere Schwächen in Bezug auf Barrierefreiheit, Benutzerführung und Verständlichkeit auf.

In der aktuellen Version bestehen unter anderem folgende Probleme:

- Eingabefelder ohne korrektes Label oder mit unklarer Beschriftung
- Schwach sichtbarer oder fehlender Fokus bei interaktiven Elementen
- Statusanzeigen werden ausschliesslich über Farben vermittelt
- Buttons sind unklar beschriftet oder semantisch nicht korrekt umgesetzt
- Tastaturbedienung ist teilweise erschwert oder gar nicht möglich
- Rückmeldungen nach Aktionen sind unklar und nicht barrierefrei

---

## Projekt starten

```bash
npm install
npm run dev
```

Die Anwendung ist danach unter [http://localhost:5173](http://localhost:5173) erreichbar.

---

## Ziel der Aufgabe

Ziel ist es, die bestehende React-Anwendung so zu überarbeiten, dass sie **barriereärmer**, **verständlicher** und **semantisch sauberer** wird.

Sie müssen die Anwendung **nicht komplett neu bauen** – analysieren Sie den vorhandenen Code und verbessern Sie ihn gezielt.

---

## Teil 1 – Accessibility-Probleme erkennen und beheben

Analysieren Sie die Anwendung und beheben Sie zentrale Probleme im Bereich Barrierefreiheit.

Achten Sie insbesondere auf:

- Fehlende oder schlechte Labels bei Formularfeldern
- Fokus-Sichtbarkeit (Tastaturnavigation muss erkennbar sein)
- Tastaturbedienbarkeit aller interaktiven Elemente
- Verständliche und aussagekräftige interaktive Elemente
- Sinnvolle und korrekte semantische HTML-Elemente

**Hinweis:** Untersuchen Sie die Datei `src/index.css` – dort gibt es eine CSS-Regel, die direkte Auswirkungen auf die Tastaturnavigation hat.

---

## Teil 2 – Semantisch bessere Komponenten einsetzen

Verbessern Sie die Anwendung durch den Einsatz semantisch geeigneter HTML-Elemente.

Ziel:

- Interaktive Elemente sollen technisch korrekt und fachlich passend umgesetzt sein
- Die Oberfläche soll für Hilfstechnologien (z. B. Screenreader) verständlicher werden
- Klickbare Elemente sollen auch per Tastatur erreichbar und aktivierbar sein

**Hinweis:** Suchen Sie nach Stellen, an denen `<div>` mit `onClick` verwendet wird, obwohl ein `<button>` oder ein anderes semantisches Element besser geeignet wäre.

---

## Teil 3 – Status und Rückmeldungen verbessern

Überarbeiten Sie die Statusdarstellung und Rückmeldungen in der Anwendung.

Dabei gilt:

- Status darf **nicht ausschliesslich** über Farbe vermittelt werden
- Rückmeldungen nach Aktionen (z. B. Speichern) sollen für alle Nutzer verständlich und eindeutig sein
- Änderungen sollen auch für Screenreader angekündigt werden (ARIA Live Regions)

**Hinweis:** Schauen Sie sich die Komponente `StatusBadge.tsx` und die Rückmeldung nach dem Speichern in `MeldungsVerwaltung.tsx` an.

---

## Teil 4 – UI und Benutzerführung klarer machen

Verbessern Sie die Verständlichkeit der Oberfläche.

Achten Sie auf:

- Klare Beschriftungen für alle Aktionen (keine generischen Texte wie „OK", „X", „!")
- Nachvollziehbare Struktur mit korrekter Überschriftenhierarchie
- Bessere Orientierung für Nutzer, z. B. durch Landmark-Elemente (`<main>`, `<header>`)
- Konsistente und verständliche Formularbeschriftungen

---

## Anforderungen

Ihre Lösung soll mindestens folgende Punkte erfüllen:

- [ ] Alle Eingabefelder haben verständliche, korrekt verknüpfte Labels (`htmlFor` / `id`)
- [ ] Alle interaktiven Elemente sind mit der Tastatur erreichbar und aktivierbar
- [ ] Der Fokus ist bei der Tastaturnavigation sichtbar
- [ ] Statusanzeigen sind nicht ausschliesslich über Farbe erkennbar
- [ ] Alle Buttons haben einen aussagekräftigen, kontextbezogenen Text
- [ ] Klickbare `<div>`-Elemente sind durch semantisch korrekte Elemente ersetzt
- [ ] Rückmeldungen nach Aktionen sind klar und für Screenreader zugänglich
- [ ] Die Überschriftenhierarchie ist korrekt (z. B. `<h1>` als erste Überschrift)

---

## Erwartetes Ergebnis

Am Ende soll eine überarbeitete React-Anwendung vorliegen, in der:

- Zentrale Accessibility-Probleme behoben wurden
- Semantisch geeignetere Elemente eingesetzt werden
- Die Tastaturbedienung vollständig funktioniert und sichtbar ist
- Statusanzeigen auch ohne Farbe verständlich sind
- Rückmeldungen für Nutzer klar und zugänglich sind
- Die Benutzerführung nachvollziehbarer geworden ist

---

## Bekannte Probleme in der Ausgangsversion

Die folgenden Probleme sind **absichtlich** in der Anwendung enthalten. Versuchen Sie, alle oder möglichst viele davon zu beheben:

| # | Datei | Problem |
|---|-------|---------|
| 1 | `MeldungFormular.tsx` | Titelfeld hat kein `<label>`, nur einen Placeholder |
| 2 | `MeldungFormular.tsx` | Label „Feld 2:" ist nicht aussagekräftig und nicht per `htmlFor` verbunden |
| 3 | `MeldungFormular.tsx` | Kategorie-Select hat kein Label |
| 4 | `MeldungFormular.tsx` | Label „Status:" steht visuell über dem falschen Feld (Priorität), kein `htmlFor` |
| 5 | `MeldungFormular.tsx` | Buttons sind mit „OK" und „Weiter" unklar beschriftet |
| 6 | `MeldungsListe.tsx` | Keine semantische Tabellenstruktur (`<table>`, `<th scope>`) |
| 7 | `MeldungsListe.tsx` | Listenzeilen sind klickbare `<div>`-Elemente ohne Tastatursupport |
| 8 | `StatusBadge.tsx` | Status wird ausschliesslich über Farbe kommuniziert (kein Text, kein `aria-label`) |
| 9 | `MeldungsListe.tsx` | Aktions-Buttons „X" und „!" haben keinen aussagekräftigen Text, kein `aria-label` |
| 10 | `MeldungsVerwaltung.tsx` | Rückmeldung nach dem Speichern ist vage („OK") und nicht für Screenreader zugänglich |
| 11 | `MeldungsVerwaltung.tsx` | `<h3>` als einzige Überschrift – falsche Hierarchie, kein `<h1>` davor |
| 12 | `MeldungsVerwaltung.tsx` | „Hier klicken"-Button ist ein `<div>`, nicht per Tastatur erreichbar |
| 13 | `MeldungsVerwaltung.tsx` | Kein `<main>`-Landmark, kein `<header>`-Landmark |
| 14 | `index.css` | `outline: none` für alle interaktiven Elemente – Fokus komplett unsichtbar |

---

## Hinweise

- Sie müssen die Anwendung nicht komplett neu bauen – überarbeiten Sie gezielt
- Konzentrieren Sie sich auf die wichtigsten und wirkungsvollsten Verbesserungen
- Arbeiten Sie strukturiert und nachvollziehbar
- Verbesserungen sollen fachlich begründet sein und nicht nur optisch wirken
- Denken Sie an Barrierefreiheit, Usability und Verständlichkeit

---

## Projektstruktur

```
src/
├── components/
│   ├── MeldungFormular.tsx   – Formular zum Erstellen neuer Meldungen
│   ├── MeldungsListe.tsx     – Liste aller vorhandenen Meldungen
│   └── StatusBadge.tsx       – Statusanzeige (aktuell: nur farbiger Punkt)
├── data/
│   └── mockData.ts           – Beispieldaten
├── pages/
│   └── MeldungsVerwaltung.tsx – Hauptseite der Anwendung
├── types/
│   └── types.ts              – TypeScript-Typen
├── App.tsx
├── index.css                 – Globale Styles (hier gibt es eine kritische Regel!)
└── main.tsx
```

---

## Ziel der Übung

Mit dieser Aufgabe zeigen Sie, dass Sie eine bestehende React-Anwendung analysieren und gezielt verbessern können – insbesondere in den Bereichen:

- **Accessibility** (Barrierefreiheit)
- **Semantische UI-Umsetzung**
- **Benutzerführung und Verständlichkeit**
- **Status- und Rückmeldungsdesign**
- **Nutzerfreundliche und zugängliche Oberflächen**
