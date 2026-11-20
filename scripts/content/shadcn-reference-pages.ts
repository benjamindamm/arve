import type { Page } from '../../src/payload-types'

type Reference = {
  slug: string; parent: string; title: string; summary: string
  pageType: 'foundation' | 'component' | 'pattern' | 'layout'
  fields: Record<string, string>
  sections: [string, string][]
  links: [string, string][]
  do: string; dont: string
}

// Editorial proposals: these are deliberately drafts, not upstream rules or implementation evidence.
export const references: Reference[] = [
  {
    slug: 'shadcn-farben', parent: 'shadcn-grundlagen', title: 'Farben und Tokens', pageType: 'foundation',
    summary: 'Farbe vermittelt Hierarchie, Interaktion und Status. Wähle Rollen statt einzelner Farbwerte.',
    fields: {
      purpose: 'Gilt für die visuelle Gestaltung dieses shadcn-Referenzimplementierungs auf dem Web. Die Rollen lassen sich auf andere Plattformen übertragen; konkrete native Farbwerte und ihre Prüfung sind noch offen. Die folgenden Auswahlregeln sind ein redaktioneller Vorschlag für Arve.',
      roles: 'Grundfläche: background mit foreground. Abgesetzter Inhalt: card mit card-foreground. Schwebender Inhalt: popover mit popover-foreground. Hervorgehobene Aktion: primary mit primary-foreground. Unterstützende Flächen: secondary oder muted mit dem zugehörigen foreground. Fokus: ring. Destruktive Aktionen: destructive. shadcn beschreibt diese semantischen Rollen; die Aufgabenverteilung im jeweiligen Produkt muss dazu passen.',
      source: 'Die shadcn-Theming-Dokumentation belegt die Rollennamen und ihre Paarbildung. Verbindliche lokale Werte gehören in die versionierte Token-Quelle des Systems. Diese Seite führt bewusst keine zweite, manuell gepflegte Farbwertliste. Die Zuordnung von Designvariablen zu lokalem Token-Export sowie geprüfte Kontrastpaare fehlen noch.',
      accessibility: 'Bedeutung muss auch ohne Farbwahrnehmung erkennbar sein: Status erhält Text, Auswahl eine zusätzliche Markierung und Fehler eine konkrete Meldung. Prüfe Text, Symbole, Feldgrenzen und Fokus auf ihren tatsächlichen Hintergründen. Die Prüfung muss jedes angebotene Theme und relevante Interaktionszustände umfassen; aus dem Rollennamen folgt keine bestandene Kontrastprüfung.',
    },
    sections: [
      ['Eine Farbe auswählen', 'Beginne mit der Aufgabe: Ist die Fläche Hintergrund, ein zusammengehöriger Inhaltsbereich oder eine schwebende Ebene? Wähle danach das zugehörige Textpaar. Bestimme erst anschliessend, ob eine Aktion Hervorhebung braucht. Eine dekorative Markenfläche darf nicht wie eine anklickbare Hauptaktion aussehen.'],
      ['Hierarchie erhalten', 'Redaktionelle Empfehlung: Reserviere starke Hervorhebung für die nächste wichtige Handlung im jeweiligen Aufgabenkontext. Nutze ruhigere Flächen für ergänzende Informationen. Mehrere nebeneinanderliegende Cards brauchen nicht automatisch verschiedene Farben; Überschrift, Abstand und Gruppierung können die Gliederung übernehmen.'],
      ['Status und Interaktion unterscheiden', 'Fehler, Erfolg und Warnung beschreiben einen Sachverhalt. Hover, Fokus und Auswahl beschreiben Bedienung. Ein fehlerhaftes Feld muss zusätzlich einen sichtbaren Fokus zeigen können. Eine ausgewählte Zeile darf nicht wie eine Fehlermeldung aussehen. Für Erfolg und Warnung ist in diesem Referenzsystem noch eine eigene Rollenentscheidung nötig; chart-Farben sind dafür keine automatische Freigabe.'],
      ['Themes als zusammenhängendes System', 'Ein dunkles Theme braucht dieselben Bedeutungen, aber eigene geprüfte Kombinationen. Farben nicht pauschal invertieren. Betrachte auch verschachtelte Flächen, Overlays und deaktivierte Inhalte. Falls ein Produkt nur ein Theme anbietet, dokumentiere diesen Geltungsbereich ausdrücklich.'],
      ['Gestaltungsreview', 'Vergleiche Grundfläche, Card und Overlay mit identischem Inhalt. Prüfe danach ein Feld mit Fokus und Fehler zugleich sowie eine ausgewählte Option. Lässt sich jede Bedeutung ohne Farbnamen erklären? Sind unterstützende Texte lesbar? Halte die tatsächlichen Farbpaare und Messungen beim Token-Stand fest.'],
      ['Noch zu entscheiden', 'Lokale Palette und Theme-Umfang, Erfolg/Warnung/Information, Zuordnung zur Designbibliothek und visuell annotierte Farbpaare. Diese offenen Punkte verhindern eine Freigabe als vollständige Farbspezifikation.'],
    ],
    links: [['Quelle: shadcn Theming', 'https://ui.shadcn.com/docs/theming'], ['Verwandt: Themes und Zustände', '/systems/shadcn/themes-und-zustaende'], ['Verwandt: Barrierefreiheit', '/systems/shadcn/barrierefreiheit']],
    do: 'Nutze für eine Card das zusammengehörige Flächen- und Textpaar. Zeige bei Fehlern zusätzlich einen verständlichen Text.',
    dont: 'Nutze Rot und Grün nicht als einzige Unterscheidung für fehlerhaft und erfolgreich. Übernimm keine Chart-Farbe allein wegen ihres Aussehens als Statusfarbe.',
  },
  {
    slug: 'shadcn-input', parent: 'shadcn-komponenten', title: 'Input', pageType: 'component',
    summary: 'Einzeilige Eingaben für kurze, frei formulierbare Werte. Beschriftung, Hilfe und Rückmeldung gehören dazu.',
    fields: {
      usage: 'Nutze Input, wenn Menschen einen kurzen Wert kennen und selbst eingeben können. Für längere Texte passt Textarea; für verbindliche Optionen eine Auswahl. Eine Suche benötigt zusätzlich ein Suchverhalten und eine Ergebnisdarstellung. Diese Alternativen sind Entscheidungshilfen, keine Aussage über lokal verfügbare Implementierungen.',
      anatomy: 'Ein vollständiges Feld umfasst dauerhaft sichtbares Label, Eingabebereich, bei Bedarf einen Hinweis und bei Fehlern eine Korrekturhilfe. shadcn zeigt Input zusammen mit Field, Label und Description sowie ungültige und deaktivierte Varianten. Zusätze wie Einheiten dürfen die Bedeutung des Labels nicht ersetzen.',
      states: 'Entwirf leer, gefüllt, fokussiert, ungültig, schreibgeschützt und deaktiviert bewusst getrennt. Fokus und Fehler können gleichzeitig gelten. Schreibgeschützt bedeutet: Wert ist relevant, kann hier aber nicht geändert werden. Deaktiviert bedeutet: Eingabe steht derzeit nicht zur Verfügung; ein wichtiger Grund muss ausserhalb des deaktivierten Elements lesbar sein.',
      accessibility: 'Label und Feld müssen zusammengehören. Ein Platzhalter ist nur ein Beispiel, kein Label. Tastaturfokus bleibt sichtbar. Hinweise und Fehler müssen am Feld wahrnehmbar sein. Prüfe Eingabe, Auswahl, Kopieren und Korrektur mit Tastatur und Screenreader. Auf Touch-Geräten darf die Bildschirmtastatur weder Feld noch Fehler verdecken.',
      verification: 'Vorhandene Spartan-Vorschau und verlinkte Contractrevision bleiben bestehen. Diese neue UX-Beschreibung ist ein Entwurf; ihr Abgleich mit allen Zuständen der lokalen Implementierung ist noch offen. Sie bestätigt weder native iOS-/Android-Unterstützung noch eine vollständige Barrierefreiheitsprüfung. Technische Zustände und Schnittstellen bleiben im Contract.',
    },
    sections: [
      ['Vor dem Zeichnen entscheiden', 'Kläre zunächst: Welcher Wert wird benötigt, weshalb und in welcher Form kennen ihn Menschen? Vermeide Pflichtfelder ohne begründeten Bedarf. Wenn mehrere Antwortformen verständlich und fachlich gleichwertig sind, sollte das Produkt sie akzeptieren statt eine unnötig enge Schreibweise zu verlangen.'],
      ['Labels und Hilfetexte', 'Redaktionelle Empfehlung: Das Label benennt den erwarteten Wert kurz und ohne Handlungsanweisung. Der Hilfetext erklärt eine ungewöhnliche Anforderung oder Verwendung. Eine Einheit wie kg muss dauerhaft erkennbar bleiben. Kennzeichne Pflicht und Optional konsistent für das gesamte Formular; erkläre eine verwendete Markierung vor der Eingabe.'],
      ['Breite und Anordnung', 'Die Feldbreite darf die erwartete Eingabelänge andeuten, aber nicht die tatsächlich zulässige Länge begrenzen. Gruppiere zusammengehörige Felder. Auf schmalen Flächen sollen Labels, Hinweise und Fehlermeldungen umbrechen; die Leserichtung darf nicht zwischen Spalten hin- und herspringen. Lange Werte bleiben erreichbar und bearbeitbar.'],
      ['Fehler korrigieren', 'Die Meldung benennt Problem und nächsten Schritt. Redaktionelle Musterformulierung: «Gib eine E-Mail-Adresse mit @ ein.» statt «Ungültiger Wert». Ob die Eingabe leer, falsch formatiert oder fachlich nicht akzeptiert ist, muss unterscheidbar bleiben. Der Zeitpunkt und Ablauf der Prüfung stehen im Pattern Formularvalidierung.'],
      ['Review am konkreten Feld', 'Prüfe ein leeres und ein vorausgefülltes Feld, einen langen Wert, Einfügen aus der Zwischenablage sowie Fokus mit gleichzeitigem Fehler. Kann eine Person ohne Platzhalter erklären, was erwartet wird? Bleiben Label und Meldung bei Vergrösserung lesbar? Ist bei deaktiviertem Zustand klar, wie es weitergeht?'],
      ['Noch zu entscheiden', 'Die Grössen und Abstände aus dem lokalen Token-Stand zuordnen. Schreibgeschützt, deaktiviert und ungültig mit der konkreten Spartan-Implementierung abgleichen. Eine annotierte Anatomie und die dokumentierten Zustandsansichten ergänzen.'],
    ],
    links: [['Quelle: shadcn Input', 'https://ui.shadcn.com/docs/components/base/input'], ['Quelle: WAI – Eingaben validieren', 'https://www.w3.org/WAI/tutorials/forms/validation/'], ['Verwandt: Formularvalidierung', '/systems/shadcn/formulare-validierung'], ['Verwandt: Auswahl und Suche', '/systems/shadcn/auswahl-und-suche']],
    do: 'Zeige Label, erwartetes Format und Korrekturhilfe dort, wo die Eingabe stattfindet. Bewahre den eingegebenen Wert bei einem Fehler.',
    dont: 'Nutze keinen Platzhalter als einzige Beschriftung. Verwende kein freies Textfeld, wenn nur Werte einer verbindlichen Liste erlaubt sind.',
  },
  {
    slug: 'shadcn-formulare-validierung', parent: 'shadcn-patterns', title: 'Formulare und Validierung', pageType: 'pattern',
    summary: 'Menschen sicher von der Eingabe zur bestätigten Übermittlung führen – einschliesslich Korrektur und Wiederaufnahme.',
    fields: {
      task: 'Eine Person übermittelt mehrere zusammengehörige Angaben und muss erkennen können, ob diese angenommen wurden. Das Pattern deckt Eingabe, Prüfung, Korrektur, Übermittlung und Ergebnis ab. Die Regeln zum Prüfzeitpunkt sind ein redaktioneller Vorschlag für dieses Referenzsystem.',
      usage: 'Nutze ein Formular für Angaben, die gemeinsam bestätigt werden. Eine sofort wirksame Einstellung braucht einen anderen Ablauf. Bei langen oder voneinander abhängigen Aufgaben prüfe mehrere Schritte mit Rückweg und Erhalt der Angaben; nicht jede Gruppe braucht eine eigene Seite.',
      flow: '1. Zweck und erforderliche Angaben verstehen. 2. Felder in aufgabenbezogener Reihenfolge ausfüllen. 3. Mit einer klar benannten Aktion absenden. 4. Fehler gezielt korrigieren oder den Versand abwarten. 5. Erfolg und nächsten Schritt erkennen. Beteiligt sind Felder, passende Auswahlkomponenten, eine Hauptaktion, Inline-Meldungen und bei mehreren Fehlern eine Zusammenfassung.',
      states: 'Ausgangszustand, Bearbeitung, lokale Fehler, Übermittlung, fachliche Ablehnung, Verbindungsfehler und Erfolg getrennt gestalten. Bei einer unklaren Serverantwort darf die Oberfläche nicht behaupten, dass nichts gespeichert wurde. Ein sicherer erneuter Versuch und die Erkennung einer doppelten Übermittlung sind mit dem Produktteam zu klären.',
      accessibility: 'Fehler müssen verständlich, dem Feld zugeordnet und gezielt erreichbar sein. Eine Fehlerübersicht nennt die betroffenen Labels und führt zu den Feldern. Neue Rückmeldungen müssen auch ohne visuelle Suche wahrnehmbar sein. Fokus darf bei der Korrektur nicht durch laufende Prüfungen versetzt werden. Die konkrete Semantik und Zustandslogik wird im Contract festgehalten.',
    },
    sections: [
      ['Eingabe vorbereiten', 'Frage nur Informationen ab, die für die Aufgabe notwendig sind. Stelle Bedingungen und besondere Formate vor der Eingabe bereit. Gruppiere nach dem Verständnis der Menschen, nicht nach dem Datenmodell. Plane eine gemeinsame Kennzeichnung für Pflichtangaben.'],
      ['Wann wird geprüft?', 'Vorgeschlagene Hausregel: Beim ersten Öffnen noch keine Fehler anzeigen. Nach Absenden die relevanten Angaben prüfen. Eine frühere Prüfung nach Verlassen eines bereits bearbeiteten Felds nur einsetzen, wenn sie eine konkrete Korrektur ermöglicht. Während eine Person einen Wert aufbaut, soll keine Meldung jeden Zwischenstand beanstanden. Bei bereits gemeldetem Fehler darf eine erneute Prüfung die erfolgreiche Korrektur zeitnah bestätigen.'],
      ['Korrigieren ohne Verlust', 'Die WAI empfiehlt kurze Korrekturhinweise und eine Übersicht mit Verweisen auf betroffene Felder. Unsere ergänzende Regel: Gültige Eingaben bleiben erhalten. Unterscheide fehlende Angaben, Formatfehler und fachliche Ablehnung. Ein Dienstproblem wird als solches erklärt und nicht einem Feld angelastet, dessen Inhalt korrekt sein kann.'],
      ['Absenden und Ergebnis', 'Redaktionelle Empfehlung: Die Aktion nennt das Ergebnis, etwa «Änderungen speichern». Während der Übermittlung ist klar, dass die Anfrage bearbeitet wird. Verhindere unbeabsichtigtes wiederholtes Absenden, ohne den gesamten Inhalt unlesbar zu machen. Bestätige Erfolg erst nach bestätigter Annahme und erkläre, wo das Ergebnis wiedergefunden wird.'],
      ['Abbruch und Wiederaufnahme', 'Lege fest, ob Zurückgehen oder Abbrechen Angaben verwirft. Warne bei tatsächlichem Verlust relevanter Änderungen und biete einen klaren Rückweg. Entwürfe, automatische Speicherung und Wiederaufnahme brauchen eine sichtbare Erklärung; sie dürfen nicht allein aus einem erfolgreichen Feldcheck abgeleitet werden.'],
      ['Review des gesamten Wegs', 'Gehe einen erfolgreichen Ablauf, mehrere fehlerhafte Felder, einen korrigierten Fehler, einen Netzwerkausfall und den Rückweg durch. Wiederhole den Weg mit Tastatur, schmalem Bildschirm und langen Fehlermeldungen. Eine Person muss jederzeit beantworten können: Was fehlt, was wurde gespeichert und was kann ich jetzt tun?'],
      ['Noch zu entscheiden', 'Hausregel zum Prüfzeitpunkt, Fokusziel nach fehlgeschlagenem Absenden und Verhalten bei unklarer Übermittlung mit Produkt und Barrierefreiheitsreview festlegen. Diese Punkte sind hier Vorschläge, keine geprüften Fähigkeiten der bestehenden Demo.'],
    ],
    links: [['Quelle: WAI – Rückmeldungen', 'https://www.w3.org/WAI/tutorials/forms/notifications/'], ['Quelle: WAI – Validierung', 'https://www.w3.org/WAI/tutorials/forms/validation/'], ['Verwandt: Input', '/systems/shadcn/components/input'], ['Verwandt: Systemzustände', '/systems/shadcn/systemzustaende']],
    do: 'Zeige nach fehlgeschlagenem Absenden einen verständlichen Weg zu den betroffenen Feldern und erhalte die übrigen Angaben.',
    dont: 'Verwende «Etwas ist schiefgelaufen» nicht für einen konkret benennbaren Eingabefehler. Melde Erfolg nicht schon beim Start der Übermittlung.',
  },
  {
    slug: 'shadcn-detailseite', parent: 'shadcn-layout', title: 'Detailseite', pageType: 'layout',
    summary: 'Ein Objekt verstehen, seinen Stand erkennen und die passende nächste Handlung finden.',
    fields: {
      purpose: 'Geeignet für einen einzelnen Gegenstand mit umfangreicherem Hauptinhalt und ergänzenden Informationen. Für den Vergleich vieler Gegenstände ist eine Liste oder Übersicht geeigneter. Diese Seite ist ein eigener Layoutvorschlag für Arve, keine offizielle shadcn-Layoutvorgabe.',
      regions: 'Reihenfolge: Kontextnavigation, Seitentitel mit Identität und Status, relevante Aktionen, Hauptinhalt, ergänzende Informationen. Navigation beantwortet «Wo bin ich?», der Titel «Was sehe ich?», der Aktionsbereich «Was kann ich tun?». Zusatzinformationen dürfen nichts enthalten, das zum Verstehen des Hauptinhalts zwingend vorher benötigt wird.',
      grid: 'Breiter Bildschirm: ein dreiteiliges Raster mit zwei Anteilen für Hauptinhalt und einem für die ergänzende Card. Das Verhältnis ist eine Startvariante, keine starre Pixelvorgabe. Der Container begrenzt die Gesamtbreite. Inhalte erhalten passende innere Abstände; einzelne Felder oder Absätze werden nicht jeweils in eigene Cards verpackt.',
      responsive: 'Sobald Hauptinhalt oder Zusatzbereich zu schmal werden, werden sie untereinander angeordnet. Entscheidend sind Inhalt, Textvergrösserung und verfügbare Breite, nicht Gerätebezeichnungen. Die Zusatz-Card folgt dem Hauptinhalt. Wesentliche Aktionen bleiben erreichbar. Eine seitlich haftende Card ist optional und muss bei wenig Höhe oder Platz wieder normal mitlaufen.',
      accessibility: 'Visuelle und tatsächliche Lesereihenfolge stimmen überein. Überschriften gliedern Haupt- und Zusatzinformationen. Navigation und Aktionen sind verständlich benannt. Haftende Bereiche dürfen weder fokussierte Elemente noch Inhalt verdecken. Prüfe lange Titel, mehrzeilige Aktionen, Vergrösserung und Tastaturbedienung.',
    },
    sections: [
      ['Inhalt vor Raster', 'Ordne Informationen nach der Aufgabe: Was muss zuerst verstanden werden, was unterstützt die Entscheidung, was wird nur gelegentlich gebraucht? Eine wichtige Frist gehört gegebenenfalls in den Kopf oder Hauptinhalt statt ausschliesslich in die Randspalte. Erst diese Gewichtung bestimmt die Flächenverteilung.'],
      ['Header und Navigation', 'Zeige einen eindeutigen Titel und bei Bedarf einen erklärenden Status. Ein Rückweg zur Übersicht sollte deren Kontext erhalten, wenn das Produkt dies unterstützt. Nutze Unterseiten für eigenständige Ziele; Tabs nur für gleichrangige Ansichten desselben Objekts. Verstecke keine notwendige Prozessreihenfolge in frei wählbaren Tabs.'],
      ['Hauptbereich und Zusatz-Card', 'Der Hauptbereich enthält die Informationen und Bearbeitung, wegen derer die Seite geöffnet wurde. Die Zusatz-Card kann Metadaten, Verantwortung oder hilfreiche nächste Schritte bündeln. Sie braucht eine eigene Überschrift. Wenn ihr Inhalt genauso wichtig oder umfangreich wie der Hauptbereich ist, überdenke die Aufteilung statt beide Bereiche in das Verhältnis 2:1 zu zwingen.'],
      ['Aktionen gewichten', 'Gib der nächsten sinnvollen Handlung eine erkennbare Priorität. Seltene Nebenaktionen können zurücktreten, müssen aber auffindbar bleiben. Destruktive Aktionen dürfen nicht mit dem üblichen Fortschritt verwechselt werden. Bei Bearbeitung ist erkennbar, welche Änderungen bereits gespeichert sind und welche eine Bestätigung benötigen.'],
      ['Laden, fehlend und nicht zugänglich', 'Unterscheide einen noch ladenden Inhalt, ein nicht mehr vorhandenes Objekt und fehlende Zugriffsrechte. Zeige keinen leeren Rahmen als fertige Detailseite. Kann nur ein Teil nicht geladen werden, sollte er den verfügbaren Hauptinhalt nicht ohne Grund verdrängen. Ob sensible Metadaten sichtbar bleiben dürfen, entscheidet die Produktberechtigung.'],
      ['Review und Plattformgrenze', 'Prüfe einen kurzen und einen mehrzeiligen Titel, lange Zusatzinformationen, fehlende optionale Metadaten und eine schmale Ansicht. Web auf Desktop und Mobilgeräten nutzt hier dasselbe Inhaltsmodell. Native iOS-/Android-Navigation und plattformspezifische Aktionen sind noch gesondert zu gestalten; diese Seite belegt keine native Implementierung.'],
      ['Noch zu entscheiden', 'Konkrete Container- und Abstandstokens, der inhaltsabhängige Umbruch sowie Regeln für haftende Bereiche müssen mit realistischem Inhalt geprüft werden. Das bestehende Layoutbeispiel veranschaulicht die Anordnung; es ist kein Nachweis für diese vollständigen UX-Regeln.'],
    ],
    links: [['Bestehendes Beispiel: Detailansicht', '/systems/shadcn/layout/detail'], ['Verwandt: Seitenstruktur und Navigation', '/systems/shadcn/seitenstruktur-und-navigation'], ['Verwandt: Abstände', '/systems/shadcn/abstaende'], ['Verwandt: Systemzustände', '/systems/shadcn/systemzustaende']],
    do: 'Ordne den Hauptinhalt und die ergänzende Card nach Bedeutung. Lass die Randspalte bei wenig Platz in den normalen Lesefluss wechseln.',
    dont: 'Halte eine Zusatz-Card nicht um jeden Preis fest. Verberge keine entscheidungsrelevanten Informationen ausschliesslich in einer schmalen Randspalte.',
  },
]

