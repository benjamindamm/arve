# Kompakte Formular- und Rückmeldungsvergleiche

Stand: 21. November 2026. Bereich: 22 Komponenten, 38 Vergleichsgruppen, 122 kuratierte Illustrationen. Bibliothek `shadcn`, fest gepinnte Revision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`.

## Umsetzung

Bearbeitet wurden ausschliesslich `src/docs/comparisons/forms-feedback-data.ts`, `forms-feedback.tsx`, `forms-feedback.css` und dieser Bericht. Die englischen Rohfixtures und sämtliche Contractpakete bleiben unverändert. Die Datenfunktion enthält statisch kuratierte deutsche Illustrationen; weder CMS-HTML noch andere Laufzeitdaten gelangen in den Renderer. Titel, Erläuterungen und Bildinhalte kommen gemeinsam aus dem Datenhelper. Die bestehenden öffentlichen Funktionen und der Fremdkomponenten-Guard bleiben erhalten.

Sichtbare Hauptvergleiche sind je Komponente bewusst gewählt. Weitere Darstellungen bleiben über das gemeinsame geschlossene Element «Weitere Vergleiche» und über den Datenhelper erreichbar. Technische Grenzen stehen in den geschlossenen Quelldetails. Die gemeinsame Darstellung und ihre Disclosure-Logik wurden vom Hauptagenten integriert.

| Komponente | Eigene redaktionelle Entscheidung |
| --- | --- |
| Combobox | Abholorte Bern/Basel statt Früchte; Einzelauswahl geschlossen, Mehrfachauswahl mit zwei Chips. Offene Hervorhebung und bestätigte Auswahl getrennt, Auswahl durch Quell-Checkmark sichtbar. Andere gesperrte/leere Fälle ohne wiederholte Popups. Neue kuratierte Varianten-ID `single-selection`. |
| Select | Gleicher Abholort in zwei geschlossenen Feldhöhen; Mehrfachwert zeigt Bern und Basel. Offene Hervorhebung bleibt eigener Zustand. |
| Native Select | Gleiche Länder und gleiche Auswahl für Grössen/Fokus/Fehler/Sperre; native Plattformdarstellung beibehalten. |
| Radio Group | Standard/Express als deutsche Versandarten; Auswahl und zusätzliche Rückmeldung getrennt benannt. |
| Toggle Group | Fett/Kursiv, gleiche Werkzeuge auch im Fokusbild. Umrandung und Verbindung ausdrücklich als kombinierte Gestaltung benannt. Auf Mobil voller Ausschnitt, damit kein Werkzeug abgeschnitten wird. |
| Slider | Einzelwert und Bereich sowie 40 % mit Fokus/Fehler/Sperre; deutsche Aufgaben- und Skalenbeschriftung. |
| Calendar | Gleicher ausdrücklich beschrifteter Ausschnitt 8.–21. November. Standard 38 px gegen kompakte 28 px; weitere Optionen geschlossen. Bereich und tatsächlich ausgeblendeter 18. November korrekt beschrieben. |
| Date Picker | Geschlossenes Feld ohne fälschlichen Kalenderausschnitt-Hinweis. Gewähltes Datum bleibt in offener/geschlossener Ansicht gleich; offener Kalender zeigt denselben Ausschnitt. |
| Textarea | Einheitliche Projektnotizen für gefüllte, fokussierte, fehlerhafte und gesperrte Darstellungen; deutscher Platzhalter. |
| Input OTP | Deutsche Codefrage und Ablaufmeldung; vollständiger Code ausdrücklich keine erfolgreiche Prüfung. |
| Input Group | Berichtssuche für Anordnung und Rückmeldung, gleiche Werte; keine englische Suchhilfe im Bild. Zusätzliche Aktionsgrössen geschlossen. |
| Field | Einzelnes Kontaktfeld statt vollständigem Formular pro Zelle. Baseline, Fehler und deaktivierter Zustand getrennt; gleiche Beschriftung und gleicher Wert. Gebundene Input-Geometrie, Label-/Hilfetextbezug und Fehlerfarbe. |
| Label | Zwei gleiche gestaltete Projektfelder; nur die Deaktivierung unterscheidet sich. Kein nacktes Browserfeld. |
| Questionnaire | Nur aktiver Antwortbereich statt wiederholtem Wizardkopf, Fortschritt und Navigation. Deutsche Antworttexte. Einfach-/Mehrfachauswahl direkt, Texteingabe zusätzlich; beantwortete und fehlende Antwort im gleichen Fragetyp. |
| Button Group | Speichern/Exportieren; Layoutfrage und Fokus/Sperre getrennt. Fokusansicht aus derselben Basis ohne zusätzlichen Textzusatz. |
| Kbd | Strg + S, Eingabe und Bild ab; keine erfundenen Ablaufzustände. |
| Alert | Gleicher deutscher Verbindungsfehler neutral/fehlerbetont. Gebundene Buttondarstellung und volle mobile Breite gegen Wortzerlegung. |
| Toast | Ehrlicher Vergleich mit/ohne Erfolgssymbol sowie kompakter/aufgeklappter Stapel; keine behauptete Dringlichkeits- oder Laufzeitdemonstration. Deutsche Meldung und Aktion. Unnötige Hoverbrücke in der statischen Illustration entfernt. |
| Empty | Gleiches leeres Projekt mit/ohne Symbol und gleicher nächster Aktion; breite mobile Darstellung und gebundener Button. |
| Progress | Derselbe Berichtsupload bei 0/40/100 % oder unbekanntem Fortschritt; keine erfundene Dauer. |
| Spinner | 12/16/20/24 px mit deutschem aufgabenspezifischem Namen; keine künstlichen Zustandsfolgen. |
| Skeleton | Text/Profilbild/Karte mit gleicher deutscher Ladeaufgabe; wiederholte grosse Kontaktüberschriften aus den Ausschnitten entfernt. |

Die Toast-CMS-Überschriften «Typ/Dringlichkeit» bzw. «Laufzeit» passten nicht zu Symbol und Stapel. Der Hauptagent hat gezielt die beiden Überschriften in «Die Meldung gestalten» und «Meldungen anzeigen und schliessen» geändert und die vorhandenen fachlichen Prioritäts-/Timerregeln bewahrt. Diese CMS-Arbeit liegt ausserhalb der Schreibgrenze dieses Bereichsagenten. Der anschliessende Portal-Reload zeigte beide Figuren wieder vollständig.

## Ausgeführte Prüfungen

- Lokale und portable Skill-Anleitung, Manifest, Bibliotheksindex und Abhängigkeitsgrenze gelesen; für alle 22 Komponenten die gebundenen CEM-, CSS-, SCXML-, HTML/ARIA-, UX- und Storyartefakte herangezogen. Der portable Export enthält keine ausführbare Abnahmewerkstatt.
- Alle 158 eindeutig referenzierten Quelldateien gegen die in den Vergleichsdaten erhaltenen SHA-256-Werte geprüft: keine Abweichung. Für die neuen gebundenen Input-/Buttonkompositionen ergänzen paketrelative Komponenten- und CSS-Referenzen die bisherigen Nachweise.
- Datenhelper ausgeführt: 22 Komponenten, 38 Gruppen, 122 auflösbare Illustrationen; jede `previewItems`-ID existiert. Unbekannte Komponenten liefern leere Vergleiche bzw. keinen Bildinhalt. `single-selection` löst korrekt auf.
- `npm run typecheck` ausgeführt, ohne TypeScript-Fehler. Kein Build durch diesen Bereichsagenten gestartet; der Hauptagent baut zentral.
- BrowserOS neo auf `http://127.0.0.1:3010/systems/shadcn/components/<slug>`: erste Vergleichsansichten aller 22 Seiten bei 390 × 844 CSS-Pixeln visuell gesichtet. Kein horizontaler Seitenüberlauf in den abgefragten Seiten. Nach den Sichtbefunden Toggle Group, Alert, Empty und Skeleton erneut visuell geprüft.
- Combobox, Calendar, Field, Label, Toast und Questionnaire zusätzlich bei 1440 × 1000 CSS-Pixeln visuell geprüft; insbesondere die Zustandsvergleiche wurden breit und schmal angesehen. Bei diesen sechs Seiten kein horizontaler Seitenüberlauf. Einzelne Vergleichsgruppen wurden gezielt in den sichtbaren Bereich gescrollt; die gesamte CMS-Prosa ist keine vollständige visuelle Abnahme dieses Berichts.
- Toast: ursprünglich 4 px unnötiger innerer Vertikalüberlauf durch die Hoverbrücke festgestellt. Nach der statischen CSS-Korrektur an vier gezeigten Toastillustrationen gemessen: `clientHeight === scrollHeight` (180/180 bzw. 400/400 px).

