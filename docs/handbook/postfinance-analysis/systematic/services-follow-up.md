# Gezielte Folgeprüfung: Dokumente und Services

20. November 2026 · 2 geschlossen, 2 teilweise, 1 blockiert. „Geschlossen“ betrifft die konkrete Beweisfrage, keine Produktfreigabe.

## Dokumentfilter: Entwurf, Übernahme, Reset und selbst erzeugter Nulltreffer

**Quelle:** `download/documents` · **Ergebnis:** `closed`

**Ausgeführt:** Category Taxes wählen, vor Search Ergebnis ansehen, Search; Suchoptionen öffnen und Reset; Search; Datumsrange 01.02.2025–02.02.2025 übernehmen; Category Mortgage und Search. Danach Reset und Search.

**Beobachtet:** Vor Übernahme bleiben neun Dokumentzeilen; Search reduziert Taxes auf eine Zeile, zeigt Category/Type als aktive Kriterien und klappt Suche ein. Reset setzt Formular auf All zurück, aktive Taxes-Kriterien und eine Ergebniszeile bleiben zunächst bestehen. Erst erneutes Search stellt neun Zeilen wieder her. Datumsrange wird als aktives Kriterium angezeigt, trotzdem bleiben alle neun außerhalb der Range datierten Zeilen sichtbar. Mortgage+Search erzeugt ausdrücklich keine passenden Dokumente. Reset+Search stellt Liste wieder her.

**Offen:** Geschlossen ist die Frage nach sichtbarer Übernahmelogik und Nulltreffer-Rückweg, keine Bestätigung korrekter Filterergebnisse. Datumsfilterwirkung in dieser Demo widerspricht der angezeigten Range; fachliche Suchkorrektheit bleibt offen. Andere Kategorien, Produkt-/Beziehungs-/Statusfilter und Invalid-Datum nicht geprüft.

## Auswahlumfang: gemischte Objektzustände, Abwahl, Filterwechsel und Pagination

**Quelle:** `download/documents` · **Ergebnis:** `partial`

**Ausgeführt:** Eine ungelesene und eine gelesene Zeile wählen; Select all, einzelne erste Zeile abwählen; Kategorie Taxes anwenden. Keine Bulk- oder Zeilenaktion ausführen.

**Beobachtet:** Bei nur ungelesener Auswahl ist Read aktiv, Unread deaktiviert. Bei gemischter Auswahl sind Read und Unread sowie Archive/Download aktiv. Nach Select all und Abwahl der ersten Zeile bleiben die übrigen Zeilen markiert. Die Kopfcheckbox zeigt visuell weder Häkchen noch gemischten Strich. Nach Filterwechsel+Search ist die eine passende Zeile unmarkiert und alle Bulkaktionen sind deaktiviert. In der neun Zeilen umfassenden Dokumentliste wurde keine Pagination gefunden.

**Offen:** Visueller gemischter Kopfzustand nicht belegt; Checked-/Indeterminate-Semantik und Screenreader nicht geprüft. Auswahl über mehrere Ergebnisseiten mangels sichtbarer Pagination nicht prüfbar. Keine Aktion ausgeführt; genaue Download-/Read-/Archive-Semantik offen.

## Geänderten sicheren lokalen Formulardraft abbrechen und erneut öffnen

**Quelle:** `services.json: edit-entry-and-cancel; insurances/life-insurance-detail/edit-investment-topic` · **Ergebnis:** `blocked`

**Ausgeführt:** Sicherheitsgrenze anhand des vorhandenen Befunds bewertet; keinen Vertrags-/Einstellungswert geändert. Dokumentfilterentwurf geändert und zurückgesetzt, aber nicht als Cancel-Test umgedeutet.

**Beobachtet:** Der zuvor geöffnete Änderungsentwurf betrifft einen Versicherungsvertrag. Sicher fehlendes Autosave für diesen oder andere Einstellungsformulare ist nicht belegt. Der lokale Suchentwurf bietet Reset und Einklappen, keinen Cancel-Abbruch. Ein belastbarer geänderter Cancel-/Wiederöffnen-Test lässt sich damit nicht innerhalb der erteilten Grenze nachweisen.

**Offen:** Rein lokalen sicheren Demoentwurf mit explizitem Cancel und bekannter Speichersemantik bereitstellen oder gesonderte Testumgebung verwenden. Bisher nur unverändertes Cancel für Investment theme belegt.

## Vollständige sichere fünfteilige Einführung mit Rückwegen

**Quelle:** `contact-support → E-finance in a nutshell` · **Ergebnis:** `closed`

