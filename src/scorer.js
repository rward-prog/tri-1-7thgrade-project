/* Shared rubric scoring widget.
   buildScorer(rootElement, rubric, { notes, flags, sectionComments, onChange }) */
(function(){
  var LABELS = {
    4:{4:"Excellent",3:"Good",2:"Developing",1:"Beginning",0:"Not present"},
    3:{3:"Excellent",2:"Developing",1:"Needs work",0:"Not present"},
    2:{2:"Full",1:"Partial",0:"None"}
  };
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function band(v,max){ var f=v/max; return f>=0.99?"hi":f>=0.6?"mid":f>0?"low":"zero"; }

  window.buildScorer = function(root, rubric, opts){
    opts = opts || {};
    var scores = {}, items = [];
    root.innerHTML = "";

    rubric.sections.forEach(function(sec,si){
      var secMax = sec.items.reduce(function(a,i){return a+i.max;},0);
      var h = document.createElement("div"); h.className="sec-hdr";
      h.innerHTML = "<span>"+esc(sec.name)+"</span><small>"+secMax+" pts</small>";
      root.appendChild(h);

      sec.items.forEach(function(it){
        items.push(it); scores[it.id] = null;
        var c = document.createElement("div"); c.className="crit"; c.dataset.id = it.id;
        var lv = [];
        for (var v=it.max; v>=0; v--) lv.push(v);
        var btns = lv.map(function(v){
          var desc = it.levels[v] != null ? it.levels[v] : "Missing or not presented.";
          return '<button type="button" class="sbtn" data-v="'+v+'"><span class="n">'+v+'</span><span class="l">'+(LABELS[it.max][v]||"")+'</span><span class="d">'+esc(desc)+'</span></button>';
        }).join("");
        var extra = "";
        if (opts.notes) extra += '<textarea data-note="'+it.id+'" placeholder="'+esc(opts.notePlaceholder || "Why did I pick this score? Where in my work can I point to it?")+'" aria-label="Comment for '+esc(it.name)+'"></textarea>';
        if (opts.flags) extra += '<label class="flag"><input type="checkbox" data-flag="'+it.id+'"> Ask a question</label>';
        var exHtml = "";
        if (it.examples) {
          exHtml = '<details class="ex"><summary>See examples</summary><div class="ex-body"><p><b>'+esc(it.examples.tip)+'</b></p><p class="ex-h good">Strong questions</p><ul>'
            + it.examples.good.map(function(q){return "<li>"+esc(q)+"</li>";}).join("")
            + '</ul><p class="ex-h weak">Needs work, and how to fix it</p><ul>'
            + it.examples.weak.map(function(w){return "<li><b>"+esc(w.q)+"</b> "+esc(w.why)+" Try: <i>"+esc(w.fix)+"</i></li>";}).join("")
            + '</ul></div></details>';
        }
        c.innerHTML = '<div class="crit-title"><span>'+it.id+'. '+esc(it.name)+'</span><span class="pts">'+it.max+' pts</span></div>'
          + '<div class="score-row">'+btns+'</div>' + exHtml + (extra?'<div class="extra">'+extra+'</div>':"");
        root.appendChild(c);
      });

      if (opts.sectionComments){
        var t = document.createElement("textarea"); t.className="seccmt"; t.dataset.sec = String(si);
        t.placeholder = "Comments for "+sec.name+" (optional)";
        t.setAttribute("aria-label","Comments for "+sec.name);
        root.appendChild(t);
      }
    });

    function paint(){
      root.querySelectorAll(".crit").forEach(function(c){
        var it = items.filter(function(i){return i.id===c.dataset.id;})[0], v = scores[it.id];
        c.querySelectorAll(".sbtn").forEach(function(b){
          var on = v!==null && parseInt(b.dataset.v,10)===v;
          b.className = "sbtn" + (on ? " sel "+band(v,it.max) : "");
          b.setAttribute("aria-pressed", on);
        });
      });
    }
    function changed(){ paint(); if (opts.onChange) opts.onChange(api); }

    root.addEventListener("click", function(e){
      var b = e.target.closest(".sbtn"); if(!b) return;
      var id = b.closest(".crit").dataset.id, v = parseInt(b.dataset.v,10);
      scores[id] = (scores[id]===v) ? null : v;   // click again to clear
      changed();
    });
    root.addEventListener("change", function(e){
      var f = e.target.dataset && e.target.dataset.flag;
      if (f){ e.target.closest(".crit").classList.toggle("flagged", e.target.checked); changed(); }
    });

    var api = {
      items: items,
      getScores: function(){ return Object.assign({}, scores); },
      setScore: function(id,v){ scores[id]=v; changed(); },
      total: function(){ var t=0; for (var k in scores) if (scores[k]!==null) t+=scores[k]; return t; },
      max: function(){ return items.reduce(function(a,i){return a+i.max;},0); },
      scoredCount: function(){ var n=0; for (var k in scores) if (scores[k]!==null) n++; return n; },
      getNotes: function(){ var o={}; root.querySelectorAll("[data-note]").forEach(function(t){ o[t.dataset.note]=t.value.trim(); }); return o; },
      getFlags: function(){ var o=[]; root.querySelectorAll("[data-flag]:checked").forEach(function(c){ o.push(c.dataset.flag); }); return o; },
      getSectionComments: function(){ var o=[]; root.querySelectorAll(".seccmt").forEach(function(t){ o[parseInt(t.dataset.sec,10)] = t.value.trim(); }); return o; },
      reset: function(){
        for (var k in scores) scores[k]=null;
        root.querySelectorAll("textarea").forEach(function(t){ t.value=""; });
        root.querySelectorAll("[data-flag]").forEach(function(c){ c.checked=false; c.closest(".crit").classList.remove("flagged"); });
        changed();
      }
    };
    paint();
    return api;
  };

  window.letterGrade = function(pct){ return pct>=90?"A":pct>=80?"B":pct>=70?"C":pct>=60?"D":"F"; };
})();