const base = { version: 1, direction: 'ltr', format: '', indent: 0 } as const
const text = (value: string) => ({ type: 'text', version: 1, text: value, detail: 0, format: 0, mode: 'normal', style: '' })
export function referenceData(ref: Reference): Partial<Page> {
  const children = [
    { ...base, type: 'paragraph', children: [text('Redaktioneller Entwurf · Referenzsystem shadcn. Quellenbelegte Grundlagen und vorgeschlagene Hausregeln sind unten getrennt benannt. Offene Prüfungen sind keine Freigabe.')] },
    ...ref.sections.flatMap(([heading, paragraph]) => [
      { ...base, type: 'heading', tag: 'h2', children: [text(heading)] },
      { ...base, type: 'paragraph', children: [text(paragraph)] },
    ]),
    { ...base, type: 'heading', tag: 'h2', children: [text('Quellen und verwandte Seiten')] },
    ...ref.links.map(([label, url]) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { linkType: 'custom', url, newTab: false }, children: [text(label)] }] })),
  ]
  return {
    title: ref.title, summary: ref.summary, pageType: ref.pageType,
    template: { [ref.pageType]: ref.fields },
    content: [
      { blockType: 'text', body: { root: { ...base, type: 'root', children } } },
      { blockType: 'guideline', recommendation: 'do', explanation: ref.do },
      { blockType: 'guideline', recommendation: 'dont', explanation: ref.dont },
    ],
    _status: 'draft',
  }
}
