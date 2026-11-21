import type { Page } from '../../../src/payload-types'

export const release = {
  "expectedUpdatedAt": "2026-11-20T16:30:29.160Z",
  "summary": "28 Patternkandidaten nach Aufgabe, Kategorie oder Tags durchsuchen. Kurze Ablaufvorschauen zeigen, was beobachtet wurde und welche Fragen offenbleiben; Fachseiten helfen beim Gestalten.",
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
                  "text": "Suche unter 28 beobachteten Patternkandidaten nach einer Aufgabe, Kategorie oder einem Tag. Die Ablaufvorschauen zeigen in drei Schritten, wie Menschen die untersuchte Oberfläche nutzen oder ihre Inhalte erfassen können. Sie fassen Beobachtungen zusammen; die Patterns sind weder als Regeln freigegeben noch als lokale Beispiele implementiert."
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
          "title": "Suchkriterien festlegen",
          "description": "Mehrere Kriterien auswählen, bevor die Suche sie anwendet.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Kriterien anwenden",
          "description": "Die Suche übernimmt die gewählten Kriterien.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Aktive Filter erkennen",
          "description": "Aktive Kriterien bleiben bei den Ergebnissen sichtbar.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Finden · Tags: context, filters",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Zurücksetzen leert zunächst nur die eingegebenen Kriterien; erst erneutes Anwenden setzt auch die Suche zurück. Belegt ist nur, dass die Oberfläche die Kriterien übernimmt: Ergebniswerte und Datumsbereich waren fachlich nicht verlässlich."
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
          "title": "Suchergebnisse ansehen",
          "description": "Passt keine Zeile zum Suchtext, bleibt die Liste leer.",
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
      "title": "Zeitraum oder Konten auswählen",
      "summary": "Zeitraum der Analyse wählen.",
      "steps": [
        {
          "key": "1",
          "title": "Auswahl öffnen",
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
          "title": "Konten auswählen",
          "description": "Eine gemeinsame Kontenansicht wählen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Auswählen · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Kontenauswahl und sofortige Suche in den Optionen bedient; bei fehlenden Treffern erschien keine Erklärung. Ob ein korrigierter Zeitraum erfolgreich übernommen wurde, wurde nicht gesondert ausgewertet. Keine umfassende Prüfung der Barrierefreiheit."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-004",
      "title": "Ungültigen Datumsbereich korrigieren",
      "summary": "Verstehen, warum das Von-Datum nicht nach dem Bis-Datum liegen darf.",
      "steps": [
        {
          "key": "1",
          "title": "Ungültigen Zeitraum eingeben",
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
      "summary": "Einen Termin für die Ausführung festlegen.",
      "steps": [
        {
          "key": "1",
          "title": "Ausführung zu einem Termin wählen",
          "description": "Die Terminoption blendet Datum und Kalender ein.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Datum eingeben",
          "description": "Das Datum für die geplante Ausführung ändern.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Option wechseln",
          "description": "Bei sofortiger Ausführung verschwindet das Datumsfeld. Wird die Terminoption erneut gewählt, bleibt das eingegebene Datum erhalten.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Eingeben · Tags: conditional, responsive",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Das Datum blieb nur im selben, noch nicht abgesendeten Formular nachweislich erhalten; auch in der schmalen Ansicht beobachtet. Validierung, erneutes Aufrufen und dauerhafte Speicherung bleiben offen. Das Formular wurde nicht abgesendet."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-006",
      "title": "Import beginnen und abbrechen",
      "summary": "Vor der Dateiauswahl verstehen, wie die Daten verwendet werden.",
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
          "title": "Datenverwendung nachlesen",
          "description": "Vor der Dateiauswahl den Hinweis zur Verwendung der Daten lesen.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Import abbrechen",
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
      "summary": "Den Verarbeitungsstatus einer Datei und mögliche nächste Schritte erkennen.",
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
          "title": "Nächsten Schritt erkennen",
          "description": "Erkennen, wo sich Details öffnen lassen oder ein Rückweg angeboten wird.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Zustände · Tags: error, processing, table",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Keine Datei übertragen und den Verlauf einer Verarbeitung nicht beobachtet. Fehlerdetails klärten die Ursache nicht. Bei Nichtverfügbarkeit war ein Rückweg sichtbar; er wurde nicht genutzt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-009",
      "title": "Mehrere Einträge auswählen",
      "summary": "Zeilen markieren, auf die anschliessend eine gemeinsame Aktion angewendet werden kann.",
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
          "description": "Alle Zeilen auswählen oder Markierungen entfernen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Auswählen · Tags: batch-selection, bulk, checkbox, disabled, selection",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Keine gemeinsame Aktion ausgeführt und keinen Wechsel zwischen Listenseiten geprüft. Das Filterverhalten unterschied sich je Ansicht: Markierungen blieben teils erhalten, andernorts wurden sie beim erneuten Anwenden entfernt. An der Checkbox im Tabellenkopf war visuell kein Zustand für eine teilweise Auswahl erkennbar; die Semantik wurde nicht geprüft."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-010",
      "title": "Liste sortieren",
      "summary": "Aufträge in einer anderen Reihenfolge betrachten.",
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
          "title": "Gewählte Sortierung erkennen",
          "description": "Die gewählte Sortierung bleibt im Steuerelement sichtbar.",
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
          "description": "Die Hilfe schliessen und zum Arbeitsbereich zurückkehren.",
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
      "title": "Vom Diagramm zur Tabelle wechseln",
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
          "title": "Weitere Einträge aufklappen",
          "description": "Die Aktion zum Anzeigen weiterer Einträge auslösen.",
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
      "summary": "Sich zwischen den Ebenen der Navigation orientieren.",
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
      "summary": "Verstehen, warum die Suche keine Ergebnisse zeigt.",
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
      "summary": "Die passende Seite anhand der eigenen Aufgabe finden.",
      "steps": [
        {
          "key": "1",
          "title": "Bereich öffnen",
          "description": "Die Übersichtsseite eines Bereichs aufrufen.",
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
          "description": "Eine der angebotenen Seiten für die gewählte Aufgabe öffnen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Navigieren · Tags: dashboard, navigation",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Nur sichtbare Ziele und einzelne Unterziele geprüft; nicht alle Ziele wurden geprüft. Die Kachel allein ist kein eigenständiger Ablauf."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-019",
      "title": "Tabs durch kompakte Auswahl ersetzen",
      "summary": "Die Auswahl der Übertragsart in breiten und schmalen Ansichten erkennen.",
      "steps": [
        {
          "key": "1",
          "title": "Tabs in der breiten Ansicht ansehen",
          "description": "Die Ansichtsarten stehen nebeneinander als Tabs.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "2",
          "title": "Auswahl in der schmalen Ansicht ansehen",
          "description": "Eine kompakte Auswahl ersetzt die Tabreihe.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Gewählte Übertragsart erkennen",
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
      "summary": "Bearbeitbare Werte direkt in der Zeile einer Vorlage erkennen.",
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
          "description": "Die bearbeitbaren Werte stehen in derselben Tabellenzeile wie die Vorlage.",
          "tone": "normal",
          "next": null
        },
        {
          "key": "3",
          "title": "Aktion zum Erstellen erkennen",
          "description": "Die Aktion zum Erstellen aus der Vorlage ist von den bearbeitbaren Feldern getrennt erkennbar.",
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
      "summary": "Eine künftige Kontobelastung einschätzen.",
      "steps": [
        {
          "key": "1",
          "title": "Konto und Fälligkeit ansehen",
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
          "title": "Links zu Details erkennen",
          "description": "Für die einzelnen Auftragstypen lassen sich jeweils eigene Details aufrufen.",
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
      "summary": "Sich in einem eingebetteten Rechnungsportal orientieren.",
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
          "title": "Navigationen unterscheiden",
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
          "description": "Die Details eines Eintrags öffnen.",
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
          "title": "Ohne Änderung abbrechen",
          "description": "Die Bearbeitung abbrechen, ohne Werte zu ändern.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Bearbeiten · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Keine Auswahl geändert. Damit ist weder das Verwerfen geänderter Werte noch das Verhalten beim Speichern belegt."
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
          "title": "Handlungsmöglichkeiten unterscheiden",
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
          "description": "Die schrittweise Einführung in die Funktionen starten.",
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
          "title": "Einführung schliessen",
          "description": "Die Einführung verlassen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Verstehen · Tags: dialog, onboarding",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: In der breiten Ansicht fünf Informationsschritte nachgeprüft, in der schmalen nur Schritt 1–2. Enter und Escape in einer schmalen Ansicht ausprobiert; der Fokus war danach am Einstieg sichtbar. Keine vollständige Tastatur- oder Screenreaderprüfung. Die Einführung erläutert Funktionen; sie führt nicht durch den Abschluss einer Transaktion."
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
          "description": "Die zunächst angezeigten Zeilen der Liste ansehen.",
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
          "title": "Weitere Zeilen lesen",
          "description": "Weitere Zeilen erscheinen. Die Aktion zum Nachladen wird erneut angeboten.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Finden · Tags: show-more-disclosure, table",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Die Liste wuchs von sechs auf zwölf Zeilen. Ob der Server weitere Listenseiten liefert, wie viele Einträge es insgesamt gibt, wie das Listenende aussieht und wie sich die angezeigte Anzahl zurücksetzen lässt, ist nicht belegt."
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
          "description": "Die passende Möglichkeit zum Hochladen oder Öffnen von Details erkennen.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Zustände · Tags: deadline, row-action",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Darstellung beobachtet. Beobachtungsgrenzen: Nur vorhandene Zustände angesehen; keine weiteren Bearbeitungsschritte oder Freigaben ausgeführt. Nicht jede betrachtete Variante zeigte eine Frist."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-028",
      "title": "Von einer Mitteilung zur Aufgabe wechseln",
      "summary": "Den Link von einer neuen Mitteilung zum zugehörigen Arbeitsbereich erkennen.",
      "steps": [
        {
          "key": "1",
          "title": "Neuigkeit erkennen",
          "description": "Eine Mitteilung mit einer Anzeige für die Anzahl ungelesener Einträge ansehen.",
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
      "summary": "Die Details einer Versicherung ansehen.",
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
          "title": "Zur Übersicht zurückkehren",
          "description": "Mit dem sichtbaren Rückweg zur Übersicht zurückkehren.",
          "tone": "normal",
          "next": null
        }
      ],
      "caption": "Kategorie: Navigieren · Tags: ohne Tags",
      "source": "Kandidat · Referenzaufnahme 20.11.2026 · Interaktionen beobachtet. Beobachtungsgrenzen: Die Details eines repräsentativen Vertrags geöffnet; keine vollständige Fachprüfung. Bei einer gesondert geprüften Rückkehr blieb der Filter erhalten, die Sortierung wurde auf den Standard zurückgesetzt. Die Scrollposition wurde nicht verglichen. Browser-Zurück blieb ungeprüft; die fachliche Zuordnung der Demowerte ist nicht belegt."
    },
    {
      "blockType": "workflowStudy",
      "blockName": "UX-030",
      "title": "Verbrauch gegenüber einem Ziel anzeigen",
      "summary": "Verbrauch und Überschreitung eines Limits erkennen.",
      "steps": [
        {
          "key": "1",
          "title": "Budget ansehen",
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
                  "text": "Zwei weitere Kandidaten ohne aktuelle Beobachtung"
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
                  "text": "Grundlage ist eine begrenzte Referenzaufnahme vom 20.11.2026 mit 28 beobachteten Mustern. Zwei weitere Kandidaten sind verzeichnet, wurden in dieser Aufnahme aber nicht beobachtet. Die IDs bleiben bei weiteren Bearbeitungen erhalten. Kategorien und Tags helfen beim Finden; sie sagen nichts über die Qualität oder Umsetzbarkeit eines Patterns aus."
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
                  "text": "Die drei Schritte jeder Vorschau fassen die Beobachtung redaktionell zusammen. Wo nur eine Ansicht betrachtet wurde, beschreiben sie, welche Inhalte sich darin nacheinander erfassen lassen. Sie bedeuten nicht, dass die gezeigten Aktionen ausgeführt wurden. Was beobachtet und ergänzend nachgeprüft wurde und welche Fragen offenbleiben, steht beim ausgewählten Kandidaten."
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
