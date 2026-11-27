import {CopyTextButton} from './copy-text-button'

const importCommands='npm run contracts:import -- /pfad/zum/export\nnpm run contracts:import -- /pfad/zum/export --apply'

export function UIContractsGuide(){
  return <>
    <p>UI Contracts beschreibt Schnittstelle, Gestaltung, Verhalten und Barrierefreiheit einer Komponente in strukturierten Dateien. Verknüpft ihr diese mit dem Handbuch, können Teams und Agenten die Gestaltungsregeln zusammen mit dem zugehörigen Contract lesen.</p>
    <h2>In drei Schritten verbinden</h2>
    <ol>
      <li><strong>Paket importieren.</strong> Eine Person mit Zugriff auf das Arve-Projekt prüft und installiert den Export. Seiten werden dabei nicht verändert.</li>
      <li><strong>Bibliothek bereitstellen.</strong> Als Herausgeber im CMS unter „Erweiterungen → Contract-Bibliotheken“ das Design-System, die Bibliothek und eine Revision wählen.</li>
      <li><strong>Seite zuordnen.</strong> Auf der Komponentenseite unter „UI Contracts · optional“ den passenden Contract wählen. Entwurf speichern, prüfen und veröffentlichen.</li>
    </ol>
    <p>Die Namen dürfen abweichen: Eine Seite „Schaltfläche“ kann auf den Contract „Button“ verweisen. Die Zuordnung wird ausdrücklich gewählt.</p>
    <h2>Dateien und Zuordnungen</h2>
    <p>Pakete und Registry bleiben als versionierte Dateien im Arve-Projekt. Die Datenbank speichert ihre Zuordnungen zu Systemen und Seiten. Das CMS dient zum Auswählen und Verknüpfen.</p>
    <details className="guide-more">
      <summary>Paketimport im Projektordner</summary>
      <p>Die erste Zeile prüft, die zweite installiert. Den Pfad durch den Ordner des vollständigen Exportpakets ersetzen.</p>
      <div className="guide-command"><pre><code>{importCommands}</code></pre><CopyTextButton value={importCommands} label="Importbefehle kopieren"/></div>
      <p>Das ui-contracts-Repository muss danach nicht erreichbar sein. Die technische Einrichtung steht in der <a href="https://github.com/benjamindamm/arve#ui-contracts-anbinden">README</a>.</p>
    </details>
  </>
}
