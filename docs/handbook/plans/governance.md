# Mitwirken, Pflege, Releases und Agenten-Anbindung

Planungsstand: 18. November 2026. Dieses Dokument ist ein Themenaudit mit Darstellungsplan, keine neue Organisationsregel, Freigabe oder Veröffentlichung. Geltungsbereich ist der bestehende shadcn-Handbuchzweig in Arve; seine Arbeitsweise soll weitere ausdrücklich gewählte Design-Systeme tragen können, ohne deren Regeln oder Zuständigkeiten zu vereinheitlichen.

## Evidenz und vollständiger Seitenbestand

Die aktuelle Datenbank wurde direkt mit `pg` und `default_transaction_read_only=on` gelesen. Payload wurde nicht initialisiert. Der vollständige Seitenbaum wurde auf zusätzliche Unterseiten geprüft; sämtliche Inhalte, Kurzbeschreibungen, Vorlagenfelder und Do/Don't-Blöcke der vier folgenden Seiten wurden gelesen. Es gibt genau drei Kinder unter `shadcn-mitwirken`; keine weiteren Nachfahren. Alle vier sind veröffentlicht und vom Seitentyp `guide`; befüllte Vorlagenfelder und Abbildungen fehlen. Die Titelnamen unten geben den tatsächlichen Bestand wieder.

| Seite / CMS-ID | Tatsächlicher Inhalt | Entscheidungslücke | Ziel und Umgang mit Bestand |
| --- | --- | --- | --- |
| `shadcn-mitwirken` / 25, «Mitwirken und Releases» | Kurzbeschreibung «Vorschläge, Reviews, Versionen und MCP.» Zwei Abschnitte: Aufgabe, Seiten und Beispiel für Vorschlag nennen; Gestaltung, Verhalten und Barrierefreiheit prüfen, Pflege und geprüfte Änderungen festhalten. | Kein konkreter Einreichungsweg, keine Entscheidungsübergaben, Rückmeldung oder Ablösung. Release-Versprechen im Titel bleibt beim Kind. | Als «Mitwirken» behalten; verständlicher Einstieg in den gesamten Ablauf, konkretes Vorschlagsbeispiel und Wegweiser zu den drei Kindern. Bestehende Anforderungen erhalten. |
| `shadcn-release-stand` / 26, «Releases und Migrationen» | Datum, betroffene Komponenten, Auswirkungen und Vorher/Nachher für inkompatible Änderungen; Payload-Historie, neue Contractrevision bei technischer Änderung und Pinwechsel nach Review. | Anleitung statt tatsächlicher Release-Übersicht. CMS-Historie, Contractrevision und Paketversion nicht erklärt. Keine Rücknahme/Ablösung oder Migration mit Zielgruppe. | «Änderungen und Migrationen»: Anleitung und klar gekennzeichnete tatsächliche Einträge, sobald solche belegt vorliegen. Keine historische Release-Liste erfinden. |
| `shadcn-technische-anbindung` / 27, «Technische Anbindung und MCP» | Veröffentlichte Seite binde eine Exportrevision; Portal lese Originaldateien. `/mcp` mit `get_component_page`, Beispiel shadcn/button. | Zu pauschale Contractbindung; nur eines von vier vorhandenen Werkzeugen dokumentiert. Lesen klingt leicht nach umfassender Agentenbearbeitung. Herkunft, Grenzen und fehlende Daten nicht erläutert. | «Mit Agenten arbeiten»: zuerst Lesen/Anwenden verständlich zeigen; technische Werkzeugreferenz nachgeordnet. Anbindung, Skill und Schreibauftrag trennen. |
| `shadcn-referenz-pflegen` / 51, «Von der Quelle zum Release» | Registry-Link als Herkunftshinweis; Do: Quelle und betroffene Seiten festhalten, lokale Implementierung getrennt prüfen, technische Vorgaben in neuer Revision, Release mit Migration/Prüfumfang. Don't: Upstream-Version als lokale Freigabe übernehmen. | Titel verspricht Ablauf, Inhalt bietet nur Hinweis und Gebot. Registry-Verteilung erklärt weder Pflegeentscheidung noch Freigabe. | «Referenzen und Regeln pflegen»: Quellenänderung bewerten, Aussagen abgleichen und begrenzt nachweisen. Releaseführung beim Geschwister belassen. |

