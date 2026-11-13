export function TemplateContent({ sections }: {
  sections: { key: string; label: string; text: string }[]
}) {
  return sections.map(({ key, label, text }) => (
    <section className="component-section" key={key}>
      <h2>{label}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
    </section>
  ))
}
