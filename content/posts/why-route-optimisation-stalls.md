---
title: "Why route optimisation projects stall"
date: 2026-09-12
draft: false
summary: "The pilot saves eight percent. Three weeks after go-live the dispatchers are overriding most of the plan. That override isn't resistance — it's a constraint nobody wrote down."
featured: true
---

Almost every stalled route optimisation project I've seen failed at the same
place, and it wasn't the solver.

The pilot goes well. Someone runs last month's orders through the engine, and it
comes back with routes eight percent cheaper than what actually happened. The
number is real. The routes are feasible. Everyone agrees this is worth doing.

Then it goes live, and within three weeks the dispatchers are overriding most of
the plan.

## The override is information, not resistance

The reflex is to read this as change management — people are attached to their
old way of working, so train them harder. Occasionally true. Usually it's
something more specific: the dispatcher knows something the model doesn't.

- The dock at a particular customer is unusable before ten, whatever the
  contract says.
- One driver can do the old city route in half the time anyone else can, and
  nobody wrote that down.
- The third drop needs a two-man lift, and the model thinks a vehicle is a
  vehicle.

None of this is in the data. All of it is in someone's head. When the plan
violates it, the override isn't sabotage — it's a correction.

> The useful question after a pilot isn't "how much did we save?" It's "which
> constraints did we discover we hadn't written down?"

## What to do about it

Instrument the overrides before you try to eliminate them. Every manual change
to a generated route is a labelled example of a missing constraint. A month of
those is a better specification document than any workshop will produce.

The projects that work treat the first quarter as constraint discovery and only
then start counting savings. The projects that stall announce the eight percent
in the steering committee on day one, and spend the rest of the year explaining
why it hasn't shown up.