Nebenbefund des Gesamtbaums: `nordlicht-mitwirken-releases` / 7 ist ein Entwurf ohne Design-System-Zuordnung, mit Vorschlag, Review und historischem Beispielstatus «Nordlicht 0.1». Diese Seite ist keine zusätzliche shadcn-Unterseite und kein Beleg vorhandener Organisationsteams. Nicht in diesen Zweig übernehmen oder veröffentlichen.

Quellen im Repository: `src/collections/Pages.ts`, `Implementations.ts`, `DesignSystems.ts`; `src/docs/arve-workflows.tsx`, `component-pages.ts`, `published-documentation.ts`; `src/app/mcp/route.ts`; `scripts/export-contract.mjs`, `scripts/import-contract-library.mjs`; `src/contracts/catalog.ts`. Die bestehenden Fachpläne unter `docs/handbook/plans/` wurden hinsichtlich Pflege-, Quellen-, Status-, Migrations- und MCP-Bedarf abgeglichen. Die Registry-Webseite wurde nicht als fachliche Primärquelle neu geprüft: Der Link ist hier ausschliesslich als vorhandener CMS-Inhalt erfasst.

## Befunde und führende Orte

Die vier Seiten widersprechen einander überwiegend nicht, sondern lassen denselben Ablauf mehrfach unvollständig beginnen. Vorschlag/Review bleibt auf der Übersicht, Quelle/Contract/Release wird auf allen Kindern angeschnitten. Für spätere Redaktion gilt: Einstieg erklärt Übergaben; Pflege führt Quellenentscheidung und Regelabgleich; Releases führen tatsächlich veränderte Stände und Migration; Agenten-Anbindung führt Abruf und Arbeitsgrenzen. Kurze Verweise ersetzen mehrfach gepflegte Volltexte.

Zwei vorhandene Aussagen benötigen eine präzisere Fassung. Erstens bindet nicht jede veröffentlichte Seite einen Contract: Das Schema sieht Contractfelder an Komponentenseiten und Implementierungen vor; eine allgemeine Guide-Seite benötigt keinen technischen Export. Zweitens ist «technische Änderung» zu weit: Nicht jede Codekorrektur ändert die fachliche technische Vorgabe. Nur betroffene Contractinhalte erzeugen eine neue entsprechende Revision; eine Paketänderung und eine redaktionelle Präzisierung können unabhängig sein.

Die Startseite in `arve-workflows.tsx` zeigt drei sinnvolle Einstiege: vorhandene Designs, Gespräch über eine Bedienregel, Ziel für bessere mobile Formulare. Alle enden bei «Team prüft und übernimmt». Der zweite Einstieg stellt einen prüfbaren Contract relativ unmittelbar in Aussicht. Das braucht die Bedingung «wenn die technische Regel ausreichend geklärt und eine Bibliothek ausdrücklich gewählt ist». Ein unvollständiger Vorschlag bleibt ein Entwurf; nicht jede Inhaltsregel braucht CEM, DTCG/CSS, SCXML oder HTML/ARIA. Die drei Tabs sind bereits tastaturbedienbar implementiert; das ist eine Codebeobachtung, keine ausgeführte Browserprüfung.

## Zielbaum und Navigation

Bestehende Slugs bleiben zunächst erhalten; Titel und Inhalte werden kohärent überarbeitet:

```text
Mitwirken                         shadcn-mitwirken
├─ Referenzen und Regeln pflegen  shadcn-referenz-pflegen
├─ Änderungen und Migrationen     shadcn-release-stand
└─ Mit Agenten arbeiten           shadcn-technische-anbindung
```

Vier Seiten genügen. Keine separate Seite für jeden Status oder jede Rolle. Übersicht und Startseite teilen denselben fünfstufigen Prozess, aber nicht denselben langen Erklärungstext. Startseite zeigt Eingänge und Ergebnis; Mitwirken erklärt Arbeitsübergaben. Auf den Kindern führt jeweils ein kurzer Satz zur Übersicht und zum nächsten sachlich passenden Schritt. Neue stabile Abschnittsanker sind ein Umsetzungsvorschlag, heute keine existierenden Ziele.

