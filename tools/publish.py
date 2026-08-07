"""One source of truth for which posts are published.

Before this, "published" lived in three places at once: the `noindex` meta tag
in a post, its three listings in posts/index.html, and whether the directory
existed. Changing one and forgetting another was easy, and silent.

Now posts.json holds the state and this script makes the site agree with it.

    python3 tools/publish.py list                 show every post and status
    python3 tools/publish.py status <slug>        show one post
    python3 tools/publish.py draft <slug>         unpublish
    python3 tools/publish.py publish <slug>       publish
    python3 tools/publish.py build                rewrite the site from posts.json
    python3 tools/publish.py check                exit 1 if the site disagrees

`build` does exactly two things:

  1. Rewrites the two lists in posts/index.html - chronological and by
     category - from the published entries only.
  2. Adds or removes `<meta name="robots" content="noindex, nofollow">` in
     each post, so a draft is not indexed even if somebody has the URL.

It never touches anything else in a post. Draft posts stay on disk and stay
reachable by direct link, which is how the previous draft on this site
worked and is what makes preview links possible.

`check` is the guard: run it before a commit and it fails if posts.json and
the HTML have drifted apart.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "posts.json"
ARCHIVE = ROOT / "posts" / "index.html"
ROBOTS = '    <meta name="robots" content="noindex, nofollow">\n'
ANCHOR = '    <meta name="theme-color" content="#fef9ee">\n'

CHRONO_START = '<section class="archive-view archive-view-chrono" id="chronological"'
LIST_OPEN = '            <ul class="archive-list">\n'
LIST_CLOSE = '            </ul>'


def load():
    return json.loads(MANIFEST.read_text())


def save(data):
    MANIFEST.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")


def published(data):
    """Published posts, newest first. Order in the file is authoritative."""
    return [p for p in data["posts"] if p["status"] == "published"]


def entry(post, skip=None):
    """One <li>. `skip` omits a category, used inside that category's section."""
    cats = [c for c in post["categories"] if c != skip]
    tail = "".join(
        f' &middot; <a href="#{c}">{data_label(c)}</a>' for c in cats
    )
    return (
        "                <li>\n"
        f'                    <a href="/posts/{post["slug"]}/">{post["title"]}</a><br>\n'
        f'                    {post["date"]}{tail}\n'
        "                </li>\n"
    )


LABELS = {}


def data_label(cat):
    return LABELS.get(cat, cat)


def build_chronological(data):
    return "".join(entry(p) for p in published(data))


def build_categories(data, html):
    """Rewrite each category <ul> in place, leaving the headings untouched."""
    out = html
    for cat in LABELS:
        head = f'<h3 class="archive-category-heading" id="{cat}">'
        i = out.find(head)
        if i == -1:
            continue
        j = out.find(LIST_OPEN, i)
        k = out.find(LIST_CLOSE, j)
        if j == -1 or k == -1:
            sys.exit(f"could not find the list for category {cat}")
        items = "".join(
            entry(p, skip=cat) for p in published(data) if cat in p["categories"]
        )
        out = out[: j + len(LIST_OPEN)] + items + out[k:]
    return out


def build(write=True):
    data = load()
    LABELS.clear()
    LABELS.update(data["categories"])

    html = ARCHIVE.read_text()

    # chronological list
    i = html.find(CHRONO_START)
    j = html.find(LIST_OPEN, i)
    k = html.find(LIST_CLOSE, j)
    if -1 in (i, j, k):
        sys.exit("could not find the chronological list in posts/index.html")
    html = html[: j + len(LIST_OPEN)] + build_chronological(data) + html[k:]

    html = build_categories(data, html)

    changed = []
    if html != ARCHIVE.read_text():
        changed.append("posts/index.html")
        if write:
            ARCHIVE.write_text(html)

    # robots tag per post
    for p in data["posts"]:
        f = ROOT / "posts" / p["slug"] / "index.html"
        if not f.exists():
            print(f"  warning: {p['slug']} is in posts.json but not on disk")
            continue
        s = f.read_text()
        want_draft = p["status"] != "published"
        has = ROBOTS in s
        if want_draft and not has:
            s = s.replace(ANCHOR, ANCHOR + ROBOTS, 1)
        elif not want_draft and has:
            s = s.replace(ROBOTS, "", 1)
        else:
            continue
        changed.append(f"posts/{p['slug']}/index.html")
        if write:
            f.write_text(s)
    return changed


def main():
    if not MANIFEST.exists():
        sys.exit(f"no manifest at {MANIFEST}")
    cmd = sys.argv[1] if len(sys.argv) > 1 else "list"
    slug = sys.argv[2] if len(sys.argv) > 2 else None
    data = load()
    index = {p["slug"]: p for p in data["posts"]}

    if cmd == "list":
        drafts = [p for p in data["posts"] if p["status"] != "published"]
        print(f"{len(data['posts'])} posts, {len(drafts)} draft\n")
        for p in data["posts"]:
            mark = "DRAFT " if p["status"] != "published" else "      "
            print(f"  {mark}{p['date']:<20} {p['title'][:52]}")
            print(f"        /posts/{p['slug']}/")
        return

    if cmd == "status":
        p = index.get(slug) or sys.exit(f"unknown slug: {slug}")
        print(json.dumps(p, indent=2))
        return

    if cmd in ("draft", "publish"):
        p = index.get(slug) or sys.exit(f"unknown slug: {slug}")
        p["status"] = "published" if cmd == "publish" else "draft"
        save(data)
        for f in build():
            print(f"  updated {f}")
        print(f"{slug} is now {p['status']}")
        return

    if cmd == "build":
        changed = build()
        print("\n".join(f"  updated {f}" for f in changed) or "  already up to date")
        return

    if cmd == "check":
        changed = build(write=False)
        if changed:
            sys.exit(
                "STALE: the site does not match posts.json:\n"
                + "\n".join(f"  {f}" for f in changed)
                + "\nRun: python3 tools/publish.py build"
            )
        print("site matches posts.json")
        return

    sys.exit(__doc__)


if __name__ == "__main__":
    main()
