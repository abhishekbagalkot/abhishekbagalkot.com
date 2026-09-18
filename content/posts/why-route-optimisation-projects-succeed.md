---
title: "Why route optimisation projects succeed"
date: 2026-09-12
featured: true
categories: ["Technology"]
summary: "The ones that work don't have better solvers. They treat the first quarter as constraint discovery, and they scope against a number someone is already accountable for."
aliases:
  - /posts/why-route-optimisation-stalls/
---

The route optimisation projects that work don't have better solvers than the
ones that don't. The solvers are broadly the same. What separates them shows up
in the first three weeks after go-live, in how the team reads the dispatchers.

Every project has the same early moment. The pilot came back with routes eight
percent cheaper than what actually ran, the number was real, everyone agreed it
was worth doing — and then the plan meets the depot, and the dispatchers start
overriding it.

The projects that fail read the overrides as resistance and train harder. The
projects that succeed read them as information.

## The override is the data

The dispatcher who ignores your sequence usually knows something the model
doesn't.

- The dock at a particular customer is unusable before ten, whatever the
  contract says.
- One driver can do the old city route in half the time anyone else can, and
  nobody wrote that down.
- The third drop needs a two-man lift, and the model thinks a vehicle is a
  vehicle.

None of this is in the data. All of it is in someone's head. When the plan
violates it, the override isn't sabotage — it's a correction.

{{< figure src="img/override-loop.svg"
    alt="The plan leads to the override, which reveals a constraint nobody wrote down, which feeds back into the plan."
    caption="The loop that successful projects instrument. Every override points back at something the plan was never told." >}}

So the teams that get somewhere instrument the overrides before trying to
eliminate them. Every manual change to a generated route is a labelled example
of a missing constraint, and a month of those is a better specification than any
requirements workshop will produce. The override rate falls on its own once the
model stops being wrong — which is a much easier thing to achieve than
persuading people to follow a plan they can see is wrong.

> The useful question after a pilot isn't "how much did we save?" It's "which
> constraints did we discover we hadn't written down?"

## Scope against a number someone owns

The second thing the successful ones do is earlier, and quieter.

If a pilot's success criterion is a model metric — accuracy, percentage
improvement over baseline — there is usually nobody on the other side waiting
for the result. The projects that survive contact with a budget are scoped
against an operational number someone is already accountable for, and they can
name the person.

That has a practical test you can run in week one. If this works, whose budget
does it come out of next year, and what on their scorecard moves? A project that
can answer that will find an owner when the pilot ends. A project that can't
will produce a good deck and stop.

## Don't announce the eight percent

The last difference is patience with the headline. Announcing the pilot's saving
at the first steering committee converts a discovery phase into a promise, and
the rest of the year gets spent explaining why the promise hasn't materialised
in the P&L — where fuel moved, volume mix changed, and two customers churned.

The projects that work treat the first quarter as constraint discovery, tell the
steering committee exactly that, and only start counting savings once the
overrides have stopped telling them something new. They report later and they
report numbers that survive a finance review.

None of this is about the optimiser. The optimiser was never the hard part.
