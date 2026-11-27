import type {ComponentPropsWithRef} from 'react'
import {selectChevronPath} from './select-chevron'

/** Keeps native keyboard/mobile behaviour while giving the chevron a stable inset. */
export function NativeSelect(props:ComponentPropsWithRef<'select'>) {
  const listbox=props.multiple||(props.size??0)>1
  return <span className="arve-native-select" dir={props.dir} data-listbox={listbox||undefined}>
    <select {...props}/>
    {!listbox&&<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d={selectChevronPath}/></svg>}
  </span>
}
