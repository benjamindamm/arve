# Unabhängiger Transfer-Test des Farb-Skills

23.11.2026 · Ein synthetischer Verhaltenstest, keine Studie mit einer zweiten Organisation. Ergebnis: Der getestete Bestandsfall wurde ohne fachliche Korrektur des Skills bewältigt. Dies ist ein begrenzter Nachweis, keine allgemeine Übertragbarkeitsfreigabe.

## Aufbau

Ein neuer Agent ohne Elternhistorie erhielt nur den Skill `arve-color-handbook` mit Fragenkatalog und die drei [Eingabedateien](input/auftrag.md) eines fiktiven bestehenden Systems. Der vorherige shadcn-Showcase und die [vorab festgelegten Prüfkriterien](evaluation-before-run.md) wurden ihm nicht gegeben. Er durfte nur im isolierten Ausgabeordner arbeiten, keine weiteren Projektquellen lesen und nichts veröffentlichen.

Anders als im delegierten Showcase war die Aufgabe eine Bestandsdokumentation: wenige Farben, nur helle Web-Oberfläche, keine aktuellen Diagramme, widersprüchliche Aktionsfarbe und ein transparenter Kopfbereich mit ungeklärtem Untergrund.

Der Worker stellte drei gezielte Fragen. Root beantwortete sie als ausdrücklich synthetische Testpersona. Der [Dialog](dialog.md) hält beide Seiten fest; es werden keine realen Nutzerantworten behauptet.

## Ergebnis und Prüfung

| Prüfpunkt | Beobachtetes Verhalten | Bewertung im Fall |
| --- | --- | --- |
| Vorhandene Angaben nutzen | Produkt, Desktop/mobiler Browser, Hell-Modus und Diagrammstand ohne erneute globale Fragen übernommen | Erfüllt |
| Konflikt klären | Grüne Gestaltungsnotiz gegen blaue Umsetzung konkret benannt; Rangfolge nicht erfunden | Erfüllt |
| Gespräch begrenzen | Drei thematisch passende Rückfragen statt vollständigem COL-Fragebogen | Erfüllt |
| Lokale Entscheidung erhalten | Blau als aktuelle Aktion, Grün als Marke; alte grüne Aktionszuordnung nur für diesen Fall abgelöst | Erfüllt |
| Bestandsmodus | Keine neue Palette, kein Dark Mode, keine Status- oder Chartfarben ergänzt | Erfüllt |
| Gleiche fachliche Struktur, eigene Darstellung | Rollen-/Einsatztabelle, Kontrastabschnitt, Offenstände und COL-Zuordnung statt Nachbau des Showcase | Erfüllt |
| Sonderfall Transparenz | Kopfbereich ausdrücklich ungeprüft; opakes Weiss nicht als Beleg für unbekannte Mischung verwendet | Erfüllt |
| Zukünftigen Bedarf erhalten | Keine heutigen Diagramme; diskutierte Auswertung als künftiger Klärungsanlass festgehalten | Erfüllt |
| Nachweise begrenzen | Drei numerische Paare, keine Oberflächen-/Zugänglichkeitsfreigabe | Erfüllt |
| Herkunft und Pflege | Quellfundstellen, unveränderte Quellen und synthetische Entscheidungen getrennt; Zuständigkeit und Termine nicht erfunden | Erfüllt |

Root hat das Kapitel und die Quellenzuordnung gelesen, die zehn COL-IDs auf vollständige einmalige Zuordnung geprüft, die drei sRGB-Rechnungen unabhängig reproduziert und die Originaleingaben gegen die gespeicherten SHA-256-Werte abgeglichen. Ergebnis: 17,85253496:1, 4,75884279:1 und 5,16855556:1; alle erfüllen den erst im Testdialog festgelegten Textschwellwert 4,5:1. Keine der drei Rechnungen betrifft den transparenten Kopfbereich.

Die Abdeckungsprüfung allein bestätigt keine semantische Qualität. Die positive Bewertung oben beruht zusätzlich auf der konkreten Inhaltslektüre. Es war keine erzwungene Anpassung am Skill nötig; es wurden keine zusätzlichen Sonderregeln aus diesem einzelnen Test aufgenommen.

## Redaktionelle Weiterentwicklung nach dem Designer-Review

Das [überarbeitete Kapitel](redaktion/farbkapitel.md) beginnt mit den drei belegten Anwendungen, trennt Marke und Aktion von konkreten ungeklärten Kontexten und unterscheidet aktuelle Offenstände von möglichen Erweiterungen. Rechenmethode, Quellen und die [Abdeckungsübersicht](redaktion/abdeckung.md) bleiben erreichbar. Ausführliche Erläuterungen wurden dort bewahrt, wo sie eine Entscheidung oder Grenze verständlich machen; eine Pflicht zur Kürze oder zu getrennten Begleitdateien wird daraus nicht abgeleitet.

Der Skill und sein Fragenkatalog wurden auf Grundfragen, bedingte Fragen und bedarfsgerechte Vertiefungen präzisiert (Fragenkatalog v0.2). Diese redaktionelle Revision wurde noch nicht mit einem weiteren unabhängigen Agenten erprobt. Die folgenden Worker-Artefakte bleiben unverändert als historische Testbelege erhalten.

## Gesicherte Artefakte

- [Farbkapitel des unabhängigen Agenten](output/farbkapitel.md)
- [Quellen und Entscheidungen](output/quellen-und-entscheidungen.md)
- [Kontrastberechnungen](output/kontrastpruefung.json)
- Originaleingaben: [Auftrag](input/auftrag.md), [Gestaltungsnotiz](input/gestaltung.md), [CSS-Auszug](input/oberflaeche.css)

Die Worker-Ergebnisse sind unveränderte Kopien aus der isolierten Laufumgebung. Der absolute `.runtime`-Pfad in seiner Quellenakte bezeichnet den historischen Ausführungsort; dieselben Originaldateien sind hier unter `input/` mit identischen Hashes gesichert. Diese Pfade sind kein Laufzeitbedarf von Arve. Das synthetische Testsystem wird nicht als weiteres Design-System im Portal angelegt.

## Grenzen und nächste Erprobung

Der Test zeigt die richtige Behandlung einer Quellenabweichung und bewusst unvollständiger Antworten in einem kleinen Bestand. Er belegt nicht den Umgang mit beliebig grossen Tokenbeständen, mehreren Marken, nativen Plattformunterschieden oder einem längeren echten Nutzergespräch. Die finale Darstellung ist ein Markdown-Kapitel; keine neue mobile UI-Prüfung und kein CMS-/MCP-Test wurden durchgeführt.

Die Ausgangshypothese wird von zwei unterschiedlichen Durchläufen gestützt: delegierter Showcase-Entwurf und quellengebundene Bestandsdokumentation. Vor der Verallgemeinerung auf alle Fachbereiche sollte je Bereich ein vergleichbar kleiner Pilot folgen. Fragenkatalog und Arbeitsablauf bleiben gemeinsam, konkrete Palette und Seitengestaltung werden nicht zum neuen Seed.
