# Auftrag: eine Komponentenseite ausarbeiten

Repository: `/Users/kcnpxcp/Dev/GitHub/design-system`. Nur die zugewiesene Komponente bearbeiten. Quellenbibliothek ausdrücklich `shadcn`, veröffentlichte Exportrevision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Der ganze Export liegt unter `src/contracts/libraries/shadcn/<revision>/package/`.

Ziel: Ein deutschsprachiges Designteam kann nach der Seite entscheiden, ob und wie es diese Komponente verwendet. Keine technische Bestandsliste als Ersatz für Dokumentation. Lesende konsequent mit «du» ansprechen, keine Pluralimperative. Kurzes natürliches Schweizer Hochdeutsch, konkrete Handlungen, keine wörtlich übersetzten Formulierungen, keine Werbesprache. Fachliche Beispiele ohne Bezug auf fremde Unternehmen. Die gemeinsame Button-Vorlage legt die Themen fest, nicht die Formulierungen. Auch nicht interaktive Komponenten erklären, weshalb etwa Tastaturbedienung nicht zutrifft.

## Lesen und abgleichen

Zuerst `.agents/skills/arve-ui-contracts/SKILL.md`, dann das Manifest und den Leseskill im gewählten Paket sowie `dependencies.json` lesen. Danach nur Quellen zur zugewiesenen Komponente: `component.json`, `ux.json`, `interface.json`, `stories.json`, `behavior.scxml`, `layout.css`, `accessibility.html`, `accessibility.rules.json`, `README.md`. Bei Unklarheiten deren gebundene Originalquellen gezielt nachladen. CEM, CSS/DTCG, SCXML, HTML/ARIA getrennt betrachten. Alle Claims müssen mit dem wirklichen Export übereinstimmen. Keine Quelländerungen und keine neuen Fähigkeiten erfinden. Insbesondere hängen Verhalten und API von der Base-UI-Variante ab; nicht ungeprüft Radix/shadcn-Wissen übernehmen.

Vorhandene Seite gezielt aus `scripts/content/handbook-snapshot.json` auslesen. Falls du den alten Inhalt als gehashten Beleg zitierst, verwende dafür die unveränderliche Kopie `docs/handbook/component-catalog/history/0c16bdc/handbook-snapshot.json`; der aktive Snapshot wird später neu erfasst. Gegebenenfalls lokale Demo unter `src/demos/shadcn/` lesen. Nur Button hat einen veröffentlichten Implementierungsnachweis; lokale Demos für Input, Checkbox, Switch sind kein neuer Nachweis. Keine Demo erfinden und keine pauschale Verfügbarkeit für Frameworks oder native Plattformen behaupten. Bei Erweiterungen ausserhalb des ursprünglichen shadcn-Umfangs ihren belegten Zweck beschreiben.

## Exklusive Schreibgrenzen und Ergebnisse

Nur diese drei Dateien schreiben (SLUG durch Auftrag ersetzen):

1. `scripts/content/component-docs/SLUG.json`
2. `docs/handbook/component-catalog/reviews/SLUG.json`
3. `public/component-examples/SLUG.svg`

Keine gemeinsamen Dateien, Datenbank, Snapshot, Quellen, Git-Index oder Commits ändern. Eigenen temporären Code bei Bedarf ausschliesslich in `.runtime/component-catalog/SLUG/` halten. Keine weiteren Agenten starten.

### Inhalt

JSON-Format:

```json
{"format":1,"library":"shadcn","revision":"30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90","component":"SLUG","title":"Name","summary":"Ein bis zwei kurze Sätze zum konkreten Nutzen.","sections":[{"key":"usage","title":"Konkrete deutsche Überschrift","paragraphs":["..."],"bullets":["..."]}]}
```

Genau diese neun Abschnittsschlüssel in dieser Reihenfolge:

