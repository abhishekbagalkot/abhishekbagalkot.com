---
title: "What a camera can and cannot see"
date: 2026-08-24
draft: false
---

A useful discipline before any computer vision project: write down what the
camera physically cannot observe, and check whether the thing you actually care
about is on that list.

It surprisingly often is.

A client wanted to detect unsafe lifting on a shop floor. The model could see
posture. It could not see the weight of the object, which is most of what makes
a lift unsafe. We could have shipped something with good accuracy against the
labels and no relationship to the outcome.

## Three questions worth asking early

1. **Is the signal visible at all?** Temperature, weight, torque and intent are
   not. Sometimes a proxy is good enough; you should know you're using one.
2. **Is it visible from where the camera is?** Occlusion kills more deployments
   than model quality does.
3. **Would a person watching this footage get it right?** If a trained human
   can't, a model won't, and your labels will be noise.

The third is the cheap one. Before commissioning anything, have someone sit with
an hour of recorded footage and try to do the task by eye. It costs an afternoon
and it has killed more bad projects than any amount of model evaluation.

## The part nobody budgets for

Assume the model works. Now: who sees the alert, how fast, and what are they
empowered to do about it? An unsafe-lift detector that emails a weekly summary
to a safety manager is a reporting tool, not a safety intervention. That's a
legitimate thing to build — but it should be a decision, not something you
discover after go-live.

The camera is the easy part. It was always going to be the easy part.
