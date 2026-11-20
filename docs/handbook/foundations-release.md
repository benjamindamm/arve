# Grundlagenpaket · Umsetzung

Stand: 18. November 2026. Dieses Paket setzt den Themenplan in neun CMS-Seiten und acht unterschiedliche HTML-Studien um. Die Integration, CMS-Übernahme und Veröffentlichung erfolgen separat durch den koordinierenden Auftrag.

## Lieferumfang

`scripts/content/foundations-release.ts` exportiert `foundationsRelease: FoundationReleasePage[]`. Jeder Eintrag enthält slug, title, summary, parent (Slug oder null), order, pageType und content. Der Einstieg ist overview, die übrigen Einträge foundation. Text liegt als Lexical-Richtext vor; ein study-Block enthält kind, title, explanation, source und gegebenenfalls revision. Es werden keine Vorlagenfelder zusätzlich befüllt.

Die Seiten sind Grundlagen, Farbe, Themes und visuelle Zustände, Typografie, Abstände und Grössen, Form und Ebenen, Icons, Bewegung sowie der Wegweiser auf der bisherigen URL icons-bewegung. Die bisherigen URLs für Farbe, Themes, Schrift und Abstände bleiben erhalten. Die Sammelseite hält nur noch Zielverweise.

`src/docs/foundation-studies.tsx` exportiert `FoundationStudy` und die zugehörigen Props/Kind-Typen. Der Renderer importiert das eigene CSS. Es gibt keine Client-JavaScript-Abhängigkeit: native details-Elemente öffnen Textfassungen, das Textabstandsbeispiel und die ausdrücklich angeforderte Bewegung. Der einmalige CSS-Übergang berücksichtigt prefers-reduced-motion. Die Standbilder erklären das Ergebnis unabhängig davon.

## Darstellung und Herkunft

- Einstieg: annotiertes Inhaltsbeispiel mit unmittelbar danebenstehenden Beziehungen.
- Farbe: zwei Theme-Spalten, je drei Rollenpaare; Werte direkt aus dem importierten tokens.json. Kontraste werden beim Rendern aus den Hexwerten mit sRGB-Linearisierung berechnet.
- Themes: dieselben Situationen in hell und dunkel; Fehlertext plus Fokus ohne erfundene Fehlerfarbe. Die Zustandskomposition ist ausdrücklich schematisch.
- Typografie: Rollen an realem Text, offenes Lesemuster, anpassbare Textabstände und vergleichbare Zahlen.
- Abstände: identischer Inhalt mit zwei Gruppierungen und separate Darstellung von Zeichen/Bedienfläche.
- Form/Ebenen: offene Gruppe, begrenzte Fläche und schwebender Bereich; tatsächliche Komponentenradien separat.
- Icons: Textbegleitung, alleinstehendes Zeichen und unbekannte Bedeutung. Eigene SVG-Zeichen, keine Behauptung einer Bibliotheksfreigabe.
- Bewegung: dreiteilige Standbildfolge und optionaler einmaliger Übergang; Dauer ausdrücklich Demonstrationswert.

Vor jedem Beispiel steht eine kurze sichtbare Grenze seines Nachweises. Die vollständige Erklärung steht als native aufklappbare Textfassung unter der Studie. Diese komplette Erklärung liegt im CMS für MCP: alle sechs Farbpaare mit Hexwerten und Verhältnissen, Radiuswerte, Textabstand-Prüfwerte sowie die Unterschiede und Grenzen der jeweiligen Studie. Es gibt keine wesentliche Aussage nur in einer Rastergrafik.

Die Studien verwenden einen eigenen ruhigen Dokumentationsrahmen. Sein Grün ist kein neuer shadcn-Token. Farbspezifische und Theme-Studien setzen ihre Exportwerte lokal und verändern nicht das Theme der übrigen Dokumentation. Schematische Formen und Abstände sind als solche benannt. Der Tokenstand ist `5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed`.

## Quellenreview

Am 18. November 2026 mit BrowserOS neo gelesen:

