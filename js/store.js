const KEY = 'svt-exploratrice-v1';
const empty = () => ({correct:[],missed:[],read:[],lastRoute:'',quizPositions:{},version:1});
export let storageAvailable = true;
function read() {
  try {
    const raw=JSON.parse(localStorage.getItem(KEY)||'null');
    if(!raw || raw.version!==1) return empty();
    return {version:1,quizPositions:raw.quizPositions&&typeof raw.quizPositions==='object'&&!Array.isArray(raw.quizPositions)?Object.fromEntries(Object.entries(raw.quizPositions).filter(([k,v])=>k.length<60&&Number.isInteger(v)&&v>=0&&v<100)):{},correct:Array.isArray(raw.correct)?raw.correct.filter(x=>typeof x==='string'):[],missed:Array.isArray(raw.missed)?raw.missed.filter(x=>typeof x==='string'):[],read:Array.isArray(raw.read)?raw.read.filter(x=>typeof x==='string'):[],lastRoute:typeof raw.lastRoute==='string'?raw.lastRoute:''};
  } catch {storageAvailable=false;return empty();}
}
export const state=read();
export function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{storageAvailable=false;}}
export function record(id,correct){
  if(correct){if(!state.correct.includes(id))state.correct.push(id);state.missed=state.missed.filter(x=>x!==id);}
  else if(!state.missed.includes(id))state.missed.push(id);
  save();
}
export function reset(){Object.assign(state,empty());save();}