## Konkrete Darstellungen je Seite

### Mitwirken: vom beobachteten Problem zur nachvollziehbaren Entscheidung

Die erste Ansicht beantwortet «Ich habe eine Verbesserung – was brauche ich?». Darunter eine durchlaufende, nummerierte Schrittfolge, auf kleinen Flächen untereinander. Jeder Schritt enthält Eingabe, Tätigkeit, Ergebnis und die zu benennende Zuständigkeit. Die Rückführung von Rückmeldung zu Vorschlag ist mit Text bezeichnet, nicht nur durch einen Kreis oder Pfeil vermittelt.

| Schritt | Verständlicher Inhalt der Darstellung | Greifbares Ergebnis |
| --- | --- | --- |
| 1. Vorschlag | System, betroffene Seite, beobachtetes Problem, Beispiel, erwartete Verbesserung und Unsicherheiten nennen. | Verlinkter Vorschlag; Beobachtung und gewünschte Regel getrennt. |
| 2. Review | Fachliche Bedeutung, Verhalten und Zugänglichkeit am selben Beispiel prüfen; betroffene Quellen und Implementierungen bestimmen. Bei offenen Fragen zum Vorschlag zurück. | Entscheidung mit Begründung, begrenztem Prüfumfang und offenen Punkten. |
| 3. Veröffentlichung | Freigegebenen Inhalt mit seinen Referenzen, Ausgabe in Portal/MCP und erforderlichen Migrationshinweisen abgleichen. Veröffentlichung gesondert verantworten. | Auffindbarer Stand samt Datum und betroffenen Zielen; kein automatisches Paketrelease. |
| 4. Rückmeldung | Nutzungserfahrung oder Fehler an genau diesem Stand melden; Dringlichkeit und Auswirkungen benennen. | Zugeordnete Rückmeldung; Bestätigung, Korrektur oder neuer Vorschlag. |
| 5. Ablösung | Ersatz nennen, Gründe und erforderliche Umstellung erklären, alte Verweise erhalten. Ohne Ersatz auch das ausdrücklich sagen. | Nachvollziehbare Ablösung mit Ziel, Übergang und historischer Referenz. |

Ein ausgefülltes, klar als fiktiv markiertes Beispiel begleitet die fünf Schritte: «Beim Speichern verhindert ein zweiter Klick eine zweite Anfrage». Es benennt das gewählte System und die betroffene Formularregel; die Frage nach unbekanntem Speicherergebnis bleibt offen, bis das Pattern entschieden ist. So wird weder der Button-Demo noch einem Contract unbewiesene Persistenz zugeschrieben. Neben dem Beispiel eine kurze Eingabehilfe mit fünf Feldern: Problem, Kontext, betroffene Seite, Beispiel/Beleg, gewünschtes Ergebnis. Keinen Issue-Tracker oder Kontaktweg als vorhanden darstellen, solange er nicht festgelegt ist; der spätere reale Einreichungsweg ist ein Veröffentlichungskriterium dieser Anleitung.

### Referenzen und Regeln pflegen: Auswirkungen vor Übernahme

Zentrale Abbildung ist eine zweispaltige Gegenüberstellung «Was hat sich an der Quelle geändert?» und «Was bedeutet das für unser System?». Dazwischen keine automatische Übernahmepfeilspur, sondern drei ausdrücklich benannte Entscheidungen: übernehmen, angepasst übernehmen, nicht übernehmen. Für jede Entscheidung werden Begründung und betroffene lokale Aussagen genannt. Unter der Grafik steht dieselbe Folge als Text.

Ein zweites Beispiel zeigt eine Änderungsmatrix mit Zeilen für Handbuchaussage, Contractvorgabe, Implementation und Nachweis. Spalten: bisheriger Stand, vorgeschlagene Änderung, tatsächliche Auswirkung, erforderliche Prüfung. Leere Auswirkungen werden als «nicht betroffen, begründet» dargestellt. Dadurch wird sichtbar, warum eine Textkorrektur keine Contractmigration benötigt und eine Verhaltensänderung nicht durch eine neue Formulierung allein erledigt ist.

