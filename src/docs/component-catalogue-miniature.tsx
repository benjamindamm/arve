/** Editorial silhouettes for recognition, not rendered component implementations. */
export function CatalogueMiniature({ shape, slug }: { shape?: string; slug: string }) {
  return <svg viewBox="0 0 104 64" aria-hidden="true" focusable="false" fill="none" className="catalogue-miniature"><g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {shape === 'button' ? <><rect x="12" y="21" width="80" height="25" rx="5" fill="currentColor"/><path d="M35 33h34" stroke="var(--background,#fff)"/></> :
    shape === 'select' && slug === 'slider' ? <><path d="M14 32h76"/><circle cx="61" cy="32" r="7" fill="var(--background,#fff)"/></> :
    shape === 'select' && slug === 'radio-group' ? <><circle cx="22" cy="21" r="7"/><circle cx="22" cy="21" r="3" fill="currentColor"/><circle cx="22" cy="44" r="7"/><path d="M39 21h45m-45 23h35"/></> :
    shape === 'select' ? <><rect x="10" y="10" width="84" height="18" rx="3"/><path d="M19 19h37m23-2 4 4 4-4"/><rect x="10" y="31" width="84" height="24" rx="3"/><path d="M18 38h48m-48 9h35"/>{slug==='combobox'&&<circle cx="73" cy="19" r="3"/>}</> :
    shape === 'check' ? slug==='switch' ? <><rect x="18" y="22" width="40" height="22" rx="11" fill="currentColor"/><circle cx="46" cy="33" r="8" fill="var(--background,#fff)"/><path d="M67 32h21"/></> : <><rect x="14" y="14" width="13" height="13" rx="2"/><path d="m17 20 3 3 5-6m10 3h49"/><rect x="14" y="37" width="13" height="13" rx="2"/><path d="M35 43h38"/></> :
    shape === 'calendar' ? <><rect x="20" y="10" width="64" height="46" rx="4"/><path d="M20 24h64M35 7v8m34-8v8m-36 18h5m12 0h5m12 0h5m-39 11h5m12 0h5"/><rect x="64" y="40" width="12" height="11" rx="2" fill="currentColor"/></> :
    shape === 'field' ? <><path d="M12 12h31"/><rect x="12" y="21" width="80" height="23" rx="3"/><path d="M20 32h32m-40 20h50"/>{slug==='textarea'&&<path d="m83 35-5 5"/>}</> :
    shape === 'table' ? <><rect x="8" y="9" width="88" height="47" rx="3"/><path d="M8 22h88M8 34h88M8 45h88M35 9v47m35-47v47"/><path d="M14 16h14m13 0h18m17 0h13"/></> :
    shape === 'chart' ? <><path d="M12 10v44h81"/>{slug==='chart-line'||slug==='chart-area'?<path d="m18 44 17-19 18 9 18-21 15 8"/>:slug==='chart-pie'||slug==='chart-radial'?<><circle cx="53" cy="30" r="21"/><path d="M53 9v21h21"/></>:<><rect x="23" y="33" width="12" height="21" fill="currentColor"/><rect x="46" y="15" width="12" height="39" fill="currentColor"/><rect x="69" y="25" width="12" height="29" fill="currentColor"/></>}</> :
    shape === 'feedback' ? <><rect x="8" y="15" width="88" height="35" rx="5"/><circle cx="23" cy="32" r="6"/><path d="M23 29v4m0 3h.01M38 27h44m-44 10h29"/></> :
    shape === 'dialog' ? <><rect x="8" y="7" width="88" height="50" rx="4" opacity=".3"/><rect x="23" y="15" width="60" height="36" rx="3" fill="var(--background,#fff)"/><path d="M31 24h29m-29 8h43"/><rect x="58" y="39" width="17" height="6" rx="2" fill="currentColor"/></> :
    shape === 'menu' ? <><rect x="9" y="9" width="86" height="46" rx="3"/><path d="M35 9v46M16 19h12m-12 9h12m-12 9h12m17-18h39m-39 10h29m-29 10h34"/></> :
    shape === 'message' ? <><path d="M14 11h61v23H31l-9 7v-7h-8z"/><path d="M41 39h49v18H73l-7 5v-5H41zM23 19h39m-39 7h27m20 20h12"/></> :
    <><rect x="18" y="9" width="68" height="47" rx="4"/><rect x="26" y="17" width="52" height="16" rx="2" opacity=".4"/><path d="M26 41h43m-43 7h31"/></>}
  </g></svg>
}
