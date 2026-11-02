/* =====================================================================
   RUBRIC DATA: the single source of truth.
   Edit wording or point values here and the student site, the student
   self-check page, and the teacher grader all update together.
   max = points for the criterion. levels = what each score looks like.
   ===================================================================== */
window.RUBRICS = {

/* ---------- Materials and Methods (check-in) presentation, 36 pts ---------- */
mm: {
  key: "mm",
  title: "Materials and Methods Presentation",
  timeMax: 5,
  sections: [
    { name: "Scientific thinking", items: [
      { id:"1A", name:"Research question", max:3, levels:{
        3:"Clear, testable question at or above 7th-grade level; strong scientific thinking.",
        2:"Testable but may be too simple or slightly below grade level.",
        1:"Unclear, untestable, or well below grade level.",
        0:"No research question presented." }},
      { id:"1B", name:"Hypothesis", max:3, levels:{
        3:"In proper If, then format and logically connects to the research question.",
        2:"Present and mostly correct, but format or the connection to the question is weak.",
        1:"Missing, not in If/Then format, or does not relate to the experiment.",
        0:"No hypothesis presented." }},
      { id:"1C", name:"Variables (IV, DV, controls)", max:3, levels:{
        3:"Correctly identifies IV, DV, and at least 3 important controls with clear explanations.",
        2:"Identifies IV, DV, and some controls, but explanations are incomplete or partly incorrect.",
        1:"Variables missing or wrong, or fewer than 3 controls listed.",
        0:"No variables identified." }}
    ]},
    { name: "Procedure and materials", items: [
      { id:"2A", name:"Method / procedure", max:3, levels:{
        3:"Detailed, step-by-step procedure another group could replicate; the bulk of the presentation.",
        2:"Present but lacks some detail or steps needed to replicate.",
        1:"Vague, incomplete, or only briefly mentioned.",
        0:"No procedure presented." }},
      { id:"2B", name:"Materials list", max:3, levels:{
        3:"Complete bullet list of all materials needed; specific and accurate.",
        2:"Materials listed but some items are missing or not specific.",
        1:"Missing, incomplete, or not a bullet list.",
        0:"No materials list presented." }},
      { id:"2C", name:"Timeline and planning", max:3, levels:{
        3:"Realistic hour estimate with clear justification and a specific plan for when and how work will be completed.",
        2:"Time estimate given but justification or plan is vague.",
        1:"No estimate, or the plan is unrealistic or missing.",
        0:"No timeline or planning presented." }}
    ]},
    { name: "Sources", items: [
      { id:"3A", name:"APA sources", max:3, levels:{
        3:"2 or more sources on separate slides, each with a consistent APA citation, a clear summary, and a 'What this means' statement for the experiment.",
        2:"1 source with APA citation and summary, or 2 sources with inconsistent citations, a weak summary, or no 'What this means'.",
        1:"No sources, or sources lack APA format and meaningful summaries.",
        0:"No sources of any kind." }}
    ]},
    { name: "Slide design", items: [
      { id:"4A", name:"Slide design", max:3, levels:{
        3:"Photos from your own experiment on every slide; minimal text; slide titles capitalized; clean and engaging.",
        2:"Most slides have photos of the experiment; some are text-heavy, off-topic, or have lowercase titles.",
        1:"Few experiment photos, GIFs or unrelated images, or cluttered with too much text.",
        0:"No slides shown." }}
    ]},
    { name: "Public speaking", items: [
      { id:"5A", name:"Speaking skills", max:3, levels:{
        3:"Clear and confident, consistent eye contact, does not read from the slides.",
        2:"Generally clear but relies on notes or slides; some hesitation.",
        1:"Hard to hear or understand; reads directly from slides.",
        0:"Did not speak or was absent." }},
      { id:"5B", name:"Organization and flow", max:3, levels:{
        3:"Logical order with smooth transitions that connect each slide to the next; easy to follow.",
        2:"Mostly logical but some parts feel out of place or abrupt.",
        1:"Disorganized or difficult to follow.",
        0:"No discernible structure." }},
      { id:"5C", name:"Equal participation", max:3, levels:{
        3:"All partners speak a roughly equal amount of time.",
        2:"Most partners speak, but time is noticeably uneven.",
        1:"One partner dominates; the other barely speaks.",
        0:"Only one partner spoke, or the group was absent." }},
      { id:"5D", name:"Time (5 min max)", max:3, levels:{
        3:"4 to 5 minutes, well paced with nothing rushed or dragged out.",
        2:"Slightly under or over (3 to 4 or 5 to 6 minutes); pacing is uneven.",
        1:"Under 3 minutes or over 6 minutes; rushed or padded.",
        0:"No presentation given." }}
    ]}
  ]
},

/* ---------- Final presentation, 72 pts ---------- */
final: {
  key: "final",
  title: "Final Presentation",
  timeMax: 8,
  sections: [
    { name: "Introduction", items: [
      { id:"1A", name:"Background and sources", max:4, levels:{
        4:"Clear background a classmate can follow; two credible Google Scholar sources, each with a summary and a 'What this means' for the experiment.",
        3:"Adequate background; two sources with summaries, but 'What this means' is thin or missing for one.",
        2:"Background is vague or incomplete, or only one source.",
        1:"Background and/or sources missing." }},
      { id:"1B", name:"Research question", max:4, levels:{
        4:"Clear, specific, and testable.",
        3:"Clear but slightly broad.",
        2:"Present but unclear.",
        1:"Missing or not a real question." }},
      { id:"1C", name:"Hypothesis with reasoning", max:4, levels:{
        4:"If, then, because prediction with strong reasoning supported by a source.",
        3:"Reasonable prediction; the reasoning or source is thin.",
        2:"Prediction is weak or poorly explained.",
        1:"Missing or unrelated to the experiment." }}
    ]},
    { name: "Recap, data, and graphs", items: [
      { id:"2A", name:"Recap of the experiment", max:4, levels:{
        4:"One clear recap slide (question, IV, DV, conditions, number of trials, hypothesis) placed right before the results so the audience can follow the data.",
        3:"Recap slide is present with one small piece missing.",
        2:"Recap is incomplete or hard to follow.",
        1:"No recap slide." }},
      { id:"2B", name:"Data table and graph together", max:4, levels:{
        4:"Complete table (all 10 data points, units) and a graph that accurately matches it, shown together on the same slide.",
        3:"Table and graph are both present with minor issues, or they are on separate slides.",
        2:"Table or graph is partly complete, messy, or confusing.",
        1:"Missing, unusable, or the wrong type of graph." }},
      { id:"2C", name:"Labels, units, and clarity", max:4, levels:{
        4:"Clear title, labeled axes with units, easy to read.",
        3:"Mostly clear; minor errors.",
        2:"Some labels or units missing.",
        1:"Poor or missing labels." }}
    ]},
    { name: "Data analysis", items: [
      { id:"3A", name:"Compare the conditions", max:4, levels:{
        4:"Uses numbers (averages, differences, percent change) to clearly compare the conditions.",
        3:"Compares the conditions with some numbers.",
        2:"Limited or vague comparison.",
        1:"Little or no comparison." }},
      { id:"3B", name:"P-value analysis", max:4, levels:{
        4:"States the p-value and explains in their own words whether the difference is statistically significant and what that means.",
        3:"States the p-value with a mostly correct explanation.",
        2:"Mentions the p-value but the explanation is vague or partly incorrect.",
        1:"No p-value or no explanation." }},
      { id:"3C", name:"Explain why it happened", max:4, levels:{
        4:"Thoughtful scientific explanation using science vocabulary.",
        3:"Reasonable explanation.",
        2:"Vague or partly incorrect.",
        1:"Little or no explanation." }}
    ]},
    { name: "Conclusion, errors, and future", items: [
      { id:"4A", name:"Conclusion about the hypothesis", max:4, levels:{
        4:"Clearly states whether the hypothesis was supported, backed by evidence and the p-value.",
        3:"States whether it was supported with brief evidence.",
        2:"Vague or weak.",
        1:"Missing or incorrect." }},
      { id:"4B", name:"Possible errors", max:4, levels:{
        4:"Several specific, realistic errors in the design, equipment, measuring, or uncontrolled variables. 'Human error' does not count.",
        3:"At least one specific, realistic error that is not 'human error'.",
        2:"Vague, unrealistic, or mostly 'human error'.",
        1:"Little or none, or only 'human error' or 'we messed up'." }},
      { id:"4C", name:"How they would fix the errors", max:4, levels:{
        4:"Specific, practical changes to the experiment tied to each error.",
        3:"At least one reasonable fix.",
        2:"Vague ('be more careful').",
        1:"No meaningful fixes." }},
      { id:"4D", name:"Future expansion", max:4, levels:{
        4:"Creative and realistic bigger version of the study with a clear purpose.",
        3:"Reasonable expansion idea.",
        2:"Vague or unrealistic.",
        1:"Missing." }}
    ]},
    { name: "References", items: [
      { id:"5A", name:"APA references", max:4, levels:{
        4:"Two credible sources; citations on the slides and on the References slide are correct and consistent.",
        3:"Two sources with minor APA errors or small inconsistencies.",
        2:"Fewer than two sources.",
        1:"No References slide or sources." }}
    ]},
    { name: "Public speaking and slide design", items: [
      { id:"6A", name:"Clarity and volume", max:2, levels:{ 2:"Clear and easy to hear.", 1:"Generally clear, but often hard to hear.", 0:"Unable to hear." }},
      { id:"6B", name:"Eye contact", max:2, levels:{ 2:"Regular eye contact.", 1:"Some eye contact.", 0:"Little or none." }},
      { id:"6C", name:"Use of slides and notes", max:2, levels:{ 2:"Minimal reading.", 1:"Some reading.", 0:"Mostly reads." }},
      { id:"6D", name:"Handling questions", max:2, levels:{ 2:"Confident and accurate.", 1:"Partial or needed prompting.", 0:"Struggles." }},
      { id:"6E", name:"Slide readability and titles", max:2, levels:{ 2:"Large enough to read from the back; every slide title is capitalized.", 1:"Mostly readable, or a few titles are not capitalized.", 0:"Often too small, or titles are not capitalized." }},
      { id:"6F", name:"Images from the experiment", max:4, levels:{
        4:"Every image comes from your experiment (your own photos, graphs, or labeled diagrams). No GIFs or random pictures. Any AI-made image is labeled.",
        3:"Nearly all images are from the experiment; one is generic or an AI image is not labeled.",
        2:"Several images are generic, from a search for your hypothesis, or unrelated.",
        1:"Mostly GIFs, memes, or unrelated images." }},
      { id:"6G", name:"Equal participation", max:2, levels:{ 2:"Both partners speak about equally.", 1:"Time is noticeably uneven.", 0:"One partner dominates or does not speak." }},
      { id:"6I", name:"Flow and storytelling", max:4, levels:{
        4:"Tells a story: a reason to care, each slide leads into the next with a connecting sentence, and it ends with what it means. Not just the checklist in order.",
        3:"Mostly connected; a few slides feel like separate pieces.",
        2:"Follows the rubric order with little connection between slides.",
        1:"Disorganized or hard to follow." }},
      { id:"6H", name:"Time (8 min max)", max:2, levels:{ 2:"5 to 8 minutes and well paced.", 1:"3 to 5 minutes, or 8 to 9 minutes.", 0:"Under 3 minutes or over 9 minutes." }}
    ]}
  ]
}
};

/* helpers */
window.rubricTotal = function(r){ let t=0; r.sections.forEach(s=>s.items.forEach(i=>t+=i.max)); return t; };

/* which criterion is the time score, and how minutes map to a suggested score */
RUBRICS.mm.timeId = "5D";
RUBRICS.mm.timeScore = function(m){ return (m>=4&&m<=5)?3 : ((m>=3&&m<4)||(m>5&&m<=6))?2 : m>=0.5?1 : 0; };
RUBRICS.final.timeId = "6H";
RUBRICS.final.timeScore = function(m){ return (m>=5&&m<=8)?2 : ((m>=3&&m<5)||(m>8&&m<=9))?1 : 0; };