- `usage`: wann einsetzen, wann eine benannte Alternative besser passt; mindestens zwei konkrete Entscheidungen.
- `example`: ein anschaulicher Entwurf mit sinnvollen deutschen Beispielinhalten. Einmalig hier zusätzlich `illustration: {"src":"/component-examples/SLUG.svg","alt":"Konkrete Bildbeschreibung","caption":"Statische Illustration · ..."}` angeben. Erklären, was an diesem Beispiel wichtig ist. Falls eine lokale Demo vorhanden ist, deren begrenzten Umfang beschreiben. Sonst kein wiederholter Absatz über fehlende Live-Demo.
- `anatomy`: sichtbare Teile, Zusammenhang und Platzierung; keine reine technische Teileliste.
- `variants`: wirklich belegte Wahlmöglichkeiten; keine willkürlichen Farb-/Grössenvarianten. Erklären, wann welche Wahl hilft. Bei keiner eigenen Variante das ausdrücklich und knapp sagen.
- `states`: sinnvoller Ablauf, relevante Zustände, Rückmeldungen und Aufgaben der umgebenden Anwendung; keine SCXML-Namen als Fliesstext ohne Erklärung.
- `labels`: konkrete gute/schlechte Beschriftung oder sinnvolle Inhaltsgestaltung, Textlänge und Fehlanwendung.
- `keyboard`: relevante Tasten, Fokus und zugänglicher Name; bei rein visuellen Elementen zutreffende Semantik statt erfundener Bedienung.
- `semantics`: Einbindung und Verantwortlichkeiten, besondere Grenzen, Zusammenspiel im Formular/Dialog/Navigation. Technische Details nur soweit sie Entscheidungen erklären.
- `sources`: kurz verwendete Quellenarten und konkrete Grenzen dieser Komponente. Die langen technischen Dateien und Revision werden bereits im gemeinsamen technischen Abschnitt angeboten. Keine Hashes in den sichtbaren Text schreiben.

`paragraphs` und optional `bullets` enthalten normale Strings, keine Markdown-Formatierung. Variierende fachliche Überschriften verwenden; keinen generischen Satzbau über alle Seiten kopieren. Etwa 450–750 Wörter insgesamt als Orientierung, kein Wortzahlziel und keine Fülltexte. Wichtige Regeln konkret und prägnant. Redaktionelle Empfehlungen als Empfehlungen formulieren; nicht jede Aussage als Contractregel ausgeben.

### Visuelles Beispiel

Eine ruhige, gut lesbare SVG-Illustration des konkreten Einsatzes, keine Platzhalterbox mit Komponentennamen. Vorzugsweise viewBox `0 0 400 240` (bei Bedarf andere Höhe), Text mindestens 14–16, neutrale Shadcn-Farben, klare Abstände, einfache Flächen und Linien. Keine Skripte, externen Schriften/Bilder, Eventhandler oder foreignObject. Texte dürfen nicht überlappen oder abgeschnitten werden. Sie ist eine ausdrücklich statische redaktionelle Illustration, keine Render- oder Pixelkonformitätsbehauptung. Komplexe Tabellen können einen breiteren viewBox nutzen, dann `illustration.minWidth` in CSS-Pixeln angeben; der Renderer bietet einen beschrifteten Scrollbereich. Accessible Titel/Description im SVG ergänzen.

### Quellenreview

Eigenständiges Review-JSON:

```json
{"component":"SLUG","library":"shadcn","revision":"30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90","sources":[{"path":"src/contracts/libraries/shadcn/REVISION/package/library/components/SLUG/ux.json","sha256":"ECHTER HASH"}],"claims":[{"id":"eindeutig","blockName":"usage","kind":"contract","statement":"Geprüfte konkrete Aussage","evidence":[{"path":"...","pointer":"/purpose"}]}],"decisions":["Konkrete redaktionelle Abwägung"],"limits":["Nur tatsächlich bestehende Lücke"]}
```

Für jeden der neun Abschnitte mindestens eine inhaltliche Prüfnotiz als Claim. `kind` ist `contract`, `editorial` oder `demo`. Quellgebundene oder Demo-Claims brauchen präzise JSON-Pointer oder vorhandene wörtliche `snippet`-Ausschnitte und deklarierte Dateihashes. Redaktionelle Empfehlungen dürfen ohne technischen Beleg stehen. Kein erfundener Nachweis, kein allgemeines Freigabeversprechen. Die wichtigen Tastatur-/Zustands-/Variantenregeln konkret prüfen. Hashes selbst berechnen. Keine absoluten Maschinenpfade in die Ergebnisse schreiben.

Vor Abgabe JSON einlesen, Hashes, Pointer/Snippets und alle neun Schlüssel selbst prüfen. SVG auf XML-Gültigkeit und offensichtliche Überläufe prüfen. Root übernimmt die Integration, Browserprüfung und Datenbankmigration. In der Rückmeldung nur drei Ergebnisdateien, wichtigste Besonderheit und offene konkrete Frage nennen.
