import type { Page } from '../../../src/payload-types'

type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (blockName: string, title: string, ...paragraphs: string[]): Block => ({
  blockType: 'text', blockName,
  body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(value => ({ ...base, type: 'paragraph', children: [node(value)] })),
  ] } },
})

// Stable block names are the component-template contract. See docs/handbook/component-template.
// The renderer adds static illustrations; all editorial claims remain available in CMS text.
export const release = {
  expectedUpdatedAt: '2026-11-21T09:14:01.482Z',
  summary: 'Ein Button löst eine Handlung aus. Benenne ihr Ergebnis und mache die wichtigste Aktion gut erkennbar.',
  content: [
    text('usage', 'Button oder Link?',
      'Button: «Änderungen speichern» führt eine Handlung aus. Link: «Zur Projektübersicht» öffnet ein Navigationsziel.',
      'Für auswählbare Optionen verwende Checkbox, Switch oder Toggle. Der Button selbst hält keinen ausgewählten Wert.'),
    text('example', 'Button ausprobieren',
      'Vergleiche Default und Outline. Aktiviere den Button per Klick oder Tastatur und schalte «Deaktiviert» ein.',
      'Dieses bedienbare Spartan-Beispiel zeigt nur Default, Outline und disabled. «Rechnung herunterladen» meldet die Aktivierung; es wird keine Rechnung heruntergeladen.'),
    text('anatomy', 'Aufbau und Aktionsgruppen',
      'Die stabilen Teile sind die Bedienfläche (control) und ein optionales Icon (icon). Die Beschriftung ist Inhalt des Buttons, kein eigener exportierter Teil. Sichtbarer Text nennt die Handlung und bildet beim nativen Button den zugänglichen Namen.',
      'Ein Icon kann den Text ergänzen. Steht es allein, braucht der Button einen zugänglichen Namen über aria-label oder aria-labelledby.',
      'In einer Aktionsgruppe erhält die nächste wichtige Handlung mehr Gewicht. Hier: «Änderungen speichern» mit Default, «Abbrechen» mit Outline. Das ist eine redaktionelle Empfehlung für diese Situation, keine feste Zuordnung für jeden Ablauf.'),
    text('variants', 'Variante und Grösse wählen',
      'Die React-Schnittstelle beschreibt sechs Varianten: default, outline, secondary, ghost, destructive und link. Die Standardvariante ist default. Auch die Variante link bleibt ein Aktionsbutton; sie macht daraus keinen Navigationslink.',
      'Acht Grössen sind beschrieben: default, xs, sm, lg, icon, icon-xs, icon-sm und icon-lg. Die Standardgrösse ist default. Die vier icon-Grössen brauchen bei reinem Symbolinhalt ebenfalls einen zugänglichen Namen.',
      'Die 32 Contract-Fixtures beschreiben alle sechs Varianten mit Grunddarstellung, Hover, Tastaturfokus und Deaktivierung. Weitere Fälle zeigen die zusätzlichen Grössen sowie eine gerundete Form über className. Das sind semantische HTML-/CSS-Referenzen mit benannten Prüfschritten. Die lokale Angular-Demo bietet weiterhin nur Default und Outline; sie prüft diese weiteren Fälle nicht.'),
    text('states', 'Zustände und Rückmeldungen',
      'Bereit: Eine native Aktivierung ruft onClick auf. Das Zustandsmodell unterscheidet enabled und disabled; Fokus und Escape führen dort keine eigene Aktion aus.',
      'Fokus: Die aktuelle Tastaturposition muss sichtbar sein. Die Fixtures benennen Hover- und Tastaturfokus-Schritte; die CSS-Regeln verwenden :hover und :focus-visible. Das sind keine zusätzlichen SCXML-Zustände.',
      'Deaktiviert: Der Button unterdrückt die Aktivierung. Erkläre fehlende Voraussetzungen bei Bedarf neben dem Button, damit die Erklärung auch ohne Hover erreichbar ist.',
      'Danach: Fortschritt, Erfolg und Fehler gehören zum umgebenden Ablauf. Der Contract modelliert keinen eigenen Lade- oder Erfolgszustand. Verhindere unbeabsichtigte Wiederholungen und führe den Fokus passend weiter, etwa beim Öffnen eines Dialogs.'),
    text('labels', 'Verständlich beschriften',
      'Gut: «Änderungen speichern» benennt Handlung und Gegenstand.',
      'Vermeiden: «Hier klicken» beschreibt die Bedienung, aber nicht das Ergebnis.',
      'Plane Platz für lange Übersetzungen ein. Die Contract-CSS erlaubt Textumbruch und verwendet eine Mindesthöhe statt einer festen Höhe. Prüfe mehrzeilige Beschriftungen im konkreten Layout. Wenn eine Aktionsgruppe zu breit wird, ordne die Buttons untereinander an.'),
    text('keyboard', 'Mit der Tastatur erreichbar',
      'Tab folgt der nativen Fokusreihenfolge. Enter und Leertaste aktivieren den nativen Button. Deaktivierte Buttons werden standardmässig übersprungen.',
      'Die React-Option focusableWhenDisabled macht einen deaktivierten Button weiterhin mit Tab erreichbar. Die Primitive verwendet dafür aria-disabled und unterdrückt die Aktivierung. aria-disabled allein ersetzt diese Verhaltenslogik nicht.',
      'Prüfe die sichtbare Fokusmarkierung, den zugänglichen Namen und die Aktivierung im Zielkontext. Die vorliegenden Quellen sind keine allgemeine Abnahme für Screenreader, Touch oder native Apps.'),
    text('semantics', 'Formulare und besondere Einbindungen',
      'Der React-Button verwendet standardmässig type="button". type="submit" sendet das zugeordnete Formular ab, type="reset" setzt es zurück. Die native form-Zuordnung bestimmt das Formular; onClick ist kein eigenes Formularwert-Ereignis.',
      'Dieser Export bindet die Base-UI-Variante von shadcn. Sie verwendet render und nativeButton, nicht das asChild-Muster anderer shadcn-Stände. nativeButton=false kennzeichnet einen anderen Root mit Buttonsemantik. Die gebundene Dokumentation schliesst einen Link über render ausdrücklich aus: Navigation bleibt ein Link.',
      'Formularprüfung, Fehlermeldungen, Rückmeldungen nach der Aktion und Fokusführung im anschliessenden Ablauf verantwortet die Anwendung. Wähle Submit und Reset bewusst und prüfe ihr Verhalten mit dem zugehörigen Formular.'),
    text('sources', 'Grundlage dieser Seite',
      'Aktueller Seitencontract: shadcn-Export 30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90, Button 0.4.2. complete bezeichnet die abgeschlossene Quellenreferenz im beschriebenen React-Profil; release bleibt false.',
      'React ist die Originalreferenz. Spartan ist die Angular-Referenz desselben Designs. Die lokale Demo behält ihren historischen Contractbezug; sie wird durch die neue Seitenreferenz nicht automatisch auf diesen Stand geprüft.',
      'Die Vergleiche auf dieser Seite sind redaktionelle, statische Illustrationen und werden nicht aus Contract-Tokens erzeugt. Die semantischen Darstellungswerte stehen in layout.css und tokens.css. Die Importkette bindet fonts.css und die zugehörigen Schriftdateien ein. Native Figma-Muster und ihre Zuordnung bleiben gesonderte Quellbelege.',
      'Plattformstand, Implementierungsbezug und technische Originaldateien folgen unterhalb.'),
  ] satisfies Page['content'],
}
