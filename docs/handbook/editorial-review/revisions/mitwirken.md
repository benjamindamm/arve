# Mitwirken · Redaktion

## Gelesener Umfang

Den Seitenauftrag, den Redaktionsbericht und den eigenen Auditabschnitt 47 vollständig gelesen. Anschliessend die gesamte aktuelle Release und den Renderer einschliesslich Musterbeitrag, vier Schritten, Kriterien, Quellenvertiefung und den beiden älteren Hinweisen gelesen. Der Renderer zeigt `flow.source` bereits ausschliesslich in der Vertiefung; zusätzliche Renderertexte oder Layoutänderungen waren nicht nötig.

Vor der Redaktion `get_documentation_page` über den lokalen MCP-Endpunkt mit `system: shadcn` und `section: mitwirken` schreibgeschützt abgerufen. Inhalt und Zusammenfassung waren nach Entfernung der CMS-IDs/null-Werte gleich der bisherigen Release. Frischer Ausgangsstand und neues `expectedUpdatedAt`: `2026-11-20T15:17:58.532Z`.

## Wichtigste Änderungen

- Der Einstieg nennt die konkrete Aufgabe: an einem Beispiel zeigen, was verbessert werden soll und wie sich der Vorschlag prüfen lässt.
- «Beleg und Aussageart» heisst jetzt «Beobachtung und Vorschlag». Der Text benennt direkt, was beobachtet wurde und was sich ändern soll.
- «Eine begründete Aussage mit erkennbarem Geltungsbereich» erklärt nun, welche Aussage für welchen Fall gilt. Der Prüfschritt nennt Fassung, Umgebung, Ergebnis und offene Punkte in vollständigen Sätzen.
- «Lokale Mechanik» wurde zu einer erklärenden Quellenangabe in der vorhandenen Vertiefung. Die exakten Dateien und `versions.drafts` bleiben erhalten.
- Die zwei älteren Hinweise «Vorschlag» und «Review» sind sprachlich überarbeitet und ausdrücklich als aktuelle Erläuterung des Ausgangstexts gekennzeichnet. Die Seite behauptet keine wörtliche historische Abschrift mehr; historische Quelldateien wurden nicht geändert.

## Fachlich erhalten

Das Speicherbeispiel bleibt ein Vorschlag ohne beschlossene Regel oder behauptete bestehende Speicherfunktion. Fehler und unbekanntes Ergebnis bleiben offen. Drafts, Seitenversionen und Publish bleiben beschrieben; daraus werden weder erzwungener Teamreview noch neue Rollen abgeleitet. Einreichungskanal und Kontaktstelle bleiben ungeklärt. MCP bleibt ausschliesslich lesend. Handbuchversion, Contractrevision und Paketversion bleiben getrennt; Textveröffentlichung erzeugt keine Contract- oder Paketversion. Die Quellenangaben und die Grenze des bisherigen technischen Nachweises bleiben in der Vertiefung erhalten.

## Tatsächliche Checks

- Frischer MCP-Abruf und Altgleichheit von Inhalt/Zusammenfassung wie oben beschrieben.
- Struktureller Vergleich mit diesem Abruf: sieben Blöcke, Typen, Blocknamen, Reihenfolge, Workflow-Keys, Links und vom Renderer verwendete Textzeilen unverändert.
- Repositorysuche nach `mitwirken#` ohne Treffer. Kein eingehender Anker anzupassen; die Überschriften «Vorschlag» und «Review» bleiben erhalten.
- `npm run typecheck`: erfolgreich, Exit 0.
- `git diff --check`: erfolgreich, Exit 0.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite im eigenen BrowserOS-neo-Tab vollständig gelesen und «Quellen, Grenzen und weitere Hinweise» geöffnet. Anschliessend die ganze Seite mit geöffneten Details bei tatsächlichen CDP-Breiten 1440×1000 und 390×844 visuell geprüft. Musterbeitrag und alle vier Schritte sind vollständig lesbar; auf 390 Pixeln stehen Labels über den Werten und die Schritte untereinander. Die längeren neuen Sätze, Quellenpfade sowie «Vorschlag» und «Review» brechen ohne erkennbaren Textverlust um.

Die Du-Ansprache ist durchgängig. Das Muster bleibt als noch nicht beschlossene Regel erkennbar. Der fehlende vorgeschriebene Teamreview, der offene Einreichungskanal, die getrennten Versionsstände und das ausschliesslich lesende MCP sind auch in der veröffentlichten Ausgabe enthalten. Kein sprachlicher Restbefund festgestellt. Keine CMS-Funktionstests ausgeführt. Die Grössenüberschreibung wurde aufgehoben und der eigene Prüftab geschlossen.

Nur die eigene Release und dieser Bericht geändert. Keine CMS-Schreiboperation durch diesen Agenten.
