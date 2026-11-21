import { currentReferenceNote } from '../shadcn-complete'
import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1, direction:'ltr' as const, format:'' as const, indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (key:string,title:string,paragraphs:string[]):Block => ({blockType:'text',blockName:key,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]}))]}}})
// Published study, read 20 November 2026 with push:false; wording revised below.
const preserved = [
  {
    "kind": "input",
    "title": "Ein Feld verständlich gestalten",
    "explanation": "Die Studie zeigt die dauerhafte Beschriftung «Projektname», den eingegebenen Wert «Jahresbericht» und den Hilfetext «Ein Name, den dein Team wiedererkennt.» Die Beschriftung bleibt bei leerem und gefülltem Feld sichtbar. Ein langer Wert wie «Jahresbericht für die gemeinsame Projektplanung» muss im echten einzeiligen Feld vollständig durch Bearbeiten und horizontales Bewegen erreichbar bleiben. Das statische Beispiel bricht den Text für die Lesbarkeit um. Der Fokus kennzeichnet die aktuelle Eingabestelle und kann zugleich mit einem Fehler erscheinen. «Dieser Name ist bereits vergeben. Wähle einen anderen Namen.» beschreibt einen anderen Fachfall als den Gestaltungs-Piloten, der gleiche Namen erlaubt. Schreibgeschützt bedeutet: Der Wert bleibt lesbar, kann hier aber nicht geändert werden. Deaktiviert bedeutet: Die Eingabe ist derzeit nicht verfügbar. Der Grund «Wähle zuerst einen Arbeitsbereich» steht ausserhalb des Felds. Alle sechs Beispiele sind statisch. Hilfe, Fehler und Schreibschutz müssen für Input noch spezifiziert und geprüft werden; die bestehende Demo bietet sie nicht an.",
    "source": "Eigene Gestaltungsstudie; die Darstellung wird nicht aus den Contract-Tokens erzeugt und erweitert die vorhandene Komponente nicht.",
    "revision": null,
    "blockName": null,
    "blockType": "componentStudy"
  },
  {
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
                "text": "Zuerst den benötigten Wert klären",
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
                "text": "Nutze Input für einen kurzen, einzeiligen Wert, den Menschen selbst eingeben können. Benötigt die Aufgabe längeren Text oder ausschliesslich bekannte Optionen, wähle eine andere Eingabeform. Eine Suche braucht zusätzlich ein Suchverhalten und eine Ergebnisdarstellung.",
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
                "text": "Erfrage nur Angaben, die für die Aufgabe erforderlich sind. Akzeptiere fachlich gleichwertige Schreibweisen, statt unnötig enge Formate zu verlangen. Pflicht und Optional werden für das gesamte Formular konsistent erklärt; einzelne Felder sollen keine widersprüchlichen Markierungen einführen.",
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
    "blockName": null,
    "blockType": "text"
  },
  {
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
                "text": "Beschriftung, Hilfe und Rückmeldung haben eigene Aufgaben",
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
                "text": "Die Beschriftung benennt den erwarteten Wert und bleibt sichtbar. Ein Platzhalter ist nur ein Beispiel. Ein Hilfetext erklärt eine ungewöhnliche Anforderung oder Verwendung, ohne die Beschriftung zu wiederholen. Eine benötigte Einheit muss dauerhaft erkennbar sein.",
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
                "text": "Eine Fehlermeldung erklärt Problem und nächsten Schritt am zugehörigen Feld. Bewahre den eingegebenen Wert für die Korrektur. Ob ein Wert fehlt, falsch formatiert oder fachlich nicht akzeptiert ist, sind unterschiedliche Fälle. Prüfzeitpunkt, Fehlerübersicht und Fokus nach dem Absenden stehen im Formularpattern.",
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
    "blockName": null,
    "blockType": "text"
  },
  {
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
                "text": "Platz nach Inhalt bemessen",
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
                "text": "Die Breite darf die erwartete Eingabelänge andeuten, begrenzt aber nicht die fachlich erlaubte Länge. Auf schmalen Flächen dürfen Beschriftung, Hilfe und Fehlermeldung umbrechen. Ein langer Wert bleibt erreichbar und bearbeitbar. Gruppiere zusammengehörige Angaben so, dass die Leserichtung nicht zwischen Spalten hin- und herspringt.",
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
                "text": "Prüfe lange Werte, Einfügen aus der Zwischenablage, Auswahl und Kopieren. Bei Textvergrösserung dürfen Beschriftung und Fehler nicht abgeschnitten werden. Die Bildschirmtastatur darf die aktuelle Eingabe und den nächsten Korrekturschritt nicht unzugänglich machen.",
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
    "blockName": null,
    "blockType": "text"
  },
  {
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
                "text": "Was die Vorschau zeigt und was noch fehlt",
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
                "text": "Die vorhandene Spartan-Demo zeigt ein natives Textfeld mit zugeordneter Beschriftung, das sich deaktivieren lässt. Hilfetexte, Fehlermeldungen und Schreibschutz bietet sie nicht an. Für diese Ergänzungen braucht es eine eigene Spezifikation und Prüfung. Dass ein natives HTML-Element sie ermöglicht, belegt noch keine entsprechende Fähigkeit dieser Bibliothek.",
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
                "text": "Vorschau und Contract stimmen im Aussehen noch nicht vollständig überein. Der frühere lokale Vergleich nutzte einen neueren Bibliotheksimport als die auf dieser Seite festgelegte Revision. Diese Revision bleibt unverändert. Genaue Werte und Zustandsdefinitionen stehen im Contract. Bevor die Vorschau als verbindliche visuelle Referenz dient, muss sie gegen die gewünschte Revision geprüft werden. Für Input gibt es derzeit keinen veröffentlichten Implementierungsdatensatz und keine Freigabe für native Plattformen.",
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
    "blockName": null,
    "blockType": "text"
  },
  {
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
                "text": "Weiterarbeiten und Quellen",
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
                  "url": "#live-beispiel",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Vorhandene Spartan-Demo ausprobieren",
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
                    "text": "Formulare und Validierung · Korrektur und Abschluss",
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
                  "url": "/systems/shadcn/auswahl-und-suche",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Auswahl und Suche · feste Werte statt Freitext",
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
                  "url": "/systems/shadcn/themes-und-zustaende",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Themes und visuelle Zustände · Fokus und Fehler",
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
                  "url": "https://www.w3.org/WAI/tutorials/forms/validation/",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "WAI · Eingaben validieren",
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
                  "url": "https://www.w3.org/WAI/tutorials/forms/labels/",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "WAI · Beschriftung von Eingaben",
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
    "blockName": null,
    "blockType": "text"
  }
] satisfies Page['content']

