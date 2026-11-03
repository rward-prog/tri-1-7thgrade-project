/* =========================================================
   CODE
   ========================================================= */
const $ = s => document.querySelector(s);
const parse = s => { const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); };
const qp = new URLSearchParams(location.search);
let today = qp.get("today") ? parse(qp.get("today")) : new Date();
today = new Date(today.getFullYear(),today.getMonth(),today.getDate());
const DAY = 86400000;
const diffDays = (a,b)=>Math.round((a-b)/DAY);
const fmt = (d,o)=>d.toLocaleDateString("en-US",o);
const iso = d => d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const isClassDay = d => CLASS_WEEKDAYS.includes(d.getDay()) && !NO_CLASS.includes(iso(d));
function classDaysBetween(from,to){ // class days after `from` up to and including `to`
  let n=0; for(let d=new Date(from.getTime()+DAY); d<=to; d=new Date(d.getTime()+DAY)) if(isClassDay(d)) n++; return n;
}
let doneSet = new Set();
try{ doneSet = new Set(JSON.parse(localStorage.getItem("exproj-done")||"[]")); }catch(e){}
function saveDone(){ try{ localStorage.setItem("exproj-done",JSON.stringify([...doneSet])); }catch(e){} }

/* hero countdowns: Materials and Methods first, then the final presentations */
(function(){
  if(!$("#mmDays")) return;
  const mm=parse(MM_DATE), n=diffDays(mm,today);
  if(n>0){ $("#mmDays").textContent=n; $("#mmLbl").textContent=n===1?"day until Materials and Methods presentations":"days until Materials and Methods presentations";
    {const c=classDaysBetween(today,mm); $("#mmClass").textContent=c+(c===1?" class day":" class days")+" left, including presentation day";} }
  else if(n===0){ $("#mmDays").textContent="Today"; $("#mmLbl").textContent="Materials and Methods presentations"; $("#mmClass").textContent=""; }
  else { $("#mmDays").textContent="Done"; $("#mmLbl").textContent="Materials and Methods presentations are finished"; $("#mmClass").textContent=""; }

  const target=parse(PRESENT_DATE), end=parse(END_DATE), m=diffDays(target,today);
  if(m>0){ $("#daysLeft").textContent=m; $("#daysLbl").textContent=m===1?"day until final presentations":"days until final presentations";
    {const c=classDaysBetween(today,target); $("#classLeft").textContent=c+(c===1?" class day":" class days")+" left, including presentation day";} }
  else if(today<=end){ $("#daysLeft").textContent="Now"; $("#daysLbl").textContent="Final presentations are happening"; $("#classLeft").textContent=""; }
  else { $("#daysLeft").textContent="Done"; $("#daysLbl").textContent="Final presentations are finished"; $("#classLeft").textContent=""; }
})();

/* check-in countdown cards */
function renderCheckins(){
  const box=$("#ciCards"); if(!box) return;
  const list=ITEMS.filter(i=>i.ci);
  let nextFound=false;
  box.innerHTML=list.map((it,i)=>{
    const d=parse(it.d), n=diffDays(d,today), c=n>0?classDaysBetween(today,d):0;
    let cls="cicard", big, small;
    if(n<0){ cls+=" past"; big="Passed"; small="Due "+fmt(d,{month:"short",day:"numeric"}); }
    else if(n===0){ cls+=" now"; nextFound=true; big="Today"; small="Due by the end of class"; }
    else { if(!nextFound){ cls+=" next"; nextFound=true; } big=n; small=(n===1?"day":"days")+" left ("+c+" class day"+(c===1?"":"s")+")"; }
    return `<div class="${cls}"><div class="cid">Check-in ${i+1}</div><div class="cidate">${fmt(d,{weekday:"long",month:"short",day:"numeric"})}</div><div class="cibig">${big}</div><div class="cismall">${small}</div></div>`;
  }).join("");
}
document.querySelectorAll(".js-form").forEach(a=>{
  if(FORM_URL){ a.href=FORM_URL; a.target="_blank"; a.rel="noopener"; }
  else { a.removeAttribute("href"); a.setAttribute("aria-disabled","true"); a.textContent="Form link coming soon"; }
});

function whenText(d){
  const n=diffDays(d,today);
  if(n===0) return {t:"Today",u:true};
  if(n===1) return {t:"Tomorrow",u:true};
  if(n<0) return {t:Math.abs(n)===1?"Yesterday":"Passed",u:false};
  const c=classDaysBetween(today,d);
  return {t:"In "+c+" class day"+(c===1?"":"s")+" ("+n+" calendar days)",u:n<=2};
}
function renderUpNext(){
  const box=$("#upnext"); if(!box) return;
  const nxt=ITEMS.find(it=>parse(it.d)>=today && !doneSet.has(it.d+it.title));
  if(!nxt){ box.innerHTML=`<div><h3>You are all caught up.</h3><p>Nothing else is on your list.</p></div>`; return; }
  const d=parse(nxt.d), w=whenText(d);
  box.innerHTML=`<div><h3>Up next: ${nxt.title}</h3><p>${fmt(d,{weekday:"long",month:"long",day:"numeric"})}. ${w.t}.</p></div>`;
}


/* ---------- navigation and pager ---------- */
const PAGES=[["index.html","Home"],["schedule.html","Schedule"],["brainstorm.html","Brainstorm"],["reaction.html","Reaction"],["howto.html","How to"],["scholar.html","Sources"],["stats.html","P-value"],["sheets.html","Sheets"],["downloads.html","Downloads"],["rubrics.html","Rubrics"],["checkin.html","Check-in"],["self-check.html","Self-check"]];
(function(){
  const cur=(location.pathname.split("/").pop()||"index.html");
  const nav=$("#navlinks");
  if(nav) nav.innerHTML=PAGES.map(p=>`<a href="${p[0]}"${p[0]===cur?' aria-current="page"':""}>${p[1]}</a>`).join("");
  const pg=$("#pager");
  if(pg){
    const i=PAGES.findIndex(p=>p[0]===cur);
    let h="";
    if(i>0) h+=`<a class="prev" href="${PAGES[i-1][0]}">Back: ${PAGES[i-1][1]}</a>`;
    if(i>=0&&i<PAGES.length-1) h+=`<a class="next" href="${PAGES[i+1][0]}">Next: ${PAGES[i+1][1]}</a>`;
    pg.innerHTML=h;
  }
  renderUpNext(); renderCheckins();
})();
