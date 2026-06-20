# Antworten

## Teil 1 - Methode

Wir wenden einen **Cognitive Walkthrough** an da wir keine echten Nutzer zu verfügung haben und
mit dieser Methode die sicht eines Nutzer einnehmen und zu verstehen versuchen. 	

## Teil 2 - Durchführung

Kontext:

Nutzer der ein neues Support Ticket erfasst 

Ablauf:
Der Nutzer soll ein neues Ticket zu einem Hardware Problem erfassen - kaputtes Headset.
Er startet von der Homepage - Dashboard.
Nach erfolgreicher Erfassung soll er eine Bestätigung sehen.

1. Nutzer öffnet die App (Dashboard)
2. Nutzer navigiert zur Ticketübersicht
3. Nutzer öffnet das Formular für ein neues Ticket
4. Nutzer füllt das Formular aus und speichert
5. Nutzer sieht die Bestätigung und kehrt zurück

Ziele:
* Ablauf durchspielen und Stolpersteine entdecken.
* Den Prozess validieren.

### Durchführung

#### Schritt 1 & 2

> Als Benutzer will ich zum Formular wo ich ein neues Ticket für mein anliegen Erfassen kann. 

Man findet auf der Startseite keinen einfachen Weg ein neues Ticket zu erfassen. 
Als Nutzer Frage ich mich wo ich das tun kann. Ich habe Prominent den "Zur Ticketübersicht" Button.
Den Direktlink zum Formular in der Navigation fällt nicht auf.

Er navigiert auf die "Ticketübersicht". 
Dort findet er zum ersten mal einen Button zum erfassen eines neuen Tickets im Body der Seite.

Der Button hebt sich etwas ab durch den Card-Kontrast aber 
das Grau das für diesen Secondary Button verwendet wird ist zu ähnlich zum Hintergrund - 
kann übersehen werden, hebt sich zu wenig ab.

Die Übersicht könnte ihn von seinem Task ablenken - zu viele irrelevante Informationen. 

#### Schritt 3 & 4

> Als Benutzer ist mir wichtig das ich mein Anliegen ausdrücken kann.
> Ich will es Beschreiben und ihm eine Priorität geben.

Der Benutzer landet auf dem Formular. Es ist das einzige element auf dem Screen.

Das Formular enthält die nötigen Felder Titel / Beschrieb und Priorität um das Anliegen auszudrücken.

Er ist gezwungen alles Auszufällen. Dies ist erst nach einem Submit versuch ersichtlich.
Es gibt keinen Marker für Pflicht oder Optional (Vorsicht: Was für eine Design Philosophie wird verfolgt)

Die Inputfelder für Priorität und Kategorie sind am ende des Formulars. Hatte keine auswirkung auf den Test.
 
#### Schritt 4 & 5

> Als Benutzer will ich eine Bestätigung das mein Ticket erfasst wurde.

Er landet auf dem "Ticket erfasst" Screen. 

Er sieht das Sein ticket Erfasst wurde. Sieht die eingaben. Markiert sich die Ticket-ID.
Die neue Ticket-ID könnte man stärker hervorheben. Geht etwas unter bei den anderen Informationen. 

Navigiert zur Ticketübersicht

Dort sieht er sein neues Ticket nicht da die Tickets nach älte bzw. Ticket-ID sortiert sind

#### Beobachtungen

| # | Stelle in der App | Beobachtung                                                                                                                                    |
|---|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | Dashboard         | Der Nutzer Sucht nach einem Button zum Erfassen des Tickets. Link in der Navigation wird übersehen.                                            |
| 2 | Dashboard         | Umweg über die "Ticketübersicht" um ein Ticket zu erfassen                                                                                     |
| 3 | Ticketübersicht   | Das Grau das für den "Erfassen" Secondary Button verwendet wird ist zu ähnlich zum Hintergrund - kann übersehen werden, hebt sich zu wenig ab. |
| 4 | Ticketübersicht   | Die Übersicht könnte ihn von seinem Task ablenken - zu viele irrelevante Informationen.                                                        |
| 5 | Formular          | Keine hürden beim erfassen des Tickets                                                                                                         |
| 6 | Success Screen    | Er Markiert sich die Ticket-ID. <br/> Die neue Ticket-ID könnte man stärker hervorheben. Geht etwas unter bei den anderen Informationen.       |

## Teil 4 – Ergebnisse auswerten & Teil 5 – Kurzfazit

Der Prozess is im allgemeinen gut strukturiert. 
Die führung zum Formular ist umständlich mit dem Umweg über die "Ticketübersicht"
Button in der Navigation wird leicht übersehen.

**Probleme & Potenzial**

| Priorität   | Bedeutung                                                                                                       |
|-------------|-----------------------------------------------------------------------------------------------------------------|
| **Wichtig** | Weg zum Fromular mit Umweg über die "Ticketübersicht"                                                           |
| **Mittel**  | Button in der Naviagation zum Erstellen wird leicht übersehen, hebt sich zu wenig ab, ist ganz rechts im header |
| **Mittel**  | Button zum Erstellen auf der "Ticketübersicht" hebt sich zu farblcih wenig ab                                   |
| **Gering**  | Dem Nutzer ist die neue Ticket-ID nach dem Erfassen wichtig                                                     |

**Massnahmen**

Als erstes **muss** der Umweg beseitigt werden. 
Auf dem Dashboard sollte Prominent ein "Ticket erstellen" hinzugefügt werden.  
So muss ein Benutzer nicht danach suchen und den Umweg nehmen.

Ausserdem **muss** der Link / Button in der Navigation hervorgehoben werden. 
Visuell mit einer Auffallenden Farbe, Form & Icon.
Auch die Plazierung könne überdenkt werden. Button mittig in der Navigation platzieren.

Weiter wäre es gut die Farben für die Secondary Buttons zu überdenken. 
Das verwendete Grau ist zu ähnlich zum hintergrund und können so übersehen werden 
wenn es nicht genügen Kontrast zwischen den Elementen gibt.

Ein "Nice to Have" wäre das Hervorheben der neuen Ticket-ID 
da diese als Referenz für den Nutzer dient. 



