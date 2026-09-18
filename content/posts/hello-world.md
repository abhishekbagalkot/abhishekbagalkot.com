---
title: "Hello, world"
date: 2026-09-18
draft: false
summary: "The first post — a check that the whole pipeline works: Markdown in, Hugo build, GitHub Actions deploy, live site out."
---

This is the sample page — proof that the pipeline works end to end: Hugo builds
the site from Markdown, GitHub Actions runs the build on every push, and GitHub
Pages serves the result.

## What's set up

- **Hugo** builds the static site from the Markdown in `content/`.
- **Pandoc** is available for converting Word, PDF and other formats into Markdown to drop into `content/posts/`.
- **GitHub Actions** rebuilds and deploys on every push to `main`.

## Adding a post

```bash
hugo new content posts/my-next-post.md
```

Write, then push. That's the whole loop.
