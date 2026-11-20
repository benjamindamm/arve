import type { Page } from '../../../src/payload-types'

export const release = {
  "expectedUpdatedAt": "2026-11-18T00:12:33.145Z",
  "summary": "28 Patternkandidaten nach Aufgabe, Kategorie und Tags finden; kurze Abläufe mit Beobachtungsgrenzen und direkten Fachseiten.",
  "content": [
    {
      "blockType": "text",
      "blockName": "catalog-intro",
      "body": {
        "root": {
          "version": 1,
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "root",
          "children": [
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "heading",
              "tag": "h2",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "Patternkatalog"
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "28 Kandidaten aus einer Referenzaufnahme: nach Aufgabe, Kategorie oder Tag suchen und einen Ablauf ansehen. Die Vorschauen verdichten Beobachtungen; sie sind keine freigegebenen Regeln oder lokal implementierten Beispiele."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-001",
      "title": "Filter anwenden",
      "summary": "Bewegungen mit mehreren Kriterien eingrenzen.",
      "steps": [
        {
          "key": "1",
          "title": "Kriterien entwerfen",
          "description": "Mehrere Suchkriterien setzen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Kriterien anwenden",
          "description": "Die Suche übernimmt den Entwurf.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Angewandten Kontext lesen",
          "description": "Aktive Kriterien bleiben bei den Ergebnissen sichtbar.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Finden · Tags: context, filters",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Reset leert zunächst den Entwurf; erst erneutes Anwenden übernimmt die Rücksetzung. Nur UI-Übernahme belegt: Ergebniswerte und Datumsbereich waren nicht fachlich verlässlich."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-002",
      "title": "Liste sofort filtern",
      "summary": "Angezeigte Zeilen schnell durchsuchen.",
      "steps": [
        {
          "key": "1",
          "title": "Suchtext eingeben",
          "description": "Vorhandene Zeilen unmittelbar eingrenzen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Treffermenge ansehen",
          "description": "Ein Nichttreffer zeigt eine leere Menge.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Suchtext leeren",
          "description": "Die Zeilen werden wieder sichtbar.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Finden · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Keine fachliche Suchkorrektheit oder Persistenz belegt. Nach einem Fehler-Rückweg war der lokale Filter leer; eine reguläre Detailrückkehr blieb blockiert."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-003",
      "title": "Ansichtskontext wählen",
      "summary": "Zeitraum der Analyse wählen.",
      "steps": [
        {
          "key": "1",
          "title": "Kontext öffnen",
          "description": "Zeitraum oder Kontenauswahl öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Optionen eingrenzen",
          "description": "Die Optionssuche grenzt die Auswahl sofort ein.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Kontext wählen",
          "description": "Eine gemeinsame Kontenansicht wählen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Auswählen · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Kontenauswahl und unmittelbare Optionssuche bedient; Nichttreffer ohne sichtbare Erklärung. Erfolgreiche Übernahme eines korrigierten Zeitraums nicht gesondert ausgewertet; keine allgemeine Accessibilityprüfung."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-004",
      "title": "Datumsbereich validieren",
      "summary": "Ungültige Beziehung zwischen Datumsfeldern verstehen.",
      "steps": [
        {
          "key": "1",
          "title": "Widerspruch eingeben",
          "description": "Das Von-Datum liegt nach dem Bis-Datum.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Prüfung auslösen",
          "description": "Der Dialog bleibt mit feldnaher Meldung offen; Werte bleiben erhalten.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Reihenfolge korrigieren",
          "description": "Die Datumsreihenfolge berichtigen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Eingeben · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Korrigiertes Anwenden wurde ausgelöst, der Erfolg danach nicht gesondert belegt. Tastatur und Screenreader ungeprüft."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-005",
      "title": "Bedingte Felder anzeigen",
      "summary": "Ausführung terminieren",
      "steps": [
        {
          "key": "1",
          "title": "Terminierung wählen",
          "description": "Die Terminoption blendet Datum und Kalender ein.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Datum eingeben",
          "description": "Einen Datumsentwurf ändern.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Option wechseln",
          "description": "Sofortige Ausführung verbirgt das Feld; erneutes Öffnen erhält den Entwurf.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Eingeben · Tags: conditional, responsive",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Werterhalt nur im selben ungesendeten Formular belegt, auch schmal gesehen. Validierung, Neuaufruf und dauerhafte Speicherung offen; keine Übermittlung ausgeführt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-006",
      "title": "Import beginnen und abbrechen",
      "summary": "Datenverwendung vor Dateiauswahl verstehen",
      "steps": [
        {
          "key": "1",
          "title": "Import öffnen",
          "description": "Den Einstieg zum Dateiimport wählen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Verwendung lesen",
          "description": "Vor der Dateiauswahl die Information lesen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Einstieg abbrechen",
          "description": "Den Informationsdialog abbrechen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Verstehen · Tags: dialog, import",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Rückkehrziel nicht belastbar bestätigt. Keine Datei ausgewählt und kein Import bestätigt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-008",
      "title": "Status und Auswege erklären",
      "summary": "Dateiverarbeitung einschätzen",
      "steps": [
        {
          "key": "1",
          "title": "Status lesen",
          "description": "Eine Übersicht mit Verarbeitungszuständen öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Bedeutung einordnen",
          "description": "Text, Symbol und Legende zusammen lesen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Ausweg erkennen",
          "description": "Detailzugang oder Rückweg erkennen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Zustände · Tags: error, processing, table",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Keine Datei übertragen und keine zeitliche Progression beobachtet. Fehlerdetails klärten die Ursache nicht; bei Nichtverfügbarkeit war ein Rückweg sichtbar, aber nicht bedient."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-009",
      "title": "Mehrere Einträge auswählen",
      "summary": "Zeilen vor gemeinsamer Folgeaktion markieren.",
      "steps": [
        {
          "key": "1",
          "title": "Zeilen markieren",
          "description": "Eine oder mehrere sichtbare Zeilen wählen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Auswahlumfang prüfen",
          "description": "Passende Folgeaktionen werden aktiv.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Auswahl ändern",
          "description": "Gesamtwahl oder Abwahl verändert die Markierungen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Auswählen · Tags: batch-selection, bulk, checkbox, disabled, selection",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Keine gemeinsame Aktion ausgeführt, keine Pagination geprüft. Filterverhalten unterschied sich je Ansicht: Markierungen blieben teils erhalten, erneutes Anwenden leerte sie andernorts. Gemischter Kopfzustand visuell nicht erkennbar; Semantik ungeprüft."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-010",
      "title": "Liste sortieren",
      "summary": "Aufträge in anderer Reihenfolge betrachten",
      "steps": [
        {
          "key": "1",
          "title": "Sortierung öffnen",
          "description": "Die Sortierauswahl öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Reihenfolge wählen",
          "description": "Einen anderen Sortiermodus wählen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Modus erkennen",
          "description": "Das Steuerelement zeigt den gewählten Modus.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Finden · Tags: sort, table",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Fachlicher Reihenfolgewechsel der Demodaten nicht bewiesen. Bei einer Detailrückkehr blieb der Währungsfilter erhalten, die Sortierung fiel auf den Standard zurück. Kein allgemeiner Persistenznachweis."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-011",
      "title": "Aktionen zu einem Eintrag öffnen",
      "summary": "Aktionen zu einem Objekt finden.",
      "steps": [
        {
          "key": "1",
          "title": "Menü öffnen",
          "description": "Das Menü eines Eintrags öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Aktionen lesen",
          "description": "Die auf dieses Objekt bezogenen Optionen ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Menü verlassen",
          "description": "Ohne Folgeaktion zurückkehren.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Handeln · Tags: overflow, table",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Keine Änderung, Kopie, Löschung oder Kündigung ausgeführt. Bestätigung und Rücknahme nicht geprüft."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-012",
      "title": "Hilfe im Arbeitskontext öffnen",
      "summary": "Karteninhalt erklären lassen.",
      "steps": [
        {
          "key": "1",
          "title": "Hilfe öffnen",
          "description": "Hilfe direkt im Arbeitsbereich wählen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Erklärung lesen",
          "description": "Die Erläuterung im Hilfebereich lesen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Hilfe schliessen",
          "description": "Mit Schliessen zum Kontext zurückkehren.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Verstehen · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Auch bei 390 × 844 gesehen. Weiterführende Hilfe und Fokusverhalten ungeprüft."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-013",
      "title": "Diagramm und Tabelle wechseln",
      "summary": "Analyse als Werte statt Grafik lesen.",
      "steps": [
        {
          "key": "1",
          "title": "Diagramm ansehen",
          "description": "Die grafische Analyse öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Tabelle wählen",
          "description": "Zur tabellarischen Darstellung wechseln.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Werte lesen",
          "description": "Datums- und Zahlenwerte in Spalten lesen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Verstehen · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Desktop beobachtet; numerische Gleichheit und vollständige Barrierefreiheit nicht nachgewiesen."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-014",
      "title": "Weitere Informationen aufklappen",
      "summary": "Zunächst verkürzte Dokumentliste vollständig lesen.",
      "steps": [
        {
          "key": "1",
          "title": "Kurzfassung lesen",
          "description": "Eine verkürzte Informationsliste ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Information erweitern",
          "description": "Die Erweiterungsaktion auslösen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Mehr Inhalt lesen",
          "description": "Zusätzliche Einträge werden sichtbar.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Verstehen · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Bei der Liste keine Aktion zum Einklappen gesehen; Dokumente nicht geöffnet. Eine nachgeprüfte Accordionvariante öffnete sich schmal mit Enter und zeigte den erweiterten Zustand; keine vollständige Tastatur- oder Screenreaderprüfung."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-016",
      "title": "Navigationsebenen öffnen und verlassen",
      "summary": "In der Bereichshierarchie orientieren.",
      "steps": [
        {
          "key": "1",
          "title": "Menü öffnen",
          "description": "Das kompakte Hauptmenü öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Ebene wechseln",
          "description": "Eine Bereichsebene öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Zurück oder schliessen",
          "description": "Zur Hauptebene oder zur Ausgangsansicht zurückkehren.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Navigieren · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Bei 390 Pixeln beobachtet; kein Unterziel in der schmalen Probe gewählt. Fokus und Verlauf ungeprüft."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-017",
      "title": "Nulltreffer erklären",
      "summary": "Ausbleibende Ergebnisse einordnen",
      "steps": [
        {
          "key": "1",
          "title": "Kriterien lesen",
          "description": "Die aktiven Suchkriterien ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Nulltreffer einordnen",
          "description": "Eine Meldung erklärt die fehlenden Treffer.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Kriterien zurücksetzen",
          "description": "Nach Rücksetzung und erneutem Anwenden erscheint die Liste wieder.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Zustände · Tags: empty, filters",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Zunächst vorhandene Leerzustände nur angesehen. Die Nachprüfung erzeugte Nulltreffer mit einer repräsentativen Kategorie und stellte die Liste wieder her; keine fachliche Filterkorrektheit über alle Kriterien."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-018",
      "title": "Nach Aufgaben navigieren",
      "summary": "Passenden Einstieg nach Aufgabe wählen",
      "steps": [
        {
          "key": "1",
          "title": "Bereich öffnen",
          "description": "Einen Bereichshub aufrufen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Aufgabe erkennen",
          "description": "Beschriftete Aufgabengruppen und Kurztexte lesen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Ziel öffnen",
          "description": "Ein repräsentatives Aufgabenziel öffnen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Navigieren · Tags: dashboard, navigation",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Nur sichtbare Ziele und einzelne Unterziele geprüft; keine vollständige Reichweite. Die Kachel allein ist kein eigenständiger Ablauf."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-019",
      "title": "Tabs durch kompakte Auswahl ersetzen",
      "summary": "Zwischen Übertragsarten wechseln",
      "steps": [
        {
          "key": "1",
          "title": "Breite Ansicht lesen",
          "description": "Die Ansichtsarten stehen nebeneinander als Tabs.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Schmale Ansicht lesen",
          "description": "Eine kompakte Auswahl ersetzt die Tabreihe.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Kontext erkennen",
          "description": "Die aktuelle Art bleibt beschriftet.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Navigieren · Tags: responsive, tabs",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Nur sichtbare Anordnung breit und schmal; kein Wechsel zu einer anderen Art ausgeführt. Die Vorschau ist ein Darstellungsvergleich."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-020",
      "title": "Werte in einer Tabelle bearbeiten",
      "summary": "Werte einer Vorlage am Objekt anpassen",
      "steps": [
        {
          "key": "1",
          "title": "Vorlage finden",
          "description": "Eine Vorlage in der Liste ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Zeilenfelder erkennen",
          "description": "Bearbeitbare Werte liegen im Kontext derselben Zeile.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Folgeaktion unterscheiden",
          "description": "Die Erzeugungsaktion ist getrennt erkennbar.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Bearbeiten · Tags: inline, template",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Nur sichtbare Felder und Aktion; keine Werte geändert. Speicherung, Autosave und Validierung unbekannt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-021",
      "title": "Auswirkungen vor einer Aktion anzeigen",
      "summary": "Künftige Kontobelastung einschätzen",
      "steps": [
        {
          "key": "1",
          "title": "Kontext lesen",
          "description": "Konto und Fälligkeit ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Summen vergleichen",
          "description": "Guthaben, Auftragssumme und erwarteten Saldo vergleichen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Detailzugang erkennen",
          "description": "Auftragstypen bieten getrennte Detailzugänge.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Verstehen · Tags: forecast, summary",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Nur sichtbare Vorschau; keine Berechnung oder Detailnavigation geprüft. Werte nicht übernommen."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-022",
      "title": "In einen eingebetteten Arbeitsbereich wechseln",
      "summary": "In einem eingebetteten Rechnungsportal Orientierung behalten",
      "steps": [
        {
          "key": "1",
          "title": "Arbeitsbereich öffnen",
          "description": "Ein eingebettetes Rechnungsportal aufrufen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Eigene Navigation erkennen",
          "description": "Die Portalnavigation und ihre Ansichten erkennen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Kontexte unterscheiden",
          "description": "Übergeordnete und eingebettete Navigation auseinanderhalten.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Navigieren · Tags: context, iframe",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Nur sichtbare Einbettung; Unterziele und Rechnungsaktionen ungeprüft. Kein belegter vollständiger Wechsel- oder Rückweg."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-023",
      "title": "Bearbeitung öffnen und abbrechen",
      "summary": "Mögliche Vertragsänderung ansehen und verlassen.",
      "steps": [
        {
          "key": "1",
          "title": "Detail öffnen",
          "description": "Einen Eintrag vertieft ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Bearbeitung ansehen",
          "description": "Die Bearbeitung mit bestehender Auswahl öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Unverändert abbrechen",
          "description": "Den unveränderten Entwurf abbrechen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Bearbeiten · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Keine Auswahl geändert. Verwerfen geänderter Werte und Speichersemantik damit nicht belegt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-024",
      "title": "Alternativen vergleichen",
      "summary": "Angebote anhand gleicher Kriterien vergleichen.",
      "steps": [
        {
          "key": "1",
          "title": "Alternativen lesen",
          "description": "Mehrere Angebote nebeneinander ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Kriterien vergleichen",
          "description": "Gleiche Bedingungen und Kosten gegenüberstellen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Aktion unterscheiden",
          "description": "Information und Abschluss als getrennte Wege erkennen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Verstehen · Tags: comparison",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Nur breite Darstellung angesehen; kein Wechsel oder Abschluss. Entscheidungsqualität und fachliche Richtigkeit nicht geprüft."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-025",
      "title": "Eine Einführung durchgehen",
      "summary": "Einstieg in zentrale Funktionen erhalten.",
      "steps": [
        {
          "key": "1",
          "title": "Einführung öffnen",
          "description": "Eine Funktionsführung starten.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Schritte durchgehen",
          "description": "Vorwärts, zurück oder direkt zu einem Schritt wechseln.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Führung schliessen",
          "description": "Die Einführung verlassen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Verstehen · Tags: dialog, onboarding",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Breit fünf Informationsschritte nachgeprüft; schmal nur Schritt 1–2. Enter und Escape in einer schmalen Probe bedient, Fokus danach am Einstieg sichtbar. Keine vollständige Tastatur- oder Screenreaderprüfung; kein Transaktionswizard."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-026",
      "title": "Weitere Einträge laden",
      "summary": "Eine lange Auftragsliste weiter durchsuchen.",
      "steps": [
        {
          "key": "1",
          "title": "Erste Zeilen lesen",
          "description": "Die erste Teilmenge der Liste ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Weitere anzeigen",
          "description": "Die Aktion für weitere Zeilen auslösen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Liste fortsetzen",
          "description": "Mehr Zeilen und eine erneute Erweiterungsaktion werden sichtbar.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Finden · Tags: show-more-disclosure, table",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Sechs auf zwölf Zeilen beobachtet. Serverpagination, Gesamtmenge, Listenende und Rücksetzen des Umfangs nicht belegt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-027",
      "title": "Erforderliche nächste Handlung anzeigen",
      "summary": "Erkennen, warum ein Auftrag noch offen ist und welcher Schritt nötig ist.",
      "steps": [
        {
          "key": "1",
          "title": "Status lesen",
          "description": "Status und gegebenenfalls Frist am Eintrag lesen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Handlungsbedarf erkennen",
          "description": "Verstehen, welcher nächste Schritt offen ist.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Aktion zuordnen",
          "description": "Passenden Upload- oder Detailzugang erkennen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Zustände · Tags: deadline, row-action",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Vorhandene Zustände nur angesehen; keine Progression oder Freigabe ausgeführt. Nicht jede betrachtete Variante zeigte eine Frist."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-028",
      "title": "Von einer Mitteilung zur Aufgabe wechseln",
      "summary": "Eine neue Information in ihrem Arbeitsbereich öffnen.",
      "steps": [
        {
          "key": "1",
          "title": "Neuigkeit erkennen",
          "description": "Eine Mitteilung mit Ungelesenzähler ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Typ unterscheiden",
          "description": "Dokument und Nachricht unterscheiden.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Zielbereich erkennen",
          "description": "Den zugehörigen Arbeitsbereich als Link erkennen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Navigieren · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Zielverknüpfungen nicht direkt betätigt. Kein Wechsel des Gelesenstatus belegt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-029",
      "title": "Eintrag aus einer Übersicht öffnen",
      "summary": "Eine Versicherung vertieft ansehen.",
      "steps": [
        {
          "key": "1",
          "title": "Eintrag finden",
          "description": "Einen Eintrag in der Übersicht wählen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Details öffnen",
          "description": "Die thematisch gegliederten Details öffnen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Kontext wiederaufnehmen",
          "description": "Mit dem sichtbaren Rückweg zur Übersicht zurückkehren.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Navigieren · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Ein repräsentativer Vertrag vertieft geöffnet; keine vollständige Fachprüfung. Separate Rückwegprobe: Filter erhalten, Sortierung auf Standard. Scrollposition nicht verglichen, Browser-Zurück ungeprüft, fachliche Zuordnung der Demowerte nicht belegt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-030",
      "title": "Verbrauch gegenüber einem Ziel anzeigen",
      "summary": "Verbrauch und Überschreitung eines Limits erkennen.",
      "steps": [
        {
          "key": "1",
          "title": "Ziel lesen",
          "description": "Eine Budgetübersicht ansehen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Verbrauch vergleichen",
          "description": "Prozent, Balken sowie verbrauchten und verfügbaren Betrag vergleichen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Überschreitung erkennen",
          "description": "Eine vorhandene Überschreitung an Text und Darstellung erkennen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Zustände · Tags: budget, progress, threshold",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Nur vorhandene Zustände; kein Budget verändert und kein Zustandsübergang ausgelöst."
    },
    {
      "blockType": "text",
      "blockName": "registry-notes",
      "body": {
        "root": {
          "version": 1,
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "root",
          "children": [
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "heading",
              "tag": "h2",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "Zwei weitere Registervormerkungen"
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "UX-007 · Dashboard anpassen · Kategorie: Bearbeiten · Kandidat ohne aktuelle Beobachtung. Kein Ablauf aus der aktuellen Aufnahme verfügbar."
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "UX-015 · Karussell anhalten · Kategorie: Verstehen · Kandidat ohne aktuelle Beobachtung. Kein Ablauf aus der aktuellen Aufnahme verfügbar."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "worked-topics",
      "body": {
        "root": {
          "version": 1,
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "root",
          "children": [
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "heading",
              "tag": "h2",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "Ausgearbeitete Themen"
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "Die Fachseiten erläutern Aufgaben und Entscheidungen mit eigenen redaktionellen Beispielen. Sie sind von den beobachteten Kandidaten getrennt; Prüfgrenzen stehen auf der jeweiligen Seite."
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "version": 1,
                  "direction": "ltr",
                  "format": "",
                  "indent": 0,
                  "type": "link",
                  "fields": {
                    "url": "/systems/shadcn/formulare-validierung",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "Formulare und Validierung"
                    }
                  ]
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "version": 1,
                  "direction": "ltr",
                  "format": "",
                  "indent": 0,
                  "type": "link",
                  "fields": {
                    "url": "/systems/shadcn/suchen-filtern",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "Suchen und Filtern"
                    }
                  ]
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "version": 1,
                  "direction": "ltr",
                  "format": "",
                  "indent": 0,
                  "type": "link",
                  "fields": {
                    "url": "/systems/shadcn/systemzustaende",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "Systemzustände und Wiederherstellung"
                    }
                  ]
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "version": 1,
                  "direction": "ltr",
                  "format": "",
                  "indent": 0,
                  "type": "link",
                  "fields": {
                    "url": "/systems/shadcn/auswahl-und-suche",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "Werte auswählen"
                    }
                  ]
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "version": 1,
                  "direction": "ltr",
                  "format": "",
                  "indent": 0,
                  "type": "link",
                  "fields": {
                    "url": "/systems/shadcn/tabellen-und-listen",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "Tabellen und Listen"
                    }
                  ]
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "version": 1,
                  "direction": "ltr",
                  "format": "",
                  "indent": 0,
                  "type": "link",
                  "fields": {
                    "url": "/systems/shadcn/destruktive-aktionen",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "Destruktive Aktionen"
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "catalog-sources",
      "body": {
        "root": {
          "version": 1,
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "root",
          "children": [
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "heading",
              "tag": "h2",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "Quellen und Prüfgrenzen"
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "Grundlage ist eine begrenzte Referenzaufnahme vom 20.11.2026 mit 28 beobachteten Mustern und zwei weiteren Registervormerkungen. IDs bleiben über den Bearbeitungsstand hinweg stabil. Kategorien und Tags dienen zum Finden; sie bescheinigen keine Qualität oder Implementierungsfähigkeit."
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "Die drei Schritte sind redaktionell verdichtete Ablaufvorschauen. Bei nur sichtbaren Ansichten beschreiben sie eine Lesefolge; sie behaupten keine ausgeführte Aktion. Beobachtungsgrenzen und ergänzende Nachprüfungen stehen pro ausgewähltem Kandidaten."
                }
              ]
            },
            {
              "version": 1,
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "version": 1,
                  "text": "Es liegt keine allgemeine fachliche, responsive oder barrierefreie Freigabe vor. Lokale Komponentenfähigkeiten sowie vollständige Erfolgs-, Fehler-, Abbruch- und Wiederaufnahmewege müssen für ein konkretes Produkt separat geprüft werden."
                }
              ]
            }
          ]
        }
      }
    }
  ]
} satisfies { expectedUpdatedAt: string; summary: string; content: Page['content'] }
