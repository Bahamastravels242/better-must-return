// Updated qualifications for Mark A. Humes (Nov 12, 2026). Applied last.
export function quals(html){
 const a=html.indexOf('<ul class="proof">'),b=html.indexOf('</ul>',a);
 if(a<0||b<0||!html.slice(a,b).includes('Has run a party from the chair.'))throw new Error('QUALS PATCH: list not found');
 const li=(h,p)=>`          <li><b>${h}</b> ${p}</li>`;
 const list=['<ul class="proof">',
  li('Has run a party from the chair.','Former Member of Parliament and former Chairman of the DNA.'),
  li('Has led members who expect results.','Former President of UTEB and Chairman of BAHFSA.'),
  li('Has led national institutions.','Former Chairman of the Independence Secretariat and the National Honours Secretariat.'),
  li('Develops people.','Former Assistant Professor of English at the University of The Bahamas. Former head track and field coach at Marist School in Atlanta, the University of Puerto Rico, Río Piedras, and the University of The Bahamas.'),
  li('Committed to learning.','Board member of the Morehouse College Division of Professional and Continuing Studies (PCS) Advisory Board, and a member of the Bahamas chapter of Toastmasters Club 1600.'),
  li('Builds modern platforms.','Founder of TrendingIQ and the Imagine More Network.'),
  '        '].join('\n');
 return html.slice(0,a)+list+html.slice(b);
}
