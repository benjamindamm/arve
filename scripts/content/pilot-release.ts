import { pilotFindRelease } from './pilot-find-release'
import { pilotDetailRelease } from './pilot-detail-release'
import { pilotEditRelease } from './pilot-edit-release'
import { pilotOverviewRelease } from './pilot-overview-release'

export const pilotRelease = [...pilotOverviewRelease, ...pilotFindRelease, ...pilotDetailRelease, ...pilotEditRelease]
// Read-only CMS snapshot on 18 November 2026, with schema push disabled.
export const pilotBaseline: Record<string, { id: number; updatedAt: string }> = {
  'shadcn-suchen-filtern': { id: 21, updatedAt: '2026-11-18T00:38:59.225Z' },
  'shadcn-detailseite': { id: 52, updatedAt: '2026-11-17T22:59:27.597Z' },
  'shadcn-formulare-validierung': { id: 20, updatedAt: '2026-11-18T00:12:33.038Z' },
  'shadcn-content-design': { id: 23, updatedAt: '2026-11-18T00:12:33.245Z' },
}
export const pilotNewSlugs = ['shadcn-gestaltungs-pilot'] as const
