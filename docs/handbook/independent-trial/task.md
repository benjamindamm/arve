# Aufgabenblatt

## Auftrag und Eingangswissen

Als neuer Agent aus veröffentlichtem Arve-Handbuch den Weg «Projekte finden → Detail → Name bearbeiten» gestalten. Portal http://127.0.0.1:3010, System shadcn, Web, de-CH. Desktop und schmale Ansicht, Fokus, Suche/Rückkehr, Validierung/Abbruch und unbekannter Speicherstand sind einzubeziehen. Keine CMS-, App-, Contract-, Commit- oder Push-Änderung.

## Unabhängigkeit

1. Öffentliche Startseite im eigenen BrowserOS-Tab öffnen; shadcn wählen.
2. Einstieg «Mit dem Handbuch gestalten» finden; dessen drei Aufgaben und verlinkte Fachseiten lesen.
3. Suche, Detail und Formular vollständig aus öffentlichen Browserextrakten lesen, danach Komponenten, Input, Button und Barrierefreiheit.
4. Entscheidungen, Entwurf und Befunde vor internem Abgleich festhalten und hashen.
5. Erst danach `docs/handbook/content-standard` und `team-readiness` vergleichend lesen. Nachträgliche Erkenntnisse getrennt dokumentieren, Erstentwurf nicht stillschweigend verbessern.

Der Agent erhielt keine Elternhistorie, aber eine Rollenaufgabe mit Zielablauf. Vor dem Einfrieren präzisierte der Koordinator die Abnahmegrenze (statischer Pilot, Backend kein Gestaltungsblocker) und nannte mögliche Randfragen als Suchhinweise. Diese Hinweise sind keine unabhängigen Beobachtungen; der konkrete Entwurf und die Belege stammen aus veröffentlichten Seiten. Kein blindes Experiment mit einer uninformierten menschlichen Person.

## Material und Abnahme

Verwendete Beispieldaten aus dem Handbuch: P-101 «Alpen» Aktiv, P-102 «Alpen Archiv» Archiviert, P-103 «Berg» Aktiv. Eigener konkreter Bearbeitungsschritt: P-101 wird «Tal». Abnahme der Probe: nachvollziehbare Entscheidungen mit Quelle; gleiche Identität im ganzen Weg; breite/schmale Anordnung; Normal- und Fehlerwege; offene Entscheidungen markiert. Keine Abnahme eines Produktes.

## Tatsächlich ausgeführt

- Öffentlichen Einstieg und Inhaltsverweise im Browser gelesen.
- Volltexte der drei Aufgaben und ergänzender Komponenten-/Assistivhinweise gelesen und archiviert.
- Aus den Regeln konkrete Seitenfolge und Zustandsmatrix konstruiert; Fälle q=ALP, Status Aktiv, Name «Tal», leerer Wert, Überlänge, Dirty-Abbruch und verlorene Antwort gedanklich durchgespielt.
- Regeln zu 1280/320 px und Fokus auf denselben Entwurf angewandt, ohne responsive Laufzeitmessung.
- Anschliessend interner Inhaltsabgleich, separat protokolliert.

Nicht ausgeführt: Nutzungstest mit Menschen, Screenreader, Touch/Bildschirmtastatur, echte Speicherung, reale Fokussteuerung, Zoomtest oder formale WCAG-Prüfung. Die Folgeprobe benötigt eine konkrete Umsetzung oder einen überprüfbaren Prototyp.
