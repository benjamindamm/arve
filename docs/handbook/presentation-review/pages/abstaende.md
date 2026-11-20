# Abstände und Grössen · Seitenüberarbeitung

## Befund

Öffentliche Seite zuerst über BrowserOS neo gelesen. Der Einstieg zeigte bereits einen Vergleich, aber die Lücken waren nicht direkt beschriftet. Danach folgten lange Textabschnitte. Der Unterschied zwischen Zeichen und Ziel war nur als einzelne Skizze vorhanden.

## Änderung

- Beschrifteter Vergleich: Nähe innerhalb einer Angabe und Trennung zwischen Angaben gegenüber überall gleichen Lücken.
- Drei konkrete Entwurfsentscheidungen statt langer Grundlagenabschnitte.
- Eigene Anschauung für Innenraum/Kontur und Gruppenabstand sowie für Zeichen/Bedienfläche/Lücke zwischen Zielen.
- CMS-Inhalt als einzige fachliche Textquelle, auch für Beispielbeschriftungen und Musterinhalt. Renderer liest `blockName` aus `Page['content']`.
- Referenzvorschlag, lokale Komponentenwerte, Quellen und Prüfgrenzen bleiben erhalten, aufklappbar. Keine allgemeine Tokenfreigabe. Container und Raster werden ausschliesslich verlinkt.
- Vergleich nebeneinander, unter 680 px untereinander; Innenraumstudie auf schmaler Fläche gestapelt. Bedienflächenskizze bricht bei Bedarf um. Alle Skizzen sind ausdrücklich Demo und statisch.

## Tatsächliche Prüfungen

- Aktuelle veröffentlichte CMS-Seite per Payload gelesen, PostgreSQL-Adapter `push:false`; Stand `2026-11-17T23:33:02.523Z`.
- Lokale Werte direkt in `src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json` geprüft: `input.paddingBlock`, `input.paddingInline`, `checkbox.labelGap`.
- WAI Understanding SC 2.5.8 am 20.11.2026 im Browser gelesen, einschliesslich fünf Ausnahmen und Abstandskreisen.
- `npm run typecheck` erfolgreich nach eigenem Stand.

Keine eigenen CMS-Schreibzugriffe, keine Registry-/Routenänderung, kein Commit/Push. Integration und Veröffentlichung erfolgten anschliessend durch Root.

## Live-QA nach Veröffentlichung

- BrowserOS neo: Einstieg, Innenraum- und Bedienflächendarstellung bei 1440 px visuell geprüft. Vergleich steht nebeneinander, Innenraumbeispiele mit mittiger Gruppenlücke; die zwei Bedienflächen und ihre Zwischenlücke bleiben getrennt und beschriftet.
- Bei 390 × 844 px visuell geprüft: Vergleich korrekt untereinander, Innenraumstudie gestapelt; Bedienflächenskizze passt in die verfügbare Breite. Überschriften und Beispielwerte umbrechen ohne sichtbaren Beschnitt.
- Referenzwerte und Quellen/Prüfgrenzen jeweils über ihre sichtbaren Aufklapper geöffnet. Inhaltsanzeige und längerer Quellenpfad auf schmaler Fläche geprüft; Pfad bricht um.
- Geometrieprobe nach Öffnen der Details: `innerWidth:390`, `documentElement.scrollWidth:390`; Vergleichskarten jeweils 350 px breit bei x=20. Desktopprobe: `innerWidth:1440`, `scrollWidth:1440`.
- Auch die Erläuterung des ersten Vergleichs auf Desktop geöffnet und den Inhalt ausgelesen.

Keine Nachbesserung erforderlich. Diese begrenzte Browserprüfung belegt die Darstellung in den genannten Ansichten; keine Aussage über Anwendungskonformität oder echte Bedienflächen. Eigene QA-Tabs anschliessend geschlossen.
