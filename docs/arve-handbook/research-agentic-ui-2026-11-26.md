# Interaktive UI in Agentendialogen: Relevanz für Arve

Untersuchung vom 26. November 2026, Repository-Stand `ed02921`. Nur Quellen- und Codeanalyse; kein neuer Prototyp, keine Host-Kompatibilitätstests. Empfehlung und Pilot sind Vorschläge.

## Entscheidung

**Ja, das ist für Arve relevant – zuerst als Gegenstand des UX-Handbuchs, daneben als kleiner zusätzlicher MCP-Zugang.** Der stärkste Anspruch wäre: Arve erklärt nicht nur herkömmliche Screens, sondern auch, wie Menschen mit Agenten über Auswahl, Rückfragen, Vorschauen und Bestätigungen zusammenarbeiten. Eine interaktive Darstellung im Chat kann diese Regeln anschliessend selbst nutzen.

Dafür braucht Arve zunächst weder einen eigenen Chat noch einen Schreibzugang zum CMS. A2UI ist eine mögliche spätere Ausgabeform, keine Voraussetzung für die fachliche Struktur.

## Was bereits vorhanden ist

- `src/app/mcp/route.ts`: ausschließlich lesende Tools; veröffentlichte Seiten, Suche, Seitenbaum, Komponenten, Plattformnachweise und importierte Bibliotheks-Skills. Antworten enthalten Text und `structuredContent`. Keine `ui://`-Ressourcen, MCP-App-Metadaten, Elicitation oder Autorenoperationen.
- `src/docs/mcp-reads.ts`: begrenzte Abrufe, Fortsetzungen und Prüfungen gegen Seiten-Snapshot/Contract-Revision. Das ist eine brauchbare Datengrundlage für zusätzliche Ansichten.
- `src/docs/authoring-skills.ts` und `src/docs/arve-guide.tsx`: Autoren-Skills sind Originaldateien im Repository und Portal, noch nicht über MCP verfügbar. Der beschriebene Arbeitsweg trennt Quellenbefund, Vorschlag, Teamentscheidung und Veröffentlichung.
- `.agents/skills/arve-color-handbook/SKILL.md`: kleine Fragebündel, sichtbare offene Entscheidungen, Optionen bei fehlender Orientierung; Schweigen ist keine Entscheidung. `.agents/skills/arve-pattern-handbook/SKILL.md` behandelt Korrektur, Abbruch, unbekannte Ergebnisse und Grenzen von Beispielen bereits allgemein.
- `src/collections/Pages.ts`: Payload-Entwürfe, Versionen und redaktioneller Stand. Ein angeklickter UI-Vorschlag wäre noch keine gespeicherte oder veröffentlichte Regel.
- GitHub Pages bleibt eine statische Referenz ohne MCP-Dienst. Das muss auch nach einer Erweiterung funktionieren.

## Drei unterschiedliche Aufgaben

| Bereich | Konkreter Nutzen | Empfehlung |
| --- | --- | --- |
| **Wissen anwenden** | Ein Agent zeigt passende Patterns oder Komponenten als kleine Auswahl mit Einsatzregel, Status und Quelle. Der Mensch kann vergleichen und gezielt Details öffnen. | Kleiner MCP-App-Pilot, bestehende Lese-Tools erhalten. |
| **Wissen erarbeiten** | Bei einer offenen Farb- oder Bedienregel zeigt eine Entscheidungskarte zwei Varianten, ihre Wirkung und „Noch offen“. Auswahl und Begründung gehen zurück ins Gespräch. | Zweiter Schritt nach Autoren-Skill-Zugang über MCP; zunächst ohne Speicherung im CMS. |
| **Agentische Interaktion dokumentieren** | Teams brauchen Regeln dafür, welche Frage als Text, Auswahl, Formular oder Vorschau sinnvoll ist und was eine Aktion tatsächlich bewirkt. | Jetzt als plattformneutrale Pattern-Familie planen. Das ist Arves dauerhaftester Beitrag. |

## Welche Patterns das Handbuch ergänzen sollte

