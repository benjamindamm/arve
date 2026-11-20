#!/usr/bin/env python3
"""Build portable static pilot compositions. Stdlib only; no network or app writes."""
from pathlib import Path
import json, html, textwrap, hashlib
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'docs/handbook/design-resources'
REV='0.1.0'
CONTRACT='65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26'
LONG=('Alpen gemeinsam planen und umsetzen für morgen und übermorgen mit klaren Zielen 2026!')[:80]
assert len(LONG)==80
boards=[]
class Frame:
 def __init__(self,id,title,width):
  self.id=id;self.title=title;self.w=width;self.pad=16 if width<640 else 32;self.c=min(width-2*self.pad,1120);self.y=32;self.nodes=[]
 def rect(self,x,y,w,h,fill='#FFFFFF',stroke=None,r=0,name='Fläche'):
  self.nodes.append(dict(type='rect',x=x,y=y,w=w,h=h,fill=fill,stroke=stroke,r=r,name=name))
 def text(self,s,size=16,weight=400,color='#171717',width=None,x=None):
  x=self.pad if x is None else x;width=self.c if width is None else width
  # Conservative width estimate deliberately allows more space than most Inter glyphs.
  lines=textwrap.wrap(s,max(1,int(width/(size*.59))),break_long_words=True,replace_whitespace=False) or ['']
  line=40 if size==32 else 32 if size==24 else 20 if size==14 else 24
  for v in lines:
   self.nodes.append(dict(type='text',x=x,y=self.y,w=width,h=line,text=v,size=size,weight=weight,fill=color,name=v[:64]));self.y+=line
 def gap(self,n=24):self.y+=n
 def button(self,label,primary=True):
  w=self.c if self.w<640 else min(self.c,max(180,len(label)*8.6+32)); y=self.y
  lines=textwrap.wrap(label,max(1,int((w-32)/7.7)));h=max(44,len(lines)*24+20)
  self.rect(self.pad,y,w,h,'#171717' if primary else '#FFFFFF',None if primary else '#737373',8,label)
  self.y=y+10
  for s in lines:self.text(s,14,600,'#FAFAFA' if primary else '#171717',width=w-32,x=self.pad+16)
  self.y=y+h+12
 def field(self,value='Alpen',error=None,focus=False):
  self.text('Projektname (erforderlich)',14,600);self.gap(8);y=self.y;w=min(self.c,640)
  # For long content this static template grows, exposing the full value for review.
  ls=textwrap.wrap(value,max(1,int((w-32)/9.5))) or ['']; h=max(44,24*len(ls)+20)
  if focus:self.rect(self.pad-4,y-4,w+8,h+8,'#FFFFFF','#171717',10,'Fokusring')
  self.rect(self.pad,y,w,h,'#FFFFFF','#B91C1C' if error else '#737373',8,'Eingabe Projektname');self.y=y+10
  for s in ls:self.text(s,width=w-32,x=self.pad+16)
  self.y=y+h+8;self.text('1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',14,width=w)
  if error:self.gap(8);self.text(error,14,600,'#B91C1C',width=w)
  self.gap(24)
 def heading(self,s):self.text(s,32,600);self.gap(24)
 def note(self,s):self.gap(24);self.text('Entwurfsnotiz',14,600,color='#525252');self.text(s,14,color='#525252')
 def finish(self):self.h=max(440,self.y+32);return self

def find(w):
 f=Frame('finden','01 · Finden',w);f.heading('Projekte');f.button('Projekt erstellen');f.gap(24)
 top=f.y
 for label,value,x,fw in [('Projekte suchen','ALP',f.pad,f.c if w<640 else 640),('Status','Alle',f.pad if w<640 else f.pad+664,f.c if w<640 else 240)]:
  if w>=640:f.y=top
  f.text(label,14,600,x=x,width=fw);f.gap(8);f.rect(x,f.y,fw,44,stroke='#737373',r=8);f.y+=10;f.text(value,x=x+16,width=fw-32);f.y+=18
 f.text('Suche und Filter wirken sofort',14);f.gap(16);f.button('Suche zurücksetzen',False);f.gap(24);f.text('2 Projekte',24,600);f.gap(24)
 if w>=640:
  row=f.y;f.text('Projekt-ID',14,600,width=160);f.y=row;f.text('Projektname',14,600,x=f.pad+184,width=600);f.y=row;f.text('Status',14,600,x=f.pad+808,width=240);f.gap(16)
 for id,name,status in [('P-101','Alpen','Aktiv'),('P-102','Alpen Archiv','Archiviert')]:
  if w>=640:
   row=f.y;f.text(id,14,width=160);f.y=row;f.text(name,16,600,x=f.pad+184,width=600);f.y=row;f.text(status,14,x=f.pad+808,width=240)
  else:f.text(name,16,600);f.text('Projekt-ID: '+id,14);f.text('Status: '+status,14)
  f.gap(24)
 f.note('Kontext: q=ALP · status=all. Projektname öffnet genau eine ID. Rückkehr fokussiert deren Link, sonst die Ergebnisüberschrift.');return f.finish()
