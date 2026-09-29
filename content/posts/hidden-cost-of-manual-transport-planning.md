---
title: "Hidden costs of manual transport planning"
date: 2026-09-29
categories: ["Technology"]
tags: ["logistics", "transport planning", "route optimisation", "operations"]
featured: true
featuredOrder: 1
image: "img/hidden-cost-of-manual-transport-planning.png"
---
Operating a vehicle fleet for delivery or collection of goods to & from various locations is a common industry use case. Every day, the dairy industry delivers fresh milk from millions of cattle farmers to billions of consumers on time. Large FMCGs refill their inventory across millions of retail stores, e-commerce delivers customer orders and municipal bodies evacuate garbage. Companies depend on the efficient functioning of vehicle fleets to deliver high quality, fresh products on time and keep customer promises.

These fleets are purchased or engaged in advance. Drivers assemble at depots at the beginning of a shift. Routes are then assigned to drivers to complete multiple finite sets of tasks, the status of which is often tracked digitally.

We are able to see these vehicle operations every day in our daily lives. But the science of optimised assignment of vehicles and routes and its benefits are not well understood by most of us. Not only by the general public, but even by some experienced transport managers too. This article explains, from first principles, an algorithmic approach to optimised vehicle and route assignment in transport planning.

Traditionally, transport planning most often defaults to dividing the service area into smaller territories first. A large service area is divided into smaller non-intersecting territories that can be serviced by a single vehicle or a small collection of vehicles. After which, vehicle assignment and route planning is done.

## The fundamental problems

### 1. Cannot optimise for the KPIs

Territories are drawn around geography, not around cost per drop, on-time delivery, or fleet utilisation. Each vehicle is planned within its own territory, so the fleet is never optimised as a whole.

### 2. Cannot adapt to dynamic conditions

Demand, urgency, and road conditions shift every day, even within the same territory. There is limited scope for redistribution of work.

## How territory-based planning works

{{< figure src="img/territory-based-transport-planning.svg" alt="Map of three fixed territories served from one hub. Vehicle A runs at 83% load over 29.4 km with urgent stop A5 delivered last; Vehicle B at 79% detours 11.2 km around a road blockage; Vehicle C runs at 42% load." >}}

The planner assigns each delivery to the vehicle that owns its territory. The driver then sequences the stops, usually by habit. The map shows three consequences:

- **Urgent orders wait.** A5 is urgent but sits at the end of Vehicle A's route, so it's delivered last. Vehicle C, which is closer and has room, never gets it.
- **Detours absorb the blockage.** When Vehicle B's usual road is blocked, it drives 11.2 km around it, even though a 6.2 km alternative existed.
- **Capacity sits idle.** Vehicle C runs at 42% while A and B are near full.

None of these show up as planning errors. They show up as overtime, fuel bills, and missed deliveries.

## How algorithmic transport planning works

{{< figure src="img/algorithmic-transport-planning.svg" alt="Map of the same 12 stops and fleet planned algorithmically. Urgent stop A5 moves to Vehicle C as its first stop, Vehicle B takes the 6.2 km reroute, loads even out at 68–73%, and total distance falls from 99 km to 78.4 km." >}}

With the same stops and the same fleet, the algorithm drops the territories. It considers all deliveries, vehicle capacities, travel distances, and priorities together, then recommends the routes. The result:

- **The urgent order goes first.** A5 moves to Vehicle C and becomes its first stop.
- **Better routes, even unfamiliar ones.** Vehicle B takes the shorter reroute around the blockage because of the algorithmic route recommendation.
- **Balanced loads.** Utilisation evens out at 68–73% across all three vehicles.
- **Less driving.** Total distance falls from 99 km to 78.4 km, about 21% less. The longest working day drops from 7.1 to 5.4 hours.

Because the plan is recalculated each time, it adapts to what changes: new orders, blockages, and shifting priorities.

{{< figure src="img/hidden-cost-of-manual-transport-planning.png" alt="Hidden costs of manual transport planning, compared. Manual, by territory: simple to run; drivers work familiar areas and customers; but cannot optimise for the KPIs, cannot adapt to dynamic conditions, urgent orders wait, detours absorb the blockage, capacity sits idle. Algorithmic: the urgent order goes first; better routes, even unfamiliar ones; balanced loads; less driving; adapts to what changes." >}}
