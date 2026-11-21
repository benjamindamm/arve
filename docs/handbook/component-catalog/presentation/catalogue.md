# Katalog: Aufgaben zuerst

Stand: 21.11.2026. Präsentationsänderung zu Roast-Befund 3; direkte Hilfs-/Alternativlinks zu Befund 4. Keine DB-, Snapshot- oder Contractänderung.

## Umsetzung

- Suche steht unmittelbar am Anfang: Aufgabenbegriffe statt erforderlichem Komponentenwissen. Kuratierte deutsche Synonyme für alle 69 vorhandenen shadcn-Familien. „Land“ findet Combobox, Native Select und Select.
- Sechs Aufgabenbereiche, darunter kompakte aufklappbare Gruppen mit Anzahl und Beispielnamen. Mobil keine automatisch ausgeschüttete Liste aller 69 Beschreibungen. Eine gewählte Aufgabe öffnet die passenden Einträge.
- Bei eingegebener Suche weichen die Aufgabenknöpfe den Ergebnissen; Treffer folgen unmittelbar auf das Suchfeld. Das Bearbeiten der Suche setzt einen vorherigen Aufgabenfilter zurück und verhindert versteckte Filterung.
- Kurze Einsatzentscheidung und schematische SVG-Miniatur pro Eintrag. Miniaturen sind ausdrücklich Orientierung, kein Nachweis von Implementierung oder Verfügbarkeit. Die veröffentlichten Entry-URLs bleiben die Ziele.
- Landesauswahl direkt mit Combobox, Select, Native Select und dem bestehenden lokalen Auswahlvergleich verbunden. Bestehende Auswahlhilfe ist ebenfalls oben erreichbar.
- Nulltreffer nennen konkrete Suchbegriffe, bieten Zurücksetzen/Auswahlhilfe an und öffnen per Knopf die vorhandene Kapitelsuche. Die Kapitelsuche wird nur angeboten, wenn deren vorhandener Auslöser im Seitenrahmen existiert.
- `catalogueMeta({slug,path,summary})` und `searchCatalogue(entries,query)` in `src/docs/component-catalogue-data.ts` sind reine Helfer. shadcn-Kuration greift ausschliesslich unter `/systems/shadcn/components/`; andere Systeme und unbekannte Einträge behalten Originalzusammenfassung und neutrale Zuordnung.

## Ausgeführte Prüfungen

- `npm run typecheck`: erfolgreich.
- `node --import tsx --test src/docs/component-catalogue-data.test.ts`: 3 Tests bestanden. Alle 69 Namen eindeutig und Aufgaben zugewiesen; leere Suche liefert alle 69; Aufgaben Land, Datei, Fehler, Datum, Auswahl, Zahlungen und Umlautnormalisierung liefern erwartete Komponenten. Nulltreffer, unbekannter Eintrag und gleichnamiger Eintrag eines anderen Systems geprüft.
- BrowserOS neo, eigener Tab, Live-Seite auf Port 3010. Desktop 1440 × 1000 und mobile Emulation 390 × 844. Suche „Land“: 3 von 69, knappe bebilderte Treffer; mobile Darstellung vor/nach Scrollen visuell angesehen. Den Combobox-Treffer geöffnet, lokale Combobox-Seite erreicht.
- Mobil Nulltreffer „unfindbarxzy“ ausgelöst; Knopf „Auch Kapitel und Patterns durchsuchen“ öffnet den existierenden Dialog „Kapitel im Handbuch“. Escape schliesst ihn. Suche geleert und Aufgabenknopf „Werte auswählen“ aktiviert: 10 Komponenten mit Original-URLs.

## Integration und Grenzen

Statischer Build und `/arve`-Endprüfung erfolgen gesammelt durch den Root-Agenten. Keine eigene Behauptung erfolgreicher statischer Abnahme. Keine generelle Tastatur-/Screenreader-Abnahme. Die Miniaturen zeigen Typen, nicht jede Variante. Die lokale Komponenten-Auswahlhilfe und das Auswahlpattern selbst wurden nicht verändert; deren redaktionelle Querverlinkung bleibt im Aufgabenbereich der anderen Bearbeitung. Für eine Agenten-API kann Root die exportierte `catalogueMeta`-Funktion verwenden; zusätzliche CMS-Felder sind dafür nicht nötig.
