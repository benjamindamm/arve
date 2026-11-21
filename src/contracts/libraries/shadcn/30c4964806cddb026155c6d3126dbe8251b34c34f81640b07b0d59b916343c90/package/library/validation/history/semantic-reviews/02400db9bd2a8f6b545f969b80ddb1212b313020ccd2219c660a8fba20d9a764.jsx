import React,{useState} from 'react';
import {Textarea} from './ui/textarea.mjs';
import {NativeSelect,NativeSelectOption,NativeSelectOptGroup} from './ui/native-select.mjs';
import {Breadcrumb,BreadcrumbList,BreadcrumbItem,BreadcrumbLink,BreadcrumbPage,BreadcrumbSeparator,BreadcrumbEllipsis} from './ui/breadcrumb.mjs';
import {Pagination,PaginationContent,PaginationItem,PaginationLink,PaginationPrevious,PaginationNext,PaginationEllipsis} from './ui/pagination.mjs';
import {ButtonGroup,ButtonGroupText,ButtonGroupSeparator} from './ui/button-group.mjs';
import {InputGroup,InputGroupAddon,InputGroupInput,InputGroupTextarea,InputGroupButton,InputGroupText} from './ui/input-group.mjs';
import {Button} from './ui/button.mjs';

export const semanticNativeFamilies=['textarea','native-select','breadcrumb','pagination','button-group','input-group'];
function Options(){return <><NativeSelectOptGroup label="Europe"><NativeSelectOption value="ch">Switzerland</NativeSelectOption><NativeSelectOption value="at">Austria</NativeSelectOption><NativeSelectOption value="de" disabled>Germany (unavailable)</NativeSelectOption></NativeSelectOptGroup><NativeSelectOption value="us">United States</NativeSelectOption></>;}
const closeIcon=<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor"/></svg>;
export function SemanticNativeLab({family}) {
  const [dark,setDark]=useState(false);
  const [notes,setNotes]=useState('');
  const [region,setRegion]=useState('ch');
  const [regions,setRegions]=useState(['ch','at']);
  const [transactions,setTransactions]=useState(0);
  const [page,setPage]=useState(2);
  const [actions,setActions]=useState(0);
  const [query,setQuery]=useState('Annual report');
  const [groupNotes,setGroupNotes]=useState('Follow-up notes');
  return <main data-semantic-family={family} data-theme={dark?'dark':'light'}>
    <h1>{family} semantic source adapter</h1>
    <label><input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)}/>Dark theme</label>
    {family==='textarea'&&<>
      <div data-part="textarea-field"><label data-part="textarea-label" htmlFor="notes">Project notes</label><Textarea id="notes" name="notes" placeholder="Add project notes" value={notes} onChange={e=>setNotes(e.target.value)} aria-describedby="notes-help"/><p id="notes-help">Include any follow-up actions.</p></div>
      <div data-part="textarea-field"><label data-part="textarea-label" htmlFor="invalid-notes">Invalid notes</label><Textarea id="invalid-notes" aria-invalid="true" aria-describedby="notes-error"/><p id="notes-error">Describe the required next step.</p></div>
      <div data-part="textarea-field"><label data-part="textarea-label" htmlFor="locked-notes">Read-only notes</label><Textarea id="locked-notes" readOnly value="Locked notes"/></div>
      <div data-part="textarea-field"><label data-part="textarea-label" htmlFor="disabled-notes">Disabled notes</label><Textarea id="disabled-notes" disabled defaultValue="Unavailable notes"/></div>
      <Button>After notes</Button><output aria-label="Notes value">{notes||'(empty)'}</output>
    </>}
    {family==='native-select'&&<>
      <section><label htmlFor="region">Region</label><NativeSelect id="region" value={region} onChange={e=>{setRegion(e.target.value);setTransactions(n=>n+1);}}><Options/></NativeSelect></section>
      <section><label htmlFor="small-region">Small region</label><NativeSelect id="small-region" size="sm" defaultValue="ch"><Options/></NativeSelect></section>
      <section><label htmlFor="regions">Multiple regions</label><NativeSelect id="regions" multiple value={regions} onChange={e=>{setRegions([...e.target.selectedOptions].map(o=>o.value));setTransactions(n=>n+1);}}><Options/></NativeSelect></section>
      <section><label htmlFor="disabled-region">Disabled region</label><NativeSelect id="disabled-region" disabled defaultValue="ch"><Options/></NativeSelect></section>
      <section><label htmlFor="invalid-region">Invalid region</label><NativeSelect id="invalid-region" aria-invalid="true" aria-describedby="region-error"><Options/></NativeSelect><p id="region-error">Choose a valid region.</p></section>
      <section><label htmlFor="rtl-region">RTL region</label><NativeSelect id="rtl-region" dir="rtl" defaultValue="ch"><Options/></NativeSelect></section>
      <section dir="rtl"><label htmlFor="ltr-region">LTR region</label><NativeSelect id="ltr-region" dir="ltr" defaultValue="ch"><Options/></NativeSelect></section>
      <output aria-label="Region value">{region}</output><output aria-label="Multiple regions value">{JSON.stringify(regions)}</output><output aria-label="Native select transactions">{transactions}</output>
    </>}
    {family==='breadcrumb'&&<>
      <Breadcrumb aria-label="Project hierarchy"><BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#nav-home">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator/>
        <BreadcrumbItem><BreadcrumbEllipsis/></BreadcrumbItem><BreadcrumbSeparator/>
        <BreadcrumbItem><BreadcrumbLink href="#nav-projects">Projects</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator/>
        <BreadcrumbItem><BreadcrumbPage>Annual report</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList></Breadcrumb>
      <p>Full hierarchy: <a href="#nav-workspace">Workspace</a>, <a href="#nav-projects">Projects</a>, Annual report.</p>
      <section id="nav-home"><h2>Home destination</h2></section><section id="nav-workspace"><h2>Workspace destination</h2></section><section id="nav-projects"><h2>Projects destination</h2></section>
    </>}
    {family==='pagination'&&<>
      <Pagination><PaginationContent>
        {page>1&&<PaginationItem><PaginationPrevious href={'#native-page-'+(page-1)} onClick={()=>{setPage(page-1);setTransactions(n=>n+1);}}/></PaginationItem>}
        {[1,2,3].map(i=><PaginationItem key={i}><PaginationLink href={'#native-page-'+i} isActive={page===i} onClick={()=>{setPage(i);setTransactions(n=>n+1);}}>{i}</PaginationLink></PaginationItem>)}
        <PaginationItem><PaginationEllipsis/></PaginationItem>
        {page<3&&<PaginationItem><PaginationNext href={'#native-page-'+(page+1)} onClick={()=>{setPage(page+1);setTransactions(n=>n+1);}}/></PaginationItem>}
      </PaginationContent></Pagination>
      {[1,2,3].map(i=><section key={i} id={'native-page-'+i}><h2>Page {i}</h2></section>)}
      <output aria-label="Current page">{page}</output><output aria-label="Page transactions">{transactions}</output>
    </>}
    {family==='button-group'&&<>
      <ButtonGroup aria-label="Report actions"><ButtonGroupText>Report</ButtonGroupText><Button variant="outline" onClick={()=>setActions(n=>n+1)}>Save report</Button><ButtonGroupSeparator/><Button variant="outline" onClick={()=>setActions(n=>n+1)}>Export report</Button></ButtonGroup>
      <ButtonGroup aria-label="Vertical actions" orientation="vertical"><Button variant="outline" onClick={()=>setActions(n=>n+1)}>Archive report</Button><ButtonGroupSeparator orientation="horizontal"/><Button variant="outline" disabled>Unavailable action</Button></ButtonGroup>
      <ButtonGroup aria-label="RTL actions" dir="rtl"><Button variant="outline">Edit report</Button><Button variant="outline">Preview report</Button></ButtonGroup>
      <output aria-label="Grouped action count">{actions}</output>
    </>}
    {family==='input-group'&&<>
      <label data-part="input-group-label" htmlFor="query">Search reports</label><InputGroup aria-label="Report search">
        <InputGroupAddon aria-label="Search prefix"><InputGroupText>Find</InputGroupText></InputGroupAddon>
        <InputGroupInput id="query" value={query} onChange={e=>setQuery(e.target.value)} aria-describedby="query-help"/>
        <InputGroupAddon align="inline-end"><InputGroupButton onClick={()=>{setQuery('');setActions(n=>n+1);}}>Clear search</InputGroupButton></InputGroupAddon>
      </InputGroup><InputGroupText id="query-help">Enter a report title.</InputGroupText>
      <label data-part="input-group-label" htmlFor="group-notes">Grouped notes</label><InputGroup aria-label="Notes group"><InputGroupAddon align="block-start" aria-label="Notes addon"><InputGroupText>Notes</InputGroupText></InputGroupAddon><InputGroupTextarea id="group-notes" value={groupNotes} onChange={e=>setGroupNotes(e.target.value)}/><InputGroupAddon align="block-end"><InputGroupButton size="sm" onClick={()=>setActions(n=>n+1)}>Attach note</InputGroupButton></InputGroupAddon></InputGroup>
      <label data-part="input-group-label" htmlFor="invalid-query">Invalid search</label><InputGroup><InputGroupInput id="invalid-query" aria-invalid="true" aria-describedby="query-error"/></InputGroup><p id="query-error">Enter a valid report title.</p>
      <label data-part="input-group-label" htmlFor="disabled-query">Disabled search</label><InputGroup><InputGroupInput id="disabled-query" disabled defaultValue="Unavailable"/><InputGroupAddon align="inline-end"><InputGroupButton disabled>Unavailable action</InputGroupButton></InputGroupAddon></InputGroup>
      <InputGroup aria-label="Small icon action"><InputGroupInput aria-label="Small icon query"/><InputGroupAddon align="inline-end"><InputGroupButton size="icon-xs" aria-label="Clear small icon query">{closeIcon}</InputGroupButton></InputGroupAddon></InputGroup>
      <InputGroup aria-label="Larger icon action"><InputGroupInput aria-label="Larger icon query"/><InputGroupAddon align="inline-end"><InputGroupButton size="icon-sm" aria-label="Clear larger icon query">{closeIcon}</InputGroupButton></InputGroupAddon></InputGroup>
      <output aria-label="Query value">{query||'(empty)'}</output><output aria-label="Input-group actions">{actions}</output>
    </>}
  </main>;
}
