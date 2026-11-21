# Semantische Komponentenreferenz abgeschlossen

**69 von 69 Familien complete, 0 draft, 0 offene Migrationskriterien.** Alle führenden Verträge sind vom nativen Figma-Dokument unabhängig verwendbar: stabile Teile, tatsächliche Source-/Caller-Selektoren, semantische Varianten/Zustände und auflösbare Token. Die Quellmessungen, alle nativen Muster und inverse Zuordnungen bleiben separat erhalten.

- [Semantischer Abgleich](validation/semantic-final-acceptance.json): 580 Teile, 540 kanonische Fixtures, vollständige CSS-Importketten und Teil-Eigentümer.
- [Frischer Browserlauf](validation/semantic-final-runtime-replay.json): alle 69 normalen Familienrouten mit tatsächlichen nativen Aktionen und berechneten Stilwerten; [893 gebundene Eingaben](validation/semantic-final-runtime-bindings.json).
- [Quellen-/Gesamtabgleich](validation/completion-audit.json), [native Quellenabdeckung](validation/source-coverage.json) und [Ordner-/Domänenprüfung](validation/structure-check-current.json).
- [Abgeschlossener Migrationsbacklog](validation/domain-migration-backlog.json) und [Prüfkonvention](provenance://source/libraries%2FREADME.md).

Vom Repository-Stamm reproduzierbar:

```sh
PYTHONDONTWRITEBYTECODE=1 provenance://source/tools%2Fvalidation%2F.venv%2Fbin%2Fpython provenance://source/tools%2Flibraries%2Fcheck_layout.py --library shadcn
node provenance://source/tools%2Fshadcn%2Fcheck-reference.mjs
PYTHONDONTWRITEBYTECODE=1 provenance://source/tools%2Fvalidation%2F.venv%2Fbin%2Fpython provenance://source/tools%2Ffigma-reader%2Fcheck-shadcn-coverage.py
PYTHONDONTWRITEBYTECODE=1 provenance://source/tools%2Fvalidation%2F.venv%2Fbin%2Fpython provenance://source/tools%2Fshadcn%2Faudit-completion.py
```

Der letzte Befehl prüft auch den semantischen Abgleich einschließlich aktueller Browser-Eingabebindungen. Er führt keinen neuen Browserlauf aus und erneuert keine getesteten Hashes. Die ausgeführten Browserrezepte stehen unter `provenance://source/tools%2Fshadcn%2Fsemantic-%2A-browser.js`; größere Gruppen wurden mit identischen Fällen geteilt, um das Zeitlimit des Browsers einzuhalten.

Der Umfang ist eine ausreichend beschriebene Referenz der gewählten reifen Bibliothek mit konkreten geprüften React-Kompositionen. HTML/CSS-Fixtures sind Domänenprojektionen; funktionierendes Base UI benötigt die gebundenen Adapter. Der Kalender verwendet eine ausdrücklich dokumentierte Ref-Reparatur; der unveränderte Upstreamfehler bleibt als Gegenprobe erhalten. Kit-spezifische Muster und öffentliche Kompositionshilfen bleiben als solche klassifiziert. Kein allgemeines Geräte-, Framework-, Pixel- oder Assistenztechnik-Zertifikat, keine Produktfreigabe (`release:false`). Native FIG/PNG und historische Berichte wurden nicht als aktuelle Laufzeitregeln umgedeutet. Kein Commit oder Push.
