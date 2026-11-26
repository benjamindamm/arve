'use client'
import {useState} from 'react'
import {editorialStates,editorialOf,type EditorialState} from './editorial'
import {EditorialPage,EditorialModeControl} from './editorial-page'
export function EditorialDemo(){
 const [state,setState]=useState<EditorialState>('clarify')
 const notes={draft:'Inhalt und Beispiele werden gerade ausgearbeitet.',clarify:'Wann erscheint der Pflichtfeldfehler?',review:'Bitte Einsatzregeln und mobile Darstellung prüfen.',checked:'Einsatzregeln und die gezeigte mobile Ansicht redaktionell geprüft. Kein technischer Freigabenachweis.'}
 return <section className="arve-editorial-demo"><h2>Status ausprobieren</h2><p>Statuswahl nur für diese Demo; der Redaktionsmodus ist deine persönliche Browseransicht. Es werden keine Seiteninhalte gespeichert.</p><div className="arve-status-options" role="group" aria-label="Redaktionellen Demostatus wählen">{editorialStates.map(s=><button key={s.value} type="button" aria-pressed={state===s.value} onClick={()=>setState(s.value)}>{s.label}</button>)}</div><EditorialModeControl/><EditorialPage as="section" demo showModeControl={false} editorial={editorialOf({editorialStatus:state,editorialNote:notes[state],editorialOwner:'Beispielteam'})}><h2>Beispielseite: Pflichtfeldfehler</h2><p>Ein Feldfehler erklärt die nötige Korrektur. Bereits gültige Angaben bleiben erhalten.</p><p><strong>Veröffentlichung:</strong> veröffentlicht · <strong>Redaktion:</strong> {editorialStates.find(s=>s.value===state)?.label}</p></EditorialPage></section>
}
