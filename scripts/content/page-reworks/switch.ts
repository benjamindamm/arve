import { currentReferenceNote } from '../shadcn-complete'
import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1, direction:'ltr' as const, format:'' as const, indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (key:string,title:string,paragraphs:string[]):Block => ({blockType:'text',blockName:key,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]}))]}}})
// Published explanatory blocks, editorially revised from read-only get_component_page.
// Historical Contract artifacts remain unchanged; no live snapshot dependency.
const preserved = [
  {
    "kind": "switch",
    "title": "Schalterstellung und gespeicherte Einstellung unterscheiden",
    "explanation": "Die Einstellung heisst in beiden Schalterstellungen unverändert «Benachrichtigungen». Der Ablaufentwurf beginnt mit ausgeschalteten Benachrichtigungen. Nach dem Einschalten zeigt die Oberfläche zunächst, dass die Änderung noch gespeichert wird. Erst die Bestätigung belegt, dass das Einschalten gespeichert wurde. Wenn das Speichern nachweislich fehlgeschlagen ist und die Einstellung ausgeschaltet bleibt, passt beispielsweise: «Die Änderung konnte nicht gespeichert werden. Benachrichtigungen bleiben ausgeschaltet.» Ein erneuter Versuch muss erreichbar sein. Das Produkt legt fest, ob die Oberfläche die neue Schalterstellung sofort oder erst nach Bestätigung zeigt. Ist das Ergebnis unklar, darf sie weder Erfolg melden noch die Einstellung als ausgeschaltet darstellen. Die Studie ist statisch und zeigt keine Speicherfunktion der vorhandenen Demo.",
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
                "text": "Das Label benennt die Einstellung",
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
                "text": "Ein Switch zeigt zwei Zustände: ein und aus. Die sichtbare Beschriftung bleibt beim Umschalten gleich. Eine zusätzliche Beschreibung kann erklären, was die Einstellung bewirkt. Verwende keinen gemischten Zustand. Eine lange Beschriftung darf umbrechen; ihre Zuordnung zum Schalter muss erkennbar bleiben.",
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
                "text": "In diesem Handbuch empfehlen wir einen Switch für Einstellungen, die unmittelbar wirksam werden. Werden mehrere Optionen erst mit «Speichern» bestätigt, kann eine Checkbox verständlicher sein. Diese Empfehlung ist eine lokale Gestaltungskonvention und keine allgemeine ARIA-Vorschrift.",
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
                "text": "Speichern und Fehler sichtbar machen",
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
                "text": "Dass sich der Schalter bewegt, beweist noch nicht, dass die Änderung gespeichert wurde. Lege im Produkt fest, ob die Oberfläche die neue Schalterstellung sofort oder erst nach Bestätigung zeigt. Zeige während des Speicherns, dass die Bestätigung noch aussteht. Verhindere weitere widersprüchliche Änderungen und mache verständlich, warum das Umschalten gerade eingeschränkt ist.",
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
                "text": "Erkläre bei einem Fehler, welche Einstellung jetzt gilt und welcher nächste Schritt möglich ist. Springt der Schalter ohne Erklärung zurück oder bleibt er dauerhaft deaktiviert, bleibt das unklar. Fehlt eine eindeutige Bestätigung, darf die Oberfläche keinen Erfolg melden. Unbekannte oder noch nicht geladene Einstellungen dürfen nicht als ausgeschaltet erscheinen.",
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
                "text": "Abhängigkeiten und Bedienung prüfen",
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
                "text": "Erkläre, warum eine Einstellung nicht verfügbar ist, etwa weil zuerst eine andere Auswahl nötig ist. Der Grund muss ausserhalb des Schalters lesbar bleiben. Ein oder aus beschreibt die Einstellung; Fokus und Deaktivierung kommen unabhängig davon hinzu. Ein eingeschalteter Switch kann zugleich den Tastaturfokus haben oder nicht verfügbar sein.",
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
                "text": "Prüfe, ob die Beschriftung unverändert bleibt, der Zustand wahrnehmbar und der Tastaturfokus sichtbar ist und das Umschalten per Leertaste funktioniert. Auch bei langen Texten und auf schmalen Seiten muss klar bleiben, zu welcher Einstellung der Schalter gehört. Die Fläche, auf die man klicken oder tippen kann, lässt sich nicht allein an der sichtbaren Schaltergrösse erkennen.",
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
                "text": "Was das vorhandene Beispiel zeigt",
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
                "text": "Die Spartan-Demo lässt sich lokal ein- und ausschalten sowie deaktivieren. Sie speichert keine Einstellung dauerhaft und zeigt keine Fehler beim Speichern. Der Contract beschreibt einen binären Schalter mit den beiden Einstellungswerten ein und aus. Er deklariert weitere Grössen, die sich in dieser Demo jedoch nicht vergleichen lassen.",
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
                "text": "Die Vorschau verwendet einen Button mit Switch-Rolle. Die Vorlage der festgehaltenen Contractrevision verwendet dagegen ein natives Eingabeelement. Der genaue Vergleich und Prüfungen mit assistiven Technologien stehen noch aus. Es gibt keinen veröffentlichten Implementierungsdatensatz und keine Freigabe für native iOS- oder Android-Anwendungen.",
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
                "text": "Anwendung und Quellen",
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
                  "url": "/systems/shadcn/components/checkbox",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Checkbox · unabhängig auswählen",
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
                  "url": "/systems/shadcn/systemzustaende",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Systemzustände · Speichern und erneut versuchen",
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
                  "url": "/systems/shadcn/abstaende",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Abstände · Bedienflächen",
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
                  "url": "https://www.w3.org/WAI/ARIA/apg/patterns/switch/",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "WAI APG · Switch, geprüft 18.11.2026",
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
] satisfies NonNullable<Page['content']>
export const release = {
 expectedUpdatedAt:'2026-11-20T15:12:35.063Z',
 summary:'Eine Einstellung ein- oder ausschalten. Das Label bleibt gleich.',
 content:[
  text('example','Switch ausprobieren',[
   'Schalte die Einstellung um und probiere «Deaktiviert» aus. Das Beispiel ändert nur den lokalen Zustand; es speichert keine Einstellung.'
  ]),
  text('states','Ein Label, zwei Zustände',[
   'Diese statischen Beispiele zeigen: Die Beschriftung bleibt beim Umschalten gleich. Neben der Farbe zeigt die Position des Schalters, ob die Einstellung ein- oder ausgeschaltet ist.',
   'Benachrichtigungen','Aus','Die Einstellung ist ausgeschaltet.',
   'Ein','Die Einstellung ist eingeschaltet.',
   'Nicht verfügbar','Wähle zuerst einen Arbeitsbereich.',
   'Fokus und Deaktivierung kommen unabhängig von ein oder aus hinzu. Auch eine eingeschaltete Einstellung kann nicht verfügbar sein. Die statischen Beispiele erweitern die Funktionen der Demo nicht.'
  ]),
  text('rules','Drei Regeln für Einstellungen',[
   'Benenne die Einstellung: «Benachrichtigungen» bleibt in beiden Zuständen gleich. Erkläre bei Bedarf, was die Einstellung bewirkt. Lange Beschriftungen dürfen umbrechen.',
   'Verwende genau zwei Zustände: ein oder aus, ohne gemischten Zustand. Zeige unbekannte oder noch nicht geladene Werte nicht als «Aus».',
   'Mache deutlich, wann die Änderung wirkt. Hier empfehlen wir einen Switch für unmittelbar wirksame Einstellungen. Werden mehrere Optionen erst mit «Speichern» bestätigt, kann eine Checkbox verständlicher sein. Das ist eine lokale Gestaltungskonvention, keine allgemeine ARIA-Vorschrift.'
  ]),
  text('saving','Wenn die Änderung gespeichert wird',[
   'Wird gespeichert','Zeige, dass die Bestätigung noch aussteht. Verhindere weitere widersprüchliche Änderungen und erkläre die vorübergehende Einschränkung.',
   'Speichern bestätigt','Zeige den bestätigten gespeicherten Zustand. Fehlt eine eindeutige Bestätigung, darf die Oberfläche keinen Erfolg melden.',
   'Speichern fehlgeschlagen','Wenn feststeht, dass die Einstellung ausgeschaltet bleibt: «Die Änderung konnte nicht gespeichert werden. Benachrichtigungen bleiben ausgeschaltet.» Biete einen erneuten Versuch an.',
   'Dies ist ein Ablaufentwurf; die Demo speichert keine Einstellung. Das Produkt legt fest, ob die Oberfläche die neue Schalterstellung sofort oder erst nach Bestätigung zeigt. Ist das Ergebnis unklar, darf die Einstellung nicht als «Aus» erscheinen.'
  ]),
  text('limits','Quellen und Prüfgrenzen',[
   'Die vorhandene Spartan-Demo lässt sich lokal ein- und ausschalten sowie deaktivieren. Sie zeigt weder dauerhaftes Speichern noch Fehler beim Speichern. Unterschiedliche Grössen lassen sich darin nicht vergleichen.',
   'Die HTML/ARIA-Vorlage der festgehaltenen Contractrevision verwendet ein natives input type="checkbox" mit role="switch". Spartan verwendet hier einen Button mit Switch-Rolle. Der Contract beschreibt, wie das native change-Ereignis den Zustandswechsel meldet. Damit ist noch nicht geprüft, ob die Demo denselben Ablauf umsetzt. Der genaue Vergleich und Prüfungen mit assistiven Technologien stehen noch aus.',
   'Prüfe für die Umsetzung: Die sichtbare Beschriftung bleibt gleich, der Zustand ist wahrnehmbar, der Tastaturfokus ist sichtbar und die Leertaste schaltet um. Prüfe auch die tatsächlich anklickbare Bedienfläche. Erkläre ausserhalb des Schalters, warum eine Einstellung nicht verfügbar ist.',
   'Contract shadcn/switch, Revision 65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26, Status draft. Default und Small sind deklariert. Was die Destructive-Varianten bedeuten, ist noch offen; auch die Prüfung für die Webumsetzung steht aus. Es gibt keinen veröffentlichten Implementierungsdatensatz und keine Freigabe für native iOS- oder Android-Anwendungen.',
   'Grundlage: components/switch/README.md, ux.json, interface.json, accessibility.html, accessibility.rules.json und die statische Gestaltungsstudie. Die Quellenlinks und ausführlichen Erläuterungen stehen im nächsten aufklappbaren Abschnitt.'
  ]),
  text('original','Gestaltungsstudie und vollständige Quellen',[
   'Sprachlich überarbeitete Erläuterungen zur Studie, ausgehend vom veröffentlichten Stand vom 20.11.2026, updatedAt 2026-11-20T07:48:51.697Z. Die statische Studie ist keine Live-Demo. Die technischen Contractdateien, festgehaltenen Revisionen und Nachweise bleiben unverändert erhalten.'
  ]),
  ...preserved,
 ] satisfies Page['content'],
}

// Preserve the previous study with its explicit source context.
release.content.unshift(currentReferenceNote(true))
