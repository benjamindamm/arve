# Komponenten: Bestandsaudit und Darstellungsplan

Stand: 18. November 2026. Arbeitsgegenstand: Arve, Referenzsystem **shadcn**, sechs Seiten des Komponentenbereichs und die Schnittstelle zum Pattern «Auswahl und Suche». Dies ist ein Umsetzungsplan, keine neue Design- oder Implementierungsfreigabe. Bestehende CMS-Inhalte, Contractpins und App wurden nicht redaktionell geändert.

## 1. Erkenntnis und Ziel

Die Komponentenstrecke beantwortet derzeit vor allem «Wo ist die Implementierung?» und «Wie sieht der Contract aus?». Sie muss zuerst beantworten: **Passt dieser Baustein zu meiner Aufgabe, wie gestalte ich ihn und welche Folgen hat meine Wahl?** Vier Komponenten genügen als Ausgangspunkt, wenn ihr Zusammenwirken nachvollziehbar wird. Eine umfangreichere Katalogkopie würde die Lücken nur vervielfachen.

Input ist inhaltlich wesentlich weiter als Button, Checkbox und Switch, aber noch kein guter Darstellungsstandard: fünf generische Vorlagenabschnitte, anschliessend sieben redaktionelle Abschnitte, Do/Don't, eine Abbildung und ein langer technischer Abgleich führen dieselben Aussagen mehrfach. Die Live-Demo erscheint erst danach. Button, Checkbox und Switch besitzen praktisch nur Einleitung und zwei Hinweise; ihr sichtbarer Seitenaufbau wird von Plattformkarten, Demo und Contract dominiert. Daher **Qualitätsanspruch von Input übernehmen, seine Seitenarchitektur nicht kopieren**.

Übertragbar auf ein Firmensystem sind die Fragen, die visuellen Erklärungsmuster und die Nachweisstruktur. Farben, Grössen, Varianten, Verfügbarkeit und Hausregeln bleiben je System eigene Entscheidungen. «shadcn» bezeichnet hier die gewählte lokale Referenzbibliothek; Spartan ist die konkrete Webvorschau, nicht ein Beweis für sämtliche shadcn-Fähigkeiten.

## 2. Tatsächlich gelesener Bestand

CMS über Payload Local API, `draft:false`, einschliesslich aller sechs Seiten und der veröffentlichten Implementierungsdatensätze; Portalansicht und DOM der vier Komponenten über BrowserOS neo; Demoquellen und Rendering; die CEM-/SCXML-Inhalte der **auf den Seiten gepinnten** Exporte. `content-matrix.md` und `local-review.md` dienen als historische Ausbau- und Abweichungsberichte. Keine vollständige Tastatur-, Screenreader-, Touch- oder Konformitätsprüfung wurde durchgeführt. Frühere Kontrast-/Breitenmessungen sind keine neuen Messungen dieses Audits. Der erste Local-API-Start verwendete die Entwicklungskonfiguration und meldete Schema-Pull; es wurden ausschliesslich Find-Aufrufe ausgeführt. Weitere Starts liefen im Produktionsmodus ohne diesen Schema-Pull; künftig für Audits zusätzlich Adapter-Push ausdrücklich deaktivieren.

