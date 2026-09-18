---
title: "Pilot purgatory"
date: 2026-07-18
featured: true
summary: "Enterprises don't struggle to start AI pilots. They struggle to end them. The pilot that neither fails nor scales is the default outcome, and it's a structural problem, not a technical one."
categories: ["Technology"]
---

The failure mode in enterprise AI isn't the pilot that doesn't work. It's the
pilot that works, produces a good deck, and then sits there.

I've watched this happen often enough to stop treating it as bad luck. A pilot
is designed to answer "can this work?" — and once it has, the project has
achieved its stated goal. Nobody set the next goal, so nothing happens. The
pilot becomes permanent. Eighteen months later someone commissions a second
pilot of the same thing, because the first one's results are now stale.

## Why it's structural

A pilot is cheap, low-risk and owned by whoever is curious. Production is
expensive, carries real risk, and needs an owner with budget and a reason to
spend it. Those are different people. The handoff between them is the actual
project, and almost nobody plans it.

The tell is in how the pilot gets scoped. If the success criterion is a model
metric — accuracy, MAPE, percentage improvement over baseline — there is no
person on the other side waiting for the result. Real production projects get
scoped against an operational number someone is already accountable for.

## A better question to open with

Not "what should we pilot?" but "if this works, whose budget does it come out
of next year, and what number on their scorecard moves?"

If nobody can answer that, you're about to build something that will work
perfectly and go nowhere. That's worth knowing in week one rather than month
nine.
