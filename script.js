const copy = {
  en: { name:'Shlomi <em>Green</em>', location:'Bangkok, Thailand', role:'Engineering Manager <span>@ Agoda</span>', recommended:'Recommended', primaryTitle:'Contact', allOptions:'All options', moreTitle:'Other contacts', seeMore:'See more ways to connect', seeLess:'Hide other options', footer:'Good conversations start with a simple hello.', share:'Share contact', save:'Save contact', qrTitle:'Send a payment', qrCopy:'Scan this QR code with your banking app. You can enter any amount.', download:'Download QR', shareQr:'Share QR', qrNote:'No fixed amount · Thai QR Payment' },
  th: { name:'ชโลมี <em>กรีน</em>', location:'กรุงเทพฯ ประเทศไทย', role:'ผู้จัดการฝ่ายวิศวกรรม <span>@ Agoda</span>', recommended:'แนะนำ', primaryTitle:'ช่องทางติดต่อ', allOptions:'ช่องทางทั้งหมด', moreTitle:'ช่องทางอื่นๆ', seeMore:'ดูช่องทางการติดต่อเพิ่มเติม', seeLess:'ซ่อนช่องทางอื่น', footer:'ทุกบทสนทนาดีๆ เริ่มต้นจากคำทักทายง่ายๆ', share:'แชร์ข้อมูลติดต่อ', save:'บันทึกข้อมูลติดต่อ', qrTitle:'ส่งเงินผ่าน PromptPay', qrCopy:'สแกน QR นี้ด้วยแอปธนาคารของคุณ และระบุจำนวนเงินได้ตามต้องการ', download:'ดาวน์โหลด QR', shareQr:'แชร์ QR', qrNote:'ไม่มีจำนวนเงินกำหนดไว้ · Thai QR Payment' },
  he: { name:'שלומי <em>גרין</em>', location:'בנגקוק, תאילנד', role:'מנהל פיתוח <span>@ Agoda</span>', recommended:'מומלץ', primaryTitle:'יצירת קשר', allOptions:'כל האפשרויות', moreTitle:'אנשי קשר נוספים', seeMore:'דרכים נוספות ליצירת קשר', seeLess:'הסתר אפשרויות נוספות', footer:'שיחות טובות מתחילות בשלום פשוט.', share:'שיתוף איש קשר', save:'שמירת איש קשר', qrTitle:'שליחת תשלום', qrCopy:'סרקו את קוד ה‑QR באפליקציית הבנק שלכם. ניתן להזין כל סכום.', download:'הורדת QR', shareQr:'שיתוף QR', qrNote:'ללא סכום קבוע · Thai QR Payment' }
};
const contactLabels = {
  en: { phoneTh:['Phone','Thailand'], phoneIl:['Phone','Israel'], line:['LINE','Message me'], email:['Email','Work'], emailPersonal:['Email','Personal'], pay:['PromptPay','Transfer money'], whatsapp:['WhatsApp','Message me'], linkedin:['LinkedIn','Professional profile'], facebook:['Facebook','Social profile'] },
  th: { phoneTh:['โทรศัพท์','ประเทศไทย'], phoneIl:['โทรศัพท์','อิสราเอล'], line:['LINE','ส่งข้อความถึงฉัน'], email:['อีเมล','เรื่องงาน'], emailPersonal:['อีเมล','ส่วนตัว'], pay:['พร้อมเพย์','โอนเงิน'], whatsapp:['วอตส์แอป','ส่งข้อความถึงฉัน'], linkedin:['ลิงก์อิน','โปรไฟล์การทำงาน'], facebook:['เฟซบุ๊ก','โปรไฟล์โซเชียล'] },
  he: { phoneTh:['טלפון','תאילנד'], phoneIl:['טלפון','ישראל'], line:['LINE','שלחו לי הודעה'], email:['אימייל','עבודה'], emailPersonal:['אימייל','אישי'], pay:['PromptPay','העברת כסף'], whatsapp:['וואטסאפ','שלחו לי הודעה'], linkedin:['לינקדאין','פרופיל מקצועי'], facebook:['פייסבוק','פרופיל חברתי'] }
};
const contacts = {
  th: [{kind:'phoneTh', icon:'☎', label:'Phone', hint:'Thailand', href:'tel:+66981616000'}, {kind:'line', icon:'L', label:'LINE', hint:'Message me', href:'https://line.me/ti/p/jGyPOinxkY'}, {kind:'email', icon:'@', label:'Email', hint:'Work', href:'mailto:shlomi.green@agoda.com'}, {kind:'pay', icon:'฿', label:'PromptPay', hint:'Any amount', action:'qr'}],
  il: [{kind:'phoneIl', icon:'☎', label:'Phone', hint:'Israel', href:'tel:+972-54-2-123-123'}, {kind:'whatsapp', icon:'◉', label:'WhatsApp', hint:'Message me', href:'https://wa.me/972542123123'}, {kind:'emailPersonal', icon:'@', label:'Email', hint:'Personal', href:'mailto:shlomki+carrd@gmail.com'}],
  social: [{kind:'linkedin', icon:'in', label:'LinkedIn', hint:'Professional profile', href:'https://www.linkedin.com/in/shlomki'}, {kind:'facebook', icon:'f', label:'Facebook', hint:'Social profile', href:'https://www.facebook.com/shlomki'}]
};
let language = localStorage.getItem('site-language') || (navigator.language || '').slice(0,2);
if (!copy[language]) language = 'en';
let region = localStorage.getItem('site-region') || detectRegion();
if (!['th','il'].includes(region)) region = 'th';
const $ = (selector) => document.querySelector(selector);
function detectRegion() { const lang=(navigator.language||'').toLowerCase(); const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''; if (tz.includes('Jerusalem') || lang.startsWith('he')) return 'il'; if (tz.includes('Bangkok') || lang.startsWith('th')) return 'th'; return 'th'; }
function iconMarkup(item) { if (item.kind==='whatsapp') return '<img class="whatsapp-icon" src="assets/whatsapp-icon.png?v=5" alt="">'; if (item.kind==='email' || item.kind==='emailPersonal') return '<span class="email-icon">@</span>'; return item.icon; }
function renderLinks(target, list) { const root=$(target); root.innerHTML=''; list.forEach(item=>{ const el=item.action==='qr'?document.createElement('button'):document.createElement('a'); const localized=contactLabels[language][item.kind] || [item.label,item.hint]; el.className='contact-link'; el.dataset.kind=item.kind; if (item.action==='qr') { el.type='button'; el.addEventListener('click',openQr); } else { el.href=item.href; if (item.href.startsWith('http')) { el.target='_blank'; el.rel='noopener'; } } el.innerHTML=`<span class="link-icon">${iconMarkup(item)}</span><span><span class="link-label">${localized[0]}</span><span class="link-hint">${localized[1]}</span></span>`; root.appendChild(el); }); }
function setText() { const strings=copy[language]; document.documentElement.lang=language; document.documentElement.dir=language==='he'?'rtl':'ltr'; document.querySelectorAll('[data-i18n]').forEach(el=>{ const key=el.dataset.i18n; if (strings[key]) el.innerHTML=strings[key]; }); $('.language-button').firstChild.textContent=language.toUpperCase()+' '; $('.more-toggle span:first-child').textContent=strings[$('#more-toggle').getAttribute('aria-expanded')==='true'?'seeLess':'seeMore']; }
function render() { setText(); $('#primary-title').textContent=copy[language].primaryTitle; const all=region==='th'?[...contacts.th,...contacts.il,...contacts.social]:[...contacts.il,...contacts.th,...contacts.social]; const hiddenKinds=region==='th'?new Set(['phoneIl','whatsapp']):new Set(['phoneTh','line','pay']); renderLinks('#primary-links',all.filter(item=>!hiddenKinds.has(item.kind))); renderLinks('#secondary-links',all.filter(item=>hiddenKinds.has(item.kind))); }
function openQr() { const dialog=$('#qr-dialog'); const image=$('#qr-image'); image.addEventListener('error',()=>{image.hidden=true;$('#qr-missing').hidden=false;},{once:true}); if (typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open',''); }
function closeQr() { const dialog=$('#qr-dialog'); if (dialog.close) dialog.close(); else dialog.removeAttribute('open'); }
function openProfile() { const dialog=$('#profile-dialog'); if (typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open',''); }
function closeProfile() { const dialog=$('#profile-dialog'); if (dialog.close) dialog.close(); else dialog.removeAttribute('open'); }
$('.language-button').addEventListener('click',()=>{ const menu=$('.language-menu'); const open=menu.hidden; menu.hidden=!open; $('.language-button').setAttribute('aria-expanded',String(open)); });
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{language=button.dataset.language;localStorage.setItem('site-language',language);$('.language-menu').hidden=true;render();}));
$('#more-toggle').addEventListener('click',()=>{ const button=$('#more-toggle'); const expanded=button.getAttribute('aria-expanded')==='true'; button.setAttribute('aria-expanded',String(!expanded)); $('#more-panel').hidden=expanded; setText(); if(!expanded) $('#more-panel').scrollIntoView({behavior:'smooth',block:'nearest'}); });
$('#qr-close').addEventListener('click',closeQr); $('#qr-dialog').addEventListener('click',event=>{if(event.target.id==='qr-dialog')closeQr();});
$('#avatar-button').addEventListener('click',openProfile); $('#profile-close').addEventListener('click',closeProfile); $('#profile-dialog').addEventListener('click',event=>{if(event.target.id==='profile-dialog')closeProfile();});
$('#share-qr').addEventListener('click',async()=>{ const url=$('#qr-image').src; if (navigator.share) await navigator.share({title:'PromptPay QR',text:'PromptPay QR code',url}).catch(()=>{}); else alert('Long-press or right-click the QR code to share it.'); });
$('#share-button').addEventListener('click',async()=>{ const data={title:'Shlomi Green',text:'Say hello!',url:location.href}; if(navigator.share) await navigator.share(data).catch(()=>{}); else await navigator.clipboard?.writeText(location.href); });
function vCardEscape(value) { return String(value).replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n'); }
$('#vcard-button').addEventListener('click',()=>{
  const vcard=[
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Green;Shlomi;;;',
    'FN:Shlomi Green',
    'ORG:Agoda',
    'TITLE:Engineering Manager',
    'TEL;TYPE=CELL,VOICE;LABEL=Thailand:+66981616000',
    'TEL;TYPE=CELL,VOICE;LABEL=Israel:+972-54-2-123-123',
    'EMAIL;TYPE=WORK:shlomi.green@agoda.com',
    'EMAIL;TYPE=HOME:shlomki+carrd@gmail.com',
    'IMPP;X-SERVICE-TYPE=LINE:https://line.me/ti/p/jGyPOinxkY',
    'URL;TYPE=LINE:https://line.me/ti/p/jGyPOinxkY',
    'URL;TYPE=WhatsApp:https://wa.me/972542123123',
    'URL;TYPE=LinkedIn:https://www.linkedin.com/in/shlomki',
    'URL;TYPE=Facebook:https://www.facebook.com/shlomki',
    'URL:https://shlomi.green',
    'NOTE:'+vCardEscape('PromptPay QR available at https://shlomi.green'),
    'END:VCARD'
  ].join('\r\n')+'\r\n';
  const link=document.createElement('a'); link.href=URL.createObjectURL(new Blob([vcard],{type:'text/vcard;charset=utf-8'})); link.download='shlomi-green.vcf'; link.click(); setTimeout(()=>URL.revokeObjectURL(link.href),1000);
});
render();
if (location.protocol.startsWith('http')) fetch('/api/context').then(response=>response.ok?response.json():null).then(context=>{
  const countryMap={TH:'th',IL:'il'};
  const edgeRegion=countryMap[context?.country];
  if (edgeRegion && !localStorage.getItem('site-region')) { region=edgeRegion; render(); }
}).catch(()=>{});
