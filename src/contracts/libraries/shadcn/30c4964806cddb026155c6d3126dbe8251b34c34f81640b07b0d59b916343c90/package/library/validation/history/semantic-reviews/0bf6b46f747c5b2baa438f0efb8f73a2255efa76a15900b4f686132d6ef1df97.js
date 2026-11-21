/* BrowserOS neo normal routes. Native keyboard/pointer actions and the browser's
 * native-select bridge accompany read-only actual DOM/style measurements.
 * This does not certify an operating system popup's keyboard implementation. */
(async()=>{
  const records=[];
  const assert=(ok,message)=>{if(!ok)throw new Error(message);};
  const read=async(page,fn)=>(await page.evaluateInPage(fn)).value;
  for(const family of ['textarea','native-select','breadcrumb','pagination','button-group','input-group']) {
    const url='http://localhost:5175/?family='+family;
    const page=await browser.open(url);
    let snapshot=await page.snapshot();
    const ref=(name,role)=>{const item=snapshot.refs.find(r=>r.name===name&&(!role||r.role===role));assert(item,'Missing named control '+name);return item.ref;};
    const record={family,url,checks:[]};
    if(family==='textarea') {
      record.initial=await read(page,()=>[...document.querySelectorAll('[data-slot="textarea"]')].map(e=>({height:e.getBoundingClientRect().height,padding:getComputedStyle(e).padding,radius:getComputedStyle(e).borderRadius,fieldSizing:getComputedStyle(e).fieldSizing,border:getComputedStyle(e).borderColor,disabled:e.disabled,readOnly:e.readOnly})));
      assert(record.initial.length===4&&record.initial.every(e=>e.height===64&&e.padding==='8px 10px'&&e.radius==='10px'),'Native64px textarea metrics');
      assert(record.initial[1].border==='rgb(231, 0, 11)','Readable invalid styling');
      await page.focus(ref('Project notes'));await page.type('Line one\nLine two\nLine three\nLine four\nLine five');
      record.edit=await read(page,()=>{const e=document.getElementById('notes');return{value:e.value,height:e.getBoundingClientRect().height,focus:e.matches(':focus-visible'),shadow:getComputedStyle(e).boxShadow};});
      assert(record.edit.value.split('\n').length===5&&record.edit.height>=118&&record.edit.focus&&record.edit.shadow!=='none','Real multiline edit grows with visible focus');
      snapshot=await page.snapshot();await page.focus(ref('Read-only notes'));await page.press('a');
      record.readonly=await read(page,()=>document.getElementById('locked-notes').value);
      assert(record.readonly==='Locked notes','Readonly remains focusable without editing');
      await page.press('Tab');record.next=await read(page,()=>document.activeElement.textContent);
      assert(record.next==='After notes','Native disabled textarea skipped in Tab order');
      record.checks.push('Native64px minimum,8×10px inset/10px corners','Real five-line edit grows to118px with focus shadow','Readonly rejects typing while disabled is skipped','Linked caller error remains visible');
    }
    if(family==='native-select') {
      record.initial=await read(page,()=>[...document.querySelectorAll('[data-slot="native-select"]')].map(e=>{const w=e.parentElement,i=e.nextElementSibling,r=e.getBoundingClientRect(),q=i.getBoundingClientRect();return{size:e.dataset.size,height:r.height,padding:getComputedStyle(e).padding,radius:getComputedStyle(e).borderRadius,multiple:e.multiple,disabled:e.disabled,values:[...e.selectedOptions].map(o=>o.value),icon:getComputedStyle(i).display,iconWidth:q.width,dir:e.dir,wrapperDir:getComputedStyle(w).direction,iconX:q.x+q.width/2,controlX:r.x+r.width/2,selectedColors:[...e.selectedOptions].map(o=>({background:getComputedStyle(o).backgroundColor,color:getComputedStyle(o).color}))};}));
      assert(record.initial[0].height===36&&record.initial[0].padding==='7px 33px 7px 9px'&&record.initial[0].radius==='8px'&&record.initial[0].iconWidth===16,'Native single-select outer metrics and included border');
      assert(record.initial[1].height===32&&record.initial[2].values.join(',')==='ch,at'&&record.initial[2].icon==='none','Explicit compact and genuine multiple mode');
      assert(record.initial[5].dir==='rtl'&&record.initial[5].wrapperDir==='rtl'&&record.initial[5].iconX<record.initial[5].controlX,'Actual select dir prop drives RTL wrapper/icon');
      assert(record.initial[6].dir==='ltr'&&record.initial[6].wrapperDir==='ltr'&&record.initial[6].iconX>record.initial[6].controlX,'Explicit LTR overrides surrounding RTL');
      await page.selectOption(ref('Region','combobox'),'at');
      record.single=await read(page,()=>({value:document.getElementById('region').value,count:document.querySelector('[aria-label="Native select transactions"]').textContent}));
      assert(record.single.value==='at'&&record.single.count==='1','Actual native-select bridge/source change transaction');
      snapshot=await page.snapshot();await page.focus(ref('Multiple regions'));await page.press('End');await page.press('ArrowUp');
      record.multiple=await read(page,()=>({values:[...document.getElementById('regions').selectedOptions].map(o=>o.value),count:document.querySelector('[aria-label="Native select transactions"]').textContent}));
      assert(record.multiple.values.join(',')==='at'&&record.multiple.count==='3','Native multiple keyboard selection skips disabled Germany');
      await page.press('Tab');record.next=await read(page,()=>document.activeElement.id);
      assert(record.next==='invalid-region','Native disabled select skipped');
      record.checks.push('Native single36px and explicit compact32px;16px decorative chevron','Actual dir is on select; wrapper derives it, including opposite surrounding direction','BrowserOS selectOption drives real single control/source onChange once','Multiple remains native, selected system colors retained and chevron hidden','Real End/ArrowUp selection skips disabled option; Tab skips disabled select');
      record.notChecked=['Operating-system single-picker popup keyboard behavior in a background automation tab; no general platform certification.'];
    }
    if(family==='breadcrumb') {
      record.structure=await read(page,()=>({name:document.querySelector('[data-slot="breadcrumb"]').getAttribute('aria-label'),current:[...document.querySelectorAll('[aria-current="page"]')].map(e=>({tag:e.tagName,role:e.getAttribute('role'),disabled:e.getAttribute('aria-disabled'),tabIndex:e.tabIndex})),hidden:[...document.querySelectorAll('[data-slot="breadcrumb-separator"],[data-slot="breadcrumb-ellipsis"]')].every(e=>e.getAttribute('aria-hidden')==='true'),glyphs:[...document.querySelectorAll('[data-slot="breadcrumb"] svg')].map(e=>e.getBoundingClientRect().width),alternative:[...document.querySelectorAll('p a')].map(e=>e.textContent)}));
      assert(record.structure.name==='Project hierarchy'&&record.structure.current.length===1&&record.structure.current[0].tag==='SPAN'&&record.structure.current[0].disabled==='true'&&record.structure.current[0].tabIndex===-1,'Actual current-page source semantics');
      assert(record.structure.hidden&&record.structure.glyphs.every(w=>w===14)&&record.structure.alternative.includes('Workspace'),'Hidden14px presentation and complete alternative hierarchy');
      await page.focus(ref('Home','link'));await page.press('Enter');record.destination=await read(page,()=>location.hash);
      assert(record.destination==='#nav-home','Native ancestor navigation');
      record.checks.push('Named native hierarchy list with real ancestor hrefs','Actual disabled/nonfocusable current span retained','14px hidden glyphs and explicit full-path alternative; no fake ellipsis action','Native Enter follows ancestor destination');
    }
    if(family==='pagination') {
      record.initial=await read(page,()=>({links:[...document.querySelectorAll('[data-slot="pagination-link"]')].map(e=>({tag:e.tagName,role:e.getAttribute('role'),tabIndex:e.tabIndex,height:e.getBoundingClientRect().height,active:e.getAttribute('aria-current')})),gap:getComputedStyle(document.querySelector('[data-slot="pagination-content"]')).gap,icons:[...document.querySelectorAll('[data-slot="pagination"] svg')].map(e=>e.getBoundingClientRect().width)}));
      assert(record.initial.links.length===5&&record.initial.links.every(e=>e.tag==='A'&&e.role==='button'&&e.tabIndex===0&&e.height===32)&&record.initial.gap==='2px'&&record.initial.icons.every(w=>w===16),'Actual Button-backed anchor semantics and native page metrics');
      await page.focus(ref('3','button'));await page.press(' ');
      record.space=await read(page,()=>({hash:location.hash,current:document.querySelector('[aria-current="page"]').textContent,count:document.querySelector('[aria-label="Page transactions"]').textContent,next:!!document.querySelector('.cn-pagination-next')}));
      assert(record.space.hash==='#native-page-3'&&record.space.current==='3'&&record.space.count==='1'&&!record.space.next,'Actual selected primitive Space activation/caller boundary');
      snapshot=await page.snapshot();await page.focus(ref('1','button'));await page.press('Enter');
      record.enter=await read(page,()=>({hash:location.hash,current:document.querySelector('[aria-current="page"]').textContent,count:document.querySelector('[aria-label="Page transactions"]').textContent,previous:!!document.querySelector('.cn-pagination-previous')}));
      assert(record.enter.hash==='#native-page-1'&&record.enter.current==='1'&&record.enter.count==='2'&&!record.enter.previous,'Native Enter/caller active and omitted boundary action');
      record.checks.push('Actual anchors have role=button, not assumed plain link role','Native32px actions/2px gaps/16px icons','Physical Space and Enter each trigger exactly one callback/native href navigation','Caller updates isActive and omits unavailable boundary actions');
    }
    if(family==='button-group') {
      record.groups=await read(page,()=>[...document.querySelectorAll('[data-slot="button-group"]')].map(e=>({dir:e.dir,orientation:e.getAttribute('data-orientation'),direction:getComputedStyle(e).flexDirection,children:[...e.children].map(c=>({slot:c.dataset.slot,height:c.getBoundingClientRect().height,width:c.getBoundingClientRect().width,topLeft:getComputedStyle(c).borderTopLeftRadius,topRight:getComputedStyle(c).borderTopRightRadius,borderStart:getComputedStyle(c).borderInlineStartWidth,tabIndex:c.tabIndex}))})));
      assert(record.groups[0].orientation===null&&record.groups[0].direction==='row'&&record.groups[0].children[0].tabIndex===-1,'Actual default class works without orientation attr; text is not fake focusable');
      assert(record.groups[0].children[1].topLeft==='0px'&&record.groups[0].children[1].borderStart==='0px'&&record.groups[0].children[2].width===1,'Connected logical corners/borders and real vertical separator');
      assert(record.groups[1].direction==='column'&&record.groups[1].children[1].height===1,'Vertical orientation and horizontal separator');
      assert(record.groups[2].children[0].topLeft==='0px'&&record.groups[2].children[0].topRight==='10px'&&record.groups[2].children[1].topLeft==='10px','Actual RTL logical corners');
      await page.focus(ref('Save report'));await page.press('Enter');record.action=await read(page,()=>document.querySelector('output').textContent);
      assert(record.action==='1','Native child action once');
      await page.press('Tab');await page.press('ArrowRight');record.next=await read(page,()=>document.activeElement.textContent);
      assert(record.next==='Export report','Tab order native, ArrowRight does not invent roving focus');
      snapshot=await page.snapshot();await page.focus(ref('Archive report'));await page.press('Tab');record.disabledSkip=await read(page,()=>document.activeElement.textContent);
      assert(record.disabledSkip==='Edit report','Disabled child skipped');
      record.checks.push('Actual horizontal CVA default with omitted attr and nonfocusable text addon','Connected native logical corners/edges;1px independent separator orientation','RTL connected corners mirror correctly','Native independent Button action, Tab order and disabled skip; no invented toolbar/roving state');
    }
    if(family==='input-group') {
      record.groups=await read(page,()=>[...document.querySelectorAll('[data-slot="input-group"]')].map(e=>({height:e.getBoundingClientRect().height,radius:getComputedStyle(e).borderRadius,border:getComputedStyle(e).borderColor,opacity:getComputedStyle(e).opacity,controls:[...e.querySelectorAll('[data-slot="input-group-control"]')].map(c=>({tag:c.tagName,classes:c.className})),buttons:[...e.querySelectorAll('.cn-input-group-button')].map(b=>({size:b.dataset.size,height:b.getBoundingClientRect().height,width:b.getBoundingClientRect().width,slot:b.dataset.slot}))})));
      assert(record.groups.length===6&&record.groups[0].height===32&&record.groups[0].radius==='10px'&&record.groups[0].buttons[0].height===24,'Native32px group and24px xs action');
      assert(record.groups[1].controls[0].tag==='TEXTAREA'&&record.groups[1].height>64&&record.groups[1].buttons[0].height===28,'Actual textarea/shared-slot class and block addon rows');
      assert(record.groups[2].border==='rgb(231, 0, 11)'&&record.groups[3].opacity==='0.5','Actual child invalid/disabled presentation');
      assert(record.groups[4].buttons[0].width===24&&record.groups[5].buttons[0].width===28,'Actual custom icon action sizes');
      await page.click(ref('Search prefix'));
      record.addon=await read(page,()=>({active:document.activeElement.id,shadow:getComputedStyle(document.querySelector('[data-slot="input-group"]')).boxShadow}));
      assert(record.addon.active==='query'&&record.addon.shadow!=='none','Real default addon pointer handler focuses input');
      snapshot=await page.snapshot();await page.focus(ref('Clear search'));await page.press('Enter');
      record.clear=await read(page,()=>({value:document.getElementById('query').value,focus:document.activeElement.textContent,count:document.querySelector('[aria-label="Input-group actions"]').textContent}));
      assert(record.clear.value===''&&record.clear.focus==='Clear search'&&record.clear.count==='1','Nested native Button is not hijacked by addon focus handler');
      snapshot=await page.snapshot();await page.click(ref('Notes addon'));record.textareaAddon=await read(page,()=>document.activeElement.id);
      assert(record.textareaAddon!=='group-notes','Source addon does not falsely promise textarea focus');
      record.checks.push('Actual shared control slot and source classes; Text span has no invented slot','Native32px/10px chrome and source custom24/28px button sizing','Four align recipes support inline input and intrinsic textarea/block rows','Real addon click focuses input; nested native action preserves its own focus','Caller error/disabled state and label/help relations remain explicit; textarea addon limitation preserved');
    }
    await page.cdp('Emulation.setDeviceMetricsOverride',JSON.stringify({width:320,height:700,deviceScaleFactor:1,mobile:false}));
    record.narrow=await read(page,()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,widths:[...document.querySelectorAll('[data-slot="textarea"],[data-slot="native-select-wrapper"],[data-slot="breadcrumb"],[data-slot="pagination"],[data-slot="button-group"],[data-slot="input-group"]')].map(e=>e.getBoundingClientRect().width),nextText:document.querySelector('.cn-pagination-next-text')?getComputedStyle(document.querySelector('.cn-pagination-next-text')).display:null}));
    assert(record.narrow.scrollWidth===320&&record.narrow.widths.length>0&&record.narrow.widths.every(w=>w<=272),'Fluid320px native layout '+family);
    if(family==='pagination')assert(record.narrow.nextText==='none','Source small-screen text recipe retains accessible label');
    await page.cdp('Emulation.clearDeviceMetricsOverride','{}');
    record.checks.push('Actual320px viewport keeps controls/metadata within available width');
    records.push(record);await page.close();
  }
  return {format:'shadcn-semantic-native-browser/1',result:'PASS',records};
})()
