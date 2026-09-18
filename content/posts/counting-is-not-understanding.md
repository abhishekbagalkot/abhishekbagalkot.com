---
title: "Counting things is not understanding them"
date: 2026-06-14
summary: "A vision system that counts correctly and explains nothing is a more expensive clipboard. The interesting output isn't the count — it's the variance nobody could see before."
categories: ["Tech"]
---

The most common computer vision deployment I see is a counter. Units through a
line, vehicles through a gate, people in a zone. It works, the numbers are
accurate, and six months later nobody looks at the dashboard.

The reason is that the count was never the missing information. Somebody was
already counting, roughly, on a clipboard, and roughly was good enough for the
decisions being made.

## Where the value actually sits

What a camera gives you that a clipboard doesn't is *continuity*. Not the
total, but the shape of the total over time — the ten minutes each afternoon
when throughput halves, the difference between shifts that nobody had
quantified, the fact that line three degrades gradually after a changeover
rather than all at once.

None of that is visible in a daily total. All of it is visible in a
minute-resolution series, and all of it points at something actionable.

So the design question isn't "what should we count?" It's "what variance are we
blind to, and would seeing it change what anyone does?"

If the honest answer is that the process is stable and well understood, a
camera will confirm it accurately and change nothing. That's a real outcome and
worth predicting before you spend the money.
