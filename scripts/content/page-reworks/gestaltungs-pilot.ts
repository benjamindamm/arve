import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const text = (blockName: string, title: string, ...paragraphs: string[]): Block => ({blockType:'text',blockName,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[{type:'text',version:1,text:title}]},...paragraphs.map(value=>({...base,type:'paragraph',children:[{type:'text',version:1,text:value}]}))]}}})
// Published CMS read with push:false and a read-only database connection. Original contracts below are unchanged.
export const release = {
  expectedUpdatedAt: '2026-11-20T14:29:13.422Z',
  summary: 'Mit editierbaren Vorlagen gestalten, wie Menschen Projekte finden, ansehen, erstellen und bearbeiten.',
  content: [
    text('example', 'Vom Suchergebnis zum Formular',
      'Die Vorlagen zeigen einen Projektablauf. Die verlinkten Fachseiten erklären die Regeln dazu.',
      '1 · Finden', 'Suche: Alpen', 'Status: Aktiv', 'Alpen · P-101 · Aktiv', 'Projekt öffnen →',
      '2 · Detail', 'Alpen', 'Projekt-ID: P-101', 'Status: Aktiv', 'Namen bearbeiten →',
      '3 · Bearbeiten', 'Projektname', 'Alpen', 'Abbrechen · Namen speichern',
      'Ein neues Projekt wird aus der Übersicht erstellt: einen Namen eingeben; ID und Status vergibt das System.',
      'Zurück geht es zur Übersicht mit derselben Suche und demselben Statusfilter. Das Schema zeigt den Ablauf einer künftigen Projektanwendung.'),
    text('usage', 'In drei Schritten zum eigenen Entwurf',
      '1. Lade die breite und die schmale Ablaufvorlage herunter. Importiere das SVG im Designwerkzeug oder öffne die native FIG in OpenPencil. Inter muss im Zielwerkzeug verfügbar sein.',
      '2. Verwende dasselbe Projekt in Suche, Detailansicht und Formular. Ergänze die Zustandsvorlagen. Berücksichtige dabei die Suchkriterien bei der Rückkehr, archivierte Projekte und den Fall, dass das Speicherergebnis unbekannt ist.',
      '3. Gib den Entwurf einer zweiten Person ohne mündliche Ergänzung. Halte fest, welche Entscheidungen und Ressourcen fehlen. Diese unabhängige Teamprobe steht noch aus.'),
    text('limits', 'Was für eine Anwendung noch fehlt',
      'Die Downloads sind statische, editierbare Gestaltungsvorlagen. Sie enthalten keine reale Suche oder Speicheranbindung. FIGs enthalten flache Frames und Texte, keine Varianten- oder Auto-Layout-Bibliothek.',
      'Noch ausstehend sind die Prüfung im Designwerkzeug, die unabhängige Teamprobe und Tests der umgesetzten Anwendung mit Tastatur, Zoom und assistiven Werkzeugen. Ist das Speicherergebnis unbekannt, muss die Anwendung den tatsächlichen Status klären können.'),
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
              "text": "Referenzstand 0.1 · 18.11.2026. Für diesen Projektablauf wurden eigene Gestaltungsentscheidungen getroffen. Sie gelten für dieses Beispiel und sind keine allgemeinen shadcn-Regeln oder eine Freigabe für ein Firmensystem. Die unabhängige Gestaltungsprüfung steht aus.",
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
              "text": "Das Beispiel ist für Weboberflächen auf dem Desktop und in schmalen Ansichten ausgelegt, mit Sprache de-CH und hellem Erscheinungsbild. Die vorhandenen Rechnungs- und Komponentenbeispiele bleiben eigenständige Studien. Der Projektablauf dient als Gestaltungsvorlage; eine ausführbare Anwendung gibt es noch nicht.",
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
  "title": "Die Aufgaben im Entwurf ausarbeiten",
  "summary": "Verwende dasselbe Projekt in allen drei Schritten. Die verlinkten Fachseiten erklären Regeln, Zustände und Rückwege.",
  "caption": "Die Anleitung beschreibt einen statischen Entwurf. Navigation, Speicherung und assistive Bedienung müssen erst umgesetzt und geprüft werden.",
  "source": "Lokale Pilotentscheidung 0.1 vom 18.11.2026; aus der gemeinsamen Arbeitsfähigkeitsprüfung abgeleitet.",
  "blockName": "workflow",
  "steps": [
    {
      "id": "6afcf3a334010ea3ee3caaf5",
      "key": "finden",
      "title": "Finden",
      "description": "Nach ID oder Name suchen, nach Status filtern und genau ein Projekt öffnen. Bei der Rückkehr bleiben die Suchkriterien erhalten.",
      "next": "Gestalte die Suchseite mit Ergebnissen, ohne vorhandene Projekte und ohne passende Treffer, jeweils auch in schmaler Darstellung.",
      "tone": "normal"
    },
    {
      "id": "6afcf3a334010ea3ee3caaf6",
      "key": "verstehen",
      "title": "Verstehen",
      "description": "Name, unveränderliche ID und Status zeigen, welches Projekt geöffnet ist. Aktive Projekte lassen sich bearbeiten, archivierte nur lesen.",
      "next": "Lege auf der Detailseite die Reihenfolge der Angaben, die Aktionen und die Rückkehr zur Übersicht fest.",
      "tone": "normal"
    },
    {
      "id": "6afcf3a334010ea3ee3caaf7",
      "key": "bearbeiten",
      "title": "Erstellen oder bearbeiten",
      "description": "Einen Projektnamen eingeben und speichern. Das Formular zeigt, ob der Name unverändert ist, Änderungen noch ungespeichert sind oder das Speichern bestätigt wurde.",
      "next": "Gestalte im Formular die Validierung, das Abbrechen sowie die Rückmeldung bei Erfolg und bei unbekanntem Speicherergebnis.",
      "tone": "normal"
    },
    {
      "id": "6afcf3a334010ea3ee3caaf8",
      "key": "pruefen",
      "title": "Zusammen prüfen",
      "description": "Eine zweite Person soll den gesamten Ablauf ohne mündliche Ergänzungen gestalten können. Halte fest, welche Entscheidungen und Ressourcen ihr dabei fehlen.",
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
              "text": "Ein Projekt hat genau drei fachliche Angaben: eine unveränderliche ID, einen erforderlichen Projektnamen und den Status Aktiv oder Archiviert. Das System vergibt ID und Status. Für den Namen sind 1–80 wahrgenommene Zeichen zulässig (Unicode-Graphemcluster); Leerzeichen am Anfang und Ende werden vor dem Zählen entfernt. Mehrere Projekte dürfen denselben Namen haben; die ID unterscheidet sie.",
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
              "text": "Neue Projekte erhalten den Status Aktiv. Bearbeitet wird nur der Name. Archivierte Projekte lassen sich ansehen; eine Aktion zum Archivieren gehört nicht zum Pilot. Die Abläufe setzen voraus, dass Projekte nacheinander bearbeitet werden, ohne gleichzeitige Änderungen durch mehrere Personen.",
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
              "text": "Für die Suche liegen alle Projekte lokal vor, höchstens 50. Suche und Statusfilter wirken sofort. Die URL-Parameter q und status bleiben beim Öffnen der Detailansicht und beim Bearbeiten erhalten. Für grössere Bestände, Suche auf dem Server, Rollen und Massenaktionen sind weitere Entscheidungen nötig.",
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
              "text": "Die vorgesehenen Abstände sind 4, 8, 12, 16, 24, 32 und 48 px. Zwischen Label und Feld liegen 8 px, ebenso zwischen Feld und Hilfe oder Fehlermeldung. Zwischen Feldern oder zusammengehörigen Bereichen liegen 24 px, zwischen grossen Seitenabschnitten 48 px. Dokumentation und längere Texte bleiben bei höchstens 65 Zeichen pro Zeile.",
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
              "text": "Buttons und Eingabefelder sind im Entwurf mindestens 44 px hoch, dürfen mit ihrem Inhalt wachsen und haben 8 px Radius. Diese einheitlichen Werte wurden für den Pilot gewählt. Die unveränderten Spartan-Defaults und die unterschiedlichen Radien der importierten Komponenten können davon abweichen. Einzelne Informationen erhalten keine zusätzliche Card; Aktionsleisten haften nicht am Bildschirmrand.",
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
              "text": "Herkunft und ausstehende Prüfungen",
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
              "text": "Die Vorlage baut auf dem Handbuch und der importierten shadcn-Contractbibliothek auf. Die Vorgaben für Typografie, Abstände, Radien und Layout wurden am 18.11.2026 für diesen Pilot ergänzt. Die versionierten Contractdateien bleiben unverändert. Ob sich diese Gestaltungsentscheidungen auf einer Plattform bewähren, ist damit noch nicht nachgewiesen.",
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
              "text": "Für die weitere Arbeit braucht es Design für die visuellen Vorgaben, UX und Fachbereich für Begriffe, Bedingungen und Rückwege sowie Entwicklung für Umsetzbarkeit und technische Prüfungen. Diese Aufgaben sind noch keinem konkreten Team zugewiesen; eine Freigabe liegt nicht vor.",
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
              "text": "Als Nächstes sind die Designressourcen im Designwerkzeug zu verwenden und zu prüfen, die breiten und schmalen Entwürfe auszuarbeiten und die unabhängige Teamprobe durchzuführen. Für eine Anwendung fehlen ausserdem die reale Speicheranbindung, die Statusklärung bei unbekanntem Ergebnis und Tests mit Tastatur, Zoom und assistiven Werkzeugen. Ein unbekanntes Speicherergebnis darf weder als Erfolg noch als sicher ungespeichert erscheinen.",
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
