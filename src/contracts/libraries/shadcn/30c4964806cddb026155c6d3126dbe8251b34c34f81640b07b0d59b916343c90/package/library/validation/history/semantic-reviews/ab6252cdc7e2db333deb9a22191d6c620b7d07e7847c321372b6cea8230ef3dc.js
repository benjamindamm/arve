/* BrowserOS neo normal routes: native feedback/table/field/list composition.
 * Read-only DOM/style measurements accompany native keyboard and pointer input. */
(async()=>{
  const records=[];
  const assert=(ok,message)=>{if(!ok)throw new Error(message);};
  const read=async(page,fn)=>(await page.evaluateInPage(fn)).value;
  for(const family of ['alert','table','field','item']) {
    const url='http://localhost:5175/?family='+family;
    const page=await browser.open(url);
    let snapshot=await page.snapshot();
    const ref=name=>{const item=snapshot.refs.find(r=>r.name===name);assert(item,'Missing named control '+name);return item.ref;};
    const record={family,url,checks:[]};
    if(family==='alert') {
      record.geometry=await read(page,()=>[...document.querySelectorAll('[data-slot="alert"]')].map(e=>({role:e.getAttribute('role'),padding:getComputedStyle(e).padding,radius:getComputedStyle(e).borderRadius,gap:getComputedStyle(e).gap,icon:e.querySelector('svg').getBoundingClientRect().width})));
      assert(record.geometry.length===2&&record.geometry.every(e=>e.role==='alert'&&e.padding==='8px 10px'&&e.radius==='10px'&&e.gap==='2px 8px'&&e.icon===16),'Alert actual role/metrics');
      await page.focus(ref('Retry default connection'));await page.press('Enter');
      record.retry=await read(page,()=>document.querySelector('[data-slot="alert-description"]').textContent);
      assert(record.retry==='Retry requested 1 time(s).','Native caller retry action');
      await page.click(ref('Dark theme'));
      record.dark=await read(page,()=>getComputedStyle(document.querySelector('.cn-alert-variant-destructive')).color);
      assert(record.dark==='rgb(255, 127, 110)','Destructive semantic dark mode');
      record.checks.push('Actual urgent alert role retained with explicit caller insertion policy','Native8/10px inset,2/8px gaps,10px corners and16px icon','Native caller retry changes readable feedback; no invented Alert event','Destructive dark role resolves');
    }
    if(family==='table') {
      record.table=await read(page,()=>({tag:document.querySelector('[data-slot="table"]').tagName,caption:document.querySelector('caption').textContent,cells:[...document.querySelectorAll('th,td')].map(e=>({tag:e.tagName,scope:e.getAttribute('scope'),height:e.getBoundingClientRect().height,padding:getComputedStyle(e).padding})),selected:getComputedStyle(document.querySelector('[data-state="selected"]')).backgroundColor}));
      assert(record.table.tag==='TABLE'&&record.table.caption==='Quarterly report availability','Actual native table/caption');
      assert(record.table.cells.length===6&&record.table.cells.every((e,i)=>e.padding==='8px'&&e.height===(i<2?40:37)),'Native table cell metrics');
      assert(record.table.cells.slice(0,2).every(e=>e.scope==='col')&&record.table.cells[2].scope==='row'&&record.table.cells[4].scope==='row','Native column/row associations');
      assert(record.table.selected==='rgb(245, 245, 245)','Caller row presentation state');
      record.checks.push('Actual table/caption/thead/tbody/tfoot/th/td anatomy','40px header,37px body cells with8px padding','Caller scope associations and external selected presentation; no ARIA grid');
    }
    if(family==='field') {
      record.initial=await read(page,()=>{const l=document.querySelector('[data-slot="field-legend"]'),g=document.querySelector('[data-slot="field-group"]');return {label:document.querySelector('.cn-field-label').tagName,title:document.querySelector('.cn-field-title').tagName,errorItems:document.querySelectorAll('[data-slot="field-error"] li').length,errorText:document.querySelector('[data-slot="field-error"]').textContent,legendGap:g.getBoundingClientRect().top-l.getBoundingClientRect().bottom,groupGap:getComputedStyle(g).gap,fieldGap:getComputedStyle(document.querySelector('[data-slot="field"]')).gap,inputName:document.querySelector('.cn-field-label').control?.id};});
      assert(record.initial.label==='LABEL'&&record.initial.title==='DIV'&&record.initial.inputName==='field-email','Shared source slot has distinct native identity');
      assert(record.initial.errorItems===2&&record.initial.legendGap===16&&record.initial.groupGap==='20px'&&record.initial.fieldGap==='8px','Deduplicated real source error list and measured field spacing');
      await page.click(ref('responsive layout'));
      record.wide=await read(page,()=>({orientation:document.querySelector('[data-slot="field"]').dataset.orientation,direction:getComputedStyle(document.querySelector('[data-slot="field"]')).flexDirection,width:document.querySelector('[data-slot="field-group"]').getBoundingClientRect().width}));
      assert(record.wide.orientation==='responsive'&&record.wide.direction==='row','Source responsive API/container adaptation');
      snapshot=await page.snapshot();await page.click(ref('Clear errors'));
      record.cleared=await read(page,()=>({errors:document.querySelectorAll('[data-slot="field-error"]').length,invalid:document.getElementById('field-email').getAttribute('aria-invalid'),describedby:document.getElementById('field-email').getAttribute('aria-describedby')}));
      assert(record.cleared.errors===0&&record.cleared.invalid==='false'&&record.cleared.describedby==='field-help','Actual FieldError null branch and caller relations update');
      record.checks.push('Actual FieldTitle div and FieldLabel label distinguished despite same slot','Native16px legend separation,20px group/8px field gap','Actual FieldError deduplicates3inputs to2messages then renders null','Source responsive prop uses actual container width; caller invalid/description IDs update');
    }
    if(family==='item') {
      record.items=await read(page,()=>[...document.querySelectorAll('[data-slot="item"]')].map(e=>({tag:e.tagName,role:e.getAttribute('role'),padding:getComputedStyle(e).padding,gap:getComputedStyle(e).gap,headings:e.querySelectorAll('h3').length,nestedActions:e.querySelectorAll('button').length})));
      assert(record.items.length===4&&record.items.slice(0,3).every(e=>e.role==='listitem'&&e.gap==='10px'&&e.headings===1),'Explicit native list usage');
      assert(record.items[0].padding==='10px 12px'&&record.items[1].padding==='8px 12px'&&record.items[2].padding==='8px 10px','Native/default/xs and explicit sm padding');
      assert(record.items[3].tag==='A'&&record.items[3].nestedActions===0,'Whole-row link has no nested action');
      await page.focus(ref('Open default report'));await page.press('Enter');
      record.action=await read(page,()=>document.querySelector('output').textContent);
      assert(record.action==='1','Independent source descendant Button callback');
      snapshot=await page.snapshot();await page.focus(ref('Open annual report destination Read the complete report'));await page.press('Enter');
      record.destination=await read(page,()=>location.hash);
      assert(record.destination==='#annual-report','Actual native row link');
      record.checks.push('Three source sizes/variants with explicit listitem roles','Native10/12px and8/10px metrics; chosen sm8/12px','Separate Button action and whole-row native anchor without nested actions');
    }
    await page.cdp('Emulation.setDeviceMetricsOverride',JSON.stringify({width:320,height:700,deviceScaleFactor:1,mobile:false}));
    record.narrow=await read(page,()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,fieldDirection:document.querySelector('[data-slot="field"]')?getComputedStyle(document.querySelector('[data-slot="field"]')).flexDirection:null,widths:[...document.querySelectorAll('[data-slot="alert"],[data-slot="table-container"],[data-slot="field-set"],[data-slot="item"]')].map(e=>e.getBoundingClientRect().width)}));
    assert(record.narrow.scrollWidth===320&&record.narrow.widths.length>0&&record.narrow.widths.every(w=>w<=272),'Fluid narrow source geometry '+family);
    if(family==='field')assert(record.narrow.fieldDirection==='column','Responsive field uses container column at narrow width');
    await page.cdp('Emulation.clearDeviceMetricsOverride','{}');
    record.checks.push('Actual320px viewport fits without horizontal overflow');
    records.push(record);await page.close();
  }
  return {format:'shadcn-semantic-structured-browser/1',result:'PASS',records};
})()
