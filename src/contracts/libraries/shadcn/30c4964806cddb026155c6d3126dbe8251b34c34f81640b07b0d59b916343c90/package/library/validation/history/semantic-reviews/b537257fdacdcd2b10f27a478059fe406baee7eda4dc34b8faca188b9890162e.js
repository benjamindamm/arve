/* Execute with BrowserOS neo run. Real pinned wrappers + leading CSS,
 * native actions and read-only computed geometry; no synthetic events. */
(async () => {
  const records=[];
  const assert=(condition,message)=>{if(!condition)throw new Error(message);};
  const read=async(page,fn)=>(await page.evaluateInPage(fn)).value;
  for(const family of ['card','badge','separator','kbd','skeleton','spinner']) {
    const url='http://localhost:5175/?family='+family;
    const page=await browser.open(url);
    let snapshot=await page.snapshot();
    const record={family,url,checks:[]};
    const ref=name=>{const item=snapshot.refs.find(r=>r.name===name);assert(item,'Missing named control '+name);return item.ref;};
    if(family==='card') {
      record.geometry=await read(page,()=>[...document.querySelectorAll('[data-slot="card"]')].map(e=>({size:e.dataset.size,radius:getComputedStyle(e).borderRadius,gap:getComputedStyle(e).gap,padding:getComputedStyle(e).paddingTop,title:getComputedStyle(e.querySelector('[data-slot="card-title"]')).fontSize,parts:[...e.querySelectorAll('[data-slot^="card-"]')].map(e=>e.dataset.slot)})));
      assert(record.geometry[0].radius==='14px'&&record.geometry[0].gap==='16px'&&record.geometry[0].padding==='16px'&&record.geometry[0].title==='16px','Native card metrics');
      assert(record.geometry[1].gap==='12px'&&record.geometry[1].title==='14px','Explicit compact reference metrics');
      assert(record.geometry.every(e=>e.parts.length===6),'All six descendant Card wrappers');
      await page.focus(ref('View project'));await page.press('Enter');
      record.action=await read(page,()=>document.querySelector('output').textContent);
      assert(record.action==='1','Caller Button action remains native');
      record.checks.push('Seven actual Card slots; native14px corners/16px spacing','Explicit compact choice12px gap/14px title','Native descendant action executes once');
    }
    if(family==='badge') {
      record.geometry=await read(page,()=>[...document.querySelectorAll('[data-slot="badge"]')].map(e=>({tag:e.tagName,height:e.getBoundingClientRect().height,fontSize:getComputedStyle(e).fontSize,padding:getComputedStyle(e).padding,tabIndex:e.tabIndex})));
      assert(record.geometry.length===7&&record.geometry.every(e=>e.height===22&&e.fontSize==='12px'&&e.padding==='2px 8px'),'Badge semantic geometry');
      assert(record.geometry.slice(0,6).every(e=>e.tag==='SPAN'&&e.tabIndex===-1),'Informative span variants');
      await page.click(ref('Dark theme'));
      record.dark=await read(page,()=>({secondary:getComputedStyle(document.querySelector('.cn-badge-variant-secondary')).backgroundColor,destructive:getComputedStyle(document.querySelector('.cn-badge-variant-destructive')).color}));
      assert(record.dark.secondary==='rgb(38, 38, 38)'&&record.dark.destructive==='rgb(255, 127, 110)','Badge mode roles');
      snapshot=await page.snapshot();await page.focus(ref('Open review details'));await page.press('Enter');
      record.destination=await read(page,()=>location.hash);
      assert(record.destination==='#review-details','Actual native anchor destination');
      record.checks.push('Six informative variants22px/12px/2×8px','Dark semantic colors resolve','Only explicit native render anchor is a link and follows destination');
    }
    if(family==='separator') {
      record.geometry=await read(page,()=>[...document.querySelectorAll('[data-slot="separator"]')].map(e=>({orientation:e.dataset.orientation,aria:e.getAttribute('aria-orientation'),height:e.getBoundingClientRect().height,width:e.getBoundingClientRect().width,tabIndex:e.tabIndex})));
      assert(record.geometry[0].orientation==='horizontal'&&record.geometry[0].height===1,'Actual horizontal attribute/thickness');
      assert(record.geometry[1].orientation==='vertical'&&record.geometry[1].width===1&&record.geometry[1].height===96,'Vertical stretch/orientation');
      assert(record.geometry.every(e=>e.tabIndex===-1&&e.aria===e.orientation),'Nonfocusable semantic separator');
      record.checks.push('Actual1.9 data-orientation binds CSS despite pinned utility mismatch','Horizontal1px and vertical1×96px in chosen host','ARIA orientation and no invented tabstop');
    }
    if(family==='kbd') {
      record.keys=await read(page,()=>[...document.querySelectorAll('[data-slot="kbd"]')].map(e=>({tag:e.tagName,height:e.getBoundingClientRect().height,fontSize:getComputedStyle(e).fontSize,padding:getComputedStyle(e).padding,role:e.getAttribute('role'),tabIndex:e.tabIndex})));
      assert(record.keys.length===3&&record.keys.every(e=>e.tag==='KBD'&&e.height===20&&e.fontSize==='12px'&&e.padding==='0px 4px'&&e.role===null&&e.tabIndex===-1),'Native key notation metrics/semantics');
      record.checks.push('Actual native kbd/group,20px/12px/4px geometry','No fabricated focus/action/shortcut registration');
    }
    if(family==='skeleton'||family==='spinner') {
      record.motion=await read(page,()=>[...document.querySelectorAll('[data-slot="skeleton"],[data-slot="spinner"]')].map(e=>({animation:getComputedStyle(e).animationName,duration:getComputedStyle(e).animationDuration})));
      assert(record.motion.every(e=>e.animation===(family==='skeleton'?'ui-skeleton-pulse':'ui-spinner-turn')&&e.duration===(family==='skeleton'?'2s':'1s')),'Explicit source animation adaptation');
      await page.cdp('Emulation.setEmulatedMedia',JSON.stringify({features:[{name:'prefers-reduced-motion',value:'reduce'}]}));
      record.reduced=await read(page,()=>[...document.querySelectorAll('[data-slot="skeleton"],[data-slot="spinner"]')].map(e=>({animation:getComputedStyle(e).animationName,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height,role:e.getAttribute('role'),name:e.getAttribute('aria-label'),hidden:e.getAttribute('aria-hidden')})));
      assert(record.reduced.every(e=>e.animation==='none'),'Reduced motion stops animation');
      if(family==='skeleton') {
        assert(record.reduced.map(e=>e.height).join(',')==='40,16,125'&&record.reduced.every(e=>e.hidden==='true'),'Native skeleton dimensions/decorative geometry');
        await page.click(ref('Finish loading'));
        record.loaded=await read(page,()=>({busy:document.querySelector('[aria-busy]').getAttribute('aria-busy'),status:document.querySelector('[role="status"]').textContent,shapes:document.querySelectorAll('[data-slot="skeleton"]').length}));
        assert(record.loaded.busy==='false'&&record.loaded.status==='Contacts loaded'&&record.loaded.shapes===0,'Caller data replaces loading geometry and status');
        record.checks.push('Native40/16/125px shapes; fluid text/card width','Meaningful host loading status, decorative hidden geometry','Caller data update replaces shapes without fabricated Skeleton events');
      } else {
        assert(record.reduced.map(e=>e.width).join(',')==='16,12,20,24'&&record.reduced.every(e=>e.width===e.height&&e.role==='status'&&e.name.startsWith('Loading ')),'Named source SVG sizes');
        record.checks.push('Native16/12/20/24px caller size adaptation','Actual SVG status names retained under reduced motion');
      }
      await page.cdp('Emulation.setEmulatedMedia',JSON.stringify({features:[]}));
      record.checks.push('Chosen timing separate from static measurements; reduced-motion stops movement');
    }
    if(family==='card'||family==='skeleton') {
      if(family==='skeleton') { snapshot=await page.snapshot(); await page.click(ref('Load again')); }
      await page.cdp('Emulation.setDeviceMetricsOverride',JSON.stringify({width:320,height:700,deviceScaleFactor:1,mobile:false}));
      record.narrow=await read(page,()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,widths:[...document.querySelectorAll('[data-slot="card"],[data-slot="skeleton"]')].map(e=>e.getBoundingClientRect().width)}));
      assert(record.narrow.scrollWidth===320&&record.narrow.widths.length>0&&record.narrow.widths.every(w=>w<=272),'Fluid content at320px');
      await page.cdp('Emulation.clearDeviceMetricsOverride','{}');
      record.checks.push('Fluid320px host without horizontal overflow');
    }
    records.push(record);await page.close();
  }
  return {format:'shadcn-semantic-content-browser/1',result:'PASS',records};
})()