export const release = {
 expectedUpdatedAt:"2026-11-20T15:07:01.924Z",
 summary:"Kurze Texte eingeben: mit verständlicher Beschriftung, passender Hilfe und klaren Fehlermeldungen.",
 content:[
  text("example","Selbst eingeben",["Gib einen Wert ein, gehe mit Tab weiter und schalte «Deaktiviert» um. Escape setzt den eingegebenen Text nicht zurück.", "Die Spartan-Demo zeigt ein beschriftetes Textfeld, das du deaktivieren kannst. Sie prüft und speichert keine Eingaben."]),
  text("anatomy","Beschriftung, Eingabe, Hilfe und Fehler",["Diese statischen Beispiele ergänzen Hilfe und Fehlermeldung zur Veranschaulichung. Die Live-Demo bietet beides nicht an.", "Projektname (erforderlich)", "Jahresbericht", "Ein Name, den dein Team wiedererkennt.", "Einen Projektnamen eingeben.", "Leer · noch kein Fehler", "Gefüllt", "Fehler · nach erfolglosem Absenden", "Prüfe den Fokus im Live-Beispiel mit Tab. Fehler und Fokus müssen gleichzeitig sichtbar sein. Ein schreibgeschützter Wert bleibt lesbar. Ein deaktiviertes Feld ist derzeit nicht verfügbar; erkläre den Grund ausserhalb des Felds."]),
  text("rules","Drei Regeln für Input",["1. Die passende Eingabe wählen: Nutze Input für kurze Texte in einer Zeile. Längere Texte brauchen eine mehrzeilige Eingabe, feste bekannte Werte eine Auswahl. Eine Suche braucht zusätzlich Suchverhalten und Ergebnisse.", "2. Das Feld verständlich beschriften: Die Beschriftung bleibt sichtbar und ist dem Feld zugeordnet. Hilfe erklärt Anforderungen vor der Eingabe. Eine Fehlermeldung nennt am Feld das Problem und den nächsten Korrekturschritt. Ein Platzhalter ersetzt weder Beschriftung noch Hilfe. Bewahre den eingegebenen Wert bei Fehlern.", "3. Genügend Platz vorsehen: Die Breite richtet sich nach der erwarteten Eingabe, begrenzt aber nicht die zulässige Länge. Beschriftung, Hilfe und Fehlermeldung dürfen umbrechen; lange Feldwerte bleiben bearbeitbar. Gestalte Fokus, Fehler, Schreibschutz und Deaktivierung unterscheidbar."]),
  text("boundaries","Typen und Grenzen",["Die vorhandene Demo und der auf dieser Seite festgelegte Contract im Status Draft behandeln ein natives einzeiliges Textfeld. E-Mail-, Zahlen-, Datums-, Such- und Passwortvarianten sind damit weder spezifiziert noch geprüft.", "Nur im Gestaltungs-Piloten muss ein Projektname nach dem Entfernen von Leerraum am Anfang und Ende 1–80 Unicode-Graphemcluster umfassen. Gezählt werden also zusammengehörige Zeichen als eine Einheit. Gleiche Namen sind erlaubt. «Maximal 80 Zeichen» ist keine allgemeine Regel für Input. Die Fehlermeldung über einen bereits vergebenen Namen in der älteren Studie beschreibt einen anderen Fachfall und gilt nicht für diesen Piloten.", "Wann geprüft wird, wohin der Fokus nach dem Absenden geht und wie das Speicherergebnis angezeigt wird, beschreibt das Formularpattern. Laut Input-Contract ändert Escape den eingegebenen Wert nicht. Tastaturbedienung, Fokus und die Eingabe über einen Eingabemethoden-Editor (IME) folgen weiterhin dem Verhalten des nativen Felds."]),
  text("limits","Quellen, Draft und Prüfgrenzen",["Die sechs Inhaltsblöcke der veröffentlichten Studie vom 20.11.2026, 07:48:51.830 UTC stehen unten vollständig mit überarbeiteter Sprache. Die redaktionelle Änderung erteilt keine neue Freigabe und ändert weder Contract-Revision noch Demo-Einstellungen.", "Spartan-Demo und Contract stimmen im Aussehen noch nicht vollständig überein. Ein früherer Vergleich nutzte einen neueren Import als die auf der Seite festgelegte Revision. Hilfe, Fehler und Schreibschutz brauchen weiterhin eine eigene Spezifikation und Prüfung. Für Input gibt es keinen veröffentlichten Implementierungsdatensatz und keine Freigabe für native Plattformen."]),
  text("original","Ausgangsstudie und Quellen im Detail",["Die Sprache der älteren Studie ist überarbeitet. Ihre fachlichen Beispiele behalten ihren jeweiligen Kontext; insbesondere gilt der Fehler bei gleichen Namen nicht für den Gestaltungs-Piloten."]),
  ...preserved,
 ] satisfies Page['content'],
}

// Preserve the previous study with its explicit source context.
release.content.unshift(currentReferenceNote(true))
