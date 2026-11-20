# Eintrag verstehen · Detail

Stand 18.11.2026 · Lückenliste für einen ersten arbeitsfähigen Gestaltungsstand im Web auf Desktop und schmalen Ansichten. Keine Umsetzung oder Freigabe. Native Anwendungen sind ausserhalb dieses Auftrags. Pilotblocker betreffen die selbstständige Gestaltungsarbeit des Teams: nachvollziehbare Entscheidungen und Zustandsvorlagen genügen; echte Berechtigungsverwaltung, Produktionsbackend oder funktionsfähige Fehler-APIs werden hier nicht verlangt.

Aufgabe: Übersicht oder Direktlink → Objekt identifizieren → Haupt- und Zusatzinformationen verstehen → passende Aktion → Rückweg. Massstab: [Inhaltsstandard](../content-standard/README.md), insbesondere BAS-03–08, sowie [Patterns/Layouts](../content-standard/patterns-layouts.md), PAT-03–06/14 und LAY-02–05/11/12/15.

## Befund und Quellen

Die Grundlage fehlt nicht: Die veröffentlichte Detailseite beschreibt Identität, Status, Aktionspriorität, Informationsreihenfolge, Teilfehler und kompakte Anordnung. Sie kennzeichnet sich ausdrücklich als Arve-Vorschlag. Die Layoutdemo illustriert nur zwei Regionen; die Rechnungsdemo besitzt bereits einen konkreten Objektkopf, Status, Betrag, Downloadlink und einen kontexterhaltenden Rücklink. Keines dieser Beispiele belegt eine freigegebene, belastbare Detailvorlage.

Gezielt gelesen am 18.11.2026 über BrowserOS neo und im Repository:

