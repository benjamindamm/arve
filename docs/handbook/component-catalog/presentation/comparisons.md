# Varianten und Zustände im Vergleich

Bibliothek: `shadcn`, gepinnter Export `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Nur dieser kuratierte Pin wird dargestellt. Andere Revisionen und nicht kuratierte Komponenten/Abschnitte ergeben keine Vergleiche.

## Umsetzung

- `src/docs/component-comparison-data.ts`: reine, auch für MCP nutzbare Vergleichsmetadaten. `getComponentComparisons(component, contract, section)` liefert Gruppen mit `id`, `title`, `description`, `items`. Kurze Einsatzhinweise sind redaktionelle Empfehlungen; keine zweite Quelle für ausführliche Komponentenregeln.
- `src/docs/component-comparisons.tsx`: serverseitige HTML/CSS-Darstellung. Button: sechs Varianten, acht reale Grössen und vier Zustandsansichten. Input: fünf Ansichten. Checkbox: sechs, einschliesslich gemischt, Fehler und Fokus. Switch: zwei Grössen und vier Zustandsansichten. Message: start/end im selben Verlauf.
- `src/docs/component-comparisons-contract.css`: benötigte Tokens inklusive rekursiver Abhängigkeiten aus `:root` und die fünf gebundenen Layout-CSS-Dateien. Alle Regeln sind auf `.contract-comparison` begrenzt; keine globalen Imports oder Theme-Selektoren. Hover/Fokus/disabled werden als ausdrückliche Illustrationsattribute statt laufender Pseudoklassen dargestellt. Die Referenzschrift Inter wird nicht zusätzlich geladen; die Schrift kann auf die Portal-/Sans-serif-Schrift zurückfallen.
- `src/docs/component-comparisons.css`: redaktionelles Raster, Labels, schmale Anordnung. Message-Textflächen sind ausdrücklich redaktionell. Ausrichtung und Abstände folgen dem Contract.
- `src/docs/page-reworks/button.tsx` und `.css`: Beispiel vor vertiefter Usage, Inhaltsverzeichnis anfangs geschlossen, Varianten-/Zustandsetiketten durch Vergleiche ersetzt. Die bestehende Angular-Demo mit Default/Outline/disabled bleibt unverändert eingebunden.

## Fachliche Grenzen

CSS-Hover und Tastaturfokus sind Ansichten, keine zusätzlichen SCXML-Ablaufzustände. Checkbox-gemischt ist über indeterminate/CSS/ARIA belegt; das SCXML-checked-Modell bleibt Boolean. Input-Werte, Fehlerdarstellung, Auswahlmerkmale und Deaktivierung werden getrennt benannt. Message-start/end und Switch-Grösse sind Layoutoptionen. Weder Sendestatus noch Fehlerzustand werden für Message erfunden. Die statischen Specimens sind keine Bedienziele und geben keine neue Laufzeit-, Accessibility- oder Plattformfreigabe.

## Ausgeführte Prüfungen

- `npm run typecheck`: bestanden.
- Direkter Lauf des Metadatenhelpers mit den echten gepinnten Contracts: Button [6,8] Varianten/Grössen + 4 Zustände, Input 5 Zustände, Checkbox 6 Zustände, Switch 2 Grössen + 4 Zustände, Message 2 Ausrichtungen. Nicht kuratierte Kombinationen und fremde Revisionen leer.
- BrowserOS neo, eigener Tab, Button bei 1440 × 1000 und 390 × 844 CSS-Pixeln: Varianten-, Grössen- und Zustandsvergleiche visuell angesehen; schmal werden die Matrizen umgebrochen. Tatsächliche Boxen: Texthöhen 24/28/32/36 px, Iconflächen 24²/28²/32²/36² px. Keine umfassende Tastatur- oder Screenreaderprüfung.

- Nach generischer Integration zusätzlich Input, Checkbox, Switch und Message bei 1440 × 1000 und 390 × 844 CSS-Pixeln in Neo visuell geprüft; auch untere Fehler-/disabled-Zeilen und beide Switch-Matrizen. Dokumentbreite schmal jeweils 390 px; Vergleichsrahmen 350 px, Inhalte ohne horizontalen Überlauf. Emulation anschliessend auf allen fünf eigenen Tabs entfernt und Tabs geschlossen.

## Gelesene Originalquellen

SHA-256 der verwendeten gepinnten Dateien:

- `tokens.css`: `e181931cf68b623bfff7316135e3368edff17779e5b50950893e9470dd9f791a`
- `components/button/component.json`: `d66069ec8ef2100ae4e509198f62ee055c9461d159d1e40e949f422d9186b026`
- `components/button/interface.json`: `81b1f9e6be056612fc6bfc732ae84866bc62817a9d42ac6a9b30ac8db3173d35`
- `components/button/layout.css`: `3c3bc15b71a3cde0d3f3980368a4660ee23485e652830c978c3c1decdaa81f96`
- `components/button/behavior.scxml`: `d593e6bb70eedaa5eeeda020a01aa6931266213a18c4d1786494f4994888b37a`
- `components/button/accessibility.html`: `4d45eb9cc558faf4a839f99c871d445c99a91ba4f310f0988a27569e9587ca66`
- `components/input/component.json`: `8884e8fb31692d48ffc5653c83ebe572c969c94bccbc060129f58c78870fbad9`
- `components/input/interface.json`: `fe4246b45099246584da84ebd5c2a82b308d7a94d39e1347b2e620db1936dd88`
- `components/input/layout.css`: `552d3a1e30f3a1b7283eb6ac362acbc2cd0e9bf9916e7101c72ca3e75283b6b3`
- `components/input/behavior.scxml`: `e9fe1dab0a2228e20f349a2cfbb49c756d6d7363ceb36b7d51da2ca0dcd9cf23`
- `components/input/accessibility.html`: `0aa195d500f2cc01af7e56e9906d0d4aa83082b767296d531b29caeccc0d9fcc`
- `components/checkbox/component.json`: `ad3518ff690630c98d192b40774345bb3fa656262bd28f48ff097a3b7dacf5a3`
- `components/checkbox/interface.json`: `0c0381d9e655ed4598a2033402462abc034e9413d9db3fa89dfa45caf6969c76`
- `components/checkbox/layout.css`: `a5dd6bd6ec8a0d7100704f07f05a673eb65bab8b861d92f5287e79a6a456c1bc`
- `components/checkbox/behavior.scxml`: `ac20796e1ad6700f1603e337c5c3a10faedc7a94c2a32615a61d43f7e3f93550`
- `components/checkbox/accessibility.html`: `1ab9ba549ca8b485319b8f81e33cb30717f362eefbd0d5261d4070ce9d91f22e`
- `components/switch/component.json`: `d2a8a065aedcf12ce31def690a9e89b0dbdedb12667e3c99f068940a95db6c3f`
- `components/switch/interface.json`: `373d183443323916845897719cd38c325e492dd842843646ecd770b23413c826`
- `components/switch/layout.css`: `7e329a990b77120f6f27fc569031337efb63e798792879e449844e62fe95d5e5`
- `components/switch/behavior.scxml`: `840277ef1596b7636e358fa95079eafbd68398f5c87714d04568ca28a05ac0f7`
- `components/switch/accessibility.html`: `7958444eebd4f8b55051fc1a6ccd1d8e3046ca5a58c08c90eaa81d1946b5cea3`
- `components/message/component.json`: `d08473a8e94b88f632726217a04b3c79b2846ca6ff6e4a61095f270e5717957a`
- `components/message/interface.json`: `97a755dc862bb88755e7c19ac90a17ae442a0c42440bdc245886cb9544ec912d`
- `components/message/layout.css`: `18d1b03be31558bf8cde7513487ed3ed4e09cd1da539dc80ac87fdcaee17e447`
- `components/message/behavior.scxml`: `b8b72bb08a72251e42f0cfcb9897d8a43cf7cd42ceb7505cc0b58ef0be558a65`
- `components/message/accessibility.html`: `de3326eacc37e262fec647ce2ebb3b62fad64b0a738692e99f18161d446827c9`
