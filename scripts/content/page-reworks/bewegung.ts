import type { Page } from '../../../src/payload-types'
export const release = {
  "expectedUpdatedAt": "2026-11-24T08:15:41.329Z",
  "title": "Animation",
  "summary": "Dauer und Verlauf vergleichen. Das gleiche Ergebnis ohne Bewegung gestalten.",
  "content": [
    {
      "blockType": "text",
      "blockName": "anm-start",
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
                  "text": "Zu den Beispielen"
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
                  "text": "Steuerbare Gestaltungsstudien für das Web. Werte und Kurven sind lokale Vergleichsrezepte, keine allgemeine shadcn-Skala."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-duration",
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
                  "text": "Dauer vergleichen"
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
                  "text": "Gleiche Strecke, gleicher Verlauf. Nur die Dauer ändert sich. Starte alle drei gemeinsam."
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
                  "text": "Rezepte: 150, 300 und 600 ms, ohne Verzögerung, je ein Durchlauf; Verlauf cubic-bezier(0.2, 0, 0, 1). Das markierte Element wandert vom Start zum Ziel. Die Zeitlupe spielt mit einem Viertel der normalen Geschwindigkeit; die ursprünglichen Vergleichswerte bleiben beschriftet."
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
                  "text": "Start beginnt den Vergleich neu. Pause hält nur noch laufende Animationen an; Weiter setzt sie fort. Zurücksetzen beendet den Lauf und zeigt wieder den Anfang. Bereits beendete kurze Läufe starten beim Fortsetzen nicht erneut. Es entsteht keine Warteschlange."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-curve",
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
                  "text": "Verlauf vergleichen"
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
                  "text": "Alle brauchen 600 ms. Der Verlauf bestimmt, wann das Element schneller oder langsamer wird."
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
                  "text": "Rezepte: linear für gleichmässige Veränderung; cubic-bezier(0.2, 0, 0, 1) für Abbremsen; cubic-bezier(0.4, 0, 0.2, 1) für sanften Beginn und Abschluss. Start, Ziel, Dauer und Wiederholung bleiben gleich. Die kleinen Kurven zeigen Zeit nach rechts und Weg nach oben."
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
                  "text": "Ein abbremsender Verlauf kann das Ankommen betonen, ein sanfter Beginn und Abschluss eine beidseitige Veränderung. Prüfe den tatsächlichen Weg und Kontext. Die Kurvennamen und Beispiele geben nicht jeder Komponente automatisch einen Übergang vor."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-reduced",
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
                  "text": "Gleiches Ergebnis ohne Bewegung"
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
                  "text": "Öffne die Kontaktdetails mit und ohne Übergang. Name, Inhalt und Bedienung bleiben gleich."
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
                  "text": "Lokales Rezept: Beim Öffnen erscheint die E-Mail mit Telefon sofort im Layout; nur der neue Inhaltsbereich blendet über 240 ms ein und bewegt sich um 0,5 rem nach oben an seine Endposition. Der Verlauf ist cubic-bezier(0.2, 0, 0, 1). Der Fokus bleibt auf dem Auslöser. Es wird nichts gespeichert."
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
                  "text": "Ohne Bewegung erscheinen dieselben Details direkt. Die Systemeinstellung für reduzierte Bewegung hat Vorrang vor der lokalen Wahl. Ein Wechsel zur Reduktion beendet den visuellen Übergang, ohne den geöffneten Inhalt zu entfernen. Das Abschalten der Reduktion startet nicht von selbst eine neue Vorschau."
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
                  "text": "Schliessen blendet die Details aus und beendet die Einblendung. Ein erneutes Öffnen beginnt einen neuen lokalen Übergang; es gibt keine wartenden Abläufe. Die Tasten bleiben bedienbar. Das ist eine lokale Offen/Geschlossen-Studie, keine neue allgemeine Disclosure- oder Fokusvorgabe."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-choice",
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
                  "text": "Animation gezielt einsetzen"
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
                  "text": "Beziehung erklären: Zeige, woher Inhalt kommt und was zusammengehört."
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
                  "text": "Direkt reagieren: Notwendige Rückmeldung wartet nicht auf einen dekorativen Effekt."
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
                  "text": "Gleichwertig reduzieren: Derselbe Inhalt bleibt ohne räumliche Bewegung verständlich."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-recipes",
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
                  "text": "Rezepte und Einsatz"
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
                  "text": "Lege Anfang und Ziel sowie den Zweck fest, bevor du eine Dauer wählst. Nutze bei kleinen Änderungen eine entsprechend zurückhaltende Darstellung. Ein grosser Weg oder eine Folge mehrerer Elemente braucht eine eigene Beurteilung; „Mobile immer schneller“ ist keine allgemeine Regel."
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
                  "text": "Dauer, Startverzögerung und tatsächliche Verarbeitung sind unterschiedliche Grössen. Verhindere, dass gestaffelte Effekte wichtige Inhalte unnötig spät verfügbar machen. Die Vergleiche verwenden keine Verzögerungen und keine automatischen Schleifen."
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
                  "text": "Wiederholte Eingabe muss zum gültigen Zustand führen. Hier setzt Start bewusst neu an, Pause hält an und Zurücksetzen zeigt den Anfang. Andere Komponenten können Umkehr oder Fortsetzen aus der aktuellen Position benötigen; deren Verhalten bleibt in der führenden Komponente bzw. ihrem Contract definiert."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-processing",
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
                  "text": "Laufende Vorgänge erklären"
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
                  "text": "Ein Spinner kennzeichnet Bearbeitung, aber bestätigt keinen Erfolg und keine Restzeit. Ein belastbarer Vorgang braucht passende Texte sowie Zustände für Erfolg, Fehler und Abbruch. Ohne rotierendes Zeichen muss die Bearbeitung weiter verständlich sein."
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
                  "text": "Im gewählten Export stehen --ui-spinner-duration: 1000ms und --ui-skeleton-pulse-duration: 2000ms. Das sind lokale Zykluswerte für Komponenten, keine Wartezeit auf Daten und keine allgemeine Übergangsskala. Die drei Vorschauen senden keine Anfragen."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-preferences",
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
                  "text": "Präferenzen und Kontrolle"
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
                  "text": "Die Webvorschauen berücksichtigen prefers-reduced-motion. Bei aktiver Systempräferenz zeigen auch Dauer- und Verlaufvergleich das Ziel direkt. Wird die Präferenz während eines Vergleichs aktiviert, endet seine Bewegung am gültigen Ziel; ein späterer Wechsel zurück startet ihn nicht automatisch."
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
                  "text": "Der Schalter „Ohne Bewegung“ gehört zum Kontaktbeispiel. Er ist eine lokale Darstellungswahl und kein Nachweis, dass die Systemeinstellung geprüft wurde. Die Zeitlupe dient der Analyse und ist keine reduzierte Alternative."
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
                  "text": "Keine Vorschau startet automatisch beim Laden. Bei automatisch gestarteten, wiederholten oder sich aktualisierenden Produktinhalten sind eigene Kontrollregeln zu klären. Die Fünf-Sekunden-Bedingung von WCAG Pause, Stop, Hide ist keine pauschale Ausnahme für automatische Aktualisierung. Blinkende/Blitz-Inhalte sind separat zu beurteilen."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-adaptation",
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
                  "text": "Inhalt und Plattform anpassen"
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
                  "text": "Die Wege der Vergleiche passen sich der verfügbaren Breite an. Lange Kontakthinweise dürfen umbrechen, der Inhaltsbereich wächst. Nicht alle Grössen- oder Darstellungswechsel sollten durch eine längere Animation kaschiert werden."
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
                  "text": "Erhalte bei Navigation, Unterbrechung und stockender Darstellung einen gültigen Zustand. Vorgabewerte oder eine CSS-Kurve belegen keine tatsächlich flüssige Bildfolge. Fokus, Lesereihenfolge und visuelle Bewegung bleiben unterschiedliche Aussagen."
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
                  "text": "Die Beispiele belegen keine native iOS-/Android-Umsetzung. Plattformkonventionen, Präferenzwechsel, Ressourcen- und Leistungsgrenzen sind im jeweiligen Produkt gesondert zu gestalten und zu prüfen."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-source",
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
                  "text": "Herkunft und Stand"
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
                  "text": "Komponentenbefunde aus shadcn-Export 30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90, package/library/tokens.css: Spinner 1000 ms und Skeleton-Puls 2000 ms. Die neuen Dauer-/Kurvenvergleiche sowie das 240-ms-Kontaktrezept sind ausdrücklich eigene Showcase-Entscheidungen. Contracts und Originaltokens werden nicht verändert."
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
                  "text": "Anforderungsorientierung: WAI zu WCAG 2.3.3 (AAA), Animation from Interactions, zu 2.2.2 (A), Pause, Stop, Hide, und 2.3.1 (A), Three Flashes or Below Threshold, am 24.11.2026 gelesen. Geltung, Bedingungen und Ausnahmen sind getrennt zu berücksichtigen. Eine Präferenzunterstützung allein ist keine allgemeine Konformitätsfreigabe."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-checks",
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
                  "text": "Prüfen und offen halten"
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
                  "text": "Prüfe echte Abläufe: Start, Pause, Fortsetzen, Rücksetzen, erneute Eingabe und Schliessen während des Übergangs. Vergleiche denselben Inhalt ohne Bewegung. Benenne die tatsächlich getestete Präferenz und Umgebung; ein lokaler Schalter ersetzt keine Systemprüfung."
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
                  "text": "Zwei Standbilder zeigen Anfang und Ende, keine reale Dauer oder flüssige Bildfolge. Auch ein berechneter Stil oder vorhandener Token bestätigt nicht das tatsächliche Verhalten. Zeitlupe und reale Geschwindigkeit müssen unterscheidbar bleiben."
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
                  "text": "Offen bleiben ein abgestimmtes systemweites Repertoire, weitere Sequenzen, native Zuordnungen, Leistungsmessungen auf Zielgeräten und eine fachlich verantwortliche Stelle. Bei Änderungen an Rezept, Komponente, Datenzustand oder Plattform sind die betroffenen Abläufe neu zu prüfen."
                }
              ]
            }
          ]
        }
      }
    },
    {
      "blockType": "text",
      "blockName": "anm-links",
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
                  "text": "Weiter gestalten und nachlesen"
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
                    "url": "/systems/shadcn/abstaende",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "Abstände und Grössen"
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
                    "url": "/systems/shadcn/form-und-ebenen",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "Form und Ebenen"
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
                    "url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "WAI · Animation from Interactions"
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
                    "url": "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "WAI · Pause, Stop, Hide"
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
                    "url": "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html",
                    "linkType": "custom",
                    "newTab": false
                  },
                  "children": [
                    {
                      "type": "text",
                      "version": 1,
                      "text": "WAI · Three Flashes or Below Threshold"
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
      "id": "6b007b37fab20ff6c1e8ed66",
      "kind": "motion",
      "title": "Wie sich ein Element an einen anderen Ort bewegt",
      "explanation": "Die drei Standbilder zeigen, wo das Element A zuerst steht, welchen Weg es nimmt und wo es danach steht. Wenn du die Demonstration öffnest, bewegt sich A einmal zum Ziel. Schliessen beendet die Demonstration. Bei aktivierter Systempräferenz für reduzierte Bewegung erscheint direkt das Ergebnis. Die Dauer von 600 ms dient nur der Beobachtung und ist kein Systemtoken. Die Standbilder zeigen die Veränderung vollständig; du musst die Bewegung nicht abspielen, um sie zu verstehen.",
      "source": "Eigene Gestaltungsstudie für Arve; keine vollständige Komponentenimplementierung.",
      "revision": null,
      "blockName": null,
      "blockType": "study"
    }
  ]
} satisfies { expectedUpdatedAt: string; title: string; summary: string; content: Page['content'] }
