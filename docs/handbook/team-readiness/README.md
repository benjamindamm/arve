# Vom Referenzhandbuch zum arbeitsfähigen Gestaltungsstand

18.11.2026 · Konkrete Lückenliste für Arve/shadcn. Grundlage: [Inhaltsstandard 0.1](../content-standard/README.md). Drei Fachagenten prüften die vereinbarten Aufgaben unabhängig am vorhandenen Handbuch und an den Beispielen. Der Koordinator ergänzt gemeinsame Voraussetzungen und führt die Abhängigkeiten zusammen. Die Bestandsprüfung blieb zunächst unverändert; der anschliessende Umsetzungsstand ist unten getrennt dokumentiert. Kein Commit.

## Ziel und klare Grenze

Ein Team soll **Einträge finden → einen Eintrag verstehen → erstellen oder bearbeiten** für Web auf Desktop und in schmalen Ansichten selbstständig gestalten können. Dazu benötigt es geltende Pilotregeln, verwendbare Ressourcen und nachvollziehbare Aufgaben-/Zustandsvorlagen. Ein vollständiger Produktionsbackendbau ist dafür keine Voraussetzung. Native Apps, dauerhafte Entwurfsspeicherung, Massenaktionen und zusätzliche Komponenten kommen nur bei ausdrücklich bestätigtem Bedarf hinzu.

Bei der Bestandsprüfung war der gemeinsame neutrale Datenfall noch festzulegen. Im ersten Umsetzungsstand ist dafür ein Projekt mit ID, Name und Status definiert. Heute zeigt Finden/Detail Rechnungen, der Formularweg ein Projekt. Beide vorhandenen Referenzen sollen erhalten und gezielt verwendet werden. Sie dürfen nicht als bereits fertig zusammenhängendes Produkt ausgegeben werden.

## Ergebnis der Prüfung

**Es fehlt nicht hauptsächlich an weiteren Seiten.** Die vorhandenen Regeln sind teilweise gut und die Beispielsammlung enthält mehr Funktion als eine reine Galerie. Die entscheidenden Lücken sind:

1. Echte Pilotentscheidungen statt offener Beispielbedingungen.
2. Ein konsistenter visueller und versionierter Ressourcenstand.
3. Wiederverwendbare Zusammenstellungen statt nur einzeln beschriebener Controls.
4. Bearbeitungs- und Rückkehrregeln über Seitengrenzen hinweg.
5. Ein nachgewiesener Arbeitsweg für ein Team, das die Inhalte nicht selbst erstellt hat.

**Vorhandenes ausdrücklich anerkennen:** Suche/Statusfilter, Ergebniszahl, getrennte Leere-/Nulltreffer-/Fehlerzustände und ein expliziter kontexterhaltender Rücklink sind in der Rechnungsdemo vorhanden; Teile wurden in diesem Review bedient. Die Detaildokumentation enthält bereits Regions- und Anpassungsregeln. Der neue Formularbereich beschreibt acht Zustände, Meldungsvergleiche und konkrete Prüfaufträge. Vier `.fig`-Archive sind im Contractimport vorhanden. Ihre Wiederverwendbarkeit im Designwerkzeug wurde hier nicht getestet.

## Die Arbeitsliste

30 einzeln belegte Punkte bilden fünf gemeinsame Voraussetzungen und 25 aufgabenbezogene Punkte. Das sind keine 30 neuen Seiten oder Komponenten. Die Fachlisten nennen jeweils Typ, erforderliches Ergebnis, Beleg, Abhängigkeit, künftiges Abnahmeszenario und Pilot-/Erweiterungsrelevanz.

| Liste | Schwerpunkt | Umfang |
| --- | --- | --- |
| [Gemeinsame Voraussetzungen](shared.md) | Pilotumfang, visuelle Referenz, vorhandene Assets nutzbar übergeben, Verantwortung, unabhängiger Gestaltungstest | BASE-01–05 |
| [Einträge finden](find.md) | Suchauslösung, Kontext bei Rückkehr, Zustände, schmale Ergebnisse und übertragbare Aufgabenreferenz | FIND-01–08 |
| [Eintrag verstehen](detail.md) | Identität/Informationspflicht, Aktionen, Ausnahmen, Regionsverhalten und vollständige Detailvorlage | DETAIL-01–08 |
| [Erstellen und bearbeiten](edit.md) | Feldbedingungen, Validierung, Feld-/Feedbackkomposition, Ausgangswert, Änderungen, Abbruch und Formularlayout | EDIT-01–09 |

