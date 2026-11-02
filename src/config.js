/* TEACHER SETTINGS live here: dates, form link, schedule items, downloads. Edit this file to change the whole site. */
/* =========================================================
   TEACHER SETTINGS: edit this block, nothing else needs to change
   ========================================================= */
const FORM_URL = "https://forms.gle/RnyN9xcUZ1xG9yEDA";   // same form every time; students mark the day
const CLASS_WEEKDAYS = [1,2,3,5];    // Mon, Tue, Wed, Fri (0 = Sunday)
const NO_CLASS = [                   // days off, format YYYY-MM-DD
  "2026-11-20",                      // no school
];
const MM_DATE      = "2026-11-11";   // Materials and Methods presentation day (first countdown)
const PRESENT_DATE = "2026-11-17";   // first final-presentation day (countdown target)
const END_DATE     = "2026-11-23";   // last overflow day

// type: class | due | checkin | present      ci:true = partner check-in form due that day
const ITEMS = [
 {d:"2026-11-03",t:"class",title:"Kickoff and brainstorm day",body:"Learn the project, choose your partner, and start brainstorming what to test. Name the IV, DV, and controls for two ideas.",link:"brainstorm.html",linkText:"Open the experiment builder"},
 {d:"2026-11-04",t:"due",title:"Methods Worksheet due",pts:22,body:"Both experiment ideas, your pick, materials, step-by-step procedure, hypothesis, and why you chose it. Your teacher approves your plan today.",files:["methods"]},
 {d:"2026-11-06",t:"checkin",title:"Partner check-in #1 and data collection, day 1",body:"Fill out the check-in form. Start collecting data as soon as your plan is approved. Record every result in your data table right away. Start the Materials and Methods slides from the template.",files:["mmdeck"],form:true,ci:true},
 {d:"2026-11-09",t:"class",title:"Data collection, day 2",body:"Keep running your trials. Work toward all 10 data points and keep building your Materials and Methods slides."},
 {d:"2026-11-10",t:"checkin",title:"Data table complete and partner check-in #2",body:"Your data table must have all 10 data points today, and your Materials and Methods slides must be ready to present tomorrow. Fill out the check-in form.",link:"self-check.html?r=mm",linkText:"Grade your slides first",form:true,ci:true},
 {d:"2026-11-11",t:"present",title:"Materials and Methods presentations",body:"Up to 5 minutes: your experiment, methods, and data table. Both partners speak. After presentations, start your Introduction Packet.",link:"rubrics.html",linkText:"See the rubric",files:["intro"]},
 {d:"2026-11-13",t:"due",title:"Introduction Packet due, plus check-in #3",pts:23,body:"Two APA-cited sources from Google Scholar, plus one source that supports your hypothesis. Fill out the check-in form. Start your graphs, run your data through the AI prompt, and start your final slides from the template.",files:["intro","finaldeck"],link:"scholar.html",linkText:"Google Scholar and APA help",form:true,ci:true},
 {d:"2026-11-16",t:"due",title:"Graphs, p-value, and Conclusion Packet due",pts:18,body:"Finished graph(s), p-value analysis, and all five conclusion parts, including errors, improvements, and future expansion.",files:["conclusion"],link:"stats.html",linkText:"Data and p-value help"},
 {d:"2026-11-16",t:"due",title:"Final slides due and practice day",body:"Submit your finished presentation by the end of the day. Practice out loud with your partner. Both of you must speak. Your presentation is 8 minutes or less.",files:["finaldeck"],link:"self-check.html?r=final",linkText:"Grade yourself first"},
 {d:"2026-11-17",t:"present",title:"Final presentations, day 1, plus check-in #4",body:"Present your experiment from start to finish in 8 minutes or less. Be ready for questions from the audience. Fill out the last check-in form today.",form:true,ci:true},
 {d:"2026-11-18",t:"present",title:"Final presentations, day 2",body:"Any remaining groups present."},
 {d:"2026-11-23",t:"present",title:"Final presentations, overflow day",body:"Only if a group has not presented yet."}
];

const FILES = [
 {id:"methods",name:"Methods Worksheet",desc:"Brainstorm two ideas, pick one, list materials and steps, and write your hypothesis. 22 points.",href:"files/Exercise_Project_Methods_Worksheet.docx"},
 {id:"intro",name:"Introduction Worksheet",desc:"Background, who benefits, four key facts, two Google Scholar sources in APA, and your hypothesis. 23 points.",href:"files/Exercise_Project_Introduction_Worksheet.docx"},
 {id:"conclusion",name:"Conclusion Packet",desc:"Purpose, claim, evidence, reasoning, errors, improvements, and future expansion. 18 points.",href:"files/Conclusion_Packet.docx"},
 {id:"mmdeck",name:"Materials and Methods slides template",desc:"For 11/11. Built from the rubric: 14 slides with a Read This First slide, hint boxes, and a spot for your photos. Delete the hints before you present.",href:"files/Materials_Methods_Slides_Template.pptx"},
 {id:"finaldeck",name:"Final presentation slides template",desc:"For 11/17 and 11/18. 16 slides built from the rubric, with a recap slide, a table and graph slide, and a Read This First slide. Start from your Materials and Methods slides.",href:"files/Final_Presentation_Slides_Template.pptx"}
];

