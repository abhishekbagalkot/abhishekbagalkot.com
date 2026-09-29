---
title: "The hidden cost of territory-based transport planning"
date: 2026-09-29
categories: ["Technology"]
---
Most dairy routes, FMCG distribution, pharma deliveries, and B2B supplies are planned the same way: the service area is divided into territories, and one vehicle serves each. It's common because it's simple to run, and drivers work familiar areas and customers.

## The fundamental problems

### 1. It doesn't optimise for the KPIs.

Territories are drawn around geography, not around cost per drop, on-time delivery, or fleet utilisation. Each vehicle is planned within its own territory, so the fleet is never optimised as a whole.

### 2. Conditions change, territories don't.

Demand, urgency, and road conditions shift every day, but the boundaries stay fixed. Work can't move to the vehicle best placed to do it, because the map says it belongs elsewhere.

## How territory-based planning works

{{< figure src="img/territory-based-transport-planning.svg" alt="Map of three fixed territories served from one hub. Vehicle A runs at 83% load over 29.4 km with urgent stop A5 delivered last; Vehicle B at 79% detours 11.2 km around a road blockage; Vehicle C runs at 42% load." >}}

The planner assigns each delivery to the vehicle that owns its territory. The driver then sequences the stops, usually by habit. The map shows three consequences:

- **Urgent orders wait.** A5 is urgent but sits at the end of Vehicle A's route, so it's delivered last. Vehicle C, which is closer and has room, never gets it.
- **Detours absorb the blockage.** When Vehicle B's usual road is blocked, it drives 11.2 km around it. A 6.2 km alternative existed.
- **Capacity sits idle.** Vehicle C runs at 42% while A and B are near full.

None of these show up as planning errors. They show up as overtime, fuel bills, and missed deliveries.

## How algorithmic transport planning works

{{< figure src="img/algorithmic-transport-planning.svg" alt="Map of the same 12 stops and fleet planned algorithmically. Urgent stop A5 moves to Vehicle C as its first stop, Vehicle B takes the 6.2 km reroute, loads even out at 68–73%, and total distance falls from 99 km to 78.4 km." >}}

With the same stops and the same fleet, the algorithm drops the territories. It considers all deliveries, vehicle capacities, travel distances, and priorities together, then recommends the routes. The result:

- **The urgent order goes first.** A5 moves to Vehicle C and becomes its first stop.
- **Better routes, even unfamiliar ones.** Vehicle B takes the shorter reroute around the blockage.
- **Balanced loads.** Utilisation evens out at 68–73% across all three vehicles.
- **Less driving.** Total distance falls from 99 km to 78.4 km, about 21% less. The longest working day drops from 7.1 to 5.4 hours.

Because the plan is recalculated each time, it adapts to what changes: new orders, blockages, and shifting priorities.