Ein gemeinsamer Einstieg **„Interaktion mit Agenten“** unter UX-Patterns, danach nur bei genügend Inhalt eigene Unterseiten. Kein Protokoll als Gliederungsschlüssel.

- **Auswählen und eingrenzen:** passende Optionen, sichtbare Auswahl, Mehrfachauswahl, Alternative in eigenen Worten, keine unbemerkte Vorauswahl mit Entscheidungswirkung.
- **Rückfragen und Regeln klären:** Frage mit Kontext, Quellenbefund gegenüber Vorschlag, „nicht bekannt“ und „noch offen“, gezielte nächste Frage statt vollständigem Fragebogen.
- **Vorschauen und überarbeiten:** Entwurf gegenüber geltender Regel, erkennbare Änderungen, direkte Korrektur, erhaltene Arbeit, nachvollziehbare Rückkehr ins Gespräch.
- **Bestätigen und ausführen:** „als Vorschlag wählen“, „als Entwurf speichern“ und „veröffentlichen“ unterscheiden; Geltungsbereich und Auswirkung vor einer folgenreichen Aktion sichtbar machen.
- **Warten, Fehler und Wiederaufnahme:** laufend, abgebrochen, gescheitert und Ergebnis unbekannt unterscheiden; alte Karten bei verändertem Kontext erkennen; wiederholte Aktionen nicht als sicher darstellen.

Querschnitt: Woher kommen Daten und Regeln? Was weiss der Agent nach einer UI-Aktion? Bleiben Antwort, Auswahl und Oberfläche synchron? Was passiert ohne UI-Unterstützung, bei Tastatur-/Screenreader-Nutzung oder auf schmaler Ansicht? Eine Karte darf nicht lediglich im Browser reagieren, während der Agent mit einem anderen Stand weiterarbeitet.

Der vorhandene Pattern-Autoren-Skill liefert den fachlichen Rahmen. Sinnvoll wäre eine gezielte Referenz für diese Familie; noch kein eigenes umfassendes Skill-System und kein Pflichtkatalog für jedes einzelne Pattern.

## Welche Technik wofür passt

