import {AGENCY_STATS, AGENCY_SERVICES, CASE_STUDIES, INSIGHTS, TIMELINE, AGENCY_VALUES, AGENCY_TEAM, MEDIA_LOGOS} from './data.js';

const $ = s => document.querySelector(s);
const app = $('#app');
let currentPage = location.hash.slice(1) || 'home';
const valid = ['home','about','services','work','insights','contact'];
if(!valid.includes(currentPage)) currentPage='home';

const navItems=[['home','Home'],['about','About'],['services','Services'],['work','Our Work'],['insights','Insights'],['contact','Contact']];

function nav(){
 return `<header class="nav" id="nav"><div class="container nav-inner">
  <a class="brand" href="#home"><img class="brand-logo" src="images/GOVERNOR LOGO-01.png" alt="Governor Digital PR"></a>
  <nav class="navlinks">${navItems.map(([id,l])=>`<button class="${currentPage===id?'active':''}" data-nav="${id}">${l}</button>`).join('')}</nav><a class="btn btn-primary nav-cta" href="https://wa.me/254700686943?text=Hello%20Governor%20Digital%20PR!%20I%20would%20like%20to%20discuss%20a%20PR%20campaign." target="_blank" rel="noopener">Let's Talk ↗</a>
   <button class="menu" id="menu">☰</button>
   <div class="mobile" id="mobile">${navItems.map(([id,l])=>`<button data-nav="${id}">${l}</button>`).join('')}<button data-audit>✦ Request a Media Audit</button></div>
 </div></header><section class="media-ticker" aria-label="Media recognition"><div class="container media-ticker-inner"><div class="media-ticker-heading">Our Stories, Op-Eds &amp; Campaigns Regularly Featured In:</div><div class="media-ticker-viewport"><div class="media-ticker-track"><div class="media-ticker-group">Daily Nation <span>•</span> Business Daily Africa <span>•</span> The Standard <span>•</span> Citizen TV <span>•</span> Capital FM Kenya <span>•</span> CNBC Africa <span>•</span> TechC <span>•</span></div><div class="media-ticker-group" aria-hidden="true">Daily Nation <span>•</span> Business Daily Africa <span>•</span> The Standard <span>•</span> Citizen TV <span>•</span> Capital FM Kenya <span>•</span> CNBC Africa <span>•</span> TechC <span>•</span></div></div></div></div></section>`;
}
function stats(){return `<div class="statbar">${AGENCY_STATS.map(s=>`<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join('')}</div>`}
function icon(name){const map={Globe:'◉',Compass:'✦',Mic:'◌',Share2:'⌁',ShieldCheck:'✓',Sparkles:'✦',TrendingUp:'↗',Users:'◫',Zap:'ϟ'};return `<div class="icon">${map[name]||'✦'}</div>`}
function img(src){return src||'assets/images/governor-hero-african-pr.jpg'}
function pageHero(kicker,title,desc){return `<section class="page-hero container reveal"><span class="eyebrow">✦ ${kicker}</span><h1 class="heading">${title}</h1><p>${desc}</p></section>`}

function home(){
 return `<div>
 <section class="hero"><div class="hero-media"></div><div class="container hero-grid">
  <div class="reveal"><span class="eyebrow">✦ Digital PR • Kenya • Pan-Africa</span><h1 class="heading">Make your brand <span>impossible to ignore.</span></h1>
  <p>We engineer high-impact digital PR, media visibility and strategic communications for ambitious African brands, leaders and organizations.</p>
  <div class="hero-actions"><button class="btn btn-primary" data-nav="contact">Start a Campaign ↗</button><button class="btn btn-outline" data-audit>Get a Free Media Audit</button></div>
  ${stats()}</div>
  <div class="hero-card glass reveal"><img src="assets/images/governor-campaign-launch.jpg"><div class="mini"><div><b class="heading">Built for influence.</b><div class="muted">Strategy → Story → Visibility</div></div><span class="eyebrow">Nairobi</span></div></div>
 </div></section>
 <section class="section"><div class="container"><div class="section-head reveal"><span class="eyebrow">Our capabilities</span><h2 class="heading">PR that moves the needle.</h2><p>From earned media to reputation management, we connect the right story to the right audience at the right moment.</p></div>
 <div class="grid three">${AGENCY_SERVICES.slice(0,6).map(s=>`<article class="card glass service-card reveal">${icon(s.iconName)}<h3>${s.title}</h3><p class="muted">${s.shortDesc}</p><button class="link" data-service="${s.id}">Explore service →</button></article>`).join('')}</div>
 </div></section>
 <section class="section" style="background:#10021e"><div class="container"><div class="section-head reveal"><span class="eyebrow">Selected work</span><h2 class="heading">Proof, not promises.</h2><p>Selected campaigns and communications programs engineered for measurable visibility.</p></div>
 <div class="grid three">${CASE_STUDIES.slice(0,3).map(workCard).join('')}</div><div style="text-align:center;margin-top:30px"><button class="btn btn-outline" data-nav="work">View all work →</button></div></div></section>
 <section class="section"><div class="container"><div class="glass card reveal" style="padding:50px;text-align:center"><span class="eyebrow">Ready when you are</span><h2 class="heading" style="font-size:clamp(36px,5vw,60px);margin:18px 0 10px">Let's build your next headline.</h2><p class="muted">Tell us what you're trying to achieve. We'll bring the strategy, media intelligence and execution.</p><button class="btn btn-primary" data-nav="contact">Talk to a PR Strategist ↗</button></div></div></section>
 </div>`;
}
function workCard(c){return `<article class="card glass work-card reveal"><img src="${img(c.image)}"><div class="inside"><div class="work-meta">${c.category}</div><h3>${c.title}</h3><p class="muted">${c.shortResult}</p><button class="link" data-work="${c.id}">Read case study →</button></div></article>`}

function about(){
 return `<div class="page">${pageHero('Our identity & heritage','African insight. Global standards.','Governor Digital PR is a Kenya-based strategic communications partner built to make African brands more visible, credible and influential.')}
 <section class="section"><div class="container about-split"><img class="about-image reveal" src="assets/images/governor-team-nairobi.jpg"><div class="reveal"><span class="eyebrow">Who we are</span><h2 class="heading" style="font-size:48px;line-height:1.05">We turn reputation into an asset.</h2><p class="muted">We combine newsroom-grade storytelling, digital distribution, social intelligence and executive communications to help organizations earn attention — and keep it.</p><p class="muted">Our work is rooted in Kenya and designed for the speed, nuance and ambition of modern African markets.</p><button class="btn btn-primary" data-nav="services">Explore our services →</button></div></div></section>
 <section class="section" style="background:#10021e"><div class="container"><div class="section-head"><span class="eyebrow">Our journey</span><h2 class="heading">Built over time.</h2></div><div class="timeline">${TIMELINE.map(t=>`<div class="timeline-row reveal"><div class="year">${t.year}</div><div><h3 class="heading">${t.title}</h3><p class="muted">${t.description}</p><b style="color:#ff7eaa">${t.highlight}</b></div></div>`).join('')}</div></div></section>
 <section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Our values</span><h2 class="heading">How we operate.</h2></div><div class="grid three values">${AGENCY_VALUES.map(v=>`<div class="card glass reveal"><h3>${v.title}</h3><p class="muted">${v.description}</p></div>`).join('')}</div></div></section>
 <section class="section"><div class="container"><div class="section-head"><span class="eyebrow">The team</span><h2 class="heading">People behind the signal.</h2></div><div class="grid four">${AGENCY_TEAM.map(t=>`<div class="card glass reveal">${t.avatar?`<img src="${t.avatar}" style="width:72px;height:72px;border-radius:50%;object-fit:cover">`:icon('Users')}<h3>${t.name}</h3><p style="color:#ff8fb5;font-size:12px;font-weight:800">${t.role}</p><p class="muted">${t.bio||''}</p></div>`).join('')}</div></div></section>
 </div>`;
}

function services(){
 let active='All';
 const render=()=>{const list=active==='All'?AGENCY_SERVICES:AGENCY_SERVICES.filter(s=>s.category===active);$('.service-list').innerHTML=list.map(s=>`<article class="card glass service-card reveal"><div style="display:flex;justify-content:space-between;gap:20px">${icon(s.iconName)}<span class="eyebrow">${s.metric||'Strategic'}</span></div><h3>${s.title}</h3><p style="color:#ff8fb5;font-weight:700">${s.tagline}</p><p class="muted">${s.shortDesc}</p><button class="link" data-service="${s.id}">View deliverables →</button></article>`).join('');observe()};
 setTimeout(()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{active=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()});render()},0);
 return `<div class="page">${pageHero('What we do','Services designed for visibility.','A modular communications stack covering digital PR, media, reputation, social growth, executive positioning and content.')}
 <section class="section" style="padding-top:20px"><div class="container"><div class="filters">${['All','Reputation & Visibility','Corporate Strategy','Media & Press','Digital Growth','Creative Studio'].map((x,i)=>`<button class="filter ${i===0?'active':''}" data-filter="${x}">${x}</button>`).join('')}</div><div class="grid two service-list"></div></div></section>
 <section class="section"><div class="container"><div class="glass card reveal" style="text-align:center;padding:45px"><span class="eyebrow">No guesswork</span><h2 class="heading" style="font-size:45px">Need the right mix?</h2><p class="muted">Request a free Digital PR & Media Strategy Audit and we'll map your visibility opportunities.</p><button class="btn btn-yellow" data-audit>Request your audit ✦</button></div></div></section></div>`;
}

