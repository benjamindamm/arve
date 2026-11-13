export const invoicePath = '/systems/shadcn/beispiele/rechnungen'

export const statuses = { open: 'Offen', paid: 'Bezahlt', overdue: 'Überfällig' }
export type InvoiceStatus = keyof typeof statuses

export const invoices = [
  { id: 'RE-1048', title: 'Hosting · November', date: '2026-11-10', amount: 49, status: 'open' },
  { id: 'RE-1047', title: 'Supportpaket', date: '2026-11-03', amount: 180, status: 'paid' },
  { id: 'RE-1046', title: 'Hosting · Oktober', date: '2026-10-10', amount: 49, status: 'paid' },
  { id: 'RE-1045', title: 'Domainverlängerung', date: '2026-10-02', amount: 32, status: 'overdue' },
  { id: 'RE-1044', title: 'Hosting · September', date: '2026-09-10', amount: 49, status: 'paid' },
] as const

export function findInvoice(id: string) {
  return invoices.find((invoice) => invoice.id === id)
}

const money = new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF' })
const date = new Intl.DateTimeFormat('de-CH', { timeZone: 'UTC', dateStyle: 'medium' })
export const formatAmount = (amount: number) => money.format(amount)
export const formatDate = (value: string) => date.format(new Date(value))
