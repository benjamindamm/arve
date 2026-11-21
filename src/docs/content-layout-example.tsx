import Link from 'next/link'
import { HandbookPreview } from './handbook-preview'
import { contentLayout } from './content-layouts'

function Specimen({ kind }: { kind: string }) {
  if (kind === 'label-value') return <dl className="cl-pairs">
    <div><dt>Projektname <small>Beschriftung</small></dt><dd>Neugestaltung des Kundenportals für mehrere Geschäftsbereiche <small>Wert · langer Inhalt</small></dd></div>
    <div><dt>Status</dt><dd>Aktiv</dd></div><div><dt>Beschreibung</dt><dd>Nicht angegeben <small>Fehlender Wert</small></dd></div>
  </dl>
  if (kind === 'form-layout') return <div className="cl-form">
    <div><span className="cl-label">Projektname (erforderlich) <small>Label</small></span><div className="cl-input">Neues Kundenportal</div><p className="cl-help">1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.</p></div>
    <div><span className="cl-label">Projektname (erforderlich)</span><div className="cl-input cl-invalid"> </div><p className="cl-help">1 bis 80 Zeichen.</p><p className="cl-error">Einen Projektnamen eingeben. <small>Fehler</small></p></div>
    <p className="cl-note">Die zweite Feldgruppe zeigt denselben Feldtyp mit Fehler.</p>
    <div className="cl-actions"><span className="cl-primary">Änderungen speichern</span><span className="cl-secondary">Abbrechen</span></div>
  </div>
  return <div className="cl-card"><div className="cl-card-header"><div><h3>Aktuelle Projekte und geplante Arbeiten <small>Titel</small></h3><p>Alle aktiven Projekte dieses Arbeitsbereichs. <small>Beschreibung</small></p></div><span className="cl-secondary">Alle anzeigen</span></div><div className="cl-card-body">Inhalt der Card</div></div>
}
export function ContentLayoutExample({ section }: { section: string }) {
 const layout=contentLayout(section)
 if(!layout)return null
 return <section className="content-layout-example" aria-label="Beschriftete Layoutbeispiele">
  <HandbookPreview description="Statisches Anordnungsbeispiel · Aktionen nicht bedienbar" wide={<figure className="cl-view cl-wide"><figcaption><strong>Breit</strong><p>{layout.wide}</p></figcaption><div className="cl-stage"><Specimen kind={layout.slug}/></div></figure>} narrow={<figure className="cl-view cl-narrow"><figcaption><strong>Schmal</strong><p>{layout.narrow}</p></figcaption><div className="cl-stage"><Specimen kind={layout.slug}/></div></figure>} />
  <h2>Bei langen oder fehlenden Inhalten</h2><p>{layout.stress}</p>
  <p>{layout.related.map((item,index)=><span key={item.section}>{index>0 && ' · '}<Link href={'/systems/shadcn/'+item.section}>{item.label}</Link></span>)}</p>
 </section>
}
