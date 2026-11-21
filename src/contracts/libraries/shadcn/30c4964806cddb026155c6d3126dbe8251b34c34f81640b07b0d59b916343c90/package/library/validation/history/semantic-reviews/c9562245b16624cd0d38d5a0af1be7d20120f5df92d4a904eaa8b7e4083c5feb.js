/* BrowserOS neo: native label targeting, actual source ratio property and
 * caller-owned empty/data change, with read-only style/DOM assertions. */
(async()=>{
  const records=[];
  const assert=(ok,message)=>{if(!ok)throw new Error(message);};
  const read=async(page,fn)=>(await page.evaluateInPage(fn)).value;
  for(const family of ['label','aspect-ratio','empty']) {
    const url='http://localhost:5175/?family='+family;
    const page=await browser.open(url);
    const snapshot=await page.snapshot();
    const record={family,url,checks:[]};
    if(family==='label') {
      record.labels=await read(page,()=>[...document.querySelectorAll('[data-slot="label"]')].map(e=>({tag:e.tagName,target:e.htmlFor,controlExists:!!document.getElementById(e.htmlFor),font:getComputedStyle(e).fontFamily,fontSize:getComputedStyle(e).fontSize,lineHeight:getComputedStyle(e).lineHeight,opacity:getComputedStyle(e).opacity,text:e.textContent})));
      assert(record.labels.length===3&&record.labels.every(e=>e.tag==='LABEL'&&e.controlExists&&e.fontSize==='14px'&&e.lineHeight==='20px'),'Native labels and typography');
      assert(record.labels[1].opacity==='0.5','Caller disabled field opacity');
      // The accessibility snapshot exposes LabelText without an action ref.
      // Native focus and typing exercise the labelable target; read-only
      // DOM confirms the actual HTML label.control relationship.
      await page.focus(snapshot.refs.find(r=>r.name==='Project name').ref);
      await page.type('Named project');
      record.control=await read(page,()=>({value:document.getElementById('label-project').value,labelControl:document.querySelector('[data-slot="label"]').control?.id,disabled:document.getElementById('disabled-project').disabled,rtl:document.getElementById('rtl-project').dir}));
      assert(record.control.value==='Named project'&&record.control.labelControl==='label-project'&&record.control.disabled&&record.control.rtl==='rtl','Real label relationship and source Input');
      record.checks.push('Three real label/control associations including disabled and RTL','14/20px reference typography; explicit caller disabled opacity','Named input accepts native typing; label.control resolves actual input');
    }
    if(family==='aspect-ratio') {
      record.ratios=await read(page,()=>[...document.querySelectorAll('[data-slot="aspect-ratio"]')].map(e=>{const r=e.getBoundingClientRect(),c=getComputedStyle(e),i=e.querySelector('img');return{width:r.width,height:r.height,ratio:c.aspectRatio,radius:c.borderRadius,surface:c.backgroundColor,runtime:e.style.getPropertyValue('--ratio'),imageComplete:i.complete,naturalWidth:i.naturalWidth,alt:i.alt,fit:getComputedStyle(i).objectFit};}));
      assert(record.ratios.length===3&&record.ratios.every((e,i)=>Math.abs(e.width/e.height-[16/9,1,9/16][i])<.001&&e.radius==='10px'&&e.surface==='rgb(217, 217, 217)'&&e.imageComplete&&e.naturalWidth>0&&e.alt&&e.fit==='cover'),'Required ratio/media geometry');
      record.checks.push('Actual required --ratio gives16:9/1:1/9:16','Native10px corner/gray surface; decoded independently authored fixture media','Caller cover/alt policy explicit');
    }
    if(family==='empty') {
      record.parts=await read(page,()=>[...document.querySelectorAll('[data-slot^="empty"]')].map(e=>({slot:e.dataset.slot,tag:e.tagName,padding:getComputedStyle(e).padding,gap:getComputedStyle(e).gap,fontSize:getComputedStyle(e).fontSize,lineHeight:getComputedStyle(e).lineHeight,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})));
      assert(record.parts.length===6&&record.parts[0].padding==='24px'&&record.parts[0].gap==='16px','Actual six Empty wrappers and native spacing');
      const title=record.parts.find(e=>e.slot==='empty-title'),media=record.parts.find(e=>e.slot==='empty-icon'),description=record.parts.find(e=>e.slot==='empty-description');
      assert(title.fontSize==='18px'&&title.lineHeight==='28px'&&title.height>=28&&media.width===32&&media.height===32&&description.tag==='DIV','Deeper native text metrics and actual runtime description tag');
      await page.focus(snapshot.refs.find(r=>r.name==='Upload document').ref);await page.press('Enter');
      record.loaded=await read(page,()=>({empty:document.querySelectorAll('[data-slot="empty"]').length,status:document.querySelector('[role="status"]').textContent,text:document.querySelector('main').textContent}));
      assert(record.loaded.empty===0&&record.loaded.status==='Document added'&&record.loaded.text.includes('Project report.pdf'),'Caller data replaces empty state');
      record.checks.push('Actual six wrappers; description runtime div retained','Native24px inset/16px gap/32px icon','Text18/28px retained without clipping to20px enclosing native frame','Native caller action replaces empty state with real data/status');
    }
    if(family!=='label') {
      if(family==='empty') {
        const current=await page.snapshot();await page.click(current.refs.find(r=>r.name==='Clear documents').ref);
      }
      await page.cdp('Emulation.setDeviceMetricsOverride',JSON.stringify({width:320,height:700,deviceScaleFactor:1,mobile:false}));
      record.narrow=await read(page,()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,widths:[...document.querySelectorAll('[data-slot="empty"],[data-slot="aspect-ratio"]')].map(e=>e.getBoundingClientRect().width)}));
      assert(record.narrow.scrollWidth===320&&record.narrow.widths.length>0&&record.narrow.widths.every(w=>w<=272),'Fluid narrow layout');
      await page.cdp('Emulation.clearDeviceMetricsOverride','{}');
      record.checks.push('320px viewport remains fluid without overflow');
    }
    records.push(record);await page.close();
  }
  return {format:'shadcn-semantic-foundations-browser/1',result:'PASS',records};
})()