**D – Dokumentation:** Eine vorhandene Regel/Ressource gezielt erklären oder verknüpfen. **E – Entscheidung:** Ein tatsächlicher Spielraum muss fachlich entschieden oder bewusst begrenzt werden. **B – Baustein/Ressource:** Eine benötigte Zusammenstellung bereitstellen oder die Nutzbarkeit vorhandener Ressourcen nachweisen. B bedeutet nicht automatisch, dass die zugrundeliegende Bibliothek das Feature nicht besitzt.

Priorität und Arbeitsfähigkeit getrennt lesen: P0 bezeichnet eine unmittelbar zu entscheidende Grundlage, P1 kann dennoch vor Übergabe erforderlich sein. Entscheidend ist das ausdrücklich genannte Abnahmekriterium. Bedingte Erweiterungen werden nicht allein durch ihre Erwähnung zu Pilotpflichten.

## Fünf umsetzbare Arbeitspakete

| Reihenfolge | Arbeitspaket und konkretes Ergebnis | Führende Punkte | Abnahme |
| --- | --- | --- | --- |
| 1 | **Pilotregeln entscheiden:** gemeinsamer Datenfall, visuelle Referenz, Such-/Feld-/Statusbedingungen, Rückkehr und Bearbeiten in einem knappen Entscheidungsregister | BASE-01/02/04; FIND-01/02/07; DETAIL-01–04; EDIT-01/02/05/06/07 | Zwei Personen gelangen bei denselben Situationen zu denselben Entscheidungen oder erkennen ausdrücklich erlaubten Spielraum. |
| 2, parallel | **Bestehende Ressourcen nutzbar machen:** `.fig`-Import/Varianten prüfen, gültigen Stand benennen, Referenzkette zu Handbuch/Contracts klären | BASE-03; EDIT-08 | Eine unabhängige Person findet und verwendet die Ressourcen ohne interne Pfadkenntnisse. Bestehendes vor Neubau prüfen. |
| 3 | **Finden und Detail zusammenführen:** eine zusammenhängende Aufgabenreferenz mit breiter/schmaler Anordnung, Zuständen und Rückweg | FIND-03–06/08; DETAIL-05–07 | Derselbe Datensatz ist auffindbar, identifizierbar und erreichbar; leere/fehlende Inhalte und lange Texte haben erklärte Varianten. |
| 4 | **Erstellen und Bearbeiten zusammensetzen:** Feld mit Label/Hilfe/Fehler, Vorgangsrückmeldung, gegebenenfalls Fehlerübersicht, Speichern/Abbruch und Rückkehr zum Detail | EDIT-03/04/09; Entscheidungen aus EDIT-05–07 | Ausgangswert, lokale Änderung und bestätigter Stand bleiben unterscheidbar; Korrektur- und Abbruchwege sind vollständig gestaltbar. |
| 5 | **Teamprobe durchführen:** eine zweite Person gestaltet den Gesamtweg anhand des Handbuchs und der Ressourcen | BASE-05 | Keine kritische Entscheidung benötigt mündliches Zusatzwissen. Rückfragen sind erfasst und D/E/B zugeordnet; offene technische Nachweise bleiben sichtbar. |

Pakete 3 und 4 müssen denselben Objekt-/Aktions-/Rückkehrvertrag verwenden. Sonst entstehen erneut gute Einzelseiten ohne nutzbaren Gesamtweg. BASE-04 benennt Rollen für Entscheidungen, weist aber in diesem Dokument keinem realen Team ungefragt Arbeit zu.

## Was ausdrücklich später bleiben darf

Sofern nicht im Pilotprofil benötigt: native iOS-/Android-Varianten, weitere Themes/Marken, umfangreiche Chartregeln, Multi-Step-Formulare, dauerhafte Entwürfe, komplexe Rollenmodelle, Bulkaktionen, Paginierung, Verlauf und verwandte Objektansichten. Die Scopeentscheidung erfolgt früh; die Umsetzung dieser Erweiterungen darf warten. Die Basis für tatsächlich genutzte Sprache und Zugänglichkeit bleibt Teil des Piloten.

## Wann können wir sagen: Ein Team kann damit gestalten?

Die verantworteten Pilotentscheidungen sind auffindbar. Die erforderlichen Ressourcen lassen sich tatsächlich verwenden. Eine unabhängige Person kann mit denselben Vorgaben:

- den Listen-/Detail-/Bearbeitungsweg in breiter und schmaler Darstellung gestalten;
- die für diesen Umfang relevanten Zustände und langen/fehlenden Inhalte zeigen;
- benennen, welche Regeln gelten, welche Annahmen offen sind und woher der Stand stammt;
- jedes benötigte Muster bis zur passenden Quelle und Grenze zurückverfolgen.

