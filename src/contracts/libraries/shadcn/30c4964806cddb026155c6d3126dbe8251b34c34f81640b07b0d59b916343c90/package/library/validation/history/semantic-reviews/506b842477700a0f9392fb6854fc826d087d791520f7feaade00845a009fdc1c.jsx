import React,{useState} from 'react';
import {Alert,AlertTitle,AlertDescription,AlertAction} from './ui/alert.mjs';
import {Table,TableHeader,TableBody,TableFooter,TableRow,TableHead,TableCell,TableCaption} from './ui/table.mjs';
import {FieldSet,FieldLegend,FieldGroup,Field,FieldContent,FieldLabel,FieldTitle,FieldDescription,FieldSeparator,FieldError} from './ui/field.mjs';
import {ItemGroup,ItemSeparator,Item,ItemMedia,ItemContent,ItemTitle,ItemDescription,ItemActions,ItemHeader,ItemFooter} from './ui/item.mjs';
import {Input} from './ui/input.mjs';
import {Button} from './ui/button.mjs';

export const semanticStructuredFamilies=['alert','table','field','item'];
export function SemanticStructuredLab({family}) {
  const [dark,setDark]=useState(false);
  const [attempts,setAttempts]=useState(0);
  const [orientation,setOrientation]=useState('vertical');
  const [errors,setErrors]=useState([{message:'Enter a valid email address.'},{message:'Enter a valid email address.'},{message:'Use your work address.'}]);
  const [actions,setActions]=useState(0);
  return <main data-semantic-family={family} data-theme={dark?'dark':'light'}>
    <h1>{family} semantic source adapter</h1>
    <label><input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)}/>Dark theme</label>
    {family==='alert'&&['default','destructive'].map(variant=><section key={variant}>
      <Alert variant={variant} className="ui-alert-with-icon">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor"/></svg>
        <AlertTitle>Connection failed</AlertTitle><AlertDescription>{attempts?'Retry requested '+attempts+' time(s).':'Check your network and try again.'}</AlertDescription>
        <AlertAction><Button size="xs" onClick={()=>setAttempts(n=>n+1)}>Retry {variant} connection</Button></AlertAction>
      </Alert>
    </section>)}
    {family==='table'&&<Table><TableCaption>Quarterly report availability</TableCaption>
      <TableHeader><TableRow><TableHead scope="col">Document</TableHead><TableHead scope="col">Pages</TableHead></TableRow></TableHeader>
      <TableBody><TableRow data-state="selected"><TableHead scope="row">Annual report</TableHead><TableCell>24</TableCell></TableRow></TableBody>
      <TableFooter><TableRow><TableHead scope="row">Total</TableHead><TableCell>24</TableCell></TableRow></TableFooter>
    </Table>}
    {family==='field'&&<>
      <div data-lab-orientation-controls>{['vertical','horizontal','responsive'].map(value=><Button key={value} variant="outline" onClick={()=>setOrientation(value)}>{value} layout</Button>)}</div>
      <FieldSet><FieldLegend>Contact details</FieldLegend><FieldGroup>
        <Field orientation={orientation}><FieldLabel htmlFor="field-email">Email</FieldLabel><FieldContent>
          <Input id="field-email" type="email" aria-invalid={errors.length>0} aria-describedby={'field-help'+(errors.length?' field-error':'')}/>
          <FieldDescription id="field-help">Use your work address.</FieldDescription>
          <FieldError id="field-error" errors={errors}/>
        </FieldContent></Field>
        <FieldSeparator>Preferences</FieldSeparator>
        <Field orientation="horizontal"><FieldTitle id="updates-title">Receive updates</FieldTitle><input type="checkbox" aria-labelledby="updates-title"/></Field>
      </FieldGroup></FieldSet>
      <Button onClick={()=>setErrors(errors.length?[]:[{message:'Enter a valid email address.'}])}>{errors.length?'Clear errors':'Show error'}</Button>
    </>}
    {family==='item'&&<>
      <ItemGroup>{['default','sm','xs'].map((size,index)=><React.Fragment key={size}>
        {index>0&&<ItemSeparator aria-hidden="true"/>}
        <Item role="listitem" size={size} variant={index===0?'outline':index===1?'muted':'default'}>
          <ItemHeader>Reports</ItemHeader><ItemMedia variant="icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z" fill="none" stroke="currentColor"/></svg></ItemMedia>
          <ItemContent><ItemTitle><h3>{size} annual report</h3></ItemTitle><ItemDescription>Current financial year</ItemDescription></ItemContent>
          <ItemActions><Button size="sm" onClick={()=>setActions(n=>n+1)}>Open {size} report</Button></ItemActions><ItemFooter>24 pages</ItemFooter>
        </Item>
      </React.Fragment>)}</ItemGroup>
      <Item render={<a href="#annual-report"/>} variant="outline"><ItemContent><ItemTitle><h3>Open annual report destination</h3></ItemTitle><ItemDescription>Read the complete report</ItemDescription></ItemContent></Item>
      <p id="annual-report">Annual report destination</p><output aria-label="Item action count">{actions}</output>
    </>}
  </main>;
}
