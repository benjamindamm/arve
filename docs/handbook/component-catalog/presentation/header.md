# Gemeinsamer Komponenten-Einstieg

Stand: 21.11.2026. Umgesetzt gegen Befund 2 des Designer-Roasts, ausschliesslich in der Präsentation.

## Änderung

- Der gemeinsame Seitenkopf beginnt mit Titel, unverändertem CMS-Nutzentext und einer knappen Kennzeichnung als Gestaltungsreferenz bzw. lokalem Beispiel. Er verspricht keine veröffentlichte Implementierung.
- Oben stehen Sprünge zu Beispiel, den vorhandenen CMS-Abschnitten für Varianten/Zustände und Nachweisen. Die Ziel-IDs der vorhandenen Abschnitte bleiben bestehen.
- Im gemeinsamen `ComponentHandbook` steht der vorhandene CMS-Beispielblock vor der Usage-Vertiefung. Das vollständige Inhaltsverzeichnis folgt nach dem Beispiel und beginnt geschlossen, auch auf Desktop.
- Contractstatus, Implementierungsstatus, Referenzgrenzen und die geschlossene Quellenvorschau stehen im unteren Bereich „Referenz und Nachweise“. Plattformstand, Revisionen, Downloads und technische Quellen bleiben separat erreichbar und inhaltlich erhalten.
- Grosszügiger Abstand, ruhige Hierarchie und ein kurzer Kopf auf 390 Pixeln; kein CMS-Inhalt, Snapshot, Contractpin oder Datenbankeintrag verändert.

## Tatsächlich geprüft

BrowserOS neo auf `http://127.0.0.1:3010`, eigene Tabs. Screenshots visuell angesehen:

| Seite | Ansicht / Befund |
| --- | --- |
| Combobox | 1440 × 1000 und 390 × 844: Kopf und konkretes Abholortbeispiel im ersten Bildschirm, kein technisches Statusband davor. |
| Input | 390 × 844: Kopf und Projektbeispiel im ersten Bildschirm. Sprung „Nachweise“ aktiviert und Quellenvorschau geöffnet; Status und Vorschau sichtbar. |
| Checkbox | 390 × 844: Exportbeispiel im ersten Bildschirm. Varianten-Sprung führt zum vorhandenen Abschnitt `abschnitt-auswahlzustande-statt-dekorativer-varianten`. |
| Label | 1440 × 1000: Kontaktbeispiel direkt nach dem Kopf und vollständig sichtbar. |
| Button | 1440 × 1000: gemeinsamer Kopf korrekt; beim Prüflauf war dessen eigener Renderer noch vor Integration des parallelen Button-Auftrags. |

Combobox-Inhaltsverzeichnis zunächst geschlossen beobachtet, geöffnet und anschliessend im frischen Browser-Auszug als erweitert mit Abschnittslinks bestätigt. Mobile Geräteemulation aufgehoben; eigene Prüftabs geschlossen.

`npm run typecheck`: erfolgreich, nach den letzten Quelltextänderungen erneut ausgeführt. Keine vollständige Laufzeitabnahme aller 69 URLs, keine allgemeine Accessibility- oder Plattformfreigabe.

## Integration

Der parallele Button-Auftrag setzt Beispielreihenfolge und `initiallyCollapsed` in seinem eigenen Renderer um. Visuelle Varianten-/Zustandsvergleiche sind nicht in diesem Auftrag importiert; deren Integration übernimmt der Hauptauftrag. Vorhandene CMS- und technische Inhalte bleiben die Quelle.

Geänderte Präsentationsdateien:

- `src/app/(docs)/systems/[system]/components/[component]/page.tsx`
- `src/docs/component-page.css`
- `src/docs/component-handbook.tsx`
- `src/docs/component-handbook.css`
