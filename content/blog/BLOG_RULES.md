# Blog Writing Rules & Conventions

These rules govern how posts are written and structured for this blog.
Posts are written using a mix of AI models as research and drafting assistants,
with the author as final editor and voice.

---

## File Format

- All posts are written in **MDX** (Markdown + JSX)
- Stored at: `/content/blog/posts/<slug>.mdx`
- Filename = post slug (kebab-case)

---

## Frontmatter

Every post must include:

```mdx
---
title: "Post Title Here"
date: "YYYY-MM-DD"
description: "One or two sentence summary shown in previews."
tags: ["tag1", "tag2"]
readTime: "X min read"
---
```

---

## Voice & Tone

- First person, direct
- Short paragraphs (2–4 sentences max as a rule)
- Sentence fragments are allowed for rhythm — use sparingly
- No corporate language ("leverage", "synergy", "utilize")
- No hedging — say what you mean
- Avoid bullet lists in the post body unless genuinely necessary (prefer prose)
- One strong idea per section

---

## Structure

- **No lengthy introductions.** Cold opens are preferred — drop into the idea immediately
- Sections separated by white space, not heading titles (unless the post is long-form reference content)
- End with something memorable — a callback, a challenge, or a clean statement

---

## Length

- Standard posts: 800–1,400 words (5–7 min read)
- Deep dives: up to 2,500 words
- Quick takes: 300–500 words

---

## Research & AI Assistance

Posts on this blog are researched and drafted with the help of multiple AI models
(including Claude, GPT-4, and Gemini). The author uses these models as a thinking
partner and first-draft accelerator — all opinions, edits, and the final voice are the author's own.

This is not disclosed per-post but is part of the blog's founding philosophy:
that AI amplifies depth, not replaces it.

---

## Images

- Featured image: optional, add as `image: "/images/posts/<slug>.jpg"` in frontmatter
- No stock photos — use illustrations, screenshots, or leave it text-only

---

## Publishing Checklist

- [ ] Frontmatter complete
- [ ] Spell-checked
- [ ] Read aloud at least once
- [ ] Opening line strong enough to stand alone
- [ ] Closing line lands
- [ ] Tags accurate
- [ ] Slug matches filename