def detail(w,name='Alpen',status='Aktiv',id='P-101',success=None):
 f=Frame('detail','02 · Verstehen',w);f.text('← Zurück zu Projekten',14,600);f.gap(48);f.heading(name);f.text('Projekt-ID: '+id);f.text('Status: '+status);f.gap(24)
 if success:f.text(success);f.gap(24)
 if status=='Aktiv':f.button('Projekt bearbeiten')
 else:f.text('Archivierte Projekte sind nur lesbar.')
 f.note('Gleiche ID, gleicher Suchkontext. ID und Status sind keine Eingaben. Keine Zusatzregion für die drei Pflichtangaben.');return f.finish()
def edit(w,create=False,value='Alpen',error=None,message=None,unknown=False,pending=False,focus=False):
 f=Frame('erstellen' if create else 'bearbeiten','Abzweig · Erstellen' if create else '03 · Bearbeiten',w)
 f.heading('Projekt erstellen' if create else 'Projekt bearbeiten')
 f.text('Status bei Erstellung: Aktiv' if create else 'Projekt-ID: P-101 · Status: Aktiv',14);f.gap(24)
 f.field(value,error,focus)
 if message:f.text(message);f.gap(24)
 if not (unknown or pending):
  action='Projekt erstellen' if create else 'Änderungen speichern';row=f.y;f.button(action)
  if w>=640:
   oldpad=f.pad;f.pad+=max(180,len(action)*8.6+32)+12;f.y=row;f.button('Abbrechen',False);f.pad=oldpad
  else:f.button('Abbrechen',False)
 else:f.button('Seite verlassen',False)
 if unknown:f.note('Gestaltungsvoraussetzung: Statusklärung zum ursprünglichen Vorgang fehlt. Kein Status-prüfen-Button, kein erneutes Senden und kein Verwerfen. Ungeklärter Ausgang hat Vorrang vor Dirty-Abbruch.')
 elif pending:f.note('Erneutes Senden ist blockiert. Verlassen stoppt die Anfrage nicht.')
 else:f.note('Ausgangswert: '+('leer' if create else 'Alpen')+'. Erst Absenden prüft. Bestätigung führt zum Detail; q/status bleiben erhalten.')
 return f.finish()
def state(w,id,title,message,action=None,note=None):
 f=Frame(id,title,w);f.heading(title);f.text(message);f.gap(24)
 if action:f.button(action,False)
 if note:f.note(note)
 return f.finish()
