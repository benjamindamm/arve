import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1, direction:'ltr' as const, format:'' as const, indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (key:string,title:string,paragraphs:string[],links:[string,string][]=[]):Block => ({blockType:'text',blockName:key,body:{root:{...base,type:'root',children:[
 {...base,type:'heading',tag:'h2',children:[node(title)]},
 ...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]})),
 ...links.map(([label,url])=>({...base,type:'paragraph',children:[{...base,type:'link',fields:{url,linkType:'custom',newTab:false},children:[node(label)]}]})),
]}}})
// Exact published content read with push:false and a read-only database connection on 20 November 2026.
const preserved = [
  {
    "title": "Von der Eingabe zum geklärten Ergebnis",
    "summary": "Ein Projekt erstellen: Name eingeben, prüfen und das Übermittlungsergebnis unterscheiden. Der Name wird erst mit «Projekt erstellen» übermittelt. Die acht Zustände bleiben die Erstellstudie; die Bearbeitungsvariante folgt darunter. Gültige Eingabe, laufende Übermittlung und bestätigte Speicherung sind getrennte Aussagen.",
    "caption": "Statische Ablaufstudie. Die Zweige sind in den Texten vollständig beschrieben. Kein ausführbares Formular, kein SCXML-Contract und kein Nachweis für Speicherung, Statusabfrage oder sichere Wiederholung.",
    "source": "Lokale Referenzentscheidung für den Gestaltungs-Piloten, 18.11.2026; aufbauend auf der bestehenden achtteiligen Formularstudie. Keine upstream-Vorgabe, Firmenregel oder Produktfreigabe.",
    "blockName": null,
    "steps": [
      {
        "key": "eingeben",
        "title": "Angaben eingeben",
        "description": "Zweck, Pflichtangaben und Anforderungen sind vor der Eingabe verständlich. Der Projektname bleibt während der Bearbeitung ein Entwurf.",
        "next": "«Projekt erstellen» löst die Prüfung aus.",
        "tone": "normal"
      },
      {
        "key": "pruefen",
        "title": "Angaben prüfen",
        "description": "Die relevanten Angaben werden geprüft. Ein lokal gültiger Wert ist noch keine Annahme durch das Produkt.",
        "next": "Bei Eingabefehlern: Fehler verstehen. Ohne bekannte Eingabefehler: übermitteln.",
        "tone": "normal"
      },
      {
        "key": "fehler-verstehen",
        "title": "Fehler verstehen",
        "description": "Der Pilot hat genau ein Eingabefeld. Der Fehler steht bei «Projektname», der Wert bleibt erhalten und der Fokus geht zum Feld. Eine Fehlerübersicht entfällt.",
        "next": "Zum betroffenen Feld gehen und korrigieren.",
        "tone": "attention"
      },
      {
        "key": "korrigieren",
        "title": "Gezielt korrigieren",
        "description": "Nur die betroffenen Angaben ändern. Erledigte Fehler werden aktualisiert; die Korrektur verschiebt den Fokus nicht ungefragt.",
        "next": "«Projekt erstellen» prüft die aktuellen Angaben erneut.",
        "tone": "normal"
      },
      {
        "key": "uebermitteln",
        "title": "Übermittlung läuft",
        "description": "Eine erkennbare Warteanzeige erklärt den laufenden Vorgang. Mehrfachauslösen wird nachvollziehbar verhindert. Eine laufende Übermittlung ist noch kein Erfolg.",
        "next": "Antwort auswerten: bestätigt, ausdrücklich abgelehnt oder Ergebnis unbekannt.",
        "tone": "normal"
      },
      {
        "key": "bestaetigt",
        "title": "Erstellung bestätigt",
        "description": "Erst die bestätigte Annahme erlaubt «Projekt erstellt». Das Ergebnis und ein sinnvoller nächster Ort bleiben erreichbar.",
        "next": "Zur Detailseite des bestätigt erstellten Projekts wechseln; Suchkontext q/status mitnehmen.",
        "tone": "success"
      },
      {
        "key": "abgelehnt",
        "title": "Übermittlung ausdrücklich abgelehnt",
        "description": "Der Dienst bestätigt, dass der Auftrag nicht angenommen wurde. Ein korrigierbares Problem wird dem Feld zugeordnet; fehlende Berechtigung oder eine Störung wird als solche erklärt.",
        "next": "Belegte Feldursache am Feld korrigieren. Andere Ursachen als Vorgangsmeldung erklären; nur nach bestätigter Nichtannahme und behobener Ursache erneut senden.",
        "tone": "attention"
      },
      {
        "key": "unbekannt",
        "title": "Ergebnis unbekannt",
        "description": "Eine fehlende Antwort beweist weder Erstellung noch Ablehnung. Der Entwurf und der Bezug zum ausgelösten Vorgang bleiben nachvollziehbar; die Oberfläche behauptet keinen sicheren Misserfolg.",
        "next": "Ergebnis bleibt ungeklärt. Statusklärung ist eine erforderliche, noch nicht verfügbare Integrationsschnittstelle. Kein Wiederholungs- oder erfundener Supportweg.",
        "tone": "attention"
      }
    ],
    "blockType": "workflowStudy"
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
                "text": "Pilotumfang und Feldbedingungen",
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
                "text": "Ein Projekt besitzt eine unveränderliche, systemvergebene ID, einen erforderlichen Namen und den systemgesetzten Status «Aktiv» oder «Archiviert». Eine Rolle erstellt Projekte und bearbeitet den Namen aktiver Projekte. Archivierte Projekte bleiben lesbar; im Piloten gibt es keine Archivierungsaktion.",
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
                "text": "Neue lokale Referenzentscheidung: Der Name umfasst nach Entfernen des Rand-Leerraums 1–80 Unicode-Graphemcluster. Innere Leerzeichen und Gross-/Kleinschreibung bleiben erhalten; keine weitere Normalisierung. Gleiche Namen sind erlaubt. Diese Entscheidung gilt für den Pilot, nicht als upstream- oder Firmenregel.",
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
                "text": "Feld zusammenstellen und zum richtigen Zeitpunkt prüfen",
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
                "text": "Reihenfolge: «Projektname (erforderlich)», Eingabe, Hilfe «1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.», gegebenenfalls Feldfehler. Label bleibt sichtbar und dem Feld zugeordnet; Hilfe und Fehler sind als Beschreibung verbunden, ein Fehler erhält zusätzlich den Fehlerstatus. Fokus und Fehler müssen gleichzeitig erkennbar sein.",
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
                "text": "Erst «Projekt erstellen» oder «Änderungen speichern» prüft. Ein unberührtes Feld zeigt keinen Fehler. Leer nach Randtrim: «Einen Projektnamen eingeben.» Über 80 Graphemcluster: «Den Projektnamen auf höchstens 80 Zeichen kürzen.» Nach erfolglosem Absenden geht der Fokus zum Feld; keine Fehlerübersicht für dieses Einzelfeld.",
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
                "text": "Danach wird nur das zuvor fehlerhafte Feld beim Verlassen erneut geprüft: gültig entfernt den veralteten Fehler, ungültig aktualisiert ihn. Kein Fokuswechsel bei dieser Korrektur. Erneutes Absenden prüft den aktuellen Wert erneut. Die Hauptaktion bleibt erreichbar; eine deaktivierte Aktion ersetzt keine Erklärung.",
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
                "text": "Bestehenden Namen bearbeiten",
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
                "text": "Die Detailseite öffnet «Projekt bearbeiten» mit dem zuletzt bestätigten Namen. Ausgangswert und systemgesetzter Status müssen beim Öffnen feststehen; bei ungeklärtem Laden gibt es noch keinen bearbeitbaren Ausgang. «Archiviert» zeigt Name, ID und Status als lesbare Werte ohne Speichern-Aktion.",
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
                "text": "Geändert bedeutet: Der randgetrimmte aktuelle Name unterscheidet sich vom randgetrimmten bestätigten Ausgangswert. Zurück zum Ausgangswert oder nur Rand-Leerraum ergänzen bedeutet ungeändert. «Änderungen speichern» bei identischem Wert meldet «Keine Änderungen zu speichern.» am Aktionsbereich, sendet keine Anfrage und bleibt auf der Seite. Eingabe, Blur und Abbrechen senden niemals heimlich.",
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
                "text": "Nach bestätigtem Speichern führt der Weg zur Detailseite desselben Projekts: gespeicherter Name, unveränderte ID und «Änderungen gespeichert». q und status aus der Suche bleiben über Detail und Bearbeiten erhalten. Die Referenzabläufe setzen sequenzielle Bearbeitung voraus; gleichzeitige Änderungen sind ausserhalb des Piloten. Eine Rolle bedeutet nicht nur eine Person. Vor einer Umsetzung mit paralleler Bearbeitung ist ein Konfliktweg festzulegen; stilles Überschreiben ist damit nicht freigegeben.",
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
                "text": "Laufend, bestätigt, abgelehnt oder ungeklärt",
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
                "text": "Die Vorgangsmeldung steht nach dem Feld und vor den Aktionen. Laufend: «Projekt wird erstellt …» beziehungsweise «Änderungen werden gespeichert …»; erneutes Senden ist blockiert. Meldungen ohne Seitenwechsel erhalten eine abgestimmte Statusansage ohne Fokusübernahme. Nicht jeder Übergang ist ein dringender Alert.",
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
                "text": "Nur bestätigte Annahme führt zur Detailseite des gespeicherten Projekts; dort folgt der Fokus der Seitenüberschrift und die Bestätigung bleibt sichtbar. Ausdrückliche Nichtannahme erhält die Eingabe: belegte Feldursachen am Feld, andere Ursachen beim Vorgang. Ein anderer Name hilft nicht gegen eine Verbindungsstörung.",
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
                "text": "Ohne eindeutige Antwort: «Es ist noch unklar, ob das Projekt erstellt wurde» beziehungsweise «Es ist noch unklar, ob die Änderungen gespeichert wurden». Keine Zeitüberschreitung macht daraus einen sicheren Fehler. Statusklärung mit Bezug zum ursprünglichen Vorgang ist eine erforderliche, noch nicht verfügbare Integrationsschnittstelle. Im Entwurf als Voraussetzung markieren, nicht als bedienbare Funktion. Kein erfundener Supportweg, kein Wiederholen, keine Bestätigung anhand einer möglicherweise veralteten Liste. Ein Status-Endpunkt wird erst bei der Umsetzung spezifiziert.",
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
                "text": "Abbrechen, verlassen und zurückkehren",
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
                "text": "Bei unverändertem Bearbeiten führt «Abbrechen» direkt zur Detailseite; bei unverändert leerem Erstellen zur Liste. q/status bleiben erhalten. Bei ungespeicherten Änderungen fragt jeder interne Rückweg: «Ungespeicherte Änderungen verwerfen?» mit «Weiterbearbeiten» und «Verwerfen». Erstellen vergleicht dabei mit dem leeren Ausgangswert. Weiterbearbeiten erhält den Entwurf und führt den Fokus zum Auslöser zurück; Verwerfen führt beim Bearbeiten zum Detail, beim Erstellen zur Liste.",
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
                "text": "Lokale Präzisierung vom 20.11.2026: Ein bereits unbekannter Speicherausgang hat Vorrang vor der Dirty-Regel. Hier gibt es kein «Verwerfen» und keinen erneuten Speicherversuch. Beim Verlassen lautet die Nachfrage «Speicherstand ungeklärt. Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden.» Aktionen: «Auf Seite bleiben» und «Seite verlassen»; anfänglicher Fokus auf «Auf Seite bleiben». Bleiben erhält Eingabe und Vorgangsbezug, Escape bedeutet Bleiben. Verlassen bestätigt weder Erfolg noch Nichtannahme. Bei Rückkehr bleibt Bearbeiten oder erneutes Senden gesperrt, bis die noch bereitzustellende Statusklärung einen bestätigten Ausgang liefert.",
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
                "text": "Browser-Zurück zwischen den Projektseiten innerhalb der Anwendung folgt demselben Schutz wie ein interner Rückweg: vor Übermittlung die Dirty-Nachfrage, während laufendem oder unbekanntem Vorgang die Verlassenswarnung. Navigation ausserhalb der Anwendung, Reload und Schliessen sind davon nicht abgesichert. Bei regulärem Öffnen von Detail oder Formular sowie nach bestätigtem Speichern, sauberem Abbrechen oder Verwerfen zum Detail erhält die Zielüberschrift den Fokus. Abbruch einer Erstellung führt zur Ergebnisüberschrift der Liste; Suchkriterien bleiben erhalten.",
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
                "text": "Vor der Entscheidung klar sagen: «Die ungespeicherten Angaben gehen verloren.» Der Pilot hat keinen dauerhaften Entwurf. Neuladen, Schliessen oder Sitzungsende kann lokale Angaben verlieren; keine Wiederherstellung versprechen. Interne Abbruchbestätigung ist keine Zusage für Browser-Reload.",
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
                "text": "Während Übermittlung heisst der Rückweg «Seite verlassen», nicht «Vorgang abbrechen». Warnung: «Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden.» Lokales Verwerfen stoppt keinen Serverauftrag. Bei Rückkehr ohne Bestätigung bleibt der Ausgang ungeklärt; kein automatisches Senden. Die dafür benötigte Statusklärung ist weiterhin offen.",
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
                "text": "Breite und schmale Darstellung",
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
                "text": "Web in de-CH: einspaltiger Seiteninhalt, Überschrift und Kontext vor dem Feld, Vorgangsmeldung vor den Aktionen. Desktop zeigt die Hauptaktion «Projekt erstellen» beziehungsweise «Änderungen speichern» zuerst, danach «Abbrechen». Unter 640 px verfügbarer Inhaltsbreite stehen dieselben Aktionen in derselben Lese- und Fokusreihenfolge untereinander.",
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
                "text": "Keine fixierte Aktionsleiste. Hilfe, Fehler und lange Namen umbrechen; bei Bildschirmtastatur und geringer Höhe bleibt vertikales Scrollen möglich. Feldfokus darf nicht verdeckt werden. Der Verwerfendialog zeigt die Folge vor «Weiterbearbeiten» und «Verwerfen»; Weiterbearbeiten erhält den anfänglichen Fokus. Escape schliesst nur diese Nachfrage und verwirft nichts.",
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
                "text": "Arbeitsstand und gezielte Abnahme",
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
                "text": "Lokale Gestaltungsreferenz; die unabhängige Prüfung steht aus. Die vorhandene Input-/Button-Demo zeigt weder diesen Formularweg noch Speicherung, Dirty-Erkennung, Verwerfendialog oder Statusklärung. Die bestehenden lokalen Input-Regeln SET_VALUE und NATIVE_INPUT betreffen Werte, nicht Speicherannahme oder Konflikte; Escape im Feld verwirft den Entwurf nicht.",
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
                "text": "Noch auszuführen: leer und überlang absenden; kombinierte Unicode-Zeichen an der Grenze prüfen; Fehler beim Blur korrigieren; Ausgangswert ändern und wiederherstellen; identisch speichern ohne Anfrage; Dirty-Abbruch in beiden Varianten; bestätigte Speicherung mit Suchrückweg; Ablehnung mit Werterhalt; verlorene Antwort und Rückkehr während Übermittlung. Tastatur-, Screenreader-, Zoom- und Touch-Prüfung an der späteren Umsetzung bleiben offen. Mehrfeld- und Mehrschrittprüfungen gehören nicht zu diesem Piloten.",
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
                "text": "Geltung, Texte und technische Grenze",
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
                  "url": "/systems/shadcn/gestaltungs-pilot",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Gestaltungs-Pilot · gemeinsamer Umfang und Entscheidungsstand",
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
                    "text": "Content Design · erhaltene Meldungsvergleiche und Pilotgrenze",
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
                  "url": "/systems/shadcn/barrierefreiheit",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Barrierefreiheit · bestehende Prüfaufträge, noch keine Funktionsabnahme",
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
                  "url": "/systems/shadcn/components/input",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Input · bestehende Vorschau und technischer Draft-Contract",
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
                  "url": "https://www.w3.org/WAI/tutorials/forms/notifications/",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "WAI Forms Tutorial · Quelle der bestehenden Studie, kein neuer Quellenreview",
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
 expectedUpdatedAt:"2026-11-20T08:04:53.615Z",
 summary:'Einen Projektnamen erfassen, prüfen und den Speicherausgang verständlich zeigen.',
 content:[
  text("example","Projekt erstellen",["Zustand ansehen", "Statische Vorschau · Die Auswahl zeigt Zustandsbilder. Das Feld ist schreibgeschützt; die abgebildeten Aktionen senden und speichern nichts.", "Projektname (erforderlich)", "1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.", "Formularaktionen"]),
  text("phases","Vom Entwurf zur Bestätigung",["Eingabe", "Name als Entwurf erfassen.", "Prüfung", "Absenden prüft den aktuellen Wert.", "Speichern", "Übermittlung läuft: noch kein Erfolg.", "Bestätigung", "Nur bestätigte Annahme erlaubt den Erfolgstext."]),
  text("state-input","Eingabe",["Neues Kundenportal", "Der Name ist ein Entwurf. Erst «Projekt erstellen» prüft und übermittelt.", "Projekt erstellen", "Abbrechen"]),
  text("state-error","Feldfehler",["", "Einen Projektnamen eingeben.", "Projekt erstellen", "Abbrechen", "Nach erfolglosem Absenden: Wert erhalten, Fokus zum Feld. Danach nur das fehlerhafte Feld beim Verlassen erneut prüfen."]),
  text("state-dirty","Ungespeichert geändert",["Neues Kundenportal", "Ungespeicherte Änderungen verwerfen?", "Weiterbearbeiten", "Verwerfen", "Die ungespeicherten Angaben gehen verloren. Diese Nachfrage gilt vor einer Übermittlung; beim Bearbeiten zählt der randgetrimmte Vergleich mit dem bestätigten Ausgangswert."]),
  text("state-saving","Übermittlung läuft",["Neues Kundenportal", "Projekt wird erstellt …", "Projekt erstellen", "Seite verlassen", "Erneutes Senden ist blockiert. Beim Verlassen: Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden."]),
  text("state-confirmed","Annahme bestätigt",["Neues Kundenportal", "Projekt erstellt", "Zur Detailseite", "", "Dieses Zustandsbild setzt eine bestätigte Annahme voraus. Die Vorschau hat kein Projekt erstellt. In der Anwendung folgt die Detailseite mit Bestätigung und erhaltenem Suchkontext q/status."]),
  text("state-rejected","Ausdrücklich abgelehnt",["Neues Kundenportal", "Der Auftrag wurde nicht angenommen.", "", "", "Belegte Feldursache am Feld erklären; Berechtigung oder Störung als Vorgangsmeldung. Erneut senden erst nach bestätigter Nichtannahme und behobener Ursache."]),
  text("state-unknown","Ergebnis unbekannt",["Neues Kundenportal", "Es ist noch unklar, ob das Projekt erstellt wurde", "Auf Seite bleiben", "Seite verlassen", "Speicherstand ungeklärt. Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden.", "Vorrang vor ungespeicherten Änderungen: kein Verwerfen, kein erneutes Senden. Statusklärung ist erforderlich, aber noch nicht verfügbar. Bei Rückkehr bleiben Bearbeiten und Senden gesperrt, bis der Ausgang bestätigt ist. Escape bedeutet Bleiben; anfänglicher Fokus auf «Auf Seite bleiben»."]),
  text("rules","Drei Regeln für den Entwurf",["Wert klar begrenzen: 1–80 Unicode-Graphemcluster nach Randtrim. Innere Leerzeichen und Gross-/Kleinschreibung bleiben erhalten; gleiche Namen sind erlaubt.", "Zum richtigen Zeitpunkt prüfen: erst beim Absenden; danach das zuvor fehlerhafte Feld bei Blur. Hilfe und Fehler gehören zum Feld, der Wert bleibt erhalten.", "Ausgänge unterscheiden: laufend, bestätigt, ausdrücklich abgelehnt und unbekannt. Unbekannt hat Vorrang vor Verwerfen und Wiederholen; eine Statusklärung ist noch keine verfügbare Funktion."]),
  text("connections","Layout und Seitentypen",["Das Formular bleibt einspaltig. Die Vorgangsmeldung steht zwischen Feld und Aktionen; unter 640 px verfügbarer Inhaltsbreite folgen Aktionen in gleicher Reihenfolge untereinander."],[["Feldgruppe und Aktionsanordnung · Form Layout", "/systems/shadcn/content-layout-form-layout"], ["Erstellen · create", "/systems/shadcn/page-type-create"], ["Bearbeiten · edit", "/systems/shadcn/page-type-edit"], ["Bestätigtes Ergebnis · detail", "/systems/shadcn/detailseite"]]),
  text("sources","Quellen und Prüfgrenzen",["Grundlage ist der vollständig veröffentlichte CMS-Stand shadcn-formulare-validierung vom 20.11.2026, 08:04:53 UTC. Die lokale Vertragspräzisierung vom 20.11.2026 zu unbekanntem Speicherausgang bleibt unten unverändert erhalten.", "Die Vorschau reduziert die sichtbare Folge auf vier Phasen und zeigt Fehler, Änderungen sowie Speicherausgänge gezielt. Die vollständige achtteilige Studie und alle Anschlussregeln bleiben im Projektvertrag erhalten. Keine neue fachliche Regel, keine Produktfreigabe.", "Keine ausführbare Validierung oder Serverintegration: Speicherung, Statusklärung, sichere Wiederholung, Navigation und Fokusübergänge der späteren Anwendung werden hier nicht nachgewiesen. Die offenen Prüfungen im Projektvertrag bleiben offen."]),
  text("contract","Vollständiger Projektvertrag und Anschluss",["Unveränderter veröffentlichter Stand einschliesslich Erstellstudie, Bearbeitung, Rückwegen und Präzisierung vom 20.11.2026."]),
  ...preserved,
 ] satisfies Page['content'],
}