| Seite / CMS-ID / Pfad | Tatsächlicher Inhalt | Konsequenz |
| --- | --- | --- |
| Komponenten · 13 · `/systems/shadcn/komponenten` | Summary nennt Implementierungen, Beispiele, Contracts. CMS-Text behandelt nur Button; vier Komponenten und Auswahlleitfaden existieren als Kinder. | Einstieg ist fachlich veraltet. Alle vier Aufgaben gleichwertig sichtbar machen; keine technische Architektur als erste Erklärung. |
| Komponenten auswählen · 50 · `/systems/shadcn/komponenten-auswahl` | Externer Kataloglink, vier knappe Zuordnungen und Warnung vor unbewiesener Spartan-Verfügbarkeit. | Lokal beginnen, Grenzen und Alternativen erklären; externer Katalog erst als weiterführende Quelle. |
| Button · 8 · `/systems/shadcn/components/button` | Aktion/Download, gutes Label gegen «Hier klicken»; leere Vorlagenfelder. Default/Outline und Deaktivierung in Demo. | Gewichtung, Navigation versus Aktion, Folgen der Aktivierung und lange Labels fehlen. |
| Checkbox · 15 · `/systems/shadcn/components/checkbox` | Unabhängige Auswahl, Formularspeicherung, Labelbeispiel. «Bei einer Auswahl aus genau einer Option … Radiobuttons» ist sprachlich falsch bzw. mehrdeutig. | «Genau eine aus mehreren gegenseitig ausschliessenden Optionen» sagen. Einzelbestätigung, unabhängige Mehrfachwahl und Gruppenwahl auseinanderhalten. |
| Input · 14 · `/systems/shadcn/components/input` | Ausgefüllte Vorlage, Auswahlregeln, Beschriftung, Breite, Fehler, Review, Anatomieschema und technischer Abgleich. | Inhalt in eine visuelle Erzählung konsolidieren. Zustände bislang beschrieben statt vollständig dargestellt. |
| Switch · 16 · `/systems/shadcn/components/switch` | Unmittelbar ein/aus, stabiles Label; Checkbox bei separatem Speichern. | Unmittelbare Wirkung als lokale Gestaltungskonvention ausweisen; Speichervorgang, Fehler und Abhängigkeiten sind noch nicht gestaltet. |
| Schnittstelle: Auswahl und Suche · 46 · `/systems/shadcn/auswahl-und-suche` | Comboboxlink, kurze Regeln zu sichtbaren/langen Listen und unzulässigem Freitext. | Pattern verantwortet Werteauswahl im Ablauf; Komponentenleitfaden führt dorthin und dupliziert keine Listenlogik. |

### Verknüpfungen und belastbarer Fähigkeitsstand

Alle vier gepinnten Exporte tragen `draft`. Die folgenden Grenzen sind aus den tatsächlich gelesenen Pins abgeleitet, nicht aus neueren Importen oder Upstream-Dokumentation:

| Komponente / Exportrevision | Im Contract beschrieben | In der Demo angeboten / entscheidende Grenze |
| --- | --- | --- |
| Button · `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d` | Sichtbares Label, disabled, default/outline; Grössen xs/sm/default/lg, Outline-Nachweis laut CEM nur default; Aktivierung | Nur Default/Outline und disabled steuerbar. Klick meldet «Beispielaktion ausgelöst», lädt keine Rechnung. Kein Loading, Icon-only, destructive oder Toggle-Verhalten belegt. |
| Input · `70bc11b26ef7f00f952db731e1397a265648922a9e79181db08ac745ea0f7c76` | value, label, placeholder, disabled, rounded; Eingabe aktiv/deaktiviert | Natives Textfeld mit Label «Projektname» und disabled-Steuerung. Kein Schalter für rounded, Fehler, readonly, Hinweise oder Versand. |
| Checkbox · `638e6f954f0c03f4efe5c682e0c90f757db9e1259daec3591d9ba4b494a6a072` | checked boolean, disabled, label; binärer Auswahlwert | Einzelne Checkbox mit ARIA-Rolle auf Button. Keine Gruppensteuerung, gemischte Auswahl oder Formularspeicherung gezeigt. |
| Switch · `3994eb962797b7f48a25939c595dc9e9aac98e3423ff8865e313b3305d0cbb29` | checked boolean, disabled, label; default/small; binärer Zustand | Einzelner Switch mit ARIA-Rolle auf Button. Keine Grössenwahl, kein persistentes Speichern, kein Netzwerkfehler gezeigt. |

Nur Button hat einen veröffentlichten Implementierungsdatensatz: Spartan 1.9.0, Web, `preview`; dessen dokumentierter Prüfumfang ist Klick/Deaktivierung, mobile Bedienung, assistive Technologien und Contract-Konformität bleiben offen. Die anderen drei Seiten zeigen trotzdem Demos, während ihre Plattformkarten «Keine Implementierung veröffentlicht» melden. Das ist kein zwingender Datenwiderspruch, aber eine missverständliche Darstellung von **Demo vorhanden** gegenüber **registriertem Implementierungsstand**.