Eine statische Gestaltung belegt keine Tastatur-/Screenreaderfunktion. Für behauptete interaktive Fähigkeiten braucht es ergänzende Laufzeitnachweise. Genau diese Trennung erlaubt eine ehrliche Gestaltungsfreigabe, ohne einen Produktionsnachweis vorzutäuschen.

## Ausgeführte Prüfungen und Grenzen

Fachagenten lasen die veröffentlichten Such-, Detail-, Formular-, Content- und Inklusionsseiten und gezielt lokale Quellen. FIND prüfte Suche/Filter, explizite Detailrückkehr, Nulltreffer, Erstleere und simulierten Fehler in der vorhandenen Demo. DETAIL prüfte zusätzlich einen Rücklink und die kurze Layoutdemo bei 390 × 844 CSS-Pixeln. EDIT las die neuen Fachseiten und begrenzte Input-/Demo-/Contractquellen; keine neue Formularfunktion getestet. Die Einzellisten dokumentieren die genauen Grenzen.

Der Koordinator sichtete Grundlagen-/Bibliotheksreferenzen, die vier `.fig`-Archive als ZIP-Verzeichnisse und die übergreifende Zuordnung. Kein Importtest im Designwerkzeug, kein unabhängiger Gestaltungstest, kein Produktionsdiensttest, keine assistive Gesamtabnahme. Die beschriebenen Abnahmeszenarien sind künftige Prüfarbeit. App, CMS und Contractdateien wurden nicht verändert.

## Umsetzungsstand · Pilotregeln 0.1 · 18.11.2026

Im lokalen CMS veröffentlicht: neuer Einstieg **Mit dem Handbuch gestalten** unter `/systems/shadcn/gestaltungs-pilot`; aktualisierte Such-, Detail-, Formular- und Content-Design-Seiten. Die drei Fachagenten haben die Arbeitswege getrennt konkretisiert, anschliessend wurden Datenmodell, Rückwege, Aktionsnamen und schmale Anordnung abgeglichen.

Entschieden sind Projektumfang, erforderlicher Name mit 1–80 Graphemclustern nach Randtrim, gleiche Namen, Aktiv/Archiviert, lokale Suche bis 50 vollständige Einträge, URL-Kontext, Bearbeiten/Abbruch und die Grenze bei unbekanntem Speicherausgang. Eine lokale helle visuelle Referenz legt Farben, Schriftrollen, Abstände und Anordnung fest. Die Werte ändern weder bestehende Contractdateien noch behaupten sie eine Unternehmensfreigabe.

**Paket 1 ist inhaltlich umgesetzt; seine unabhängige Abnahme steht aus.** BASE-01 und die zugehörigen fachlichen E-Punkte haben jetzt konkrete lokale Entscheidungen. BASE-02 besitzt einen benannten Entwurfsstand, noch keinen geprüften Ressourcen-/Umsetzungsstand. BASE-04 benennt benötigte Rollen, keine tatsächlich zugewiesenen Verantwortlichen. Pakete 2–5 bleiben offen: Designressourcen verwenden, breite/schmale Aufgabenentwürfe zusammenstellen und eine unabhängige Teamprobe durchführen. Die annotierten Abläufe unterstützen Pakete 3/4, ersetzen keine verwendbare Designvorlage.

Reproduzierbarer Import: `node --env-file=.env --import tsx scripts/apply-pilot-release.ts` zeigt die Vorschau; `--publish` veröffentlicht transaktional. Der Import prüft Baselines und schützt spätere redaktionelle Änderungen. Er deaktiviert Schema-Push, leert nur die Vorlagenfelder der betroffenen Seiten und prüft andere Seiten, Implementierungen und bestehende Contract-/Demo-Verweise auf Unverändertheit.

Prüfungen dieses Umsetzungsstands: TypeScript erfolgreich; transaktionale Rückleseprüfung erfolgreich; alle fünf Seiten zwischen Releasequelle, CMS und MCP identisch; Metadaten, Hierarchie, leere Vorlagenfelder, 15 interne Links und Pilotsuche geprüft. Browserprüfung aller fünf Seiten bei 390 px ohne horizontalen Dokumentüberlauf; Einstieg zusätzlich breit und Ablaufdarstellung schmal visuell geprüft. Kein Designwerkzeug-Import, keine unabhängige Teamprobe und keine assistive Funktionsprüfung.

## Technischer Zwischenstand · Prüfung vom 20. November 2026

