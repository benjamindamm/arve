# Komponenten auswählen · Redaktion

## Gelesener Umfang

PAGE-BRIEF, Redaktionsbericht und eigener Auditabschnitt 40; vollständige Release mit allen 16 Blöcken, vier Entscheidungswegen, Beispielen, Quellen, Beobachtungen und ursprünglichen Auswahlfragen; vollständiger Seitenrenderer. `Selection()` in `component-studies.tsx` zur Abgrenzung gelesen: Dieser Renderer ruft die Funktion nicht auf, sondern zeigt die frühere Studie als Überschrift und Absätze. Daher weder Shared-Renderer noch Seitenrenderer geändert.

## Wichtigste Änderungen

- «Kein eigener Auswahlwert» im Button-Weg → «Eine Handlung starten». Der Einstieg fragt nach der Aufgabe statt nach einem Datenmodell.
- «ein vollständiger Bulkabschluss» → «ein vollständig durchgeführter Ablauf der gemeinsamen Folgeaktion». Der fehlende Nachweis bleibt ausdrücklich erhalten.
- Die frühere Studie erklärt Button, Input, Checkbox und Switch nun aus Sicht der handelnden Person statt als Wertbehälter. Der Quellenhinweis bleibt präzise, nennt aber keine Herkunftsfirma.
- Erläuterungen zu festen Optionen, Auswahl nach Filterwechseln und alternativen Komponenten als vollständige Sätze formuliert. Gute bestehende Regeln und sämtliche Beispielwerte bewahrt.
- Den früheren Ausgangstext als sprachlich überarbeitete Erläuterung gekennzeichnet; keine Behauptung einer unveränderten historischen Abschrift mehr. Historische Quelldateien bleiben unangetastet.
- Root-Review eingearbeitet: Beim Button nur den eigenen Auswahlzustand verneint; bei UX-009 die getrennt angebotene Handlung beschrieben, ohne ihre Ausführung zu behaupten. UX-003 an «Zeitraum oder Konten auswählen» angeglichen und fehlende Contracts für Radio/Select/Combobox ausdrücklich benannt. Typecheck und Diff-Prüfung danach erneut erfolgreich.

## Fachliche Erhaltung

Handlung und Navigation einschliesslich Download-Abgrenzung; kurzer freier Text und feste Werte; unabhängige Einzel-/Mehrfachwahl und unmittelbar wirksame Einstellung; gleichbleibendes Switch-Label und klare Übernahmebedingungen bleiben erhalten. Die lokale Konvention bleibt von einer allgemeinen ARIA-Vorschrift abgegrenzt. Keine zusätzlichen lokalen Implementierungen, Speicherfähigkeiten, Contract-, Such- oder Barrierefreiheitsfreigaben. UX-003/UX-009, sämtliche Quellenlinks und Beispielwerte bleiben erhalten.

## Ausgeführte Checks

- Aktuelle Seite vor Redaktion read-only via MCP `get_documentation_page` abgerufen; Inhalt (normalisiert um IDs/null) und Summary waren zur bisherigen Release gleich. Frisches `updatedAt` **2026-11-20T14:43:09.583Z** als `expectedUpdatedAt` übernommen.
- Strukturvergleich mit der gelesenen MCP-Fassung: 16 Blöcke, Reihenfolge, Typen, blockNames, Knotenzahl, Links und technische Attribute unverändert. Überschriften zusätzlich im Diff geprüft: unverändert.
- Eingehende Verweise auf `komponenten-auswahl` mit `#` in `src`, `scripts` und `docs` gesucht: keine Treffer. Keine neuen Überschriften, somit keine geänderten Überschriftenanker.
- `npm run typecheck`: erfolgreich.
- `git diff --check`: erfolgreich.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite in BrowserOS neo vollständig gelesen, beide Vertiefungen geöffnet und alle vier Wege samt Beispielen sowie Detailquellen kontrolliert. Vollseitige Screenshots mit tatsächlichen CDP-Breiten von 1440×1000 und 390×844 geprüft: Überschriften, Beschriftungen, Beispiele und Links brechen lesbar um; kein abgeschnittener Text oder überlappender Inhalt im Seiteninhalt festgestellt. Die korrigierten Aussagen sind veröffentlicht: Der Button selbst hat keinen eigenen Auswahlzustand; UX-009 beschreibt die getrennt angebotene Handlung und behält den fehlenden Ausführungsnachweis bei; Radio/Select/Combobox haben hier keine Contracts. Kein sprachlicher Restbefund. Prüfbreite zurückgesetzt und eigenen Prüftab geschlossen.

DONE. Keine weiteren Inhaltsänderungen oder Veröffentlichungen bei der Browserprüfung vorgenommen.
