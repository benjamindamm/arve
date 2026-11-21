import React, { useState } from 'react';
import { Button } from './ui/button.mjs';
import { Checkbox } from './ui/checkbox.mjs';
import { Switch } from './ui/switch.mjs';
import { Input } from './ui/input.mjs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion.mjs';

export const semanticControlFamilies = ['button', 'checkbox', 'switch', 'input', 'accordion'];

export function SemanticControlsLab({ family }) {
  const [actions, setActions] = useState(0);
  const [checked, setChecked] = useState(false);
  const [mixed, setMixed] = useState(true);
  const [mixedChecked, setMixedChecked] = useState(false);
  const [switched, setSwitched] = useState(false);
  const [value, setValue] = useState('');
  const [expanded, setExpanded] = useState(['alpha']);
  const [dark, setDark] = useState(false);
  return <main data-semantic-family={family} data-theme={dark ? 'dark' : 'light'}>
    <h1>{family} semantic source adapter</h1>
    <label><input type="checkbox" checked={dark} onChange={e => setDark(e.target.checked)} />Dark theme</label>
    {family === 'button' && <>
      <p>Real source CVA classes map public variants and sizes to semantic rules.</p>
      {['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'].map(variant =>
        <section key={variant}><h2>{variant}</h2>
          {['xs', 'sm', 'default', 'lg', 'icon-xs', 'icon-sm', 'icon', 'icon-lg'].map(size =>
            <Button key={size} variant={variant} size={size} onClick={() => setActions(n => n + 1)}
              aria-label={size.startsWith('icon') ? variant + ' ' + size + ' action' : undefined}>
              {size.startsWith('icon') ? <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" /></svg> : variant + ' ' + size}
            </Button>)}
        </section>)}
      <Button disabled>Disabled action</Button>
      <Button className="ui-button-rounded" onClick={() => setActions(n => n + 1)}>Rounded action</Button>
      <output aria-label="Action count">{actions}</output>
    </>}
    {family === 'checkbox' && <>
      <div data-part="checkbox-field"><Checkbox aria-labelledby="notifications-label" checked={checked}
        onCheckedChange={setChecked} /><span id="notifications-label">Notifications</span></div>
      <div data-part="checkbox-field"><Checkbox aria-labelledby="mixed-label" checked={mixedChecked} indeterminate={mixed}
        onCheckedChange={next => { setMixed(false); setMixedChecked(next); }} /><span id="mixed-label">Mixed preference</span></div>
      <div data-part="checkbox-field"><Checkbox aria-label="Disabled preference" disabled />Disabled preference</div>
      <Checkbox aria-label="Invalid preference" aria-invalid="true" aria-describedby="checkbox-error" />
      <p id="checkbox-error">Confirm your preference.</p>
      <output aria-label="Checked value">{String(checked)}</output>
    </>}
    {family === 'switch' && <>
      <div data-part="switch-field"><Switch aria-labelledby="updates-label" checked={switched}
        onCheckedChange={setSwitched} /><span id="updates-label">Auto updates</span></div>
      <Switch aria-label="Small updates" size="sm" defaultChecked />
      <Switch aria-label="RTL updates" dir="rtl" defaultChecked />
      <Switch aria-label="Small RTL updates" dir="rtl" size="sm" defaultChecked />
      <Switch aria-label="Disabled updates" disabled />
      <output aria-label="Switch value">{String(switched)}</output>
    </>}
    {family === 'input' && <>
      <div data-part="input-field"><label data-part="input-label" htmlFor="project-name">Project name</label>
        <Input id="project-name" value={value} onChange={e => setValue(e.target.value)}
          placeholder="Project name" aria-describedby="input-help" />
        <p data-part="input-help" id="input-help">Enter the project name.</p></div>
      <Input aria-label="Disabled name" disabled value="Locked" readOnly />
      <Input aria-label="Invalid name" aria-invalid="true" aria-describedby="input-error" />
      <p id="input-error">Use a project name.</p>
      <Input aria-label="Rounded name" className="ui-input-rounded" />
      <output aria-label="Text value">{value || '(empty)'}</output>
    </>}
    {family === 'accordion' && <>
      <Accordion value={expanded} onValueChange={setExpanded}>
        <AccordionItem value="alpha"><AccordionTrigger>First section</AccordionTrigger>
          <AccordionContent><p>First panel content with intrinsic height.</p></AccordionContent></AccordionItem>
        <AccordionItem value="beta" disabled><AccordionTrigger>Disabled section</AccordionTrigger>
          <AccordionContent>Unavailable content</AccordionContent></AccordionItem>
      </Accordion>
      <Accordion dir="rtl" defaultValue={['rtl']}>
        <AccordionItem value="rtl"><AccordionTrigger>القسم الأول</AccordionTrigger>
          <AccordionContent>محتوى القسم</AccordionContent></AccordionItem>
      </Accordion>
      <output aria-label="Expanded items">{JSON.stringify(expanded)}</output>
    </>}
  </main>;
}
