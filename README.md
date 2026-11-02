# Exercise Science Project site (7th grade)

Student-facing project site: schedule with countdowns, experiment builder, Google Scholar and APA help,
rubrics, self-check, downloads, and the partner check-in form link.

## How it is organized
- The `.html` files in this folder are the finished pages that Vercel serves. Each one is self-contained.
- `files/` has the packets and slide templates students download.
- `src/` has the editable source: `config.js` (dates, form link, schedule, downloads), `rubric-data.js` (rubrics),
  `site.css` (design), and the pages.
- `build.py` rebuilds the finished pages from `src/`.

## To change something
1. Edit the file in `src/` (for example `src/config.js` to change a due date).
2. Run `python3 build.py` (this rewrites the finished pages in this folder).
3. Commit and push. Vercel redeploys in about 30 seconds.

Do not edit the finished pages in the main folder directly. The next build overwrites them.

## Teacher grading tools
The grader pages are not in this repo on purpose (they are for the teacher, not students). Keep them on your own
computer. They save scores in your browser only. If the rubric wording changes in `src/rubric-data.js`, the grader
needs to be rebuilt too, so ask Claude to regenerate it.