def variants(w):
 fs=[]
 for args in [
 ('nulltreffer','Keine Projekte für diese Suche.','Suchbegriff oder Status anpassen.','Suche zurücksetzen','q=Tal und status=all bleiben sichtbar. Bestand ist vorhanden.'),
 ('erstleere','Noch keine Projekte.','Der vollständige Bestand ist leer.','Projekt erstellen','Nicht durch Reset mit Daten füllen; Erstellen führt zum gespeicherten Projekt.'),
 ('liste-laden','Projekte werden geladen.','Suchkriterien bleiben erhalten.',None,'Nur Bereitstellung; lokale Suche benötigt keine künstliche Ladephase.'),
 ('liste-fehler','Projekte konnten nicht geladen werden.','Suchkriterien bleiben erhalten.','Erneut versuchen','Wiederholung nur bei vorübergehender Ursache und vorhandener Datenanbindung.'),
 ('filter-ungueltig','Filter zurückgesetzt','Der ungültige Status wurde auf Alle zurückgesetzt.',None,'q bleibt erhalten. Keine stillschweigende Änderung.'),
 ('rueckkehr','Ergebnisse','Das zuvor geöffnete Projekt ist in diesen Ergebnissen nicht enthalten.',None,'Nach Alpen → Bergblick: q=ALP bleibt. Fokus zur Ergebnisüberschrift; P-102 bleibt Treffer.'),
 ('detail-laden','Projekt wird geladen …','Angeforderte Projekt-ID: P-101','Zurück zu Projekten','Kein unbestätigter Name, Status oder Bearbeiten.'),
 ('detail-fehlt','Projekt nicht gefunden.','Angeforderte Projekt-ID: P-404','Zurück zu Projekten','Bestätigtes Fehlen; kein automatischer Wiederholungsversuch.'),
 ('detail-fehler','Projekt konnte nicht vollständig geladen werden.','Pflichtangaben sind nicht verlässlich verfügbar.','Zurück zu Projekten','Wiederholungsplatz: Erneut laden erst anbieten, wenn eine erneute Leseabfrage existiert.')]:fs.append(state(w,*args))
 f=detail(w,'Alpen Archiv','Archiviert','P-102');f.id='archiviert';f.title='Detail · Archiviert';fs.append(f)
 f=detail(w,LONG,id='P-'+('0123456789'*5));f.id='lange-inhalte';f.title='Detail · 80 Zeichen und lange ID';fs.append(f)
 for id,title,value,error,msg,unknown,pending,focus in [
 ('leer-fehler','Absenden · Leerfehler','', 'Einen Projektnamen eingeben.',None,False,False,True),
 ('lang-fehler','Absenden · Über 80 Zeichen',LONG+'X','Den Projektnamen auf höchstens 80 Zeichen kürzen.',None,False,False,True),
 ('korrigiert','Nach Fehler · korrigiert','Alpen',None,None,False,False,False),
 ('unveraendert','Bearbeiten · unverändert','Alpen',None,'Keine Änderungen zu speichern.',False,False,False),
 ('geaendert','Bearbeiten · ungespeichert','Bergblick',None,None,False,False,False),
 ('laufend','Bearbeiten · laufend','Bergblick',None,'Änderungen werden gespeichert …',False,True,False),
 ('abgelehnt','Bearbeiten · nicht angenommen','Bergblick',None,'Änderungen wurden nicht gespeichert.',False,False,False),
 ('unbekannt','Bearbeiten · Ausgang unbekannt','Bergblick',None,'Es ist noch unklar, ob die Änderungen gespeichert wurden.',True,False,False)]:
  f=edit(w,value=value,error=error,message=msg,unknown=unknown,pending=pending,focus=focus);f.id=id;f.title=title
  if id=='abgelehnt':f.note('Erneutes Senden erst nach bestätigter Nichtannahme und behobener Ursache; keine Namensänderung gegen Verbindungsstörung.')
  fs.append(f.finish())
 for id,title,msg,pending,unknown in [('erstellen-laufend','Erstellen · laufend','Projekt wird erstellt …',True,False),('erstellen-unbekannt','Erstellen · Ausgang unbekannt','Es ist noch unklar, ob das Projekt erstellt wurde.',False,True)]:
  f=edit(w,True,'Alpen',message=msg,pending=pending,unknown=unknown);f.id=id;f.title=title;fs.append(f)
 f=detail(w,'Bergblick',success='Änderungen gespeichert');f.id='bestaetigt';f.title='Bestätigt · P-101 bleibt';fs.append(f)
 f=detail(w,'Alpen',id='P-104',success='Projekt erstellt');f.id='erstellt';f.title='Bestätigt · neue ID';fs.append(f)
 f=state(w,'verwerfen','Ungespeicherte Änderungen verwerfen?','Die ungespeicherten Angaben gehen verloren.','Weiterbearbeiten');f.button('Verwerfen',False);f.note('Dialogvariante: anfänglicher Fokus auf Weiterbearbeiten. Escape verwirft nichts. Weiterbearbeiten erhält Werte/Fokus zum Auslöser. Verwerfen: Bearbeiten → Detail, Erstellen → Liste.');fs.append(f.finish())
 f=state(w,'verlassen','Seite verlassen?','Speicherstand ungeklärt. Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden.','Auf der Seite bleiben');f.button('Seite verlassen',False);f.note('Anfänglicher Fokus: Auf der Seite bleiben. Kein Vorgang-abbrechen-Versprechen. Gilt auch für Browser-Zurück innerhalb der Anwendung. Ohne Bestätigung bleibt der Ausgang ungeklärt.');fs.append(f.finish())
 return fs

