import { useId } from 'react'
import type { ReactNode } from 'react'
import type { ComparisonItem } from '../component-comparison-data'
import { getFormsFeedbackComparisons, getFormsFeedbackSpecimen } from './forms-feedback-data'
import './forms-feedback.css'

/** Only curated local illustrations are rendered; item.value is never trusted as HTML. */
export function FormsFeedbackSpecimen({ component, groupId, item }: {
  component: string; groupId: string; item: ComparisonItem
}): ReactNode {
  const instance = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const group = [...getFormsFeedbackComparisons(component, 'variants'), ...getFormsFeedbackComparisons(component, 'states')]
    .find(candidate => candidate.id === groupId)
  const fixture = group?.items.find(candidate => candidate.id === item.id)
  const source = getFormsFeedbackSpecimen(component, groupId, item.id)
  if (!fixture || !source) return null
  // IDs and IDREFs have already been source-prefixed. An instance prefix also
  // keeps multiple copies of a comparison on one page independent.
  const prefixedHtml = source.replaceAll('ff-' + component + '-', instance + '-ff-' + component + '-')
  // Calendar's editorial wrapper is a CSS class, not an ID to namespace.
  const html = component === 'calendar'
    ? prefixedHtml.replaceAll(instance + '-ff-calendar-excerpt', 'ff-calendar-excerpt')
    : prefixedHtml
  return <div className="comparison-forms-feedback" role="img" aria-label={`${fixture.title}. ${fixture.description}`}>
    <div className="comparison-forms-feedback__content" inert aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: html }} />
  </div>
}
