import switchContract from './exports/shadcn/switch/3994eb962797b7f48a25939c595dc9e9aac98e3423ff8865e313b3305d0cbb29.json'
import checkboxPrevious from './exports/shadcn/checkbox/8b7fe52b9495071663062267997935f6f223628f0b012c867b4aa3665d77b5d8.json'
import checkboxContract from './exports/shadcn/checkbox/638e6f954f0c03f4efe5c682e0c90f757db9e1259daec3591d9ba4b494a6a072.json'
import inputPrevious from './exports/shadcn/input/be0abde445ff735e76a340e34826318dfd4585f14a7689f60b3ad8d96bba74c9.json'
import inputContract from './exports/shadcn/input/70bc11b26ef7f00f952db731e1397a265648922a9e79181db08ac745ea0f7c76.json'
import button from './exports/shadcn/button/fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d.json'

type ContractExport = {
  library: string
  component: string
  revision: string
  origin: string
  status: string
  sources: Record<string, string>
  files: Record<string, { path: string; sha256: string; content: string }>
}

const catalog: ContractExport[] = [button, inputContract, checkboxContract, switchContract, inputPrevious, checkboxPrevious]

export function getContract(reference: { library?: string | null; component?: string | null; revision?: string | null } | null | undefined) {
  return catalog.find((item) =>
    item.library === reference?.library &&
    item.component === reference?.component &&
    item.revision === reference?.revision,
  )
}

export function getShadcnContract(component: string) {
  return catalog.find((item) => item.library === 'shadcn' && item.component === component)
}
