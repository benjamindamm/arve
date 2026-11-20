# Gestaltungsvorlagen · Projekte

**Arve / shadcn · Ressourcenstand 0.1.0 · 20.11.2026.** Ein zusammenhängender Pilot für Finden → Verstehen → Bearbeiten, mit Erstellen als Abzweig. [Visuellen Katalog öffnen](index.html) · [maschinenlesbares Dateiverzeichnis](manifest.json).

| Aufgabe | Breit | Schmal |
| --- | --- | --- |
| Gesamtfolge, vier kopierbare Ansichten | [SVG](ablauf-breit.svg) · [FIG](ablauf-breit.fig) | [SVG](ablauf-schmal.svg) · [FIG](ablauf-schmal.fig) |
| 25 Zustands-/Inhaltsvarianten | [SVG](zustaende-breit.svg) · [FIG](zustaende-breit.fig) | [SVG](zustaende-schmal.svg) · [FIG](zustaende-schmal.fig) |

Die breiten Hauptansichten sind 1280 px breit, die schmalen 352 px mit 320 px Inhalt. Breite Zustandsfragmente sind 704 px breit mit 640 px Inhalt. Der Atlas ist eine Sammlung kopierbarer Regionen; seine Gesamtbreite ist keine Produktviewport-Vorgabe. Die FIG enthält echte Frames, Texte und Rechtecke; keine eingebetteten Screenshots. SVG enthält echte Texte und Gruppen. **Inter muss im Zielwerkzeug verfügbar sein.** Es werden weder externe Schriftserver noch andere externe Assets geladen. PNGs unter [evidence](evidence/) zeigen das Rendering mit Inter, ersetzen aber keine editierbare Vorlage.

## In einer Gestaltung verwenden

1. Die passende Gesamtfolge als FIG in OpenPencil öffnen; alternativ SVG in einem Vektoreditor öffnen. Native FIG-Dateilesung und Rendering sind geprüft, grafischer UI-Import und andere Editoren nicht. Erforderliche Schrift Inter vor der Übergabe verfügbar machen; keine stille Ersatzschrift als Freigabe behandeln.
2. Den Frame `finden`, `detail`, `bearbeiten` oder `erstellen` duplizieren. Name und ID im kopierten Entwurf ändern; dasselbe Projekt in allen Schritten verwenden. Der Atlas verwendet stabile Gruppenbezeichnungen wie `leer-fehler`, `unbekannt` und `verwerfen`.
3. Die benötigte Zustandsregion aus dem Atlas kopieren. Texte bleiben Texte; Fehler, Fokus, Hilfe und Aktionen sind getrennte Formen. Die Ebene «Entwurfsnotiz» erläutert die Regel und gehört **nicht** in die spätere Produktoberfläche.
4. Zum Beispiel P-101 «Alpen» finden und auf «Bergblick» ändern. ID P-101, Status Aktiv und Suchkriterien q=ALP/status=all beibehalten. Nach bestätigtem Speichern steht «Bergblick» im Detail; bei Listenrückkehr fehlt P-101 in den Treffern. Die Ergebnisüberschrift erhält Fokus und erklärt das Fehlen.
5. Statisch breite und schmale Komposition prüfen. Diese Dateien besitzen **kein Auto-Layout**, keine interaktiven Variantenbindungen und keine responsive Laufzeit. Bei Textänderung müssen Formen und Folgeabstände angepasst werden. Die langen Formularwerte sind für die Prüfung vollständig als Textzeilen sichtbar; daraus folgt keine neue mehrzeilige Input-Semantik.

Für bearbeitbare Rechtecke und Text ist damit ein portabler Arbeitsweg vorhanden; die unabhängige Teamprobe bleibt ausdrücklich offen. Die Vorlagen sind keine neue Beispielanwendung und ändern keine Contracts.

## Zustände und verbindende Regeln

| Bereich | Im Atlas dargestellt | Im Arbeitsweg zu prüfen |
| --- | --- | --- |
| Finden | Nulltreffer, Erstleere, Bereitstellung, Ladefehler, ungültiger Status, Rückkehr ohne Ausgangstreffer | Sofortige lokale Suche nach Name/ID, AND mit Status, höchstens 50 vollständige Projekte; q/status erhalten. |
| Detail | Laden, bestätigtes Fehlen, unvollständige Pflichtangaben, Archiviert, 80-Zeichen-Name und lange ID | Nur Aktiv bearbeitbar; Name/ID/Status vollständig; keine erfundenen Zusatzdaten oder Aktionen. |
| Bearbeiten | Leer-/Überlängenfehler mit Fokus, korrigiert, unverändert, geändert, laufend, bestätigt nicht angenommen, unbekannt | 1–80 Graphemcluster nach Randtrim; erstes Prüfen beim Absenden, danach Fehlerkorrektur beim Blur. Gleiche Namen erlaubt. |
| Erstellen | Leerer Ausgang in Gesamtfolge; laufend und unbekannt im Atlas; bestätigtes Detail mit neuer ID | Neue ID vom System, Status Aktiv. Feld-/Ablehnungsvarianten aus Bearbeiten mit Erstelltext verwenden. |
| Abschluss und Verlassen | Bestätigte Änderung, bestätigte Erstellung, Dirty-Verwerfen, Verlassen bei ungeklärtem Vorgang | Kein Retry/Verwerfen bei unbekanntem Ausgang. Statusklärung ist noch fehlende Integration, keine bedienbare Funktion. |

