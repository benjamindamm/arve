# UX-Patterns: Themenaudit und Darstellungsplan

Stand: 18. November 2026. Arbeitsplan, keine Veröffentlichung oder Produktfreigabe. Bezugssystem ist das öffentliche shadcn-Referenzhandbuch in Arve; Struktur und Entscheidungshilfen sollen auf weitere Systeme übertragbar sein. Alle im Zielteil formulierten Regeln sind redaktionelle Vorschläge, bis Herkunft, Verantwortliche und Review festgehalten sind.

## Evidenz und Reichweite

Gelesen wurden `docs/handbook/content-matrix.md`, `local-review.md`, `src/collections/Pages.ts`, `src/docs/page-templates.ts` und sämtliche neun veröffentlichten Pattern-Datensätze über Payload Local API (`draft:false`, `depth:0`). Erfasst: Titel, Slug, Parent, Vorlagentexte, vollständige Inhaltsblöcke, Links, Medienrelationen und Änderungsstand. Keine CMS-Schreiboperation wurde ausgeführt. Für den Inhaltsabruf wurde Schema-Push im Adapter deaktiviert; die vorgelagerte reine Seiteninventur startete mit der bestehenden Config und deren Schema-Initialisierung. Es wurde kein Schema-Diff oder Änderungsauftrag ausgeführt.

Die ausgelieferte Formularseite wurde zusätzlich über BrowserOS neo vollständig als Seitentext gelesen. Das bestätigt die tatsächliche Reihenfolge aus Vorlage, Langtext, Do/Don't, Abbildung und technischem Abgleich. Es ist keine neue visuelle, Screenreader- oder mobile Abnahme. Die in `local-review.md` protokollierten früheren Prüfungen bleiben historische Nachweise mit dort genanntem Umfang.