- [shadcn Theming](https://ui.shadcn.com/docs/theming): Paarprinzip und die aktuelle Rollenbeschreibung. Keine Übernahme der umfangreicheren Upstream-Rollen als lokal vorhandene Tokens.
- [WAI: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html): Bedeutung nicht ausschliesslich durch Farbe.
- [WAI: Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html): Anpassbarkeit bei 1,5 Zeilenhöhe, 2 em Absatzabstand, 0,12 em Zeichen- und 0,16 em Wortabstand; ausdrücklich keine Standardgestaltungsvorgabe.
- [WAI: Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): grundsätzlich 24 × 24 CSS-Pixel für Zeigerziele und ausdrücklich vorhandene Ausnahmen. Der Inhalt macht daraus keine universelle Native-Vorgabe.
- [WAI: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html): AAA-Kriterium für abschaltbare nicht wesentliche interaktionsausgelöste Bewegung; von automatisch gestarteter Animation abgegrenzt.

Weitere Gestaltungsempfehlungen sind redaktionelle Arve-Empfehlungen. Native Farb-, Schrift-, Icon- oder Bewegungswerte werden nicht erfunden.

## Ausgeführte Prüfungen und Grenzen

Ein direkter Modulimport prüfte neun eindeutige Seiten-Slugs und acht Study-Blöcke mit vollständiger Erklärung. Das Datenmodul ist ohne CSS-/React-Laufzeit importierbar, da der Renderertyp nur per Type-Import verwendet wird.

Die projektweite TypeScript-Prüfung wurde ausgeführt. Zum Prüfzeitpunkt meldete sie ausschliesslich Integrationsfehler in `scripts/apply-foundations-release.ts` wegen `template:null` und daraus folgenden Rückgabetypen; in den vier Paketdateien wurden keine Typfehler gemeldet. Dies ist keine Aussage, dass die projektweite Prüfung bereits insgesamt besteht. Der Koordinator wurde informiert.

Noch separat auszuführen: Preview-/Portalprüfung auf Desktop und schmaler Breite, Textvergrösserung, Tastaturbedienung der details-Steuerungen, reduzierte Bewegung im Browser sowie Abgleich veröffentlichter CMS-/MCP-Inhalte. Diese Datei behauptet keine bereits ausgeführte Browserabnahme des Pakets.

Keine CMS-Mutation, Veröffentlichung oder Git-Aktion wurde vom Themenagenten durchgeführt. Verbindliche allgemeine Skalen für Schrift, Abstände, Radius, Ebenen und Bewegung sowie ergänzende Statusfarben bleiben offen. Die neuen Inhalte benennen diesen Stand an den passenden Entscheidungen.

## Integration und tatsächlich ausgeführte Prüfung

Der Koordinator hat das Paket im lokalen Portal veröffentlicht: neun Grundlagen-Seiten plus die vom Layout-Fachagenten ausgearbeitete, eng begrenzte Anschlusskorrektur an `shadcn-layout`. Die übrigen Seiten wurden vor/nach dem Import vollständig verglichen und blieben unverändert. Alte CMS-Versionen bleiben erhalten. Die neuen Texte ersetzen die bisherigen Inhalte; die Vorlagenfelder wurden geleert, damit keine doppelten Kapitel entstehen. Die bisherige Sammelseite bleibt als Wegweiser erhalten.

Der neue CMS-Block `study` trägt Typ, Titel, vollständige Erklärung, Herkunft und Quellenstand. Der Renderer verwendet registrierte HTML-Studien; es gibt keinen beliebigen Script-Upload. Texte sind redaktionell bearbeitbar, Änderungen an der Gestaltung einer Studie erfolgen im Renderer. `publicContent` liefert die Studien unverändert über MCP; die Suche berücksichtigt ihre Erklärungen und Metadaten. Unabhängig injizierte Portal-Farbwerte und die doppelte Abstandsskala wurden aus Seite und MCP entfernt. Bestehende Layoutbeispiele bleiben über die expliziten CMS-Links erreichbar.

Ausgeführt:

- `npm run typecheck`: erfolgreich nach Korrektur des nullable Template-Imports.
- `scripts/apply-foundations-release.ts`: Vorschau, transaktionale Veröffentlichung, Rücklesen und erneuter Lauf. Der erste Nachvergleich musste Payloads ergänzte optionale Nullfelder normalisieren; der korrigierte Vergleich ist erfolgreich.
- `scripts/check-foundations-release.ts`: alle neun Seiten veröffentlicht und im Seitenbaum; MCP-Inhalt identisch zur CMS-Fassung; keine zusätzlich gerenderten Vorlagenabschnitte; Suche findet die führende Abstandserklärung.
- BrowserOS: alle acht Studien bei 320, 390, 768 und 1280 CSS-Pixeln ohne horizontalen Seitenüberlauf. Das ist ein Reflow-Stichprobentest, kein Nachweis für native Plattformen oder sämtliche assistiven Kombinationen.
- Sichtprüfung von Einstieg, Farbvergleich, Typografie, Themevergleich, Form/Ebenen und Icons in breiter Darstellung sowie Bewegung und Abstände bei 390 px.
- Bewegungsdemo und vollständige Textfassung per Tastatur geöffnet/geschlossen. Bei emulierter Präferenz `prefers-reduced-motion: reduce` ist die Animation `none`, sonst `fs-travel`. Die geänderte Präferenz wurde nach dem Test zurückgesetzt.
- Typografie-Muster für grössere Textabstände per Tastatur geöffnet und seine berechneten Abstände gelesen.
- `git diff --check`: ohne Befund.

Keine allgemeine Accessibility-, native Plattform- oder Komponentenfreigabe. Bestehende Demos und Contractpins wurden nicht verändert. Allgemeine Tokens für Schriftrollen, Abstände, zusätzliche Farben, Iconbibliothek und Bewegungsparameter bleiben ausdrücklich noch zu entscheiden.

### Wiederholbarer Import

`node --env-file=.env --import tsx scripts/apply-foundations-release.ts` zeigt das Paket an. Mit `--publish` wird der ausdrücklich gewünschte Stand veröffentlicht. Vorhandene neuere Entwürfe werden nicht überschrieben; die Layout-Anschlusskorrektur prüft ihre Ausgangsversion. Ein erneuter Import ist keine laufende Synchronisation mit redaktionellen Änderungen.

`node --env-file=.env --import tsx scripts/check-foundations-release.ts` prüft den veröffentlichten Stand über MCP und CMS.