Checkbox/Switch verwenden in der Vorschau ARIA-Buttons, die gepinnten Vorlagen native Eingabeelemente. Dieser Unterschied muss im technischen Nachweis erhalten bleiben. Ein richtiger zugänglicher Name allein beweist weder gleiches Formularverhalten noch identische Tastatur- und Fokusdetails. Das sichtbare Checkbox-/Switch-Label ist in der Demo ein referenzierter `span`; seine Pointer-Aktivierung ist aus der Namensbindung nicht abzuleiten und eigens zu prüfen.

Der Input-Langtext verweist zusätzlich auf Bibliotheksimport `5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed`, während der Seitenpin älter ist. Der bestehende Bericht nennt visuelle Abweichungen, unter anderem 32 px Exporthöhe gegenüber damals gemessenen 37 px. Diese Historie nicht löschen, aber aus dem primären Gestaltungsweg in einen datierten Abgleich verlagern. Niemals beide Revisionen stillschweigend als dieselbe Referenz behandeln.

## 3. Informationsarchitektur und gemeinsame Darstellungsprinzipien

**Komponentenübersicht:** Titel, ein Satz Zweck, vier ruhige visuelle Beispiele mit Aufgabenbezeichnung: «Aktion auslösen», «Kurzen Text eingeben», «Optionen markieren», «Einstellung schalten». Je Beispiel Name, knappe Einsatzgrenze, Link zur Detailseite. Darunter «Unsicher bei der Wahl?» zum Leitfaden. Ein kleiner erklärender Bereich unterscheidet Gestaltungsbeschreibung, lokale Demo und Implementierungsstand. Keine grossen leeren Plattformkarten und kein Code in der Übersicht.

**Auswahlleitfaden:** kleine Vergleichstafel statt Katalogliste. Spalten «Was soll geschehen?», «Was bleibt als Wert?», «Wann wirkt es?», «Passender Einstieg». Button löst Aktion aus; Input erfasst freien Text; Checkbox hält unabhängige Auswahl; Switch beschreibt ein/aus. Zusätzliche Wege: Navigation → Link; langer Text → Textarea; genau eine feste Option → Radio/Select; viele bekannte Werte durchsuchen → Auswahlpattern. Nicht verfügbare lokale Komponenten tragen «Entscheidungshilfe; lokal noch nicht nachgewiesen». Keine universelle Optionsanzahl festlegen. Drei kontrastierende Fälle erklären die schwierigen Grenzen: Navigieren/Aktion, unabhängige Auswahl/exklusive Wahl, Formulareinstellung/sofortige Einstellung.

**Detailseiten:** gemeinsamer Rahmen aus präziser Summary, kontextnahem Beispiel, kurzer Standangabe und Quellen/Contractzugang. Dazwischen freie, auf die konkrete Komponente zugeschnittene Abschnitte. Inhaltsnavigation nur bei entsprechender Länge. Varianten, Interaktionszustände, Prozesszustände und Layoutkontexte nicht in einem einzigen Dropdown vermischen. Ein statisches Bild kann Varianten vergleichbar machen; Verhalten muss als Verhalten geprüft werden.

Gestaltungsinhalt bleibt ohne Code verständlich. Technische Ansicht auf Nachfrage; SCXML nicht standardmässig aufgeklappt. Der relevante Nachweis bleibt erreichbar, aber nimmt nicht die Dramaturgie ein. Offene Einschränkungen unmittelbar am betroffenen Beispiel nennen, nicht erst in einem langen Haftungstext am Seitenende.

## 4. Button: Welche Handlung, welches Gewicht, welche Folge?

