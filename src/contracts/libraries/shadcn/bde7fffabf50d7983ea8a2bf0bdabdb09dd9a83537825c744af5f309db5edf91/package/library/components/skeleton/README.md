# Skeleton · React-Inhaltsreferenz

Reserve layout space while content loads.

## Belegte Oberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Hashes](../../sources/manifest.json); [exakte exportierte Typen, Defaults und Quellzeilen](../../sources/react-api-inventory.json). Diese Familie exportiert `Skeleton`. `interface.json` bewahrt die genaue Propoberfläche jedes Wrappers; sie ist keine frei erfundene native Widget-API.

Skeleton itself is a div with animate-pulse and inherited props. The caller owns loading/data/error and aria-busy, replaces placeholder shapes with content after completion, and reports failure instead of pulsing forever. Reduced motion stops placeholder animation without removing status text.

## Semantik und Referenzentscheidungen

The host supplies Loading contacts as the meaningful status; the source skeleton geometry is explicitly hidden in this reference.

The labelled busy region, status text, aria-hidden and motion policy are authorized reference composition decisions, not built-in behavior claimed for the bare Skeleton wrapper.

This default content wrapper does not install a keyboard listener or roving focus. Native links/buttons/inputs in the chosen children retain their own documented semantics. Label delegates native focus through its associated control.

`accessibility.html` ist die konkrete, typzulässige Referenzkomposition. Native Elemente werden für ihre tatsächliche Bedeutung verwendet; fehlende native Überschriften/Labelbezüge werden als bewusste Caller-Komposition geliefert, nicht als automatisch vorhandene Wrapperfunktion ausgegeben.

## Verhalten und Komposition

SCXML bildet ausschliesslich den tatsächlich passiven React-Lebenszyklus ab: Props ändern die Darstellung ohne erfundene Wertevents; Unmount entfernt die Darstellung. Aktivierung und Escape erzeugen keine eigene Aktion oder Auswahl. Das ist kein Dummy-Control-Lebenszyklus: diese Wrapper speichern tatsächlich keinen solchen Controlwert. Interaktive Nachfahren behalten ihre eigene führende Komponente.

Zugeordnete Nachfahren: keine vorgeschriebene interaktive Kindkomponente.

## Visuelle Originale und Prüfung

[Figma-Beobachtungen](figma/figma-observations.json) bewahren Seite, Sets, Varianten und native Masse des gebundenen FIG-Exports. Die ursprünglichen Stories bleiben erhalten. DTCG `provenance://source/%2Fnative%2Fskeleton` führt konkrete native Probenmasse; CSS bindet die zugehörigen Quellknoten. Der editierbare native Ausschnitt und seine isoliert gerenderte PNG sind ein statischer Designnachweis.

[Browser-/Quellprüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md) und `validation`-Berichte am Bibliotheksroot unterscheiden native React-SSR-Semantik, SCXML-Konsistenz, Coverage und Bildsichtprüfung. Der geprüfte Referenzabschluss bezeichnet das begrenzte Quellenprofil, weiterhin `release:false`.

## Begrenzter Referenzabschluss

Status: **complete** unter `content-display/1`, weiterhin `release:false`. Die 17 tatsächlichen React-SSR-Fälle, 29 nativen Semantik-/Gegenfälle und 16 passiven Quellen-Lebenszyklusprüfungen dieses Batches bestehen; genaue Familienzuordnung unter `validation/contract-cases/` am Bibliotheksroot. Die vier Domänen und aktuelle Coverage sind abgeglichen. HTML/CSS allein sind eine Struktur-/Gestaltungsprojektion; das ausführbare Prüfziel verwendet die tatsächlichen gebundenen React-Wrapper.
