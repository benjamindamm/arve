# Main+Sidebar · Redaktion

Gelesen: Redaktionsbrief, Gesamtbericht und eigener Abschnitt 19 im Audit; vollständige aktuelle Release und Renderer einschliesslich Projektbeispielen, Sidebar, Navigation, schmaler Darstellung, langem Inhalt und Quellenaufklapper. Die gesamte Seite wurde absatzweise geprüft; klare Zusammenfassung, Überschriften, Projektangaben und Erläuterungen zur Lesereihenfolge bleiben erhalten.

Vor der Änderung read-only über MCP `get_documentation_page` abgerufen: Inhalt (ohne technische IDs) und Zusammenfassung entsprachen der bisherigen Release. Frisches `updatedAt`: `2026-11-20T13:59:31.356Z`; als `expectedUpdatedAt` übernommen.

- «Mitlaufend statt überdeckend» heisst nun «Sidebar beim Scrollen»; der Absatz erklärt direkt, wann die Sidebar sichtbar bleibt und wann sie normal mitläuft.
- «die sequenzielle schmale Anordnung» wird durch «Bei wenig Platz stehen die Bereiche untereinander» erklärt. Herkunft, Beobachtung und abgeleiteter Gestaltungsvorschlag bleiben erkennbar.
- Die Projektbesprechung beschreibt nur noch das Gartenprojekt. Aussagen über Hauptbereich, Lesefluss und Sidebar stehen im vorhandenen Erläuterungsabsatz unter den Beispielen. Keine neuen Beispiele oder Projektdaten.

Erhalten: Name Main+Sidebar, 2:1, 42 rem Beispielbreite, sticky nur im breiten Beispiel ab 50 rem Fensterhöhe mit 5 rem Abstand, normales Mitlaufen bei schmaler Fläche/niedrigem Fenster und bei langen Zusatzinhalten, keine Überdeckung/feste Position/zweite erforderliche Scrollfläche, Dokument- und Lesereihenfolge sowie Quellen- und Prüfgrenzen. Projekt Garten, Entwurf, Frühjahr und alle Navigationsziele unverändert.

Vier Textblöcke und ihre Reihenfolge, blockName, Knotentypen und Zeilenzahlen bleiben erhalten: example 27, rules 4, responsive 3, sources 4. Renderer und CSS unverändert. Keine Überschrift geändert; alle bestehenden Anker bleiben bestehen. Repositorysuche nach eingehenden `main-sidebar`-Links mit Fragment ergab keine Treffer.

Ausgeführt: `npm run typecheck` erfolgreich; `git diff --check -- scripts/content/page-reworks/main-sidebar.ts` erfolgreich. Keine CMS-Schreiboperation.

Nach Veröffentlichung durch Root in BrowserOS neo geprüft: ganze öffentliche Seite gelesen, beide «Längeren Inhalt ansehen»-Aufklapper und «Quellen und Prüfgrenzen» geöffnet. Projektgeschichte enthält in beiden Varianten nur Projektinhalt; der Layoutkommentar steht separat unter den Beispielen. Desktop 1440 × 1000 und schmale Ansicht 390 × 844 per Geräteemulation jeweils als vollständigen Screenshot angesehen. Neue Absätze, Überschriften, Beschriftungen und geöffnete Vertiefungen brechen lesbar um; kein konkreter sprachlicher Restbefund. Keine erneuten Sticky-, Scroll- oder Geometriemessungen. Eigene QA-Seite anschliessend geschlossen.