1. **Einstieg «Eine Handlung eindeutig anbieten».** Kurzer Ausschnitt mit «Änderungen speichern» und «Abbrechen», bewusst ohne fiktive ganze Anwendung. Beide Beschriftungen erklären die Folge. Daneben Abgrenzung zu «Projekt öffnen» als Navigation. Das jetzige Downloadbeispiel nur weiterverwenden, wenn ausdrücklich als simulierte Aktion gekennzeichnet; eine Ressource per URL kann ein Link sein, die Form allein entscheidet nicht.
2. **«Die nächste Handlung hervorheben».** Default und Outline gleichzeitig mit identischem Label zeigen. Darunter ein Aktionspaar im Kontext. Erläutern, dass Gewicht aus der Aufgabe entsteht; nicht jeder Bereich braucht automatisch einen gleich starken primären Button. Default/Outline sind die zwei belegten lokalen Varianten. Destruktiv, Icon-only, Menübutton und Toggle nicht als verfügbare Variante ergänzen.
3. **«Beschriftung und Platz».** Eine annotierte Abbildung mit Label, Innenraum und Bedienfläche; keine vom Export losgelöste neue Pixelskala. Kontrastpaar: verständlicher Verb-/Objekttext gegen «OK» ohne Kontext. Zweite Zeile mit langem übersetztem Text. Breite, Umbruch und gestapelte Aktionsgruppe zeigen; weder Abschneiden noch ausschliessliche Symbolersetzung als Platzlösung.
4. **«Was nach der Aktivierung geschieht».** Zustandsstreifen: bereit → Fokus → gedrückt → Aktion angestossen. Disabled separat mit nachvollziehbarer Voraussetzung. Ein kleines Ablaufbeispiel «Speichern → Rückmeldung» ist Pattern-/Kompositionsziel, kein bereits implementierter Loading-Button. Fokus nach Dialog/Navigation ist Aufgabe des nachfolgenden Ablaufs.
5. **Live-Beispiel:** Default/Outline, disabled; Ergebnistext klar «Simulation». Daneben knappe Erklärung, was hier tatsächlich geprüft werden kann. Grössen xs/sm/default/lg zunächst als Contractdeklaration kennzeichnen, bis gerenderte Varianten gegen die gepinnte Revision geprüft sind.

Abnahmefrage: Kann jemand erklären, welche Aktion primär ist, welche nur navigiert und was nach dem Auslösen sichtbar werden muss? Querverweise: Content Design, destruktive Aktionen, Formularvalidierung, Systemzustände, Abstände/Bedienflächen.

## 5. Input: Welcher Wert wird benötigt, und wie gelingt die Eingabe?

1. **Einstieg mit vollständigem Feld.** «Projektname», editierbarer Wert, bei Bedarf ein hilfreicher Hinweis. Die Darstellung erhält unmittelbar den Hinweis «Feldzusammenstellung als Gestaltungsziel; lokale Demo zeigt Label und Eingabe». Kein achtteiliger Warnblock vor dem ersten Beispiel.
2. **«Freier Text oder feste Auswahl?»** Kleine Gegenüberstellung mit kurzer Begründung: kurzer bekannter Wert → Input, mehrzeiliger Inhalt → Textarea, feste Werte → Auswahl. Suche ist ein Ablauf mit Ergebnisdarstellung, keine rein runde Inputvariante.
3. **«Die Eingabe verständlich machen».** Annotierte Anatomie als Hauptabbildung: dauerhaftes Label, Wert/Platzhalter, optionale Einheit, Hinweis, Fehler. Labels einmal erklären; nicht parallel in Template, Fliesstext und Do/Don't. Ein konkretes schlechtes/gutes Paar nur für den Platzhalterfehler, weil es visuell erkennbar lehrt.
4. **«Zustände vergleichen».** Sechs kleine, beschriftete Beispiele: leer, gefüllt, fokussiert, Fehler+Fokus, schreibgeschützt, deaktiviert. Leer/gefüllt sind Inhalte, Fokus Interaktion, ungültig Validierung; sie können kombiniert auftreten. Fehler und readonly erhalten sichtbar «Zusammenspiel noch zu spezifizieren». Ein deaktiviertes Beispiel hat den Grund ausserhalb des Elements. Keine Scheindemo, die Fehler allein rot färbt und dabei Zugänglichkeit suggeriert.
5. **«Lange Inhalte und schmale Flächen».** Vergleich eines kurzen erwarteten Werts mit langem Namen, jeweils normal/schmal; Label, Hilfe und Fehler umbrechen. Der Wert bleibt bearbeitbar. Die historische specimenWidth 320 ist keine allgemeine Feldbreite. Details zu Abstandsskalen führen zur Grundlage.
6. **Live-Beispiel und Prüfaufgaben:** Eingeben, Einfügen, Auswahl und Kopieren; deaktivieren. Aktuelles Beispiel zeigt keine Fehler- oder readonly-Fähigkeit. Datum/Uhrzeit/Passwort/Datei/nummerische Spezialfelder nicht aus `input` als automatisch unterstützt ableiten.