Die bestehende Warnung zur Upstream-Version bleibt als präzise Entscheidungsgrenze erhalten. Registry ist ein möglicher Verteilungsweg, kein Freigabeverfahren. Quellenangaben enthalten Fundstelle, verwendeten Stand/Abrufdatum, unterstützte Aussage und Geltungsbereich. Lokale Beobachtung benennt Umgebung und Gegenstand; eigener Vorschlag benennt offene Entscheidung. Wenn eine Quelle geändert wurde, werden ihre konkreten abhängigen Aussagen geprüft, nicht pauschal das gesamte Handbuch neu geschrieben.

### Änderungen und Migrationen: erkennen, ob ich handeln muss

Seitenbeginn: «Was ist anders, betrifft es mich, was muss ich tun?». Ein Mustereintrag wird ausdrücklich als Muster beschriftet und darf nicht als stattgefundenes Release erscheinen. Später echte Einträge absteigend mit Datum, System, betroffenen Seiten/Implementierungen, Änderung und Handlungsbedarf. Eine kompakte Vergleichsansicht zeigt drei unabhängige Spuren: Handbuchstand, Contractrevision und Paketversion. Keine gemeinsame Versionsnummer vortäuschen.

Für inkompatible Änderungen folgt ein Vorher/Nachher-Beispiel mit unverändertem Nutzungskontext und sichtbar markierter Änderung. Daneben eine kleine Migrationstabelle: betroffen, Handlung, Ersatz, Nachweis, offene Einschränkung. «Keine Umstellung erforderlich» wird begründet. Ablösung erhält einen eigenen Abschnitt mit altem Ziel, Ersatz oder fehlendem Ersatz, Übergangsentscheidung und weiterhin erreichbarer Historie. Rücknahme ist eine neue nachvollziehbare Entscheidung; alte Exporte und historischer Textstand werden nicht überschrieben.

### Mit Agenten arbeiten: Quelle abrufen, Geltungsbereich bewahren

Erste Darstellung: «System wählen → Seitenbaum oder Suche → passende Seite lesen → bei Bedarf angehefteten Contract und Implementation lesen → Vorschlag mit Quellen zurückgeben». Zwei Bahnen verdeutlichen die Grenze: vorhandener veröffentlichter Lesezugang und gesondert beauftragte Bearbeitung. Keine Verbindungslinie vom MCP-Lesen zu automatischem Publizieren.

Die vorhandenen vier Werkzeuge werden in einer kleinen Aufgabenübersicht erklärt: `list_documentation_tree` für Struktur, `search_documentation` für Finden, `get_documentation_page` für allgemeine Seiten, `get_component_page` für Komponente und gepinnten Contract. Die Route registriert ausschliesslich diese lesenden Werkzeuge. Die Antwort enthält veröffentlichte Inhalte; Entwurfsprüfung oder Schreiben wird dadurch nicht angeboten. Ein sichtbares Ergebnisbeispiel soll Textquelle, System, Seitenadresse, Referenz und Grenzen hervorheben, nicht einen grossen JSON-Block voraussetzen.

Technischer Vertiefungsabschnitt: Ein Export ist ein festgehaltener Stand mit Hash, keine lebende Kopplung zum Quellencheckout. Der Komponentenexport speichert die referenzierten Domänendateien und Status; der Bibliotheksimport speichert einen Bibliotheksstand und zusätzliche Artefaktreferenzen. Katalogregistrierung und passender CMS-Pin sind getrennte Schritte. Das vorhandene Portal kann bei fehlender Katalogauflösung `contract: null` liefern; ein vorhandener Pin ist deshalb noch kein aufgelöster Nachweis. Seiten- und Implementierungspin können verschieden sein und müssen als solche erkennbar bleiben. Kein Export ist allein eine bestandene Verhaltens- oder Zugänglichkeitsprüfung.

Ein Skill beschreibt Arbeitsanweisungen; MCP stellt Inhalte/Werkzeuge bereit; ein Contract hält technische Vorgaben; CMS führt redaktionelle Seiten. Diese vier Dinge bedingen nicht stets gegenseitige Änderungen. Eine Anpassung der Arbeitsanweisung erzeugt kein Paketrelease. Die Anbindung dieser Arve-Route stellt keinen generellen Schreibzugang zu CMS, Code oder Contractrepository bereit.

