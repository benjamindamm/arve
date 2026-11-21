import type { ReactNode } from 'react'
import type { ComparisonItem } from '../component-comparison-data'
import './data-content.css'

type Specimen = {
  heading?: string; subheading?: string; text?: string; footer?: string
  size?: string; variant?: string; align?: string; mode?: string; kind?: string
  headers?: string[]; rows?: string[][]; totals?: string[]; selected?: boolean; sorted?: boolean
  empty?: boolean; error?: boolean; ratio?: number; orientation?: string
  index?: number; position?: string; status?: string; open?: boolean
  numbered?: boolean; wrap?: boolean; copy?: string; indicator?: string
  reactionSide?: string; reactionAlign?: string; state?: string; tableLabel?: string
}
const owned = new Set('data-table table chart chart-area chart-bar chart-line chart-pie chart-radar chart-radial chart-tooltip card item avatar badge aspect-ratio carousel separator code-block bubble message-scroller attachment marker trace'.split(' '))

function FileIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
}
function Landscape({ label }: { label?: string }) {
  return <svg className="dc-landscape" viewBox="0 0 320 220" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} preserveAspectRatio="xMidYMid slice"><path fill="#e5edf2" d="M0 0h320v220H0z" /><circle cx="236" cy="48" r="21" fill="#f1ce8b" /><path d="M-30 220 103 48 236 220Z" fill="#869eae" /><path d="m103 48-31 41 28-9 20 11 15-2Z" fill="#fafafa" /><path d="M109 220 227 91 350 220Z" fill="#527984" /><path d="m227 91-27 30 26-10 22 3Z" fill="#d5e3e3" /></svg>
}
function DataTable({ data, compact = false }: { data: Specimen; compact?: boolean }) {
  if (data.error) return <p className="dc-error">{data.text}</p>
  return <div className="dc-table-scroll"><table className={compact ? 'dc-table dc-table-compact' : 'dc-table'}>
    <caption>{data.heading}</caption>
    <thead><tr>{data.headers?.map((h, i) => <th key={h} scope="col" aria-sort={data.sorted && i === 0 ? 'ascending' : undefined}>{h}{data.sorted && i === 0 && <span aria-hidden="true"> ↑</span>}</th>)}</tr></thead>
    <tbody>{data.empty ? <tr><td colSpan={data.headers?.length} className="dc-empty-cell">{data.text}</td></tr> : data.rows?.map((row, i) => <tr key={i} className={data.selected && i === 0 ? 'dc-selected' : undefined}>{row.map((cell, j) => j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody>
    {data.totals && <tfoot><tr>{data.totals.map((cell, i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>)}</tr></tfoot>}
  </table>{data.footer && <p className="dc-table-summary">{data.footer}</p>}</div>
}
function Tooltip({ data }: { data: Specimen }) {
  return <div className="dc-tooltip"><strong>{data.heading}</strong><div><span className={`dc-indicator dc-indicator-${data.indicator}`} aria-hidden="true" /><span>{data.text}</span><b>{data.footer}</b></div></div>
}
function Plot({ data }: { data: Specimen }) {
  const rows = data.rows ?? []
  const values = rows.map(row => Number(row[1]))
  const max = Math.max(...rows.map(row => row.slice(1).reduce((sum, value) => sum + Number(value), 0)), 1)
  const colors = ['#2563eb', '#16a34a', '#7c3aed']
  const coords = values.map((value, i) => [40 + i * (240 / Math.max(1, values.length - 1)), 166 - value / max * 120])
  const path = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ')
  const radialPoint = (angle: number, radius: number) => [160 + Math.cos(angle) * radius, 100 + Math.sin(angle) * radius]
  let totalAngle = -Math.PI / 2
  const total = values.reduce((a, b) => a + b, 0) || 1
  const radarPoints = (scale: number, useValues: boolean) => rows.map((_, i) => radialPoint(i / rows.length * 2 * Math.PI - Math.PI / 2, 70 * scale * (useValues ? values[i] / max : 1)).join(',')).join(' ')
  return <div className={`dc-chart dc-chart-${data.kind}`}>
    <svg viewBox="0 0 320 210" className="dc-plot" aria-hidden="true">
      {['bar', 'area', 'line', 'stacked'].includes(data.kind ?? '') && <>
        {[46, 106, 166].map((y, i) => <g key={y}><path d={`M32 ${y}H300`} stroke="#e5e5e5" /><text x="26" y={y + 4} textAnchor="end">{Math.round(max * (1 - i / 2))}</text></g>)}
        {data.kind === 'area' && <path d={`${path} L280 166 L40 166Z`} fill="#2563eb" fillOpacity=".17" />}
        {['line', 'area'].includes(data.kind ?? '') && <><path d={path} fill="none" stroke="#2563eb" strokeWidth="2" />{coords.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" fill="#2563eb" />)}</>}
        {['bar', 'stacked'].includes(data.kind ?? '') && rows.map((row, i) => {
          const x = 48 + i * (244 / rows.length)
          let y = 166
          return <g key={i}>{row.slice(1).map((v, j) => { const height = Number(v) / max * 120; y -= height; return <rect key={j} x={x} y={y} width={Math.min(38, 180 / rows.length)} height={height} rx="2" fill={colors[j % colors.length]} /> })}</g>
        })}
        {rows.map((row, i) => <text key={i} x={['line', 'area'].includes(data.kind ?? '') ? coords[i][0] : 48 + i * (244 / rows.length) + Math.min(38, 180 / rows.length) / 2} y="190" textAnchor="middle">{row[0]}</text>)}
      </>}
      {data.kind === 'pie' && values.map((value, i) => { const start = radialPoint(totalAngle, 76); totalAngle += value / total * 2 * Math.PI; const end = radialPoint(totalAngle, 76); return <path key={i} d={`M160 100 L${start.join(' ')} A76 76 0 ${value / total > .5 ? 1 : 0} 1 ${end.join(' ')}Z`} fill={colors[i % colors.length]} stroke="white" strokeWidth="2" /> })}
      {data.kind === 'radial' && values.map((value, i) => { const radius = 72 - i * 21; const circumference = 2 * Math.PI * radius; return <g key={i} transform="rotate(-90 160 100)"><circle cx="160" cy="100" r={radius} fill="none" stroke="#f5f5f5" strokeWidth="13" /><circle cx="160" cy="100" r={radius} fill="none" stroke={colors[i % colors.length]} strokeWidth="13" strokeDasharray={`${value / max * circumference * .85} ${circumference}`} /></g> })}
      {data.kind === 'radar' && <>{[.5, 1].map(scale => <polygon key={scale} points={radarPoints(scale, false)} fill="none" stroke="#e5e5e5" />)}{rows.map((row, i) => { const [x, y] = radialPoint(i / rows.length * 2 * Math.PI - Math.PI / 2, 91); return <text key={i} x={x} y={y + 4} textAnchor="middle">{row[0]}</text> })}<polygon points={radarPoints(1, true)} fill="#2563eb" fillOpacity=".2" stroke="#2563eb" strokeWidth="2" /></>}
    </svg>
    <details className="dc-chart-values"><summary>{data.tableLabel}</summary><DataTable data={data} compact /></details>
  </div>
}
function Content({ component, data: d }: { component: string; data: Specimen }): ReactNode {
  if (component.startsWith('chart')) {
    if (d.mode === 'tooltip') return <Tooltip data={d} />
    if (d.mode === 'empty' || d.mode === 'error' || d.mode === 'ready-summary') return <div className={`dc-data-feedback ${d.mode === 'error' ? 'dc-error' : ''}`}><strong>{d.heading}</strong><p>{d.text}</p></div>
    return <Plot data={d} />
  }
  if (component === 'table' || component === 'data-table') return <DataTable data={d} />
  if (component === 'card') return <div className={`dc-card dc-size-${d.size}`}><div className="dc-card-header"><strong>{d.heading}</strong><span>{d.subheading}</span></div><p>{d.text}</p><div className="dc-card-footer">{d.footer}</div></div>
  if (component === 'item') return <div className={`dc-item dc-variant-${d.variant} dc-size-${d.size}`}><FileIcon /><div><strong>{d.heading}</strong><p>{d.text}</p></div></div>
  if (component === 'badge') return <span className={`dc-badge dc-variant-${d.variant}`}>{d.text}</span>
  if (component === 'avatar') return <div className="dc-avatar-example"><div className={d.mode === 'group' ? 'dc-avatar-group' : ''}>{(d.mode === 'group' ? [0, 1] : [0]).map(i => <span key={i} className={`dc-avatar dc-size-${d.size ?? 'default'}`} role="img" aria-label={d.heading}>{d.mode === 'loaded' ? <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M0 0h40v40H0z" fill="#d9e4e7" /><circle cx="20" cy="15" r="8" fill="#9a7662" /><path d="M5 40c0-18 30-18 30 0" fill="#527984" /></svg> : d.text}</span>)}{d.mode === 'group' && <span className="dc-avatar dc-avatar-count">{d.footer}</span>}</div><span className="dc-muted">{d.heading}</span></div>
  if (component === 'aspect-ratio') return <div className="dc-ratio" style={{ aspectRatio: d.ratio }}><Landscape label={d.heading} /></div>
  if (component === 'separator') return <div className={`dc-separator-example dc-orientation-${d.orientation}`}><span>{d.heading}</span><div className="dc-separator" role="separator" aria-orientation={d.orientation === 'vertical' ? 'vertical' : 'horizontal'} /><span>{d.text}</span></div>
  if (component === 'marker') return <div className={`dc-marker dc-variant-${d.variant}`}><span>{d.text}</span></div>
  if (component === 'bubble') return <div className={`dc-bubble-example dc-align-${d.align}`}><span className="dc-muted">{d.heading}</span><div className={`dc-bubble dc-variant-${d.variant}`}><p>{d.text}</p>{d.reactionSide && <span className={`dc-reactions dc-side-${d.reactionSide} dc-align-${d.reactionAlign}`}>{d.footer}</span>}</div></div>
  if (component === 'carousel') return <div className={`dc-carousel dc-orientation-${d.orientation}`}><div className="dc-carousel-track"><span aria-hidden="true" className={d.index === 0 ? 'dc-unavailable' : ''}>{d.orientation === 'vertical' ? '↑' : '←'}</span><div className="dc-slide"><strong>{d.heading}</strong><span>{d.text}</span></div><span aria-hidden="true" className={d.index === 2 ? 'dc-unavailable' : ''}>{d.orientation === 'vertical' ? '↓' : '→'}</span></div><p className="dc-muted">{d.footer}</p></div>
  if (component === 'code-block' && d.mode === 'copy-header') return <div className="dc-code dc-copy-preview"><div className="dc-code-header"><strong>{d.heading}</strong><span className="dc-copy-label">{d.copy}</span></div></div>
  if (component === 'code-block') return <div className={`dc-code dc-size-${d.size} dc-variant-${d.variant}`}><div className="dc-code-header"><strong>{d.heading}</strong>{d.copy && <span className="dc-copy-label">{d.copy}</span>}</div><pre className={d.wrap ? 'dc-wrap' : undefined} dir="ltr"><code>{d.rows?.map((row, i) => <span key={i} className={`dc-code-line dc-line-${i === 1 ? 'added' : i === 2 ? 'removed' : i === 3 ? 'highlighted' : 'default'}`}>{d.numbered && <span className="dc-code-number" aria-hidden="true">{row[0]}</span>}<span>{row[1]}</span>{'\n'}</span>)}</code></pre><p className="dc-code-footer">{d.footer}</p></div>
  if (component === 'attachment') return <div className={`dc-attachment dc-size-${d.size} dc-orientation-${d.orientation} dc-state-${d.state}`}><div className="dc-attachment-media">{d.orientation === 'vertical' ? <Landscape /> : <FileIcon />}</div><div className="dc-attachment-content"><strong>{d.heading}</strong><span>{d.text}</span></div></div>
  if (component === 'message-scroller') return <div className={`dc-scroller dc-position-${d.position}`}><strong className="dc-scroller-heading">{d.heading}</strong>{d.position === 'empty' ? <p>{d.text}</p> : <><div className="dc-scroller-window">{d.rows?.map((row, i) => <div key={i} className="dc-message"><strong>{row[0]}</strong><p>{row[1]}</p></div>)}</div>{d.position && <span className="dc-scroll-direction" aria-hidden="true">{d.position === 'following-end' ? '↑' : d.position === 'pending' ? '↕' : '↓'}</span>}</>}{d.footer && <p className="dc-muted">{d.footer}</p>}</div>
  if (component === 'trace') return <div className={`dc-trace dc-status-${d.status}`}><div className="dc-trace-line"><span aria-hidden="true">{d.status === 'error' ? '!' : d.status === 'running' ? '◌' : d.status === 'pending' ? '○' : '◇'}</span><div><strong>{d.heading}</strong><span>{d.text}</span></div>{typeof d.open === 'boolean' && <span aria-hidden="true">{d.open ? '⌄' : '›'}</span>}</div>{d.open && <p className="dc-trace-panel">{d.footer}</p>}</div>
  return null
}
export function DataContentSpecimen({ component, groupId, item }: { component: string; groupId: string; item: ComparisonItem }): ReactNode {
  if (!owned.has(component)) return null
  let data: Specimen
  try { data = JSON.parse(item.value ?? '{}') as Specimen } catch { return null }
  return <div className="comparison-data-content" data-component={component} data-comparison-group={groupId}><Content component={component} data={data} /></div>
}
