export const editorialStates = [
 {value:'draft',label:'Entwurf',description:'Inhalt wird ausgearbeitet.'},
 {value:'clarify',label:'Zu klären',description:'Fragen oder Entscheidungen sind offen.'},
 {value:'review',label:'Im Review',description:'Bereit zur fachlichen Prüfung.'},
 {value:'checked',label:'Geprüft',description:'Für den beschriebenen Umfang redaktionell geprüft.'},
] as const
export type EditorialState=typeof editorialStates[number]['value']
export type EditorialSource={editorialStatus?:string|null;editorialNote?:string|null;editorialOwner?:string|null}
export function editorialOf(page?:EditorialSource|null){
 const found=editorialStates.find(s=>s.value===page?.editorialStatus)
 return {status:found?.value??null,label:found?.label??'Nicht eingeordnet',note:page?.editorialNote?.trim()||null,owner:page?.editorialOwner?.trim()||null}
}
export type Editorial=ReturnType<typeof editorialOf>