Primärquellen gezielt gelesen: [WAI User Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/) und [shadcn Combobox](https://ui.shadcn.com/docs/components/base/combobox), Abruf 18.11.2026. WAI begründet verständliche Ergebnisrückmeldungen sowie feldbezogene Korrekturhinweise und verlinkte Fehlerübersichten. Die shadcn-Seite dokumentiert Varianten wie Mehrfachauswahl, Leeren, gruppierte Optionen und ungültige/deaktivierte Darstellung; daraus folgt keine lokale Implementierungsfähigkeit. Weitere unten genannte Upstream-Links sind im CMS vorhandene Quellen und vor der jeweiligen Ausarbeitung erneut zu prüfen.

## Bestand aller Seiten

Portalpfade beginnen mit `/systems/shadcn/`; CMS-Slugs haben zusätzlich das Präfix `shadcn-`. Alle acht Unterseiten hängen derzeit direkt unter ID 12. Abgesehen von Formular/Validierung sind alle Pattern-Vorlagen leer.

| Seite, ID, CMS-Slug / Portalpfad | Tatsächlicher Inhalt | Tragfähig | Fehlend / redaktionelles Problem |
| --- | --- | --- | --- |
| UX-Patterns · 12 · `shadcn-patterns` / `patterns` | Drei Absätze unter Formular, leerer Zustand, destruktive Bestätigung; Beispiele Adresse/Rechnung | Grundsätzliche Orientierung | Nur drei von sechs Aufgabenfamilien sichtbar; kopiert Unterseitenregeln statt zur richtigen Aufgabe zu führen; keine Entscheidungshilfe |
| Formulare und Validierung · 20 · `shadcn-formulare-validierung` / `formulare-validierung` | Fünf gefüllte Vorlagenfelder; Langtext mit acht Abschnitten einschliesslich Quellen; zwei Text-Do/Don't; ein Do mit Medienrelation 3; technischer Abgleich | Vollständiger Hauptweg, Korrektur, unklare Übermittlung, Abbruch, klare Kennzeichnung offener Entscheidungen | Dieselben Regeln mehrfach; wichtige Ablaufgrafik erst nach Quellen und zwei weiteren Hinweisblöcken; Fokusziel, Persistenz und sichere Wiederholung bleiben offen |
| Suchen und Filtern · 21 · `shadcn-suchen-filtern` / `suchen-filtern` | Drei Abschnitte: Rechnung finden, aktive Filter, null Treffer | Ergebniszahl, angewendete Filter, Reset und Auslösungsart werden erwähnt | Keine Auslösungsentscheidung, Rückkehr aus Detail, Abbruch von Filterentwürfen, langsame/veraltete Ergebnisse, Filterlogik oder Auswahlbezug |
| Laden, leer und Fehler · 22 · `shadcn-laden-leer-fehler` / `laden-leer-fehler` | Je ein Absatz zu Laden, Leer, Fehler | Stabiler Bereich, initial leer vs. null Treffer, Eingaben erhalten | Enger Ausschnitt; keine Zustandsübergänge, Teilausfälle, Offline, Berechtigung, Erfolg, Aktualisierung oder unklare Schreibantwort |
| Felder und Fehlermeldungen · 45 · `shadcn-felder-und-fehlermeldungen` / `felder-und-fehlermeldungen` | Field-Einleitung, Upstream-Link, ein Do und Don't | Dauerhaftes Label, Format-Hilfe, Eingaben erhalten | Überschneidung mit Formular und Input; keine eigene umfassende Nutzeraufgabe; liest sich wie fehlende Field-Komponentenseite |
| Auswahl und Suche · 46 · `shadcn-auswahl-und-suche` / `auswahl-und-suche` | Combobox-Einleitung, Upstream-Link, ein Do und Don't | Sichtbare kleine Auswahl, Suchhilfe für lange Listen, feste Werte von Freitext unterscheiden | Titel kollidiert mit Informationssuche; keine Ein-/Mehrfachwahl, Commit/Abbruch, entfernte Optionen, asynchrone Liste oder Rückkehr |
| Destruktive Aktionen bestätigen · 47 · `shadcn-destruktive-aktionen` / `destruktive-aktionen` | Alert-Dialog-Einleitung, Upstream-Link, ein Do und Don't | Folgen und Objekt benennen, Fokus nach Abschluss, keine Bestätigung für jede Kleinigkeit | Titel nimmt Dialogentscheidung vorweg; Reversibilität, echte Rücknahme, Mehrfachaktion, teilweiser Erfolg und unklarer Ausgang fehlen |
| Tabellen und Listen · 48 · `shadcn-tabellen-und-listen` / `tabellen-und-listen` | Data-Table-Einleitung, Upstream-Link, Do/Don't, Link `/systems/shadcn/beispiele/rechnungen` | Aufgabenbezogene Spalten, Sortierung, Zeilen-/Massenaktionen, Zugang zu Details auf schmalen Ansichten | Beispielabhängig; kein Vergleich Tabelle/Liste, Auswahlumfang, Seitennavigation, Wiederherstellung oder responsive Strategie |
| Systemzustände gestalten · 49 · `shadcn-systemzustaende` / `systemzustaende` | Empty-Einleitung, Upstream-Link, Do/Don't | Leer, keine Treffer und Ladefehler auseinanderhalten | Fast vollständige Doppelung mit ID 22; Titel verspricht mehr als Empty; aktuell bereits vom Formular verlinkt |

Änderungsstände: IDs 12/21/22 am 13.11.; IDs 45–49 am 17.11. gegen 22:33 UTC; ID 20 am 17.11. 22:59 UTC. Die ältere Matrix bezeichnet die Referenzen zunächst als Entwurf, ihr Schluss und `local-review.md` dokumentieren bereits die Veröffentlichung; der hier gelesene CMS-Stand bestätigt sie.

## Zielbaum und verlustfreie Konsolidierung

```text
UX-Patterns                                 patterns
  Formulare und Validierung                 formulare-validierung
  Werte auswählen                           auswahl-und-suche
  Suchen und Filtern                        suchen-filtern
  Tabellen und Listen                       tabellen-und-listen
  Systemzustände und Wiederherstellung       systemzustaende
  Destruktive Aktionen                       destruktive-aktionen
```

Der Baum hat sechs unterscheidbare Aufgaben statt acht teilweise doppelter Seiten. Zunächst nur Titel/Inhalt/Navigation ändern, bestehende Slugs bewahren. `felder-und-fehlermeldungen` und `laden-leer-fehler` werden erst nach vollständigem Verweisabgleich abgelöst; in der Übergangsphase kurze Wegweiser mit sichtbarer Zieladresse, keine zweite Regelfassung. Anschliessend dauerhafte Weiterleitungen samt stabiler Auflösung für MCP-Konsumenten vorsehen. Diese Migration ist Teil späterer Umsetzung, hier nicht ausgeführt.

| Ausgang | Führender Ort | Konkrete Auflösung |
| --- | --- | --- |
| `felder-und-fehlermeldungen` | `formulare-validierung#fehler-korrigieren` | Prüfablauf und Erhalt der Angaben übernehmen; Label/Hint/Error-Anatomie auf Input bzw. später verifizierte Field-Seite verweisen; Textqualität zu `content-design`; alte Seite nicht umbenennen und parallel weiterpflegen |
| `laden-leer-fehler` | `systemzustaende` | Stabile Ladefläche, Unterschied initial leer/null Treffer und Erhalt des Kontexts in führende Seite aufnehmen; entsprechende Abschnittsanker erhalten/mappen |
| `systemzustaende` | Unverändert | Führend, da Formular bereits hierhin verweist und der Slug auch zusätzliche Zustände abdeckt; Empty nur als beteiligte Komponente |
| `auswahl-und-suche` | Unverändert, Titel «Werte auswählen» | Erster Satz grenzt vom Finden von Inhalten ab; Link zu `suchen-filtern`; Komponentenleitfaden verweist auf diesen Auswahlbaum statt ihn erneut zu pflegen |
| `tabellen-und-listen` | Unverändert | Vorhandene Rechnungsliste als nachrangigen Demonstrationslink erhalten, allgemeine Regel nicht aus ihrer konkreten Spaltenauswahl ableiten |
| `patterns` | Unverändert | Regelerklärungen durch sechs aufgabenbezogene Einstiege ersetzen; «Bestätigen» wird kein eigenes oberstes Pattern |

Migrationsprüfung umfasst CMS-Richtextlinks, Vorlagen-Freitext, automatisch erzeugtes Weiterlesen, Navigation, Suchindex, Medienbeschreibungen, Repo-Inhalte und MCP-Seitenbaum. Eingehende externe Links sind nicht vollständig inventarisierbar; deshalb alte Adressen dauerhaft auflösbar halten. Anker unten sind geplante stabile Anker, heute nicht als existent ausgeben.

## Leseführung statt universellem Langtextschema

Patternseiten beginnen mit einer konkreten Entscheidung: «Angaben gemeinsam speichern?», «Wert auswählen oder Inhalte finden?», «Bestätigen oder rückgängig machen?». Ein kurzer Geltungssatz, die zentrale Grafik und die wichtigsten Entscheidungsausgänge bilden den Einstieg. Die Abbildung steht unmittelbar bei der Erklärung, nicht erst hinter Quellen. Danach nur die tatsächlich benötigten Ausnahmen, Grenzfälle und Prüfwege. Jede Regel hat genau einen führenden Ort.

Die bestehende Formularvorlage wird nicht überall als fünf zusätzliche Textkapitel dupliziert. Ihre Felder können kurze Einstiegsaussagen/strukturierte Zusammenfassungen liefern; der Renderer muss sie entweder an der fachlich passenden Stelle verwenden oder den frei gestalteten Hauptinhalt verwenden. Keine zweite vollständige Ablaufbeschreibung oberhalb der eigentlichen Seite. Quellen- und Prüfstand als kompakte Metadaten; offene Entscheidung direkt neben dem betroffenen Ablauf. Technischer Abgleich in verlinkter Nachweisansicht, soweit er keine unmittelbar relevante Einschränkung erklärt. «Formularversand lokal noch nicht nachgewiesen» genügt auf der Patternseite als knapper Hinweis.

Grafiken verwenden durchgehend: Rechteck = sichtbarer Zustand/Schritt, Raute = Nutzer-/Produktentscheidung, beschrifteter Pfeil = Auslöser, gestrichelter Seitenzweig = optionaler Weg. Bedeutung bleibt auch ohne Farbe erkennbar. Kein dekoratives Flowchart. Jede Grafik erhält einen kurzen Lehrsatz und eine lineare Textalternative. Keine neue fiktive Produktgeschichte; neutrale Schemas «Eingabe», «Option», «Ergebnis», «Ausgewählte Einträge» reichen.

## Konkrete Seitenpläne

### 1. Patternübersicht — die Aufgabe finden

Inhaltsfolge: (1) ein Satz zu wiederkehrenden Nutzeraufgaben, (2) sechs verlinkte Aufgabenzeilen mit je einer Auswahlfrage, (3) kleine Abgrenzung Pattern/Komponente/Layout, (4) Hinweis auf belegte Regeln, Vorschläge und Plattformstand. Keine langen allgemeinen UX-Prinzipien und keine Vorschau aller Zustandsmatrizen.

Aufgabenzeilen: Angaben gemeinsam übermitteln → Formular; vorgegebenen Wert übernehmen → Werte auswählen; Inhalte finden/eingrenzen → Suche; mehrere Einträge vergleichen/bearbeiten → Tabellen/Listen; Ergebnis oder Störung verstehen → Systemzustände; folgenreiche Änderung auslösen → destruktive Aktionen. Jede Zeile zeigt die wichtigste Nachbarseite, nicht eine ungerichtete Linkwolke.

Darstellung: eine kompakte Entscheidungstabelle ist hier geeigneter als ein verzweigtes Diagramm. Lehrzweck ist die Themenwahl. Abnahme: Leser können Informationssuche, Optionssuche und Tabellenansicht auseinanderhalten, ohne erst drei Unterseiten zu lesen.

### 2. Formulare und Validierung — vom Entwurf zur bestätigten Annahme

Inhaltsfolge: (1) gemeinsam speichern vs. sofort wirksame Einstellung; ein- vs. mehrschrittiger Ablauf, (2) Hauptweg mit Abzweigungen, (3) knappe Tabelle «Wann prüfen?», (4) Fehler korrigieren inklusive Fehlerübersicht/Fokus, (5) Abbruch, Entwurf und Wiederaufnahme, (6) drei offene Produktentscheidungen und gezielte Prüffälle. Field-Anatomie nicht erneut vollständig erklären.

Hauptgrafik mit expliziten Zweigen:

```text
Vorbereiten → Eingeben → Absenden → Prüfung
                                  ├─ korrigierbar → Übersicht/Feld → Eingeben
                                  └─ gültig → Übermitteln
                                             ├─ angenommen → Bestätigung → Ergebnis
                                             ├─ fachlich abgelehnt → Korrekturweg
                                             ├─ sicher nicht angenommen → Wiederholen
                                             └─ Ausgang unbekannt → Annahme klären
Eingeben → Verlassen → keine relevante Änderung / gespeichert → Rückweg
                    └─ ungespeichert → weiterbearbeiten / bewusst verwerfen
Gesicherter Entwurf → Wiederaufnahme → Aktualität prüfen → Eingeben
```

Lehrzweck: Feldgültigkeit, Versand und Speicherung sind drei verschiedene Aussagen. «Ausgang unbekannt» darf kein blindes «Nochmals speichern» erzwingen. Die Grafik ist ein UX-Ablauf, kein behaupteter SCXML-Contract.

Entscheidungstabelle Prüfzeitpunkt: unberührt → keine Fehlermeldung; erster Submit → relevante Angaben prüfen; bearbeitetes Feld verlassen → frühe Prüfung nur bei hilfreicher stabiler Korrektur; bereits gemeldeter Fehler → Korrektur zeitnah bestätigen, ohne bei jedem Zwischenzeichen zu stören; serverseitige Ablehnung → dort zuordnen, wo sie fachlich korrigierbar ist. Diese Hausregel bleibt als Vorschlag gekennzeichnet.

Fokusvorschlag für Review: nach fehlgeschlagenem Gesamtsubmit Fehlerübersicht als bewusster Einstieg, von dort Links auf Labels; während einzelner Korrekturen kein Fokuswechsel; nach Erfolg eindeutiges Ergebnisziel; bei mehreren Schritten Schrittüberschrift und erhaltene Werte. Keine pauschale Regel «immer erstes Feld fokussieren» parallel zur Übersicht.

Vollständigkeit: Abbruch eines noch nicht versendeten Entwurfs von Schliessen während laufender Übermittlung trennen; Schliessen ist nicht Beweis einer Serverstornierung. Wiederaufnahme erklärt gespeicherten Stand, fehlende Angaben und abgelaufene/konkurrierende Daten. Autosave, Entwurfsaufbewahrung, schützenswerte Werte und Doppelübermittlung benötigen Produktentscheidungen, keine generischen Versprechen.

Darstellung zusätzlich: kleines dreiteiliges Feldschema «Anforderung → lokaler Fehler → korrigiert» nur zur Erklärung des Übergangs; keine neue Input-Anatomieseite. Textalternativen und Ablauf bleiben ohne Interaktivität vollständig lesbar.

### 3. Werte auswählen — ein gültiger Wert statt einer beliebigen Zeichenfolge

Inhaltsfolge: (1) feste Werte/Freitext und einzelne/mehrere Werte klären, (2) Komponentenwahl, (3) Suchtext und bestätigte Auswahl unterscheiden, (4) Entfernen/Leeren/Abbruch, (5) nicht verfügbare Optionen und Wiederaufnahme, (6) Eingabe- und Plattformprüfungen.

Entscheidungsbaum: Ist Freitext fachlich gültig? Ja → Eingabe mit gegebenenfalls Vorschlägen; Nein → feste Auswahl. Sind Optionen kurz und gut vergleichbar? Ja → sichtbare Radio-Auswahl (eins) bzw. Checkbox-Gruppe (mehrere); Nein → Select für überschaubare bekannte Einzelwahl bzw. durchsuchbare Auswahl, wenn Auffinden erforderlich ist. Keine starre Zahl «ab sieben Optionen Combobox»: Länge, Vertrautheit, Vergleichsbedarf, Übersetzung und verfügbare Fläche entscheiden. Sofort wirksame Einstellung ist eine andere Aufgabe als eine Formularauswahl.

Hauptdarstellung: nebeneinander «Suchtext», «aktive Option», «übernommener Wert»; Zustandswechsel mit Beschriftung «bestätigen», «verwerfen», «entfernen». Lehrzweck: Hervorhebung ist keine Auswahl, Texteingabe keine Übernahme. Eine zweite kleine Matrix zeigt Einzel-/Mehrfachwahl und sofortiges Übernehmen vs. explizites Anwenden.

Nutzerweg: öffnen → Optionen verstehen → optional suchen → wählen → Ergebnis sichtbar; keine Treffer → Suchtext ändern/leeren, keinen beliebigen Wert stillschweigend übernehmen; Laden/Fehler → Wert und Suchtext erhalten, gezielt wiederholen; Schliessen/Abbruch → vorigen bestätigten Wert erhalten; Wiederöffnen → Auswahl erkennbar; inzwischen entfernte Option → erklären, bewusste Neuentscheidung ermöglichen. Mehrfachwahl zeigt gewählte Werte auch ausserhalb des aktuellen Filters und erlaubt einzelne Entfernung. Änderung einer übergeordneten Auswahl darf abhängige Werte nicht unbemerkt ersetzen.

Quellenbezug: shadcn dokumentiert die Bausteine; die Auswahlheuristik und Commit-Regeln sind Arve-Vorschläge. Lokale Radio-, Select-, Combobox- und Field-Fähigkeiten vor Verlinkung als «verfügbar» prüfen.

### 4. Suchen und Filtern — Ergebnismenge verstehen und wiederfinden

Inhaltsfolge: (1) Suchraum und Suchauslösung, (2) Filter ändern/anwenden, (3) Ergebnisstand und null Treffer, (4) Navigation zu Detail und zurück, (5) Abbruch, Störungen und Wiederaufnahme. Tabellenaufbau und Auswahlkomponenten nur verlinken.

Entscheidung: schnelle, reversible lokale Eingrenzung kann unmittelbar aktualisieren; teure/entfernte Suche oder mehrere zusammengehörige Änderungen spricht für explizites Anwenden. Nicht zwei Verhaltensweisen in einer Oberfläche unmarkiert mischen. Für sofortige Aktualisierung Eingabeabschluss und verzögerte Antworten berücksichtigen; keine feste universelle Millisekundenregel.

Zentrale Ablaufgrafik mit zwei Spuren «bearbeitete Kriterien» und «angewendete Kriterien/Ergebnisse». Lehrzweck: Ergebniszahl gehört zu den angewendeten Kriterien. Bearbeiten → anwenden → laden → aktuelle Treffer; ältere Antwort darf jüngere Kriterien nicht scheinbar überschreiben. Auf schmalen Ansichten Filterpanel: öffnen → Änderungen → anwenden oder verwerfen → Ergebnisbereich, angewendete Filter weiterhin sichtbar.

Nutzerweg: Suchraum erkennen → Begriff/Kriterien setzen → Zahl und aktive Filter lesen → Ergebnis öffnen → zurück zu Kriterien, Sortierung, Seite und sinnvoller Position. Null Treffer → einzelne Kriterien lockern oder alles zurücksetzen; vorher leerer Datenbestand → anderer Weg als Suchreset. Fehler → letzte erfolgreich geladene Menge als veraltet markieren oder Fehlerfläche zeigen, Kriterien erhalten. Suche abbrechen → Eingabe ändern/verlassen, ohne veraltete Antwort als aktuell darzustellen. Wiederaufnahme → gespeicherter Suchkontext wird neu geprüft; Ergebniszahl kann sich ändern. Suchwort leeren, einzelne Filter entfernen und «Alles zurücksetzen» haben jeweils einen definierten Umfang.

Ergänzende Darstellung: kompakte AND/OR-Schemata für Filtergruppen und angewendete Filter; deren fachliche Logik muss pro Produkt benannt werden. Prüffälle: schnelle Folgeänderung, kein Treffer, entfernter Eintrag, langsames Laden, Rückkehr nach Filteränderung, lange Filtertexte, Tastatur-/Touch-Auslösung. Fokus bleibt bei der Suchhandlung, Ergebnisänderung wird angemessen wahrnehmbar; nicht bei jedem Zeichen auf die Liste springen.

### 5. Systemzustände und Wiederherstellung — Ursache, Umfang, nächste Handlung

Inhaltsfolge: (1) Zustand bestimmen, (2) Zustandsmatrix, (3) Erstladen vs. Aktualisieren, (4) Wiederherstellungswege, (5) Übergänge und Rückmeldung. Farbe/Icons von Grundlagen, Meldungstext von Content Design, technische Statusereignisse vom Contract beziehen.

Die zentrale Matrix führt Situation, sichtbare Aussage, erhaltenen Kontext und mögliche nächste Handlung zusammen:

| Situation | Sichtbare Aussage / Handlung | Erhalt und Wiederaufnahme |
| --- | --- | --- |
| Erstladen | Bereich wird geladen; noch keine Leermeldung | Struktur stabil, andere nutzbare Bereiche zugänglich |
| Aktualisieren | Vorhandener Stand wird erneuert | Alte Inhalte nur mit erkennbarem Aktualitätsstand; keine stillschweigende Aktualität |
| Noch keine Inhalte | Bestand ist leer; mögliche erste Handlung, falls berechtigt | Keine Suchkorrektur suggerieren |
| Keine Treffer | Kriterien liefern nichts; Kriterien ändern/zurücksetzen | Suchkontext bleibt sichtbar |
| Teilfehler | Betroffener Bereich und Umfang benannt | Erfolgreiche Bereiche weiter nutzbar, gezielt wiederholen |
| Offline / temporärer Fehler | Abruf derzeit nicht möglich; konkreter Wiederholungsweg | Eingaben/Filter behalten, veraltete Inhalte kennzeichnen |
| Keine Berechtigung | Zugriff fehlt; zulässiger nächster Weg | Kein endloser Wiederholen-Button für unveränderte Rechte |
| Veralteter/konkurrierender Stand | Stand hat sich geändert; prüfen/aktualisieren | Ungespeicherte Arbeit erhalten, Konflikt nicht als Formatfehler |
| Schreibausgang unbekannt | Annahme noch nicht bestätigt | Status klären statt blind erneut schreiben |
| Bestätigter Erfolg | Wirkung und nächster Ort erkennbar | Ergebnis erreichbar; nur gültige Rücknahme anbieten |

Hauptgrafik: «Daten abrufen → vorhanden / initial leer / keine Treffer / Fehler»; separate Schleife «vorhanden → aktualisieren → aktuell oder veraltet mit Fehler». Schreibausgang als verlinkter Nebenpfad zum Formular und destruktiven Pattern, keine Vermischung mit reinem Lesefehler. Lehrzweck: gleich aussehende Leere kann verschiedene Ursachen und Aktionen haben.

Abbruch und Wiederaufnahme: Abbrechen eines Abrufs beendet Warten in der Oberfläche; Produkt legt tatsächliche Abbruchwirkung fest. Erneutes Öffnen prüft Aktualität. Wiederholungen sind gezielt, nicht ganze Seite zurücksetzen. Erfolgsfeedback verschwindet nicht, bevor die relevante Folge verständlich ist; zeitkritische oder persistente Aktionen nicht allein in flüchtiger Meldung anbieten. Ankündigungen so dosieren, dass wiederholte Updates die Bedienung nicht überlagern.

### 6. Destruktive Aktionen — Risiko vor Darstellung entscheiden

Inhaltsfolge: (1) Wirkung/Reversibilität klären, (2) Entscheidungsbaum, (3) Bestätigung oder Rücknahme gestalten, (4) Ausführen/Teilresultat/Unklarheit, (5) Abbruch und Fokus. Titel «bestätigen» durch «Destruktive Aktionen» ersetzen, Slug bleibt.

Entscheidungsbaum: Ist die Änderung zuverlässig und ausreichend lange rücknehmbar? Bei geringer Folge und verständlicher Wirkung → direkte Aktion mit echter Rücknahme erwägen. Bei erheblicher Folge, unbekanntem Umfang oder irreversibler Wirkung → explizite Bestätigung mit Objekt, Umfang, Konsequenz. Noch unklarer Umfang → erst klären, nicht bloss stärker warnen. Zusätzliche Eingabe einer Bestätigungsphrase nur bei begründetem hohem Risiko; nicht als allgemeines Rezept. Authentifizierung ist keine Ersatz-Erklärung der Folgen.

Hauptdarstellung als Ablauf mit zwei Enden: Auslösen → Umfang erklären → abbrechen (zur auslösenden Stelle) oder bestätigen → ausführen → bestätigt erledigt / teilweise erledigt / fehlgeschlagen / unbekannt. Nach Entfernen des Auslösers geht Fokus zu einer sinnvollen benachbarten Stelle oder Ergebnisüberschrift. Rücknahme führt zu sichtbarer Wiederherstellung; fehlgeschlagene oder abgelaufene Rücknahme erklärt den wirklichen Stand.

Nutzerweg deckt Einzelauswahl und Massenaktion ab: aktuelle Auswahlzahl und Geltungsbereich vor Ausführung zeigen; während Wartezeit keinen Erfolg behaupten; Teilfehler aufzählen und nur fehlgeschlagene Einträge erneut anbieten; bei unklarem Ergebnis zuerst Status abgleichen. Dialog schliessen während Ausführung ist nicht gleich Ausführung stoppen. Wiederaufnahme nach Navigation zeigt aktuellen Stand, keine erneute automatische Auslösung. Systemzustände liefert gemeinsame Fehlerregeln, hier bleiben Risiken und Wiederherstellungswirkung.

Darstellung zusätzlich: zwei nebeneinander annotierte Schemas «Bestätigen» und «Rückgängig», je mit Voraussetzungen. Lehrzweck ist die Auswahl der Absicherung, keine UI-Dekoration. Auf schmalen Ansichten müssen Konsequenz und Aktionen ohne abgeschnittene Inhalte erreichbar bleiben; keine Pflicht, stets dasselbe Overlayformat zu verwenden.

### 7. Tabellen und Listen — vergleichen, öffnen oder gemeinsam bearbeiten

Inhaltsfolge: (1) Aufgabe bestimmt Darstellung, (2) Regionen/Informationspriorität, (3) Sortierung/Seitennavigation, (4) Auswahl und Massenaktionen, (5) schmale Darstellung, (6) Rückkehr/Störungen. Bestehende Rechnungsliste nur am Ende als Implementierungsbeispiel.

Entscheidungstabelle: Werte zwischen Einträgen vergleichen → Tabelle; Einträge einzeln erfassen/öffnen mit unterschiedlichem Inhalt → Liste; visuelle Exploration → erst begründete alternative Darstellung, keine pauschale Cards-Regel. Ein Data-Table-Baustein ist noch keine Entscheidung über benötigte Funktionen.

Hauptgrafik: neutrales Schema mit Kontext/Ergebniszahl, Such-/Filterzugang, Spaltenkopf, Zeileninhalt, getrennten Zeilenaktionen, Auswahlinformation, Seitenwechsel. Danach breite und schmale Variante mit verbundenen Informationsrollen. Lehrzweck: wesentliche Vergleichsinformation bleibt erreichbar, auch wenn die Anordnung wechselt. Für echte zweidimensionale Vergleiche begrenzten horizontalen Tabellen-Überlauf erwägen; für Lesen pro Eintrag Listenform. Keine pauschale Spaltenausblendung und keine automatisch identische Semantik aller Varianten.

Nutzerweg: Bestand laden → sortieren/eingrenzen → vergleichen → öffnen → zurück zum Kontext. Bei Auswahl: wählen → Umfang lesen (aktuelle Seite oder alle Treffer) → Aktion → Bestätigung falls erforderlich → Ergebnis je Eintrag → Auswahl abgleichen. Filterwechsel/Seitennavigation definiert ausdrücklich, ob Auswahl erhalten bleibt, auf welchen Bestand sie sich bezieht und wie sie geleert wird. Massenaktion und Zeilenaktion dürfen nicht verwechselt werden.

Fehler/Abbruch/Wiederaufnahme: Ladefehler erhält Sortierung und Filter; Auswahl abbrechen ist «Auswahl aufheben», nicht Daten löschen; Teilfehler erhalten identifizierbare betroffene Einträge; entfernte oder inzwischen gesperrte Einträge werden aus Auswahlwirkung nachvollziehbar ausgeschlossen; Rückkehr prüft veränderte Daten und erhält den sinnvollen Kontext. Seitengrösse/Sortierung ändern führt zu definierter Position und keiner scheinbar leeren Folgeseite. Dynamisches Nachladen darf das Wiederfinden nicht unterlaufen.

Prüfmatrix: null/ein/viele Einträge; lange Zellwerte; horizontales Scrollen; grosse Schrift; Sortierung mit gleichen Werten; Auswahl über mehrere Seiten; Fokus nach Zeilenlöschung; Zeilenlink plus getrennte Buttons; nicht nur per Hover verfügbare Aktionen.

## Wechselwirkungen und Zuständigkeiten

| Partner | Pattern übernimmt | Partner bleibt führend | Konkreter Verweis |
| --- | --- | --- | --- |
| Komponenten | Auswahl nach Aufgabe, Kombination und Ablauf | Anatomie, Varianten, komponentenspezifische Bedienung, tatsächlicher Stand | `components/input`, `components/button`, `components/checkbox`, `components/switch`, `komponenten-auswahl` |
| Layout | Aufgabenschritte und Priorität von Information/Aktion | Regionen, Umbruch, Lesereihenfolge und Seitenfamilien | `layout`, `detailseite`, `seitenstruktur-und-navigation` |
| Content Design | Welche Meldung wann benötigt wird | Formulierung, Labelkonsistenz, Datum/Zahl, Lokalisierung | `content-design`; Meldungsschema Zustand + Folge + nächste Handlung |
| Grundlagen | Bedeutungen im Ablauf, benötigte Unterscheidungen | Farbe, Typografie, Abstand, Bewegung und jeweilige Werte | `farben`, `abstaende`, künftig getrennte Grundlagen |
| Inklusive Gestaltung | Konkreter Tastatur-/Fokus-/Rückmeldeweg je Pattern | Gemeinsame Prüfmethoden und Kriterien | `barrierefreiheit` |
| Plattformen | Gemeinsame Aufgabe, Erhalt, Ergebnis und Wiederaufnahme | Native Navigation, Picker, Tastatur, Gesten und Hintergrundverhalten | Plattformmatrix als strukturierte Relation; keine nicht verifizierten Slugs erfinden |
| Contracts | Benötigte Fähigkeiten und sichtbare Wirkung | CEM/API, Zustandsautomat, HTML/ARIA, technische Ereignisse/Tokenbindungen | Gepinnte lokale Revisionen; offene Fähigkeiten als Lücke, nicht als vorhanden ausgeben |

Die vier vorhandenen Komponentenseiten reichen nicht als Nachweis für sämtliche Pattern. Field, Radio, Select/Combobox, Dialog/Alert Dialog, Table, Status-/Feedback-Bausteine und Navigation sind gezielt nach Bedarf zu überprüfen. Keine upstream-Komponente automatisch als lokale Komponente registrieren. Formulare benötigen zudem Verhalten oberhalb eines einzelnen Inputs; dessen Contract kann weder serverseitige Annahme noch sichere Wiederholung belegen.

Responsive und inklusive Regeln werden pro Pattern im konkreten Weg behandelt: lange übersetzte Labels und Fehlermeldungen, grosse Schrift/Zoom, schmale Breite und geringe Höhe, Bildschirmtastatur, Touch ohne Hover, Tastatur ohne Maus, Screenreader ohne visuelle Statussuche, reduzierte Bewegung und RTL. Der gemeinsame Prüfstand unterscheidet Web/iOS/Android und getestete Kombinationen. Ein Web-Flowchart rechtfertigt keine native Freigabe. Native Wiederaufnahme nach Hintergrundwechsel und abgebrochener Verbindung ist ein eigener Nachweis.

## CMS- und Darstellungsbedarf

Sofort mit vorhandenem Schema möglich: Titel/Gliederungen, präzise Kurzbeschreibungen, Richtext-Links, gezielte Do/Don't und Bilder. Nicht alle Inhalte in freie Vorlagen-Textareas pressen. Medien werden aktuell ausschliesslich über Do/Don't-Blöcke eingebettet; eine neutrale Ablaufgrafik sollte keinen künstlichen «Do»-Stempel benötigen.

Für kohärente Umsetzung gezielt ergänzen: neutraler Figure-Block mit Bild, Bildunterschrift, Lehrzweck und vollständiger Textalternative; einfache semantische Vergleichstabelle; stabile Abschnittsanker; verwandte Seiten als Beziehungen; Quelleneintrag mit URL/Abrufdatum/belegter Aussage; Regelstatus und Geltungsbereich; offene Entscheidung mit verantwortlicher Rolle; Ablösungsrelation/Redirect; Plattform-/Prüfstand. Flows zunächst als kuratierte schematische Medien plus Text; ein universeller Diagrammeditor oder interaktiver Prototyp ist keine Voraussetzung.

Ausgabeentscheidung Vorlage/Haupttext ausdrücklich im CMS bzw. Renderer modellieren, damit Zusammenfassungen nicht noch einmal als fünf Kapitel erscheinen. MCP muss dieselben Regeln, Texte, Textalternativen, Beziehungen und Ablösungshinweise erhalten. Bilder allein reichen nicht. Kompakte Metadaten dürfen fachliche Einschränkungen nicht verstecken; Detailnachweise bleiben separat erreichbar.

## Umsetzung als zusammenhängendes Themenpaket

1. Führende Seiten, Begriffe, Slug-/Ankerplan und gemeinsame Zustandsbegriffe festlegen. Vorher Snapshot aller neun publizierten Inhalte und eingehender Verweise sichern.
2. Formularreferenz redaktionell entschlacken und Systemzustände vervollständigen. Sie definieren gemeinsamen Fehler-/Wiederaufnahme-Wortschatz, ohne voneinander vollständig abhängig zu werden.
3. Auswahl und Suche gemeinsam ausarbeiten: feste Option vs. Ergebnismenge, bearbeitet vs. angewendet, Schliessen vs. Übernehmen. Danach Tabellen und destruktive Aktionen anhand derselben Resultat-/Teilfehlerregeln.
4. Neutrale Grafiken und benötigte CMS-Blöcke einsetzen; jeden Ablauf linear lesbar machen. Komponentenfähigkeit und Plattformstand gezielt abgleichen; fehlende Fähigkeiten sichtbar halten.
5. Übersicht zuletzt aus den tatsächlichen Zielseiten bauen. Alte Seiten erst konsolidieren, wenn Verweise, Suche und MCP geprüft sind. Keine acht separat gestarteten Textprojekte mit anschliessender Dublettenbereinigung.

## Abnahmekriterien

- Alle neun Ausgangsseiten sind in Migration/Erhalt abgebildet; kein alter Pfad oder fachlicher Einzelhinweis geht verloren. Keine doppelt gepflegte Zustands- oder Validierungsregel.
- In einem kurzen Lesetest finden Design und Produkt für jede der sechs Aufgaben den richtigen Einstieg und können eine Entscheidung mit ihrer Voraussetzung erklären. Anzahl der Wörter oder ausgefüllten Felder ist kein Qualitätskriterium.
- Jede Zielseite hat eine passende primäre Darstellung mit konkretem Lehrzweck; Formulargrafik steht bei der Ablauferklärung, nicht hinter Quellen. Die gleiche Aussage erscheint nicht in Vorlage, Langtext und Hinweis erneut.
- Alle beschriebenen Nutzerwege haben Erfolg, Korrektur/Störung, Abbruch und Wiederaufnahme; irrelevante Zweige werden begründet weggelassen. Unbekannter Schreibausgang und Teilresultate sind explizit behandelt.
- Formular: Prüfzeitpunkt, Fokusziel, Persistenz und sichere Wiederholung sind entschieden oder neben dem betroffenen Pfad ausdrücklich offen. Keine allgemeine Freigabe bei offenen Fähigkeiten.
- Auswahl/Suche: Suchtext, aktiver Kandidat, übernommener Wert und angewendete Kriterien sind unterscheidbar; keine Treffer und Ladefehler verlangen verschiedene Handlungen.
- Destruktive Aktion: Reversibilität, Umfang, Abbruchwirkung, Ergebnis und Rücknahme sind eindeutig; tatsächliche Wiederherstellbarkeit ist geprüft, bevor sie versprochen wird.
- Tabellen: Vergleichsinformation, Auswahlumfang und Rückkehrkontext bleiben in breiter und schmaler Darstellung verständlich; Massenaktion zeigt Teilresultate.
- Grafiken haben beschriftete Beziehungen, lesbare Textalternativen, keine abgeschnittenen Inhalte und keine allein farblichen Bedeutungen. Text und Grafik widersprechen sich nicht.
- Konkrete Wege werden mit Tastatur, Screenreader, schmalem/kurzem Viewport, vergrössertem Text und langen lokalisierten Inhalten geprüft; plattformspezifische Resultate separat protokolliert. Dies sind geplante Prüfungen, nicht hier behauptete Ergebnisse.
- Quellenbeleg, Arve-Vorschlag und lokale Beobachtung sind getrennt; technische Details verlinken tatsächliche Contractrevisionen. Öffentliches Handbuch und MCP liefern nach Veröffentlichung denselben fachlichen Stand.

## Noch benötigte Entscheidungen

Produkt/Design entscheidet pro System über Formularpersistenz, Prüfzeitpunkt, Commit-Modi von Auswahl/Filtern und Risiko-/Rücknahmepolitik. Accessibility-Review konkretisiert Fokus- und Ankündigungsverhalten. Plattformverantwortliche bestätigen native Abweichungen. Engineering prüft Annahmestatus, sichere Wiederholung, veraltete Antworten und tatsächliche Komponentenfähigkeiten im Contract. Redaktion entscheidet über führende Seiten und verständliche Benennung. Der Plan liefert dafür konkrete Vorschläge und Prüfsituationen; er ersetzt diese fachlichen Nachweise nicht.
