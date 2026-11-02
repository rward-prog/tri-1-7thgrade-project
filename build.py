#!/usr/bin/env python3
"""Build self-contained pages.
Edit the files in src/ (pages, site.css, config.js, rubric-data.js ...), then run:
    python3 build.py
Each page in the site folder gets its CSS and scripts inlined, so it looks and works
even if it is opened alone (a preview, an email attachment, a school file share)."""
import re, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "src")

def read(p):
    with open(p, encoding="utf-8") as f: return f.read()

def inline(html, base_dir):
    def css(m):
        href = m.group(1)
        if href.startswith(("http:", "https:", "//")): return m.group(0)
        return "<style>\n" + read(os.path.normpath(os.path.join(base_dir, href))) + "\n</style>"
    def js(m):
        src = m.group(1)
        if src.startswith(("http:", "https:", "//")): return m.group(0)
        return "<script>\n" + read(os.path.normpath(os.path.join(base_dir, src))) + "\n</script>"
    html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
    html = re.sub(r'<script src="([^"]+)"></script>', js, html)
    return html

count = 0
for root, _, files in os.walk(SRC):
    for name in files:
        if not name.endswith(".html"): continue
        src_path = os.path.join(root, name)
        rel = os.path.relpath(src_path, SRC)
        out_path = os.path.join(HERE, rel)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(inline(read(src_path), root))
        count += 1
print("Built", count, "pages")
