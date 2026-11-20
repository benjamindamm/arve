import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1, direction:'ltr' as const, format:'' as const, indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (key:string,title:string,paragraphs:string[]):Block => ({blockType:'text',blockName:key,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]}))]}}})
// Original published CMS blocks frozen literally from read-only get_component_page,
// updatedAt 2026-11-20T07:48:51.697Z; no live snapshot dependency.
const preserved = [
  {
    "kind": "switch",
    "title": "Zustand und Übernahme auseinanderhalten",
    "explanation": "Die Einstellungszeile heisst im ausgeschalteten und eingeschalteten Zustand unverändert «Benachrichtigungen». Der Ablaufentwurf unterscheidet Ausgangszustand aus, ausstehende Übernahme und bestätigten Zustand ein. Schlägt die Übernahme fehl, lautet die Rückmeldung beispielsweise: «Die Änderung konnte nicht gespeichert werden. Benachrichtigungen bleiben ausgeschaltet.» Ein Weg zur Wiederholung muss erreichbar sein. Ob der neue Zustand sofort oder erst nach Bestätigung gezeigt wird, ist eine Produktentscheidung. Ein unbekannter Zustand ist nicht aus. Die Studie ist statisch und belegt keine Speicherfunktion der vorhandenen Demo.",
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
                "text": "Ein Switch vermittelt zwei Zustände: ein und aus. Das sichtbare Label bleibt beim Wechsel gleich; eine zusätzliche Beschreibung kann die Wirkung erklären. Verwende keinen gemischten Zustand. Ein längeres Label darf umbrechen, während die Zuordnung zum Schalter erkennbar bleibt.",
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
                "text": "Als lokale Gestaltungsempfehlung eignet sich ein Switch für direkt wirksame Einstellungen. Werden mehrere Optionen erst mit «Speichern» bestätigt, kann eine Checkbox die Erwartung klarer vermitteln. Diese Unterscheidung ist eine Gestaltungskonvention, keine allgemeine ARIA-Pflicht.",
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
                "text": "Übernahme und Fehler sichtbar machen",
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
                "text": "Eine lokale Bewegung des Schalters beweist noch keine gespeicherte Änderung. Entscheide im Produkt, ob die Oberfläche den neuen Zustand optimistisch zeigt oder erst nach Bestätigung übernimmt. Erkläre eine ausstehende Übernahme und verhindere widersprüchliche Mehrfachänderungen auf nachvollziehbare Weise.",
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
                "text": "Bei einem Fehler muss erkennbar sein, welcher Zustand jetzt gilt und wie es weitergeht. Ein kommentarloser Rücksprung oder ein dauerhaft deaktivierter Schalter lässt diese Frage offen. Unbekannte oder nicht geladene Einstellungen dürfen nicht als ausgeschaltet dargestellt werden.",
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
                "text": "Eine nicht verfügbare Einstellung braucht einen verständlichen Grund, etwa eine zuvor nötige Auswahl. Der Grund bleibt ausserhalb des Schalters lesbar. Aus/ein, Fokus und Deaktivierung sind unterschiedliche Dimensionen; ein eingeschalteter Switch kann zugleich fokussiert oder nicht verfügbar sein.",
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
                "text": "Prüfe unverändertes Label, wahrnehmbaren Zustand, Tastaturfokus und Umschalten per Leertaste. Ein längerer Text oder eine schmale Einstellungsseite darf den Schalter nicht von seiner Bedeutung trennen. Die sichtbare Schaltergrösse allein beschreibt noch nicht die wirksame Bedienfläche.",
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
                "text": "Die Spartan-Demo schaltet lokal zwischen ein und aus und bietet Deaktivierung. Sie speichert keine Einstellung dauerhaft und bildet keinen Übernahmefehler ab. Der Contract beschreibt einen binären Schalter; zusätzliche Grössen sind dort deklariert, aber in dieser Demo nicht vergleichbar.",
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
                "text": "Die Vorschau verwendet einen Button mit Switch-Rolle; die gepinnte Vorlage ein natives Eingabeelement. Der konkrete Abgleich und assistive Prüfungen bleiben offen. Ein veröffentlichter Implementierungsdatensatz sowie eine native iOS-/Android-Freigabe sind nicht vorhanden.",
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
                    "text": "Systemzustände · Übernahme und Wiederholung",
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
 expectedUpdatedAt:'2026-11-20T07:48:51.697Z',
 summary:'Eine Einstellung ein- oder ausschalten. Das Label bleibt gleich.',
 content:[
  text('example','Switch ausprobieren',[
   'Schalte die Einstellung um und vergleiche sie mit «Deaktiviert». Das Beispiel ändert nur den lokalen Zustand; es speichert keine Einstellung.'
  ]),
  text('states','Ein Label, zwei Zustände',[
   'Statische Gestaltungsbeispiele: Das Label bleibt beim Umschalten unverändert. Position und sichtbarer Zustand ergänzen die Farbe.',
   'Benachrichtigungen','Aus','Die Einstellung ist ausgeschaltet.',
   'Ein','Die Einstellung ist eingeschaltet.',
   'Nicht verfügbar','Wähle zuerst einen Arbeitsbereich.',
   'Deaktivierung und Fokus sind zusätzliche Zustände. Eine eingeschaltete Einstellung kann ebenfalls nicht verfügbar sein. Die Beispiele bilden keine zusätzliche Demo-Funktion ab.'
  ]),
  text('rules','Drei Regeln für Einstellungen',[
   'Die Einstellung benennen: «Benachrichtigungen» bleibt in beiden Zuständen gleich. Die Wirkung bei Bedarf mit einer Beschreibung erklären; lange Labels dürfen umbrechen.',
   'Zwei Zustände verwenden: Ein oder aus, ohne gemischten Zustand. Unbekannte oder noch nicht geladene Werte nicht als «Aus» zeigen.',
   'Die Übernahme erklären: Direkt wirksame Einstellungen passen zur Erwartung an einen Switch. Werden mehrere Optionen erst mit «Speichern» bestätigt, kann eine Checkbox klarer sein. Das ist eine Gestaltungskonvention.'
  ]),
  text('saving','Wenn die Änderung gespeichert wird',[
   'Wird übernommen','Die ausstehende Änderung erkennbar machen und widersprüchliche Mehrfachänderungen verhindern.',
   'Bestätigt','Die Rückmeldung stimmt mit dem gespeicherten Zustand überein.',
   'Fehlgeschlagen','«Die Änderung konnte nicht gespeichert werden. Benachrichtigungen bleiben ausgeschaltet.» Einen Weg zur Wiederholung anbieten.',
   'Ablaufentwurf, keine Speicherfunktion der Demo. Ob die Oberfläche den Zustand sofort oder erst nach Bestätigung ändert, legt das Produkt fest.'
  ]),
  text('limits','Quellen und Prüfgrenzen',[
   'Die vorhandene Spartan-Demo schaltet lokal ein und aus und bietet Deaktivierung. Sie zeigt keine Speicherung, Fehlerübernahme oder vergleichbaren Grössenvarianten.',
   'Die gepinnte HTML/ARIA-Vorlage verwendet ein natives input type="checkbox" mit role="switch". Spartan verwendet hier einen Button mit Switch-Rolle. Die native change-Projektion des Contracts ist damit kein Nachweis für die Demo; der konkrete Abgleich und assistive Prüfungen bleiben offen.',
   'Für die Umsetzung prüfen: gleichbleibendes sichtbares Label, wahrnehmbarer Zustand, sichtbarer Tastaturfokus, Umschalten per Leertaste und wirksame Bedienfläche. Eine nicht verfügbare Einstellung braucht einen ausserhalb des Schalters lesbaren Grund.',
   'Contract shadcn/switch, Revision 65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26, Status draft. Default und Small sind deklariert; die Bedeutung der Destructive-Varianten und die Prüfung im Webziel bleiben offen. Es gibt keinen veröffentlichten Implementierungsdatensatz und keine native iOS-/Android-Freigabe.',
   'Grundlage: components/switch/README.md, ux.json, interface.json, accessibility.html, accessibility.rules.json und die unveränderte Gestaltungsstudie. Die ursprünglichen Quellenlinks und vollständigen Fachtexte folgen im aufklappbaren Original.'
  ]),
  text('original','Originalstudie und vollständige Quellen',[
   'Unveränderte veröffentlichte Inhaltsblöcke, Ausgangsstand 20.11.2026, updatedAt 2026-11-20T07:48:51.697Z. Die statische Studie ist keine Live-Demo. Contract, Pins und Nachweise bleiben separat im technischen Contract erhalten.'
  ]),
  ...preserved,
 ] satisfies Page['content'],
}
