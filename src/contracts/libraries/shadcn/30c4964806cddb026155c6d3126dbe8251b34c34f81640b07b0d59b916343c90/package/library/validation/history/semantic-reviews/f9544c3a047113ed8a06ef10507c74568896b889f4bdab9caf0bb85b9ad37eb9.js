/* Run with BrowserOS neo run; own normal family routes only. Native actions,
 * read-only DOM/style measurements. This is a bounded source-adapter check. */
(async () => {
  const records = [];
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const read = async (page, fn) => (await page.evaluateInPage(fn)).value;
  for (const family of ['button', 'checkbox', 'switch', 'input', 'accordion']) {
    const url = 'http://localhost:5175/?family=' + family;
    const page = await browser.open(url);
    let snapshot = await page.snapshot();
    const ref = name => {
      const item = snapshot.refs.find(r => r.name === name);
      assert(item, 'Missing accessible control: ' + name);
      return item.ref;
    };
    const record = {family, url, checks: []};
    if (family === 'button') {
      const dark = await read(page, () => document.querySelector('main').dataset.theme);
      if (dark === 'dark') await page.click(ref('Dark theme'));
      const before = await read(page, () => Number(document.querySelector('output').textContent));
      snapshot = await page.snapshot();
      await page.focus(ref('default default'));
      await page.press('Enter');
      record.activation = await read(page, () => ({count: Number(document.querySelector('output').textContent), focus: document.activeElement.matches(':focus-visible')}));
      assert(record.activation.count === before + 1 && record.activation.focus, 'Native keyboard action/focus');
      record.geometry = await read(page, () => [...document.querySelectorAll('section:first-of-type .cn-button')].map(e => ({height:e.getBoundingClientRect().height, width:e.getBoundingClientRect().width, icon:e.querySelector('svg')?.getBoundingClientRect().width})));
      assert(record.geometry.every((e, i) => e.height === [24,28,32,36,24,28,32,36][i]), 'Button public sizes');
      assert(record.geometry.slice(4).every(e => e.width === e.height && e.icon === 16), 'Square icon controls');
      await page.click(ref('Dark theme'));
      record.dark = await read(page, () => ({secondary:getComputedStyle(document.querySelector('.cn-button-variant-secondary')).backgroundColor, destructive:getComputedStyle(document.querySelector('.cn-button-variant-destructive')).color}));
      assert(record.dark.secondary === 'rgb(38, 38, 38)' && record.dark.destructive === 'rgb(255, 127, 110)', 'Mode-bound aliases');
      record.checks.push('Native Enter increments callback once; focus visible', 'Eight size dimensions and16px icons', 'Dark-mode semantic component aliases');
    }
    if (family === 'checkbox' || family === 'switch') {
      const slot = family;
      record.before = await read(page, () => [...document.querySelectorAll('[data-slot="checkbox"],[data-slot="switch"]')].map(e => ({checked:e.getAttribute('aria-checked'), width:e.getBoundingClientRect().width, height:e.getBoundingClientRect().height, disabled:e.getAttribute('aria-disabled'), invalid:e.getAttribute('aria-invalid')})));
      await page.focus(ref(family === 'checkbox' ? 'Notifications' : 'Auto updates'));
      await page.press(' ');
      record.after = await read(page, () => { const e=document.querySelector('[data-slot="checkbox"],[data-slot="switch"]');return {checked:e.getAttribute('aria-checked'), focus:e.matches(':focus-visible'), outline:getComputedStyle(e).outlineStyle}; });
      assert(record.after.checked !== record.before[0].checked && record.after.focus && record.after.outline === 'solid', 'Native Space toggle/focus');
      assert(record.before.some(e => e.disabled === 'true'), 'Disabled source state');
      if (family === 'checkbox') {
        assert(record.before.some(e => e.invalid === 'true'), 'Invalid source state');
        assert(record.before.every(e => e.width === 16 && e.height === 16), 'Checkbox16px');
        record.mixed = await read(page, () => {const i=document.querySelector('[data-indeterminate] [data-slot="checkbox-indicator"]');return i?{width:i.getBoundingClientRect().width, minus:getComputedStyle(i,'::after').width, position:getComputedStyle(i).position}:null;});
        assert(record.mixed?.width === 14 && record.mixed.minus === '7px' && record.mixed.position === 'relative', 'Anchored mixed indicator');
        snapshot = await page.snapshot();
        await page.click(ref('Mixed preference'));
        record.committed = await read(page, () => {const e=document.querySelectorAll('[data-slot="checkbox"]')[1];return {checked:e.getAttribute('aria-checked'), mixed:e.hasAttribute('data-indeterminate')};});
        assert(record.committed.checked === 'true' && !record.committed.mixed, 'Mixed commits boolean value');
      } else {
        record.thumbs = await read(page, () => [...document.querySelectorAll('[data-slot="switch"]')].map(e => {const t=e.querySelector('[data-slot="switch-thumb"]');return {width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height,thumb:t.getBoundingClientRect().width,transform:getComputedStyle(t).transform};}));
        assert(record.thumbs[1].width === 24 && record.thumbs[1].height === 14 && record.thumbs[1].thumb === 12, 'Small switch geometry');
        assert(record.thumbs[2].transform.endsWith('-14, 0)') && record.thumbs[3].transform.endsWith('-10, 0)'), 'Default/small RTL travel');
      }
      record.checks.push('Native Space toggles source controlled value; focus visible', 'Disabled control exposed as disabled', 'Source-specific state geometry');
    }
    if (family === 'input') {
      await page.focus(ref('Project name'));
      await page.type('Semantic fixture');
      record.input = await read(page, () => {const e=document.querySelector('[data-slot="input"]'),c=getComputedStyle(e);return {value:e.value,height:e.getBoundingClientRect().height,padding:c.padding,border:c.borderWidth,shadow:c.boxShadow,font:c.fontFamily};});
      assert(record.input.value.includes('Semantic fixture') && record.input.height === 32 && record.input.padding === '4px 10px' && record.input.border === '1px' && record.input.shadow !== 'none', 'Input actual value/geometry/focus');
      record.checks.push('Native text updates source controlled value', '32px/4×10px geometry and visible focus shadow');
    }
    if (family === 'accordion') {
      await page.focus(ref('First section'));
      const before = await read(page, () => document.querySelector('[data-slot="accordion-trigger"]').getAttribute('aria-expanded'));
      await page.press('Enter');
      const after = await read(page, () => document.querySelector('[data-slot="accordion-trigger"]').getAttribute('aria-expanded'));
      assert(before !== after, 'Accordion Enter toggles');
      await page.press('Enter');
      record.triggers = await read(page, () => [...document.querySelectorAll('[data-slot="accordion-trigger"]')].map(e => ({height:e.getBoundingClientRect().height,padding:getComputedStyle(e).padding,gap:getComputedStyle(e).gap,font:getComputedStyle(e).fontFamily,icons:[...e.querySelectorAll('svg')].filter(s=>getComputedStyle(s).display!=='none'&&getComputedStyle(s).visibility!=='hidden').map(s=>s.getBoundingClientRect().width)})));
      assert(record.triggers.every(e => e.height === 40 && e.padding === '10px 0px' && e.gap === '8px' && e.icons.length === 1 && e.icons[0] === 16 && e.font.startsWith('Inter')), 'Accordion source anatomy/font geometry');
      record.checks.push('Native Enter closes/reopens controlled panel', 'Actual dual SVG source selects exactly one16px icon', '40px trigger,10px padding,8px gap and inherited Inter/Arabic fallback');
    }
    if (family === 'input' || family === 'accordion') {
      await page.cdp('Emulation.setDeviceMetricsOverride', JSON.stringify({width:320,height:700,deviceScaleFactor:1,mobile:false}));
      record.narrow = await read(page, () => ({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,widths:[...document.querySelectorAll('[data-slot="input"],[data-slot="accordion-trigger"]')].map(e=>e.getBoundingClientRect().width)}));
      await page.cdp('Emulation.clearDeviceMetricsOverride', '{}');
      assert(record.narrow.scrollWidth === 320 && record.narrow.widths.every(w=>w===272), 'Fluid narrow geometry');
      record.checks.push('320px viewport gives272px controls without horizontal overflow');
    }
    records.push(record);
    await page.close();
  }
  return {format:'shadcn-semantic-controls-browser/1', result:'PASS', records};
})()