| Kürzel | Nachweis | Reichweite |
|---|---|---|
| H | [Handbuch Detailseite](http://127.0.0.1:3010/systems/shadcn/detailseite), einschliesslich „Lokaler Abgleich · Referenzausbau 02“; [Quellfassung](../../../scripts/content/shadcn-reference-pages.ts) `shadcn-detailseite` | Aktuelle sichtbare Regeln und ausdrücklich offene Entscheidungen. Live-Text enthält ergänzende Abgleichhinweise, die über diese Quellfassung hinausgehen. |
| N | [Seitenstruktur und Navigation](http://127.0.0.1:3010/systems/shadcn/seitenstruktur-und-navigation) | Tabs versus eigene Seite und Folge der Zusatzinformationen vorhanden; kein vollständiger Rückkehrvertrag. |
| L | [Layoutdemo Detail](http://127.0.0.1:3010/systems/shadcn/layout/detail), [Darstellung](../../../src/docs/layout-examples.tsx), [Metadaten](../../../src/docs/layout-metadata.ts), [CSS](../../../src/app/(docs)/docs.css) `.layout-split`/`.layout-sticky` | Projekttext und Zusatzinfos; kein objektspezifischer Titel/Aktionsbereich. 2:1, Haftung 24 px, Auflösung bis 639 px sind Beispielwerte. |
| R | [Rechnungsdetail RE-1048](http://127.0.0.1:3010/systems/shadcn/beispiele/rechnungen/RE-1048?q=Hosting&status=open), [Detailquelle](../../../src/app/(docs)/systems/shadcn/beispiele/rechnungen/[id]/page.tsx), [Daten](../../../src/docs/invoices/data.ts), [Liste](../../../src/docs/invoices/list.tsx) | Fünf feste Beispieldatensätze. Identität, Datum, Status, Betrag und Download vorhanden. `q`/`status` werden zur Liste zurückgegeben. Kein Nachweis echter Rechte oder asynchroner Detailzustände. |

Begrenzt tatsächlich geprüft: Detailhandbuch, Navigationsseite, Layoutdemo und Rechnungsdetail gelesen; Rücklink von RE-1048 mit `q=Hosting&status=open` angeklickt, Liste zeigt einen Treffer RE-1048. Layoutdemo bei emulierten 390 × 844 CSS-Pixeln: eine 354-px-Spalte, Zusatzbereich `position: static`, kein horizontaler Dokumentüberlauf. Emulation danach aufgehoben. Das prüft nur den kurzen vorhandenen Inhalt, keine realen Mobilgeräte, lange Daten, Fokusfolge, Zoom oder Berechtigungen. Download nicht ausgelöst.

## Priorisierte Arbeitspakete

D = Dokumentationslücke einer vorhandenen Regel; E = offene Design-/Produktentscheidung; B = fehlende wiederverwendbare Zusammenstellung oder Designressource. P0 blockiert den vereinbarten Pilotweg, P1 wird für belastbare Erweiterung benötigt. „Blocker“ bezeichnet hier das fehlende Ergebnis, nicht einen nachgewiesenen Laufzeitfehler.

Gemeinsame Abhängigkeiten führt die Gesamtliste: BASE-01 Pilotdatenfall, BASE-02 visuelle Referenz, BASE-03 geprüfter Zugriff auf vorhandene `.fig`-/Teamressourcen, BASE-04 verantwortete Regeln, BASE-05 unabhängiger Gestaltungstest. Die folgenden Punkte konkretisieren nur die Detailaufgabe. Insbesondere vor einer neuen Ressource unter DETAIL-07 vorhandene Teamressourcen nach BASE-03 prüfen; deren Abwesenheit ist durch diesen Repository-/Browserabgleich nicht bewiesen.

### DETAIL-01 · P0 · E · Objekt und Informationspflichten festlegen

- **Ist/Beleg:** H verlangt Identität und entscheidungsrelevante Angaben vor Zusatzinfos. L nennt nur „Projektübersicht“; R zeigt Rechnung, Datum, Betrag, Status. Ein übertragbarer Pflicht-/Optional-Vertrag ist nicht festgelegt.
- **Benötigtes Ergebnis:** Für den Pilotobjekttyp festlegen: eindeutige Identität, erklärender Titel, Statusbedeutung, notwendige Hauptinformationen und optionale Metadaten. Fehlend, unbekannt und nicht anwendbar unterscheiden; entscheiden, wann eine leere Zusatzregion ganz entfällt. Keine neue allgemeine Rasterregel erfinden.
- **Abhängigkeiten/Verantwortung:** Produktverantwortung und Content; vorhandene Regionsregel H. Vor DETAIL-03/07.
- **Prüfbares Szenario:** Direktaufruf mit langem Titel und fehlender optionaler Verantwortung: Objekt bleibt eindeutig, wesentlicher Betrag/Frist/Status steht vor Zusatzinfos; keine leere Card suggeriert einen Fehler.
- **Einordnung:** Pilotblocker; ohne Pflichtinformationen kann eine zweite Person die Detailseite nicht fachlich richtig bestücken.

### DETAIL-02 · P0 · E · Einstieg und Rückkehr verbindlich machen

- **Ist/Beleg:** H macht Kontexterhalt vom Produkt abhängig; N behandelt vor allem Tabs. R erhält bereits `q` und `status`; dieser Teil ist keine fehlende Implementierung. Scrollposition, Fokusziel und Direktaufruf ohne Herkunft sind nicht geregelt.
- **Benötigtes Ergebnis:** Verbindlicher Web-Vertrag für Listenrücklink, Browser-Zurück, Direktlink und fehlende Herkunft; festhalten, welche Filter, Sortierung, Seite und Auswahl tatsächlich existieren und erhalten werden. Fokus-/Wiederauffindungsziel festlegen; nicht angebotene Pagination nicht ergänzen.
- **Abhängigkeiten/Verantwortung:** Übersicht/Suche, Produkt und Inklusion; vorhandenen R-Rückweg wiederverwenden.
- **Prüfbares Szenario:** Gefilterte Übersicht → RE-1048 → Rücklink erhält Suchbegriff und Status und macht den Ausgangseintrag auffindbar. Derselbe Detail-Direktlink ohne Parameter führt nachvollziehbar zur ungefilterten Liste. Browser-Zurück separat prüfen.
- **Einordnung:** Pilotblocker für den durchgängigen Arbeitsweg; zusätzliche Mengenfunktionen später nur bei Angebot.

### DETAIL-03 · P0 · E · Status, Rechte und nächste Handlung zuordnen

- **Ist/Beleg:** H nennt Aktionspriorität und delegiert sensible Metadaten an die Produktberechtigung. R bietet für jeden festen Status denselben Download; ein Rechtetest ist nicht vorhanden. Eine Badge allein erklärt keine Handlungserlaubnis.
- **Benötigtes Ergebnis:** Kleine Matrix für Pilotstatus und – sofern mehrere Rollen zum Scope gehören – Rolle: sichtbare Informationen, primäre/sekundäre Aktion, ausgeblendet versus nicht ausführbar samt Erklärung. Eine einzige Rolle ausdrücklich festhalten, wenn Rollenunterschiede nicht zum Scope gehören. Download-only als legitimen Detail-Scope bestätigen oder weitere Aktionen ausdrücklich aufnehmen; Bearbeiten/Löschen nicht aus dem Layout ableiten.
- **Abhängigkeiten/Verantwortung:** Produkt, Berechtigungsverantwortung und Content; DETAIL-01. Bei folgenreichen Aktionen eigenes bestehendes Pattern referenzieren.
- **Prüfbares Szenario:** Leseberechtigte Person erkennt Status und erlaubte Aktion. Bei unterstützten Rollenunterschieden erhält eine Person ohne Downloadrecht die entschiedene Erklärung/Alternative; sensible Metadaten erscheinen nur nach festgelegter Regel.
- **Einordnung:** Pilotblocker; echte Rechteprüfung bleibt technische Aufgabe, diese Liste erteilt keine Sicherheitsfreigabe.

### DETAIL-04 · P0 · E · Detailunterbrechungen bis zum Ausweg entscheiden

- **Ist/Beleg:** H unterscheidet Laden, fehlendes Objekt, fehlende Rechte und Teilfehler bereits. R ruft für unbekannte ID `notFound()` auf; die Detailseite besitzt keine zuordenbaren Lade-/Teilfehler-/Rechtevarianten. Eine allgemein neue Zustandslehre wäre Doppelarbeit.
- **Benötigtes Ergebnis:** Detailbezogene Zustandstabelle auf bestehender Regel: Ursache, noch sichtbarer Objektbezug, Meldung, erlaubte nächste Handlung, Retry versus Rückweg. Zusatzinfos dürfen bei Teilfehlern den verfügbaren Hauptinhalt nicht verdrängen. Aussage „keine Daten“ nicht mit „kein Zugriff“ vermischen.
- **Abhängigkeiten/Verantwortung:** Systemzustände, Produkt, technische Zustandsquelle; DETAIL-01/03.
- **Prüfbares Szenario:** Direktlink auf entfernte ID bietet verständlichen Ausweg; Zugriff verweigert zeigt die entschiedene Sichtbarkeitsgrenze; allein ausfallende Zusatzinfos lassen Hauptinhalt und zulässige Aktion nutzbar. Ladezustand wird nicht als fertige leere Seite ausgegeben.
- **Einordnung:** Pilotblocker für tatsächlich mögliche Zustände; Offline-/Konfliktvarianten nur bei entsprechendem Produktangebot vertiefen.

### DETAIL-05 · P0 · E · Umbruch und Haftung mit belastetem Inhalt entscheiden

- **Ist/Beleg:** H fordert inhaltsabhängigen Umbruch und nicht verdeckende Haftung und nennt die Prüfung einer hohen Zusatz-Card bei geringer Höhe ausdrücklich offen. L implementiert lediglich einen Breitenumbruch bei 639 px; der kurze 390-px-Fall funktioniert im begrenzten Check.
- **Benötigtes Ergebnis:** Für Pilotinhalt Container-/Abstandsbezug und Auslöser für Stapeln/Deaktivieren von Haftung begründet entscheiden. Bestehende Grundlagen verwenden; 639 px und 24 px nicht als Systemtoken freigeben. Lange Titel, Aktionen, untrennbare Kennungen und hohe Zusatzinformationen in die Entscheidung einbeziehen.
- **Abhängigkeiten/Verantwortung:** Layout/Grundlagen und Inklusion; DETAIL-01/03. Ein eigener nativer Entwurf ist nicht erforderlich.
- **Prüfbares Szenario:** Breite, niedrige Ansicht mit hoher Zusatzregion sowie schmale Ansicht mit mehrzeiliger Aktion: Inhalt und Fokusziel bleiben erreichbar, Reihenfolge bleibt gleich, keine verdeckten Aktionen. Textvergrösserung zusätzlich prüfen; der bisherige 390-px-Kurztest ersetzt dies nicht.
- **Einordnung:** Pilotblocker Desktop + mobiles Web; kein Nachweis eines derzeitigen Overflowfehlers, sondern offene belastete Entscheidung.

### DETAIL-06 · P0 · D · Vorhandene Regeln am vollständigen Arbeitsweg auffindbar verbinden

- **Ist/Beleg:** H enthält bereits wesentliche Regeln und Links zu N/L, aber nicht zur konkreten Rechnungsdetail-Demo R. L zeigt eine andere, unvollständige Aufgabe; R zeigt den Rückweg, erklärt aber nicht, welche Layoutregeln demonstriert werden.
- **Benötigtes Ergebnis:** Eine knappe annotierte Anleitung verbindet Übersicht/Direktlink → Objektkopf → Haupt-/Zusatzinhalt → Aktion → Rückkehr und verlinkt die führenden bestehenden Aussagen. R als begrenzten Nachweis für Identität und Parametererhalt benennen; L als Anordnungsillustration. Verantwortlichkeit, Vorschlagsstatus und offene Punkte pro Anwendung sichtbar machen.
- **Abhängigkeiten/Verantwortung:** Handbuchredaktion; vorhandene Regeln sofort verlinkbar, endgültige Pilotanleitung nach DETAIL-01–05. Keine erneute Formulierung von Tabs-/Regionsregeln nötig.
- **Prüfbares Szenario:** Zweite Person findet vom Handbuch aus den zutreffenden Beispielweg und kann benennen, welche Teile geprüft sind und welche Entscheidung noch fehlt, ohne Demo mit freigegebener Vorlage zu verwechseln.
- **Einordnung:** Pilotblocker für selbstständige Teamnutzung; reine Navigation zwischen Demos reicht nicht.

### DETAIL-07 · P0 · B · Zusammenhängende Detailvorlage mit Zustandsvarianten bereitstellen

- **Ist/Beleg:** L besitzt Haupt-/Zusatzregionen ohne konkreten Objektkopf/Aktion; R besitzt konkrete Fakten/Aktion ohne reichhaltige Haupt-/Zusatzregion und Belastungsvarianten. In den geprüften Artefakten fehlt eine wiederverwendbare Zusammenstellung, die beide Anforderungen zusammenführt. Einzelne HTML-Elemente, Links und Cards fehlen nicht.
- **Benötigtes Ergebnis:** Eine auffindbare annotierte, wiederverwendbare Web-Designressource für den gewählten Pilottyp: Objektkopf, Status, Aktionsgruppe, Hauptinhalt, optionale Zusatzregion, Zustandsplatzierung und Rückweg. Varianten kurz/lang, Zusatzregion entfällt, Teilfehler, fehlend/kein Zugriff, breit/schmal. Vorhandene Teamressource zuerst nach BASE-03 prüfen und gegebenenfalls ergänzen; bestehende Bausteine zusammensetzen, kein neues Universal-Komponentenpaket verlangen. Zustandsdarstellungen können für die Gestaltungsfreigabe statisch und klar als solche bezeichnet sein.
- **Abhängigkeiten/Verantwortung:** Design-System-/Layout-Verantwortung; DETAIL-01–05, Dokumentation DETAIL-06. Implementierung und Abnahme separat beauftragen.
- **Prüfbares Szenario:** Zweite Person setzt zwei unterschiedlich lange Datensätze in dieselbe Vorlage und kann alle Regionen/Varianten anhand derselben Regeln erklären; Review protokolliert Inhalt, Designentscheidung und tatsächlichen Umsetzungsnachweis getrennt.
- **Einordnung:** Pilotblocker als Ressource für Wiederverwendung; eine reine Rechnungs-Miniseite reicht nicht für den verlangten Haupt-/Zusatzinhaltsfall.

### DETAIL-08 · P1 · B · Erweiterte Detailvarianten erst nach Bedarf aufbauen

- **Ist/Beleg:** N grenzt gleichrangige Tabs von eigenen Seiten ab; H erwähnt Unterseiten und Priorität. L/R enthalten weder Verlauf, verwandte Objekte noch komplexe Nebenaktionsgruppen. Daraus folgt keine Pflicht, sie sofort zu bauen.
- **Benötigtes Ergebnis:** Nach bestätigtem Produktbedarf ergänzende Ressourcen für Verlauf/verwandte Inhalte oder mehrere Aktionen; jeweilige Auswahlgrenze zur einfachen Detailvorlage dokumentieren. Keine frei wählbaren Tabs für Pflichtschritte.
- **Abhängigkeiten/Verantwortung:** Produktbedarf, bestehende Tabs-/Navigationsregeln, DETAIL-07. Ohne Auslöser ausserhalb des Piloten halten.
- **Prüfbares Szenario:** Erst bei zwei gleichrangigen Objektansichten bleibt die Identität beim Wechsel sichtbar; ein eigenständiges Ziel erhält eigenen Titel/Adresse. Rückkehr und schmale Anordnung werden gezielt belegt.
- **Einordnung:** Später, kein Pilotblocker. Native Plattformvarianten sind auch hier nicht Teil des Auftrags.

## Reihenfolge und Grenze

Zuerst DETAIL-01–04 fachlich festlegen, parallel vorhandene Verweise unter DETAIL-06 verbinden. Danach mit realistischen Inhalten DETAIL-05 entscheiden und DETAIL-07 erstellen/prüfen. DETAIL-08 bleibt bedarfsabhängig. Diese Liste nennt benötigte Ergebnisse; sie behauptet weder ihre Umsetzung noch eine allgemeine Freigabe des Handbuchs oder der Demos.
