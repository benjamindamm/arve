# Historische Skripte

Diese acht Skripte dokumentieren frühere Arbeitsschritte an der shadcn-Referenz. Sie gehören nicht zur Installation oder zum aktuellen Veröffentlichungsweg.

Die Originaldateien sind unverändert als `.ts.txt` abgelegt. So bleiben sie lesbar, werden aber weder als TypeScript kompiliert noch versehentlich als normale Skripte gestartet. Relative Importe und Dateipfade beziehen sich weiterhin auf ihren damaligen Ort unter `scripts/`.

| Archivierte Datei | Früherer Zweck und Einschränkung |
| --- | --- |
| [adopt-shadcn-reference.ts.txt](shadcn/adopt-shadcn-reference.ts.txt) | Einmalige Umstellung auf die Referenzimplementierung; löscht das frühere System `beispiel` samt Seiten. Kein Vorschau-Modus. |
| [promote-shadcn-portable.ts.txt](shadcn/promote-shadcn-portable.ts.txt) | Verknüpft genau vier Komponenten mit dem damaligen Export `65133…`. |
| [check-shadcn-portable.ts.txt](shadcn/check-shadcn-portable.ts.txt) | Prüft diesen früheren Vier-Komponenten-Stand über MCP. |
| [seed-shadcn-controls.ts.txt](shadcn/seed-shadcn-controls.ts.txt) | Legt frühe Seiten für Input, Checkbox und Switch an. |
| [seed-shadcn-foundations.ts.txt](shadcn/seed-shadcn-foundations.ts.txt) | Legt frühere Grundlageninhalte an. |
| [publish-shadcn-reference-pages.ts.txt](shadcn/publish-shadcn-reference-pages.ts.txt) | Veröffentlicht vier fest ausgewählte Referenzseiten nach damaligen Inhaltsannahmen. |
| [organize-layouts.ts.txt](shadcn/organize-layouts.ts.txt) | Einmalige Anlage und Sortierung früherer Layout- und Seitentypseiten. |
| [publish-content-layouts.ts.txt](shadcn/publish-content-layouts.ts.txt) | Einmalige Veröffentlichung der Inhaltslayouts. |

Nicht auf einer aktuellen Datenbank ausführen oder als Ausgangspunkt für ein neues System verwenden. Ein historischer Ablauf müsste zuerst mit dem zugehörigen Git-Stand und einer isolierten Datenbank rekonstruiert werden.

## Aktuelle Arbeitswege

- **Erststart:** `npm run dev` verwendet [setup-reference.ts](../setup-reference.ts), um die vollständige Referenz einzurichten. Ein vorhandenes shadcn-System wird erhalten.
- **Eigenes System:** `npm run reference:import` verwendet [system-template.ts](../system-template.ts). Standardmässig wird nur eine Vorschau erstellt; `--apply` legt eine neue Kopie an.
- **Veröffentlichten Stand sichern:** `npm run reference:capture` erfasst den veröffentlichten Datenbankstand für die statische Ausgabe.
- **Prüfen:** `npm run check:reference`, `npm run check:component-catalog` und `npm run check:mcp:static` prüfen die aktuellen Inhalte und Zugänge.

Für statische Prüfungen zuerst `npm run build:static` ausführen.

Siehe [Referenz einrichten und kopieren](../../docs/handbook/reference-template.md).

## Lokale Ausgaben und Sicherungen

`.runtime/static-site` wird durch `npm run build:static` neu erzeugt. Die früheren Ordner `.runtime/reference-package-test` und `.runtime/reference-package-verified` waren lokale Export- und Testkopien; neue Pakete können mit `npm run reference:export -- --out <Zielordner>` erzeugt werden.

`.runtime` ist kein reiner Cache: Baselines wie `semantic-before.json` und dort abgelegte Sicherungen müssen erhalten bleiben. Ebenso sind `src/contracts`, historische Contract-Revisionen und `media` keine pauschalen Löschkandidaten. `.next` wurde bei dieser Bereinigung nicht verändert.
