/* Native actions through normal pinned React routes; computed metrics are read-only. */
(async()=>{
 const records=[];
 const assert=(ok,message)=>{if(!ok)throw new Error(message);};
 const read=async(p,fn)=>(await p.evaluateInPage(fn)).value;
 for(const family of ['collapsible','dialog','alert-dialog','sheet','popover','tooltip','hover-card']){
  const p=await browser.open('http://localhost:5175/?family='+family);
  const named=async name=>{const s=await p.snapshot(),r=s.refs.find(r=>r.name===name);assert(r,'Missing '+name);return r.ref;};
  const click=async name=>p.click(await named(name)),focus=async name=>p.focus(await named(name));
  const state=async()=>read(p,()=>({open:document.querySelector('[aria-label="Open state"]').textContent,count:Number(document.querySelector('[aria-label="Open transactions"]').textContent),active:document.activeElement.textContent,activeId:document.activeElement.id}));
  const record={family,url:'http://localhost:5175/?family='+family,checks:[]};
  const trigger={collapsible:'Project details',dialog:'Open dialog','alert-dialog':'Open confirmation',sheet:'Open sheet',popover:'Project options',tooltip:'Save document','hover-card':'Alex profile'}[family];
  const hover=['tooltip','hover-card'].includes(family);
  const open=async()=>{await focus(trigger);if(!hover)await p.press('Enter');else await p.waitForSelector('[data-slot="'+family+'-content"]');};
  await open();record.open=await state();assert(record.open.open==='true','Real opening '+family);
  record.metrics=await read(p,()=>[...document.querySelectorAll('[data-slot$="-content"], [data-slot="collapsible-trigger"]')].filter(e=>e.getBoundingClientRect().width>0).map(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return{slot:e.dataset.slot,role:e.getAttribute('role'),modal:e.getAttribute('aria-modal'),label:e.getAttribute('aria-labelledby'),description:e.getAttribute('aria-describedby'),padding:s.padding,radius:s.borderRadius,width:r.width,height:r.height,x:r.x,right:r.right,y:r.y,bottom:r.bottom,viewport:[innerWidth,innerHeight],activeInside:e.contains(document.activeElement),hidden:e.getAttribute('aria-hidden')};}));
  const m=record.metrics[0];
  if(['dialog','alert-dialog','sheet'].includes(family)){
   record.typography=await read(p,()=>{const t=document.querySelector('[data-slot$="-title"]'),h=document.querySelector('[data-slot$="-header"]'),s=getComputedStyle(t);return{size:s.fontSize,lineHeight:s.lineHeight,weight:s.fontWeight,gap:getComputedStyle(h).gap};});
   assert(record.typography.size==='16px'&&record.typography.lineHeight==='24px'&&record.typography.weight===(family==='alert-dialog'?'600':'500')&&record.typography.gap===(family==='dialog'?'8px':family==='alert-dialog'?'6px':'2px'),'Actual native component title/header metrics');
  }
  if(family==='collapsible'){
   assert(m.height===32&&m.padding==='0px 16px','Compact disclosure metric');
   await p.press('Escape');assert((await state()).open==='true','Disclosure ignores Escape');
   await p.press('Tab');assert((await state()).active==='Read project help','Expanded link Tab order');
   await focus(trigger);await p.press(' ');assert((await state()).open==='false','Disclosure Space toggle');
   await p.press('Tab');assert((await state()).active==='Host toggle open','Disabled disclosure skipped');
   record.checks.push('Native32px/16px disclosure geometry, Enter/Space toggle and retained focus','Expanded content follows Tab order; disabled trigger skipped; Escape does not dismiss');
  }else if(!hover){
   assert(m.label&&m.description&&m.modal===null&&m.activeInside,'Real naming/initial focus and faithful primitive attributes');
   if(family==='dialog'){
    assert(m.padding==='16px'&&m.radius==='14px'&&m.width===448&&record.open.activeId==='dialog-project','Native Dialog geometry and initial task focus');
    await p.press('Shift+Tab');assert((await state()).active==='Close','Reverse Tab wraps in modal');await p.press('Tab');assert((await state()).activeId==='dialog-project','Forward Tab wraps in modal');
   }
   if(family==='alert-dialog'){
    assert(m.padding==='16px'&&m.radius==='14px'&&m.width===424&&record.open.active==='Cancel deletion','Default confirmation geometry and safe caller initialFocus');
    await click('Confirm deletion');record.action=await read(p,()=>({open:document.querySelector('[aria-label="Open state"]').textContent,count:document.querySelector('[aria-label="Confirmation count"]').textContent}));
    assert(record.action.open==='true'&&record.action.count==='1','Action does not automatically close');
    await p.clickAt(4,4);assert((await state()).open==='true','Alert outside press ignored');
    await click('Cancel deletion');assert((await state()).open==='false','Cancel is Close');
    await click('Compact confirmation');await open();record.compact=await read(p,()=>{const e=document.querySelector('[data-slot="alert-dialog-content"]'),m=document.querySelector('[data-slot="alert-dialog-media"]');return{width:e.getBoundingClientRect().width,media:m.getBoundingClientRect().width,radius:getComputedStyle(m).borderRadius};});
    assert(record.compact.width===320&&record.compact.media===40&&record.compact.radius==='6px','Compact native surface and media');
    await click('Confirm and close');assert((await state()).open==='false','Host accepts explicit close');await open();
   }
   if(family==='sheet'){
    assert(m.width===384&&m.x===m.viewport[0]-384&&m.y===0,'Right physical edge');
    for(const side of ['left','top','bottom']){await p.press('Escape');await p.selectOption(await named('Placement'),side);await open();const edge=await read(p,()=>{const e=document.querySelector('[data-slot="sheet-content"]'),r=e.getBoundingClientRect();return{side:e.dataset.side,x:r.x,y:r.y,bottom:r.bottom,height:innerHeight};});assert(edge.side===side&&(side==='left'?edge.x===0:side==='top'?edge.y===0:edge.bottom===edge.height),'Sheet physical edge '+side);record[side]=edge;}
   }
   if(family==='popover'){assert(m.padding==='10px'&&m.radius==='10px'&&m.width<=288,'Native Popover metrics');await click('Close options');assert((await state()).open==='false','Actual actionsRef closes');await open();}
   await p.press('Escape');record.closed=await state();assert(record.closed.open==='false'&&record.closed.active===trigger,'Escape/final focus '+family);
   record.checks.push('Actual named/described popup and initial focus; no fabricated aria-modal','Family-specific geometry, action ownership and actual Escape/final focus');
  }else{
   assert(record.open.active===trigger,'No focus theft');
   if(family==='tooltip'){
    assert(m.radius==='8px'&&m.padding==='8px 12px'&&m.hidden==='true','Native tooltip geometry and duplicate-hidden usage');
    record.essential=await read(p,()=>({arrow:document.querySelectorAll('.cn-tooltip-arrow').length,description:document.querySelector('[data-slot="tooltip-trigger"]').getAttribute('aria-describedby'),help:document.querySelector('#persistent-help').textContent}));assert(record.essential.arrow===1&&record.essential.description==='persistent-help'&&record.essential.help.includes('stores'),'Actual internal arrow and persistent essential help');
   }else assert(m.radius==='10px'&&m.padding==='12px 16px'&&m.role===null,'Native passive preview');
   await p.press('Escape');record.closed=await state();assert(record.closed.open==='false'&&record.closed.active===trigger,'Nonmodal Escape focus');
   record.checks.push('Actual native popup insets/corners, source focus opening and Escape without focus theft','Essential information remains ordinary document content, separate from visual preview');
  }
  await click('Cancel open changes');if(hover)await focus(trigger);else await click(trigger);
  record.cancel=await state();assert(record.cancel.open==='false'&&record.cancel.count>0,'Canceled source candidate preserves controlled state');
  await click('Host toggle open');record.host=await state();assert(record.host.open==='true','Host prop authority bypasses candidate cancellation');
  await p.press('Escape');record.canceledEscape=await state();assert(record.canceledEscape.open==='true','Canceled dismissal retains open state');
  record.checks.push('Real eventDetails.cancel preserves state; direct host props retain independent authority');
  await p.reload();await p.cdp('Emulation.setDeviceMetricsOverride',JSON.stringify({width:320,height:700,deviceScaleFactor:1,mobile:false}));await open();
  record.narrow=await read(p,()=>[...document.querySelectorAll('[data-slot$="-content"], [data-slot="collapsible"]')].filter(e=>e.getBoundingClientRect().width>0).map(e=>{const r=e.getBoundingClientRect();return{slot:e.dataset.slot,x:r.x,right:r.right,width:r.width,scrollWidth:e.scrollWidth,clientWidth:e.clientWidth};}));
  assert(record.narrow.length&&record.narrow.every(e=>e.x>=-1&&e.right<=321&&e.scrollWidth<=e.clientWidth+1),'Actual320px containment '+family);
  record.checks.push('Real320px viewport surface/content containment');
  await p.cdp('Emulation.clearDeviceMetricsOverride','{}');await p.close();records.push(record);
 }
 return {format:'shadcn-semantic-browser-run/1',result:'PASS',records,scope:'Actual native actions and computed source CSS through normal React routes; bounded reference evidence, not general platform/AT or pixel certification.'};
})()
