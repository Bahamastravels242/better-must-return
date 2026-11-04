// Mark Humes for Chairman: content and design updates (Nov 2026).
// Applied last, after base, chair, culture and quote patches.
const I={ // simple line icons, 24x24, stroke currentColor
 people:'<circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9" r="2.6"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M14.5 14.2c3.2-.4 6.5 1.4 6.5 4.8"/>',
 hand:'<path d="M2 11l4-4 4 2 3-2 3 1 6 5-3 3"/><path d="M8 13l3 3c.8.8 2 .8 2.8 0M10.5 11.5l3.5 3.5c.8.8 2 .8 2.8 0l2.2-2.2M2 11l4 5"/>',
 doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 15.5h6M9 9h3"/>',
 cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v4.5c0 1.5 2.7 3 6 3s6-1.5 6-3V11M21 9.5v5"/>',
 gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
 pin:'<path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.4"/>',
 flask:'<path d="M9.5 3h5M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/>',
 layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5M3 16.5l9 5 9-5"/>',
 clip:'<rect x="5" y="4.5" width="14" height="17" rx="2"/><path d="M9 3h6v3H9zM8.5 12l2 2 4-4M8.5 17.5h7"/>',
 bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
 stage:'<rect x="3" y="3.5" width="18" height="11" rx="1.5"/><path d="M7 11l3-3 2.5 2L17 6.5M12 14.5V21M8 21h8"/>',
 check:'<rect x="4" y="3.5" width="12" height="17" rx="2"/><path d="M7.5 8h5M7.5 12h5M7.5 16h3"/><circle cx="17.5" cy="16.5" r="4" /><path d="M15.8 16.6l1.2 1.2 2.3-2.4"/>',
 target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
 chart:'<path d="M4 20V13M10 20V9M16 20V5M3 20.5h18"/>',
 dl:'<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>'
};
const ic=(k,c='')=>`<svg class="ic ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg>`;

