# Komponentenseiten in Arve

Der Button ist die verbindliche redaktionelle und visuelle Vorlage für weitere Komponentenseiten. Eine Seite hilft zuerst bei einer Entwurfsentscheidung: Passt die Komponente zur Aufgabe, wie wird sie eingesetzt, worauf muss ich achten? Technische Vertiefung folgt bei Bedarf.

Der zentrale Standard steht in `src/docs/component-standard.ts`. Er definiert die neun stabilen Abschnitts-IDs. Die Button-Release in `scripts/content/page-reworks/button.ts` liefert ihre Inhalte; `src/docs/page-reworks/button.tsx` und `button.css` zeigen die Darstellung. Die IDs bleiben auch bei geänderten Überschriften stabil.

| ID | Aufgabe | Herkunft |
| --- | --- | --- |
| `usage` | Einsatz und konkrete Alternative zeigen | UX-Zweck und Semantik; Empfehlungen als solche ausweisen |
| `example` | Eine bedienbare Erfahrung ermöglichen oder eine fehlende Demo klar benennen | Tatsächliche lokale Implementierung, keine API-Liste als Funktionsnachweis |
| `anatomy` | Teile und Zusammenspiel an einer Handlung erklären | Anatomie, HTML/ARIA, redaktionelles Beispiel |
| `variants` | Varianten und Grössen schnell vergleichen | CEM; visuelle Abdeckung separat aus CSS/Tokens/Stories |
| `states` | Verfügbarkeit, Aktivierung und anschliessenden Ablauf erklären | SCXML und Stories; Host-Aufgaben ausdrücklich trennen |
| `labels` | Konkrete gute und schlechte Beschriftung gegenüberstellen | Benennungsregeln und redaktionelle Empfehlungen |
| `keyboard` | Tastatur, Fokus und Namen erklären | HTML/ARIA-Regeln und gebundene Originalquellen |
| `semantics` | Kontextabhängige Einbindung und Verantwortung erklären | CEM, Originaltypen/-code und gebundene Dokumentation |
| `sources` | Referenz und Grenzen einordnen | Aktueller Export, eigenständiger Implementierungsstand |

Diese Abschnitte sind verbindlich; ihr Umfang ist es nicht. Bei einer Komponente ohne Beschriftung erklärt `labels` die passende Benennung oder deren Nichtanwendbarkeit. Fehlende Belege bleiben als konkrete Lücke sichtbar. Keine leeren Pflichtabsätze und keine erfundenen Fähigkeiten ergänzen. Die vorhandenen fünf Payload-Vorlagenfelder bleiben erhalten: `usage` deckt Einsatz ab; `anatomy` Aufbau und Varianten; `states` Zustände; `accessibility` Tastatur und Semantik; `verification` Implementierung und Prüfgrenzen. Die neun Inhaltsblöcke verfeinern diese vorhandene Gliederung ohne neue CMS-Felder.

## Gestaltung

Mit einer übersichtlichen Gegenüberstellung beginnen. Kurze Texte, grosszügige Abstände und ein Beispiel je Entscheidung verwenden. Listen eignen sich für API-Werte, visuelle Vergleiche für Hierarchie und Beschriftung. Technische Spezialfälle und Quellen einklappen. Alle wesentlichen Aussagen einer Illustration müssen auch im CMS-Inhalt stehen, damit dieselbe Regel über die Schnittstelle lesbar bleibt.

Statische Illustrationen früh als solche kennzeichnen. Sie dürfen keine Interaktion vortäuschen: in dieser Vorlage sind sie `span`-Elemente. Der bedienbare Spartan-Button bleibt davon getrennt. Illustrationsfarben und Masse sind redaktionell; sie belegen keine Pixelgleichheit mit Figma oder Contract-Tokens.

Den gemeinsamen Seitenrahmen nutzen: Status, Designvorschau, Plattformstand, Framework-Referenzen, Implementierungspin und technische Downloads dort belassen. Die eigene Abschnittsnavigation ergänzt die bestehenden Sprünge. Keine zweite Plattform- oder Downloadtabelle bauen.

