# Anforderungen aus Designersicht

Arbeitsentwurf · 26.11.2026. Grundlage: unabhängiger Designer-Review und anschliessende Konkretisierung durch einen frischen Agenten. Keine Umsetzung beauftragt. Die Kriterien beschreiben den gewünschten Zustand; sie sind kein Bericht über bereits ausgeführte Prüfungen.

Ziel: Leser finden den richtigen Arbeitsweg und können die Beispiele und Originaldateien auch mobil bequem nutzen. Kurze Texte, nachvollziehbare Beispiele und ausreichend Weissraum bleiben die Leitlinie. Das globale Drei-Punkte-Menü und die Trennung zwischen Arve-Handbuch und Design-Systemen bleiben bestehen.

## Kapitelnavigation kompakt halten

**Problem:** Die vollständige Kapitelliste verdrängt mobil den Einstieg. **Ort:** alle sechs Handbuchseiten. **Priorität:** nächster Durchstich.

**Gewünschtes Verhalten:** Auf schmalen Ansichten beginnt die Navigation mit dem aktuellen Kapitel und einer aufklappbaren Kapitelauswahl. Breite Ansichten behalten die seitliche Navigation.

**Abnahmekriterien:**

- Im geschlossenen Zustand ist das aktuelle Kapitel erkennbar; die vollständige Liste beansprucht keinen Platz vor dem Inhalt.
- Alle sechs Kapitel sind per Tastatur erreichbar. Öffnungszustand und aktueller Eintrag sind erkennbar; geschlossene Inhalte haben keine unsichtbaren Tastaturstopps.
- Lange Kapiteltitel bleiben verständlich und verursachen keinen seitlichen Seitenüberlauf.
- Direkte Kapitelaufrufe zeigen denselben korrekten Navigationszustand wie der Wechsel über die Liste.

**Default:** aufklappbare Liste. Kein neues globales Navigationssystem und keine zweite Menüebene mit denselben Links. Die Navigation soll bei knappem Platz wechseln; 320/390 px dienen als Prüffälle, nicht als universelle Layoutvorgabe.

## Skills bequem lesen und kopieren

**Problem:** Lange Originaltexte erzeugen eine zweite Scrollfläche. **Ort:** Autoren-Skills. **Priorität:** nächster Durchstich.

**Gewünschtes Verhalten:** Die Code-Akkordeons bleiben. Jede Datei bietet zusätzlich separates Lesen und Kopieren.

**Abnahmekriterien:**

- SKILL.md und die angezeigten Referenzdateien lassen sich vollständig aufklappen; es wird nichts gekürzt oder redaktionell umgeschrieben.
- Jede Datei besitzt einen direkten, teilbaren Leseweg. Die separate Ansicht erlaubt fortlaufendes Lesen im normalen Seitenfluss und zeigt Skill und Dateiname.
- Eine Kopieraktion übernimmt die vollständige Originaldatei und meldet tatsächlichen Erfolg. Bei nicht verfügbarem Zwischenablagezugriff erscheint ein verständlicher manueller Ersatzweg.
- Akkordeon, separate Ansicht und Kopieren sind per Tastatur erreichbar. Lesen und direkte Links funktionieren auch in der statischen Ausgabe ohne CMS oder MCP.

**Default:** eigener Volltext-Leseweg mit Rückverweis. Keine Bearbeitung oder Ausführung von Skills und keine Erweiterung des MCP-Angebots. Technische Umsetzung darf ausschliesslich die registrierten Skill-Dateien zugänglich machen.

## Die Status-Demo als ein Experiment gestalten

**Problem:** Die Auswahl verteilt sich mobil 3+1; der Modusschalter wirkt vom Experiment getrennt. **Ort:** Redaktion. **Priorität:** nach dem ersten Durchstich; keine Pilotblockade.

**Gewünschtes Verhalten:** Statusauswahl, Modusschalter und Vorschau bilden eine zusammengehörige Bediengruppe.

**Abnahmekriterien:**

- Vier Status verteilen sich auf schmalen Ansichten gleichmässig, vorzugsweise in zwei Spalten. Lange Texte dürfen weiter umbrechen statt abgeschnitten zu werden.
- Gewählter Status und Modus sind per Tastatur bedienbar und zusätzlich zur Farbe erkennbar.
- Statuswechsel ändern Label und Beispielnotiz; die simulierte Veröffentlichung bleibt unverändert.
- Ein kurzer gemeinsamer Hinweis unterscheidet die lokale Status-Demo von der persönlichen Browseransicht des Redaktionsmodus. Die Demo speichert keine fachlichen Seitenänderungen.

**Default:** 2×2-Auswahl und Modusschalter unmittelbar vor der Vorschau. Keine Änderung der vier Status oder der Trennung vom Veröffentlichungsstand.

## Import als überprüfbare Schritte darstellen

**Problem:** Inline-Code versteckt Voraussetzungen und den Unterschied zwischen Vorschau und Schreiben. **Ort:** Ein eigenes System aufbauen. **Priorität:** nächster Durchstich.

**Gewünschtes Verhalten:** Die technische Anleitung unterstützt den gewählten Startweg; sie ersetzt nicht dessen fachliche Erklärung.

**Abnahmekriterien:**

- Vor den Befehlen stehen benötigter Zugang, Arbeitsort, Ziel-Datenbank sowie die Bedeutung von Systemkennung und Name.
- Vorschau und tatsächliche Anlage haben jeweils einen vollständigen, separat kopierbaren Befehlsblock. Direkt dabei ist sichtbar, welcher Schritt schreibt und was zuvor kontrolliert werden soll.
- Nach dem Schreiben folgt ein überprüfbarer nächster Schritt: Zielsystem öffnen, Entwürfe und zurückgesetzte redaktionelle Prüfstände kontrollieren.
- Code bleibt auf schmalen Ansichten lesbar, ohne die gesamte Seite seitlich zu verschieben; Anleitung und Kopieren funktionieren in der statischen Ausgabe.

**Default:** kurze Voraussetzungen, Vorschau, Ergebnisprüfung, Anwendung. Keine Importoberfläche, automatische Ausführung oder sichtbare Pflichtnummerierung.

## Anschluss an die Einführung

Pilotziel, Startwege, Verantwortlichkeiten, Übergaben und MCP-Leseauftrag werden einmal in den [Anforderungen aus Einführungssicht](requirements-introduction.md) festgelegt. Die Gestaltung führt diese Inhalte durch denselben kleinen Fall; keine parallelen Erklärbeispiele oder doppelte Prozessbeschreibung pro Seite.

**Minimale Etappe:** mobile Navigation, Skill-Lesewege und klare Importdarstellung gemeinsam mit den priorisierten Einführungsinhalten. Danach die Demo glätten. Gezielte Abnahme mit Tastatur, langen Texten, schmaler/breiter Ansicht, laufender Anwendung und statischer Ausgabe. Kein umfassendes Redesign, keine neuen Hauptkapitel oder CMS-Migration und keine pauschale Barrierefreiheitsfreigabe erforderlich.