### Höhe derselben Gruppen auf Mobil

Gemessen mit BrowserOS neo bei 390 × 844 CSS-Pixeln, jeweils `getBoundingClientRect().height`, auf ganze Pixel gerundet. «Nachher» bedeutet initial sichtbare Gruppe mit geschlossenem Zusatzvergleich. Die Reduktion umfasst die kuratierten Bilder und die gemeinsam integrierte Auswahl-/Disclosure-Darstellung; sie ist keine isolierte Messung nur einer CSS-Regel.

| Komponente | Varianten vorher → nachher | Zustände vorher → nachher |
| --- | ---: | ---: |
| Combobox | 849 → 496 px | 1957 → 815 px |
| Calendar | 2975 → 787 px | 1516 → 815 px |
| Field | 1603 → 514 px | 939 → 769 px |
| Label | 512 → 304 px | — |
| Toast | 923 → 661 px | 1610 → 929 px |
| Questionnaire | 1644 → 890 px | 1798 → 965 px |

Zusätzliche gemessene Nachherhöhen bei 1440 px Breite: Combobox 286/460 px, Calendar 481/460 px, Field 333/566 px, Label 277 px, Toast 359/647 px, Questionnaire 525/564 px (Varianten/Zustände). Vorherhöhen bei Desktopbreite wurden in diesem Lauf nicht erhoben.

## Grenzen und Übergabe

Die Bilder illustrieren belegte Geometrie und Zustandsmerkmale. Sie sind absichtlich inert; damit sind Auswahl-, Fokus-, Validierungs-, Timer- oder Screenreaderabläufe nicht neu getestet. Die ursprünglichen Quellen und ihre dokumentierten Grenzen bleiben führend. Die Kalender sind Ausschnitte, die Fragebögen Antwortausschnitte; der Hauptbeispielbereich der Seiten bleibt die umfassendere Darstellung.

Die Sichtprüfung aller 22 mobilen Seiten bezieht sich auf die Hauptvergleiche, nicht auf jede der 122 zusätzlichen Illustrationen bei jeder Bildschirmbreite. Die Daten-/Hashprüfung deckt sämtliche 122 Einträge ab. Keine globale Barrierefreiheits- oder Laufzeitfreigabe, keine CMS-/Datenbankänderung durch diesen Bereichsagenten, kein Commit und kein Push.