## Quellenabgleich

`contract-alignment.json` ordnet Aussagen des Buttons konkreten Dateien, JSON-Pointern oder exakten Textausschnitten samt SHA-256 zu. `kind: contract` bedeutet quellengebundene Aussage; `editorial` eine begründete redaktionelle Empfehlung oder eigene Illustration; `demo` den begrenzten lokalen Bedienumfang. Ein Quellenverweis zu einer Empfehlung macht diese nicht automatisch zur Contractregel.

Pro neue Komponentenseite die ausdrücklich gewählte Bibliothek und aktuelle Exportrevision lesen. Vier Domänen getrennt behandeln: CEM für Schnittstelle, CSS/DTCG für Darstellung, SCXML für Verhalten, HTML/ARIA für Semantik. UX und Stories ergänzen den jeweiligen Umfang. API-Werte, statisch belegte Kombinationen und bedienbare Demooptionen sind drei verschiedene Nachweise.

Für Button bedeutet das: sechs React-Varianten und acht Grössen, 32 semantische Fixtures (sechs Varianten in je vier Darstellungen, sieben weitere Grössen und eine abgerundete Caller-Klasse), aber lokal nur Default/Outline plus disabled und Beispielaktivierung. React ist die Originalreferenz, Spartan die Angular-Referenz desselben Designs. Den historischen Implementierungspin unverändert lassen. `complete` bezeichnet hier den abgeschlossenen Quellenbezug; `release: false` bleibt bestehen. Weder eine statische Vorschau noch ein alter Browsernachweis nimmt eine neue Implementierung, native Plattformen oder jede Kombination ab.

## Übergabe und Prüfung

Vor Veröffentlichung Inhalt, Renderer und Quellenzuordnung gemeinsam prüfen. Die SHA-256-Werte identifizieren Quellen; sie prüfen kein Laufzeitverhalten. JSON-Pointer müssen auf existierende Stellen zeigen, Textausschnitte in der referenzierten Datei vorkommen. Bei Rendereränderungen seine lokalen Hashes in der Zuordnung aktualisieren. Nur tatsächlich ausgeführte Prüfungen protokollieren.

TypeScript prüft die Einbindung. Browserprüfung ergänzt breite und schmale Ansichten, Fokus, Sprunglinks, Aufklappen sowie den tatsächlich verfügbaren Demoablauf. Mobile Bedienung und assistive Technologien verlangen eigene Nachweise. Die Übernahme in Payload erfolgt mit geschütztem Inhaltsabgleich. Es werden keine neuen Datenbankfelder angelegt und keine Contractquellen verändert.

Der Prüfbefehl lautet `npm run check:component-template`. Er kontrolliert die neun Abschnitte, Quellenhashes und Referenzen sowie die Übereinstimmung des gespeicherten veröffentlichten Snapshots mit der Release. Vor der CMS-Übernahme kann `npm run check:component-template -- --source-only` die Quellen und Struktur allein prüfen. Der Pages-Workflow führt die vollständige Prüfung vor dem Build aus. Das belegt Struktur und nachvollziehbare Quellenbezüge, keine allgemeine fachliche oder assistive Abnahme.

Die API-Wertelisten im Button-Renderer werden über `src/docs/contract-options.ts` aus dem CEM der tatsächlich an die Seite gebundenen Revision gelesen. Designer pflegen die Erläuterungen im CMS; die technische Werteliste hat keine zweite manuell gepflegte Kopie.

Die führende Button-CSS-Datei importiert `tokens.css`; diese bindet `fonts.css` und dessen lokale Schriftdateien ein. Der Import ermittelt diese Abhängigkeiten aus den CSS-Referenzen. Portal, MCP und statischer Export liefern sie samt Pfad und Hash aus. Die Original-Figma-Belege bleiben getrennt davon erhalten.
