# Page types

## Befund und Änderung

Am 20.11.2026 war `/systems/shadcn/page-types` eine reine Linkliste mit vier Kurzbeschreibungen. Der veröffentlichte CMS-Datensatz `shadcn-page-types` enthielt keine eigenen Inhaltsblöcke (`updatedAt: 2026-11-20T08:39:33.894Z`). Es fehlten sichtbare Beispiele und typische Inhaltsbereiche für die Wahl des Seitentyps.

Die neue Übersicht zeigt vier schematische Projektansichten: eine Ergebnisliste für overview, beschriftete Angaben mit Status für detail, vorausgefüllte Felder für edit und leere Felder für create. Jeder Typ erhält Zweck, typische Bereiche und genau einen Link zur Unterseite. Die Felder sind schreibgeschützt; Speichern und Anlegen werden nicht als bedienbare Aktionen vorgetäuscht. Eine kurze Entscheidungshilfe trennt die Aufgabe der Seite von der späteren Wahl ihres räumlichen Page layouts. Quellen und Prüfgrenzen sind aufklappbar.

Sämtliche fachlichen Texte, Beispielwerte und Linkziele kommen aus den sieben CMS-Inhaltsblöcken des Releases. Die Übersicht trifft keine dauerhafte Aussage über den Ausarbeitungsstand der vier Unterseiten. Es wurden keine Originalstudien überschrieben.

## Dateien

- `src/docs/page-reworks/page-types.tsx`
- `src/docs/page-reworks/page-types.css`
- `scripts/content/page-reworks/page-types.ts`

## Tatsächliche Prüfungen

- Öffentlichen Ausgangsstand zuerst mit BrowserOS neo in eigenem Tab gelesen.
- Aktuellen veröffentlichten CMS-Datensatz mit Payload und `postgresAdapter({push:false})` lesend abgefragt.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts page-types`: Vorschau erfolgreich, sieben Blöcke, keine CMS-Veröffentlichung.
- Keine gemeinsame Route, Registry, globalen Styles oder Schemas verändert; kein Commit/Push.

## Browserprüfung nach Veröffentlichung

Nach Integration und Veröffentlichung durch Root am 20.11.2026 im eigenen BrowserOS-neo-Tab geprüft:

- 1440 × 1050 CSS-Pixel: vier Schematiken vollständig sichtbar, zweispaltiger Vergleich; Titel, Liste, Detailangaben und Formfelder klar unterscheidbar. Texte und Links ohne sichtbare Überlagerung oder Abschneiden.
- 390 × 844 CSS-Pixel: einspaltiger Vergleich, alle vier Schematiken und ihre Beschriftungen vollständig lesbar; kein sichtbares horizontales Abschneiden. Die allgemeinen Handbuch-Navigationselemente bleiben ausserhalb der Schreibgrenze dieser Seite.
- Alle vier Typ-Links tatsächlich angeklickt und anhand URL und H1 geprüft: `page-type-overview` → overview, `detailseite` → detail, `page-type-edit` → edit, `page-type-create` → create. Rückkehr zur Übersicht jeweils erfolgreich.
- «Quellen und Prüfgrenzen» per Klick geöffnet; Browser-Snapshot bestätigt den aufgeklappten Zustand.

Keine Korrektur erforderlich. Die statischen Schematiken belegen keine vollständigen Produktabläufe oder allgemeine Barrierefreiheitsfreigabe.