export function mark(html){
 const must=(a,b)=>{if(!html.includes(a))throw new Error('MARK PATCH MISSING: '+a.slice(0,70));html=html.replace(a,b)};

 /* ---------- 1. BREAKING THE CYCLE ---------- */
 must(`<p class="lede">You already know what went wrong. You lived it. So we won't lecture you. We'll show you how the cycle breaks.</p>`,
 `<p class="lede">For too long, the FNM has allowed a gap to grow between what we say we value and believe and what people see, feel and experience in and with the Party. Over time, what we actually reward, tolerate and practice has filled that gap and become our culture. It shapes who feels heard, who feels valued, who feels free to disagree, who gets the opportunity to contribute, and ultimately who stays and who walks away. Breaking the cycle means changing the conditions that have allowed this culture to take root, survive and repeat itself.</p>`);
 const node=(n,p1,p2,f1,f2)=>[`<text class="prob" y="-4">${p1}</text><text class="prob" y="13">${p2}</text><text class="fix" y="-4">${f1}</text><text class="fix" y="13">${f2}</text>`,n];
 must('<text class="prob" y="-4">Divided</text><text class="prob" y="13">against itself</text><text class="fix" y="-4">One table,</text><text class="fix" y="13">one team</text>',node(1,'Rules applied','selectively','Rules for','everyone')[0]);
 must('<text class="prob" y="-4">Silent between</text><text class="prob" y="13">elections</text><text class="fix" y="-4">Present</text><text class="fix" y="13">year-round</text>',node(2,'Loyalty','rewarded','Contribution','rewarded')[0]);
 must('<text class="prob" y="-4">No single</text><text class="prob" y="13">message</text><text class="fix" y="-4">One clear</text><text class="fix" y="13">identity</text>',node(3,'Bad conduct','tolerated','Standards','enforced')[0]);
 must('<text class="prob" y="-4">Campaigns</text><text class="prob" y="13">left alone</text><text class="fix" y="-4">Equipped</text><text class="fix" y="13">campaigns</text>',node(4,'Old habits','repeated','New habits','practised')[0]);
 must('id="cycleSub">2017 to 2026</text>','id="cycleSub">How culture repeats</text>');
 must('aria-label="A cycle of four problems that turns into four fixes and breaks open"','aria-label="A cycle of four conditions that keep the old culture repeating, turning into four changes that break it"');
 const card=(s,tag,h,p)=>`<div class="step" data-s="${s}"><div class="card"><span class="tag">${tag}</span><h3>${h}</h3><p>${p}</p></div></div>`;
 const a=html.indexOf('<div class="step" data-s="1">'),b=html.indexOf('</div>\n    </div>\n    <div class="cine" data-play>');
 if(a<0||b<0||b<a)throw new Error('MARK PATCH: cycle steps not found');
 const steps=[
  card(1,'Condition 1 · Rules and system constraints','The rules apply to everyone','What leaders model, reward and tolerate becomes the actual culture, more than anything written down. Limits, structures and controls will be built into the Party’s rules and operating systems to reduce individual discretion and ensure that authority is exercised fairly, consistently and without selective application of the rules.'),
  card(2,'Condition 2 · Rewards and incentives','What we reward shapes who we become','Too often, personal loyalty, favour and factional alignment have counted for more in a member’s standing than his or her contribution, competence, principle and constructive challenge. Recognition, responsibility and advancement will follow the behaviours that strengthen the Party, so that what helps a member advance inside the FNM also helps the FNM advance.'),
  card(3,'Condition 3 · Standards and accountability','What we tolerate becomes acceptable','Division, disrespect, personal attacks, unresolved grievances, retaliation, exclusion and conduct that damages relationships cannot simply be allowed to continue because confronting them is difficult or politically inconvenient. Clear standards of conduct must be set, breaches addressed consistently, conflicts resolved rather than left to fester, and accountability applied regardless of position, relationship or faction.'),
  card(4,'Condition 4 · Learning and practice','Changing culture by changing habits','Old habits do not disappear because we say they should. Leadership and personal development, mixed working groups, cross-Association projects, relationship-building activities, workshops and collaborative seminars must become part of how we work, learn, practice and repeat new behaviours. The behaviours we practice consistently become the new habits of the Party, and over time, those habits become the new culture.'),
  card(5,'The break','The cycle ends with us','Culture created through repeated behaviour has to be changed through repeated behaviour. We cannot complain about the culture we inherited and then continue it. The cycle ends when we decide not to pass it on.')
 ].join('\n        ');
 html=html.slice(0,a)+steps+'\n      '+html.slice(b);
 must(`<div class="cap"><span class="eyebrow">Breaking the cycle</span><h3>We don't patch it.<br>We break it.</h3></div>`,
      `<div class="cap"><span class="eyebrow">Breaking the cycle</span><h3>Some things must end<br>for better to begin.</h3></div>`);

 /* ---------- 2. CULTURE NOTES ---------- */
 must('<p class="lede">Presented at the FNM Conclave on October 24, 2026. Move through the slides, and read the note with each one for the thinking behind it.</p>',
      '<p class="lede">Presented at the FNM Conclave on October 24, 2026. Move through the slides, and read about organizational culture and the patterns that turn disagreement into exit and exit into opposition.</p>');
 {
  const k=html.indexOf('const N=');const e=html.indexOf('\n',k);if(k<0)throw new Error('MARK PATCH: notes not found');
  const N=JSON.parse(html.slice(k+8,e).replace(/;\s*$/,''));
  if(N.length!==21)throw new Error('MARK PATCH: expected 21 notes');
  const set=(i,t)=>{N[i-1][1]=t};
  set(1,'This presentation was given at the FNM Conclave on October 24, 2026 as an honest conversation among people who want the party to succeed. It looks at why disagreement inside an organization so often ends with people walking away.');
  set(2,'This session asks each of us to examine our own behaviour and the part it plays in shaping the culture of the FNM. We are being asked to consider whether the behaviours we model, reward, tolerate and practice are constructive or destructive, and how those behaviours have contributed to the Party we experience today.');
  set(5,'Culture answers three questions no document can. Whatever a member of an organization believes the answer to that third question is decides whether they speak up, stay quiet, or leave.');
  set(6,'Pastor Kellen Russell names four categories of persons that appear in an organizational culture. I name the fifth, the Leavers, those who just choose to walk away. These are not labels for individuals, per se, as much as they are positions any of us can slip into depending on the culture.');
  set(8,'Dr. Martin Luther King Jr. wrote these words from a Birmingham jail to clergymen who had criticized the demonstrations, urging them to look at the conditions that produced the protests rather than only the protests. The comparison with the toxic organizational culture here is of method, not of circumstance. In toxic cultures, the instinct is to ask what is wrong with the person who appears problematic. King’s method asks to consider having the same reaction to the root-cause conditions that left the individual with no alternative.');
  set(9,'Toxic cultures rarely begin with bad people. They begin with good people, unspoken rules and problems nobody names. If we think toxicity is about bad people, we respond by removing people. The same behavior, however, returns with new people because you stopped at the person and not the behavior that produced it. If we understand toxicity as a pattern, we can fix the pattern.');
  set(10,'In his book <em>Exit, Voice, and Loyalty</em>, the economist Albert Hirschman observed that people unhappy with an organization have three options: use their voice and push for change from inside, stay loyal and trust the organization to put itself right, or exit. Which one they choose depends on what the organization does with voice.');
  set(12,'Everything to this point could describe any organization but it also describes the FNM. Here the lens turns to the FNM itself. A party that can look at itself honestly is a party that can change.');
  set(14,'Whitfield named the two foundations a party must stand on, Democracy and Truth, and called them hard and demanding taskmasters. Mammon is the biblical word for money and material gain served as a master. His warning was that without Democracy and Truth, a party ends up serving self-interest, power and personal gain instead of principle.');
  set(18,'This is the central finding: A party that cannot disagree is already in decline, as Whitfield warned. What happens after a disagreement is a choice, and choices can change.');
  html=html.slice(0,k+8)+JSON.stringify(N)+';'+html.slice(e);
 }

 /* ---------- 3. MODERN FNM ---------- */
 must('<p class="lede">A particular kind of Bahamas needs a particular kind of party. The culture and the people inside it change first, because they carry everything else.</p>',
      '<p class="lede">Breaking the old cycle is only the beginning. The real work is building what replaces it: a modern FNM with a clear sense of who we are, how we operate, how our members participate, and the kind of Bahamas we are preparing to lead.</p>');
 must('<div class="pillars" id="partyPillars"></div>',
      '<div class="subhead"><span class="eyebrow">What will define us</span><p>The qualities that will define the modern FNM.</p></div>\n    <div class="pillars" id="partyPillars"></div>');
 must('<div class="shift" aria-label="The culture shift">',
      '<div class="subhead"><span class="eyebrow">How we get there</span><p>The work that will turn those qualities into the culture and practice of the Party.</p></div>\n    <div class="shift" aria-label="How we get there">');
 const stage=(cls,icon,n,title,tag,body)=>`<article class="pstage ${cls}"><div class="phead">${ic(icon,'big')}<span class="pnum">Stage ${n}</span><h3>${title}</h3></div><div class="pbody"><b>${tag}</b><p>${body}</p></div></article>`;
 const pipe=`
    <div class="pipe" id="pipeline">
      <div class="subhead"><span class="eyebrow">From ideas to a national development plan</span><h3 class="pipe-title">The Innovation-to-Action Pipeline</h3><p class="pipe-sub">A three-stage process that gives every member a way to help build the Party’s plan for the country, from first idea to adopted policy.</p></div>
      <div class="pstages">
        ${stage('s1','bulb',1,'Policy Labs','Build and develop the ideas.','The Policy Labs are where the building happens. Members begin with the Party’s national development vision, choose areas matching their interests, knowledge or expertise, and work with others to turn that vision into things that could actually be done. That can include policy proposals, community projects, economic concepts, technological solutions, prototypes, cultural initiatives and other practical solutions.')}
        <span class="parrow" aria-hidden="true"></span>
        ${stage('s2','stage',2,'National Ideas &amp; Innovation Convention','Showcase, challenge, refine and bring the ideas together.','The National Ideas &amp; Innovation Convention is where the building comes together. The work developed through the Labs is presented, demonstrated, challenged, tested and improved.')}
        <span class="parrow" aria-hidden="true"></span>
        ${stage('s3','check',3,'Party Policy Process','Convert the strongest work into the FNM’s National Development Plan.','The strongest and most developed work can then feed into the Party’s broader national development plan through its proper policy and constitutional processes.')}
      </div>
      <div class="presult"><span class="plabel">The result</span>
        <div>${ic('target')}<span>A plan built by the Party.</span></div>
        <div>${ic('people')}<span>Informed by our members.</span></div>
        <div>${ic('gear')}<span>Tested and strengthened together.</span></div>
        <div>${ic('chart')}<span>A practical roadmap for a stronger Bahamas.</span></div>
      </div>
      <a class="dlink" href="media/downloads/fnm-innovation-to-action-pipeline.jpg" download>${ic('dl')}Download the pipeline graphic</a>
    </div>`;
 {
  const s=html.indexOf('<div class="shift" aria-label="How we get there">');
  const e=html.indexOf('</div>\n  </div>\n</section>',s);
  if(s<0||e<0)throw new Error('MARK PATCH: shift end not found');
  html=html.slice(0,e+6)+pipe+html.slice(e+6);
 }

 /* ---------- 4. THE BUILDER ---------- */
 must('<p class="lede">The party set the standard: coalition builder, communicator, organisational architect, systems thinker, movement builder, national inspirer. Here is what Mark A. Humes has already built.</p>',
      `<p class="lede">The FNM does not lack people who can give a good speech, command a room, build a public profile or make the political argument. Most of us in politics can do those things.</p>
    </div>
    <div class="moment">
      <p>But after two consecutive election losses, with the internal cultural and organizational problems identified through the post-mortem and Conclave, and with the Party now needing to rebuild its culture, organization, membership, systems and capacity before 2031, what this moment calls for is drastically different. It cannot be politics as usual, and it requires more than a political personality.</p>
      <p class="mstrong">This moment requires an individual who meets the leadership standard we have set for ourselves, and a dedicated, full-time builder.</p>
    </div>
    <div class="five">
      <div><span>01</span><b>Systems builder</b><p>Turns rules into structures that work.</p></div>
      <div><span>02</span><b>Organization builder</b><p>Rebuilds the machinery from the branch up.</p></div>
      <div><span>03</span><b>People builder</b><p>Develops leaders, volunteers and the next generation.</p></div>
      <div><span>04</span><b>Coalition builder</b><p>Brings people back together and gets them working toward the same purpose.</p></div>
      <div><span>05</span><b>Institution builder</b><p>Knows how to take something from an idea on paper to something that actually functions.</p></div>
    </div>
    <p class="mclose">That is the work this moment requires. And that is the work Mark Humes has spent his career doing.</p>
    <div class="chapter-head" hidden>`);

 /* ---------- 5. THE FIRST 100 DAYS ---------- */
 must('<h2>The first 100 days</h2>','<h2>The first <em>100</em> days</h2>');
 must('<p class="lede">Talk is cheap. Here is what happens the morning after the convention, and every week after that.</p>',
      '<p class="lede">A clear, time-bound plan to reset, rebuild and get the Party working again.</p>');
 must('<span class="draft">Draft for review</span>','');
 const item=(icon,t,p,hl='')=>`<li class="${hl}">${ic(icon)}<div><b>${t}</b><span>${p}</span></div></li>`;
 const phase=(c,days,name,items,foot)=>`<section class="ph ${c}"><header><span>${days}</span><h3>${name}</h3></header><ul>${items}</ul><footer>${foot}</footer></section>`;
 const d100=`<div class="d100">
      <aside class="goal"><span class="eyebrow">The goal</span><p>Get the FNM <b>organised, unified, modernised</b> and active again within the first <strong>100 days.</strong></p><i class="big100" aria-hidden="true">100</i></aside>
      <div class="phases">
        ${phase('p1','Days 1 to 30','Reset',item('people','Chairmen’s Meeting','Confirm roles, the plan and immediate priorities.')+item('hand','Reconciliation and Reset','Begin structured dialogue and resolve key grievances.')+item('doc','Constitution Workshops','Review and agree on modernisation proposals.'),'Unite and align')}
        ${phase('p2','Days 31 to 60','Rebuild',item('cap','Leadership Seminars','Begin recurring training for officers, chairmen and emerging leaders.')+item('gear','Modern Systems','Launch digital membership, data and accountability processes.')+item('pin','Zone Plans','Each association completes its own year-round plan.'),'Build the systems')}
        ${phase('p3','Days 61 to 100','Deliver',item('people','Community Presence','Be active in every constituency (listen, inform and serve).')+item('flask','Innovation-to-Action Pipeline','Launch the Policy &amp; Innovation Labs and begin turning the Party’s national vision into developed, executable ideas and solutions.','hl')+item('layers','Talent and Donor Pipeline','Match skills to real roles and build early funding support.')+item('clip','Report Card','By Day 100, share a full public update on what was done and what’s next.'),'Take the party to the people')}
      </div>
    </div>
    <a class="dlink" href="media/downloads/fnm-first-100-days.jpg" download>${ic('dl')}Download the 100 Days graphic</a>
    <div class="gantt" id="gantt" hidden>`;
 must('<div class="gantt" id="gantt">',d100);

 /* ---------- CSS ---------- */
 const css=`
/* MARK NOV 2026 */
#cycle .listen,#party .listen,#days .listen{display:none}
.chapter-head[hidden]{display:none}
#cycle .chapter-head .lede{max-width:72ch}
#cycle .card .tag{letter-spacing:.08em}
#cycle .card h3{font-size:1.45rem;line-height:1.05}
.ic{width:22px;height:22px;flex:none}
.subhead{margin-top:40px;display:grid;gap:4px}
.subhead p{color:var(--muted);font-size:1.02rem}
.subhead+.pillars,.subhead+.shift{margin-top:16px}
/* pipeline */
.pipe{margin-top:56px}
.pipe-sub{color:var(--muted);font-size:1.05rem;max-width:62ch;margin-top:6px}
.pipe-title{font-family:var(--display);font-size:clamp(1.8rem,3.6vw,2.6rem);font-weight:900;text-transform:uppercase;line-height:1}
.pstages{margin-top:20px;display:grid;grid-template-columns:1fr 34px 1fr 34px 1fr;align-items:stretch}
.pstage{border-radius:20px;overflow:hidden;background:var(--surface);border:1px solid var(--line);box-shadow:0 18px 40px -26px rgba(20,20,60,.45);display:flex;flex-direction:column}
.phead{color:#fff;padding:22px 22px 20px;display:grid;gap:6px;position:relative;isolation:isolate}
.phead::after{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(120% 90% at 85% 0%,rgba(255,255,255,.28),transparent 55%)}
.pstage.s1 .phead{background:linear-gradient(135deg,#1D3F8F,#2E7BC4)}
.pstage.s2 .phead{background:linear-gradient(135deg,#B9780E,#F3B531);color:#2A1C00}
.pstage.s3 .phead{background:linear-gradient(135deg,var(--red-deep),var(--red))}
.phead .ic.big{width:38px;height:38px}
.pnum{font-size:.72rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;opacity:.85}
.phead h3{font-family:var(--display);font-size:1.6rem;font-weight:900;text-transform:uppercase;line-height:1}
.pbody{padding:18px 22px 22px;display:grid;gap:8px}
.pbody b{font-size:1.02rem;line-height:1.3}
.pbody p{color:var(--muted);font-size:.94rem;line-height:1.6}
.parrow{align-self:center;justify-self:center;width:22px;height:22px;border-top:5px solid var(--red);border-right:5px solid var(--red);transform:rotate(45deg);border-radius:2px}
.presult{margin-top:16px;display:grid;grid-template-columns:auto repeat(4,1fr);align-items:center;background:var(--surface);border:1px solid var(--line);border-radius:14px;overflow:hidden}
.presult .plabel{align-self:stretch;display:flex;align-items:center;background:var(--red);color:#fff;font-family:var(--display);font-weight:900;font-size:1.3rem;text-transform:uppercase;padding:14px 26px 14px 18px;clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%)}
.presult div{display:flex;gap:10px;align-items:center;padding:12px 14px;font-weight:700;font-size:.92rem;line-height:1.3;color:var(--ink)}
.presult div .ic{color:var(--navy-ink);width:28px;height:28px}
.dlink{display:inline-flex;align-items:center;gap:8px;margin-top:14px;font-weight:700;font-size:.9rem;color:var(--red);text-decoration:none}
.dlink .ic{width:18px;height:18px}
.dlink:hover{text-decoration:underline}
/* builder */
.moment{margin-top:26px;background:var(--navy);color:#D9DAF5;border-radius:20px;padding:30px 32px;display:grid;gap:14px;position:relative;overflow:hidden;isolation:isolate}
.moment::after{content:"";position:absolute;right:-60px;top:-60px;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(227,38,43,.45),transparent 70%);z-index:-1}
.moment p{max-width:70ch;font-size:1.05rem;line-height:1.65}
.moment .mstrong{color:#fff;font-family:var(--display);font-weight:800;text-transform:uppercase;font-size:clamp(1.35rem,2.6vw,1.9rem);line-height:1.08;max-width:34ch}
.five{margin-top:16px;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}
.five div{background:var(--surface);border:1px solid var(--line);border-top:4px solid var(--red);border-radius:14px;padding:16px;display:grid;gap:6px;align-content:start}
.five span{font-family:var(--display);font-weight:900;font-size:1.5rem;color:var(--red);line-height:1}
.five b{font-family:var(--display);font-size:1.2rem;text-transform:uppercase;line-height:1.05}
.five p{color:var(--muted);font-size:.9rem;line-height:1.5}
.mclose{margin-top:20px;font-weight:800;font-size:1.15rem;color:var(--ink);max-width:60ch}
/* 100 days */
#days h2 em{font-style:normal;color:var(--red)}
#gantt{display:none!important}
.d100{margin-top:30px;display:grid;grid-template-columns:220px 1fr;gap:18px;align-items:stretch}
.goal{background:linear-gradient(180deg,var(--navy),#14134A);color:#fff;border-radius:18px;padding:26px 22px;display:grid;align-content:start;gap:12px;border-left:6px solid var(--red)}
.goal .eyebrow{color:#FFB4B6}
.goal p{font-size:1.25rem;line-height:1.35;color:#E3E4FA}
.goal b{color:#fff}
.goal{position:relative;overflow:hidden}.big100{position:absolute;left:14px;bottom:-26px;font-style:normal;font-family:var(--display);font-weight:900;font-size:7.5rem;line-height:1;color:rgba(255,255,255,.07);pointer-events:none}
.goal strong{color:#fff;font-family:var(--display);font-size:2.1rem;display:block;line-height:1;margin-top:4px}
.phases{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.ph{background:var(--surface);border:1px solid var(--line);border-radius:18px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 18px 40px -28px rgba(20,20,60,.45)}
.ph header{color:#fff;padding:16px 34px 16px 20px;clip-path:polygon(0 0,calc(100% - 22px) 0,100% 50%,calc(100% - 22px) 100%,0 100%);margin-right:-1px}
.ph.p1 header{background:var(--navy)}
.ph.p2 header{background:linear-gradient(135deg,#1C5C7E,#2A86A6)}
.ph.p3 header{background:var(--red)}
.ph header span{font-size:.78rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;opacity:.9}
.ph header h3{font-family:var(--display);font-size:2rem;font-weight:900;text-transform:uppercase;line-height:1}
.ph ul{list-style:none;margin:0;padding:6px 16px;flex:1}
.ph li{display:grid;grid-template-columns:auto 1fr;gap:12px;padding:13px 4px;border-bottom:1px solid var(--line)}
.ph li:last-child{border-bottom:0}
.ph li .ic{width:30px;height:30px;margin-top:2px}
.ph.p1 li .ic{color:var(--navy-ink)}.ph.p2 li .ic{color:#2A86A6}.ph.p3 li .ic{color:var(--red)}
.ph li b{display:block;font-weight:800;line-height:1.25}
.ph li span{display:block;font-size:.9rem;color:var(--muted);line-height:1.45}
.ph li.hl{background:color-mix(in srgb,var(--sun) 22%,transparent);border-radius:12px;border-bottom-color:transparent;padding-inline:10px;margin:4px -6px}
.ph footer{padding:13px 20px;font-family:var(--display);font-weight:900;font-size:1.15rem;text-transform:uppercase;letter-spacing:.02em;color:#fff;text-align:center}
.ph.p1 footer{background:var(--navy)}.ph.p2 footer{background:#1C5C7E}.ph.p3 footer{background:var(--red-deep)}
@media (prefers-color-scheme:dark){.ph.p1 header,.ph.p1 footer{background:#2F2E8A}}
@media (max-width:1060px){
  .d100{grid-template-columns:1fr}
  .goal strong{display:inline;font-size:inherit}
  .big100{display:none}
  .five{grid-template-columns:repeat(3,minmax(0,1fr))}
}
@media (max-width:860px){
  .phases{grid-template-columns:1fr}
  .ph header{clip-path:none;border-radius:0}
  .pstages{grid-template-columns:1fr}
  .parrow{transform:rotate(135deg);margin:8px 0 14px}
  .presult{grid-template-columns:1fr 1fr}
  .presult .plabel{grid-column:1/-1;clip-path:none;justify-content:center;padding:10px}
  .five{grid-template-columns:1fr 1fr}
  .moment{padding:22px 20px}
}
@media (max-width:480px){.five{grid-template-columns:1fr}.presult{grid-template-columns:1fr}}
`;
 const ci=html.lastIndexOf('</style>');html=html.slice(0,ci)+css+html.slice(ci);

 // the builder block opened a hidden chapter-head to keep the original markup balanced; remove its leftover button if any
 return html;
}