def board(id,title,frames,cols,width):
 gap=48; x=32;y=104;rowh=0;nodes=[];groups=[]
 for i,f in enumerate(frames):
  if i and i%cols==0:y+=rowh+gap;x=32;rowh=0
  groups.append(dict(id=f.id,title=f.title,x=x,y=y,width=f.w,height=f.h,nodes=f.nodes));rowh=max(rowh,f.h);x+=f.w+gap
 totalw=64+cols*frames[0].w+(cols-1)*gap;totalh=y+rowh+32
 svg=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{totalw}" height="{totalh}" viewBox="0 0 {totalw} {totalh}" role="img" aria-labelledby="title"><title id="title">{html.escape(title)}</title><rect width="100%" height="100%" fill="#F5F5F5"/><text x="32" y="44" font-family="Inter, sans-serif" font-size="24" font-weight="600">{html.escape(title)}</text><text x="32" y="76" font-family="Inter, sans-serif" font-size="14">Arve · shadcn · Pilot 0.1 · statische Gestaltung · Inter erforderlich</text>']
 for g in groups:
  svg.append(f'<g id="{g["id"]}" transform="translate({g["x"]} {g["y"]})"><title>{html.escape(g["title"])}</title><rect width="{g["width"]}" height="{g["height"]}" fill="white"/>')
  for n in g['nodes']:
   if n['type']=='rect':svg.append(f'<rect x="{n["x"]}" y="{n["y"]}" width="{n["w"]}" height="{n["h"]}" fill="{n["fill"]}" stroke="{n["stroke"] or "none"}" rx="{n["r"]}"/>')
   else:svg.append(f'<text x="{n["x"]}" y="{n["y"]+n["size"]}" fill="{n["fill"]}" font-family="Inter, sans-serif" font-size="{n["size"]}" font-weight="{n["weight"]}">{html.escape(n["text"])}</text>')
  svg.append('</g>')
 svg.append('</svg>');(OUT/(id+'.svg')).write_text('\n'.join(svg))
 boards.append(dict(id=id,title=title,width=width,canvasWidth=totalw,canvasHeight=totalh,frames=groups))

OUT.mkdir(parents=True,exist_ok=True)
for w,label in [(1280,'breit'),(352,'schmal')]:
 board('ablauf-'+label,'Finden → Verstehen → Bearbeiten · '+label,[find(w),detail(w),edit(w,value='Bergblick'),edit(w,True,'')],2,w)
 # State atlas uses the same available content width as the narrow sequence; wide fragments at 704/640 content.
 sw=704 if w==1280 else 352
 board('zustaende-'+label,'Zustände im selben Arbeitsweg · '+label,variants(sw),3 if w==1280 else 2,sw)
(OUT/'layout-data.json').write_text(json.dumps(boards,ensure_ascii=False,indent=2)+'\n')
manifest=dict(revision=REV,source=dict(library='shadcn',contractRevision=CONTRACT,pilotRules='0.1 · 18.11.2026',files=['scripts/content/pilot-'+v+'-release.ts' for v in ['overview','find','detail','edit']]),limitations=['Statische Gestaltung, keine Projektanwendung oder Laufzeitabnahme.','Inter muss im Zielwerkzeug verfügbar sein; SVG lädt keine externen Schriften oder Assets.','Native FIGs sind flache editierbare Frames/Texte, keine Varianten- oder Auto-Layout-Bibliothek.','Importierte Komponenten bleiben draft; diese Pilotkompositionen sind kein Upstream-Design.','Unabhängige Teamprobe und assistive Prüfung stehen aus.'],templates=[])
for b in boards:
 for ext,kind in [('svg','svg'),('fig','fig')]:
  manifest['templates'].append(dict(id=b['id']+'-'+ext,title=b['title'],description='Zusammenhängende Hauptfolge mit Erstellen-Abzweig.' if b['id'].startswith('ablauf') else '25 Zustands- und Inhaltsvarianten als kopierbare Regionen; gleiche Regeln wie die Hauptfolge.',path=b['id']+'.'+ext,kind=kind,width=b['width']))
(OUT/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print('Created',len(boards),'boards;',len(boards[1]['frames']),'state regions')
