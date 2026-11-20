import type { Page } from '../../../src/payload-types'
import { foundationsRelease } from '../foundations-release'

type Block = NonNullable<Page['content']>[number]
const node = (text: string) => ({ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' })
function section(blockName: string, title: string, ...paragraphs: string[]): Block {
  return { blockType: 'text', blockName, body: { root: {
    type: 'root', version: 1, direction: 'ltr', format: '', indent: 0,
    children: [{ type: 'heading', tag: 'h2', version: 1, children: [node(title)] }, ...paragraphs.map(text => ({ type: 'paragraph', version: 1, children: [node(text)] }))],
  } } }
}
// The published source was read through get_documentation_page on 20.11.2026.
// Retain its study and complete supporting text unchanged in the expandable reference.
const original = foundationsRelease.find(page => page.slug === 'shadcn-typografie')!
export const release = {
  expectedUpdatedAt: '2026-11-17T23:33:02.458Z',
  summary: 'Titel, Lesetext und Hilfe klar unterscheiden und mit langen Inhalten prüfen.',
  content: [
    section('type-example', 'Gestaltungsbeispiel',
      'Angaben prüfen',
      'Prüfe deine Kontaktangaben, bevor du die Änderungen bestätigst.',
      'So erreichen wir dich',
      'Kontaktadresse',
      'alexandra.mueller@example.org',
      'Wir verwenden diese Adresse nur für Nachrichten zu deinem Konto.',
      'Angaben für die internationale Arbeitsgemeinschaft zur nachhaltigen Quartierentwicklung prüfen',
      'Prüfe die Kontaktangaben für alle beteiligten Personen. Bei einer Änderung informieren wir die zuständige Kontaktperson über die eingetragene Adresse. Deine bisherigen Angaben bleiben bis zur Bestätigung erhalten.',
      'Wenn eine Organisation mehrere Standorte hat, verwende die Adresse der zuständigen Ansprechperson. So erreichen Rückfragen die richtige Stelle und die Beteiligten können die Angaben gemeinsam überprüfen.'),
    section('type-probes', 'Lesbarkeit ausprobieren',
      'Lange Inhalte', 'Textabstände erhöhen', 'Text auf 200 %', 'Systemschrift vergleichen',
      'Die Schalter verändern nur das Beispiel. Text auf 200 % ist eine lokale Textprobe; Browserzoom und Umbruch bei schmaler Ansicht müssen zusätzlich geprüft werden.',
      'Bei erhöhten Textabständen: Zeilenhöhe 1,5, Absatzabstand 2 em, Zeichenabstand 0,12 em, Wortabstand 0,16 em. Diese Werte sind eine Prüfsituation nach WCAG 1.4.12, keine Standardvorgabe.'),
    section('type-roles', 'Welche Rolle übernimmt der Text?',
      'Titel', 'Benennt die Aufgabe. Im Beispiel: «Angaben prüfen».',
      'Abschnittstitel', 'Bündelt zusammengehörige Angaben. Im Beispiel: «So erreichen wir dich».',
      'Lesetext', 'Erklärt einen Gedanken pro Absatz; auf breiten Flächen mit begrenzter Zeilenlänge.',
      'Label und Hilfe', 'Label benennt die Angabe. Hilfe erklärt sie direkt am zugehörigen Wert und bleibt gut lesbar.'),
    section('type-rules', 'Drei Regeln für den Entwurf',
      'Gleicher Rang, gleiche Behandlung: Die sichtbare Hierarchie und die Überschriftenstruktur müssen zusammenpassen. Schriftgrösse allein macht noch keine Überschrift.',
      'Wenige deutliche Unterschiede: Titel, Abschnitt und Lesetext genügen oft. Verkleinere wichtige Hilfe nicht, um eine weitere Abstufung zu erzeugen.',
      'Inhalt bestimmt die Höhe: Lange Namen, Übersetzungen und vergrösserter Text umbrechen vollständig. Keine feste Texthöhe und keine Auslassung ohne erreichbaren Volltext.'),
    section('type-numbers', 'Beträge vergleichen',
      'Grundbetrag', '1’240.00', 'Zusatz', '28.50', 'Total', '1’268.50',
      'Rechtsbündige Beträge mit gleich breiten Ziffern machen Stellen vergleichbar. Währung und Trennzeichen legt der Nutzungskontext fest; das Beispiel definiert kein allgemeines Zahlenformat.'),
    section('type-status', 'Stand und Prüfgrenzen',
      'Gestaltungsbeispiel · lokale Textproben bedienbar · systemweite Rollenskala offen',
      'Schriftgrössen und Zeilenlängen im Beispiel sind redaktionelle Darstellungswerte. Der lokale Export belegt Inter sowie 14 px / 20 px für Input; daraus folgt keine allgemeine Fliesstextskala.',
      'Prüfe im Produkt Browserzoom, schmale Ansichten, Textabstände, tatsächliche Schriftladung und Fallbackschrift. Die lokale 200%-Probe und der Systemschriftvergleich ersetzen diese Prüfungen nicht.'),
    section('type-details', 'Quellen und vollständige Herleitung',
      'Die ursprüngliche Studie und ihre Regeln bleiben hier vollständig erhalten. shadcn ist die Referenzimplementierung; die Studie legt keine globale Typografieskala fest.'),
    ...original.content as Block[],
  ],
} satisfies Pick<Page, 'summary' | 'content'> & { expectedUpdatedAt: string }