Redaktionelle Migration: `usage` in die Entscheidungshilfe; `anatomy` mit Labels/Hilfen in eine Abbildung; `states` in die Vergleichstafel; `accessibility` in die konkreten Beispiele und kurze Prüfliste; `verification` in den kompakten Standblock. Abschnitt «Fehler korrigieren» behält nur lokale Zuordnung von Label/Feld/Meldung, Prüfzeitpunkt und Fokus nach Submit gehen ins Formularpattern. «Noch zu entscheiden» und technischer Abgleich werden zu verlinkten offenen Punkten, nicht nochmals zu vollständigen Erklärungen.

Abnahmefrage: Kann eine Designerin ein verständliches Feld samt Fehler+Fokus und schmaler Anordnung gestalten und klar benennen, was über die lokale Input-Demo hinausgeht?

## 6. Checkbox: Unabhängige Optionen und gemeinsame Auswahl

1. **Einstieg mit unabhängigen Optionen.** Drei kurze Optionen unter einer eindeutigen Gruppenfrage, z. B. verfügbare Exportinhalte. Die Gruppe ist als Kompositionsentwurf bezeichnet; lokale Demo bleibt ein einzelnes Element. Eine einzelne Bestätigung als zweiter knapper Fall, ohne juristische Mustertexte oder pauschale Vorbelegung.
2. **«Mehrere dürfen gelten».** Gegenüberstellung Checkboxgruppe versus exklusive Radioauswahl. Aussage präzisieren: Checkboxen stehen für unabhängige Ja/Nein-Werte; Radio wäre eine aus mehreren ausschliessenden Optionen. Checkbox ist nicht einfach «mehrere», weil auch eine einzelne unabhängige Option korrekt sein kann.
3. **«Auswahl erkennen».** Zwei Spalten nicht gewählt/gewählt; darunter beide mit Fokus und beide deaktiviert. Häkchen/Form und zugänglicher Zustand unterstützen Bedeutung, Farbe allein genügt als Erklärung nicht. Gruppentitel und lange, umbrechende Labels werden in der Abbildung berücksichtigt.
4. **«Alle auswählen ist eine eigene Aufgabe».** Kleines erklärendes Schema keine/einige/alle, ausdrücklich zukünftiger Bedarf aus Tabellen/Listen. `mixed` ist nicht im aktuellen binären Contract. Verhalten der übergeordneten Auswahl und Rückkehr nach Teilabwahl erst im Pattern festlegen; nicht als dritte Stufe der vorhandenen Demo präsentieren.
5. **«Speichern und Abhängigkeiten».** Sichtbare Erklärung, ob Auswahl sofort wirkt oder beim Formularabschluss gespeichert wird. Fehlermeldung an der Gruppe, falls eine Mindestwahl erforderlich ist, als Formularregel kennzeichnen. Abhängige deaktivierte Optionen brauchen verständlichen Grund.
6. **Live-Beispiel:** binäre Auswahl plus disabled. Prüfaufgaben: sichtbares Label verständlich, Namensbindung, Space, Fokus, Pointer-Aktivierung des Labels, lange Labels. Der letzte Punkt ist explizit offen.

Abnahmefrage: Lassen sich Einzeloption, unabhängige Mehrfachwahl, exklusive Auswahl und «alle auswählen» auseinanderhalten, ohne nicht implementierte Gruppenfähigkeiten zu versprechen? Querverweise: Auswahlpattern, Tabellen/Listen, Formularvalidierung, Content Design.

## 7. Switch: Welcher Zustand gilt jetzt?