Bei unbekanntem Speicherausgang gilt die priorisierte Verlassensnachfrage: «Speicherstand ungeklärt. Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden.» «Auf der Seite bleiben» erhält den anfänglichen Fokus. Erst danach «Seite verlassen». Dies gilt auch für Browser-Zurück innerhalb der Anwendung; kein Reload-/Schliessen-Schutz versprochen. Diese Präzisierung stammt aus der koordinierten Pilotprüfung vom 20.11.2026.

Nach Navigation zu Detail oder Formular geht Fokus zum Seitentitel, nach bestätigtem Speichern/Abbrechen/Verwerfen zum Detailtitel. Bei Liste gilt der ID-bezogene Rückkehrvertrag. Diese Notizen sind Gestaltungsvorgaben, keine ausgeführte Tastatur- oder Screenreaderprüfung.

## Herkunft

Führend sind [Pilotübersicht](../../../scripts/content/pilot-overview-release.ts), [Finden](../../../scripts/content/pilot-find-release.ts), [Detail](../../../scripts/content/pilot-detail-release.ts) und [Bearbeiten](../../../scripts/content/pilot-edit-release.ts), lokale Regeln 0.1 vom 18.11.2026 samt koordinierter Präzisierung vom 20.11.2026. Aufgabenlücken: [gemeinsame Voraussetzungen](../team-readiness/shared.md). Helle Flächen, Inter, 32/40-Titel, 14/20-Hilfe, 44-px-Mindestkontrollen, 8-px-Radius und Raumskala stammen aus der lokalen Pilotübersicht; keine unveränderten shadcn-Defaults behauptet.

Vorhandene Quellen zuerst geprüft: [portabler Contractexport](../../../src/contracts/libraries/shadcn/65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26/package/manifest.json), dessen Bibliotheksindex und Leseskill. Alle vier Quell-FIGs sind vorhanden und nativ lesbar. Sie sind Komponentenstudien, keine vollständigen Aufgabenkompositionen. Deshalb ergänzt diese Ressource die fehlenden Zusammenstellungen; die Quell-FIGs bleiben unverändert und die Contractbibliothek bleibt `draft`.

## Tatsächlich ausgeführte Prüfungen

- OpenPencil CLI **0.16.0** liest Button, Input, Checkbox und Switch nativ; Knoten-/Schriftinventar unter [source-fig-info.json](evidence/source-fig-info.json).
- Im Input wurde «Beispielprojekt» in einer separaten [FIG-Kopie](evidence/input-edited.fig) zu «Alpen · Wiederverwendung geprüft» geändert; [Rückleseergebnis](evidence/input-edit.json) und [neu gerendertes Bild](evidence/input-edited.png) zeigen die Änderung. Original unverändert. Das ist ein begrenzter Nachweis nativer Textbearbeitbarkeit, kein vollständiger Variantenimporttest.
- Alle vier Pilot-FIGs erzeugt, nativ wieder eingelesen und mit `--font-policy strict` als PNG gerendert. Kein gemeldeter Fontfehler. Texte gegen ihre Framegrenzen geprüft: [keine Überläufe in dieser Prüfung](evidence/text-bounds.json). Hauptfolge breit/schmal, schmaler Zustandsatlas und bearbeitete Input-Kopie visuell gesichtet. Unnötige breite Buttonumbrüche dabei korrigiert und erneut gerendert. Weitere unabhängige Sichtprüfung erfolgt im koordinierten Review.
- Acht Download-Dateien sind im Manifest mit SHA-256 adressiert; alle acht Dateihashes gegen die vorhandenen Dateien geprüft und alle vier SVGs als XML eingelesen. SVG ist XML, ohne externe Assets; eine Ersatzschrift im Browser bleibt möglich, wenn Inter fehlt.
- OpenPencil-Weboberfläche im eigenen BrowserOS-Tab aufgerufen: Zertifikatsfehler `NET::ERR_CERT_AUTHORITY_INVALID`. Warnung nicht umgangen. Deshalb **kein grafischer Importtest**, sondern der oben beschriebene native CLI-Lese-/Änderungs-/Rendernachweis.

Offen bleiben unabhängige Verwendung im Zielwerkzeug, vollständige Varianten-/Auto-Layout-Prüfung der ursprünglichen FIGs, Zoom/Textvergrösserung, Bildschirmtastatur, echte Fokus-/Scroll-/Screenreaderfunktion, Backend und Statusklärung. Vorlagenstatus: nutzbarer lokaler Gestaltungsentwurf, keine allgemeine oder betriebliche Freigabe.

## Reproduzieren

`python3 scripts/build-pilot-templates.py` erzeugt SVG und Layoutdaten ohne Netzwerk. `OPENPENCIL_CLI=/pfad/zur/gepinnten/openpencil node scripts/build-pilot-templates.mjs` erzeugt native FIG und aktualisiert die acht Hashes im Manifest. Die Toolchain wird separat bereitgestellt; sie wird nicht mit den Vorlagen ausgeliefert. Nach jedem Neubau müssen Rendering und Hashprüfung wiederholt werden. Der SVG-Schritt allein ersetzt noch keine FIG-Neuerzeugung.
