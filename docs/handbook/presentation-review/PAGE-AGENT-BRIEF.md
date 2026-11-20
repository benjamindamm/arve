# Auftrag pro Seite

Nur die zugewiesene Seite bearbeiten. Öffentlichen Stand zuerst im Browser anschauen. Nutzer: Designer und UX-Team; Ziel: schnell entscheiden und gestalten. shadcn ist unsere Referenzimplementierung. Keine Herkunftsfirma nennen. Keine Freigabe, Tokens oder Fähigkeiten erfinden.

Ergebnis: Beispiel zuerst, höchstens ein kurzer Nutzensatz davor; wenige konkrete Regeln; Varianten/Zustände an Beispielen; Quellen/Prüfgrenzen aufklappbar. Lange Projektverträge bei Bedarf als Details erhalten statt löschen. Keine Fülltexte für Strukturseiten. Hauptinhalt im CMS, Portal/MCP gleiche Informationen. Neue Page layouts benötigen echtes CSS-Beispiel mit klaren breiten/schmalen Regeln. Nur diese Seite, keine automatische Folgeaufgabe.

Schreibgrenze:
- src/docs/page-reworks/<slug>.tsx und optional .css: export default React-Komponente mit Props {content: Page['content']}; fachliche Texte aus CMScontent lesen (keine zweite fest codierte Regelquelle).
- scripts/content/page-reworks/<slug>.ts: export const release = {expectedUpdatedAt, title? , summary, content}; Page-Typ nutzen, read-only aktuellen CMS-Stand push:false lesen. Domänenquellen und unveränderte Originalstudien gezielt nutzen.
- docs/handbook/presentation-review/pages/<slug>.md: kurze Änderung und tatsächliche Checks.

Keine gemeinsame Route/Registry/global CSS/Schema ändern. Keine CMS-Schreibzugriffe: Root veröffentlicht seriell mit scripts/apply-page-rework.ts <slug> --publish und bindet Renderer ein. Keine anderen Agenten/Commit/Push. Erst konkreten Befund melden, dann vollständige reviewbare Umsetzung abliefern. Typecheck nach eigenem Stand. Browserprüfung nach Root-Veröffentlichung kann Follow-up erfolgen. Root liefert MCP-Endpunkt localhost3010/mcp, aktuelle Daten über SDK oder Payloadread-only. BrowserOS neo Skill verwenden und eigene Tabs.

## Browserprüfung nach Veröffentlichung

BrowserOS neo run unterstützt page.cdp. Tatsächliche schmale Ansicht: `await p.cdp('Emulation.setDeviceMetricsOverride', JSON.stringify({width:390,height:844,deviceScaleFactor:1,mobile:false}))`, dann im selben run `await p.cdp('Page.captureScreenshot', JSON.stringify({format:'png'}))`. Base64 aus structuredContent.value.data mit functions image als data:image/png;base64 ausgeben und anschauen, nicht als Text drucken. Granular screenshot kann Viewport zurücksetzen. Danach `Emulation.clearDeviceMetricsOverride` mit '{}'. Desktop entsprechend 1440×1000. Keine Seitenskripte für DOMlesen nötig; snapshot/read nutzen. Eigene Darstellungsfehler während QA unmittelbar reparieren, keine erneute Freigabe nötig. Nur die eigene Seite ändern. Berichte enthalten den begrenzten tatsächlich ausgeführten Nachweis.

Wichtig: `handbook-snapshot.json` wird während der Schleife neu exportiert. Er ist KEINE unveränderliche Quelle für alte Inhaltsblöcke. Benötigte Originalblöcke im eigenen Release direkt einfrieren (inkl. belegtem Ausgangszeitpunkt). Keinen Liveimport eines veränderlichen Snapshots für `original.content` verwenden; sonst würde der nächste Export den Release rekursiv erweitern.