1. **Einstieg als Einstellungszeile.** «Benachrichtigungen» bleibt links identisch; rechts Switch aus/ein. Zwei nebeneinanderliegende Zustände erklären die Bedeutung besser als eine lange Anatomieliste. Eine optionale Beschreibung nennt die Wirkung; «An»/«Aus» ist Zustand, kein wechselndes Label.
2. **«Sofort schalten oder gesammelt speichern?»** Dieselbe Einstellung in zwei Kontexten vergleichen: direkte Änderung als Switch, gesammelt bestätigte Formularauswahl als Checkbox. Das ist eine vorgeschlagene lokale UX-Konvention, keine universelle ARIA-Pflicht. Keine pauschale Behauptung, jeder Switch speichere technisch unmittelbar.
3. **«Während die Änderung übernommen wird».** Ablaufskizze aus → wird übernommen → ein; Fehlerpfad zum bisherigen Zustand mit Erklärung/Wiederholung. Alternativ erst nach Bestätigung den neuen Zustand zeigen. Die Wahl zwischen optimistischem und bestätigtem Verhalten ist Produktentscheidung. Beide Skizzen bleiben Kompositionsbedarf; aktueller Contract und Demo enthalten keinen Persistenzablauf. Nicht mitten im Request kommentarlos deaktivieren und Erfolg suggerieren.
4. **«Verfügbarkeit erklären».** Aus, ein, Fokus+aus/ein, deaktiviert+aus/ein. Unbekannter Serverzustand ist nicht «aus». Abhängigkeit auf anderes Setting mit Ursache und sinnvollem nächsten Schritt erklären. Switch hat keinen gemischten Zustand.
5. **«Dichte und lange Beschriftungen».** Eine Einstellungszeile normal/schmal; Text darf wachsen, Schalter bleibt erkennbar zugeordnet, keine absolute Textposition. Grösse small aus Contract als Deklaration, nicht als getestete Touchlösung ausgeben.
6. **Live-Beispiel:** lokale Zustandsänderung und disabled; klar sagen, dass keine Einstellung dauerhaft gespeichert wird.

Abnahmefrage: Erkennen Menschen aktuellen Zustand, Wirkung, ausstehende Übernahme und fehlgeschlagene Änderung als unterschiedliche Dinge? Querverweise: Systemzustände, Einstellungsseiten beim Layoutthema, Checkbox, Content Design.

## 8. Wiederverwendbare Redaktionselemente und CMS-Bedarf

Keine neue starre Abschnittsschablone. Wiederverwendbar sind **kleine Bausteine**, deren Reihenfolge die Frage der Seite bestimmt:

| Element | Redaktioneller Inhalt | Darstellungsregel |
| --- | --- | --- |
| Aufgabenvergleich | zwei Optionen, Entscheidungsgrund, Grenze, Ziellink | Gleicher Kontext, jeweils ein sichtbarer Unterschied; kein dekoratives Do/Don't ohne Vergleich |
| Annotiertes Beispiel | Darstellung, nummerierte Hinweise, Textäquivalent, System-/Revisionsbezug | HTML/SVG bzw. responsive Darstellung bevorzugen; Beschriftungen dürfen schmal unter das Bild wechseln |
| Variantenvergleich | Name, Zweck, gerendertes Beispiel, lokaler Nachweis | Gleiches Label und gleicher Kontext; Varianten nicht mit Zuständen mischen |
| Zustandsvergleich | Inhaltszustand, Interaktion, Verfügbarkeit, ggf. Prozesszustand; Belegstatus | Relevante Kombinationen sichtbar, nicht vollständiges kombinatorisches Raster |
| Ablaufminiatur | Ausgangslage, Aktion, Rückmeldung, Fehler/Rückweg | Komposition ausdrücklich vom einzelnen Control unterscheiden |
| Stand und offene Punkte | Demo/Implementierung/Contract jeweils eigener Status, Plattform, Datum, Umfang | Kurze Aussage am Beispiel; Details hinter eindeutigem Link |

Heute reichen Textareas und `text`/`guideline`-Blöcke für Prosa, aber nicht für die benötigten relationalen Zustands-/Vergleichsdaten. Bilder nur als Do/Don't hochzuladen ist semantisch zu eng: eine Anatomie ist keine Do-Empfehlung. Benötigt werden neutraler Figure-Block (Alttext, Caption, Herkunft, Deklaration Schema/Live), Comparison-/State-Examples mit Textäquivalent, strukturierte Quellen/Regelherkunft und Related-Links. Nur die tatsächlich in den vier Seiten verwendeten Felder bauen; keinen universellen CMS-Baukasten vorwegnehmen.