**Ausgeführt:** Slides 1–5 mit Next besuchen; Back von 5 auf 4; direkte Auswahl Slide 5; Close am letzten Schritt.

**Beobachtet:** Fünf Inhalte: Welcome to e-finance, Your personal homepage, Payment assistant, Documents, The Services menu. Aktiver Indikator folgt dem Schritt; ab Schritt 2 Back vorhanden. Schritt 5 ersetzt Next durch Close. Back zeigt wieder Documents/Slide 4. Direkter Slide-5-Button führt erneut zum letzten Inhalt. Close verlässt Dialog und Support ist wieder zugänglich. Screenshots der neuen Schritte und Rückschritt visuell angesehen.

**Offen:** Keine Aussage über fachliche Richtigkeit der Einführung oder vollständige Barrierefreiheit. Kein Geschäftsprozess oder Vertragswizard geprüft.

## Repräsentative schmale Ansicht und Tastaturbedienung

**Quelle:** `contact-support → Einführung bei 390×844 CSS-Pixeln` · **Ergebnis:** `partial`

**Ausgeführt:** Einführung öffnen; Next gezielt fokussieren und Enter drücken; Close-Control fokussieren und Tab drücken; Escape.

**Beobachtet:** Next+Enter wechselt von Welcome zu Your personal homepage, aktiver Indikator 2 und Back sichtbar. Schmaler Dialog zeigt umgebrochenen Titel/Text und untere Navigationscontrols. Tab nach fokussiertem Close erreicht den Inhaltsbereich mit sichtbarer Umrandung; Enter dort ändert keinen Schritt. Escape schließt den Dialog. Screenshot zeigt danach sichtbaren Fokusrahmen wieder auf E-finance in a nutshell im Support.

**Offen:** Next wurde gezielt fokussiert; keine vollständige Tab-Reihenfolge von Seitenbeginn geprüft. Fokusfalle, sämtliche Controls, Vergrößerung, Screenreader und alle fünf Schritte schmal nicht geprüft. Der sichtbare Fokusrückweg gilt für diesen Escape-Versuch.

## Patternupdates

- `apply-and-reset-filter`: Dokumentkategorie im Suchentwurf wählen → Ergebnis bleibt vor Search bestehen → Search übernimmt, zeigt aktive Kriterien und klappt Suche ein → Reset setzt nur Controls zurück → Erneutes Search übernimmt Rücksetzung. Grenzen: Zusätzliche Quelle download/documents; Alias/Zuordnung im Hauptkatalog prüfen. Datumsrange wurde angezeigt, aber Zeilen lagen weiter außerhalb; keine fachliche Korrektheitsfreigabe.
- `empty-filter-result`: Category Mortgage wählen → Search → Keine passenden Dokumente → Suchoptionen öffnen → Reset → Search → Dokumentliste wieder sichtbar. Grenzen: Nur repräsentative Kategorie; keine fachliche Filterkorrektheit über alle Kriterien.
- `selection-dependent-actions`: Ungelesene und gelesene Dokumentzeile markieren → Beide Statusaktionen aktiv → Select all → Eine Zeile abwählen → Filter+Search → Auswahl leer und Bulkaktionen deaktiviert. Grenzen: Variante von batch-selection; keine Ausführung. Kein sichtbarer gemischter Kopfmarker; Semantik ungeprüft. Keine sichtbare Pagination in dieser Probe.
- `guided-feature-tour`: Support-Einführung öffnen → Next bis Slide 5 → Back nach Slide 4 → Direkter Sprung nach Slide 5 → Close → Schmal erneut öffnen → Fokussiertes Next mit Enter → Escape → Fokus sichtbar wieder am Einstieg. Grenzen: Breit fünf sichere Informationsschritte; schmal nur Schritt1–2. Keine vollständige Tastatur-/Screenreaderprüfung; kein Finanzwizard.

Keine neuen Patternkandidaten.

## Grenzen

- Stand 20.11.2026. Fünf gezielte Folgeprüfungen; closed bedeutet konkrete Beweisfrage im beschriebenen Umfang beantwortet, keine Produktfreigabe.
- BrowserOS neo, eigener Tab. 1440×1000 breit, 390×844 repräsentativ schmal. Screenshots visuell angesehen, keine Screenshotdateien gespeichert.
- Keine personenbezogenen Werte in Bericht übernommen; nur künstliche Suchdaten und öffentliche UI-Bezeichnungen.
- Keine Bestellung, Vertragsänderung, Speicherung, Löschung, Dateiaktion, Nachricht oder Kontaktaufnahme ausgeführt.
- Vorherige Berichte unverändert; Hauptkatalog dedupliziert Patternupdates.