## Vier Statusdimensionen getrennt führen

| Dimension | Bestehender Befund | Vorgeschlagene verständliche Darstellung |
| --- | --- | --- |
| Veröffentlichung | Pages und Implementations haben Payload-Entwurf/Veröffentlichung. | «Veröffentlicht» beschreibt Sichtbarkeit dieses Datensatzes. Es sagt nichts über Vollständigkeit oder Produktreife. |
| Fachregel | Kein gesondertes Feld für Entscheidungsstand im Pages-Schema. Contractstatus wird aus Export übernommen. | Regel mit Geltungsbereich und nachvollziehbarem Entscheidungsstand, z. B. Vorschlag / entschieden / abgelöst; diese Werte sind Vorschlag, kein vorhandener Workflow. |
| Implementation | `releaseStatus`: draft, preview, stable, deprecated; Plattform, Paketversion und Owner sind eigene Felder. | «Web · Preview · Paketversion …» statt pauschalem Komponentenbadge. iOS/Android nur bei tatsächlichem Datensatz; fehlend ist nicht geprüft. |
| Nachweis | Freitext `verification.scope` und `verification.evidence`; keine strukturierte universelle Zertifizierung. | Gegenstand, Revision, Umgebung, Datum, Prüfumfang und offene Punkte. «Geprüft» ohne diese Einschränkung vermeiden. |

Beispiel für die Lehrdarstellung, ausdrücklich hypothetisch: «Handbuch veröffentlicht; Regel noch Vorschlag; Web-Implementation Preview; Tastaturablauf in benannter Umgebung geprüft; andere Plattformen offen.» Diese Kombination ist kein Widerspruch. Fachregelstatus und Contractstatus nicht still gleichsetzen; eine entschiedene Regel kann noch unvollständig technisch beschrieben sein.

## Zuständigkeiten und mehrere Systeme

Die folgenden Funktionen sind zu besetzende Verantwortlichkeiten, keine Behauptung existierender Teams: Vorschlag einreichen, Fachentscheidung treffen, redaktionell pflegen, technische Implementation pflegen, begrenzten Nachweis prüfen und Veröffentlichung verantworten. Eine Person kann mehrere Funktionen übernehmen; aus dem CMS-Feld «Verantwortliches Team» folgt keine bereits eingerichtete Organisation. Vor Veröffentlichung müssen erreichbare zuständige Personen oder Stellen für das konkrete System benannt sein.

Arve stellt den gemeinsamen Publikations- und Leseweg. Die fachliche Zuständigkeit bleibt pro Design-System und betroffener Regel zu benennen, die technische pro Implementation/Plattform. Ein shared Contract kann mehreren Systemen dienen, erzwingt aber keinen gleichzeitigen Pinwechsel. Für eine systemübergreifende Änderung zeigt eine Auswirkungsmatrix je System: betroffene Aussage, entscheidende Stelle, bisheriger Pin, vorgeschlagener Pin, Implementation und Übernahmeentscheidung. Eine Ablehnung oder spätere Übernahme ist sichtbar möglich. Fehlende Zuständigkeit wird als offen dokumentiert, nicht mit einem erfundenen zentralen Gremium gefüllt.

Agenten dürfen im jeweils erteilten Auftrag Bestände lesen, Unterschiede markieren, Quellen zuordnen, Vorschläge formulieren und tatsächlich ausgeführte Prüfungen dokumentieren. Eine fachliche Entscheidung, nicht erteilte Veröffentlichung, Änderung weiterer Systeme, Erfindung von Nachweisen oder automatisches Hochstufen aufgrund einer Upstream-Version gehört nicht implizit dazu. Menschliche Freigabe muss dort greifbar werden, wo der konkrete Auftrag oder die verantwortliche Regel sie verlangt; keine pauschalen zusätzlichen Genehmigungsstufen für jede Textkorrektur erfinden.

## Schlanker CMS-Bedarf und Schnittstellen