`summary` soll auch auf Komponentendetailseiten erscheinen (derzeit nicht aus `getComponentPage` geliefert). Templatefelder dürfen Arbeitsfragen im CMS bleiben, aber nicht automatisch zusätzlich zum selben Langtext ausgegeben werden. Eine veröffentlichte Aussage hat einen führenden redaktionellen Ort; Portal und MCP müssen daraus dasselbe liefern. Standdaten möglichst aus Implementierung/Pin ableiten, nicht nochmals frei tippen. Einseitige Flags «geprüft» vermeiden; Nachweis braucht Gegenstand, Revision, Umgebung, Datum und begrenzten Umfang.

## 9. Responsive und inklusive Abnahme der späteren Umsetzung

Für jede Seite breit und schmal mit realen langen Labels, übersetzten Texten und vergrösserter Schrift prüfen. Vergleiche werden untereinander angeordnet, behalten aber ihre Vergleichsüberschriften. Kein notwendiger erklärender Text ausschliesslich im Bild, Hover oder Farbsignal. Statische Zustandsbilder sind nicht als bedienbare Controls in der Lesereihenfolge auszugeben. Jede Live-Demo hat eindeutigen Namen, getrennte Demosteuerung und einen Weg zurück in den Seitenfluss.

Die visuelle Grösse eines Kontrollkästchens und die wirksame Bedienfläche getrennt prüfen. Fokus muss auch bei Auswahl/Fehler erkennbar bleiben. Native und ARIA-Implementierungen erhalten reale Tastatur- und assistive Prüfungen, nicht nur DOM-Inspektion. Zoom/Reflow, Touch und Bildschirmtastatur, Kontrast in tatsächlichen Kombinationen sowie längere/RTL-Inhalte sind gezielte Prüfkontexte. Plattformstände nicht zusammenziehen: Webdemonstration ist keine iOS-/Android-Freigabe. Konkrete normative Kriterien und Messmethoden führt die zentrale Inklusionsseite; Komponenten benennen ihre jeweiligen Fälle.

## 10. Erweiterung ausschliesslich aus Patternbedarf

| Auslöser | Nächster benötigter Baustein / Entscheidung | Eintrittskriterium |
| --- | --- | --- |
| Formularvalidierung | Field-Zusammenstellung aus Label, Beschreibung, Fehler; Textarea für wirklich lange Texte | Eine ausgearbeitete Formularaufgabe benötigt diese Elemente; Verantwortlichkeit Input versus Field geklärt |
| Auswahlpattern | Radio, Select und gegebenenfalls Combobox | Wertevertrag, exklusive/mehrfache Auswahl, Suchbedarf und Verhalten ohne Treffer bestimmt; nicht alle drei vorsorglich bauen |
| Detail-/Listenweg | Link | Navigation/Download/Rückweg sauber von Aktionen trennen |
| Tabellen/Listen | Gruppen-/Sammelauswahl und ggf. mixed Checkbox | Tatsächliche Massenaktion vorhanden, Auswahlumfang und Teilmenge definiert |
| Destruktive Aktion | Bestätigungsfläche oder Dialog, falls nötig | Risiko und Wiederherstellbarkeit begründen zusätzliche Bestätigung; keine pauschale Dialogpflicht |
| Systemzustände | Inline-Rückmeldung/Statusbereich, eventuell Toast | Reichweite, Dauer und Wiederauffindbarkeit aus konkretem Ablauf ableiten |

Cards, Tabs, Menüs, Toasts und weitere Katalogelemente nicht allein ergänzen, weil sie upstream existieren. Bei künftigem Firmensystem zunächst dieselben Aufgaben und Lücken abbilden und danach dessen verfügbare Bausteine zuordnen.

## 11. Reihenfolge, Schnittstellen und Abnahmekriterien