function work(){
 let active='All';
 const categories=['All','PR Campaigns','Corporate Communications','Events','Brand Campaigns','Digital Campaigns'];
 const render=()=>{$('.work-list').innerHTML=(active==='All'?CASE_STUDIES:CASE_STUDIES.filter(x=>x.category===active)).map(workCard).join('');observe();bindDynamic()};
 setTimeout(()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{active=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()});render()},0);
 return `<div class="page">${pageHero('Case studies','Work that earns attention.','A selection of campaigns where strategy, storytelling and distribution came together to create measurable outcomes.')}
 <section class="section" style="padding-top:20px"><div class="container"><div class="filters">${categories.map((x,i)=>`<button class="filter ${i===0?'active':''}" data-filter="${x}">${x}</button>`).join('')}</div><div class="grid three work-list"></div></div></section></div>`;
}
function insights(){
 let category='All', query='';
 const render=()=>{const arr=INSIGHTS.filter(a=>(category==='All'||a.category===category)&&((a.title+' '+a.excerpt+' '+a.tags.join(' ')).toLowerCase().includes(query.toLowerCase())));$('.articles').innerHTML=arr.map(a=>`<article class="card glass work-card article-card reveal"><img src="${img(a.image)}"><div class="inside"><div class="article-meta">${a.category} · ${a.date} · ${a.readTime}</div><h3>${a.title}</h3><p class="muted">${a.excerpt}</p><button class="link" data-article="${a.id}">Read insight →</button></div></article>`).join('')||'<p class="muted" style="text-align:center">No insights match your search.</p>';observe();bindDynamic()};
 setTimeout(()=>{document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{category=b.dataset.cat;document.querySelectorAll('[data-cat]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()});$('#insight-search').oninput=e=>{query=e.target.value;render()};render()},0);
 return `<div class="page">${pageHero('Ideas & intelligence','Insights for modern African brands.','Practical thinking on PR, communications, reputation, digital marketing and the Kenyan business landscape.')}
 <section class="section" style="padding-top:20px"><div class="container"><div class="search"><input id="insight-search" placeholder="Search insights, topics or tags…"></div><div class="filters">${['All','PR','Communications','Branding','Kenyan Business','Digital Marketing','Social Media','Trends'].map((x,i)=>`<button class="filter ${i===0?'active':''}" data-cat="${x}">${x}</button>`).join('')}</div><div class="grid two articles"></div></div></section></div>`;
}
function contact(){
 return `<div class="page">${pageHero('Start a conversation','Let’s make your next move matter.','Tell us where you want to go. We’ll come back with a focused communications approach, practical next steps and clear expectations.')}
 <section class="section" style="padding-top:25px"><div class="container contact-grid"><div class="contact-info reveal"><h2 class="heading" style="font-size:40px">Talk to the team.</h2><p class="muted">Whether you're launching, scaling, defending reputation or preparing for a major announcement, we're ready.</p><div class="item"><div class="icon">☎</div><div><b>Phone / WhatsApp</b><div class="muted">+254 700 686943</div></div></div><div class="item"><div class="icon">✉</div><div><b>Email</b><div class="muted">governordigitalpr@gmail.com</div></div></div><div class="item"><div class="icon">⌖</div><div><b>Base</b><div class="muted">Nairobi, Kenya · Serving Pan-Africa</div></div></div></div>
 <form class="glass contact-form reveal" id="contact-form"><div class="form-grid"><div class="field"><label>FULL NAME</label><input required name="name" placeholder="Your name"></div><div class="field"><label>COMPANY / ORGANIZATION</label><input name="company" placeholder="Organization"></div><div class="field"><label>EMAIL</label><input required type="email" name="email" placeholder="you@example.com"></div><div class="field"><label>PHONE</label><input name="phone" placeholder="+254…"></div><div class="field full"><label>SERVICE REQUIRED</label><select name="service">${AGENCY_SERVICES.map(s=>`<option>${s.title}</option>`).join('')}</select></div><div class="field full"><label>MESSAGE</label><textarea required name="message" placeholder="What are you trying to achieve?"></textarea></div><div class="field full"><button class="btn btn-primary" type="submit">Send inquiry ↗</button></div></div></form></div></section></div>`;
}

function footer(){return `<footer><div class="container"><div class="footer-grid"><div><a class="brand" href="#home"><img class="brand-logo" src="images/GOVERNOR LOGO-01.png" alt="Governor Digital PR"></a><p class="muted">High-impact digital PR and strategic communications for ambitious African brands.</p></div><div><b>Navigate</b><div class="footer-links" style="margin-top:12px">${navItems.map(([id,l])=>`<button data-nav="${id}">${l}</button>`).join('')}</div></div><div><b>Services</b><div class="footer-links" style="margin-top:12px">${AGENCY_SERVICES.slice(0,6).map(s=>`<button data-service="${s.id}">${s.title}</button>`).join('')}</div></div><div><b>Media</b><div class="footer-links" style="margin-top:12px">${MEDIA_LOGOS.slice(0,6).map(x=>`<span class="muted">${x}</span>`).join('')}</div></div></div><div class="copyright"><span>© 2019 Governor Digital PR. All rights reserved.</span><span>Kenya · Pan-Africa</span></div></div></footer>`}

function auditModal(){return `<div class="modal-back" id="audit-modal"><div class="modal"><button class="close" data-close>×</button><span class="eyebrow">✦ Complimentary</span><h2 class="heading">Digital PR & Media Strategy Audit</h2><p class="muted">Tell us about your brand and we'll outline the strongest visibility opportunities.</p><form id="audit-form"><div class="form-grid"><div class="field"><label>BRAND / ORGANIZATION</label><input name="brand" required></div><div class="field"><label>WEBSITE</label><input name="website" placeholder="https://"></div><div class="field"><label>CONTACT NAME</label><input name="name" required></div><div class="field"><label>EMAIL</label><input type="email" name="email" required></div><div class="field"><label>PHONE</label><input name="phone"></div><div class="field"><label>PRIMARY OBJECTIVE</label><select name="objective"><option>Tier-1 Digital Media Coverage</option><option>Executive Thought Leadership</option><option>Brand Reputation</option><option>Social Media Growth</option></select></div><div class="field full"><button class="btn btn-primary">Request Audit ↗</button></div></div></form></div></div>`}
function contentModal(){return `<div class="modal-back" id="content-modal"><div class="modal" id="modal-body"><button class="close" data-close>×</button></div></div>`}

function render(){
 app.innerHTML=nav()+({home,about,services,work,insights,contact}[currentPage]||home)()+footer()+auditModal()+contentModal()+`<div class="float"><button class="top" id="top" title="Back to top">↑</button><a class="whatsapp" target="_blank" rel="noopener" href="https://wa.me/254700686943?text=Hello%20Governor%20Digital%20PR!%20I%20would%20like%20to%20discuss%20a%20PR%20campaign.">☏ <span>Chat with PR Strategist</span></a></div>`;
 bind(); observe();
 window.scrollTo({top:0,behavior:'smooth'});
}
function bind(){
 document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>go(b.dataset.nav));
 document.querySelectorAll('[data-audit]').forEach(b=>b.onclick=()=>$('#audit-modal').classList.add('open'));
 document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('.modal-back').classList.remove('open'));
 $('#menu')?.addEventListener('click',()=>$('#mobile').classList.toggle('open'));
 $('#top')?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
 $('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.outerHTML='<div class="success"><h2 class="heading">Inquiry received.</h2><p class="muted">Thanks for reaching out. Your message is ready for the Governor Digital PR team.</p><button class="btn btn-primary" onclick="location.hash=\'home\'">Back home</button></div>'});
 $('#audit-form')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.innerHTML='<div class="success"><h2 class="heading">Audit request received.</h2><p class="muted">We’ll review your details and follow up with next steps.</p></div>'});
 bindDynamic();
}
function bindDynamic(){
 document.querySelectorAll('[data-service]').forEach(b=>b.onclick=()=>openService(b.dataset.service));
 document.querySelectorAll('[data-work]').forEach(b=>b.onclick=()=>openWork(b.dataset.work));
 document.querySelectorAll('[data-article]').forEach(b=>b.onclick=()=>openArticle(b.dataset.article));
 document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('.modal-back').classList.remove('open'));
}
function openService(id){const s=AGENCY_SERVICES.find(x=>x.id===id);if(!s)return;$('#modal-body').innerHTML=`<button class="close" data-close>×</button>${s.image?`<img src="${img(s.image)}">`:''}<span class="eyebrow" style="margin-top:20px">${s.category}</span><h2 class="heading">${s.title}</h2><p style="color:#ff8fb5;font-weight:700">${s.tagline}</p><p class="muted">${s.fullDesc}</p><h3>Deliverables</h3><ul>${s.deliverables.map(x=>`<li>${x}</li>`).join('')}</ul><h3>Why it matters</h3><ul>${s.benefits.map(x=>`<li>${x}</li>`).join('')}</ul><button class="btn btn-primary" data-nav="contact" data-close>Start a conversation ↗</button>`;$('#content-modal').classList.add('open');bindDynamic();document.querySelector('[data-nav="contact"]')?.addEventListener('click',()=>{closeAll();go('contact')})}
function openWork(id){const c=CASE_STUDIES.find(x=>x.id===id);if(!c)return;$('#modal-body').innerHTML=`<button class="close" data-close>×</button><img src="${img(c.image)}"><span class="eyebrow" style="margin-top:20px">${c.category}</span><h2 class="heading">${c.title}</h2><p class="muted">${c.overview}</p><h3>The challenge</h3><p class="muted">${c.challenge}</p><h3>The strategy</h3><p class="muted">${c.strategy}</p><h3>Execution</h3><ul>${c.execution.map(x=>`<li>${x}</li>`).join('')}</ul><h3>Results</h3><div class="grid three">${c.results.map(r=>`<div class="card glass"><strong style="font:700 30px 'Space Grotesk';color:#ffd000">${r.value}</strong><div class="muted">${r.label}</div></div>`).join('')}</div>`;$('#content-modal').classList.add('open');bindDynamic()}
function openArticle(id){const a=INSIGHTS.find(x=>x.id===id);if(!a)return;$('#modal-body').innerHTML=`<button class="close" data-close>×</button><img src="${img(a.image)}"><span class="eyebrow" style="margin-top:20px">${a.category} · ${a.readTime}</span><h2 class="heading">${a.title}</h2><p class="muted">${a.excerpt}</p>${a.content.map(p=>`<p>${p}</p>`).join('')}<h3>Key takeaways</h3><ul>${a.keyTakeaways.map(x=>`<li>${x}</li>`).join('')}</ul>`;$('#content-modal').classList.add('open');bindDynamic()}
function closeAll(){document.querySelectorAll('.modal-back').forEach(x=>x.classList.remove('open'))}
function go(p){currentPage=p;location.hash=p}
function observe(){const els=document.querySelectorAll('.reveal:not(.show)');const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.08});els.forEach(e=>io.observe(e))}
window.addEventListener('hashchange',()=>{const p=location.hash.slice(1);if(valid.includes(p)){currentPage=p;render()}});
window.addEventListener('scroll',()=>$('#nav')?.classList.toggle('scrolled',scrollY>30));
render();
