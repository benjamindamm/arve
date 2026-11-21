import './layout-width-diagram.css'

type Range = { label: string; columns: number; spans?: number[] }
/** An annotation of this renderer's actual CSS, not a simulated browser window. */
export function LayoutWidthDiagram({ ranges, note }: { ranges: Range[]; note: string }) {
  return <figure className="layout-width-diagram"><figcaption>{note}</figcaption><div className="lwd-ranges">{ranges.map(range => <div key={range.label}>
    <strong>{range.label}</strong><div className="lwd-grid" style={{ gridTemplateColumns: `repeat(${range.columns}, minmax(0,1fr))` }} aria-hidden="true">{(range.spans ?? Array.from({ length: range.columns }, () => 1)).map((span,index) => <i key={index} style={{ gridColumn: `span ${span}` }}>{span}</i>)}</div>
  </div>)}</div></figure>
}