1. **Bestandsbegriffe bereinigen:** Komponentenübersicht vervollständigen, Checkboxsatz korrigieren, Demo/Implementierungsstand unterscheiden, Revisionen nicht vermengen. Bestehende Slugs bewahren.
2. **Input redaktionell konsolidieren:** ein visueller Aufbau statt Template plus Aufsatz; technischen Abgleich erreichbar auslagern. Field-/Fehlergrenze mit Formularpattern abstimmen. Das ist der Pilot für die benötigten CMS-Blöcke.
3. **Checkbox und Switch zusammen gestalten:** gemeinsamer Vergleich der Werte und Speichersemantik, aber eigene Seitenführung. Tabellen-/Auswahlpattern liefert Bedarf für mixed; Systemzustände liefert Übernahme/Fehler bei Einstellungen.
4. **Button aus Handlungskontext ausarbeiten:** Hierarchie, Navigation, Text und Folge; Verbindung zu Formularen/destruktiven Aktionen herstellen. Fehlende Varianten nicht vorzeichnen und als verfügbar ausgeben.
5. **Leitfaden und Übersicht aus finalen Entscheidungen ableiten:** dieselben Aufgabenbegriffe und tatsächlichen Zustände verwenden. Verwandte Seiten in beide Richtungen prüfen.
6. **Lokale Demos separat an Zielrevision angleichen und prüfen:** eigenes Implementierungspaket, nicht durch redaktionelle Veröffentlichung ersetzen. Erst danach Nachweise aktualisieren.
7. **CMS-/Portal-/MCP-Abgleich und redaktionelles Review vor Veröffentlichung:** Bilder, Zustandslabels, eingeschränkte Nachweise und Querverweise müssen erhalten bleiben.

Schnittstellen: Grundlagen besitzen Farbbedeutung, Typografie, Dichte und Bedienflächen; Komponenten zeigen deren konkrete Anwendung. Patterns besitzen vollständige Abläufe und Speicher-/Validierungsentscheidungen; Komponenten die verständliche lokale Gestaltung. Layouts besitzen Gruppierung und Platzierung auf Seiten; Komponenten das Verhalten bei verfügbarem Platz. Content Design besitzt übergreifende Sprache; Komponenten liefern spezifische Label-/Fehlermuster. Contracts führen Schnittstellen, Tokens, Zustandsmodelle und Semantik. Pflege/Plattformthema führt Verantwortliche, Nachweis- und Freigabeprozess.

Die Arbeit ist abnahmefähig, wenn jede der sechs Seiten einen eigenen klaren Nutzen hat; keine Kernregel doppelt als Template und Langtext erscheint; jede visuelle Erklärung eine konkrete Entscheidung erleichtert; alle vier Komponenten relevante Zustandskombinationen und Grenzen zeigen; lokale Verfügbarkeit aus dem aktuellen Datensatz hervorgeht; Schema, Live-Demo und geprüfte Umsetzung nicht verwechselt werden; und ein Team Auswahl, Handlung, Eingabe und Einstellung anhand der Seiten begründen kann. Dazu konkrete Reviewaufgaben verwenden: freier Projektname mit Fehler, unabhängige Optionen, exklusive Einzelwahl, sofortige Einstellung mit Übernahmefehler, Formularaktion versus Navigation. Reviewer sollen ihre Wahl samt offener Implementierungslücke erklären können. Erst dann zusätzliche Komponenten aufnehmen.

## Quellen und Prüfgrenzen

Primäre lokale Quellen: `src/collections/Pages.ts`, `src/docs/component-pages.ts`, `src/app/(docs)/systems/[system]/components/[component]/page.tsx`, `src/demos/shadcn/button.ts`, `src/demos/shadcn/controls.ts`, `src/app/(docs)/docs.css`, gepinnte JSON-Exporte unter `src/contracts/exports/shadcn/<komponente>/<revision>.json`; CMS-Datensätze oben. Ergänzend `docs/handbook/content-matrix.md` und `docs/handbook/local-review.md`. Browserprüfung betraf Aufbau, sichtbare Demoangebote und gerenderte Rollen, keine vollständige Funktionsabnahme.

Am 18.11.2026 gelesene Primärreferenzen: [WAI APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) für Aktion/Link und kontextabhängigen Fokus nach Aktivierung; [WAI APG Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) für binäre/gemischte Auswahl und Gruppenbezug; [WAI APG Switch](https://www.w3.org/WAI/ARIA/apg/patterns/switch/) für binären Zustand und stabiles Label. Daraus folgt keine Freigabe der lokalen Vorschau. Die Regel «Switch unmittelbar, Checkbox gesammelt speichern» und sämtliche oben vorgeschlagenen Darstellungsentscheidungen sind lokale Redaktionsempfehlungen, keine direkt aus APG folgende Vorschrift. Upstream-shadcn-Links im CMS sind Herkunftshinweise, kein Beleg zusätzlicher lokaler Fähigkeiten.
