# Systemzustände gestalten · kurzer Wegweiser

## Änderung

Drei direkte Verweise statt einer zweiten Sammlung von Zustandsregeln: führende Seite «Laden, leer und Fehler», Formularabschnitt «Ergebnis unbekannt» und «Tabellen und Listen» für den Status einzelner Einträge. Keine zusätzliche Studie oder Layoutvorgabe. Minimaler Renderer nutzt die bestehende Inhaltsdarstellung und legt nur den historischen Stand in ein natives Details-Element; alle Texte kommen aus dem CMS-Release.

Die bisherigen drei CMS-Blöcke bleiben unverändert im Release (Empty-Quelle, Do und Don't). Ihre Unterscheidung von Erstleere, Nulltreffern und Ladefehlern samt Auswegen ist in der veröffentlichten führenden Seite bereits explizit vorhanden (`states-choice`, `states-rules`). Empfehlung an Root: Eintrag aus Navigation nehmen, alte URL erhalten; hier keine Navigationsänderung.

## Tatsächliche Checks

- Öffentliche Ausgangsseite zuerst mit BrowserOS neo gelesen und als Snapshot geprüft: Empty-Verweis und zwei kurze Hinweise, keine eigenständige Studie.
- Vier veröffentlichte CMS-Seiten mit `push:false` und `default_transaction_read_only=on` gelesen. Ausgangsstand `shadcn-systemzustaende`: `2026-11-17T22:33:55.422Z`.
- Formularziel `state-unknown` vorhanden; Anker folgt der vorhandenen Funktion `blockAnchor`: `abschnitt-ergebnis-unbekannt`. Tabellenziel ist die vorhandene Seite; zum Lesezeitpunkt kein eigener Zeilenstatus-Abschnitt vorhanden, deshalb kein erfundener Detailanker.
- Alle drei Originalblöcke gegen eingefrorenen Snapshot und Release-Endabschnitt per Deep-Equal verglichen (IDs/Nullfelder normalisiert): gleich. `expectedUpdatedAt` und sieben Release-Blöcke geprüft.
- `npm run typecheck` nach Korrektur des eigenen Renderers ausgeführt. Keine Fehlermeldung für die eigenen Dateien; Gesamtprüfung scheitert an bestehendem `demo: null`-Typfehler in `src/app/(docs)/systems/[system]/components/[component]/page.tsx:55`.
- Kein eigener CMS-Schreibzugriff, keine eigene Registry-/Routingänderung. Root hat den Stand veröffentlicht, den Renderer registriert und den Navigationseintrag verborgen; alte URL bleibt erreichbar.

## Browser-QA nach Veröffentlichung

- BrowserOS neo: Screenshots bei tatsächlichen 1440×1000 und 390×844 per CDP aufgenommen und visuell geprüft. Drei Verweise und ihre Erläuterungen bleiben lesbar; bei 390 px umbrechende Überschrift und Absätze ohne sichtbaren horizontalen Überlauf. Navigationseintrag auf breiter Ansicht nicht mehr vorhanden.
- «Bisheriger Inhalt und Quelle» zunächst geschlossen, danach geöffnet. Expanded-Zustand im Snapshot bestätigt und historische Empty-Referenz sowie beide originalen Hinweise bei 390 px visuell geprüft.
- Alle drei Verweise per Tastatur aktiviert und Zielseiten im Browser nachgewiesen. Formularziel trägt korrekt `#abschnitt-ergebnis-unbekannt` und enthält «Ergebnis unbekannt»; Zustandsseite enthält «Zustände im Vergleich»; Tabellenziel lädt mit seiner Überschrift.
- Anschliessend `npm run typecheck` erneut ausgeführt: erfolgreich. Die zuvor gemeldeten fremden Typfehler sind inzwischen behoben; kein weiterer eigener Rendererfix war nötig.
- Eigene Browsertab geschlossen und Geräteemulation aufgehoben. Dies ist ein begrenzter Darstellungs- und Navigationsnachweis, keine allgemeine Accessibility-Freigabe.

Abschlussprüfung: veränderlichen Snapshot-Liveimport durch die drei literal eingefrorenen Originalblöcke ersetzt. Damit bleibt der Release nach erneutem Handbuchexport gleich; kein CMS-Inhalt geändert. Der Abgleich wird im Gesamtlauf erneut ausgeführt.
