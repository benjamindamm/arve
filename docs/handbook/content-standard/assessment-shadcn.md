# Inhaltsstandard: Abgleich mit Arve/shadcn

18.11.2026 · Bezug: Inhaltsstandard 0.1. Ergebnis ist eine redaktionelle Bestandsbewertung, keine technische oder fachliche Gesamtfreigabe. Die Detailbefunde stehen bei den jeweiligen Kriterien in den Fachdateien.

## Gesamtbefund

**Wir besitzen eine brauchbare Handbuchstruktur und mehrere gut ausgearbeitete Themen. Ein durchgängig entschiedener Systemstandard fehlt noch.** Bisherige CMS-Vorlagen helfen beim Schreiben, definieren aber nur vier grobe Feldgruppen. Die neue Themenmatrix ergänzt konkrete Unterthemen, Zuständigkeiten, bedingten Bedarf und redaktionelle Abnahme.

Die vorhandenen Texte müssen nicht neu geschrieben werden. Zu klären sind insbesondere Geltung und Verbindlichkeit der vorgeschlagenen Regeln, die offenen Systemreferenzen und die noch dünnen Aufgabenfamilien. Eine leere Unterthemenzeile im Standard bedeutet zunächst Prüfbedarf, nicht automatisch einen Auftrag für eine neue Seite.

## Was der Abgleich konkret ergibt

| Familie / IDs | Bereits brauchbar | Fehlende Entscheidung oder Inhalt |
| --- | --- | --- |
| Systemprofil · SYS-01–06 | Nutzen, Systemwahl und Zusammenarbeit sind erklärt. | Beschlossener Produkt-/Plattformumfang, Zielgruppen, Prinzipien bei Konflikten, Themenrelevanz und echte Zuständigkeiten. |
| Grundlagen · FND-01–06 und Unterthemen | Zweck, visuelle Entscheidungen, Paare und Nachbarbezüge sind anschaulich; Quellen-/Beweisgrenzen sichtbar. | Systemweite verbindliche Rollen/Skalen, vollständige Ebenen-/Asset-/Bewegungsreferenzen sowie Verantwortlichkeit. Offenheit ehrlich beibehalten, bis entschieden. |
| Komponenten · CMP-01–14 | Auswahl, Anatomie und Grenzen für Button/Input/Checkbox/Switch gut erklärt. | Durchgängig nachvollziehbare Zustands-/Bedienreferenzen, freigegebener Variantenumfang, Zuständigkeit und Implementierungsnachweise. Vier Komponenten sind ein bewusst begrenzter Katalog. |
| Patterns · PAT-01–16 | Formularweg differenziert Korrektur, Übermittlung, bestätigten/abgelehnten/unbekannten Ausgang. | Weitere Aufgabenfamilien nur teilweise ausgearbeitet; Verbindung zu Layouts. Mehrschritt-, Gruppen- oder Onboardingbedarf zuerst am Scope entscheiden. |
| Layouts · LAY-01–15 | Beispielanordnungen und Detailseitenentscheidungen vorhanden; Abstandsschnittstelle bereinigt. | Führende Anleitung je Seitentyp mit Regionspriorität, Rückwegen, Inhaltswachstum und konkreten adaptiven Grenzen; doppelte Kapitel konsolidieren. |
| Content · CNT-01–12 | Formularbegriffe, Meldungspaare, Pflicht/Hilfe und vorsichtige Ergebnisformulierungen konkret. | Systemweites Glossar, Stimme/Anrede, gültige Formate, Sprachumfang und bedingte Medien-/Datenregeln. |
| Inklusion · INC-01–10 | Konkrete Formularprüfaufgaben, erwartete Ergebnisse und klare Grenzen. | Systemweiter Geltungs-/Qualitätsumfang, Abhilfeweg und nachgewiesene assistive Prüfungen der tatsächlichen Produkte. Prüfauftrag nicht als Ergebnis zählen. |
| Plattformen · PLT-01–08 | Datenmodell trennt konkrete Umsetzung, Plattform, Kontext und Status. | Nutzbare Ressourcen-/Supportübersicht, entschiedene Plattformabweichungen und reproduzierbare Nachweise. Keine native Reife ableitbar. |
| Pflege · GOV-01–09 | Historie, Pins, Releaseberichte und erhaltene Wegweiser schaffen technische Nachvollziehbarkeit. | Verantworteter Entscheidungs-, Review- und Rückmeldeweg sowie klare fachliche Statusbedeutung. |
| Technische/agentische Nutzung · AGT-01–07 | Lesendes MCP und lokale Contractartefakte funktionieren; neue Ablauf-/Meldungsblöcke haben gemeinsame Datenquelle. | Vollständiger erster Agentenarbeitsweg, strukturierter Fachstatus und überprüfte Übertragung der älteren festen Studien auf andere Systeme. |

