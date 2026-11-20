import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1, direction:'ltr' as const, format:'' as const, indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (key:string,title:string,paragraphs:string[]):Block => ({blockType:'text',blockName:key,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]}))]}}})
// Frozen published CMS content, read 20 November 2026 with push:false.
const preserved = [
  {
    "kind": "input",
    "title": "Ein Feld verständlich gestalten",
    "explanation": "Die Anatomie zeigt das dauerhafte Label «Projektname», den eingegebenen Wert «Jahresbericht» und eine Hilfe: «Ein Name, den dein Team wiedererkennt.» Das Label bleibt bei leerem und gefülltem Feld sichtbar. Ein langer Wert wie «Jahresbericht für die gemeinsame Projektplanung» muss im echten einzeiligen Feld vollständig durch Bearbeiten und horizontales Bewegen erreichbar bleiben; das statische Textbild bricht für Lesbarkeit um. Fokus kennzeichnet die aktuelle Eingabestelle. Ein Fehler wie «Dieser Name ist bereits vergeben. Wähle einen anderen Namen.» kann gleichzeitig mit Fokus erscheinen. Schreibgeschützt bedeutet: Der relevante Wert kann hier nicht geändert werden. Deaktiviert bedeutet: Die Eingabe ist derzeit nicht verfügbar; der Grund «Wähle zuerst einen Arbeitsbereich» steht ausserhalb des Felds. Alle sechs Beispiele sind statisch. Hilfe, Fehler und Schreibschutz sind Gestaltungsziele und keine nachgewiesenen Fähigkeiten der bestehenden Input-Demo.",
    "source": "Eigene Gestaltungsstudie für Arve; nicht aus den Contract-Tokens gerendert und keine zusätzliche lokale Komponentenfähigkeit.",
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
                "text": "Label, Hilfe und Rückmeldung haben eigene Aufgaben",
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
                "text": "Das Label benennt den erwarteten Wert und bleibt sichtbar. Ein Platzhalter ist nur ein Beispiel. Ein Hilfetext erklärt eine ungewöhnliche Anforderung oder Verwendung, ohne das Label zu wiederholen. Eine benötigte Einheit muss dauerhaft erkennbar sein.",
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
                "text": "Die Breite darf die erwartete Eingabelänge andeuten, begrenzt aber nicht die fachlich erlaubte Länge. Auf schmalen Flächen umbrechen Label, Hilfe und Fehler; ein langer Wert bleibt erreichbar und bearbeitbar. Gruppiere zusammengehörige Angaben, ohne die Leserichtung zwischen Spalten hin- und herspringen zu lassen.",
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
                "text": "Lokale Vorschau und noch offene Zusammenstellung",
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
                "text": "Die vorhandene Spartan-Demo zeigt ein natives Textfeld mit zugeordnetem Label sowie Deaktivierung. Hinweise, Fehlermeldungen und Schreibschutz sind darin nicht angeboten. Diese Feldzusammenstellung muss gesondert spezifiziert und geprüft werden. Die Möglichkeit eines nativen HTML-Elements allein ist kein Nachweis für diese Bibliothek.",
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
                "text": "Vorschau und Contract sind visuell nicht vollständig angeglichen. Der frühere lokale Abgleich betrachtete zudem einen neueren Bibliotheksimport als den gepinnten Seitenstand. Dieser redaktionelle Ausbau tauscht den Pin nicht aus. Genaue Werte und Zustandsdefinitionen bleiben im Contract; vor einer verbindlichen visuellen Referenz ist gegen genau die gewünschte Revision zu prüfen. Es gibt derzeit keinen veröffentlichten Implementierungsdatensatz für Input und keine native Plattformfreigabe.",
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
 expectedUpdatedAt:"2026-11-20T07:48:51.830Z",
 summary:"Kurze freie Werte eingeben und die Feldzustände gezielt gestalten.",
 content:[
  text("example","Selbst eingeben",["Einen Wert eingeben, mit Tab weitergehen und «Deaktiviert» umschalten. Escape setzt den eingegebenen Text nicht zurück.", "Die echte Spartan-Demo bietet Label, Eingabe und Deaktivierung. Sie validiert und speichert nichts."]),
  text("anatomy","Label, Eingabe, Hilfe, Fehler",["Statische Gestaltungsbeispiele · Hilfe und Fehler sind hier sichtbar ergänzt; sie sind keine zusätzlichen Fähigkeiten der Live-Demo.", "Projektname (erforderlich)", "Jahresbericht", "Ein Name, den dein Team wiedererkennt.", "Einen Projektnamen eingeben.", "Leer · noch kein Fehler", "Gefüllt", "Fehler · nach erfolglosem Absenden", "Fokus: im Live-Beispiel mit Tab prüfen. Fehler und Fokus müssen gleichzeitig sichtbar sein. Schreibgeschützt: Wert bleibt lesbar; deaktiviert: Eingabe derzeit nicht verfügbar, Grund ausserhalb des Felds erklären."]),
  text("rules","Drei Regeln für Input",["1. Wert passend wählen: kurze freie Einzelwerte als Input erfassen. Längere Texte brauchen eine mehrzeilige Eingabe; feste bekannte Werte eine Auswahl. Eine Suche braucht zusätzlich Suchverhalten und Ergebnisse.", "2. Label behalten: dauerhaft sichtbar und dem Feld zugeordnet. Hilfe erklärt Anforderungen vor der Eingabe, Fehler benennt Problem und Korrektur am Feld. Platzhalter ersetzt weder Label noch Hilfe; Wert bei Fehlern erhalten.", "3. Platz und Zustand gestalten: Breite folgt der erwarteten Eingabe, begrenzt aber nicht den zulässigen Wert. Label, Hilfe und Fehler dürfen umbrechen; lange Feldwerte bleiben bearbeitbar. Fokus, Fehler, Schreibschutz und Deaktivierung unterscheiden."]),
  text("boundaries","Typen und Grenzen",["Die vorhandene Demo und der gepinnte Draft-Contract behandeln ein natives einzeiliges Textfeld. E-Mail-, Zahlen-, Datums-, Such- und Passwortvarianten sind dadurch nicht spezifiziert oder geprüft.", "Nur im Gestaltungs-Piloten gilt für Projektname: 1–80 Unicode-Graphemcluster nach Randtrim; gleiche Namen sind erlaubt. «Maximal 80 Zeichen» ist keine generische Inputregel. Der Duplikatfehler in der erhaltenen älteren Studie beschreibt einen anderen fachlichen Fall und gilt nicht für diesen Piloten.", "Prüfzeitpunkt, Fokus nach Absenden und Speicherausgang gehören zum Formularpattern. Escape ändert laut Input-Contract den gespeicherten Wert nicht; native Tastatur, Fokus und IME bleiben beim nativen Feld."]),
  text("limits","Quellen, Draft und Prüfgrenzen",["Die vollständigen sechs veröffentlichten Inhaltsblöcke vom 20.11.2026, 07:48:51.830 UTC bleiben unten erhalten. Keine neue Freigabe, kein Austausch der Contract-Revision oder Demo-Einstellungen.", "Spartan-Demo und Contract sind visuell nicht vollständig angeglichen; ein früherer Abgleich nutzte einen neueren Import als den gepinnten Seitenstand. Hilfe, Fehler und Schreibschutz brauchen weiterhin eine eigene Spezifikation und Prüfung. Für Input existiert kein veröffentlichter Implementierungsdatensatz und keine native Plattformfreigabe."]),
  text("original","Vollständige Ausgangsstudie und Quellen",["Unveränderter veröffentlichter Inhalt; fachliche Beispiele der älteren Studie behalten ihren jeweiligen Kontext."]),
  ...preserved,
 ] satisfies Page['content'],
}
