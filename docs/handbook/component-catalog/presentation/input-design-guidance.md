# Input: Entscheidung über Eingabetyp und Form

## Anlass und Änderung

Der Variantenabschnitt begann mit React-Eigenschaften und Prüfgrenzen. Die Entscheidung nach Aufgabe und erwartetem Wert war dadurch auf schmalen Ansichten erst nach technischen Voraussetzungen erkennbar.

Der Einstieg nennt jetzt Text für einen Namen, Passwort für ein Kennwort und Dateiauswahl für einen Anhang. E-Mail-Adresse, Telefonnummer und Webadresse folgen als weitere Werte; Suche, Zahl, Datum und Uhrzeit bleiben als in den Originalquellen gezeigte Möglichkeiten benannt. Die Zuordnung zur Aufgabe und die Empfehlung einer im Formular konsistenten Form sind redaktioneller UX-Rat. Sie sind keine zusätzlichen Contract-Eigenschaften und keine Freigabe der Bedienung.

Die technischen Aussagen zu geerbten React-Eigenschaften, weitergereichtem Eingabetyp, textbasierter HTML-Komposition, ungeprüften Implementierungen, Browserprüfung und Rundung über eine zusätzliche Klasse stehen im vorhandenen Abschnitt «Das Formular trägt die Verantwortung». Die neun Abschnitte mit ihren Titeln, die Illustration und die Quellenbindung bleiben bestehen. Andere Absätze wurden nicht redigiert.

## Quellen

Bibliothek `shadcn`, Exportrevision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`, Input `shadcn:Input`. Original-shadcn-Quellen sind auf Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` gepinnt; keine Radix-Annahmen. Alle folgenden Pfade sind relativ zum intakten Exportpaket:

| Quelle | SHA-256 |
| --- | --- |
| `library/components/input/component.json` | `8884e8fb31692d48ffc5653c83ebe572c969c94bccbc060129f58c78870fbad9` |
| `library/components/input/interface.json` | `fe4246b45099246584da84ebd5c2a82b308d7a94d39e1347b2e620db1936dd88` |
| `library/components/input/ux.json` | `32181c960ad9e098f53c677b8dfe2224160b76db3bfb92ff969f20044ac69c07` |
| `library/components/input/layout.css` | `552d3a1e30f3a1b7283eb6ac362acbc2cd0e9bf9916e7101c72ca3e75283b6b3` |
| `library/components/input/behavior.scxml` | `e9fe1dab0a2228e20f349a2cfbb49c756d6d7363ceb36b7d51da2ca0dcd9cf23` |
| `library/components/input/accessibility.html` | `0aa195d500f2cc01af7e56e9906d0d4aa83082b767296d531b29caeccc0d9fcc` |
| `library/sources/shadcn/apps/v4/registry/bases/base/ui/input.tsx.source` | `00213ec177e4556e69b6680128c18023d859a8e4eaf4106fbcf6abdc4f2c419b` |
| `library/sources/shadcn/apps/v4/content/docs/components/base/input.mdx.source` | `39c7395ca281c3fc7029159b65b9a08747dc8fca92495ae935a49d5a11cc1225` |
| `library/sources/shadcn/apps/v4/registry/bases/base/examples/input-example.tsx.source` | `f77f44d96b1f4e268191fff736a2daa7884bd3d04ffb63fa6f9dbb821da3cdd2` |

`input-example.tsx.source` belegt die genannten Eingabetypen. `input.mdx.source` nennt die Dateiauswahl ausdrücklich. Die React-Quelle belegt Typ-/Prop-Weitergabe. Interface, UX, CSS und Komponentendefinition begrenzen die Schnittstelle und Formvarianten; HTML und SCXML begrenzen die dokumentierte Textkomposition und native Interaktion. Manifest und Abhängigkeiten sowie die portable Leseanleitung wurden gelesen. Hashgleichheit belegt Integrität, keine allgemeine UI- oder Accessibility-Freigabe.

## Prüfung

- `node --import tsx scripts/check-component-catalog.ts --component input`: PASS; eine Komponente, `snapshotChecked: false`. Keine globale Prüfdatei erzeugt.
- Die neun Abschnitte, ihre Schlüssel/Titel, Illustration und Revision sind unverändert. Änderung ausschliesslich in `variants.paragraphs` und durch einen ergänzten Absatz in `semantics.paragraphs`.
- Nach bestätigter gezielter Veröffentlichung des Hauptagenten die Seite `http://localhost:3010/systems/shadcn/components/input` in einem eigenen BrowserOS-Neo-Tab bei CSS-Ansichten 360 × 800 und 390 × 844 gelesen und den Variantenabschnitt per Screenshot geprüft. Der Einstieg beginnt mit Aufgabe/Wert und den drei konkreten Entscheidungen; beide Absätze sind sichtbar lesbar ohne erkennbares Abschneiden. Der Browsertext enthält den vollständigen technischen Absatz weiterhin unter «Das Formular trägt die Verantwortung». Dies ist eine begrenzte redaktionelle Nachkontrolle, keine allgemeine Bedienungs- oder Accessibility-Prüfung. Keine CMS-/Datenbankänderung, kein Build und keine Veröffentlichung durch diesen Bearbeiter.
