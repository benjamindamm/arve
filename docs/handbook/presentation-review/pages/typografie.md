# Typografie · 20. November 2026

Nur `/systems/shadcn/typografie`. Der öffentliche Ausgangsstand wurde mit BrowserOS neo gelesen und in der initialen Ansicht angesehen: Titel, Einleitung und Inhaltsverzeichnis verbrauchen den ersten Bildschirm, die Studie folgt darunter. Relevante Reviewbefunde: Anschauungsobjekt zu spät, Erklärung und UI vermischt, Nachweisgrenzen als langer Lesepfad.

Die neue Darstellung beginnt mit einem realistischen Kontaktbeispiel. Schalter erlauben lange Texte, erhöhte Textabstände, 200 % lokale Textgrösse und Systemschrift. Danach folgen vier Schriftrollen, drei konkrete Entwurfsregeln und ausgerichtete Beträge. Kein Beispielwert wird als globale Typografieskala ausgegeben. Alle fachlichen Texte, Beispielinhalte und Schaltertexte stammen aus CMS-Blöcken. Die bisherigen sieben Blöcke bleiben unverändert unter einer aufklappbaren Herleitung; Originalstudien bleiben unberührt.

Breit: Lesetext auf 68ch begrenzt, Rollenerklärung zweispaltig. Unter 42rem: Rollen einspaltig und Schalter untereinander. Text wächst ohne feste Höhen, Ellipsen oder Abschneiden. Die 200%-Probe ist ausdrücklich kein Browserzoomnachweis; die Systemschriftprobe belegt keine ausgefallene Schriftladung.

Tatsächliche Checks:
- `npm run typecheck`: erfolgreich.
- Read-only MCP: aktueller Seiteninhalt und `updatedAt` gelesen.
- Read-only Payload-Vorschau mit `push:false`: 14 Blöcke, Versionsschutz erfolgreich; keine Veröffentlichung.
- Automatischer Tiefenvergleich: alle sieben ursprünglichen CMS-Blöcke unverändert erhalten, generierte IDs und leere optionale Felder ausgenommen.

Root hat Renderer und CMS-Fassung integriert und veröffentlicht. Anschliessende BrowserOS-neo-Prüfung:
- 1440 × 1000 CSS-Pixel: Beispiel im ersten Bildschirm, Schriftrollen und Bedienelemente sichtbar; alle vier Textproben eingeschaltet und ihre Wirkung bestätigt.
- 390 × 844 CSS-Pixel: Standardbeispiel und kombinierte Langtext-/Abstands-/200%-/Systemschriftprobe visuell angesehen. Schalter stehen untereinander, Rollen umbrechen einspaltig. Sehr lange Wörter umbrechen bei Bedarf innerhalb des Wortes; Inhalt bleibt erreichbar.
- Gemessene Breiten mit allen vier Proben: Desktop Seitenbreite 1440, Beispiel `clientWidth = scrollWidth = 1024`; schmal Seitenbreite 390, Beispiel `clientWidth = scrollWidth = 348`. In diesen Situationen kein horizontaler Überlauf.
- Ein-/Ausschalten aller vier Proben über die sichtbaren Checkboxen bestätigt; 200%-Probe ergibt 32 px, Systemschrift `system-ui, sans-serif`, erhöhter Zeichenabstand 3,84 px.
- Quellenvertiefung geöffnet: ursprüngliche Überschriften und vier Quellen-/Nachbarlinks im zugänglichen Baum vorhanden.

Keine allgemeine Barrierefreiheits- oder Schriftfreigabe. Browserzoom, Screenreaderbedienung und tatsächlicher Ausfall einer Webschrift wurden nicht geprüft.
