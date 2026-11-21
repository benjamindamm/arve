# Erstentwurf vor Prototypbau · 20.11.2026

Recherche ausschliesslich sichtbares Arve-Portal und lesendes MCP, Bibliothek shadcn. Keine früheren Audits oder Implementierungsquellen gelesen.

## Entwurf

Aus Auftrag: berechtigte Teammitglieder finden einen Kontakt, lesen Angaben und ändern den Anzeigenamen. Separat gespeicherte Benachrichtigungseinstellung wirkt sofort. Keine Erstellung, Löschung, Archivierung oder weitere Rollen erfunden.

Vom System gelernt: overview → detail → edit beschreibt die Aufgaben, unabhängig von Layout. Übersicht als Wide Single Card mit Suchfeld, Ergebniszahl und kompakter Liste; Detail als Stacked Section Cards, Kontaktangaben vor separat abgegrenzter Einstellung. Edit einspaltig mit begrenzter Feldbreite, Meldung vor Aktionen. Schmal gleiche Reihenfolge, Aktionen untereinander. Navigation als Link, Aktion als Button. Switch mit konstantem Label. Erfolg nur nach bestätigter Annahme. Unbekanntes Ergebnis vor erneutem Senden/Verwerfen klären.

Eigene Entwurfsannahmen (keine Produktregeln): drei vollständige neutrale Testkontakte, lokale unmittelbare Suche nach ID/Anzeigename; Kontakt-ID und Testadresse nur lesen; Name ohne Normalisierung bearbeiten. Für reproduzierbare Korrektur zeigt ein explizit gewählter Simulatorfall eine Feldablehnung; KEINE 1–80-Zeichen-Projektregel auf Kontakte übertragen. Unveränderter Wert sendet nicht. Suche bleibt beim Rückweg erhalten. Einstellung gilt im Entwurf für den dargestellten Kontakt; Geltungsbereich bleibt offeneEntscheidung. Einstellung wird unmittelbar separat angefragt, Stellung nach bestätigter Antwort aktualisiert; Laufzustand separat erkennbar. Keine Behauptung realer Persistenz.

Zustände: unverändert, bearbeitet, Feldablehnung mit Erhalt/Fokus, laufend, bestätigt, ausdrücklich nicht angenommen, unklar. Vor Senden: Abbruch fragt bei Änderung nach Weiterbearbeiten/Verwerfen. Nach unklarem Ergebnis: weder Wiederholen noch Verwerfen; Simulator kann ausdrücklich bestätigte/nicht angenommene Antwort liefern, kein erfundener Produkt-Endpunkt.

## Erste Hindernisse

1. Projektbeispiele enthalten umfangreiche lokale Fachregeln (80 Grapheme, Aktiv/Archiviert, höchstens 50 Projekte). Diese dürfen nicht unbesehen zu Kontaktregeln werden; Übertragungsarbeit bleibt beim Designer.
2. MCP bietet vier lesende Werkzeuge, keine Skill-Lesefunktion. Komponenten liefern Contractdateien, aber keinen exportierten Skill. Technische-Anbindung erklärt die Existenz im separaten Paket, liefert hier keinen Zugriff. Kein Nachbarrepo-Fallback.
3. Drei gewählte Contracts sind draft. Button-UX schliesst Formularübermittlung aus; Speichern muss daher als Host/Formular-Entwurfsarbeit ausgewiesen werden. Switch-Demo speichert nicht. Input-Verhalten liefert keine fachliche Validierung.
4. Unklare Speicherung ist im Handbuch brauchbar beschrieben, Statusklärung aber ausdrücklich nicht verfügbar. Anwendung kann deshalb ohne Backendentscheidung nicht sicher fertig implementiert werden.
5. Kontaktmodell, Suchumfang, Name-Regeln, Berechtigungswechsel, Konfliktlösung und Benachrichtigungs-Geltung bleiben offeneEntscheidung. Das sind Produktentscheidungen, keine fehlenden allgemeinen Handbuchregeln.
6. Patternkatalog zeigt Kandidaten und Grenzen, keine freigegebenen ausführbaren Patterns; Fachseiten sind für das tatsächliche Gestalten hilfreicher.