## Was die aktuellen CMS-Vorlagen leisten

`src/docs/page-templates.ts` enthält vier Vorlagen: Grundlagen mit vier Feldern, Layouts/Patterns/Komponenten mit jeweils fünf. Sie benennen sinnvolle Grundfragen, unterscheiden jedoch noch keine konkreten Unterthemen und bedingten Auslöser. Content, Inklusion, Plattformen und Pflege werden als allgemeine Leitfäden behandelt. `scripts/seed-system.mjs` legt acht Entwurfsseiten an, keine ausgefüllte Inhaltsstruktur mit Kriterien und Entscheidungen.

Bei den jüngsten Veröffentlichungen wurden Vorlagenfelder geleert, weil sie denselben Inhalt vor dem ausgearbeiteten Haupttext wiederholten. Das war eine Bereinigung der Ausgabe, keine Abschaffung inhaltlicher Anforderungen. Künftig sollte der Standard als **redaktionelle Prüfhilfe** hinter der Seite wirken: zugeordnete Kriterien und Nachweise, Darstellung nach Thema. Ein zusätzlich gerenderter Pflichttextblock pro Kriterium würde die beseitigte Doppelung wieder erzeugen.

## Empfohlene Anwendung vor weiterem Ausbau

1. **Systemprofil ausfüllen:** Wer nutzt die shadcn-Referenz wofür? Welche Plattformen und Aufgaben sind Demonstrationsumfang, welche spätere Zielsetzung? Das entscheidet die bedingten Themen.
2. **Eine Familie vollständig abgleichen:** Den Formularweg mit Input, Meldungen, Inklusion und Layoutverweis anhand der BAS-/Fach-IDs prüfen. Bestehende Inhalte zuordnen; fehlende Entscheidung statt zusätzlichem Fülltext festhalten.
3. **Verantwortung und Referenzen klären:** Offene Quellen-/Skalen-/Verbindlichkeitsfragen mit zuständigem Team versehen. Wo keine Firmenentscheidung möglich ist, die Referenzgrenze explizit beibehalten.
4. **Nächste Inhaltslücke bearbeiten:** Layout-/Navigationsthema anhand der LAY-Vorlage; danach weitere tatsächlich benötigte Aufgabenfamilien. Keine vollständige Katalogkopie auf Vorrat.
5. **Übertragbarkeit erproben:** Ein zweites, bewusst begrenztes System oder eine neutrale Testfamilie mit demselben Prüfblatt aufbauen. Keine shadcn-Werte, Links oder Beispielaussagen automatisch übernehmen.

Erst nach diesem Durchlauf die Vorlagen in Payload als Redaktionshilfe abbilden und den Start-Seed anpassen. Diese Dokumentation setzt das noch nicht um; so lässt sich der Inhaltsstandard unabhängig vom CMS prüfen.

## Prüfgrundlage und Grenzen

Drei unabhängig beauftragte Fachagenten formulierten zunächst Sollanforderungen und ergänzten anschließend den Dateiabgleich. Der Koordinator prüfte die Zuständigkeitsgrenzen und korrigierte Überschneidungen bei Raster/Abständen sowie Komponenten-/Patternverhalten. Quellen und Stand der fachlichen Ableitung sind in den jeweiligen Dateien dokumentiert.

Zusätzlich wurden in diesem Durchgang **20 veröffentlichte Seiten** über den bestehenden MCP-Endpunkt gelesen: neun Grundlagen-, sechs Komponenten- und fünf Formularpaketseiten. Ihre vollständigen Inhaltsblöcke stimmen nach Entfernung automatisch vergebener IDs und leerer optionaler Felder mit den herangezogenen Release-Dateien überein. Es wurden nur Lese-Tools aufgerufen. Das bestätigt den aktuellen Inhaltsstand dieser Belege, nicht ihre fachliche Vollständigkeit oder die Funktionsfähigkeit der beschriebenen Produkte.

Andere Pattern-/Layoutbefunde beruhen teils auf älteren Inhaltsdateien und ausdrücklich datierten Fachaudits. Sie benötigen vor einer konkreten Änderung einen erneuten Seitenabgleich. Kein neuer Gesamtaudit der Datenbank, keine assistive Prüfung, kein nativer Test, kein vollständiger Artefakt-/Contractvergleich. App, CMS, Seeds und technische Vorlagen wurden in diesem Durchgang nicht verändert.

