
## 1. Analysieren

Analysieren Sie die bestehende Dashboard-Seite (src/pages/Dashboard.tsx) und beantworten Sie folgende Fragen:

> Welche Informationen werden als Kennzahlen (KPIs) dargestellt?
> 
> Welche Werte können Mitarbeitende auf einen Blick erkennen?

* Anzahl Artikel im System
* Kritische Artikel - anzahl Artikel mit geringer Lagerbestand
* Artikel Kategorien - anzahl Artikel Kategorien

> Wie sind die drei Ebenen des Dashboards aufgebaut?

1. KPIs, 
2. Diagramm - Kennzahlen zu Kategorien
3. Tabelle - Details zu Kritischen Artikeln


## 2. Kennzahlen erklären
> Beschreiben Sie, welche Informationen als Kennzahlen dargestellt werden und warum genau diese Werte gewählt wurden. 
> Überlegen Sie: Welche weiteren Kennzahlen könnten für eine Lagerverwaltung sinnvoll sein?

Bei den KPIs werden Statistik Information, Anzahl Artikel & Kategorien angezeigt zusätzlich zu den Kritischen Artikeln.
Dabei ist die Auswahl der Statistikdaten als Major KPI Fragwürdig. Wie wichtig ist es diese information auf einem Blick zu haben.
Diese sollten in einem Statistik Abschnitt/Seite verfügbar sein. 

Die "Kritische Artikel" ist die Wichtigste KPI und sollte im Fokus stehen.

Das Diagramm gibt Auskunft über die verteilung der Kategorien. Es ist deplaziert und gehört zusammen mit 
den vorherigen genanten KPIs in einen Statistik Abschnitt/Seite. Ist keine "wichtige" Information.

Die Tabelle mit den "Kritischen Waren" gibt Zeigt wo handlungsbedarf besteht und gibt schnell auskunft über die betroffenen Artikel

**Zusätzliche Kennzahlen**
* Potenziell die auflistung der Lagerorte, Anzahl gegenstände pro Lagerort / Sektion - kann zur optimierung genutzt werden.
* Wenn verfügbar:
  * Offene Posten / Bestellungen - pro Tag, Woche, Monat
  * Durchsatz, verarbeitete Bestellungen - pro Tag, Woche, Monat
  * Alter der aktuell ältesten und offenen Bestellung
  * Termine nächste Anlieferungen, Datum - Beschrieb

## 3. Diagramm begründen
> Erklären Sie, warum das Balkendiagramm (Artikel pro Kategorie) in diesem Kontext sinnvoll ist. 
> Welche anderen Diagrammtypen wären denkbar? Wann wären sie besser geeignet?

Es zeig die verteilung der Artikel über die Kategorien an. Gibt auskunft auf den Fokus des Lagers, Lagerbestand.

Im allgemeinen ist das Diagramm weniger Sinnvoll sind Statistiken die nicht so prominent Angezeigt werden müssen.
Siehe auch vorhergehende Antworten.  

Im allgemeinen wäre es möglich das Diagramm Kompakter als Kuchendiagramm abzubilden. 

## 4. Tabelle erklären
> Begründen Sie, warum die Tabelle nur kritische und Warnartikel anzeigt und nicht alle 80 Artikel. 
> Welche Vorteile hat diese Filterung für die Benutzererfahrung?

Die Tabelle mit den "Kritischen Waren" gibt Zeigt wo handlungsbedarf besteht und gibt schnell auskunft über die betroffenen Artikel.

Filter würden helfen die Daten besser aufzubereiten und anzuzeigen z.B. für Beschaffer welche sich auf einzelne Kategorien Fokussieren.

Auch eine filterung für den Status "kritisch" & "warnung" wäre sinnvoll, der Status "warnung" hat nicht die gleiche dringlichkeit wie "kritisch".

Im allgemeinen helfen diverse Filter in Kombination, kritische und relevante Elemente für den Benutzer aufzubereiten. 


## 5. Benutzerfreundlichkeit prüfen
> Untersuchen Sie, ob die Seite benutzerfreundlich aufgebaut ist. Beantworten Sie:
> Sind wichtige Informationen gut sichtbar?

Ja und nein, wichtige elemente wie "Kritische Artikel" fallen einem auf und sind übersichtlich. 
Den nebensächlichen Statistikdaten wie dem "Artikel pro Kategorie" Diagramm wird zu viel gewichtung gegeben, ist zu prominent in der Anzeige.

> Sind kritische Werte klar hervorgehoben?

Ja - es werden Signalfarben verwendet 

> Ist die visuelle Hierarchie nachvollziehbar?

Jein 

Die anzahl KPIs sind begrenzt, klar und übersichtlich an erster Stelle.

Das "Artikel pro Kategorie" Diagramm wirkt deplaziert.

