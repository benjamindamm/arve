import type { ReactNode } from 'react'
import './component-studies.css'

export type ComponentStudyKind = 'selection' | 'button' | 'input' | 'checkbox' | 'switch'
export type ComponentStudyProps = {
  kind: ComponentStudyKind
  title: string
  explanation: string
  source?: string
  revision?: string
}

function Action({ children, quiet = false }: { children: ReactNode; quiet?: boolean }) {
  return <span className={`cs-action${quiet ? ' cs-action-quiet' : ''}`}>{children}</span>
}
function Mark({ checked = false }: { checked?: boolean }) {
  return <span className={`cs-mark${checked ? ' cs-mark-checked' : ''}`} aria-hidden="true">{checked ? '✓' : ''}</span>
}
function Toggle({ on = false }: { on?: boolean }) {
  return <span className={`cs-toggle${on ? ' cs-toggle-on' : ''}`} aria-hidden="true"><span /></span>
}
function Selection() {
  return <div className="cs-decisions">
    {[
      ['Handlung', 'Button', 'Änderungen speichern', 'Löst etwas aus. Der Button selbst hält keinen Auswahlwert.', 'button'],
      ['Freier Wert', 'Input', 'Projektname: Jahresbericht', 'Erfasst einen kurzen, einzeiligen Text. Feste Werte benötigen eine Auswahl.', 'input'],
      ['Unabhängige Option', 'Checkbox', '✓ Tabellen einschliessen', 'Hält eine Ja/Nein-Auswahl. Mehrere unabhängige Optionen dürfen zugleich gelten.', 'checkbox'],
      ['Einstellung', 'Switch', 'Benachrichtigungen · Ein', 'Zeigt einen Ein-/Aus-Zustand. Wann die Änderung wirkt, muss im Ablauf klar sein.', 'switch'],
    ].map(([task, name, sample, meaning, path]) => <section key={name}>
      <p className="cs-eyebrow">{task}</p><h3><a href={`/systems/shadcn/components/${path}`}>{name}</a></h3>
      <p className="cs-sample-text">{sample}</p><p>{meaning}</p>
    </section>)}
  </div>
}
function Button() {
  return <>
    <div className="cs-action-context">
      <div><p className="cs-eyebrow">Gleiche Handlung, andere Gewichtung</p><h3>Änderungen abschliessen</h3><p>Die hervorgehobene Handlung führt weiter. Abbrechen bleibt erreichbar.</p>
        <div className="cs-actions"><Action>Änderungen speichern</Action><Action quiet>Abbrechen</Action></div>
      </div>
      <aside><h3>Ein anderes Ziel öffnen</h3><p className="cs-link-specimen">Projektübersicht öffnen →</p><p>Ein Navigationsziel ist ein Link. Das Aussehen allein entscheidet nicht über die Bedeutung.</p></aside>
    </div>
    <div className="cs-emphasis"><div><h3>Default</h3><Action>Änderungen speichern</Action><p>Stärkeres Gewicht für die nächste wichtige Handlung.</p></div><div><h3>Outline</h3><Action quiet>Änderungen speichern</Action><p>Ruhigeres Gewicht; dieselbe verständliche Beschriftung.</p></div></div>
    <ol className="cs-sequence"><li><strong>Bereit</strong><p>Die Handlung und ihre Folge sind verständlich.</p></li><li><strong>Fokus</strong><p>Die aktuelle Tastaturposition bleibt sichtbar.</p></li><li><strong>Ausgelöst</strong><p>Der folgende Ablauf zeigt Fortschritt oder Ergebnis.</p></li></ol>
    <p className="cs-boundary">Laden, Erfolg und Fehler gehören zum Ablauf. Diese Studie fügt dem lokalen Button keine solchen Fähigkeiten hinzu.</p>
  </>
}
function Field({ title, value, note, focus = false, error = false, unavailable = false }: { title: string; value: string; note: string; focus?: boolean; error?: boolean; unavailable?: boolean }) {
  return <section className="cs-field-example"><h3>{title}</h3><p className="cs-field-label">Projektname</p><div className={`cs-field${focus ? ' cs-focus' : ''}${unavailable ? ' cs-unavailable' : ''}`}>{value}</div><p className={error ? 'cs-error' : 'cs-help'}>{note}</p></section>
}
function Input() {
  return <>
    <div className="cs-anatomy"><div className="cs-paper"><p className="cs-field-label"><b>1</b> Projektname</p><div className="cs-field"><b>2</b> Jahresbericht</div><p className="cs-help"><b>3</b> Ein Name, den dein Team wiedererkennt.</p></div><ol><li><strong>Dauerhaftes Label</strong><p>Benennt den erwarteten Wert, auch nach der Eingabe.</p></li><li><strong>Eingabe</strong><p>Enthält den Wert. Ein Platzhalter wäre nur ein Beispiel.</p></li><li><strong>Hilfe am Feld</strong><p>Erklärt nur, was über das Label hinaus benötigt wird.</p></li></ol></div>
    <div className="cs-fields">
      <Field title="Leer" value="Noch kein Wert" note="Das Label bleibt sichtbar." />
      <Field title="Gefüllt · langer Wert" value="Jahresbericht für die gemeinsame Projektplanung" note="Im echten einzeiligen Feld bleibt der gesamte Wert durch Bearbeiten und horizontales Bewegen erreichbar. Dieses statische Textbild bricht für die Lesbarkeit um." />
      <Field title="Fokussiert" value="Jahresbericht" focus note="Die aktuelle Eingabestelle ist erkennbar." />
      <Field title="Fehler und Fokus" value="Jahresbericht" focus error note="Dieser Name ist bereits vergeben. Wähle einen anderen Namen. · Kompositionsziel" />
      <Field title="Schreibgeschützt" value="Jahresbericht" note="Der Wert ist relevant, kann hier aber nicht geändert werden. · Noch zu spezifizieren" />
      <Field title="Deaktiviert" value="Noch kein Wert" unavailable note="Wähle zuerst einen Arbeitsbereich. Der Grund steht ausserhalb des Felds." />
    </div>
    <p className="cs-boundary">Die Felder sind statische Zustandsbilder. Hilfe, Fehler und Schreibschutz sind Gestaltungsziele; die bestehende Live-Demo zeigt Label, Texteingabe und Deaktivierung.</p>
  </>
}
function Checkbox() {
  return <>
    <div className="cs-choice-layout"><section className="cs-paper"><p className="cs-eyebrow">Unabhängige Auswahl</p><h3>Was soll der Export enthalten?</h3><ul className="cs-options"><li><Mark checked /><span>Tabellen <small>Ausgewählt</small></span></li><li><Mark /><span>Abbildungen <small>Nicht ausgewählt</small></span></li><li><Mark checked /><span>Ausführliche Erläuterungen für das gesamte Projektteam <small>Ausgewählt</small></span></li></ul><p>Mehrere Optionen dürfen zugleich gelten. Diese Gruppe ist eine Gestaltungsstudie.</p></section><section><h3>Genau eine aus mehreren?</h3><p>Wenn sich Antworten gegenseitig ausschliessen, ist eine exklusive Auswahl passend. Die vorhandene Checkbox wird dadurch nicht zu einer Radio-Gruppe.</p><h3>Nur eine Option?</h3><p>Auch eine einzelne unabhängige Bestätigung kann eine Checkbox sein.</p></section></div>
    <dl className="cs-binary"><div><dt><Mark /> Nicht ausgewählt</dt><dd>Die Option ist nicht gesetzt.</dd></div><div><dt><Mark checked /> Ausgewählt</dt><dd>Die Option ist gesetzt.</dd></div></dl>
    <div className="cs-focus-choice"><span className="cs-focus"><Mark checked /></span><p><strong>Auswahl und Fokus gleichzeitig</strong><br />Die Markierung bleibt beim Fokuswechsel erhalten. Der Fokus zeigt zusätzlich die aktuelle Bedienposition.</p></div>
    <aside className="cs-boundary"><h3>«Alle auswählen» braucht mehr</h3><p>Keine, einige und alle ausgewählt beschreiben eine Gruppe. «Einige» benötigt gegebenenfalls einen gemischten Zustand. Der lokale Contract ist binär; Gruppensteuerung und Mischzustand sind hier nicht implementiert.</p></aside>
  </>
}
function Switch() {
  return <>
    <div className="cs-settings"><section><h3>Aus</h3><div className="cs-setting"><span>Benachrichtigungen</span><Toggle /></div><p>Die Einstellung ist ausgeschaltet.</p></section><section><h3>Ein</h3><div className="cs-setting"><span>Benachrichtigungen</span><Toggle on /></div><p>Die Einstellung ist eingeschaltet.</p></section></div>
    <p>Das Label bleibt in beiden Zuständen gleich. Eine zusätzliche Beschreibung erklärt die Wirkung.</p>
    <h3>Eine Änderung muss ankommen</h3><ol className="cs-sequence"><li><strong>Ausgangszustand: Aus</strong><p>Die Person schaltet ein.</p></li><li><strong>Wird übernommen</strong><p>Die Oberfläche macht die ausstehende Übernahme erkennbar.</p></li><li><strong>Bestätigt: Ein</strong><p>Die Rückmeldung stimmt mit dem gespeicherten Zustand überein.</p></li></ol>
    <div className="cs-recovery"><strong>Wenn die Übernahme fehlschlägt</strong><p>«Die Änderung konnte nicht gespeichert werden. Benachrichtigungen bleiben ausgeschaltet.» Biete einen verständlichen Weg zur Wiederholung.</p></div>
    <p className="cs-boundary">Dies ist ein Ablaufentwurf, keine Speicherfunktion der Vorschau. Ob die Oberfläche den neuen Zustand sofort oder erst nach Bestätigung zeigt, muss das Produkt festlegen. Ein unbekannter Zustand ist nicht «Aus».</p>
  </>
}
const studies: Record<ComponentStudyKind, () => ReactNode> = { selection: Selection, button: Button, input: Input, checkbox: Checkbox, switch: Switch }

export function ComponentStudy({ kind, title, explanation, source, revision }: ComponentStudyProps) {
  const Study = studies[kind]
  return <figure className={`component-study cs-${kind}`}>
    <figcaption><p className="cs-eyebrow">Gestaltungsstudie · shadcn-Referenz · keine Live-Demo</p><h2>{title}</h2><p>Die Beispiele erklären Entscheidungen. Sie sind keine bedienbaren Komponenten und kein Nachweis einer Implementierungsfreigabe.</p></figcaption>
    <Study />
    <details className="cs-text-version"><summary>Vollständige Textfassung der Studie</summary><p>{explanation}</p></details>
    {(source || revision) && <footer className="cs-source">{source && <p>{source}</p>}{revision && <p>Referenzstand: <code>{revision}</code></p>}</footer>}
  </figure>
}
