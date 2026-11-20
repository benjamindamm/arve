# Destruktive Aktionen bestätigen

Browserbefund am 20.11.2026: Absatz, Referenzlink und Do/Don’t; kein sichtbares Beispiel und keine getrennte Entscheidungshilfe für Bestätigung, Folgen und Wiederherstellung.

Umsetzung: Beispiel zuerst mit synthetischer Projektvorlage «Sommerfest». Die lokale Demo zeigt Ziel, Folge und Rücksetzung ausdrücklich; sie ändert nur React-Zustand. Benannter nativer modaler Dialog, Startfokus auf Abbrechen, Escape als Abbruch und Fokus zurück zum erhaltenen Auslöser. Drei Entscheidungsregeln, kompakte Angaben zu Handlungstext, Verlauf und Fehlern. Quellen/Prüfgrenzen und drei unveränderte Originalblöcke in Details. Alle fachlichen Texte stammen aus dem CMS-Release. Dialogaktionen stehen breit nebeneinander, bis 600 px untereinander.

Tatsächlich ausgeführte Checks:

- Aktuellen öffentlichen Stand zuerst in BrowserOS neo gelesen.
- shadcn/ui Alert Dialog (Base), WAI APG Alert Dialog und Modal Dialog am 20.11.2026 im Browser gelesen.
- Aktuelle veröffentlichte CMS-Seite mit push:false und read-only Datenbankverbindung gelesen. expectedUpdatedAt bestätigt; alle drei Originalblöcke gegen den Release-Endabschnitt verglichen (ohne IDs und Nullfelder): gleich.
- `npm run typecheck`: erfolgreich.
- `git diff --check` für eigene Dateien: erfolgreich; die neuen Dateien sind noch unversioniert, daher kein vollständiger Formatierungsnachweis dadurch.

Browser-QA nach Root-Veröffentlichung am 20.11.2026:

- BrowserOS neo mit echten Viewports 1440×1000 und 390×844; CDP-Screenshots angesehen. Dialog und schmale Seite passen, Text und Aktionen sind lesbar; schmale Dialogaktionen untereinander.
- Öffnen setzt Fokus auf Abbrechen. Dialog wird im Accessibility-Baum mit Name, Beschreibung und modal=true ausgegeben; Hintergrund wird durch den nativen Modalzustand ignoriert.
- Abbrechen und Escape erhalten die Vorlage, melden Abbruch und geben Fokus an «Entfernen in Demo prüfen» zurück.
- Bestätigen entfernt ausschließlich das lokale Beispiel, meldet Erfolg und fokussiert «Demo neu starten»; Reset stellt die Vorlage wieder her. Beide Viewports ausgeführt.
- Tab und Umschalt+Tab inklusive beider Kreisgrenzen geprüft. Die native Browserrandbehandlung liess zunächst den Fokus in Browserchrome wechseln; expliziter Kreis um die beiden Dialogaktionen ergänzt und auf beiden Breiten erneut erfolgreich geprüft. Typecheck nach Fix erfolgreich.
- Details geöffnet: Quellenlinks, klare Demo-/Prüfgrenzen und die drei ursprünglichen Blöcke sichtbar. Referenzen zuvor direkt im Browser gelesen; Links zu Nachbarseiten anhand ihrer gerenderten Ziele geprüft, keine vollständige Prüfung dieser Nachbarseiten.

Keine CMS-Schreibzugriffe durch diesen Worker. Keine gemeinsame Registry geändert. Keine Prüfung mit assistiver Technik, weiteren Browsern oder echter Serveraktion; keine allgemeine Komponentenfreigabe behauptet.
