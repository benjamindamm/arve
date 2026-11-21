/* BrowserOS neo normal conversation routes: source props and native caller
 * actions, read-only geometry, semantic colors and narrow layout. */
(async()=>{
  const records=[];
  const assert=(ok,message)=>{if(!ok)throw new Error(message);};
  const read=async(page,fn)=>(await page.evaluateInPage(fn)).value;
  for(const family of ['bubble','marker','message']) {
    const url='http://localhost:5175/?family='+family;
    const page=await browser.open(url);
    let snapshot=await page.snapshot();
    const ref=name=>{const item=snapshot.refs.find(r=>r.name===name);assert(item,'Missing named control '+name);return item.ref;};
    const record={family,url,checks:[]};
    if(family==='bubble') {
      record.bubbles=await read(page,()=>[...document.querySelectorAll('[data-slot="bubble-group"] > [data-slot="bubble"]')].map(e=>({variant:e.dataset.variant,align:e.dataset.align,padding:getComputedStyle(e).padding,radius:getComputedStyle(e).borderRadius,height:e.getBoundingClientRect().height,fontWeight:getComputedStyle(e).fontWeight,text:e.textContent})));
      assert(record.bubbles.length===7&&record.bubbles.every(e=>e.padding==='10px 12px'&&e.radius==='22px'&&e.height===40&&e.fontWeight==='400'&&e.text.includes('Alex:')),'Native bubble metrics and explicit speaker');
      await page.focus(ref('Like Alex’s message'));await page.press('Enter');
      record.reaction=await read(page,()=>{const e=document.querySelector('[data-slot="bubble-reactions"]'),b=e.querySelector('button');return {side:e.dataset.side,align:e.dataset.align,padding:getComputedStyle(e).padding,gap:getComputedStyle(e).gap,pressed:b.getAttribute('aria-pressed'),text:b.textContent,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height};});
      assert(record.reaction.side==='bottom'&&record.reaction.align==='end'&&record.reaction.padding==='2px 6px'&&record.reaction.gap==='4px'&&record.reaction.pressed==='true'&&record.reaction.text.includes('(1)'),'Actual positioned caller reaction and native toggle action');
      snapshot=await page.snapshot();await page.focus(ref('Open Alex’s report'));await page.press('Enter');
      record.contentAction=await read(page,()=>({value:document.querySelector('output').textContent,tag:document.activeElement.tagName,slot:document.activeElement.dataset.slot,focus:document.activeElement.matches(':focus-visible')}));
      assert(record.contentAction.value==='1'&&record.contentAction.tag==='BUTTON'&&record.contentAction.slot==='bubble-content'&&record.contentAction.focus,'Real source native content render/callback');
      await page.click(ref('Dark theme'));
      record.dark=await read(page,()=>{const e=document.querySelector('.cn-bubble-variant-tinted');return {surface:getComputedStyle(e).backgroundColor,text:getComputedStyle(e).color,secondary:getComputedStyle(document.querySelector('.cn-bubble-variant-secondary')).backgroundColor};});
      assert(record.dark.surface==='rgb(199, 232, 255)'&&record.dark.text==='rgb(10, 10, 10)'&&record.dark.secondary==='rgb(38, 38, 38)','Observed fixed tint pair and mode-aware secondary');
      record.checks.push('Seven actual variants with native22px corners/10×12px insets/40px one-line height','Speaker attribution remains readable text','Caller reaction toggles native pressed state; Bubble has no reaction event','Actual BubbleContent button render invokes caller once with visible focus','Fixed native tint pair and semantic dark secondary resolve');
    }
    if(family==='marker') {
      record.markers=await read(page,()=>[...document.querySelectorAll('[data-slot="marker"]')].map(e=>({tag:e.tagName,classes:e.className,role:e.getAttribute('role'),gap:getComputedStyle(e).gap,fontSize:getComputedStyle(e).fontSize,lineHeight:getComputedStyle(e).lineHeight,height:e.getBoundingClientRect().height,iconHidden:e.querySelector('[data-slot="marker-icon"]').getAttribute('aria-hidden'),iconSize:e.querySelector('[data-slot="marker-icon"]').getBoundingClientRect().width,before:getComputedStyle(e,'::before').content,after:getComputedStyle(e,'::after').content})));
      assert(record.markers.length===5&&record.markers.every(e=>e.gap==='8px'&&e.fontSize==='14px'&&e.lineHeight==='20px'&&e.iconHidden==='true'&&e.iconSize===16),'Marker actual parts and native typography');
      assert(record.markers[1].before==='""'&&record.markers[1].after==='""'&&record.markers[2].height===28,'Flexible separator lines and28px intrinsic border row');
      assert(record.markers[3].role==='status'&&record.markers[0].role===null,'Status semantics explicitly caller selected');
      await page.focus(ref('Review changes'));await page.press('Enter');
      record.action=await read(page,()=>({value:document.querySelector('output').textContent,focus:document.activeElement.matches(':focus-visible'),tag:document.activeElement.tagName}));
      assert(record.action.value==='1'&&record.action.focus&&record.action.tag==='BUTTON','Actual native Marker render action');
      record.checks.push('Three actual variants,16px hidden supplementary icon,14/20px text','Separator pseudo-lines flexible; border row28px grows from content','Only caller work status receives status role; nested Spinner remains hidden','Selected source render API creates a native keyboard action');
    }
    if(family==='message') {
      record.messages=await read(page,()=>[...document.querySelectorAll('[data-slot="message"]')].map(e=>{const a=e.querySelector('[data-slot="message-avatar"]'),h=e.querySelector('[data-slot="message-header"]'),f=e.querySelector('[data-slot="message-footer"]');return {align:e.dataset.align,direction:getComputedStyle(e).flexDirection,gap:getComputedStyle(e).gap,avatar:{size:a.getBoundingClientRect().width,hidden:a.getAttribute('aria-hidden')},header:{text:h.textContent,height:h.getBoundingClientRect().height,lineHeight:getComputedStyle(h).lineHeight,padding:getComputedStyle(h).padding},footer:{height:f.getBoundingClientRect().height,fontSize:getComputedStyle(f).fontSize,lineHeight:getComputedStyle(f).lineHeight},contentGap:getComputedStyle(e.querySelector('[data-slot="message-content"]')).gap};}));
      assert(record.messages.length===2&&record.messages.every(e=>e.gap==='8px'&&e.avatar.size===32&&e.avatar.hidden==='true'&&e.header.height===20&&e.header.lineHeight==='20px'&&e.header.padding==='0px 12px'&&e.footer.height===24&&e.footer.fontSize==='12px'&&e.footer.lineHeight==='16px'&&e.contentGap==='10px'),'Message source metrics without clipped native header');
      assert(record.messages[0].direction==='row'&&record.messages[1].direction==='row-reverse','Actual align prop controls row direction');
      await page.focus(ref('Add message'));await page.press('Enter');
      record.added=await read(page,()=>({count:document.querySelectorAll('[data-slot="message"]').length,status:document.querySelector('[role="status"]').textContent,focus:document.activeElement.textContent}));
      assert(record.added.count===3&&record.added.status==='3 messages available'&&record.added.focus==='Add message','Caller data rerenders passive message group without stealing focus');
      record.checks.push('Six actual wrappers;32px supplementary avatar and8/10px row/content gaps','Native header14/20px retained without16px frame clipping; footer12/16px minimum24px','Source align=end reverses row; speaker/time are explicit text','Caller append updates data/status while focus remains on native invoking control');
    }
    await page.cdp('Emulation.setDeviceMetricsOverride',JSON.stringify({width:320,height:700,deviceScaleFactor:1,mobile:false}));
    record.narrow=await read(page,()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,widths:[...document.querySelectorAll('[data-slot="bubble"],[data-slot="marker"],[data-slot="message"]')].map(e=>e.getBoundingClientRect().width)}));
    assert(record.narrow.scrollWidth===320&&record.narrow.widths.length>0&&record.narrow.widths.every(w=>w<=272),'Fluid narrow conversation geometry '+family);
    await page.cdp('Emulation.clearDeviceMetricsOverride','{}');
    record.checks.push('320px viewport wraps intrinsic content without horizontal overflow');
    records.push(record);await page.close();
  }
  return {format:'shadcn-semantic-conversation-browser/1',result:'PASS',records};
})()