Ausgeführt und erfolgreich: Produktionsbuild inklusive TypeScript; 5 Importtests; veröffentlichte vier Komponenten gegen den portablen Export über MCP verglichen; alle 77 komponentenbezogenen Dateilinks inklusive Binärdateien gegen SHA-256 geprüft; fünf Pilotseiten zwischen Releasequelle, CMS und MCP abgeglichen, inklusive Hierarchie, 15 Links und Suche. Im Exportrepository bestehen nach Wiederherstellung der ursprünglichen eingefrorenen Quelle alle 58 Bibliothekstests mit der gepinnten Toolchain.

Für Git vorgesehen: Arve-Anwendung, Contentquellen, Import-/Prüfskripte, portable importierte Revision samt Skills sowie ältere weiterhin referenzierte Revisionen. Laufzeitdateien, Zugangsdaten, lokale Medienablage und Abhängigkeiten bleiben ausgeschlossen. Ein Git-Push überträgt keine Payload-Datenbank: die aktuellen Veröffentlichungen liegen lokal in PostgreSQL. Der vollständige Neuaufbau auf leerer Datenbank und eine Produktionsmigration sind in diesem Durchgang nicht getestet. Die bisherigen Veröffentlichungs-Skripte prüfen teilweise konkrete Bestands-IDs und Änderungsstände; sie sind kein nachgewiesener universeller Erstimport.

Dieser Stand ist technisch als Zwischenstand sicherbar, keine vollständige fachliche oder betriebliche Releasefreigabe. Der gesamte angesammelte Diff enthält auch frühere Arbeiten und separate Plattformhosts; diese wurden nicht pauschal durch die genannten Prüfungen abgenommen. Kein Commit oder Push ausgeführt. Aktueller Themenstatus: [Fortschreibung des Inhaltsabgleichs](../content-standard/assessment-shadcn.md#fortschreibung--20-november-2026).

## Ergebnisse der drei Arbeitsblöcke · 20. November 2026

1. **Ressourcen und Vorlagen:** Vier zusammenhängende Kompositionen (breite/schmale Hauptfolge, breite/schmale Zustandsübersicht) jeweils als SVG und native FIG. Acht Dateien sind auf der veröffentlichten Pilotseite und über MCP erreichbar; alle Downloadhashes geprüft. Die vier importierten Quell-FIGs wurden mit OpenPencil gelesen; eine separate Input-Kopie wurde geändert und gerendert. Neue FIGs wurden streng auf Schriftverfügbarkeit gerendert. [Ressourcen und genaue Grenzen](../design-resources/README.md). BASE-03 ist damit begrenzt technisch belegt, nicht als unabhängige grafische Werkzeugabnahme abgeschlossen.
2. **Unabhängige Probe:** Ein separater Agent leitete ohne interne Inhaltsquellen einen breiten/schmalen Entwurf aus sieben öffentlichen Seiten ab. Die Probe fand fehlende Priorität beim Verlassen nach unbekanntem Speicherstand sowie Fokusdetails. Die Korrekturen sind auf Such-, Detail- und Formularseite veröffentlicht und unabhängig nachgelesen. [Erstpass und Nachprüfung](../independent-trial/README.md). Dies ist eine Agentenprobe, keine menschliche Team- oder Assistivprüfung.
3. **Erstaufbau:** Ein öffentlicher Snapshot mit 35 Seiten und einer Implementierung lässt sich in eine vollständig neue Datenbank importieren. Frischer Erstimport, No-op-Wiederholung, Beziehungen, Fremdsystemerhalt und Schutz redaktioneller Entwürfe sind geprüft. [Bootstrap und Prüfprotokoll](../bootstrap/README.md). Der frühere offene Neuaufbaupunkt ist für diesen begrenzten Stand erledigt; Produktionsmigrationen bleiben separat.

Die historische Anforderungsliste bleibt erhalten. Pakete 3/4 haben nun konkrete editierbare Kompositionen; Paket 5 ist durch eine Agentenprobe teilweise bearbeitet. Weiterhin offen: tatsächliche menschliche Teamprobe im Zielwerkzeug, Auto-Layout-/Variantenbibliothek falls benötigt, reale Assistiv-/Zoom-/Touchprüfung und technische Statusklärung bei unbekannter Speicherung. Es gibt weiterhin keine ausführbare Projektanwendung und keine allgemeine Freigabe.

Abschliessende Integrationsprüfung: Produktionsbuild inklusive TypeScript erfolgreich; acht Portal-/MCP-Ressourcenlinks gegen Manifesthashes geprüft; Suche findet die Ressourcen; unbekannte Ressourcen werden abgelehnt. Downloadliste bei 390 px visuell geprüft, acht Links vorhanden, kein horizontaler Dokumentüberlauf. Fünf präzisierte Pilotseiten stimmen weiterhin zwischen Releasequelle, CMS und MCP überein.
