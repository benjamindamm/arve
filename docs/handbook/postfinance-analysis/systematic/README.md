# Systematische Patternaufnahme

20. November 2026 · PostFinance E-Finance-Demo.

Drei getrennte Rundgänge decken Vermögen/Home, Zahlungen/EZAG und Dokumente/Produkte/Services ab. Jeder Rundgang erfasst sichtbare Navigationsziele und prüft Ansichten anhand derselben acht Aufgabenfamilien.

| Schlüssel | Aufgabe |
| --- | --- |
| navigate | Einstieg, Wechsel, Hierarchie, Rückkehr |
| find | Suche, Filter, Sortierung, Mengenbegrenzung |
| select | Einzelwahl, Mehrfachwahl, Auswahlumfang |
| input | Eingabe, Abhängigkeiten, Validierung |
| edit | Änderungen, Entwurf, Speichern, Abbrechen |
| act | Objektaktionen, Bestätigungen, Rücknahme |
| understand | Details, Vergleiche, zusätzliche Informationen, Hilfe |
| status | Laden, leer, Nulltreffer, Fehler, Erfolg, ungeklärter Ausgang |

## Prüfstatus

- `tested`: sichere Interaktion ausgeführt und sichtbare Reaktion geprüft.
- `visible`: Oberfläche oder Aktion gesehen, Wirkung nicht ausgeführt.
- `absent`: in der untersuchten Ansicht keine entsprechende Funktion gefunden; keine Aussage über die gesamte Anwendung.
- `blocked`: Ziel oder Ablauf durch Demo, Fehler oder Ausführungsgrenze blockiert.
- `unreviewed`: noch nicht untersucht.

Eine Ansicht mit acht Einträgen ist nicht automatisch vollständig geprüft: Der konkrete Status und die Notiz jeder Zelle zählen. Ziele, die nur in der Navigation vorkommen, bleiben als solche gekennzeichnet. Screenshotbeobachtungen dokumentieren Anordnung und Reaktionen; keine persönlichen Demo-Werte oder Bilddateien werden übernommen.

## Katalogregeln

Ein Pattern beschreibt eine Nutzeraufgabe und einen wiederkehrenden Ablauf. Komponenten, Seitentypen und reine Inhaltsanordnungen erhalten keine zusätzliche UX-ID. Gleiche Abläufe aus mehreren Bereichen werden zusammengeführt. Varianten bleiben beim Pattern, sofern Zweck und Entscheidungslogik übereinstimmen.

IDs `UX-001` usw. sind stabile Katalogkennungen dieser Referenzaufnahme. Reihenfolge und Kategorie sind keine Bestandteile der Identität. Umbenennen behält die ID; abgelöste IDs werden nicht erneut vergeben. Kategorie beschreibt die Hauptaufgabe, Tags weitere Eigenschaften. Beobachtungsstand und fachlicher Reifestand sind getrennt: Ein vollständig beobachteter Demoablauf ist noch keine freigegebene shadcn-Regel.

Der Katalog nennt Quellen und Grenzen pro Pattern. Verteilung und Restlücken stehen im Abschlussbericht. Eine Aussage über alle produktiven PostFinance-Funktionen ist daraus nicht ableitbar.

## Ergebnisse

[Pattern-Katalog](catalog.md) · [Abdeckung und Restliste](coverage.md) · [Aufgabenmatrix (JSON)](coverage.json). Die getrennten Bereichsberichte stehen in assets.md, payments.md und services.md. `node scripts/build-pattern-catalog.mjs` baut den Katalog aus Bereichsdaten und registry.json neu auf und prüft die acht Statusfelder sowie bekannte Pattern-Keys.

[Nachprüfung offener Punkte](gap-review.md): 17 gezielte Prüfungen mit Einzelbelegen. Der aktualisierte Katalog enthält die Nachträge unter den bestehenden IDs.
