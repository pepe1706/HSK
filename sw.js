const C='hsk-acc70a86cf',FC='hsk-fonts',FONTS=['fonts/Nunito-sub.woff','fonts/NotoSC-R.woff','fonts/NotoSC-B.woff','fonts/NotoSC-K.woff'];const F=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>caches.open(FC)).then(f=>Promise.all(FONTS.map(u=>f.match(u).then(r=>r||f.add(u)).catch(()=>0)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!==FC).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html'))))});
