# RadioGroup · Quellengebundene Auswahlreferenz

Choose one value from a labelled mutually exclusive set with native form integration.

shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` und bewusst Base UI 1.9.0. [Originalquellen mit Hashes](../../../../../sources/manifest.json); [exakte exportierte Propoberflächen](../../../../../sources/react-api-inventory.json).

RadioGroup uses a generic value/defaultValue and onValueChange(value,eventDetails), plus disabled/readOnly/required/name/form. RadioGroupItem inherits the exact Radio.Root props including value and disabled. The default visible root is span role=radio with a hidden native radio input, not a visible native radio. Checked value is singular; choosing the checked item does not clear the group. Disabled/readOnly suppress user changes; callback cancellation can veto and controlled props stay authoritative.

Tab enters the current/enabled radio; arrows navigate/select enabled items using the source composite and wrap behavior. Space selects a radio. Enter does not toggle (the source prevents its button activation; form context remains separate). Home/End are disabled by the RadioGroup composite; Escape does not clear selection.

SCXML protokolliert normalisierte tatsächliche Quelltransaktionen, inklusive nativen Ursprungsereignissen und Callback-Abbruch. Fokus und Auswahl bleiben getrennt. Automatische Tabs-Konsistenz und Slider-Commit unterscheiden sich von einem Benutzeränderungsvorschlag. Das normale React-Prüfziel verwendet gebundene Originalwrapper; die semantische HTML-/CSS-Projektion allein ist keine funktionierende Primitive-Implementierung.

Stable actual item values, concrete visible labels and error/help relations are supplied by the caller. Use horizontal Tabs/ToggleGroup and array Slider values explicitly; upstream wrapper limitations are described, not hidden by altering frozen code.

[Native Figma-Beobachtungen](../../../../../components/radio-group/figma/figma-observations.json), sämtliche nativen Stories, editierbare FIG und isolierte PNG bleiben führend für die visuellen Werte. DTCG `provenance://source/%2Fnative%2Fradio-group` bindet konkrete Quellmasse.

Abgeschlossen nach 38 tatsächlichen Browserfällen inklusive Clientregistrierung/automatischem Tabs-Fallback, 23 SCXML-Protokollfällen, acht positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Vierergruppe. [Konkrete Prüfberichte](../../../../contract-cases); weiterhin `release:false`.
