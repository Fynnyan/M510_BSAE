# Antworten

## Teil 1 – Beobachtungen auswerten & Teil 2 – Probleme priorisieren

**Navigation**

Navigation zum "Termin Buchen" ist unklar und mit umwegen verbunden.
Es benötigt mehere Schritte um, zum Formular zu kommen.  
Links / Aktionen zum Navigieren sind nicht klar ersichtlich als einfache Textlinks dargestellt. 

**Eingabe**

Pflicht und optionale Felder bei dem Formular sind nicht klar gekennzeichnet.

**Sprache / Texte**

Im Formular wird das Wort "Buchen" teilweise nicht verstanden, Benutzer sind "Speichern" gewont.

Im Formular ist teilweise nicht klar wie das Datum/Uhrzeit verstanden werden soll.

Bei der "Termin Bestätigung" können die Texte angepasst werden "Termin gespeichert" ist knapp.
Anpassen des Titels, ergänzen mit einer erklärung, Subtitel. 

In "Termin Bestätigung", Formatierung der Termindaten kann besser visualisiert werden.

**Prioritäten**

| Priorität    | Bedeutung                                                                                                                                |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **Kritisch** | Umweg zum Formular - kein einfacher Weg zum Formular "Termin Buchen".                                                                    |
| **Kritisch** | Aktionen / Links sind nicht klar ersichtlich. Enfache Textlinks zur Naviagtion werden übersehen.<br/> zum Formular, zurück zur übersicht |
| **Wichitg**  | Fehlender Direkt link zum "Termin Buchen" in der Navigation                                                                              |
| **Mittel**   | Pflicht / Optionale Felder sind nicht ersichtlich                                                                                        |
| **Gering**   | Im Formular wird das Datum teilwsie missverstanden                                                                                       |
| **Gering**   | Bestätigung Screen Titel "gespeichert" passt textlich nicht zum Kontext Buchen                                                           |
| **Gering**   | Bestätigung Screen - Texte können besser visualisiert werden, Informationen gehen verloren, Hintergrund und Text Farblich gleich.        |

## Teil 4 – UX-Validierungsbericht erstellen

### 1. Ziel

Wir haben das Verhalten der Benutzer im bezug zum Erfassen und Finden von ihren Terminen analysiert.
Dabei mit Fokus auf die nötigen Schritte zum Finden und erfassen eines neuen Terms.  

### 2. Grundlage

Auf der Grundlage des moderierten Usability-Tests und eines Kognitiven Walkthroughs 
haben wir die folgenden Erkenntnisse und Probleme entdeckt.

### 3. Erkenntnisse / Probleme

Kritische Punkte sind:
* Unklare Navigation 
  * Es gibt einen Umweg zum Formular - kein einfacher Weg zum Formular "Termin Buchen". Kein Direkt-Link in der NAviagtion oder dem Dashboard.
  * Aktionen / Links sind nicht klar ersichtlich. Einfache Textlinks werden zur Navigation verwendet. Diese werden nicht als Aktionen oder "Buttons" gesehen

Mittlere Punkte - Dinge die Verwirren oder die Nutzung erweren sind:

* Formular 
  * Pflicht / Optionale Felder sind nicht ersichtlich. So ist dem Benutzer nicht klar was ausgefüllt werden muss und was optional ist.

Geringe Punkte - kleinere Stolpersteine oder textliche unklarheiten sind:

* Im Formular:
  * Das Datum/Uhrzeit kann missverstanden werden, kontext ist nicht klar. Sind es Verfügbare termine oder ein Wunschtermin für den Nutzer.
* Bestätigung
  * Titel "gespeichert" passt textlich nicht zum Kontext "Buchen". Sollte für die Einheitliochkeit angepasst werden.
  * Texte können besser visualisiert werden, Informationen gehen verloren, Hinterland und Text Farblich gleich. Ticket-ID wichtig für den Nutzer.

### 4. Priorisierung
   
Die Kritischen Punkte - unklare, umständliche Navigation und aktionen müssen als erstes angepasst werden.
Diese stiften für verwirrung und erschweren die Erfassung. Kosten Zeit.

### 5. Anpassungen
Neuer Button "Termin Buchen" Zentral in der Navigation und auf der Übersicht eingeführt. 
Verwendung vün Grün als prominente Farbe mit abweichung vom Primimary Button - auffallendes Call-To-Action. 
Damit kann ein Benutzer sofort ein Termin Buchen und muss nicht nach danach suchen.

Überarbeitung der Textlink zu Buttonlink.
Ticket Übersicht verwendet den gleichen Button zum "Ticket neu buchen" - Einheitliches Design für die gleiche Aktion.
Verschieben des Buttons vom Ende der Liste zum Anfang, prominent Platziert - wird schneller gefunden und Aktion ist nicht am Ende der Liste versteckt.

Textanpassungen um die Benutzerführung zu verbessern.
Formular - Datum/Zeit Element gruppe - hinweis für den Benutzer
Bestätigung - Titelanpassung "Termin erfolgreich gebucht" - Konsistente Bezeichnung
Bestätigung - Textvisualisierung verbessert, kein grauer Hintergrund. Ticket-ID Hervorgehoben. 
Damit können die Informationen besser erfasst werden. 

### 6. Erwartete Verbesserung

Weniger Aufwand um ein Termin zu Buchen. Mit einem Klick zum Formular. Prominente Plazierung der Aktion/Buttons
Einheiltiches Design für die Aktionen verbessern die führung und reduzieren die kognitive Last.
Textliche anpassunge eliminieren unsicherheiten und einheitliche Benennung schafft sicherheit.
