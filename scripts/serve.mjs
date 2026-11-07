import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{
  try {
    let path = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    // Le préfixe permet aussi de vérifier un hébergement sous le nom du dépôt.
    if(path.startsWith('/svt-exploratrice/')) path=path.slice('/svt-exploratrice'.length);
    const file = resolve(root, '.' + (path.endsWith('/') ? path+'index.html' : path));
    if(!file.startsWith(root+sep)) {res.writeHead(403).end();return;}
    const body=await readFile(file);
    res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'}).end(body);
  } catch {res.writeHead(404).end('Fichier introuvable');}
}).listen(Number(process.env.PORT)||4173,'0.0.0.0',()=>console.log('Serveur SVT démarré sur le port '+(process.env.PORT||4173)));
