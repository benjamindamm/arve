import React,{useState} from 'react';
import {AreaChart,Area,BarChart,Bar,LineChart,Line,PieChart,Pie,RadarChart,Radar,RadialBarChart,RadialBar,PolarGrid,PolarAngleAxis,XAxis,YAxis,CartesianGrid,Cell} from 'recharts';
import {ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from './ui/chart.mjs';
import {Button} from './ui/button.mjs';
import data from '../../../libraries/shadcn/sources/chart-reference-data.json';
export const semanticChartFamilies=Object.keys(data.families);
function Plot({family,source,indicator,hideIndicator,width,height}){
 const props={data:source.dataset,accessibilityLayer:false,width,height};
 const tooltip=<ChartTooltip content={<ChartTooltipContent indicator={indicator} hideIndicator={hideIndicator}/>} isAnimationActive={false}/>;
 const legend=<ChartLegend content={<ChartLegendContent className="chart-legend" nameKey={source.categoryKey==='browser'?'browser':undefined}/>}/>;
 const key=source.series[0],category=source.categoryKey;
 const color='var(--chart-series-primary)',secondary='var(--chart-series-secondary)';
 if(family==='chart-area')return <AreaChart {...props}><XAxis dataKey={category}/><YAxis/><CartesianGrid vertical={false}/>{tooltip}{legend}<Area dataKey={key} stroke={color} fill={color} fillOpacity={.25} type="natural" isAnimationActive={false}/></AreaChart>;
 if(family==='chart-line')return <LineChart {...props}><XAxis dataKey={category}/><YAxis/>{tooltip}{legend}<Line dataKey={key} type="natural" stroke={color} isAnimationActive={false}/></LineChart>;
 if(family==='chart-pie')return <PieChart {...props}>{tooltip}{legend}<Pie rootTabIndex={-1} data={source.dataset} dataKey={key} nameKey={category} fill={color} isAnimationActive={false}>{source.dataset.map((r,i)=><Cell key={i} fill={i%2?secondary:color} fillOpacity={.5+.5*i/source.dataset.length}/>)}</Pie></PieChart>;
 if(family==='chart-radar')return <RadarChart {...props} outerRadius="70%"><PolarGrid/><PolarAngleAxis dataKey={category}/>{tooltip}{legend}<Radar dataKey={key} stroke={color} fill={color} fillOpacity={.25} isAnimationActive={false}/></RadarChart>;
 if(family==='chart-radial')return <RadialBarChart {...props} innerRadius={25} outerRadius={100}>{tooltip}{legend}<RadialBar dataKey={key} fill={color} isAnimationActive={false}/></RadialBarChart>;
 return <BarChart {...props}><XAxis dataKey={category}/><YAxis/><CartesianGrid vertical={false}/>{tooltip}{legend}{source.series.map((k,i)=><Bar key={k} dataKey={k} fill={i?secondary:color} stackId={family==='chart-tooltip'?'a':undefined} isAnimationActive={false}/>)}</BarChart>;
}
export function SemanticChartLab({family}){
 const [mode,setMode]=useState('ready'),[dark,setDark]=useState(false),[rtl,setRtl]=useState(false),[indicator,setIndicator]=useState('dot'),[hide,setHide]=useState(false);
 const source=data.families[family],rows=mode==='ready'?source.dataset:[],keys=[source.categoryKey,...source.series];
 const config=Object.fromEntries(source.series.map((key,i)=>[key,{label:key[0].toUpperCase()+key.slice(1),theme:{light:i?'var(--ui-chart-series-secondary)':'var(--ui-chart-series-primary)',dark:i?'var(--ui-chart-series-secondary)':'var(--ui-chart-series-primary)'}}]));
 if(source.categoryKey==='browser')source.dataset.forEach(row=>{config[row.browser]={label:row.browser,color:'var(--ui-chart-series-primary)'};});
 return <main data-semantic-family={family} data-theme={dark?'dark':'light'} className={dark?'dark':''} dir={rtl?'rtl':'ltr'}><h1>{family} semantic source composition</h1><label><input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)}/>Dark theme</label><label><input type="checkbox" checked={rtl} onChange={e=>setRtl(e.target.checked)}/>Right to left</label><label>Tooltip indicator<select value={indicator} onChange={e=>setIndicator(e.target.value)}><option>dot</option><option>line</option><option>dashed</option></select></label><label><input type="checkbox" checked={hide} onChange={e=>setHide(e.target.checked)}/>Hide indicator</label>
 <figure data-part="chart-figure" data-chart-kind={family} aria-labelledby="chart-title" aria-describedby="chart-summary"><figcaption data-part="chart-caption" id="chart-title">{family}: complete official source sample</figcaption><p data-part="chart-summary" id="chart-summary">{source.unit} The full exact table is available without hover. Graph, color and tooltip are supplementary; interpolated curves are not additional observations.</p>{mode==='ready'?<ChartContainer config={config} aria-hidden="true"><Plot family={family} source={source} indicator={indicator} hideIndicator={hide}/></ChartContainer>:<p data-part="chart-feedback" role="status">{mode==='error'?'Chart data could not be loaded. Retry the request.':'No chart data available.'}</p>}<div data-part="chart-table-scroll"><table data-part="chart-table"><caption>Complete source sample data</caption><thead><tr>{keys.map(key=><th key={key} scope="col">{key}</th>)}</tr></thead><tbody>{rows.map((row,i)=><tr key={i}>{keys.map((key,j)=>j?<td key={key}>{row[key]}</td>:<th key={key} scope="row">{row[key]}</th>)}</tr>)}</tbody></table></div></figure>
 <Button onClick={()=>setMode('empty')}>Show empty data</Button><Button onClick={()=>setMode('error')}>Show error feedback</Button><Button onClick={()=>setMode('ready')}>Restore source data</Button><Button>After chart</Button></main>;
}
