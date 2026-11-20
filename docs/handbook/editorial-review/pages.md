# Kritische Lektüre: 50 veröffentlichte Seiten

Nur Befunde, keine Neufassungen. Reihenfolge entspricht dem veröffentlichten Seitenverzeichnis. Die Zitate sind wörtliche Ausschnitte; nicht jeder Befund verlangt die Überarbeitung einer ganzen Seite.

**Leseposition:** Einstieg = Titel/Zusammenfassung; Hauptinhalt = standardmässig sichtbare Anleitung, Beispiel oder bei Auswahl sichtbarer Zustand; Vertiefung = aufklappbarer Original-/Quellenbereich. Aufklapptitel selbst bleiben sichtbar. Ein Quelltextbefund ist entsprechend bezeichnet.

**Priorität:** P1 = zentrale Verständnishürde; P2 = gezielt überarbeiten; P3 = kleine sprachliche Schwäche; keine = aktuell kein konkreter sprachlicher Befund. Priorität ist eine redaktionelle Einschätzung, keine technische Abnahme.

## 01 · shadcn

Seite: [/systems/shadcn](http://127.0.0.1:3010/systems/shadcn) · **Priorität keine · 0 Befunde**

Bereits klar: Die Startseite fragt direkt «Was möchtest du gestalten?» und bietet konkrete Einstiege. Keine aufgeblasene zusätzliche Einleitung; kein sprachlicher Änderungsbedarf festgestellt.

Gelesene Grundlage: `shadcn-uebersicht` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/shadcn-home.tsx`.

## 02 · Mit dem Handbuch gestalten

Seite: [/systems/shadcn/gestaltungs-pilot](http://127.0.0.1:3010/systems/shadcn/gestaltungs-pilot) · **Priorität P1 · 5 Befunde**

Bereits klar: Die drei Schritte Finden, Detail, Bearbeiten und die konkreten Downloadlinks geben einen brauchbaren Einstieg.

### 02.1 · P1 · Hauptinhalt · Downloads, zusätzlicher Renderertext

> Zusammenhängende Hauptfolge mit Erstellen-Abzweig.

Der Satz ist interne Diagrammsprache. «Hauptfolge» und «Erstellen-Abzweig» erklären einer Designerin kaum, was die heruntergeladene Vorlage zeigt.

Fundstelle: `docs/handbook/design-resources/manifest.json`.

### 02.2 · P1 · Hauptinhalt · Downloads, zusätzlicher Renderertext

> 25 Zustands- und Inhaltsvarianten als kopierbare Regionen

«Kopierbare Regionen» klingt nach einer technischen Zerlegung statt nach benutzbaren Entwürfen. Die Benennung der Ressourcen verlangt vor dem Download eine Übersetzungsleistung.

Fundstelle: `docs/handbook/design-resources/manifest.json`.

### 02.3 · P2 · Hauptinhalt · Drei Aufgaben

> Ein Name, ein klarer Speicherweg.

Der Werbesatz klingt eingängig, bleibt aber unkonkret. «Speicherweg» ist eine weitere Metapher für denselben Formularablauf.

Fundstelle: `snapshot · shadcn-gestaltungs-pilot · content[4] · workflow`.

### 02.4 · P2 · Vertiefung · Arbeitsanleitung

> Suchseite: Ergebnisse, Erstleere, Nulltreffer und schmale Darstellung.

«Erstleere» ist eine nicht eingeführte Wortschöpfung. Die nominale Stichwortliste erklärt keine Aufgabe; sie taucht im ausführlichen Zustandskapitel erneut auf.

Fundstelle: `snapshot · shadcn-gestaltungs-pilot · content[4] · workflow`.

### 02.5 · P2 · Vertiefung · Herkunft

> lösen keinen Plattformnachweis aus

Eine lokale Dokumentänderung wird in einer internen Nachweislogik beschrieben. Der Ausdruck sagt Gestaltungslesern kaum, was sie mit der Referenz anfangen können. Aufgaben, Grenzen und offene Prüfungen wiederholen sich in mehreren aufklappbaren Abschnitten.

Fundstelle: `snapshot · shadcn-gestaltungs-pilot · content[9] · sources`.

Gelesene Grundlage: `shadcn-gestaltungs-pilot` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/gestaltungs-pilot.tsx`.

## 03 · Grundlagen

Seite: [/systems/shadcn/grundlagen](http://127.0.0.1:3010/systems/shadcn/grundlagen) · **Priorität P1 · 2 Befunde**

Bereits klar: Die Themenkarten sind kurz, konkret und auf Gestaltungsentscheidungen ausgerichtet. Sie zeigen, dass das Handbuch ohne abstrakte Metaphern auskommt.

### 03.1 · P1 · Sichtbarer Aufklapptitel; innen erneut als Überschrift

> Zusammenspiel ansehen: eine Oberfläche lesen

«Eine Oberfläche lesen» ist die beanstandete Metapher und benennt keine konkrete Gestaltungshandlung. Der Zusatz «Zusammenspiel ansehen» macht das Ziel noch allgemeiner. Der Wortlaut wird innerhalb des aufklappbaren Beispiels wiederholt.

Fundstelle: `src/docs/foundations-overview.tsx`.

### 03.2 · P2 · Vertiefung · Geltungsbereich

> Quellenbelegte Konzepte, lokale Exportwerte und eigene Gestaltungsstudien sind jeweils bezeichnet.

Der Passivsatz verdichtet drei Kategorien interner Evidenzverwaltung. In einem Einstieg zu Farbe, Schrift und Abständen steht damit die Herkunftsklassifikation stärker im Vordergrund als die Gestaltung.

Fundstelle: `snapshot · shadcn-grundlagen · content[15] · text`.

Gelesene Grundlage: `shadcn-grundlagen` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/foundations-overview.tsx`.

## 04 · Farbe

Seite: [/systems/shadcn/farben](http://127.0.0.1:3010/systems/shadcn/farben) · **Priorität P3 · 1 Befunde**

Bereits klar: Text und Fläche als Paar sowie der Vergleich Hell/Dunkel sind klar. Kontrastzahlen und Tokenbezeichner sind an dieser Stelle sinnvolle Fachinformation.

### 04.1 · P3 · Hauptinhalt · zusätzliche Rendererbeschriftung

> Kontrast: opake sRGB-Paare.

Die extrem knappe technische Bildunterschrift erklärt die Einschränkung für Gestaltungsleser nicht. Der Fachbegriff ist korrekt; die Abstraktion steht aber vor der verständlicheren Erläuterung in der Vertiefung.

Fundstelle: `src/docs/color-page.tsx`.

Gelesene Grundlage: `shadcn-farben` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/color-page.tsx`.

## 05 · Themes und visuelle Zustände

Seite: [/systems/shadcn/themes-und-zustaende](http://127.0.0.1:3010/systems/shadcn/themes-und-zustaende) · **Priorität P2 · 1 Befunde**

Bereits klar: Derselbe Inhalt in Hell und Dunkel und der gleichzeitige Fehler/Fokus-Zustand sind konkret. Die Regeln sind überwiegend natürlich formuliert.

### 05.1 · P2 · Vertiefung · ursprüngliche Studie

> Auswahlzuordnung, Fokusform und Fehlersituation sind eine schematische Gestaltungsstudie

Die lange Nominalreihe komprimiert unterschiedliche Gestaltungsentscheidungen. Nach dem gut verständlichen Hauptteil wirkt die Wiederholung des gesamten Beispiels deutlich abstrakter.

Fundstelle: `snapshot · shadcn-themes-und-zustaende · content[5] · Gleiche Bedeutung, andere Darstellung`.

Gelesene Grundlage: `shadcn-themes-und-zustaende` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/themes-und-zustaende.tsx`.

## 06 · Typografie

Seite: [/systems/shadcn/typografie](http://127.0.0.1:3010/systems/shadcn/typografie) · **Priorität P2 · 2 Befunde**

Bereits klar: Die Rollen Titel, Abschnittstitel, Lesetext sowie Label/Hilfe und die lokalen Textproben sind klar erklärt.

### 06.1 · P3 · Vertiefung · Überschrift

> Lesen braucht Rhythmus

Die geläufige Metapher ist verständlich, nennt aber den folgenden Inhalt Zeilenlänge und Absätze nicht. Ein kleiner redaktioneller Befund; wesentlich weniger dringlich als «Regionsplan» oder «Speicherausgang».

Fundstelle: `snapshot · shadcn-typografie · content[9] · text`.

### 06.2 · P2 · Vertiefung · ursprüngliche Studie

> Das aufgeklappte Lesemuster

«Lesemuster» ist eine ungeklärte Benennung für die Textprobe. Derselbe Absatz und die folgenden Regeln wiederholen Hierarchie, Textabstände und Zahlenvergleich des Hauptteils; die sprachliche Verdichtung schafft dabei keine zusätzliche Orientierung.

Fundstelle: `snapshot · shadcn-typografie · content[7] · Hierarchie an echtem Inhalt`.

Gelesene Grundlage: `shadcn-typografie` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/typografie.tsx`.

## 07 · Abstände und Grössen

Seite: [/systems/shadcn/abstaende](http://127.0.0.1:3010/systems/shadcn/abstaende) · **Priorität P2 · 2 Befunde**

Bereits klar: Die Gegenüberstellung «Klar gruppiert» / «Gleichmässig verteilt» erklärt den Unterschied ohne Fachwortballast.

### 07.1 · P2 · Hauptinhalt · Drei Entscheidungen

> Halte Label, Wert und Hilfe näher zusammen als den Abstand zur nächsten Angabe.

Der Vergleich ist grammatisch schief: Eine Gruppe soll näher zusammengehalten werden als ein Abstand. Gerade die zentrale Abstandsregel verlangt beim Lesen eine gedankliche Reparatur.

Fundstelle: `snapshot · shadcn-abstaende · content[3] · rules`.

### 07.2 · P2 · Hauptinhalt · Regel und Bildbeschriftung

> Innenraum bewusst setzen

Innenraum bezeichnet gewöhnlich einen Raum in einem Gebäude. Hier wechselt der Text zwischen Abstand, Innenraum und Kontur; für dieselbe konkrete räumliche Beziehung entstehen mehrere unnötige Übersetzungsaufgaben.

Fundstelle: `snapshot · shadcn-abstaende · content[3] · rules`.

Gelesene Grundlage: `shadcn-abstaende` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/abstaende.tsx`.

## 08 · Form und Ebenen

Seite: [/systems/shadcn/form-und-ebenen](http://127.0.0.1:3010/systems/shadcn/form-und-ebenen) · **Priorität P2 · 2 Befunde**

Bereits klar: Die Gegenüberstellung offene, begrenzte und schwebende Fläche erklärt die visuelle Wirkung; die komponentenbezogenen Radien sind deutlich abgegrenzt.

### 08.1 · P2 · Hauptinhalt · Drei Entscheidungen

> Grenze nur mit Zweck

Der elliptische Merksatz benutzt «Grenze» für eine sichtbare Umrandung. Erst der nachfolgende Absatz macht klar, dass hier keine Inhalts- oder Funktionsgrenze gemeint ist.

Fundstelle: `snapshot · shadcn-form-und-ebenen · content[1] · rules`.

### 08.2 · P3 · Hauptinhalt · Radiusabbildung

> Grössen und Innenräume sind schematisch

«Innenräume» lässt an Räume statt an Abstände innerhalb einer Komponente denken. Der Wechsel zwischen Kontur, Grenze, Fläche und Innenraum erhöht die Begriffslast.

Fundstelle: `snapshot · shadcn-form-und-ebenen · content[3] · radii`.

Gelesene Grundlage: `shadcn-form-und-ebenen` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/form-und-ebenen.tsx`.

## 09 · Icons

Seite: [/systems/shadcn/icons](http://127.0.0.1:3010/systems/shadcn/icons) · **Priorität P3 · 1 Befunde**

Bereits klar: Die vier Anwendungen unterscheiden sichtbaren Text, reine Iconaktion, Status und Dekoration anschaulich.

### 09.1 · P3 · Hauptinhalt · Gestaltungsregel

> Ein Tooltip darf ergänzen, aber keine unverständliche Oberfläche retten.

Der rettende Tooltip ist eine zugespitzte Metapher. Die Aussage ist verständlich, wirkt aber belehrender und salopper als die übrigen sachlichen Regeln.

Fundstelle: `snapshot · shadcn-icons · content[5] · rules`.

Gelesene Grundlage: `shadcn-icons` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/icons.tsx`.

## 10 · Bewegung

Seite: [/systems/shadcn/bewegung](http://127.0.0.1:3010/systems/shadcn/bewegung) · **Priorität P2 · 2 Befunde**

Bereits klar: Das Öffnen der Kontaktdetails macht Bewegung an einer konkreten Handlung verständlich; die reduzierte Darstellung wird klar beschrieben.

### 10.1 · P2 · Hauptinhalt · Drei Entscheidungen

> Ausgang und Ergebnis zuerst.

«Ausgang» ist mehrdeutig und bleibt ohne nachfolgende Frage abstrakt. Der Satz ist ein verdichteter Merkspruch, keine selbsterklärende Entscheidung.

Fundstelle: `snapshot · shadcn-bewegung · content[2] · motion-rules`.

### 10.2 · P2 · Vertiefung · ursprüngliche Studie

> Der einmalige, ausdrücklich geöffnete Übergang bewegt A zum Ziel

Mehrere abstrakte Wörter beschreiben eine bewusst abstrakte A-Grafik. Nach dem konkreten Kontaktbeispiel muss die Leserin in ein zweites Erklärmodell wechseln; Herkunfts- und Fachtexte wiederholen die Hauptaussage mit weniger anschaulicher Sprache.

Fundstelle: `snapshot · shadcn-bewegung · content[5] · Ausgang und Ziel verbinden`.

Gelesene Grundlage: `shadcn-bewegung` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/bewegung.tsx`.

## 11 · Icons, Bewegung und Ebenen: Themenwegweiser

Seite: [/systems/shadcn/icons-bewegung](http://127.0.0.1:3010/systems/shadcn/icons-bewegung) · **Priorität keine · 0 Befunde**

Bereits klar: Der Hinweis auf die frühere Sammelseite und die drei konkreten Linkziele sind natürlich und knapp. Kein sprachlicher Änderungsbedarf festgestellt.

Gelesene Grundlage: `shadcn-icons-bewegung` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/icons-bewegung.tsx`.

## 12 · Layouts

Seite: [/systems/shadcn/layout](http://127.0.0.1:3010/systems/shadcn/layout) · **Priorität P3 · 1 Befunde**

Bereits klar: Die drei Ebenen Zweck der Seite, Gesamtanordnung und Anordnung im Inneren sind klar voneinander abgegrenzt.

### 12.1 · P3 · Vertiefung · Abstände

> Sie führt auch den Status der vorgeschlagenen Abstandswerte.

Das Verb «führt» bleibt bürokratisch und undeutlich. Die Querverweisung erklärt eher Dokumentverwaltung als den Nutzen der verlinkten Grundlage.

Fundstelle: `snapshot · shadcn-layout · content[5] · text`.

Gelesene Grundlage: `shadcn-layout` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/layout.tsx`.

## 13 · Page types

Seite: [/systems/shadcn/page-types](http://127.0.0.1:3010/systems/shadcn/page-types) · **Priorität P2 · 1 Befunde**

Bereits klar: Die vier Seitentypen und ihre Aufgaben sind knapp, verständlich und unabhängig von der Spaltenzahl erklärt.

### 13.1 · P2 · Hauptinhalt · Beispiel create gegenüber verlinkter Detailseite

> Projekt anlegen

Die Übersicht verwendet «anlegen», die unmittelbar verlinkte create-Seite durchgehend «erstellen». Beide sind natürliches Deutsch; als Benennung derselben Beispielhandlung erzeugt der Wechsel dennoch eine unnötige Terminologiedifferenz.

Fundstelle: `snapshot · shadcn-page-types · content[4] · create`.

Gelesene Grundlage: `shadcn-page-types` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/page-types.tsx`.

## 14 · overview

Seite: [/systems/shadcn/page-type-overview](http://127.0.0.1:3010/systems/shadcn/page-type-overview) · **Priorität P2 · 1 Befunde**

Bereits klar: Die fünf Übersichtstypen werden über konkrete Aufgaben und anschauliche Beispiele unterschieden. Die englischen Typnamen sind bewusst gewählt.

### 14.1 · P2 · Hauptinhalt · Auswahlhilfen

> Kernregion

Der wiederkehrende neue Sammelbegriff wird nicht erklärt. Direkt benannte Inhalte wie Auswertung oder Ergebnisliste sind verständlich; «Kernregion» legt noch eine abstrakte Begriffsebene darüber.

Fundstelle: `snapshot · shadcn-page-type-overview · content[0] · dashboard`.

Gelesene Grundlage: `shadcn-page-type-overview` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/page-type-overview.tsx`.

## 15 · detail

Seite: [/systems/shadcn/detailseite](http://127.0.0.1:3010/systems/shadcn/detailseite) · **Priorität P1 · 5 Befunde**

Bereits klar: Das kleine Projekt mit Name, ID und Status und die Erklärung «Archivierte Projekte sind nur lesbar» sind verständlich.

### 15.1 · P1 · Hauptinhalt · Überschrift

> Der typische Regionsplan

«Regionsplan» klingt nach Raumplanung. Eine Gliederung einer Detailseite wird unnötig als neues Fachkonzept eingeführt; die Überschrift verrät nicht, was das Team dort für den Entwurf lernt.

Fundstelle: `snapshot · shadcn-detailseite · content[1] · regions`.

### 15.2 · P1 · Hauptinhalt · Rückweg

> Zur Übersicht oder zum bestätigten Einstieg zurück; die Detailidentität bleibt davon unabhängig.

«Bestätigter Einstieg» und «Detailidentität» sind nicht eingeführte Abstraktionen. Im ersten Punkt eines Orientierungsschemas muss die Leserin erst die interne Modellvorstellung entschlüsseln.

Fundstelle: `snapshot · shadcn-detailseite · content[1] · regions`.

### 15.3 · P2 · Hauptinhalt · Zusatzbereich

> Keine leere Sidebar, Card oder erfundene Verantwortung.

Die Aufzählung mischt sichtbare Layoutbereiche mit einer abstrakten Zuständigkeit. «Erfundene Verantwortung» klingt wie eine interne Warnung an Autorinnen und Autoren, nicht wie eine natürliche Gestaltungsregel.

Fundstelle: `snapshot · shadcn-detailseite · content[1] · regions`.

### 15.4 · P2 · Vertiefung · Geltung

> im shadcn-Referenzimplementierung

Falscher Artikel beziehungsweise Kasus; ein sichtbarer grammatischer Fehler in einem ohnehin sehr dichten Einleitungssatz.

Fundstelle: `snapshot · shadcn-detailseite · content[5] · contract`.

### 15.5 · P2 · Vertiefung · Rückkehrvertrag

> unklaren Speicherausgang

Das künstliche Kompositum setzt ein internes Zustandsmodell voraus. Es erschwert den ansonsten konkreten Rückwegtext; dieselbe Benennung tritt auf mehreren Formular- und Zustandsseiten auf.

Fundstelle: `snapshot · shadcn-detailseite · content[5] · contract`.

Gelesene Grundlage: `shadcn-detailseite` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/detailseite.tsx`.

## 16 · edit

Seite: [/systems/shadcn/page-type-edit](http://127.0.0.1:3010/systems/shadcn/page-type-edit) · **Priorität P1 · 3 Befunde**

Bereits klar: Bestätigter Ausgangswert, unverändertes Speichern und verworfene Änderungen werden mit konkreten Namen und Meldungen erklärt.

### 16.1 · P1 · Hauptinhalt · Drei Entscheidungen

> mit Verwerfennachfrage

Das künstliche Kompositum lässt den einfachen Dialog beim Abbrechen komplizierter wirken als nötig.

Fundstelle: `snapshot · shadcn-page-type-edit · content[1] · rules`.

### 16.2 · P2 · Hauptinhalt · Unbekannt

> Unbekannt hat Vorrang vor geändert

Zwei Zustandsadjektive werden wie Modellnamen gegeneinander gestellt. Ohne genaue Kenntnis des internen Ablaufs bleibt unklar, welche sichtbare Entscheidung die Person treffen soll.

Fundstelle: `snapshot · shadcn-page-type-edit · content[5] · unknown`.

### 16.3 · P2 · Vertiefung · Prüfgrenzen

> keine Speichermaschine implementiert

«Speichermaschine» ist ein weiterer ungeklärter Maschinenbegriff. Die technische Grenze ist legitim, die Benennung wirkt in dieser deutschen Entwurfsanleitung unnötig künstlich.

Fundstelle: `snapshot · shadcn-page-type-edit · content[8] · sources`.

Gelesene Grundlage: `shadcn-page-type-edit` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/page-type-edit.tsx`.

## 17 · create

Seite: [/systems/shadcn/page-type-create](http://127.0.0.1:3010/systems/shadcn/page-type-create) · **Priorität P2 · 2 Befunde**

Bereits klar: Leeres Formular, Feldfehler, laufende Übermittlung und bestätigte Erstellung sind an konkreten Meldungen unterscheidbar.

### 17.1 · P2 · Hauptinhalt · Für den Entwurf beachten

> Der führende Formularvertrag beschreibt die Verlassenswarnung und die Vorrangregel für ungeklärte Speicherung.

Drei abstrakte Verfahrenswörter verdichten einen wichtigen Rückweg zu Spezifikationssprache. Der Link ist fachlich sinnvoll, der Satz verlangt jedoch unnötig viel Vorwissen.

Fundstelle: `snapshot · shadcn-page-type-create · content[5] · decisions`.

### 17.2 · P3 · Hauptinhalt · Ergebnis

> Zur Detailseite des bestätigt erstellten Projekts wechseln.

Die ungewöhnliche Verbindung «bestätigt erstellt» klingt maschinell und schwerfällig. Die Bedingung ist inhaltlich wichtig, ihre wiederholte sprachliche Verpackung erschwert den Lesefluss.

Fundstelle: `snapshot · shadcn-page-type-create · content[3] · confirmed`.

Gelesene Grundlage: `shadcn-page-type-create` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/page-type-create.tsx`.

## 18 · Page layouts

Seite: [/systems/shadcn/page-layouts](http://127.0.0.1:3010/systems/shadcn/page-layouts) · **Priorität P3 · 1 Befunde**

Bereits klar: Sechs Anordnungen werden durch knappe Einsatzfälle und verständliche Auswahlfragen unterschieden.

### 18.1 · P3 · Hauptinhalt · Narrow-Single-Card-Einsatz

> einen kompakten Inhalt mit ruhigem Lesefluss

«Ruhiger Lesefluss» ist eine weiche Qualitätsbehauptung statt eines beobachtbaren Einsatzkriteriums. Im Vergleich der sechs Optionen ist diese Beschreibung weniger trennscharf.

Fundstelle: `snapshot · shadcn-page-layouts · content[3] · narrow-single-card`.

Gelesene Grundlage: `shadcn-page-layouts` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/page-layouts.tsx`.

## 19 · Main+Sidebar

Seite: [/systems/shadcn/main-sidebar](http://127.0.0.1:3010/systems/shadcn/main-sidebar) · **Priorität P2 · 2 Befunde**

Bereits klar: Haupt- und Zusatzbereich, Lesereihenfolge und Verhalten langer Inhalte sind am Beispiel konkret erklärt.

### 19.1 · P2 · Hauptinhalt · Regelüberschrift

> Mitlaufend statt überdeckend

Der Gegensatz klingt anschaulich, ist für die folgende Sticky-Regel aber nicht selbsterklärend: Ein haftender Bereich kann ebenfalls Inhalte überdecken. Der anschliessende technische Satz muss den Merkspruch erst präzisieren.

Fundstelle: `snapshot · shadcn-main-sidebar · content[1] · rules`.

### 19.2 · P3 · Vertiefung · Quellen

> die sequenzielle schmale Anordnung

Der Fachton ist unnötig abstrakt für das bereits gezeigte Untereinanderstehen der Bereiche.

Fundstelle: `snapshot · shadcn-main-sidebar · content[3] · sources`.

Gelesene Grundlage: `shadcn-main-sidebar` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/main-sidebar.tsx`.

## 20 · 4-column Card Grid

Seite: [/systems/shadcn/card-grid-4x4](http://127.0.0.1:3010/systems/shadcn/card-grid-4x4) · **Priorität P3 · 1 Befunde**

Bereits klar: Die sechs Cards und die Spannen 2 + 1 + 1 / 4 / 2 + 2 machen die Anordnung nachvollziehbar.

### 20.1 · P3 · Hauptinhalt · Einsatz

> eigenständigen Informationseinheiten

Das abstrakte Sammelwort schafft unnötigen Abstand zu den gerade gezeigten Aufgaben, Hinweisen und Vorlagen. Kein sachlicher Fehler; eher eine schwache Stelle in einer sonst konkreten Erklärung.

Fundstelle: `snapshot · shadcn-card-grid-4x4 · content[7] · rules`.

Gelesene Grundlage: `shadcn-card-grid-4x4` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/card-grid-4x4.tsx`.

## 21 · Narrow Single Card

Seite: [/systems/shadcn/narrow-single-card](http://127.0.0.1:3010/systems/shadcn/narrow-single-card) · **Priorität P1 · 2 Befunde**

Bereits klar: Die Unterschiede zwischen einer kurzen Aufgabe und einem breiten Tabellen- oder Detailinhalt sind verständlich. Die lokale Vorschau sagt klar, dass sie keine Projektdaten speichert.

### 21.1 · P1 · Hauptinhalt · erste Überschrift

> Eine Aufgabe mit ruhigem Aussenraum

Die Raummetapher ist atmosphärisch, erklärt aber weder Zentrierung noch begrenzte Breite. «Ruhiger Aussenraum» klingt eher nach Architektur oder Markenprosa als nach einer konkreten Layoutentscheidung.

Fundstelle: `snapshot · shadcn-narrow-single-card · content[0] · example`.

### 21.2 · P2 · Hauptinhalt · Beispielhilfe

> Verwende einen kurzen, eindeutigen Namen.

Die Hilfe legt im isolierten Projektbeispiel eine Eindeutigkeit nahe, während der benachbarte Pilot ausdrücklich gleiche Namen zulässt. Hier besteht redaktioneller Klärungsbedarf beim Beispielkontext, keine Aufforderung, die fachliche Namensregel zu ändern.

Fundstelle: `snapshot · shadcn-narrow-single-card · content[0] · example`.

Gelesene Grundlage: `shadcn-narrow-single-card` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/narrow-single-card.tsx`.

## 22 · Wide Single Card

Seite: [/systems/shadcn/wide-single-card](http://127.0.0.1:3010/systems/shadcn/wide-single-card) · **Priorität keine · 0 Befunde**

Bereits klar: Cardbreite, Textbreite und Feldbreite werden am selben Beispiel klar unterschieden. Die CSS-Angaben sind aufklappbar und zum Zweck der Layoutseite passend. Kein vorrangiger sprachlicher Änderungsbedarf.

Gelesene Grundlage: `shadcn-wide-single-card` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/wide-single-card.tsx`.

## 23 · Stacked Section Cards

Seite: [/systems/shadcn/stacked-section-cards](http://127.0.0.1:3010/systems/shadcn/stacked-section-cards) · **Priorität P2 · 2 Befunde**

Bereits klar: Die drei Projektabschnitte und der Vergleich mit einfachen Absätzen erklären den Einsatz des Kartenstapels gut.

### 23.1 · P2 · Hauptinhalt · Regeln

> eine bewusste Binnengruppe

Das seltene Wort «Binnengruppe» und das Qualitätsadjektiv «bewusst» machen die konkrete Anordnung kurzer Label–Wert-Angaben unnötig theoretisch.

Fundstelle: `snapshot · shadcn-stacked-section-cards · content[4] · rules`.

### 23.2 · P3 · Hauptinhalt · langer Beispieltext

> die folgenden Themenkarten wandern nach unten

Die Bewegungssprache innerhalb eines scheinbar fachlichen Projekttexts ist eigentlich eine Erklärung des Layouts. Beispielinhalt und Lehrkommentar wechseln mitten im Absatz die Perspektive.

Fundstelle: `snapshot · shadcn-stacked-section-cards · content[1] · project-overview`.

Gelesene Grundlage: `shadcn-stacked-section-cards` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/stacked-section-cards.tsx`.

## 24 · 3-column Card Grid

Seite: [/systems/shadcn/card-grid-3-columns](http://127.0.0.1:3010/systems/shadcn/card-grid-3-columns) · **Priorität keine · 0 Befunde**

Bereits klar: Die Einsatzfälle, die unvollständige letzte Reihe und die Linkinteraktion sind konkret erklärt. Die technische Vertiefung benennt bewusst lokale Werte. Kein vorrangiger sprachlicher Änderungsbedarf.

Gelesene Grundlage: `shadcn-card-grid-3-columns` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/card-grid-3-columns.tsx`.

## 25 · Content layouts

Seite: [/systems/shadcn/content-layouts](http://127.0.0.1:3010/systems/shadcn/content-layouts) · **Priorität keine · 0 Befunde**

Bereits klar: Die drei kurzen Aufgabenbeschreibungen und Miniaturen unterscheiden Label–Value, Form Layout und Card Header klar. Die englischen Namen sind bewusst gewählt. Kein vorrangiger sprachlicher Änderungsbedarf.

Gelesene Grundlage: `shadcn-content-layouts` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/content-layouts.tsx`.

## 26 · Label–Value

Seite: [/systems/shadcn/content-layout-label-value](http://127.0.0.1:3010/systems/shadcn/content-layout-label-value) · **Priorität keine · 0 Befunde**

Bereits klar: Die Beschriftungs–Wert-Paare, die mehrzeilige Adresse und «Nicht angegeben» sind konkret; die Anordnungsregeln erklären dieselbe sichtbare Beziehung. Kein vorrangiger sprachlicher Änderungsbedarf.

Gelesene Grundlage: `shadcn-content-layout-label-value` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/content-layout-label-value.tsx`.

## 27 · Form Layout

Seite: [/systems/shadcn/content-layout-form-layout](http://127.0.0.1:3010/systems/shadcn/content-layout-form-layout) · **Priorität P2 · 2 Befunde**

Bereits klar: Die Reihenfolge Label → Eingabe → Hilfe → Fehler und das Verhalten langer Texte sind gut verständlich.

### 27.1 · P2 · Hauptinhalt · Aufbau

> denselben Feldplatz

«Feldplatz» ist ein unüblicher Platzhalterbegriff. Unklar bleibt beim ersten Lesen, ob ein Eingabefeld, ein Bereich im Layout oder ein Zustand gemeint ist.

Fundstelle: `snapshot · shadcn-content-layout-form-layout · content[3] · anatomy`.

### 27.2 · P2 · Vertiefung · Quellen

> Die Formularreferenz führt Feldtexte, Prüfzeitpunkt, Fokus, Korrektur und Speicherausgänge

Der Satz trägt internes Dokumentvokabular in die Layoutanleitung. Besonders «führt» und «Speicherausgänge» erschliessen sich nicht unmittelbar.

Fundstelle: `snapshot · shadcn-content-layout-form-layout · content[5] · sources`.

Gelesene Grundlage: `shadcn-content-layout-form-layout` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/content-layout-form-layout.tsx`.

## 28 · Card Header

Seite: [/systems/shadcn/content-layout-card-header](http://127.0.0.1:3010/systems/shadcn/content-layout-card-header) · **Priorität keine · 0 Befunde**

Bereits klar: Titel, Beschreibung, Aktion und Inhalt werden am konkreten Card Header erklärt. Die Regeln zum langen Titel und zum entfallenden Aktionsplatz sind klar. Kein vorrangiger sprachlicher Änderungsbedarf.

Gelesene Grundlage: `shadcn-content-layout-card-header` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/content-layout-card-header.tsx`.

## 29 · Seitenstruktur und Navigation

Seite: [/systems/shadcn/seitenstruktur-und-navigation](http://127.0.0.1:3010/systems/shadcn/seitenstruktur-und-navigation) · **Priorität P2 · 2 Befunde**

Bereits klar: Tabs, Sidebar und Cards werden nach ihrem Zweck unterschieden; die konkreten Beispiele Überblick, Unterlagen und Verlauf helfen.

### 29.1 · P2 · Einstieg · Zusammenfassung

> Globale Wege, lokale Navigation und Hauptinhalt geben Orientierung

«Globale Wege» ist eine diffuse Metapher neben den deutlich konkreteren Begriffen Navigation und Hauptinhalt. Die anschliessende Erklärung global/lokal ist wesentlich verständlicher.

Fundstelle: `snapshot · shadcn-seitenstruktur-und-navigation · summary`.

### 29.2 · P3 · Hauptinhalt · Regel

> Seitentitel und Hauptbereich führen.

Der Satz personifiziert zwei Seitenelemente und lässt offen, worin ihre führende Aufgabe besteht. Der kurze Merkspruch ist weniger konkret als die übrige Regel.

Fundstelle: `snapshot · shadcn-seitenstruktur-und-navigation · content[4] · nav-rules`.

Gelesene Grundlage: `shadcn-seitenstruktur-und-navigation` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/seitenstruktur-und-navigation.tsx`.

## 30 · UX-Patterns

Seite: [/systems/shadcn/patterns](http://127.0.0.1:3010/systems/shadcn/patterns) · **Priorität P1 · 7 Befunde**

Bereits klar: Die Aufgabe jedes Kandidaten und die Kennzeichnung als beobachteter Kandidat sind nützlich. Die Beobachtungsgrenzen werden ausdrücklich nicht als Freigabe ausgegeben.

### 30.1 · P1 · Hauptinhalt · zuerst ausgewählter Ablauf UX-001

> Kriterien entwerfen

«Entwerfen» wird hier für das Setzen noch nicht angewendeter Suchkriterien benutzt. Für ein Gestaltungsteam bedeutet das Wort sonst Gestaltungsarbeit; die Überschrift verschiebt die Perspektive unklar zwischen Produktnutzung und Design.

Fundstelle: `snapshot · shadcn-patterns · content[1] · UX-001`.

### 30.2 · P1 · Hauptinhalt · UX-001

> Angewandten Kontext lesen

Der abstrakte Kontext ersetzt die konkreten aktiven Filter. Der Titel klingt übersetzt und ist schwerer verständlich als der nachfolgende Satz.

Fundstelle: `snapshot · shadcn-patterns · content[1] · UX-001`.

### 30.3 · P2 · Hauptinhalt · UX-002

> Ein Nichttreffer zeigt eine leere Menge.

Mathematisches Mengenvokabular und das personifizierte Nichttreffen beschreiben eine sichtbare Ergebnisliste unnötig abstrakt.

Fundstelle: `snapshot · shadcn-patterns · content[2] · UX-002`.

### 30.4 · P2 · Hauptinhalt · UX-018

> Einen Bereichshub aufrufen.

Das zusammengesetzte Wort ist ohne Erklärung keine klare deutsche Aufgabenbeschreibung. Die bewusst englischen Layoutnamen rechtfertigen nicht jeden zusätzlich gebildeten Anglizismus.

Fundstelle: `snapshot · shadcn-patterns · content[16] · UX-018`.

### 30.5 · P2 · Hauptinhalt · UX-020

> Die Erzeugungsaktion ist getrennt erkennbar.

Der abstrakte Aktionsname lässt offen, was hier erzeugt wird. Auch innerhalb einer kurzen Ablaufvorschau sollte die konkrete Handlung erkennbar bleiben.

Fundstelle: `snapshot · shadcn-patterns · content[18] · UX-020`.

### 30.6 · P2 · Vertiefung · Register

> Zwei weitere Registervormerkungen

Die nominale Verwaltungsformulierung klingt nach internem Forschungsregister. Sie sagt kaum, was Leser mit diesen beiden nicht beobachteten Kandidaten anfangen können.

Fundstelle: `snapshot · shadcn-patterns · content[29] · registry-notes`.

### 30.7 · P3 · Vertiefungen · Grenzen mehrerer Kandidaten

> keine zeitliche Progression beobachtet

Die notwendige Einschränkung wird in künstlicher Forschungssprache beschrieben. Weitere wiederkehrende Wörter wie «Rückwegprobe» und «Transaktionswizard» zeigen denselben Tonbruch; der Nachweisumfang selbst wird nicht angezweifelt.

Fundstelle: `snapshot · shadcn-patterns · content[7] · UX-008`.

Gelesene Grundlage: `shadcn-patterns` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/patterns.tsx`.

## 31 · Formulare und Validierung

Seite: [/systems/shadcn/formulare-validierung](http://127.0.0.1:3010/systems/shadcn/formulare-validierung) · **Priorität P1 · 5 Befunde**

Bereits klar: Die Meldungen «Projekt wird erstellt …» und «Es ist noch unklar, ob das Projekt erstellt wurde» machen den Unterschied der Ergebnisse gut verständlich.

### 31.1 · P1 · Einstieg · Zusammenfassung

> den Speicherausgang verständlich zeigen

Schon der Nutzensatz enthält ein unübliches Kompositum. Leser müssen eine technische Zustandskategorie verstehen, bevor sie die konkrete Aufgabe dieser Formularseite erkennen.

Fundstelle: `snapshot · shadcn-formulare-validierung · summary`.

### 31.2 · P1 · Hauptinhalt · Drei Regeln

> 1–80 Unicode-Graphemcluster nach Randtrim

Die präzise Zählregel ist fachlich relevant, wird hier jedoch als technische Kurzform ohne Erklärung zum ersten Entwurfskriterium. «Randtrim» wirkt wie Codejargon in einem deutschen Gestaltungshandbuch.

Fundstelle: `snapshot · shadcn-formulare-validierung · content[9] · rules`.

### 31.3 · P2 · Hauptinhalt · Zustandsbild

> beim Bearbeiten zählt der randgetrimmte Vergleich mit dem bestätigten Ausgangswert

Das schwer lesbare Adjektiv und die Nominalkette verlangen Wissen über Stringvergleiche. Die sichtbare Erklärung zum Verwerfen tritt hinter Implementierungslogik zurück.

Fundstelle: `snapshot · shadcn-formulare-validierung · content[4] · state-dirty`.

### 31.4 · P2 · Vertiefung · Abbrechen

> Ein bereits unbekannter Speicherausgang hat Vorrang vor der Dirty-Regel.

Zwei nicht alltagssprachliche Modellnamen werden miteinander verknüpft. «Bereits unbekannt» und «Dirty-Regel» klingen nach interner Spezifikationsnotiz; der Satz ist als Orientierungshilfe besonders schwer zugänglich.

Fundstelle: `snapshot · shadcn-formulare-validierung · content[18] · text`.

### 31.5 · P2 · Vertiefung · Arbeitsstand

> Dirty-Erkennung

Der Begriff bleibt innerhalb einer deutschen Aufzählung ungeklärt. Die vollständige Ablaufstudie und die folgende Vertragsprosa erklären Eingabe, Prüfung, Übermittlung und Rückkehr erneut; die Wiederholung macht die Fachvertiefung lang, ohne eine neue Leseführung anzubieten.

Fundstelle: `snapshot · shadcn-formulare-validierung · content[20] · text`.

Gelesene Grundlage: `shadcn-formulare-validierung` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/formulare-validierung.tsx`.

## 32 · Suchen und Filtern

Seite: [/systems/shadcn/suchen-filtern](http://127.0.0.1:3010/systems/shadcn/suchen-filtern) · **Priorität P1 · 4 Befunde**

Bereits klar: Die konkreten Suchbeispiele ALP, 102 und Tal sowie die Rückkehr zu derselben ID machen die gewünschten Ergebnisse überprüfbar.

### 32.1 · P1 · Hauptinhalt · Drei Regeln

> Die vollständige URL- und Fokusmatrix bleibt verbindlich.

Ein interner Verbindlichkeitsverweis tritt an die Stelle einer verständlichen Zusammenfassung. Die Leserin muss wissen, was «Matrix» in diesem Handbuch bezeichnet.

Fundstelle: `snapshot · shadcn-suchen-filtern · content[2] · search-rules`.

### 32.2 · P2 · Hauptinhalt · Regel und Ablauf

> Die Zahl wird ruhig angekündigt

«Ruhig» beschreibt weder das Wahrnehmbare noch die technische Statusansage eindeutig. Die atmosphärische Formulierung ist für den Umgang mit Rückmeldungen zu unscharf.

Fundstelle: `snapshot · shadcn-suchen-filtern · content[2] · search-rules`.

### 32.3 · P2 · Vertiefung · Referenzentscheidung

> Leere Suche trifft alle Namen und IDs.

Der verkürzte Suchalgorithmus klingt wie eine mathematische Regel statt wie natürliche Erläuterung eines leeren Suchfelds. Die Präzision ist wichtig, die Satzform ist unnötig fremd.

Fundstelle: `snapshot · shadcn-suchen-filtern · content[6] · text`.

### 32.4 · P2 · Vertiefung · Kontextmatrix

> Fokusmatrix: Rückkehr aus Detail oder Bearbeitung → Link der geöffneten ID und dessen sichtbare Position, sonst Ergebnisüberschrift.

Die Pfeilnotation und Nominalfolge setzen Kenntnis des UI-Modells voraus. Die gleiche Rückkehrregel erscheint mehrfach im Hauptteil, Produktvertrag, Ablauf und Prüffällen; der wiederholte Wechsel von Anleitung zu Prüfspezifikation erschwert die Leseführung.

Fundstelle: `snapshot · shadcn-suchen-filtern · content[8] · text`.

Gelesene Grundlage: `shadcn-suchen-filtern` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/suchen-filtern.tsx`.

## 33 · Laden, leer und Fehler

Seite: [/systems/shadcn/laden-leer-fehler](http://127.0.0.1:3010/systems/shadcn/laden-leer-fehler) · **Priorität P1 · 5 Befunde**

Bereits klar: Die eigentlichen Beispielmeldungen unterscheiden Laden, leeren Bestand und fehlende Suchtreffer klar. Diese inhaltliche Trennung wird nicht beanstandet.

### 33.1 · P1 · Einstieg · Zusammenfassung und Hauptinhalt · Zustandstitel

> Erstleere

Der zentrale Zustand wird mit einem nicht geläufigen Kunstwort benannt. Die darunter stehende Meldung «Noch keine Projekte» ist hingegen sofort verständlich; die Fachüberschrift erschwert dieselbe Aussage.

Fundstelle: `snapshot · shadcn-laden-leer-fehler · summary`.

### 33.2 · P1 · Hauptinhalt · Zustandstitel

> Unknown · Speicherausgang unklar

Englischer Zustandsname und künstliches deutsches Kompositum verdoppeln die Benennung, ohne sie zugänglicher zu machen. Beanstandet wird die unnötige Übersetzungshürde; der unbekannte Ausgang selbst bleibt eine notwendige Unterscheidung.

Fundstelle: `snapshot · shadcn-laden-leer-fehler · content[6] · states-unknown`.

### 33.3 · P2 · Hauptinhalt · Regeln

> Eine unbestätigte Schreibantwort nie als Erfolg oder sicheren Fehler ausgeben.

«Schreibantwort» klingt nach einer technischen API-Kategorie. Die Aussage über das Ergebnis einer Speicherung wird sprachlich unnötig von der konkreten Handlung entfernt.

Fundstelle: `snapshot · shadcn-laden-leer-fehler · content[7] · states-rules`.

### 33.4 · P2 · Hauptinhalt · Entscheidungshilfe

> Bestand geladen, Auswahl leer

«Auswahl» kann hier eine Checkboxauswahl oder Suchtreffer meinen. Die verkürzte Zustandsdefinition ist dadurch gerade in einer Seite zum präzisen Unterscheiden missverständlich.

Fundstelle: `snapshot · shadcn-laden-leer-fehler · content[8] · states-choice`.

### 33.5 · P2 · Vertiefung · Patternbezug

> Kein Beleg für einen Unknown-Abgleich

Noch ein neues Kompositum für die Klärung desselben unbekannten Ergebnisses. Zusammen mit «Ready-Freigabe» und «zeitliche Progression» überlagert interne Statussprache die Gestaltungserklärung.

Fundstelle: `snapshot · shadcn-laden-leer-fehler · content[9] · states-evidence`.

Gelesene Grundlage: `shadcn-laden-leer-fehler` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/laden-leer-fehler.tsx`.

## 34 · Auswahl und Suche

Seite: [/systems/shadcn/auswahl-und-suche](http://127.0.0.1:3010/systems/shadcn/auswahl-und-suche) · **Priorität P2 · 2 Befunde**

Bereits klar: Die drei Auswahlformen und ihre Einsatzzwecke sind konkret beschrieben. Die kurze Optionsliste wird ausdrücklich nicht zum universellen Mengengrenzwert erklärt.

### 34.1 · P2 · Hauptinhalt · Drei Entscheidungen

> Wertvertrag benennen.

Die Überschrift komprimiert mehrere sinnvolle Fragen zu einem unüblichen Vertragswort. Ohne nachfolgenden Absatz lässt sich nicht erkennen, welche Entscheidung Designer treffen sollen.

Fundstelle: `snapshot · shadcn-auswahl-und-suche · content[5] · selection-rules`.

### 34.2 · P3 · Vertiefung · Quellen

> keine neue Selektionspolicy

Der hybride Ausdruck klingt nach interner Governance und führt keinen zusätzlichen verständlichen Unterschied gegenüber dem zuvor erklärten Auswahlverhalten ein.

Fundstelle: `snapshot · shadcn-auswahl-und-suche · content[8] · selection-evidence`.

Gelesene Grundlage: `shadcn-auswahl-und-suche` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/auswahl-und-suche.tsx`.

## 35 · Destruktive Aktionen bestätigen

Seite: [/systems/shadcn/destruktive-aktionen](http://127.0.0.1:3010/systems/shadcn/destruktive-aktionen) · **Priorität P2 · 1 Befunde**

Bereits klar: Ziel, Folge und Wiederherstellbarkeit werden an einer konkreten Entfernung erläutert. Die Demoaktionen sind präzise benannt.

### 35.1 · P2 · Hauptinhalt · Entscheidungsregeln

> Nicht über den Dialog eine unklare Aktion reparieren.

Die ungewöhnliche Wortstellung und die Reparaturmetapher bremsen das Lesen. Der folgende Satz ist deutlich konkreter; der vorgeschaltete Merkspruch trägt wenig zur Entscheidung bei.

Fundstelle: `snapshot · shadcn-destruktive-aktionen · content[1] · destructive-rules`.

Gelesene Grundlage: `shadcn-destruktive-aktionen` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/destruktive-aktionen.tsx`.

## 36 · Felder und Fehlermeldungen

Seite: [/systems/shadcn/felder-und-fehlermeldungen](http://127.0.0.1:3010/systems/shadcn/felder-und-fehlermeldungen) · **Priorität P2 · 1 Befunde**

Bereits klar: Die Seite erfüllt ihre Funktion als kurzer Wegweiser und bläht sie nicht mit zusätzlichem Erklärungstext auf.

### 36.1 · P2 · Hauptinhalt · Linktext

> Prüfzeitpunkt, Korrektur und Speicherausgänge gestalten

Die Wortkette macht den Zielinhalt schwer erfassbar; insbesondere «Speicherausgänge» ist kein geläufiger redaktioneller Begriff. Gerade ein Navigationslabel sollte ohne Interpretation auskommen.

Fundstelle: `snapshot · shadcn-felder-und-fehlermeldungen · content[0] · form-field-wayfinder`.

Gelesene Grundlage: `shadcn-felder-und-fehlermeldungen` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/felder-und-fehlermeldungen.tsx`.

## 37 · Systemzustände gestalten

Seite: [/systems/shadcn/systemzustaende](http://127.0.0.1:3010/systems/shadcn/systemzustaende) · **Priorität P2 · 1 Befunde**

Bereits klar: Der Wegweiser benennt die aktuelle Zielseite und kennzeichnet den früheren Inhalt als historischen Stand.

### 37.1 · P2 · Hauptinhalt · Linkzusatz

> Zustand wählen: Laden, Erstleere, Nulltreffer, Fehler, Nichtverfügbarkeit oder unklarer Speicherausgang.

Der kurze Wegweiser übernimmt zwei Kunstwörter der Zielseite und wird dadurch selbst erklärungsbedürftig. Die bloße Verlinkung braucht nicht bereits die ganze Zustandsklassifikation.

Fundstelle: `snapshot · shadcn-systemzustaende · content[0] · state-guide`.

Gelesene Grundlage: `shadcn-systemzustaende` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/systemzustaende.tsx`.

## 38 · Tabellen und Listen

Seite: [/systems/shadcn/tabellen-und-listen](http://127.0.0.1:3010/systems/shadcn/tabellen-und-listen) · **Priorität P2 · 2 Befunde**

Bereits klar: Tabelle versus Liste, Auswahlumfang und lokale Sortierung sind mit konkreten Projekten verständlich erklärt.

### 38.1 · P2 · Hauptinhalt · Vergleich

> wenn du ein Projekt erkennst und seinen nächsten Schritt brauchst

Die Formulierung «seinen nächsten Schritt brauchst» ist idiomatisch schief. Offen bleibt, ob es um das Finden, Verstehen oder Öffnen des nächsten Arbeitsschritts geht.

Fundstelle: `snapshot · shadcn-tabellen-und-listen · content[2] · list-example`.

### 38.2 · P3 · Hauptinhalt · Vergleichsregel

> Kein Datenraster allein wegen vieler Einträge.

Der verdichtete Verbotsmerksatz führt mit «Datenraster» eine weitere Benennung neben Tabelle und Liste ein. Der klare Vergleich wird dadurch eher abstrakter als präziser.

Fundstelle: `snapshot · shadcn-tabellen-und-listen · content[3] · table-rules`.

Gelesene Grundlage: `shadcn-tabellen-und-listen` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/tabellen-und-listen.tsx`.

## 39 · Komponenten

Seite: [/systems/shadcn/komponenten](http://127.0.0.1:3010/systems/shadcn/komponenten) · **Priorität P2 · 2 Befunde**

Bereits klar: Die vier Aufgaben «Handlung», «Freier Wert», «Unabhängige Auswahl» und «Ein-/Aus-Einstellung» geben eine klare erste Auswahl.

### 39.1 · P2 · Hauptinhalt · Noch unsicher?

> Der Auswahlguide klärt Handlung oder Navigation, freien Text oder bekannte Werte und die Grenze zwischen Auswahl und Einstellung.

«Auswahlguide» und «Grenze zwischen Auswahl und Einstellung» machen die kurze Weiterleitung abstrakter als die vorangehenden Aufgabenkarten. Der lange Satz zählt drei Entscheidungspaare statt einer klaren Leseabsicht auf.

Fundstelle: `snapshot · shadcn-komponenten · content[5] · selection`.

### 39.2 · P2 · Vertiefung · Mit der Aufgabe beginnen

> Eine Komponente ist eine wiederkehrende Antwort auf eine konkrete Aufgabe.

Die Definition ist metaphorisch und wiederholt die bereits unmittelbar gezeigte Auswahlidee. In Kombination mit «Vier Bausteine im Zusammenhang» entsteht eine zweite Einführung in denselben Inhalt.

Fundstelle: `snapshot · shadcn-komponenten · content[7] · original-1`.

Gelesene Grundlage: `shadcn-komponenten` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/komponenten.tsx`.

## 40 · Komponenten auswählen

Seite: [/systems/shadcn/komponenten-auswahl](http://127.0.0.1:3010/systems/shadcn/komponenten-auswahl) · **Priorität P2 · 2 Befunde**

Bereits klar: Die vier Aufgabenwege und die Abgrenzung zum Link sind verständlich. Die Ausnahme beim Download wird anhand des Verhaltens erklärt.

### 40.1 · P2 · Vertiefung · Aufgabenkontexte

> ein vollständiger Bulkabschluss

Das hybride Kompositum ist ohne Erklärung kaum verständlich. Es liegt weder an der bewusst englischen Layoutnomenklatur noch an einem notwendigen technischen Dateinamen.

Fundstelle: `snapshot · shadcn-komponenten-auswahl · content[8] · observations`.

### 40.2 · P2 · Vertiefung · ursprüngliche Auswahlfragen

> hält selbst keinen Auswahlwert

Die Formulierung beschreibt einen Datenbehälter statt der sichtbaren Aufgabe. Die alten Auswahlfragen wiederholen die vier Wege und die drei Fragen des Hauptteils nahezu vollständig; die Stimme wechselt zurück in Spezifikationssprache.

Fundstelle: `snapshot · shadcn-komponenten-auswahl · content[11] · original-1`.

Gelesene Grundlage: `shadcn-komponenten-auswahl` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/komponenten-auswahl.tsx`.

## 41 · Button

Seite: [/systems/shadcn/components/button](http://127.0.0.1:3010/systems/shadcn/components/button) · **Priorität P2 · 2 Befunde**

Bereits klar: Die Regeln zu Handlung, Linkziel und konkreter Beschriftung sind knapp und nützlich. Default und Outline sind benannte Varianten und kein Übersetzungsfehler.

### 41.1 · P2 · Vertiefung · ursprüngliche Studie

> Eine verständliche Handlung ist bereit, erhält sichtbaren Tastaturfokus und löst einen Vorgang aus.

Hier bekommt die abstrakte Handlung Eigenschaften eines Bedienelements. Die Personifikation verwischt, ob von Button, Zustand oder Ablauf die Rede ist.

Fundstelle: `snapshot · shadcn-button · content[4] · original-1`.

### 41.2 · P3 · Vertiefung · Studie, zusätzliche Rendererbeschriftung

> Ruhigeres Gewicht; dieselbe verständliche Beschriftung.

«Ruhigeres Gewicht» verbindet zwei Metaphern. Das kleine Variantenetikett ist weniger unmittelbar verständlich als die eigentliche Erklärung der visuellen Hervorhebung.

Fundstelle: `src/docs/component-studies.tsx`.

Gelesene Grundlage: `shadcn-button` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/button.tsx`.

## 42 · Input

Seite: [/systems/shadcn/components/input](http://127.0.0.1:3010/systems/shadcn/components/input) · **Priorität P2 · 3 Befunde**

Bereits klar: Die Regeln zu Label, Hilfe, Fehler und der erreichbaren Eingabelänge sind konkret; die Trennung von Bearbeitung und Speicherung bleibt nachvollziehbar.

### 42.1 · P2 · Hauptinhalt · Typen und Grenzen

> 1–80 Unicode-Graphemcluster nach Randtrim

Die präzise Sonderregel des Piloten erscheint in einer technischen Kurzform. Ohne Erläuterung von Zähleinheit und «Randtrim» steigt die Einstiegshürde unnötig.

Fundstelle: `snapshot · shadcn-input · content[3] · boundaries`.

### 42.2 · P2 · Vertiefung · zusätzliche Rendererbeschriftung der alten Studie

> Kompositionsziel

Der Einwortzusatz an einem sichtbaren Fehlerbeispiel klingt nach einer internen Produktionsnotiz. Er erklärt nicht unmittelbar, was an diesem Beispiel schon gezeigt und was noch offen ist.

Fundstelle: `src/docs/component-studies.tsx`.

### 42.3 · P2 · Vertiefung · lokaler Stand

> Diese Feldzusammenstellung muss gesondert spezifiziert und geprüft werden.

«Feldzusammenstellung» ist ein sperriges Sammelwort für die zuvor konkret benannten Elemente. Zusammen mit wiederholten Absätzen über Demo, Contract und Pin wird der Ursprungstext zur zweiten Einleitung statt zur gezielten Vertiefung.

Fundstelle: `snapshot · shadcn-input · content[10] · text`.

Gelesene Grundlage: `shadcn-input` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/input.tsx`.

## 43 · Checkbox

Seite: [/systems/shadcn/components/checkbox](http://127.0.0.1:3010/systems/shadcn/components/checkbox) · **Priorität P2 · 2 Befunde**

Bereits klar: «Deaktivierung beschreibt die Verfügbarkeit, nicht den Auswahlwert» klärt einen wichtigen Unterschied verständlich.

### 43.1 · P2 · Hauptinhalt · Regeln

> Namensbindung und klickbare Labelfläche getrennt prüfen.

«Namensbindung» ist ohne Erklärung schwer in eine sichtbare Gestaltungsentscheidung zu übersetzen. Die technische Zuordnung und die klickbare Fläche sind verschieden, aber die knappe Formulierung setzt Vorwissen voraus.

Fundstelle: `snapshot · shadcn-checkbox · content[2] · rules`.

### 43.2 · P2 · Vertiefung · vollständige Ausgangsstudie

> Eine Checkbox hält eine unabhängige Ja/Nein-Auswahl.

Das Verb «hält» klingt nach Datenmodell. Zusammen mit mehreren wiederholten Erklärungen von Einzeloption, Gruppe, Fokus und Verfügbarkeit wird die Vertiefung eher zur erneuten Grundlageneinführung als zur gezielten Ergänzung.

Fundstelle: `snapshot · shadcn-checkbox · content[7] · text`.

Gelesene Grundlage: `shadcn-checkbox` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/checkbox.tsx`.

## 44 · Switch

Seite: [/systems/shadcn/components/switch](http://127.0.0.1:3010/systems/shadcn/components/switch) · **Priorität P2 · 2 Befunde**

Bereits klar: «Eine Einstellung ein- oder ausschalten. Das Label bleibt gleich» ist ein klarer Nutzensatz; die Zustandsbeispiele bleiben anschaulich.

### 44.1 · P2 · Hauptinhalt · Speicherablauf

> Die ausstehende Änderung erkennbar machen und widersprüchliche Mehrfachänderungen verhindern.

Die doppelte abstrakte Änderung und das Kompositum «Mehrfachänderungen» verdecken die einfache sichtbare Frage, welcher Zustand gerade gilt.

Fundstelle: `snapshot · shadcn-switch · content[3] · saving`.

### 44.2 · P2 · Vertiefung · Quellen

> Die native change-Projektion des Contracts ist damit kein Nachweis für die Demo

Das ist fachlich technische Abgrenzung, aber als Satz ohne Erklärung der «Projektion» schwer lesbar. Besonders der Anschluss zwischen Contract und tatsächlicher Demo wird für Gestaltungsleser vorausgesetzt statt erklärt.

Fundstelle: `snapshot · shadcn-switch · content[4] · limits`.

Gelesene Grundlage: `shadcn-switch` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/switch.tsx`.

## 45 · Content Design

Seite: [/systems/shadcn/content-design](http://127.0.0.1:3010/systems/shadcn/content-design) · **Priorität P2 · 3 Befunde**

Bereits klar: Die Gegenüberstellung unbestimmter und konkreter Feldtexte funktioniert; «Projektname», «Projekt erstellen» und «Projekt erstellt» bleiben erkennbar verbunden.

### 45.1 · P2 · Hauptinhalt · Meldungsvergleich

> Die ausgebliebene Antwort beweist keinen Nicht-Erfolg.

Die doppelte Verneinung und das künstliche Substantiv «Nicht-Erfolg» machen aus einem wichtigen einfachen Unterschied ein logisches Rätsel.

Fundstelle: `snapshot · shadcn-content-design · content[2] · writing-messages`.

### 45.2 · P2 · Vertiefung · Einleitung

> Prüfzeitpunkt und Rückwege führt das Formularpattern; die vollständige Pilotgrenze führt «Gestaltungs-Pilot».

Zwei abstrakte Gegenstände werden von Dokumenten «geführt». «Pilotgrenze» ist ungewohnt, und die Seite wird mit einem älteren internen Namen bezeichnet. Der Satz erklärt eine Dokumentzuständigkeit statt der Leserin ein klares Ziel zu zeigen.

Fundstelle: `snapshot · shadcn-content-design · content[6] · text`.

### 45.3 · P3 · Vertiefung · Meldungen

> Vier Meldungen: die Aussage folgt dem bekannten Zustand

Die erhaltene zweite Meldungsserie wiederholt vier der fünf Hauptbeispiele und verwendet eine andere Zählung. Das ist ein struktureller Lesebefund; die eingefrorene Ausgangsfassung bleibt als solche historisch richtig.

Fundstelle: `snapshot · shadcn-content-design · content[8] · Vier Meldungen: die Aussage folgt dem bekannten Zustand`.

Gelesene Grundlage: `shadcn-content-design` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/content-design.tsx`.

## 46 · Barrierefreiheit und inklusive Gestaltung

Seite: [/systems/shadcn/barrierefreiheit](http://127.0.0.1:3010/systems/shadcn/barrierefreiheit) · **Priorität P2 · 2 Befunde**

Bereits klar: Konkrete Aufgaben und erwartete Ergebnisse passen zum ausdrücklich prüfenden Thema. Screenreader, Reflow, Fokus und Kontrast sind hier notwendige Begriffe.

### 46.1 · P2 · Hauptinhalt · Prüfgrenzen

> Für jedes Ergebnis Umsetzung/Revision, Datum, prüfende Person, Browser/Betriebssystem, Screenreader-Version, Sprache, Theme, Vergrösserung, Eingabe, Erwartung, Beobachtung und Abweichungen notieren.

Die lange ungruppierte Aufzählung liest sich wie ein internes Protokollschema. Die Handlungsanweisung ist trotz korrekter Inhalte schwer zu überblicken.

Fundstelle: `snapshot · shadcn-barrierefreiheit · content[3] · access-limits`.

### 46.2 · P2 · Vertiefung · Nachweise

> fehlende Zweige bleiben nicht prüfbar

«Zweige» setzt ein unsichtbares Ablaufmodell voraus. Ausserdem klingt nicht prüfbar nach prinzipieller Unprüfbarkeit, obwohl der Absatz offene Prüffälle beschreibt. Sprachliche Unschärfe, keine Bewertung der Prüfergebnisse.

Fundstelle: `snapshot · shadcn-barrierefreiheit · content[11] · text`.

Gelesene Grundlage: `shadcn-barrierefreiheit` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/barrierefreiheit.tsx`.

## 47 · Mitwirken

Seite: [/systems/shadcn/mitwirken](http://127.0.0.1:3010/systems/shadcn/mitwirken) · **Priorität P2 · 2 Befunde**

Bereits klar: Das Muster eines konkreten Problems und die drei Übernahmekriterien machen die Mitarbeit nachvollziehbar.

### 47.1 · P2 · Hauptinhalt · Bildunterschrift

> Lokale Mechanik: Pages.ts (versions.drafts), component-pages.ts und published-documentation.ts (veröffentlichte Inhalte), app/mcp/route.ts (lesende Werkzeuge).

Direkt nach der Beitragsfolge steht eine Dateiliste ohne Erklärung ihrer Bedeutung für die mitwirkende Designerin. Die technischen Quellen sind relevant, aber die prominente Kurzform unterbricht den verständlichen Teamablauf.

Fundstelle: `snapshot · shadcn-mitwirken · content[1] · contribute-flow`.

### 47.2 · P3 · Hauptinhalt · Musterbeitrag

> Beleg und Aussageart

«Aussageart» klingt nach einer internen Klassifikation. Die nachfolgende Unterscheidung zwischen Beobachtung und Vorschlag ist konkreter als die Überschrift.

Fundstelle: `snapshot · shadcn-mitwirken · content[0] · contribute-example`.

Gelesene Grundlage: `shadcn-mitwirken` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/mitwirken.tsx`.

## 48 · Releases und Migrationen

Seite: [/systems/shadcn/release-stand](http://127.0.0.1:3010/systems/shadcn/release-stand) · **Priorität keine · 0 Befunde**

Bereits klar: Die drei Versionsstände und das reale Beispiel unterschiedlicher Contractbezüge sind klar getrennt. Die fachlichen Begriffe gehören zum Thema; kein vorrangiger sprachlicher Änderungsbedarf.

Gelesene Grundlage: `shadcn-release-stand` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/release-stand.tsx`.

## 49 · Technische Anbindung und MCP

Seite: [/systems/shadcn/technische-anbindung](http://127.0.0.1:3010/systems/shadcn/technische-anbindung) · **Priorität keine · 0 Befunde**

Bereits klar: Die Seite richtet sich ausdrücklich auf technische Anbindung. Werkzeugnamen, Hashes, SDK-Aufrufe, Pins und Plattformstände sind hier funktional erklärt und nicht allein wegen ihrer Fachlichkeit zu beanstanden. Kein vorrangiger sprachlicher Änderungsbedarf.

Gelesene Grundlage: `shadcn-technische-anbindung` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/technische-anbindung.tsx`.

## 50 · Von der Quelle zum Release

Seite: [/systems/shadcn/referenz-pflegen](http://127.0.0.1:3010/systems/shadcn/referenz-pflegen) · **Priorität P3 · 1 Befunde**

Bereits klar: Die technische Pflegeaufgabe ist konkret: Änderung einordnen, Paket übernehmen, Seitenbezug wählen und prüfen. Paket-, Datei- und Revisionsnamen sind hier sachgerecht.

### 50.1 · P3 · Einstieg · Zusammenfassung

> bewusst auf den geprüften Stand stellen

«Stellen» ist bei einem Seitenbezug vage, und «bewusst» benennt keine überprüfbare Tätigkeit. Die späteren Schritte erklären die tatsächliche Entscheidung deutlich genauer.

Fundstelle: `snapshot · shadcn-referenz-pflegen · summary`.

Gelesene Grundlage: `shadcn-referenz-pflegen` im veröffentlichten Snapshot; Darstellung und zusätzliche Texte: `src/docs/page-reworks/referenz-pflegen.tsx`.
