# InputOTP · gebundene Nutzungsreferenz

Enter a short verification code through one labelled native input while showing visual character slots.

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Pakethashes](../../sources/manifest.json); [exakte öffentliche Wrappertypen](../../sources/react-api-inventory.json).

InputOTP forwards input-otp1.4.2 OTPInputProps, maxLength:number is required, value/defaultValue are strings, onChange(newValue:string) is not a native event callback. onComplete receives the complete value when a previously observed shorter value becomes exactly maxLength; initial full value is not an automatic completion request. It does not submit, verify, store or resend codes. The underlying library defaults inputMode=numeric and autoComplete=one-time-code, but only a supplied pattern enforces characters. This reference explicitly selects maxLength6 and REGEXP_ONLY_DIGITS, complete six slots indexed0..5, and a pasteTransformer removing spaces/hyphens. Pattern failure rejects the whole candidate rather than sanitizing arbitrary letters. Underlying selection, paste insertion, length truncation and fake caret use one actual input; slots/groups are visual divs. The reference explicitly hides visual slots and the separator from assistive technology while the real input remains labelled/exposed. Wrapper spellCheck=false can be overridden by native props. Disabled suppresses native user editing; controlled props remain authoritative and caller owns verification errors, cooldown and server response. The input-otp implementation also forwards native defaultValue alongside its internal value when supplied; React19 can warn about both. This reference deliberately uses the controlled string form.

The actual native input provides arrows, selection, Backspace/Delete, paste and one-time-code autofill. Tab enters one input, not six fake controls. Do not invent per-slot roving focus or automatic submission. Enter is ordinary native form behavior; onComplete only reports a filled code. Escape does not clear the code. Error text is explicit aria-describedby/aria-invalid; never identify codes only by color.

Concrete content, labels, OTP digit policy, carousel positional/live text and clipboard fallback instructions are explicit caller composition; source-specific limitations are retained.

Die HTML-/CSS-Projektion zeigt konkrete Semantik, implementiert aber keine React-/Clipboard-/Embla-/OTP-Logik. Das normale Prüfziel benutzt die tatsächlichen gebundenen Originalwrapper. Source-Transaktionen und interne Effekte werden im SCXML getrennt dokumentiert.

[Native Figma-Beobachtungen](figma/figma-observations.json), alle ursprünglichen Designstories, DTCG `provenance://source/%2Fnative%2Finput-otp`, editierbare FIG und isoliert gerenderte PNG bleiben als visuelle Quelle erhalten.

Abgeschlossen nach 19 tatsächlichen Browserfällen inklusive realer verweigerter Clipboard-Berechtigung, 14 SCXML-Protokollfällen, sechs positiven/negativen Semantikfällen und sechs React-SSR-Fällen der Dreiergruppe. [Konkrete Prüfberichte](../../validation/contract-cases/); begrenzter Referenzabschluss, weiterhin `release:false`.
