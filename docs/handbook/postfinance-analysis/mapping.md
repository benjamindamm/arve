# Vorschlag für eine abstrahierte shadcn-Referenz

Dies ist ein Gestaltungs-Mapping auf Basis sichtbarer UI-Muster. Es ist kein Nachweis des PostFinance-Technologiestacks und keine bereits implementierte Bibliothek. Typ, Layout, Inhalt und Zustand sollten unabhängig beschrieben werden.

## Seitentypen

| Kerntyp | Varianten aus dem Rundgang | Verantwortlichkeit |
|---|---|---|
| overview | Dashboard; Liste/Tabelle mit Suche; Katalog; Servicehub; Benachrichtigungen; Analyse; Prozesseinstieg | Bestände/Optionen überblicken, filtern, vergleichen, Ziel oder nächsten Prozess auswählen. |
| detail | Zahlungsdetail; Profildetail | Ein Objekt samt Beziehungen/Abschnitten lesen; passende Folgeaktionen anbieten. |
| edit | Kontakt ändern; Dashboard-Anordnung ändern | Bestehenden Zustand bearbeiten und Abschluss/Abbruch deutlich trennen. |
| create | Budget, Übertrag, Kontaktanlage, Import | Neues Objekt/einen neuen Auftrag erfassen. Mit edit als Formularfamilie teilbare Struktur, aber eigene Absicht und Beschriftung. |

Analyse kann später einen eigenen Typ erhalten, falls eine Bibliothek unterschiedliche Daten-/Diagramminteraktionen explizit vertraglich abgrenzt. Für die aktuelle Referenz reicht `overview` mit Analysevariante. Ein Wizard ist ein Prozess mit aufeinanderfolgenden Schritten; nur ein Einstieg wurde geprüft. Ohne Folgeschrittbelege sollten keine Stepper-, Review- oder Success-Vorlagen als beobachtet ausgewiesen werden.

## Layouts und Varianten

| Layout | Regeln für eine mögliche Referenz | Beleg |
|---|---|---|
| Main + Sidebar | Hauptbereich und ergänzende schmale Inhaltsspalte; mobil sequenziell anordnen. Keine Navigationssidebar voraussetzen. | Analyse |
| 4-column Card Grid | Vier Grundspalten, variable Zeilen, erlaubte Spannen 1/2/4; Inhaltsreihenfolge unabhängig von der Bildschirmposition klar halten. | Home, Zahlungen, EZAG, Profilhub, Produkte |
| Narrow Single Card | Als mögliche Bibliotheksoption separat führen, **nicht beobachtet** kennzeichnen. Keine kleine Formularfeldbreite als Beleg verwenden. | Kein eigenständiger Seitenbeleg |
| Wide Single Card | Breite Karte, optional Tabs; Varianten mit Formular, Tabelle, Label-Werten oder Hinweis. Unterschiedliche innere Inhaltsbreiten zulassen. | Überträge, Kontakt-Edit, Zahlungsdetail, Dokumente |
| Stacked Section Cards | Vertikale Abschnitte, Kartenbreite je Inhalt optional; Objektkontext erhalten. | Vermögen, Profil |
| 3-column Card Grid | Gleichberechtigte Karten im begrenzten Inhaltscontainer, variable Zeilen. | Support |

Ein dreispaltiger Produktvergleich innerhalb einer einzelnen Karte bleibt ein inneres Inhaltslayout. Ebenso ist der rechte Menü-Drawer eine Navigationsebene und der QR-Informationsdialog ein Overlay-Zustand. Beide dürfen nicht mit Seitenlayouts vermischt werden.

## Bausteine für eine spätere Umsetzung

Als abstrahierte Bausteine eignen sich App-Kopf/Navigation, Page Header, Card, Tabs mit schmaler Auswahlvariante, Button, Select/Combobox, Radio Group, Checkbox, Switch, Input, Label, Separator, Table, Badge/Status, Collapsible für Suchoptionen, Dialog, Sheet für das Seitenmenü sowie Diagramm- und Uploadkompositionen. Diese Liste benennt Gestaltungsrollen; sie bestätigt weder exakte shadcn-APIs noch fertige Komponenten für komplexe Uploads, Datentabellen oder Kartenanordnung.

Für einen ersten Referenzsatz genügen sechs Kompositionen: Dashboard im Vier-Spalten-Raster, filterbare Tabellenübersicht, Detailkarte, Kontaktformular mit Create/Edit-Varianten, Analyse mit rechter Inhaltsspalte und Servicehub. Produktkatalog und Statushinweis lassen sich als Varianten ergänzen. Die Inhalte sollten vollständig synthetisch sein; weder Demo-Identitäten noch Konten/Transaktionen kopieren.

## Zustände separat dokumentieren

Belegt: aktive Navigation/Tabs, geöffnetes Untermenü, ein-/ausgeklappte Suchoptionen, Formular mit deaktiviertem Feld, vorhandene Statussymbole in einer Dateiliste, Informationsdialog vor Upload, Demo-Funktion nicht unterstützt, Desktop-/schmaler Viewport. Nicht belegt: Formularvalidierung, vollständiger Wizard, erfolgreicher Submit, echter Leerzustand, Live-Lade-/Netzwerkfehler und vollständige Tastatur-/Screenreader-Bedienbarkeit. Das visuelle Inventar ist daher keine Barrierefreiheits- oder allgemeine Funktionsfreigabe.
