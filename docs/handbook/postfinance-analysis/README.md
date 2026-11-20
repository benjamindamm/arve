# PostFinance: visuelle Referenzanalyse

Stand: 20. November 2026. Quelle: [E-Finance-Demo](https://www.postfinance.ch/ap/ga/ob/html/finance/home), im eigenen BrowserOS-neo-Tab untersucht. Der Desktop-Kopf zeigt ausdrücklich «Demo»; die Mailbox meldet eine in der Demo nicht unterstützte Funktion. Diese Analyse beschreibt die Demo, nicht die vollständige produktive Anwendung.

## Ergebnis

Die beobachteten Seiten lassen sich mit drei Kerntypen **overview, detail und edit** sowie einer **create-Variante** der Formularfamilie beschreiben. Dashboard, Such-/Tabellenübersicht, Produktkatalog und Servicehub sind zweckgebundene overview-Varianten. Analyse ist eine ausgeprägte overview-Variante mit Kennzahlen, Diagrammen und Filtern; ein eigener Kerntyp ist für die vorliegenden Belege nicht nötig. Ein Wizard bezeichnet einen mehrstufigen Prozess, kein Layout. Beim QR-Generator wurde nur dessen Einstieg gesehen, kein vollständiger Ablauf.

Davon unabhängig sind die räumlichen Layouts:

| Layout | Visueller Beleg | Einordnung |
|---|---|---|
| 4-column Card Grid | Home, Zahlungen, EZAG, Profilhub | Vier Grundspalten und variable Zeilenzahl. Dashboard-Karten überspannen teils zwei Spalten; die Produktübersicht enthält zusätzlich eine Karte über die volle Breite. Kein festes 4×4-Raster. |
| Main + Sidebar | Analysen | Breite Diagramm-/Kennzahlkarte links; schmalere, gestapelte Zusatzkarten rechts. Sidebar bedeutet hier ergänzende Inhalte, nicht Navigation. |
| Wide Single Card | Überträge, Kontaktformular, Zahlungsdetail, Dokumente, Versicherungsliste | Eine breite, meist zentrierte Fläche mit optionalen Tabs und mehreren Innenabschnitten. Such-/Tabellenseiten können nahezu die volle Breite nutzen. |
| Narrow Single Card | Nicht als eigenständige Seite belegt | Kleine Felder innerhalb einer breiten Karte und der QR-Informationsdialog sind kein Nachweis dieses Seitenlayouts. Als Zielbibliothekslayout möglich, aber nicht aus dieser Beobachtung ableiten. |
| Stacked Section Cards | Vermögensübersicht, Profildetail | Mehrere vertikal angeordnete Abschnittskarten, teils mit unterschiedlicher Breite. |
| 3-column Card Grid | Kontakt und Support | Drei gleichberechtigte Spalten innerhalb einer begrenzten Inhaltsbreite, variable Zeilen. |

## Visuelle Sprache und Hierarchie

Desktop: schmale Plattform-/Benutzerleiste über gelber Hauptnavigation; aktiver Bereich mit dunkler Unterstreichung. Hell getönter Seitenhintergrund, weiße abgerundete Karten, dunkle blaugrüne Texte und Linien. Seitenüberschriften stehen meist oberhalb der Karten; auf Dashboard-Seiten tragen primär die Kartentitel die Inhaltsstruktur. Primäre Aktionen sind gelb und pillenförmig, sekundäre Aktionen weiß mit dunkler Kontur. Tabellen nutzen feine horizontale Trennlinien; Status kombiniert Symbol/Farbe und teilweise Text. Zahlen stehen häufig rechts, Objektidentität links. Diese Beobachtungen sind keine Token-Extraktion.

Formulare: häufig Labelspalte links und Eingabespalte rechts, innen auf etwa mittlere Breite begrenzt; die äußere Karte bleibt breit. Tabs liegen am oberen Kartenrand. Inhaltliche Gruppen werden durch Überschriften, großzügige Abstände und horizontale Trennlinien gegliedert. Primär-/Sekundäraktionen stehen am Abschnitts- oder Kartenende rechts. Detailseiten verwenden dieselbe Ordnung als Label-Wert-Paare ohne Eingabefelder.

## Responsive Beobachtung

Ausgangsfenster: 1040×719 CSS-Pixel bei DPR 2; Home erschien einspaltig mit Hamburger-Menü. Hauptprüfung: 1440×1000 CSS-Pixel, DPR 1. Ergänzend wurden Home, Analysen und Überträge bei 390×844 CSS-Pixeln visuell geprüft. Das ist eine Viewport-Prüfung, kein Test auf einem realen Mobilgerät.

- Home: Karten werden einspaltig; Aktionsbuttons nehmen die verfügbare Breite ein und stehen untereinander. Kontoauswahl und Kennzahl werden vertikal angeordnet.
- Analysen: Filter stehen untereinander, Diagramm und Kennzahlen ebenfalls; die Desktop-Seitenspalte steht nicht mehr neben dem Hauptinhalt. Ihre genaue Position weiter unten wurde nicht vollständig abgescrollt.
- Überträge: Desktop-Tabs werden zur Auswahlbox; Labels stehen oberhalb der Felder, Radiobuttons untereinander.
- Die Navigation reduziert sich auf Logo, aktuellen Bereich, Suche und Menü. Beim Ausgangsviewport wurde das mehrstufige rechte Menü mit abgedunkeltem Hintergrund geöffnet; Zurück und Schließen bleiben oben.

## Methode, Nachweis und Grenzen

Alle Einträge im [Ansichteninventar](inventory.md) mit Status «visuell» wurden als Browser-Screenshot tatsächlich angesehen. Ergänzend dienten zugängliche Struktur, Überschriften und sichtbare Links zur Navigation. Screenshots wurden nicht als Dateien in das Repository übernommen; das Inventar hält abstrakte Bildbeschreibungen und Navigationspfade fest. Es enthält keine Kontonummern, Namen, Adressen, konkreten Salden oder Transaktionen. Die kurzlebigen Browser-Tool-Ausgaben sind kein versioniertes Bildarchiv.

Alle sieben Finance-Hauptbereiche wurden besucht, ebenso die wesentlichen Services. Der Rundgang dedupliziert Seitentypen anhand repräsentativer Unterseiten; er ist **kein vollständiger Crawl aller Routen oder aller Zustände**. Nicht vollständig untersucht wurden sämtliche Anlage-/Krypto-/Vorsorgeunterseiten, Administration, Freigaben, jede Formularvariante, Bestell-/Zahlungsabschluss, externe Produktseiten, Merchant Portal und Datei-/PDF-Inhalte. Login, echte Fehlerfälle, Validierung, leere Listen und Erfolgsmeldungen wurden nicht künstlich ausgelöst. Der Demo-Hinweis ist ein belegter Systemzustand, keine allgemeine Fehlerprüfung.

Sicher ausgeführte Interaktionen: Hauptmenü und seine Kategorien öffnen/zurück; normale Links auf Übersichten und Details; Kontaktbearbeitung über den zugehörigen Edit-Link öffnen; Suchoptionen einklappen; Viewport wechseln. Keine Felder wurden ausgefüllt, keine Daten gespeichert, keine Dateien hochgeladen, keine Zahlungen oder Verträge bestätigt und keine Nachrichten versandt. Direkte Navigation auf einzelne bereits beobachtete Links wurde zur effizienten Erkundung verwendet. Dabei zeigte sich, dass dieselbe Formular-URL je nach vorherigem Navigationskontext «Create» oder «Edit» zeigt. Routen allein bestimmen daher nicht zuverlässig den Seitentyp. Die Oberfläche wechselte bei direktem Routenaufruf von Deutsch zu Englisch; eine Spracheinstellung wurde nicht aktiv geändert.

Die [Mapping-Empfehlung](mapping.md) ist eine abstrahierte Referenz für eine spätere shadcn-basierte Umsetzung. Es wurde nicht ermittelt oder behauptet, dass PostFinance shadcn verwendet. Keine App-, CMS- oder Contractänderungen wurden vorgenommen.
