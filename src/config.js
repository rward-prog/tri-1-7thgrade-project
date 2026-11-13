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
 {d:"2026-11-04",t:"due",title:"Methods Worksheet due",pts:22,body:"Both experiment ideas, your pick, materials, step-by-step procedure, hypothesis, null hypothesis, and why you chose it. Your teacher approves your plan today.",files:["methods"]},
 {d:"2026-11-06",t:"checkin",title:"Partner check-in #1 and data collection, day 1",body:"Fill out the check-in form. Start collecting data as soon as your plan is approved. Record every result in your data table right away. Start the Materials and Methods slides from the template.",files:["gslides","mmdeck"],form:true,ci:true},
 {d:"2026-11-09",t:"class",title:"Data collection, day 2",body:"Keep running your trials. Your finished data table (all 10 data points) is due 11/16. Keep building your Materials and Methods slides."},
 {d:"2026-11-10",t:"checkin",title:"Partner check-in #2 and slides ready",body:"Your Materials and Methods slides must be ready to present tomorrow, including your data table layout. Fill out the check-in form.",link:"self-check.html?r=mm",linkText:"Grade your slides first",link2:"sheets.html",linkText2:"Tables and graphs help",form:true,ci:true},
 {d:"2026-11-11",t:"present",title:"Materials and Methods presentations",body:"Up to 5 minutes: your experiment, hypotheses, methods, and data table layout. Both partners speak. Fill out a classmate feedback sheet for each team. After presentations, start your Introduction Packet.",link:"rubrics.html",linkText:"See the rubric",files:["researchpacket","introguide","intro","fbmm"]},
 {d:"2026-11-13",t:"due",title:"Introduction Packet due, plus check-in #3",pts:23,body:"Two APA-cited sources from Google Scholar, plus one source that supports your hypothesis. Fill out the check-in form. Start your graphs, run your data through the AI prompt, and start your final slides from the template.",files:["researchpacket","introguide","intro","finaldeck","sampledeck"],link:"scholar.html",linkText:"Google Scholar and APA help",form:true,ci:true},
 {d:"2026-11-16",t:"due",title:"Complete data table due (all 10 data points)",body:"Your finished data table with all 10 data points. Capitalized headers, units, alternating colors, outlined cells, and Before, After, and % Change columns if your measurement has a starting number.",link:"sheets.html",linkText:"Tables and graphs help",link2:"percent.html",linkText2:"Percent change help"},
 {d:"2026-11-16",t:"due",title:"Graphs, p-value, and Conclusion Packet due",pts:18,body:"Finished graph(s) with units and Capitalized titles, percent change for each trial, and your p-value analysis. Turn in your Conclusion Packet. It plans your conclusion slides and helps you look back at your whole project.",files:["conclusion","introguide"],link:"sheets.html",linkText:"Tables and graphs help",link2:"stats.html",linkText2:"P-value help"},
 {d:"2026-11-16",t:"due",title:"Final slides due and practice day",body:"Submit your finished presentation by the end of the day. Practice out loud with your partner. Both of you must speak. Your presentation is 8 minutes or less.",files:["finaldeck","sampledeck"],link:"self-check.html?r=final",linkText:"Grade yourself first"},
 {d:"2026-11-17",t:"present",title:"Final presentations, day 1, plus check-in #4",body:"Present your experiment from start to finish in 8 minutes or less. Be ready for questions from the audience. Fill out a classmate feedback sheet for each team, and the last check-in form today.",files:["fbfinal"],form:true,ci:true},
 {d:"2026-11-18",t:"present",title:"Final presentations, day 2",body:"Any remaining groups present."},
 {d:"2026-11-23",t:"present",title:"Final presentations, overflow day",body:"Only if a group has not presented yet."}
];

const FILES = [
 {id:"duedates",name:"Due dates list (PDF)",desc:"One page with every due date, what is due, and the points. Print it or save it.",href:"files/Exercise_Project_Due_Dates.pdf"},
 {id:"calendar",name:"November calendar (PDF)",desc:"Every due date on a November calendar, with Thanksgiving break and the no-school Friday marked.",href:"files/Exercise_Project_November_Calendar.pdf"},
 {id:"methods",name:"Methods Worksheet",desc:"Brainstorm two ideas, pick one, list materials and steps, and write your hypothesis. 22 points.",href:"files/Exercise_Project_Methods_Worksheet.docx"},
 {id:"intro",name:"Introduction Worksheet",desc:"Background, who benefits, four key facts, two Google Scholar sources in APA, and your hypothesis. 23 points.",href:"files/Exercise_Project_Introduction_Worksheet.docx"},
 {id:"conclusion",name:"Conclusion Packet",desc:"Due Monday 11/16. Plan your conclusion slides (your numbers and p-value, why it happened, claim, evidence, reasoning, errors and fixes, future expansion), get ready to present, and look back at your whole project and the whole trimester. 18 points.",href:"files/Conclusion_Packet.docx"},
 {id:"gslides",name:"Materials and Methods slides (Google Slides)",desc:"Mr. Ward's Google Slides template for 11/11. Click to make your own copy in Google Slides. Use this one or the PowerPoint version, not both.",href:"https://docs.google.com/presentation/d/1IqjzDvj4JpsF45qyg6Ef0q63gLGuG2i6fnqst_2E2pw/copy",copy:true},
 {id:"mmdeck",name:"Materials and Methods slides template (PowerPoint)",desc:"For 11/11. 14 slides built from the rubric, with a Read This First slide, a null hypothesis slide, a data table layout, hint boxes, and a spot for your photos. Delete the hints before you present.",href:"files/Materials_Methods_Slides_Template.pptx"},
 {id:"finaldeck",name:"Final presentation slides template (PowerPoint)",desc:"For 11/17 and 11/18. 16 slides built from the rubric, with a recap slide, a table and graph slide, and a Read This First slide. Start from your Materials and Methods slides.",href:"files/Final_Presentation_Slides_Template.pptx"},
 {id:"finaldeckpdf",name:"Final presentation slides template (PDF to look at)",desc:"See every slide of the template and its hints without opening PowerPoint. To edit it, use the PowerPoint file and open it in Google Slides (see the help box at the top of this page).",href:"files/Final_Presentation_Slides_Template.pdf"},
 {id:"researchpacket",name:"Research and Introduction Packet",desc:"Step by step help to search Google Scholar, check sources, and build your Introduction. Includes the peer-review question, a search log, and fill-in skeletons.",href:"files/Research_and_Introduction_Packet.docx"},
 {id:"introguide",name:"Introduction and Conclusion guide (PDF)",desc:"Slides to read on any device, no PowerPoint needed. How to find a source in Google Scholar, cite it in APA, make clean tables and graphs, and plan your conclusion slides.",href:"files/Intro_and_Conclusion_Guide.pdf"},
 {id:"sampledeck",name:"Sample student presentation (PDF)",desc:"A full example presentation (Sam and Riley) with real citations, a table, a graph, and finished conclusion slides. The data are invented. Use it to see what a strong presentation looks like.",href:"files/Sample_Student_Presentation.pdf"},
 {id:"fbmm",name:"Classmate feedback sheet: Materials and Methods",desc:"Print this. Fill out one for each team that presents on 11/11, then give them to your teacher. Be kind, specific, and helpful.",href:"files/Materials_Methods_Feedback_Sheet.docx"},
 {id:"fbfinal",name:"Classmate feedback sheet: Final presentation",desc:"Print this. Fill out one for each team that presents on 11/17 and 11/18, then give them to your teacher.",href:"files/Final_Presentation_Feedback_Sheet.docx"}
];