Zuerst die vier vorhandenen Guides redaktionell ausarbeiten. Vorhandene Richtext- und Do/Don't-Blöcke reichen für Text, aber eine Prozessabbildung ist kein Do-Beispiel. Gemeinsamer konkreter Bedarf mit den Fachplänen ist ein neutraler Abbildungsblock mit Bild, Bildunterschrift und gleichwertiger Texterklärung; zusätzlich stabile Abschnittsanker und auflösbare Querverweise. Tabellenunterstützung und deren Ausgabe müssen vor Nutzung geprüft werden, sie wird hier nicht als vorhanden vorausgesetzt.

Kleine strukturierte Ergänzungen nur dort, wo Wiederverwendung tatsächlich nötig ist: Quellenbezug und Aussageart/Geltungsbereich; erreichbare Pflegezuständigkeit; Ablösungsziel. Ein universeller Freigabeworkflow oder neue Release-Collection ist noch nicht begründet. Zunächst genügt eine konsistente redaktionelle Eintragsform; eine eigene Collection erst bei belegtem Bedarf an Filtern, vielen Releases oder mehrfacher Verwendung. Paketversion, Implementierungsstatus und Contractpin aus ihren bestehenden Datensätzen verwenden, keine zweite Freitext-Wahrheit erzeugen.

Portal, Suche und MCP müssen dieselbe Aussage samt Einschränkungen transportieren. Grafiken erhalten erklärenden Text im redaktionellen Bestand. Eine Toolantwort darf «veröffentlicht» nicht in «validiert» übersetzen. Die Fachpläne verlangen insbesondere erhaltene Quellenstände, Altlinks, begrenzte Demo-/Prüfaussagen und eindeutige führende Orte; Governance liefert dafür die Übergaben, schreibt ihnen aber keine einheitliche Inhaltsvorlage vor.

## Umsetzung und Abnahme

1. Aussagen der vier Bestandsseiten den führenden Zielabschnitten zuordnen; Slugs erhalten. Reale Zuständigkeiten und Einreichungsweg klären, ohne sie für den Plan zu erfinden.
2. Übersicht und Pflege anhand desselben markierten Beispielvorgangs ausarbeiten; Rückmeldung, Ablehnung, offene Prüfung und Ablösung sichtbar einschliessen.
3. Release-Anleitung mit einem klar markierten Muster und belegten echten Einträgen, falls vorhanden, ausarbeiten; getrennte Versionsspuren prüfen.
4. Agentenseite anhand der vier tatsächlich registrierten Werkzeuge überarbeiten, begrenzte Export-/Pin-Beziehung und fehlende Auflösung erklären. Startseitentext auf denselben Prozess abstimmen.
5. Neutrale Prozessdarstellung und Textalternative an diesen Seiten erproben. Portal, Navigation, Suche und MCP-Ausgabe fachlich abgleichen. Erst anschliessend entsprechend beauftragte Veröffentlichung.

Abnahme ist erfüllt, wenn jede Ausgangsaussage erhalten, begründet ersetzt oder an ein eindeutiges Ziel verschoben wurde; alle drei Kinder erreichbar bleiben; jemand aus einem Beispiel den nächsten Schritt, das erwartete Ergebnis und die offene Zuständigkeit erkennt; Statusdimensionen nicht vermischt werden; Quelle, Beobachtung und Vorschlag unterscheidbar sind; System/Implementation/Revision bei relevanten Aussagen feststehen; echte und fiktive Release-Einträge unmissverständlich getrennt sind; Rückmeldung und Ablösung einschliesslich alter Links erklärt sind; Agenten-Lesezugang keinen Schreib- oder Freigabeanspruch erzeugt; jede Grafik auch ohne Farbe, Hover und Bildlesen verständlich ist; Portal und MCP dieselben Regeln und Grenzen liefern.

Ausgeführt wurden ausschliesslich schreibgeschützte Datenbanklektüre, lokale Code-/Planlektüre und das Schreiben dieses Plans. Keine CMS-, App-, Contract- oder Publikationsänderung; kein Exportlauf, Build, Browser-, Tastatur- oder Screenreader-Test. Die genannten visuellen Darstellungen und Akzeptanzprüfungen sind ausstehende Umsetzungsvorschläge.
