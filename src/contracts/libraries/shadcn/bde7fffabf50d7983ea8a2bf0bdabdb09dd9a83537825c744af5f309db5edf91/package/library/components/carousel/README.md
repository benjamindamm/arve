# Carousel · gebundene Nutzungsreferenz

Browse a finite sequence of labelled slides using real previous/next controls and the selected Embla API.

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Pakethashes](../../sources/manifest.json); [exakte öffentliche Wrappertypen](../../sources/react-api-inventory.json).

Root props include opts:CarouselOptions, plugins:CarouselPlugin, orientation horizontal|vertical (defaulthorizontal), setApi(api) and native div props. useEmblaCarousel8.5.2 receives opts then an axis forced from orientation, so orientation wins over opts.axis. setApi receives the actual ready API, not a fabricated index event. Internal select/reInit observations derive canScrollPrev/Next; Previous/Next compose Button with default outline/icon-sm and readable hidden Previous slide/Next slide labels. Their disabled and onClick props are applied before {...props}, so callers can deliberately override them. Item is group with roledescription=slide; Root is region roledescription=carousel and requires caller context name. Content has an outer overflow viewport and inner flex track; className styles the track. Embla supplies drag, focus/resize behavior and snapping. No autoplay is enabled unless a plugin explicitly adds it; there is no built-in pause button, pagination or live announcement. This reference chooses three static slides, nonlooping default options, no plugin and external status from actual api.select subscriptions.

Next/Previous use native Button Enter/Space and are disabled at the respective nonlooping boundary. Root onKeyDownCapture intercepts Left to scrollPrev and Right to scrollNext even in vertical layout; it does not implement Up/Down and does not check editable descendant targets. This reference keeps editable fields outside the carousel. Tab follows actual child/Button order; no slide roving tabindex or focus jump is invented. Caller may override the capture handler via native props. Escape does not reset the selected slide. Each slide gets an explicit positional/task label in this reference.

Concrete content, labels, OTP digit policy, carousel positional/live text and clipboard fallback instructions are explicit caller composition; source-specific limitations are retained.

Die HTML-/CSS-Projektion zeigt konkrete Semantik, implementiert aber keine React-/Clipboard-/Embla-/OTP-Logik. Das normale Prüfziel benutzt die tatsächlichen gebundenen Originalwrapper. Source-Transaktionen und interne Effekte werden im SCXML getrennt dokumentiert.

[Native Figma-Beobachtungen](figma/figma-observations.json), alle ursprünglichen Designstories, DTCG `provenance://source/%2Fnative%2Fcarousel`, editierbare FIG und isoliert gerenderte PNG bleiben als visuelle Quelle erhalten.

Abgeschlossen nach 19 tatsächlichen Browserfällen inklusive realer verweigerter Clipboard-Berechtigung, 14 SCXML-Protokollfällen, sechs positiven/negativen Semantikfällen und sechs React-SSR-Fällen der Dreiergruppe. [Konkrete Prüfberichte](../../validation/contract-cases/); begrenzter Referenzabschluss, weiterhin `release:false`.
