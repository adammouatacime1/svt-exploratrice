// Schémas pédagogiques originaux. Ils simplifient les formes et ne sont pas des photographies.
const safeStep = value => Math.min(100, Math.max(0, Number(value) || 0));
const svg = (title, body, height = 420) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 ${height}" role="group" aria-label="${title}" style="display:block;width:100%;height:auto;font-family:inherit"><title>${title}</title>${body}</svg>`;
const part = (key, label, body) => `<g tabindex="0" role="button" data-part="${key}" aria-label="${label}" style="cursor:pointer">${body}</g>`;
const text = (x,y,label,size=18,fill='#21483e',anchor='start') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}">${label}</text>`;
const line = (x1,y1,x2,y2,color='#54786c',width=2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"/>`;
const badge = (x,y,label,color='#e3f2eb') => `<rect x="${x}" y="${y-21}" width="${label.length*10+22}" height="31" rx="10" fill="${color}"/>${text(x+11,y,label,16)}`;

export const partInfo = {
  'nature-tree': { name: 'Arbre · vivant', text: 'Un arbre est un végétal. Il grandit, se nourrit, respire et peut se reproduire.' },
  'nature-fox': { name: 'Renard · vivant', text: 'Le renard est un animal. Il trouve dans ce milieu de la nourriture, de l’eau et un abri.' },
  'nature-grass': { name: 'Herbes · vivant', text: 'Les herbes sont des végétaux. La lumière, l’eau et la température influencent leur présence.' },
  'nature-frog': { name: 'Grenouille · vivant', text: 'La grenouille est un animal. Elle utilise la mare et ses berges à différentes étapes de sa vie.' },
  'nature-water': { name: 'Eau · non vivant', text: 'L’eau est une matière non vivante. Le lac et la mare sont des milieux aquatiques.' },
  'nature-rock': { name: 'Roche · non vivant', text: 'Une roche n’est pas un être vivant. Elle participe aux caractéristiques du milieu.' },
  'nature-sun': { name: 'Lumière · non vivant', text: 'La lumière apporte de l’énergie. Ce n’est pas une matière à classer comme solide, liquide ou gazeuse.' },
  'nature-air': { name: 'Air · non vivant', text: 'L’air est un mélange de gaz. Il contient notamment du dioxygène, utilisé lors de la respiration.' },
  'nature-soil': { name: 'Sol · composante du milieu', text: 'La matière minérale du sol est non vivante. Mais le sol abrite aussi des êtres vivants : petits animaux, racines et micro-organismes.' },
  'plant-wall': { name: 'Paroi', text: 'Cette enveloppe rigide entoure la membrane de la cellule végétale. Elle aide à maintenir sa forme. Toutes les cellules végétales n’ont pas la même forme.' },
  'plant-membrane': { name: 'Membrane', text: 'Cette fine limite sépare l’intérieur de la cellule de son environnement. Elle contrôle des échanges.' },
  'plant-cytoplasm': { name: 'Cytoplasme', text: 'La matière à l’intérieur de la membrane entoure notamment le noyau et la grande vacuole.' },
  'plant-nucleus': { name: 'Noyau', text: 'Le noyau contient l’information génétique. Les cellules d’oignon étudiées ici en possèdent un ; certaines autres cellules n’en ont pas.' },
  'plant-vacuole': { name: 'Grande vacuole', text: 'Cette grande poche contient surtout de l’eau et des substances dissoutes. Elle occupe beaucoup de place dans la cellule d’oignon présentée.' },
  'animal-membrane': { name: 'Membrane', text: 'La membrane délimite cette cellule de la face interne de la joue. Il n’y a pas de paroi autour de cette cellule animale.' },
  'animal-cytoplasm': { name: 'Cytoplasme', text: 'Le cytoplasme se trouve à l’intérieur de la membrane. Il entoure le noyau.' },
  'animal-nucleus': { name: 'Noyau', text: 'Cette cellule de la joue possède un noyau, contenant l’information génétique. On ne généralise pas cette présence à toutes les cellules du vivant.' },
  'human-nose': { name: 'Nez ou bouche', text: 'L’air entre par le nez ou la bouche. À l’expiration, il ressort par ces mêmes ouvertures.' },
  'human-pharynx': { name: 'Pharynx', text: 'L’air traverse ce carrefour situé derrière le nez et la bouche, avant de rejoindre le larynx.' },
  'human-larynx': { name: 'Larynx', text: 'Le larynx relie le pharynx à la trachée. Il contient les cordes vocales.' },
  'human-trachea': { name: 'Trachée', text: 'Ce conduit transporte l’air jusqu’aux deux bronches principales.' },
  'human-bronchi': { name: 'Bronches', text: 'Les deux bronches principales conduisent l’air vers les deux poumons et se ramifient.' },
  'human-bronchioles': { name: 'Bronchioles', text: 'Ces conduits très fins prolongent les ramifications des bronches et mènent aux alvéoles.' },
  'human-alveoli': { name: 'Alvéoles', text: 'Ces petits sacs d’air sont entourés de capillaires, de très fins vaisseaux sanguins. L’O₂ passe vers le sang ; le CO₂ passe vers l’air.' },
  'insect-stigma': { name: 'Stigmates', text: 'Ces ouvertures à la surface du corps du criquet permettent l’entrée et la sortie de l’air.' },
  'insect-trachea': { name: 'Trachées', text: 'Ces tubes remplis d’air se ramifient dans le corps du criquet.' },
  'insect-tracheoles': { name: 'Trachéoles', text: 'Les ramifications les plus fines apportent le dioxygène directement à proximité des tissus.' },
  'insect-tissue': { name: 'Organes et tissus', text: 'Les tissus sont des ensembles de cellules. Le réseau de trachées et trachéoles leur apporte directement l’O₂, sans transport par le sang comme chez l’être humain.' },
  'leaf': { name: 'Feuille', text: 'La feuille réalise des échanges gazeux, notamment par les stomates. La plante respire le jour et la nuit.' },
  'stoma': { name: 'Stomate', text: 'Un stomate est un petit pore de l’épiderme de la feuille. Il permet des échanges de gaz. À la lumière, la photosynthèse et la respiration peuvent avoir lieu en même temps.' },
  'fish-mouth': { name: 'Bouche', text: 'Chez ce poisson osseux, l’eau entre par la bouche puis passe au niveau des branchies.' },
  'fish-gills': { name: 'Branchies', text: 'Les branchies prélèvent le dioxygène dissous dans l’eau et rejettent du dioxyde de carbone. Elles ne séparent pas les atomes des molécules d’eau.' },
  'fish-operculum': { name: 'Opercules', text: 'Ces volets protègent les branchies. L’eau sort à leur niveau après son passage sur les branchies.' },
  'berlese-lamp': { name: 'Lampe', text: 'Dans la simulation, la lampe chauffe et dessèche progressivement le haut de l’échantillon.' },
  'berlese-soil': { name: 'Sol ou litière', text: 'La litière est la couche de feuilles mortes et de débris à la surface du sol. Elle peut abriter de petits animaux.' },
  'berlese-sieve': { name: 'Tamis', text: 'Le tamis retient l’échantillon tout en laissant passer de petits animaux.' },
  'berlese-funnel': { name: 'Entonnoir', text: 'L’entonnoir guide les petits animaux vers le récipient collecteur.' },
  'berlese-collector': { name: 'Récipient collecteur', text: 'On y récupère de petits animaux du sol. Une loupe aide ensuite à les observer. Cette activité est une simulation, pas un montage à réaliser seul.' }
};

export function natureSVG() {
 return svg('Un milieu naturel à explorer : forêt, mare et berges', `
 <rect width="720" height="420" rx="24" fill="#edf5ed"/>
 <path d="M0 185Q170 110 310 190T720 175V420H0Z" fill="#d1dfb6"/>
 <path d="M0 285Q100 245 280 280T720 260V420H0Z" fill="#b6cd98"/>
 ${part('nature-sun','Lumière du soleil',`<circle cx="620" cy="68" r="30" fill="#efc359"/>${text(620,120,'Lumière',17,'#4d5132','middle')}`)}
 ${part('nature-air','Air',`<path d="M300 66h80q25 0 20-16m-81 39h119q24 0 20-15m-126 40h68" fill="none" stroke="#628e93" stroke-width="5" stroke-linecap="round"/>${text(355,142,'Air',17,'#365c61','middle')}`)}
 ${part('nature-tree','Arbre',`<rect x="90" y="125" width="26" height="154" rx="8" fill="#9a7052"/><path d="M103 35L39 148H63L28 204H178L145 148H168Z" fill="#327a57"/>${text(105,305,'Arbre',18,'#21483e','middle')}`)}
 ${part('nature-water','Eau de la mare',`<ellipse cx="473" cy="310" rx="173" ry="64" fill="#79b4be"/><path d="M365 295q48-16 85 0m25 27q65-17 112-2m-217 21q42-12 81-1" fill="none" stroke="#dbf0ed" stroke-width="4"/>${text(490,396,'Eau de la mare',18,'#21483e','middle')}`)}
 ${part('nature-fox','Renard',`<path d="M218 278q35-41 59 0l31 7-18 17-47-1-18 20-9-5 9-29-22-9-22-24q37-5 37 24Z" fill="#c87946"/><path d="M265 270l7-22 10 23m1 0 13-19 2 28" fill="#c87946"/><circle cx="283" cy="280" r="3" fill="#23483d"/>${text(246,344,'Renard',17,'#21483e','middle')}`)}
 ${part('nature-frog','Grenouille',`<ellipse cx="565" cy="267" rx="21" ry="12" fill="#438e51"/><circle cx="553" cy="253" r="7" fill="#71ae67"/><circle cx="576" cy="253" r="7" fill="#71ae67"/><circle cx="554" cy="252" r="2.5" fill="#193d34"/><circle cx="577" cy="252" r="2.5" fill="#193d34"/>${text(567,233,'Grenouille',17,'#21483e','middle')}`)}
 ${part('nature-rock','Roche',`<path d="M635 316l13-29 29-8 30 40-7 17h-65Z" fill="#9bada5"/>${text(673,362,'Roche',17,'#21483e','middle')}`)}
 ${part('nature-grass','Herbes',`<path d="M48 360l-8-30m10 31 11-43m-8 43 23-24m20 32-4-38m6 37 15-31" stroke="#41834a" stroke-width="5" stroke-linecap="round"/>${text(77,397,'Herbes',17,'#21483e','middle')}`)}
 ${part('nature-soil','Sol',`<rect x="140" y="369" width="177" height="31" rx="12" fill="#9b7555"/>${text(228,391,'Sol sous nos pieds',16,'#ffffff','middle')}`)}
 `);
}

export function cellSVG(kind='plant',scale=1) {
 const plant=kind==='plant'||kind==='vegetal'||kind==='vegetable';
 const z=Math.max(.65,Math.min(1.45,Number(scale)||1));
 let body = plant ? `
 ${part('plant-wall','Paroi de la cellule d’oignon',`<rect x="170" y="65" width="380" height="285" rx="24" fill="#b4cfa1" stroke="#48764e" stroke-width="12"/>`)}
 ${part('plant-membrane','Membrane',`<rect x="182" y="77" width="356" height="261" rx="18" fill="#f3e5b8" stroke="#bf9141" stroke-width="5"/>`)}
 ${part('plant-cytoplasm','Cytoplasme',`<path d="M204 105H517V316H204Z" fill="#f3e5b8"/><circle cx="219" cy="303" r="5" fill="#dfc883"/><circle cx="509" cy="281" r="5" fill="#dfc883"/>`)}
 ${part('plant-vacuole','Grande vacuole',`<rect x="260" y="105" width="240" height="207" rx="48" fill="#d2e9e8" stroke="#80b7bb" stroke-width="3"/>`)}
 ${part('plant-nucleus','Noyau',`<ellipse cx="227" cy="217" rx="28" ry="39" fill="#b7a2d1" stroke="#786297" stroke-width="3"/><circle cx="225" cy="218" r="10" fill="#7e669b"/>`)}
 ` : `
 ${part('animal-membrane','Membrane de la cellule de joue',`<path d="M198 120Q275 53 397 74Q525 81 544 207Q558 319 438 345Q294 379 211 310Q143 254 198 120Z" fill="#f6d5bb" stroke="#b5745c" stroke-width="7"/>`)}
 ${part('animal-cytoplasm','Cytoplasme',`<path d="M215 133Q285 78 394 95Q502 99 521 208Q535 300 431 323Q302 353 228 295Q172 250 215 133Z" fill="#f9dfc8"/><circle cx="278" cy="183" r="6" fill="#e9bba1"/><circle cx="443" cy="251" r="7" fill="#e9bba1"/><circle cx="333" cy="290" r="5" fill="#e9bba1"/>`)}
 ${part('animal-nucleus','Noyau',`<ellipse cx="362" cy="214" rx="48" ry="54" fill="#b7a2d1" stroke="#786297" stroke-width="4"/><circle cx="366" cy="211" r="15" fill="#7e669b"/>`)}
 `;
 return svg(plant?'Cellule végétale d’épiderme de bulbe d’oignon, schéma simplifié':'Cellule animale de la joue, schéma simplifié', `<rect width="720" height="420" rx="24" fill="#f7f6ef"/><g transform="translate(${360*(1-z)} ${210*(1-z)}) scale(${z})">${body}</g>${text(360,391,plant?'Épiderme du bulbe d’oignon · schéma simplifié':'Face interne de la joue · schéma simplifié',17,'#455e54','middle')}`);
}

export function berleseSVG(step=0) {
 const p=safeStep(step)/100;
 const animals=Array.from({length:5},(_,i)=>{
 const t=Math.min(1,Math.max(0,(p-i*.08)/.66));
 const x=315+i*19+(360-(315+i*19))*t;
 const y=167+182*t+(t===1?i*5:Math.sin(i*3)*9);
 return `<g transform="translate(${x} ${y})"><ellipse rx="7" ry="4" fill="#41382c"/><path d="M-4-3l-4-4m7 4 1-5m3 5 5-4m-12 9-4 4m7-3 1 4m3-5 5 4" stroke="#41382c" stroke-width="1.5"/></g>`;
 }).join('');
 return svg('Simulation contrôlée de l’appareil de Berlèse',`<rect width="720" height="420" rx="24" fill="#f7f3e8"/>
 ${part('berlese-lamp','Lampe',`<path d="M322 62q38-45 76 0l20 22H302Z" fill="#d4a64a"/><path d="M360 15V40" stroke="#686c60" stroke-width="6"/><ellipse cx="360" cy="83" rx="57" ry="9" fill="#f8d97d"/>`)}
 <path d="M329 101l-9 24m40-24v24m31-24 9 24" stroke="#dc9c46" stroke-width="${2+p*3}" opacity="${.3+p*.7}"/>
 ${part('berlese-soil','Sol ou litière',`<path d="M272 141H448L436 195H284Z" fill="${p>.5?'#b18e62':'#7e6950'}"/><path d="M289 158l25 10m22-19 17 14m23-14 28 14m11 6 16-16m-113 20 20 7" stroke="#ccac77" stroke-width="5"/>`)}
 ${part('berlese-funnel','Entonnoir',`<path d="M256 138L346 273V305H374V273L464 138" fill="none" stroke="#689da2" stroke-width="7"/>`)}
 ${part('berlese-sieve','Tamis',`<path d="M282 199H438m-146 6v-13m16 13v-13m16 13v-13m16 13v-13m16 13v-13m16 13v-13m16 13v-13m16 13v-13m16 13v-13" fill="none" stroke="#526e65" stroke-width="3"/>`)}
 ${part('berlese-collector','Récipient collecteur',`<path d="M317 313v64q0 13 15 13h56q15 0 15-13v-64" fill="#d4e6e5" stroke="#689da2" stroke-width="4"/><path d="M321 368h78" stroke="#8ebcba" stroke-width="3"/>`)}
 ${animals}
 ${line(414,65,500,65)}${text(510,71,'Lampe')}
 ${line(440,165,500,165)}${text(510,171,'Sol ou litière')}
 ${line(435,199,500,215)}${text(510,221,'Tamis')}
 ${line(402,237,500,263)}${text(510,269,'Entonnoir')}
 ${line(404,352,500,352)}${text(510,349,'Récipient')}${text(510,372,'collecteur')}
 ${text(29,145,'Chaleur et',17)}${text(29,169,'dessèchement',17)}${text(29,220,'Les animaux',17)}${text(29,244,'descendent ↓',17)}
 `);
}

export function respiratorySVG(kind='human') {
 if(kind==='fish') return fishSVG();
 if(kind==='plant'||kind==='leaf') return leafSVG();
 if(kind==='grasshopper'||kind==='insect') return insectSVG();
 return svg('Trajet de l’air dans l’appareil respiratoire humain',`<rect width="720" height="420" rx="24" fill="#f5f4eb"/>
 <path d="M316 35q-34 1-37 35l-15 24 18 6v33l29 3v24q-65 5-89 52l-25 168h285l-25-168q-25-47-81-52v-24q25-17 25-46 0-53-85-55Z" fill="#e8ede0" stroke="#c3cdb8" stroke-width="2"/>
 <path d="M316 185Q252 157 244 250Q232 337 314 351V185m45 0Q421 159 431 250Q443 337 361 351V185" fill="#e9bbb0" stroke="#be8d84" stroke-width="2"/>
 ${part('human-nose','1. Nez ou bouche',`<path d="M282 90h41m-38 25h38" stroke="#4a9098" stroke-width="11" fill="none" stroke-linecap="round"/>${line(284,95,150,56)}${text(28,48,'1. Nez ou bouche',17)}`)}
 ${part('human-pharynx','2. Pharynx',`<path d="M325 83v51" stroke="#4a9098" stroke-width="12" fill="none"/>${line(326,113,488,79)}${text(500,85,'2. Pharynx',17)}`)}
 ${part('human-larynx','3. Larynx',`<rect x="320" y="134" width="23" height="24" rx="7" fill="#366f78"/>${line(334,146,488,125)}${text(500,131,'3. Larynx',17)}`)}
 ${part('human-trachea','4. Trachée',`<path d="M332 158v69" stroke="#4a9098" stroke-width="18"/><path d="M323 170h18m-18 13h18m-18 13h18m-18 13h18" stroke="#a9d2cf" stroke-width="3"/>${line(328,184,150,173)}${text(28,179,'4. Trachée',17)}`)}
 ${part('human-bronchi','5. Bronches',`<path d="M332 222l-39 39m39-39 39 39" stroke="#4a9098" stroke-width="13" fill="none" stroke-linecap="round"/>${line(366,251,488,223)}${text(500,229,'5. Bronches',17)}`)}
 ${part('human-bronchioles','6. Bronchioles',`<path d="M293 257l-19 43m20-42 10 48m67-48-12 48m13-48 23 43m-121-10-13-5m13 5 6 13m24-8-9 13m9-13 9 12m45-13-8 13m8-13 10 13m25-20-1 17m1-17 15 8" stroke="#4a9098" stroke-width="5" fill="none" stroke-linecap="round"/>${line(275,295,150,273)}${text(28,279,'6. Bronchioles',17)}`)}
 ${part('human-alveoli','7. Alvéoles',`<g fill="#b5889c" stroke="#815f76" stroke-width="2"><circle cx="257" cy="313" r="9"/><circle cx="272" cy="320" r="9"/><circle cx="286" cy="313" r="9"/><circle cx="294" cy="322" r="9"/><circle cx="308" cy="322" r="9"/><circle cx="348" cy="322" r="9"/><circle cx="363" cy="322" r="9"/><circle cx="389" cy="321" r="9"/><circle cx="404" cy="316" r="9"/></g>${line(405,317,488,310)}${text(500,316,'7. Alvéoles',17)}`)}
 ${text(360,401,'L’air entre et ressort par les mêmes conduits.',17,'#455e54','middle')}`);
}

function insectSVG() {
 return svg('Respiration trachéenne du criquet : un réseau jusqu’aux tissus',`<rect width="720" height="420" rx="24" fill="#f2f4e8"/>
 <path d="M198 230q28-103 134-88l160 38q47 12 53 50-71 79-222 35l-65-5Z" fill="#b4cd83" stroke="#6c8b50" stroke-width="3"/><ellipse cx="192" cy="211" rx="43" ry="46" fill="#9ebc69"/><circle cx="176" cy="195" r="6" fill="#244936"/>
 <path d="M171 169l-35-42m55 39-3-53m72 140-47 69-59 17m173-70-5 67-57 18m151-90 43 62 67 8" stroke="#6c8b50" stroke-width="7" fill="none" stroke-linecap="round"/>
 ${part('insect-stigma','Stigmates',`<g fill="#2d6c70" stroke="#d7eee3" stroke-width="3"><circle cx="273" cy="242" r="9"/><circle cx="332" cy="250" r="9"/><circle cx="392" cy="250" r="9"/><circle cx="451" cy="241" r="9"/></g>${line(273,242,102,276)}${text(27,303,'Stigmates',18)}`)}
 ${part('insect-trachea','Trachées',`<path d="M273 241l16-46 43 54 27-53 33 54 27-44 32 35" stroke="#488e97" stroke-width="8" fill="none" stroke-linejoin="round"/>${line(359,196,387,102)}${text(352,83,'Trachées',18)}`)}
 ${part('insect-tracheoles','Trachéoles',`<path d="M290 195l-17-19m17 19 6-28m63 29-15-24m15 24 13-27m48 38 5-30m-5 30 28-19" stroke="#488e97" stroke-width="3" fill="none"/>${line(426,182,559,112)}${text(548,91,'Trachéoles',18)}`)}
 ${part('insect-tissue','Organes et tissus',`<ellipse cx="360" cy="158" rx="40" ry="15" fill="#e7b89c" stroke="#b68669" stroke-width="2"/>${line(379,153,556,158)}${text(556,155,'Tissus',18)}`)}
 ${text(360,386,'Air → stigmates → trachées → trachéoles → tissus',17,'#294d43','middle')}`);
}

function leafSVG() {
 return svg('Feuille et zoom sur un stomate : de petits pores pour les gaz',`<rect width="720" height="420" rx="24" fill="#f1f5e8"/>
 ${part('leaf','Feuille',`<path d="M84 313Q40 99 285 59Q356 255 84 313Z" fill="#8cbb75" stroke="#49834c" stroke-width="4"/><path d="M67 341L276 83m-166 205-8-109m49 59 102-10m-65-58-7-66m-32 132 72-1" stroke="#49834c" stroke-width="4" fill="none"/>${text(138,380,'Une feuille',18,'#21483e','middle')}`)}
 <path d="M228 196L366 114m-160 128 160 65" stroke="#8da78c" stroke-width="2" stroke-dasharray="6 6"/>
 <rect x="359" y="77" width="325" height="265" rx="24" fill="#d9e8c8" stroke="#7b9b65" stroke-width="3"/>
 <path d="M361 138q60-30 95 0t95 0 132 0m-323 139q60-30 95 0t95 0 132 0M420 78q-28 32 0 60m196-60q-28 32 0 60M420 277q-28 32 0 64m196-64q-28 32 0 64" fill="none" stroke="#9bb985" stroke-width="2"/>
 ${part('stoma','Stomate : un pore entre deux cellules',`<path d="M505 135q-80 62 0 141l17-26q-41-45 0-90Z" fill="#7eac62" stroke="#467f4e" stroke-width="3"/><path d="M539 135q80 62 0 141l-17-26q41-45 0-90Z" fill="#7eac62" stroke="#467f4e" stroke-width="3"/><ellipse cx="522" cy="205" rx="12" ry="38" fill="#f9f7ec"/>${text(522,324,'Stomate (zoom)',18,'#21483e','middle')}`)}
 ${badge(403,47,'O₂ ↔','#deeceb')}${badge(545,47,'CO₂ ↔','#f5dfca')}
 ${text(522,382,'Les gaz passent par le pore.',17,'#21483e','middle')}`);
}

function fishSVG() {
 return svg('Respiration branchiale d’un poisson osseux : trajet de l’eau',`<rect width="720" height="420" rx="24" fill="#edf5f1"/>
 <path d="M140 219q88-135 293-78l113 67 95-65-21 88 21 66-105-56q-246 103-396-22Z" fill="#bddbd0" stroke="#639c8c" stroke-width="3"/>
 <path d="M318 139l47-39 68 41m-91 126 28 44 53-56" fill="#9ac3b5" stroke="#639c8c" stroke-width="3"/>
 <circle cx="203" cy="190" r="9" fill="#24493f"/>
 ${part('fish-mouth','Bouche : entrée de l’eau',`<path d="M141 220h37" stroke="#3c7781" stroke-width="8" stroke-linecap="round"/>${line(149,221,87,132)}${text(29,111,'Bouche',18)}`)}
 ${part('fish-gills','Branchies',`<path d="M265 171q-35 50 0 95m13-90q-35 45 0 85m12-82q-34 42 0 79" fill="none" stroke="#be6c66" stroke-width="7"/>${line(278,176,301,87)}${text(276,66,'Branchies',18)}`)}
 ${part('fish-operculum','Opercule : sortie de l’eau',`<path d="M310 162q36 62-7 107" fill="none" stroke="#467e74" stroke-width="6"/>${line(321,234,420,316)}${text(413,342,'Opercule',18)}`)}
 <path d="M35 229h86l-12-8m12 8-12 8m72-8h62l-12-8m12 8-12 8M316 261q18 43 68 43l-11-8m11 8-13 4" fill="none" stroke="#3a91a3" stroke-width="4" stroke-linecap="round"/>
 ${text(27,271,'Eau entrante',17)}${text(398,299,'Eau sortante',17)}
 ${badge(386,72,'O₂ : eau → sang','#dcece9')}${badge(386,112,'CO₂ : sang → eau','#f4dfca')}
 ${text(360,395,'Les branchies prélèvent l’O₂ dissous dans l’eau.',17,'#21483e','middle')}`);
}

export function exchangeSVG(step=0) {
 const t=safeStep(step)/100;
 const o2x=273+174*t, co2x=449-174*t;
 return svg('Échanges entre une alvéole et les capillaires sanguins',`<rect width="720" height="420" rx="24" fill="#f8f4eb"/>
 <path d="M228 35v46q-110 20-110 146 0 128 131 130 128 1 130-130 0-117-110-146V35" fill="#f1dacb" stroke="#ad8b7d" stroke-width="4"/>
 <path d="M405 88q116 82 1 276" fill="none" stroke="#c7797b" stroke-width="57"/>
 <path d="M405 88q116 82 1 276" fill="none" stroke="#f0b4ae" stroke-width="45"/>
 <ellipse cx="438" cy="124" rx="15" ry="8" fill="#b96165" transform="rotate(38 438 124)"/><ellipse cx="463" cy="213" rx="15" ry="8" fill="#b96165" transform="rotate(83 463 213)"/><ellipse cx="442" cy="308" rx="15" ry="8" fill="#b96165" transform="rotate(-57 442 308)"/>
 ${text(249,141,'Air de',20,'#624f44','middle')}${text(249,167,'l’alvéole',20,'#624f44','middle')}
 <path d="M280 210h145l-12-8m12 8-12 8" fill="none" stroke="#327c84" stroke-width="3"/>
 <path d="M425 271H280l12-8m-12 8 12 8" fill="none" stroke="#a36532" stroke-width="3"/>
 <circle cx="${o2x}" cy="210" r="22" fill="#d8eeeb" stroke="#327c84" stroke-width="2"/>${text(o2x,216,'O₂',18,'#225f65','middle')}
 <circle cx="${co2x}" cy="271" r="25" fill="#f4dec8" stroke="#a36532" stroke-width="2"/>${text(co2x,277,'CO₂',17,'#824e24','middle')}
 ${line(462,170,520,143)}${text(530,133,'Capillaire',18)}${text(530,157,'(vaisseau fin)',17)}
 ${line(375,317,520,310)}${text(530,305,'Parois fines',17)}
 ${text(360,398,'O₂ : air → sang    •    CO₂ : sang → air',17,'#21483e','middle')}`);
}