## Konkretisierung für den ersten Gestaltungs-Piloten

Die nachfolgende [Arbeitsfähigkeits-Lückenliste](../team-readiness/README.md) ordnet den drei vereinbarten Aufgaben Finden, Detail und Erstellen/Bearbeiten konkrete D-/E-/B-Punkte, Abhängigkeiten und Abnahmeszenarien zu. Sie unterscheidet nachgewiesene vorhandene Funktion, noch offene Entscheidung und benötigte wiederverwendbare Ressource. Sie ersetzt keine Freigabe der dort vorgeschlagenen Pilotregeln.

## Fortschreibung · 20. November 2026

Die Bewertung vom 18. November oben bleibt als datierter Ausgangsbefund erhalten. Inzwischen sind die Pilotregeln für Finden, Detail und Bearbeiten veröffentlicht. Alle vier Komponentenseiten sind auf den portablen Export `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26` gebunden. MCP liefert die vollständigen Textdateien; Portal und MCP bieten zusätzlich alle komponentenbezogenen Artefakte als geprüfte Downloads.

| Themenfamilie | Jetzt konkret ergänzt | Weiterhin offen |
| --- | --- | --- |
| Systemprofil | Kleiner Web-Pilot, de-CH, Projekt mit ID/Name/Status, Grenzen benannt | Konzernweiter Scope, echte Zuständigkeiten, Konfliktprioritäten |
| Grundlagen | Lokale helle Farb-, Schrift-, Abstands- und Layoutreferenz für den Pilot | Vollständiges systemweites Rollen-/Tokenmodell, verwendbarer Designressourcenstand |
| Komponenten | Vier komplette importierte Quellenbestände, acht Hauptdomänen, Download aller zugeordneten Artefakte | Breiterer bedarfsgetriebener Katalog, fachliche und plattformbezogene Abnahme |
| Patterns | Suche/Filter, Feldprüfung, Änderungen, Abbruch und unbekannter Speicherausgang abgestimmt | Wiederverwendbare Aufgabenentwürfe; weitere Familien erst nach Bedarf |
| Layouts | Detail, Suche und Formular mit gemeinsamen Rückwegen und schmalen Regeln | Editierbare breite/schmale Vorlagen; Konsolidierung anderer Seitentypen |
| Content | Pilotbegriffe, Namenslimit und Meldungen harmonisiert | Systemweites Glossar, Anrede, Formate und weitere Sprachen |
| Inklusion | Konkrete Prüfaufgaben; schmale Portaldarstellung begrenzt geprüft | Assistive Prüfung der tatsächlichen Umsetzung, Abhilfeweg |
| Plattformen | Originalstände der Implementierungsnachweise erhalten | Überprüfte native Abdeckung und tatsächliche Supportmatrix |
| Pflege | Versionierte Pakete, unveränderliche Importe, CMS-Seitenpins | Reale Rollen und fachliche Review-/Freigabeprozesse |
| Agentische Nutzung | Eigenständiger Export mit Leseskill, MCP-Inhaltsgleichheit und Artefaktzugriff geprüft | Unabhängig erprobter Agenten-Gestaltungsweg; strukturierter Fachstatus |

Keine Familie erhält allein aufgrund ihrer Seitenanzahl den Status vollständig. Der nächste fachliche Schritt ist BASE-03: vorhandene FIG-Ressourcen im Designwerkzeug verwenden und ihre tatsächliche Wiederverwendbarkeit dokumentieren. Danach folgen zusammenhängende Aufgabenentwürfe und Teamprobe. Die technische Integrität des Exports schliesst diese Lücken nicht.

### Ergebnis der anschliessenden Blockarbeit

Die oben als nächster Schritt genannten Ressourcen wurden inzwischen konkretisiert: vier Kompositionen in acht SVG-/FIG-Dateien, native Lese-/Änderungs-/Renderprüfung und veröffentlichte Downloads. Ein unabhängiger Agent hat den veröffentlichten Arbeitsweg angewendet; dabei gefundene Verlassens-/Fokuslücken wurden behoben und nachgeprüft. Der Erstaufbau auf vollständig neuer Datenbank ist ebenfalls getestet. [Gesammelter Umsetzungsstand](../team-readiness/README.md#ergebnisse-der-drei-arbeitsblöcke--20-november-2026).

Die Familienbewertung wird dadurch nicht pauschal vollständig: menschliche Teamprobe, vollständige Designbibliothek und tatsächliche Plattform-/Assistivnachweise stehen weiter aus. Die neuen Vorlagen sind statische editierbare Kompositionen, keine bereits implementierten Produktseiten.
