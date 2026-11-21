# ToggleGroup · Quellengebundene Auswahlreferenz

Choose one or several pressed formatting tools, and describe standalone Toggle from the same native source family.

shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` und bewusst Base UI 1.9.0. [Originalquellen mit Hashes](../../../../../sources/manifest.json); [exakte exportierte Propoberflächen](../../../../../sources/react-api-inventory.json).

ToggleGroup value/defaultValue are arrays even when multiple=false. multiple=false permits one pressed item and pressing it again clears the array; multiple=true toggles independent items. Items are native buttons aria-pressed. Group disabled and item disabled suppress changes; group size/variant context overrides item appearance when set, spacing defaults2. Standalone Toggle has pressed/defaultPressed boolean and onPressedChange(pressed,eventDetails), disabled, variant default|outline and size default|sm|lg. It is included from its own pinned source module, not lost as an unindexed dependency.

Native Enter/Space activates a toggle. ToggleGroup source composite uses horizontal arrows, Home/End and loopFocus=true by default; focus navigation alone does not press a toggle. IMPORTANT pinned wrapper limitation: orientation is consumed for visual/data layout and not forwarded to ToggleGroupPrimitive, so a requested vertical layout does not establish vertical primitive keyboard orientation. This reference uses horizontal groups and records the actual limitation instead of claiming vertical parity. Standalone Toggle has normal native Tab order.

SCXML protokolliert normalisierte tatsächliche Quelltransaktionen, inklusive nativen Ursprungsereignissen und Callback-Abbruch. Fokus und Auswahl bleiben getrennt. Automatische Tabs-Konsistenz und Slider-Commit unterscheiden sich von einem Benutzeränderungsvorschlag. Das normale React-Prüfziel verwendet gebundene Originalwrapper; die semantische HTML-/CSS-Projektion allein ist keine funktionierende Primitive-Implementierung.

Stable actual item values, concrete visible labels and error/help relations are supplied by the caller. Use horizontal Tabs/ToggleGroup and array Slider values explicitly; upstream wrapper limitations are described, not hidden by altering frozen code.

[Native Figma-Beobachtungen](../../../../../components/toggle-group/figma/figma-observations.json), sämtliche nativen Stories, editierbare FIG und isolierte PNG bleiben führend für die visuellen Werte. DTCG `provenance://source/%2Fnative%2Ftoggle-group` bindet konkrete Quellmasse.

Abgeschlossen nach 38 tatsächlichen Browserfällen inklusive Clientregistrierung/automatischem Tabs-Fallback, 23 SCXML-Protokollfällen, acht positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Vierergruppe. [Konkrete Prüfberichte](../../../../contract-cases); weiterhin `release:false`.
