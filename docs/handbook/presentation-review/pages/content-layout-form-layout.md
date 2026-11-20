# Form Layout · Darstellungsrevision

Eine responsive Feldgruppe ersetzt die verdoppelten Breit-/Schmalbilder mit jeweils zwei identischen Feldnamen. «Normal» und «Mit Feldfehler» wechseln nur die Vorschau desselben Feldplatzes. Die separate Erklärung benennt die Reihenfolge Label, Eingabe, Hilfe, Fehler. Formularaktionen bleiben als statische Vorschau gekennzeichnet; Zustandsschalter sind bedienbar. Kein Speicher- oder Validierungsablauf wird implementiert.

Das Formular bleibt maximal 640 px breit; unter 640 px verfügbarer Beispielbreite stehen Aktionen untereinander. Drei Regeln, ein Link zur führenden Formularreferenz und aufklappbare Quellen folgen dem Beispiel. Alle fachlichen Texte, Vorschauwerte und Beschriftungen stehen im CMS-Release.

Schreibumfang: `scripts/content/page-reworks/content-layout-form-layout.ts`, `src/docs/page-reworks/content-layout-form-layout.tsx`, die gleichnamige CSS-Datei und dieser Bericht. Keine gemeinsamen Dateien oder CMS-Daten geändert.

Tatsächlich ausgeführt:
- Öffentlichen Ausgangsstand in eigenem BrowserOS-Tab geöffnet und gelesen: doppelte Breit-/Schmalbilder, je Normal-/Fehlerfeld und unmittelbare Label-/Fehlerannotation bestätigt.
- Veröffentlichten CMS-Stand der eigenen Seite (2026-11-20T13:30:59.790Z) und `shadcn-formulare-validierung` (2026-11-20T08:04:53.615Z) mit `push:false` und schreibgeschützter Datenbankverbindung gelesen. Feldtexte, Prüfung nach Submit, Einzelfeldgrenze und responsive Aktionsfolge berücksichtigt.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts content-layout-form-layout`: Vorschau erfolgreich, sechs Blöcke; keine Veröffentlichung.

Browserprüfung nach Registrierung und Veröffentlichung durch Root:
- Mit BrowserOS neo tatsächlich auf 1440 × 1000 und 390 × 844 CSS-Pixel gestellt; Screenshots beider Zustände betrachtet. Breit stehen die Formularaktionen nebeneinander; schmal untereinander. Label, Feld, Hilfe und Fehler bleiben in derselben Reihenfolge. Keine Überlagerung oder abgeschnittene Hilfe beobachtet.
- Normal-/Fehlervorschau per Fokus und Enter gewechselt, inklusive Rückkehr zum gefüllten Normalzustand. Fehlertext erscheint direkt unter der Hilfe am selben Feldplatz; sichtbarer Tastaturfokus am Zustandsschalter.
- Quellen per Fokus und Enter geöffnet, erweiterten Zustand und beide Komponentenlinks im Snapshot bestätigt.
- Alle drei Inhaltslinks per Fokus und Enter aktiviert: Formularpattern, Input und Button; jeweilige Zieladresse geladen, danach zurückgekehrt.
- Geräteansicht anschliessend zurückgesetzt und eigenen Prüftab geschlossen.

Begrenzte Sicht- und Tastaturprüfung der Dokumentationsvorschau; kein allgemeiner Funktions-, Screenreader- oder Barrierefreiheitsnachweis.
