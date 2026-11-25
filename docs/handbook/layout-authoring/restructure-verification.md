# Layoutstruktur · Migration und Prüfung

24.11.2026. Umsetzung des frischen UX-Reviews: fachliche Gliederung bereinigen, Varianten zusammenführen, allgemeine Regeln vom Projektpiloten trennen und URLs der tatsächlichen Hierarchie zuordnen.

## Ergebnis

Die Hauptauswahl führt über fünf Seitenaufgaben, vier Seitenanordnungen und drei kombinierbare Inhaltsmuster. Seitenrahmen/Navigation ist eine gemeinsame Grundlage. Beispiele bilden einen eigenen Zweig; sie konkurrieren nicht mehr mit allgemeinen Seitentypen.

- Narrow und Wide gehen in **Ein Inhaltsbereich** auf.
- Drei-/Vier-Spalten-Varianten gehen in **Kartenraster** auf; die Auswahl erklärt zuerst Gleichrangigkeit beziehungsweise Gewichtung.
- **Abschnitte untereinander** setzt keine Kartenrahmen voraus und zeigt beide Darstellungen am gleichen Inhalt.
- **Erstellen und Bearbeiten** ist eine gemeinsame allgemeine Anleitung mit ihren unterschiedlichen Ausgangslagen.
- **Formularfelder und Gruppen** zeigt zwei inhaltliche Gruppen und mehrere Felder statt nur eines Pilot-Namensfelds.
- Der **Projektpilot** bewahrt die vollständigen bisherigen Detail-, Bearbeitungs-, Erstellungs- und Formularausarbeitungen in vier Ansichten. Datenmodell, Namensgrenzen, q/status und konkrete Speicher-/Rückkehrentscheidungen bleiben dort.
- Die drei früher separat eingespritzten Demos sind eigenständige, kopierbare CMS-Seiten unter **Beispiele**. Ihre Namen beschreiben die gezeigte Anordnung.

## Daten und Kompatibilität

Die laufenden Inhalte bleiben datenbankbasiert: `scripts/content/layout-restructure.json` hält die redaktionelle Ausarbeitung für die Migration; `scripts/restructure-layouts.ts` wendet sie mit Versions-/Entwurfsschutz in einer Transaktion an. Der aktualisierte Referenzsnapshot liefert denselben veröffentlichten Inhalt beim Erststart und für statische Ausgaben.

Es gab keine Schemaänderung und keine Löschungen. Die erste Anwendung plante 25 Datensätze: 18 bestehende wurden übernommen/zusammengeführt und sieben neue angelegt. Zusätzlich wurden auf sieben weiteren shadcn-Seiten ausschliesslich betroffene URL-Felder angepasst. Unbeteiligte Seiten und alle Implementierungsdatensätze wurden innerhalb der Transaktion auf Unverändertheit geprüft. Drei bestehende Datensätze bleiben als gekennzeichnete Weiterleitungen erhalten und werden aus Navigation und Suche ausgeblendet. Ihre IDs und frühere Payload-Versionen bleiben bestehen.

Die Pfade entstehen aus den tatsächlichen CMS-Elternbeziehungen in `pagePath`, nicht aus einer alleinstehenden hardcodierten Sitemap. Beispiel: `/systems/shadcn/layout/page-layouts/main-sidebar`. Bestehende andere Handbuchfamilien und Komponentenadressen bleiben im bisherigen Format. Namen der technischen Segmente sind von deutschen Seitentiteln unabhängig.

`src/docs/layout-legacy.json` führt alte Adressen und Abschnittskennungen zur Kompatibilität. Der Portalrouter und MCP können damit frühere Kennungen weiterverwenden. Alte Rezeptnamen sind zusätzlich als Suchbegriffe verfügbar. In der statischen Ausgabe führen Client-Weiterleitung und eine No-JavaScript-Aktualisierungsadresse zum neuen Ziel; ein normaler Link bleibt verfügbar. Suchparameter und Sprungmarken werden bei aktivem JavaScript erhalten.

## Ausgeführte Prüfungen

