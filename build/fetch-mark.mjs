// Downloads the shareable graphics into public/media/downloads during the Vercel build.
import fs from 'node:fs/promises';
const SRC=process.argv[2];
await fs.mkdir('public/media/downloads',{recursive:true});
for(const f of ['fnm-first-100-days.jpg','fnm-innovation-to-action-pipeline.jpg','og-members.jpg']){
 let ok=false;for(let i=0;i<4&&!ok;i++){try{const r=await fetch(SRC+'downloads/'+f);if(r.ok){const b=Buffer.from(await r.arrayBuffer());await fs.writeFile('public/media/downloads/'+f,b);console.log('DOWNLOAD',f,b.length);ok=true}}catch(e){}if(!ok)await new Promise(r=>setTimeout(r,1500))}
 if(!ok)throw new Error('download fetch failed '+f);
}
