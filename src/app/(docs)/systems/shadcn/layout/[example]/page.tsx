import { notFound } from 'next/navigation'
import { LayoutExample } from '../../../../../../docs/layout-examples'

export default async function Page({ params }: { params: Promise<{ example: string }> }) {
  const { example } = await params
  return LayoutExample({ id: example }) ?? notFound()
}
