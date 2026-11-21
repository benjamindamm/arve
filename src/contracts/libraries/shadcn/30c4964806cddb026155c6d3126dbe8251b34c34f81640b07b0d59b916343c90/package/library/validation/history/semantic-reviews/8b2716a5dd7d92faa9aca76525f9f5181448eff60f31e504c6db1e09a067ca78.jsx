import React,{useState} from 'react';
import {BubbleGroup,Bubble,BubbleContent,BubbleReactions} from './ui/bubble.mjs';
import {Marker,MarkerIcon,MarkerContent} from './ui/marker.mjs';
import {MessageGroup,Message,MessageAvatar,MessageContent,MessageHeader,MessageFooter} from './ui/message.mjs';
import {Button} from './ui/button.mjs';
import {Spinner} from './ui/spinner.mjs';

export const semanticConversationFamilies=['bubble','marker','message'];
const check=<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor"/></svg>;
export function SemanticConversationLab({family}) {
  const [dark,setDark]=useState(false);
  const [liked,setLiked]=useState(false);
  const [actions,setActions]=useState(0);
  const [messages,setMessages]=useState(2);
  return <main data-semantic-family={family} data-theme={dark?'dark':'light'}>
    <h1>{family} semantic source adapter</h1>
    <label><input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)}/>Dark theme</label>
    {family==='bubble'&&<>
      <BubbleGroup>{['default','secondary','muted','tinted','outline','ghost','destructive'].map((variant,index)=><Bubble key={variant} variant={variant} align={index%2?'end':'start'}>
        <BubbleContent><p>Alex: The {variant} report is ready.</p></BubbleContent>
        {index===0&&<BubbleReactions side="bottom" align="end"><Button size="xs" variant="ghost" aria-label="Like Alex’s message" aria-pressed={liked} onClick={()=>setLiked(!liked)}>{liked?'Liked':'Like'} ({liked?1:0})</Button></BubbleReactions>}
      </Bubble>)}</BubbleGroup>
      <Bubble variant="outline"><BubbleContent render={<button type="button"/>} onClick={()=>setActions(n=>n+1)}><span>Open Alex’s report</span></BubbleContent></Bubble>
      <output aria-label="Bubble content actions">{actions}</output>
    </>}
    {family==='marker'&&<section data-lab-markers>
      {['default','separator','border'].map(variant=><Marker key={variant} variant={variant}><MarkerIcon>{check}</MarkerIcon><MarkerContent>{variant} review complete</MarkerContent></Marker>)}
      <Marker role="status"><MarkerIcon><Spinner/></MarkerIcon><MarkerContent>Running tests</MarkerContent></Marker>
      <Marker render={<button type="button"/>} onClick={()=>setActions(n=>n+1)}><MarkerIcon>{check}</MarkerIcon><MarkerContent>Review changes</MarkerContent></Marker>
      <output aria-label="Marker action count">{actions}</output>
    </section>}
    {family==='message'&&<>
      <MessageGroup>{Array.from({length:messages},(_,index)=><Message key={index} align={index%2?'end':'start'}>
        <MessageAvatar aria-hidden="true">{index%2?'MO':'AL'}</MessageAvatar>
        <MessageContent><MessageHeader>{index%2?'Morgan':'Alex'} · <time dateTime="2026-11-21T10:24:00Z">10:24</time></MessageHeader>
          <p>{index%2?'Morgan: I will review it.':'Alex: The report is ready.'}</p>
          <MessageFooter>Delivered</MessageFooter>
        </MessageContent>
      </Message>)}</MessageGroup>
      <Button onClick={()=>setMessages(n=>n+1)}>Add message</Button><div role="status">{messages} messages available</div>
    </>}
  </main>;
}
