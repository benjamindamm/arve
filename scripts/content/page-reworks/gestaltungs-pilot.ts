import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const text = (blockName: string, title: string, ...paragraphs: string[]): Block => ({blockType:'text',blockName,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[{type:'text',version:1,text:title}]},...paragraphs.map(value=>({...base,type:'paragraph',children:[{type:'text',version:1,text:value}]}))]}}})
// Published CMS read with push:false and a read-only database connection. Original contracts below are unchanged.
export const release = {
  expectedUpdatedAt: '2026-11-18T00:38:59.141Z',
  summary: 'Denselben Projektworkflow gestalten: finden, verstehen, erstellen oder bearbeiten.',
  content: [
    text('example', 'Ein Projekt durch den Arbeitsweg begleiten',
      'Schematischer Ablauf · die Fachseiten erklären die Regeln, die Vorlagen liefern editierbare Entwürfe.',
      '1 · Finden', 'Suche: Alpen', 'Status: Aktiv', 'Alpen · P-101 · Aktiv', 'Projekt öffnen →',
      '2 · Detail', 'Alpen', 'Projekt-ID: P-101', 'Status: Aktiv', 'Namen bearbeiten →',
      '3 · Bearbeiten', 'Projektname', 'Alpen', 'Abbrechen · Namen speichern',
      'Erstellen beginnt bei der Übersicht: einen Namen eingeben; ID und Status vergibt das System.',
      'Rückweg: zur Übersicht mit derselben Suche und demselben Statusfilter. Das Schema ist keine Projektanwendung.'),
    text('usage', 'In drei Schritten zum eigenen Entwurf',
      '1. Eine Ablaufvorlage in breit und schmal herunterladen. SVG im Designwerkzeug importieren oder die native FIG in OpenPencil öffnen. Inter muss im Zielwerkzeug verfügbar sein.',
      '2. Denselben Projektdatensatz durch Suche, Detail und Formular führen. Die Zustandsvorlagen ergänzen; Suchkriterien beim Rückweg, archivierte Projekte und ein unbekanntes Speicherergebnis mitgestalten.',
      '3. Den Entwurf einer zweiten Person ohne mündliche Ergänzung geben. Fehlende Entscheidungen und Ressourcen festhalten; diese unabhängige Teamprobe steht noch aus.'),
    text('limits', 'Was für eine Anwendung noch fehlt',
      'Die Downloads sind statische, editierbare Gestaltungsvorlagen. Sie enthalten keine reale Suche oder Speicheranbindung. FIGs enthalten flache Frames und Texte, keine Varianten- oder Auto-Layout-Bibliothek.',
      'Offen bleiben die Prüfung im Designwerkzeug, die unabhängige Teamprobe und Laufzeitprüfungen mit Tastatur, Zoom und assistiven Werkzeugen. Ein unbekannter Speicherstand braucht eine tatsächliche Statusklärung.'),
{
  "id": "6afcf3a334010ea3ee3caaf4",
  "body": {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,
      "children": [
        {
          "tag": "h2",
          "type": "heading",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Ein Arbeitsweg, gemeinsame Entscheidungen",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Referenzstand 0.1 · 18.11.2026. Diese lokalen Entscheidungen machen den kleinen Projektworkflow gestaltbar. Sie sind weder allgemeine shadcn-Regeln noch eine Freigabe für ein Firmensystem. Die unabhängige Gestaltungsprüfung steht aus.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Geltung: Web auf Desktop und schmalen Ansichten, Sprache de-CH, helles Erscheinungsbild. Die vorhandenen Rechnungs- und Komponentenbeispiele bleiben eigenständige Studien. Der beschriebene Projektworkflow ist eine Gestaltungsreferenz, noch keine ausführbare Anwendung.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        }
      ],
      "direction": "ltr"
    }
  },
  "blockName": "scope",
  "blockType": "text"
},
{
  "id": "6afcf3a334010ea3ee3caaf9",
  "title": "So arbeitet ihr mit der Referenz",
  "summary": "Gestaltet denselben Datensatz durch alle drei Schritte. Nutzt die verlinkten Fachseiten für Regeln, Zustände und Rückwege.",
  "caption": "Statische Arbeitsanleitung. Sie belegt keine bereits implementierte Navigation, Speicherung oder assistive Bedienung.",
  "source": "Lokale Pilotentscheidung 0.1 vom 18.11.2026; aus der gemeinsamen Arbeitsfähigkeitsprüfung abgeleitet.",
  "blockName": "workflow",
  "steps": [
    {
      "id": "6afcf3a334010ea3ee3caaf5",
      "key": "finden",
      "title": "Finden",
      "description": "ID oder Name suchen, Status eingrenzen und genau ein Projekt öffnen. Suchkriterien bleiben beim Rückweg erhalten.",
      "next": "Suchseite: Ergebnisse, Erstleere, Nulltreffer und schmale Darstellung.",
      "tone": "normal"
    },
    {
      "id": "6afcf3a334010ea3ee3caaf6",
      "key": "verstehen",
      "title": "Verstehen",
      "description": "Name, unveränderliche ID und Status bilden die Identität. Aktive Projekte lassen sich bearbeiten, archivierte nur lesen.",
      "next": "Detailseite: Informationsfolge, Aktionen und Rückkehr.",
      "tone": "normal"
    },
    {
      "id": "6afcf3a334010ea3ee3caaf7",
      "key": "bearbeiten",
      "title": "Erstellen oder bearbeiten",
      "description": "Ein Name, ein klarer Speicherweg. Unveränderte, ungespeicherte und bestätigte Werte bleiben unterscheidbar.",
      "next": "Formularseite: Validierung, Abbruch, Erfolg und unbekanntes Ergebnis.",
      "tone": "normal"
    },
    {
      "id": "6afcf3a334010ea3ee3caaf8",
      "key": "pruefen",
      "title": "Zusammen prüfen",
      "description": "Eine zweite Person soll den gesamten Weg ohne mündliche Ergänzungen gestalten können. Offene Entscheidungen und fehlende Ressourcen werden erfasst.",
      "next": "Diese Teamprobe ist noch durchzuführen.",
      "tone": "attention"
    }
  ],
  "blockType": "workflowStudy"
},
{
  "id": "6afcf3a334010ea3ee3caafa",
  "body": {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,
      "children": [
        {
          "tag": "h2",
          "type": "heading",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Die drei Aufgaben",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "link",
              "fields": {
                "url": "/systems/shadcn/suchen-filtern",
                "newTab": false,
                "linkType": "custom"
              },
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Projekte finden · Suche, Filter und Rückkehr",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "link",
              "fields": {
                "url": "/systems/shadcn/detailseite",
                "newTab": false,
                "linkType": "custom"
              },
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Projekt verstehen · Detail und Aktionen",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "link",
              "fields": {
                "url": "/systems/shadcn/formulare-validierung",
                "newTab": false,
                "linkType": "custom"
              },
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Projekt erstellen oder bearbeiten · Formular und Validierung",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            }
          ],
          "direction": "ltr"
        }
      ],
      "direction": "ltr"
    }
  },
  "blockName": "tasks",
  "blockType": "text"
},
{
  "id": "6afcf3a334010ea3ee3caafb",
  "body": {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,
      "children": [
        {
          "tag": "h2",
          "type": "heading",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Das gemeinsame Datenmodell",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Ein Projekt hat genau drei fachliche Angaben: eine vom System gesetzte, unveränderliche ID; einen erforderlichen Projektnamen; den vom System gesetzten Status Aktiv oder Archiviert. Namen enthalten nach Entfernen äusserer Leerzeichen 1–80 Unicode-Graphemcluster. Doppelte Namen sind zulässig; die ID unterscheidet Projekte.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Neue Projekte sind Aktiv. Nur ihr Name wird bearbeitet. Archivierte Projekte sind lesbar; eine Archivieren-Aktion gehört nicht zum Pilot. Die Referenz setzt sequenzielle Abläufe voraus, ohne gleichzeitige Bearbeitung durch mehrere Personen.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Der Suchbestand ist vollständig und enthält höchstens 50 Projekte. Suche und Status wirken sofort lokal. q und status sind URL-gebunden und werden durch Detail und Bearbeitung weitergegeben. Grössere Bestände, Server-Suche, Rollen und Massenaktionen benötigen eigene Entscheidungen.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        }
      ],
      "direction": "ltr"
    }
  },
  "blockName": "data",
  "blockType": "text"
},
{
  "id": "6afcf3a334010ea3ee3caafc",
  "body": {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,
      "children": [
        {
          "tag": "h2",
          "type": "heading",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Visuelle Referenz · Farbe und Typografie",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Für diesen Pilot wählen wir lokal: Fläche #FFFFFF, Text und primäre Aktion #171717, Text auf primärer Aktion #FAFAFA, sekundäre Fläche #F5F5F5. Inter ist die Referenzschrift; falls sie im Designwerkzeug fehlt, muss sie vor der Übergabe verfügbar gemacht werden. Diese Auswahl ist kein vollständiges, freigegebenes Markentoken-System.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Rollen: Seitentitel 32/40 px, Abschnittstitel 24/32 px, Lesetext 16/24 px, Label und Hilfetext 14/20 px. Titel und Labels mit Gewicht 600, Lesetext mit 400. Bei Textvergrösserung wachsen Container; feste Höhen dürfen keinen Text abschneiden.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Fehler: #B91C1C auf Weiss, immer mit verständlichem Text. Eingabebegrenzung #737373 auf Weiss. Fokus: sichtbarer 2-px-Ring #171717 mit 2 px Abstand auf Weiss. Zustände nie nur durch Farbe unterscheiden. Diese Paare sind lokale Entwurfsentscheidungen; Kontrast und Fokus müssen im fertigen Entwurf und bei der Umsetzung geprüft werden.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        }
      ],
      "direction": "ltr"
    }
  },
  "blockName": "color",
  "blockType": "text"
},
{
  "id": "6afcf3a334010ea3ee3caafd",
  "body": {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,
      "children": [
        {
          "tag": "h2",
          "type": "heading",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Visuelle Referenz · Raum und Anordnung",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Abstände verwenden 4, 8, 12, 16, 24, 32 und 48 px. Label zum Feld: 8 px. Feld zur Hilfe oder Fehlermeldung: 8 px. Zwischen Feldern oder zusammengehörigen Regionen: 24 px. Zwischen grossen Seitenabschnitten: 48 px. Dokumentation und längere Texte bleiben bei höchstens 65 Zeichen pro Zeile.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Inhaltsbreite maximal 1120 px; Seitenränder breit 32 px, schmal 16 px. Formular maximal 640 px; die kurze Detailansicht bleibt einspaltig. Unter 640 px verfügbarer Inhaltsbreite stehen Suchfelder und Aktionsgruppen untereinander. Lange Namen umbrechen. Listen zeigen schmal dieselben Angaben in gestapelten Einträgen.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Buttons und Eingaben haben im Entwurf mindestens 44 px Höhe, dürfen mit Inhalt wachsen und erhalten 8 px Radius. Das ist eine eigene einheitliche Pilotwahl, keine Behauptung über unveränderte Spartan-Defaults oder die unterschiedlichen Radien der importierten Komponenten. Es gibt keine zusätzliche Card um jede Information und keine haftenden Aktionsleisten.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        }
      ],
      "direction": "ltr"
    }
  },
  "blockName": "space",
  "blockType": "text"
},
{
  "id": "6afcf3a334010ea3ee3caafe",
  "body": {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,
      "children": [
        {
          "tag": "h2",
          "type": "heading",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Herkunft und offene Nachweise",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Herkunft: Das Handbuch und die importierte shadcn-Contractbibliothek liefern bestehende Komponenten- und Gestaltungsbefunde. Die hier gewählten Typografie-, Abstands-, Radius- und Layoutrollen sind ergänzende lokale Entscheidungen vom 18.11.2026. Sie ändern keine versionierten Contractdateien und lösen keinen Plattformnachweis aus.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Design verantwortet künftig die visuellen Rollen; UX und Fachbereich prüfen Begriffe, Bedingungen und Rückwege; Entwicklung prüft die Umsetzbarkeit und technischen Nachweise. Das benennt benötigte Rollen, weist aber keinem realen Team ungefragt Verantwortung oder eine erteilte Freigabe zu.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Noch offen: vorhandene Designressourcen im Designwerkzeug verwenden und prüfen; breite und schmale Aufgabenentwürfe ausarbeiten; unabhängige Teamprobe durchführen. Ebenso offen sind reale Speicheranbindung, Statusklärung bei unbekanntem Ergebnis und Laufzeitprüfungen mit Tastatur, Zoom und assistiven Werkzeugen. Ein unbekannter Speicherstand darf nicht als Erfolg oder als sicher ungespeichert erscheinen.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        }
      ],
      "direction": "ltr"
    }
  },
  "blockName": "sources",
  "blockType": "text"
},
{
  "id": "6afcf3a334010ea3ee3caaff",
  "body": {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,
      "children": [
        {
          "tag": "h2",
          "type": "heading",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "mode": "normal",
              "text": "Weiterführende Regeln",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "link",
              "fields": {
                "url": "/systems/shadcn/grundlagen",
                "newTab": false,
                "linkType": "custom"
              },
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Grundlagen · Gestaltungswissen und Quellen",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "link",
              "fields": {
                "url": "/systems/shadcn/content-design",
                "newTab": false,
                "linkType": "custom"
              },
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Content Design · verständliche Meldungen",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            }
          ],
          "direction": "ltr"
        },
        {
          "type": "paragraph",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "link",
              "fields": {
                "url": "/systems/shadcn/komponenten",
                "newTab": false,
                "linkType": "custom"
              },
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Komponenten · verfügbare Bausteine und Contractstände",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            }
          ],
          "direction": "ltr"
        }
      ],
      "direction": "ltr"
    }
  },
  "blockName": "links",
  "blockType": "text"
}
] satisfies Page['content'],
}
