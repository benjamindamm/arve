# Tabs · Quellengebundene Auswahlreferenz

Select one associated panel while distinguishing keyboard focus from activation.

shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` und bewusst Base UI 1.9.0. [Originalquellen mit Hashes](../../../../../sources/manifest.json); [exakte exportierte Propoberflächen](../../../../../sources/react-api-inventory.json).

Root value/defaultValue uses the primitive generic Tab.Value (including null; default implicit0). List defaults activateOnFocus=false and loopFocus=true; variant default|line only styles it. Trigger value identifies a matching Panel, disabled triggers cannot activate; keepMounted is explicit on Panels (the shown inactive-panel projection chooses it). Automatic tab/panel ID relations register in client effects and are not present in raw static server markup; the reference HTML shows the registered client state. User onValueChange(value,eventDetails) is cancellable. Automatic uncontrolled selection/fallback reasons initial/disabled/missing cannot be canceled and may yield null when no enabled tab remains. Controlled values never automatically fall back. Callback details include activationDirection. Tab focus and active panel are distinct in manual mode.

Tab enters the selected/enabled tab and then its panel. The source horizontal tablist uses Left/Right, Home/End to move focus, including source-focusable disabled triggers that cannot activate; default manual mode requires Enter/Space to activate. activateOnFocus=true also changes selection on arrow focus. Escape leaves selection unchanged. IMPORTANT pinned wrapper limitation: Root orientation is consumed for CSS/data attributes and not forwarded to TabsPrimitive.Root; primitive ARIA and keyboard behavior remain horizontal even when visual orientation=vertical. This reference chooses horizontal layout and makes the upstream discrepancy explicit.

SCXML protokolliert normalisierte tatsächliche Quelltransaktionen, inklusive nativen Ursprungsereignissen und Callback-Abbruch. Fokus und Auswahl bleiben getrennt. Automatische Tabs-Konsistenz und Slider-Commit unterscheiden sich von einem Benutzeränderungsvorschlag. Das normale React-Prüfziel verwendet gebundene Originalwrapper; die semantische HTML-/CSS-Projektion allein ist keine funktionierende Primitive-Implementierung.

Stable actual item values, concrete visible labels and error/help relations are supplied by the caller. Use horizontal Tabs/ToggleGroup and array Slider values explicitly; upstream wrapper limitations are described, not hidden by altering frozen code.

[Native Figma-Beobachtungen](../../../../../components/tabs/figma/figma-observations.json), sämtliche nativen Stories, editierbare FIG und isolierte PNG bleiben führend für die visuellen Werte. DTCG `provenance://source/%2Fnative%2Ftabs` bindet konkrete Quellmasse.

Abgeschlossen nach 38 tatsächlichen Browserfällen inklusive Clientregistrierung/automatischem Tabs-Fallback, 23 SCXML-Protokollfällen, acht positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Vierergruppe. [Konkrete Prüfberichte](../../../../contract-cases); weiterhin `release:false`.
