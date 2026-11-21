# Unabhängiger Gegencheck

20. November 2026. Der Erstentwurf wurde vor diesen Rückmeldungen gesichert. Root gab dem Praxisagenten keine Auswahl von Seitentypen, Komponenten oder Fachregeln vor. Der folgende Gegencheck ergänzt dessen eigenen Walkthrough; er ist keine umfassende Abnahme.

## P1 · Einstellungsantwort wurde dem falschen Kontakt zugeordnet

Tatsächlich in einem eigenen BrowserOS-neo-Tab durchgespielt:

1. K-101 «Testkontakt Nord» öffnen. Dessen Benachrichtigungen stehen anfänglich auf Aus.
2. Im Testlabor die nächste Einstellungsantwort auf «Ergebnis unbekannt» stellen und Benachrichtigungen einschalten.
3. Auf die sichtbare Meldung «Zustand ungeklärt» warten.
4. Zur Liste zurückkehren und einen anderen Kontakt öffnen. Bereits K-102 übernimmt die Unklar-Meldung aus K-101.
5. K-103 «Testkontakt West» öffnen; dessen Anfangswert ist ebenfalls Aus.
6. Die Annahme der ursprünglichen Anfrage simulieren.

Beobachtet: Auf K-103 erscheinen «gespeichert» und «Benachrichtigungen Ein», obwohl die Anfrage K-101 betraf. Der [Bildbeleg](root-failure-wrong-contact.png) wurde tatsächlich angesehen. Der Source-Abgleich bestätigt globale Variablen `selected`, `settingPhase` und `pendingSetting`; die Auflösung schreibt auf den inzwischen ausgewählten Kontakt. Das ist ein Fehler im erzeugten Testartefakt, kein nachgewiesener Fehler in Arves Portalimplementierung.

Der Praxisagent erhielt den Auftrag, den ursprünglichen Stand zu sichern, den Fehler ausdrücklich zu dokumentieren und eine gezielte Korrektur mit Wiederholungsprüfung durchzuführen. Daraus folgt noch kein Nachweis, dass eine entsprechende Handbuchregel fehlt: diese Zuordnung muss anhand der tatsächlich verwendeten Quellen getrennt beurteilt werden.

## Quellenabgleich zweier unabhängiger Befunde

- Der gebundene Button-Draft schliesst Formularübermittlung tatsächlich aus: `src/contracts/libraries/shadcn/65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26/components/button/ux.json`. Allgemeine Formularbeispiele sind daher kein Nachweis, dass dieser Komponentencontract das Absenden umfasst. Ein nativer Formularbutton im klar markierten Wireframe ist keine bestätigte Spartan-Implementierung.
- Im portablen Paket ist ein Skill vorhanden (`package/skills/ui-contracts/SKILL.md`). Die vier Komponentenprojektionen in `contracts.json` führen jedoch keine Skill-Artefakte: Button 21, Checkbox 20, Switch 18 und Input 18 Artefakte, jeweils ohne Skillpfad. Der öffentliche Dateizugang erlaubt nur die an der Komponente geführten Artefakte. Das stützt den Befund einer Zugriffslücke im getesteten MCP-/Portalweg; es bedeutet ausdrücklich nicht, dass der Export keine Skills enthält.

Der Gegencheck verändert weder Handbuch noch Contracts. Die ursprüngliche Reproduktion und ein nachfolgender Korrekturlauf sind getrennt zu bewerten.

## Nachprüfung der Korrektur durch Root

Nach Neuladen des korrigierten Prototyps wurde derselbe Ablauf nochmals über sichtbare Bedienelemente durchgespielt. K-101 wurde erneut auf ein unbekanntes Einstellungsresultat gebracht. Auf K-103 blieb der Schalter Aus; eine dort simulierte Klärung meldete «Keine unklare Anfrage vorhanden». Bei der Rückkehr zu K-101 war S-1 weiterhin ungeklärt. Erst die dort simulierte Annahme zeigte für K-101 «Benachrichtigungen Ein». Der unveränderte West-Zustand wurde zusätzlich im Screenshot tatsächlich angesehen. Damit ist diese konkrete Regression auch unabhängig nachgeprüft. Andere mögliche Nebenläufigkeitsfälle sind dadurch nicht allgemein freigegeben.

Die fehlerhafte Vorherdatei des Praxisagenten ist ausdrücklich eine Rekonstruktion. Der ursprüngliche Root-Bildbeleg und die protokollierten UI-Schritte sind davon unabhängige Beobachtungen. Der eigene Root-Prüftab wurde anschliessend geschlossen und seine Viewportvorgabe aufgehoben. Die lokale Vorschau bleibt für den Nutzer erreichbar.