- Migration zunächst ohne Schreibzugriff als Vorschau geprüft, dann transaktional angewendet. Ein weiterer Anwendungslauf meldet `create: 0`, `changed: 0`; keine zusätzlichen Inhaltsversionen für unveränderte Daten erzeugt.
- TypeScript-Prüfung und Next-Routentypen bestanden. Die drei Autoren-Skills formal validiert; die fachlichen Anpassungen betreffen Aufgabenfamilien, Varianten, kombinierbare Muster und die Trennung von Beispielverträgen.
- Vier Pfadtests bestanden: CMS-Hierarchie und Titelunabhängigkeit; echte Ziele für alle Kompatibilitätsadressen; Übertragbarkeit in ein kopiertes System; Auffindbarkeit alter Rezeptnamen nach der Zusammenführung.
- MCP-Unitprüfungen einschliesslich Suche und begrenzter Regelverweise bestanden. Die frühere Main+Sidebar-Verknüpfung auf `responsive` wurde auf den tatsächlich aktuellen Regelblock `ms-rules` umgestellt, einschliesslich der zugehörigen Patternverweise.
- Lokaler MCP mit echtem SDK-Client: fünf Layout-Hauptzweige, fünf Aufgaben, vier Anordnungen, drei Inhaltsmuster und vier Beispiele bestätigt. Hierarchische Seitenaufrufe und kompakte Zweigabrufe erfolgreich. Allgemeine Detail-/Formularseiten enthalten die geprüften Pilotmarker für Graphemgrenzen/q-Parameter nicht; der explizite Pilot enthält die ursprünglichen Inhalte. Frühere Abschnitts- und Beispielaufrufe liefern das kanonische Ziel.
- Referenz-Kopiertests bestanden: alle Inhalts-/Vertragsfelder bleiben erhalten, Elternbeziehungen bleiben systemintern, importierte Kopien werden unabhängige Entwürfe, vorhandene Zielsysteme werden vor Schreibzugriff abgelehnt.
- Erststart in einer eigens erzeugten temporären Datenbank getestet: alle 123 veröffentlichten Referenzseiten installiert; zweiter Start unverändert. Temporäre Datenbank im Anschluss entfernt.
- Button-Vorlagenprüfung und vorhandene Komponenten-Katalogprüfung bestanden. Die Vertragsrevision und Komponentenabdeckung wurden nicht geändert.
- Statischer Build und vollständige Link-/Assetprüfung bestanden: 219 HTML-Dateien, 123 Handbuchdatensätze, 69 Komponenten, 62.520 interne Links und 2.955 Assets. Die 123 Datensätze enthalten auch drei Kompatibilitätsdatensätze; im Layoutbaum sind 22 sichtbare Seiten.

## Browserprüfung

BrowserOS Neo, eigener Prüftab/Prüftabs. Keine Veröffentlichung zu GitHub ausgeführt.

- Seitenanordnungsübersicht bei 1440 × 1000 visuell geprüft: vier Anordnungsentscheidungen, deutsche Titel, passender Breadcrumb und hierarchische Links.
- Kartenraster bei 390 px visuell geprüft. Gleichrangig/Priorisiert per Tastatur gewechselt; zwei Spalten bei kleiner Fläche und Spanne über zwei Spalten für die priorisierte Card gemessen. Keine seitliche Überbreite.
- Allgemeines Formularlayout bei 390 px visuell geprüft: Kontakt mit Name/E-Mail und eigene Rückmeldungsgruppe, einspaltiger Umbruch, keine gemessene Überbreite.
- Ein Inhaltsbereich bei 320 px visuell geprüft: beide Breiten als schematische Varianten sichtbar, keine gemessene Überbreite. Dies ist kein Nachweis einer produktiven Tabelle.
- Projektpilot: alle vier Ansichten gewechselt, auf 390 px keine gemessene Seitenüberbreite. Keine doppelten DOM-IDs beziehungsweise nicht vorhandenen aria-controls-Ziele gemessen. Direkteinstieg `#pilot-edit` in einem frischen Tab öffnet Bearbeiten. Abschnittskennungen sind je Pilotansicht getrennt; verschachtelte Vorschauen berücksichtigen ihren eigenen umgebenden Zustand.
- Alte Portaladresse `/main-sidebar?check=1#inhalt` führt zu `/layout/page-layouts/main-sidebar?check=1#inhalt`. Alte Demo-Adresse `/layout/detail` führt zur Seite unter `/layout/beispiele/detail`.
- Statische Ausgabe auf isoliertem lokalem Vorschauport geprüft: `/wide-single-card/?check=static#inhalt` führt mit `/arve`-Basispfad zu `/layout/page-layouts/single-content/` und erhält Parameter/Fragment. Die statische HTML-Datei enthält zusätzlich das explizite No-JavaScript-Aktualisierungsziel; kein separater Browserlauf mit deaktiviertem JavaScript behauptet.

Keine vollständige mobile Sichtprüfung aller 22 Seiten, kein erneuter unabhängiger Designer-Review, Screenreader-, Realgeräte- oder umfassender Zoomtest. Die Figuren sind Gestaltungsstudien, keine produktiven Formular-/Dashboardfunktionen. Native Betriebssystemvarianten sind nicht implementiert oder freigegeben.