**MCP Apps:** Der bestehende Server kann eine vorbereitete HTML-Ansicht als `ui://`-Ressource mit einem Tool verbinden. Die Ansicht kommuniziert über die Host-Brücke. MCP Apps sind frameworkunabhängig; ein React-Widget bindet das konsumierende Produkt nicht an React. Hosts unterscheiden sich in ihren Fähigkeiten. Deshalb UI-Unterstützung aushandeln und denselben fachlichen Inhalt als Text/strukturierte Daten erhalten. Die Ansicht läuft typischerweise im isolierten iframe; das widerspricht nicht der plattformneutralen Wissensbasis. [Offizielle MCP-Apps-Übersicht](https://modelcontextprotocol.io/extensions/apps/overview)

Für den Pilot genügen eine gebündelte Ansicht, ein expliziter Einstieg und die vorhandenen Lesezugänge. UI-Interaktionen können Modellkontext aktualisieren oder Nachrichten auslösen. Ob und wann ein bestimmter Host daraus einen neuen Agentenschritt macht, ist zu testen. Nicht jede Sortierung oder Pagination gehört ins Gespräch. „Nur für Apps sichtbar“ ersetzt keine serverseitige Berechtigungsprüfung. [SDK-Übersicht](https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html)

**Elicitation:** Für schlichte strukturierte Rückfragen existiert bereits eine MCP-Funktion mit begrenzten Formschemas, Akzeptieren, Ablehnen und Abbrechen. Sie legt das konkrete Erscheinungsbild nicht fest. Eine reine Ja/Nein- oder Auswahlfrage rechtfertigt daher noch keine selbst gestaltete Micro-UI; ein visueller Vergleich hingegen schon. Die vorhandene SDK-/Transportversion und die gewählten Hosts müssten vor einer Nutzung gezielt geprüft werden. [MCP-Spezifikation](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2026-07-28/client/elicitation.mdx)

**Generative UI / A2UI:** Generative UI kann bereits die situationsabhängige Auswahl vorbereiteter Komponenten bedeuten; freie Codegenerierung ist nicht nötig. Ein eigener Chat nach dem AI-SDK-Muster wäre ein zusätzlich zu betreibendes Produkt mit Modellanbindung und Gesprächszustand. Aktuell fehlt dafür ein belegter Bedarf. A2UI kann perspektivisch eine deklarative Ausgabe mit passenden Renderern ergänzen. Das offizielle MCP-Muster unterscheidet reines Abrufen von Layout-Daten und einen interaktiven Lifecycle; ein JSON-Abruf allein schafft noch keinen funktionierenden Dialog. [AI SDK](https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces), [A2UI über MCP](https://a2ui.org/guides/a2ui-over-mcp/)

Keine dieser Quellen belegt, dass Arve bereits in einem konkreten Host kompatibel ist. „Läuft überall mit MCP“ wäre eine falsche Aussage. Derselbe fachliche Datensatz sollte für Portal, Textzugang und UI nutzbar bleiben; Transport- und Rendereradapter bleiben austauschbar.

## Kleinster überzeugender Pilot

**„Welches Pattern passt?“ als kompakte Auswahl im bestehenden Agenten-Chat.** Beispielauftrag: „Ich brauche Regeln für ein Formular mit Pflichtfeldern und einer Korrektur nach dem Absenden.“

1. Ein ausdrücklich gewähltes Design-System durchsuchen. Nur tatsächlich gefundene veröffentlichte Treffer anzeigen; keine Auffüllung erfundener Alternativen.
2. Eine kleine, vorbereitete Ansicht zeigt wenige Treffer mit Aufgabe/Einsatzgrenze, redaktionellem Stand und Quellenlink. Details werden mit den vorhandenen Abrufen nachgeladen.
3. „Für diesen Auftrag verwenden“ übergibt die gewählte Quelle samt Snapshot als Arbeitskontext an das Gespräch. Es bestätigt weder die fachliche Gültigkeit noch eine Speicherung oder Veröffentlichung.
4. Bei geändertem Snapshot neu laden. Ohne MCP-App-Unterstützung dieselbe Auswahl als Text/Links anbieten. GitHub Pages braucht keine neue Laufzeit.

**Prüffrage:** Kann eine andere Person das passende Pattern wählen und danach erklären, welche veröffentlichte Regel gilt, welche nur Beispielentscheidung ist und was offen bleibt? Reagiert der Agent nach der Auswahl auf genau diese Quelle?

Prüfen: ein bewusst gewählter unterstützender Host plus ein Text-Client; schmale Ansicht, Tastatur, Fokus, Abbruch, veraltete Karte und fehlende Treffer. UI gegen die heutige Textausgabe vergleichen. Fundstellen, Missverständnisse, Rückfragen und Kontextfehler festhalten – kein vorweggenommenes Effizienz- oder ROI-Versprechen.

## Reihenfolge und Gegenargumente

1. **Jetzt:** Pattern-Familie und eine entsprechende Referenz im Autoren-Skill ausarbeiten. Das nützt auch Swift-/Angular-/React-Teams ohne MCP Apps.
2. **Daneben begrenzter Pilot:** visuelle Pattern-Auswahl als optionale Erweiterung. Bleibt sie nur eine hübschere Trefferliste, ist der bestehende Portal-Link ausreichend. Nur ausbauen, wenn Auswahl oder Quellenverständnis erkennbar besser funktionieren.
3. **Danach:** Autoren-Skills über MCP zugänglich machen und einen visuellen Klärungsdialog testen. Ein Entscheidungsschema darf die freie Arbeit des Agenten und Nutzerantworten nicht in starre Fragebögen pressen.
4. **Später, bei Bedarf:** persistente Entscheidungssitzungen, explizite Übernahme als CMS-Entwurf und alternative Renderer. Dafür Zuständigkeit, Berechtigungen, Versionenkonflikte und nachvollziehbare Speicherung erst konkret klären.

Die Differenzierung liegt weniger in einem neuen Chat als in **nachvollziehbaren UX-Regeln für agentische Interaktion und einer eigenen kleinen Anwendung dieser Regeln**. Eine interaktive Karte macht fehlende Inhalte, unklare Quellen oder schlechte Suche nicht automatisch besser.
