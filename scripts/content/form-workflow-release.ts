import { formPatternsRelease } from './form-patterns-release'
import { formContentRelease } from './form-content-release'
import { formInclusionRelease } from './form-inclusion-release'

export const formWorkflowRelease = [...formPatternsRelease, ...formContentRelease, ...formInclusionRelease]
export const formWorkflowBaseline: Record<string, {id: number; updatedAt: string}> = {
  'shadcn-patterns': {id:12, updatedAt:'2026-11-13T12:43:02.775Z'},
  'shadcn-formulare-validierung': {id:20, updatedAt:'2026-11-17T22:59:27.677Z'},
  'shadcn-felder-und-fehlermeldungen': {id:45, updatedAt:'2026-11-17T22:33:55.259Z'},
  'shadcn-content-design': {id:23, updatedAt:'2026-11-13T12:43:02.711Z'},
  'shadcn-barrierefreiheit': {id:24, updatedAt:'2026-11-13T12:43:02.693Z'},
}
