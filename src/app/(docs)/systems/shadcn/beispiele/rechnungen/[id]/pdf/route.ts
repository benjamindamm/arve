import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { findInvoice, formatAmount, formatDate, statuses } from '../../../../../../../../docs/invoices/data'

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const invoice = findInvoice(id)
  if (!invoice) return new Response('Rechnung nicht gefunden', { status: 404 })

  const pdf = await PDFDocument.create()
  pdf.setTitle('Musterrechnung ' + invoice.id)
  const page = pdf.addPage([595, 842])
  const font = await pdf.embedFont(StandardFonts.Helvetica)
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold)
  const ink = rgb(.09, .09, .11)
  page.drawText('Kundenportal / Musterbeleg', { x: 48, y: 782, size: 12, font, color: ink })
  page.drawText('Rechnung ' + invoice.id, { x: 48, y: 724, size: 30, font: bold, color: ink })
  page.drawLine({ start: { x: 48, y: 701 }, end: { x: 547, y: 701 }, color: rgb(.85, .85, .88) })
  for (const [index, [label, value]] of [
    ['Beschreibung', invoice.title],
    ['Datum', formatDate(invoice.date)],
    ['Status', statuses[invoice.status]],
    ['Betrag', formatAmount(invoice.amount).replace(/\s/g, ' ')],
  ].entries()) {
    const y = 657 - index * 38
    page.drawText(label, { x: 48, y, size: 12, font: bold, color: ink })
    page.drawText(value, { x: 188, y, size: 12, font, color: ink })
  }
  page.drawText('Fiktive Rechnung. Keine Zahlung erforderlich.', { x: 48, y: 92, size: 11, font, color: ink })
  return new Response(Uint8Array.from(await pdf.save()).buffer, { headers: {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="' + invoice.id + '.pdf"',
  } })
}
