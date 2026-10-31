// Downloads the 21 culture slides into public/media/culture during the Vercel build.
import fs from 'node:fs/promises';
const SRC='https://raw.githubusercontent.com/Bahamastravels242/better-must-return/main/slides/';
await fs.mkdir('public/media/culture',{recursive:true});
await Promise.all(Array.from({length:21},(_,k)=>'slide-'+String(k+1).padStart(2,'0')+'.webp').map(async f=>{
 for(let i=0;i<4;i++){try{const r=await fetch(SRC+f);if(r.ok){const b=Buffer.from(await r.arrayBuffer());await fs.writeFile('public/media/culture/'+f,b);console.log('SLIDE',f,b.length);return}console.log('SLIDE status',f,r.status)}catch(e){console.log('SLIDE err',f,e.message)}await new Promise(r=>setTimeout(r,1500))}
 throw new Error('slide fetch failed '+f);
}));
