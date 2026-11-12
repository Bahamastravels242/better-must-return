// Members First version of the chairman site (Nov 2026). Applied after mark().
export function members(html){
 const must=(a,b)=>{if(!html.includes(a))throw new Error('MEMBERS PATCH MISSING: '+a.slice(0,70));html=html.replace(a,b)};

 // share previews
 html=html.replace(/(property="og:image" content="[^"]*)\/media\/og-hero\.jpg"/,'$1/media/downloads/og-members.jpg"');
 if(!html.includes('/media/downloads/og-members.jpg'))throw new Error('MEMBERS PATCH: og image');
 must('<meta property="og:title" content="We Need Better. Better Must Return.">','<meta property="og:title" content="We Need Better. Members First.">');
 must('<meta property="og:description" content="Mark A. Humes for FNM Chairman: a modern FNM, built to build the next Bahamas. The plan, the record and the first 100 days.">',
      '<meta property="og:description" content="Ours is a campaign against the status quo and the habits that cost us two straight elections. Reform is in the FNM’s DNA. Be a part of the Members First movement.">');
 must('<meta name="description" content="Mark A. Humes for FNM Chairman: a modern FNM built to build the next Bahamas.">',
      '<meta name="description" content="Ours is a campaign against the status quo and the habits that cost us two straight elections. Reform is in the FNM’s DNA. Be a part of the Members First movement.">');
 must('const msg="We need better, and better must return. See the plan of Mark Humes for FNM Chairman: a modern FNM and the next Bahamas: "+url;',
      'const msg="We need better. Ours is a campaign against the status quo and the habits that cost us two straight elections. Reform is in the FNM’s DNA. Be a part of the Members First movement. "+url;');

 // brand and nav
 must('<span><b>BETTER MUST RETURN</b><small>Mark A. Humes for Chairman</small></span>','<span><b>MEMBERS FIRST</b><small>Mark A. Humes for Chairman</small></span>');
 must('<a href="#culture">Culture</a>','<a href="#culture">Culture</a>\n      <a href="#agenda">Our Agenda</a>');

 // hero
 must('<h1><span>We need better.</span><span class="thin">And better</span><span>must return.</span></h1>',
      '<h1><span class="lead">We need better.</span><span>Members</span><span>First</span></h1>');
 must('<p class="sub">A modern FNM, built to build the next Bahamas. This is the plan, the record, and the first hundred days.</p>',
      '<p class="sub voice">A greater voice for every member.</p>');

 // Chapter 1 preamble, after the opening paragraph
 must('Breaking the cycle means changing the conditions that have allowed this culture to take root, survive and repeat itself.</p>',
      'Breaking the cycle means changing the conditions that have allowed this culture to take root, survive and repeat itself.</p>\n      <p class="lede lede2">The Members First movement is a movement against this status quo, against the habits and practices that produced two straight defeats, and against the way the party has been run during these election cycles, not against the people who run it. The founders walked out over how dissent was treated; they wouldn’t tolerate it, and neither should we. Reform is in our DNA, and we invite you to be a part of this movement.</p>');

 // the reform agenda section, after Culture and before Modern FNM
 const items=[
  ['A greater voice in decisions','Members and associations are consulted before major decisions, not informed after them. Central Council decisions, and the reasons for them, are reported back to the branches.'],
  ['Recognition for contribution','Opportunities, appointments and advancement follow the work members do for the party, with clear, published criteria rather than who you know or which camp you’re in.'],
  ['A party present between elections','Every association is active year-round, so members hear from the party regularly, not only when it needs their vote.'],
  ['Accountability to members','Members see the findings of reviews like the post-mortem, the party sets clear targets, and officers report on progress regularly.'],
  ['One party, no camps','Every member gets the same rules, the same process and the same respect, whichever leader or faction they supported. Disputes are settled fairly, and no one is frozen out for past alignments.'],
  ['Safe to speak up','Members have proper channels to raise concerns and get a response. Disagreement is treated as contribution, not disloyalty, and grievances are resolved rather than left to fester.']
 ].map(([t,p],i)=>`<li><span class="anum">0${i+1}</span><h3>${t}</h3><p>${p}</p></li>`).join('\n        ');
 const agenda=`<section class="chapter agenda" id="agenda">
  <div class="wrap">
    <div class="chapter-head">
      <span class="eyebrow">Members First</span>
      <h2>Our reform agenda</h2>
      <p class="lede">A party where members help shape the decisions that affect them, are heard between elections, and are valued for what they contribute. A party where the rules apply to everyone.</p>
    </div>
    <span class="eyebrow aexp">What members can expect</span>
    <ol class="alist">
        ${items}
    </ol>
    <p class="asum">Together, the six describe a party that listens to its members, rewards them, stays with them, answers to them, treats them equally and lets them speak.</p>
    <figure class="aquote"><blockquote>“Democracy implies the freedom to think, to dissent, and to bring about change in a lawful manner in the interest of all.”</blockquote><figcaption>Sir Cecil Wallace Whitfield, Free At Last, 1970</figcaption></figure>
  </div>
</section>
`;
 must('<section class="chapter" id="party">',agenda+'<section class="chapter" id="party">');

 // closing ask
 must('<h2>We need better.<br><em>Better must return.</em></h2>','<h2>We need better.<br><em>Members First is how we get there.</em></h2>');
 must('<p>You know the party. You know what it needs. You have seen the plan, the record and the first hundred days. At convention, vote for a chairman who builds.</p>',
      '<p>You know the party. You know what it needs. You have seen the plan, the record and the first hundred days. The next FNM starts with its members. At convention, vote for a chairman who builds.</p>');
 must('<p>Come convention, vote for better. Then tell somebody.</p>','<p>Come convention, vote members first. Then tell somebody.</p>');

 // footer
 must('<span>Mark A. Humes for FNM Chairman. A campaign platform for the FNM Convention.','<span>Mark A. Humes for FNM Chairman. Members First · Our Reform Agenda. A campaign platform for the FNM Convention.');

 // ---- Nov 12 content edits ----
 // Builder: remove the three house boxes
 {const a=html.indexOf('<div class="house">');const b=html.indexOf('<div class="team">',a);
  if(a<0||b<0)throw new Error('MEMBERS PATCH: house boxes');html=html.slice(0,a)+html.slice(b);}
 // 100 days heading
 must('<h2>The first <em>100</em> days</h2>','<h2>Our promise: the first <em>100</em> days</h2>');
 // Bridge: explain the party-to-nation link
 {const h=html.indexOf('<h2>Build the party right. Build the country right.</h2>');const t=html.indexOf('<div class="talk">',h);
  if(h<0||t<0)throw new Error('MEMBERS PATCH: bridge');
  html=html.slice(0,t)+'<p class="lede bridge-lede">The party is the vehicle that carries a vision into government, and what a party practices inside is what it will practice in office. A party that cannot give its members ownership will not give Bahamians ownership, or a party that cannot modernise itself will not modernise the nation. That is why the same six ideas will shape the modern FNM as much as they will shape our plan for the country.</p>\n    '+html.slice(t);}
 // Next Bahamas: move and rewrite the intro to sit after the characters, above the blocks
 must(`<p class="lede">You don't start building until you know what you're building. So we show you the finished picture first, then build it, piece by piece, in order, over five years.</p>`,'');
 must('<div class="scrolly act2" data-scrolly="act2">',`<p class="lede bahamas-lede">You can't start building a nation until you know what nation you're building. Right now, we have all the pieces but no picture. Our plan is to create the finished picture first, then build it piece by piece, in order, over five years, starting today.</p>\n    <div class="scrolly act2" data-scrolly="act2">`);
 must(`<span class="tag">Where we are</span><h3>Pieces without a picture</h3><p>Clinics, schools, power, internet, housing, tourism, fisheries. Each one built on its own, each one patched, none of them adding up.</p><p>We've been building without knowing what we're building.</p>`,
      `<span class="tag">The Bahamian predicament</span><h3>Pieces without a picture</h3><p>We've spent decades building without knowing exactly what we're building. Clinics, schools, power, internet, housing, tourism, fisheries, white papers, blue papers, bills and regulations. Each one built on its own, each one patched, none of them adding up. Now we change that.</p>`);
 must('<span class="tag">The vision</span><h3>An Eco-Cosmopolitan Bahamas</h3>','<span class="tag">What we’re building: the vision</span><h3>An Eco-Cosmopolitan Bahamas</h3>');
 must('<span class="tag">The foundation</span><h3>Health. Education. Energy.</h3>','<span class="tag">Where do we start: the foundation</span><h3>Health. Education. Energy.</h3>');
 must('<span class="tag">Back to today</span><h3>Now we build</h3>','<span class="tag">Where we are</span><h3>The Bahamas today</h3>');

 if(/better must return/i.test(html.replace(/<script[\s\S]*?<\/script>/g,'')))throw new Error('MEMBERS PATCH: slogan still present');

 const css=`
/* MEMBERS FIRST */
.bridge-lede{margin:26px 0 8px;max-width:72ch}
.bahamas-lede{margin:34px 0 0;max-width:72ch}
#cycle .chapter-head .lede2{margin-top:6px}
.hero h1 .lead{font-size:.34em;line-height:1;color:#FFD9D9;font-weight:800;margin-bottom:.22em;letter-spacing:.02em}
.hero .sub.voice{font-family:var(--display);font-weight:900;text-transform:uppercase;font-size:clamp(1.5rem,3vw,2.2rem);line-height:1.05;color:#FFE08A;max-width:none;margin-top:18px}
.alist{list-style:none;margin:16px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;counter-reset:a}
.alist li{background:var(--surface);border:1px solid var(--line);border-top:4px solid var(--red);border-radius:16px;padding:20px 20px 22px;display:grid;gap:8px;align-content:start;box-shadow:0 18px 40px -30px rgba(20,20,60,.45)}
.anum{font-family:var(--display);font-weight:900;font-size:2.1rem;line-height:1;color:var(--red)}
.alist h3{font-family:var(--display);font-weight:900;text-transform:uppercase;font-size:1.4rem;line-height:1.02;color:var(--ink)}
.alist p{color:var(--muted);font-size:.97rem;line-height:1.6}
.aexp{display:block;margin-top:34px}
.asum{margin-top:24px;font-size:1.12rem;font-style:italic;color:var(--navy-ink);max-width:70ch;line-height:1.55}
.aquote{margin:22px 0 0;background:var(--navy);color:#E3E4FA;border-radius:18px;padding:24px 28px;max-width:820px}
.aquote blockquote{margin:0;font-family:var(--display);font-weight:800;font-size:clamp(1.3rem,2.4vw,1.8rem);line-height:1.15;color:#fff}
.aquote figcaption{margin-top:10px;font-size:.8rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#FFB4B6}
@media (max-width:1060px){.alist{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.alist{grid-template-columns:1fr}.aquote{padding:20px}}
`;
 const ci=html.lastIndexOf('</style>');html=html.slice(0,ci)+css+html.slice(ci);
 return html;
}
