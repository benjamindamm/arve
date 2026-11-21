# Slider · Quellengebundene Auswahlreferenz

Adjust a bounded numeric value or ordered range, with separate change and committed-value callbacks.

shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` und bewusst Base UI 1.9.0. [Originalquellen mit Hashes](../../../../../sources/manifest.json); [exakte exportierte Propoberflächen](../../../../../sources/react-api-inventory.json).

Root accepts scalar or array value/defaultValue, min0/max100, step1, largeStep10, orientation horizontal|vertical, disabled/name/form, minStepsBetweenValues and thumbCollisionBehavior push|swap|none. Wrapper thumbAlignment defaults edge but {...props} can override it. onValueChange has cancellable ChangeEventDetails with reason and activeThumbIndex; onValueCommitted has generic CommitEventDetails and only reports a changed, uncanceled commit. Source quantizes/clamps pointer/keyboard changes and enforces range collision policy. IMPORTANT wrapper quirk: thumb count is array value length, else array defaultValue length, else2; scalar props still create two Thumb instances. This reference explicitly uses value={[40]} for one thumb and arrays for ranges. Wrapper does not expose per-thumb naming/index props; Root aria-labelledby is propagated through primitive context to its internal range inputs.

The actual focusable controls are native input type=range nested inside thumb divs. Arrow keys step, PageUp/PageDown and Shift+arrows use largeStep, Home/End choose limits; horizontal direction respects RTL, vertical Up increases. Disabled inputs leave Tab order. Pointer drag/track press and keyboard changes have distinct change/commit lifecycle; Escape does not restore an earlier committed value. Range thumbs retain DOM order with collision policy owned by the primitive. This reference provides finite min<max and positive step, a shared explicit label and described units.

SCXML protokolliert normalisierte tatsächliche Quelltransaktionen, inklusive nativen Ursprungsereignissen und Callback-Abbruch. Fokus und Auswahl bleiben getrennt. Automatische Tabs-Konsistenz und Slider-Commit unterscheiden sich von einem Benutzeränderungsvorschlag. Das normale React-Prüfziel verwendet gebundene Originalwrapper; die semantische HTML-/CSS-Projektion allein ist keine funktionierende Primitive-Implementierung.

Stable actual item values, concrete visible labels and error/help relations are supplied by the caller. Use horizontal Tabs/ToggleGroup and array Slider values explicitly; upstream wrapper limitations are described, not hidden by altering frozen code.

[Native Figma-Beobachtungen](../../../../../components/slider/figma/figma-observations.json), sämtliche nativen Stories, editierbare FIG und isolierte PNG bleiben führend für die visuellen Werte. DTCG `provenance://source/%2Fnative%2Fslider` bindet konkrete Quellmasse.

Abgeschlossen nach 38 tatsächlichen Browserfällen inklusive Clientregistrierung/automatischem Tabs-Fallback, 23 SCXML-Protokollfällen, acht positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Vierergruppe. [Konkrete Prüfberichte](../../../../contract-cases); weiterhin `release:false`.
