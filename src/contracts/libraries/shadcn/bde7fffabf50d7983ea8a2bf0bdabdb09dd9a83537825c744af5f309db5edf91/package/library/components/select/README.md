# Select · gebundene Auswahl-/Befehlsreferenz

Choose one or multiple values from a noneditable labelled listbox, with actual form integration.

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`; Base UI 1.9.0 bzw. cmdk1.1.1. [Originalquellen und Pakethashes](../../sources/manifest.json); [alle exportierten Wrapper/Aliasse](../../sources/react-api-inventory.json).

Select is a direct alias of SelectPrimitive.Root, not a native select wrapper. Generic value/defaultValue and onValueChange distinguish single Value|null from multiple arrays. open/defaultOpen/onOpenChange/onOpenChangeComplete are independent of selected value; default modal=true. Root name/form/required/autoComplete use its hidden form control; object labels/form values use itemToStringLabel/itemToStringValue and comparison uses isItemEqualToValue. SelectValue resolves labels from Root items or registered ItemText; it is not a label for the field. Trigger defaults native button role=combobox with size sm|default. Content defaults bottom/center, offsets4/0 and alignItemWithTrigger=true; it inserts scroll arrows and List automatically. Items are role=option; disabled entries can be focused but cannot commit, while closed typeahead skips disabled choices. Single commit requests closing separately, even if the value callback is canceled; multiple toggles array values and normally stays open. readOnly locks changes but deliberately allows opening/browsing. GroupLabel/Separator are actual primitive parts; no text-query input, filter, server fetch or custom command event is invented.

Trigger Enter/Space/opening arrows operate the source popup. Open Up/Down/Home/End and label typeahead move highlight; Enter/Space choose an enabled option. Closed-trigger typeahead can commit a single value, but is disabled for readOnly or multiple. Escape dismisses without selecting a highlighted candidate; controlled open/value callbacks remain separately authoritative. Disabled Root suppresses interaction. Named visible label and error/help relations belong to the caller, not the placeholder.

Stable primitive fruit/command values, visible names, exact instance relations, named clear/remove compositions and explicit error/no-results text are caller reference choices. Popup, query and selected/highlighted value do not share one invented authority; command execution remains an actual Item callback.

Die semantische HTML-/CSS-Projektion ist kein zweiter Widget-Adapter. Das normale Prüfziel verwendet tatsächliche Quellwrapper und ausdrücklich benannte zusätzliche Primitive-Kompositionen. Der SCXML-Vertrag beobachtet tatsächliche Callbacktransaktionen; die verschiedenen Kontrollautoritäten und der vollständige bestehende Dialogvertrag bleiben getrennt.

[Native Figma-Beobachtungen](figma/figma-observations.json), ursprüngliche Stories, DTCG `provenance://source/%2Fnative%2Fselect`, editierbare FIG und isolierte PNG bleiben die visuelle Quelle.

Abgeschlossen nach 37 tatsächlichen Browserfällen inklusive geschlossenem Escape-Leeren, nativen benannten Hilfsaktionen und vollständigem CommandDialog-Abbruch, 18 SCXML-Protokollfällen, neun positiven/negativen Semantikfällen und acht React-SSR-Fällen der Dreiergruppe. [Konkrete Prüfberichte](../../validation/contract-cases/); weiterhin `release:false`.
