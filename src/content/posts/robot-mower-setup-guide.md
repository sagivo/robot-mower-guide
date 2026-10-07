---
title: "Robot Mower Setup: How to Set Up a Robot Lawn Mower the Right Way"
seoTitle: "Robot Mower Setup Guide: Dock, Mapping & First Mow"
description: "Robot mower setup, step by step: where to put the dock, RTK antenna vs LiDAR, mapping tips, no-go zones, the first mow and the 8 mistakes that cause trouble."
pubDate: 2026-10-07
updatedDate: 2026-10-07
category: guide
tag: "Ownership"
order: 30
heroKeywords: ["robot mower setup", "how to set up a robot lawn mower", "robot mower installation", "robot mower mapping tips"]
picks:
  - id: segway-navimow-i215-lidar
    label: "Simplest LiDAR setup"
  - id: segway-navimow-x4
    label: "Easy auto-mapping for big yards"
  - id: eufy-e15-e18
    label: "Easiest setup for simple, flat lawns"
takeaways:
  - "Most setup problems start with the <strong>dock location</strong>: it needs power, a strong Wi-Fi or 4G signal, flat ground and, for RTK models, open sky."
  - "Antenna-based RTK mowers take the longest to install. Network-RTK and LiDAR models are usually mapped and mowing the same day."
  - "Map in daylight on dry grass, stay a little inside hard edges, and keep well back from drop-offs."
  - "Mow the lawn short with a regular mower first. Robots cut a little often; they can't take down 6-inch grass."
  - "Expect to adjust the map and schedule during the first two weeks. That's normal, not a defect."
faq:
  - q: "How long does it take to set up a robot lawn mower?"
    a: "For a wire-free model, plan on an afternoon. LiDAR and network-RTK mowers like the Navimow i215 or Sunseeker S4 can map a simple yard in minutes, according to reviewers. Models that need an RTK base station take longer, and the Lymow One Plus manual mapping alone takes 30–45 minutes. Add time for clearing the lawn and fine-tuning zones."
  - q: "Where should I put my robot mower charging station?"
    a: "Put it on flat, firm ground near an outdoor outlet, with a clear straight approach in front and a strong Wi-Fi or 4G signal. For RTK models, the dock or antenna needs open sky away from tall walls and trees. Avoid low spots where water pools and areas hit by sprinklers."
  - q: "Do I need to mow before installing a robot mower?"
    a: "Yes. Cut the lawn with a regular mower to about your target height a day or two before setup. Robot mowers are designed to trim small amounts often, and long grass can stall them, hide obstacles during mapping and leave a ragged first cut."
  - q: "Can I move my robot mower's RTK antenna after mapping?"
    a: "Avoid it. RTK maps are tied to the antenna's exact position, so moving it usually means recalibrating or remapping, depending on the brand. Pick a permanent spot with good sky view before you map. If you must move it, check your manufacturer's app instructions first."
  - q: "How do robot mowers get from the front yard to the back yard?"
    a: "You draw a channel, a narrow path in the app that links two mapping zones. The mower drives through it, often with blades off, to reach the other zone. Keep channels wider than the mower, on firm ground, and on gentle slopes, since some models have lower slope limits at boundaries."
---

Robot mower setup comes down to five jobs: prep the lawn, put the dock in the right spot, install the RTK antenna if your model needs one, map the yard, and fine-tune zones and schedules after the first few mows. On a wire-free mower, most people go from box to first cut in a single afternoon. The dock location and the quality of your map decide whether the next two years are hands-off or full of rescue missions.

This guide is brand-neutral, with notes for specific models where they differ. It's compiled from manufacturer instructions, published reviews and owner reports. If you haven't bought yet, start with [how to choose a robot lawn mower](/posts/how-to-choose-a-robot-lawn-mower/) instead.

## Before you start: prep the lawn and your phone

A day or two before setup:

- **Mow short.** Cut the lawn with a regular mower to around your target height. Robots trim a little often. Long grass stalls them, hides obstacles during mapping and leaves a ragged first cut.
- **Clear the lawn.** Pick up sticks, toys, hoses, dog waste and fallen fruit. Fill holes and ruts, which can trap small wheels.
- **Flag hazards.** Mark sprinkler heads, exposed roots, drainage grates and anything the mower shouldn't drive over.
- **Measure your steepest slope.** If part of the lawn exceeds your model's rating, plan to make it a no-go zone. The [slope checker](/tools/slope-checker/) helps.
- **Charge and update.** Fully charge the mower, install the app, create your account and accept any firmware update before mapping. Updates that land mid-map are a common source of frustration.
- **Check 4G activation.** If your mower includes cellular service, confirm it's active. You'll want tracking from day one.

## Choosing the dock location

The dock is the mower's home base, and it's the hardest thing to change later. Check five things.

1. **Power.** You need an outdoor outlet (ideally GFCI-protected) within reach of the power supply cable. Plan the cable route so it won't be mowed over or chewed.
2. **Signal.** Stand at the spot with your phone. If Wi-Fi is weak, the app will be unreliable, and some models (like the ECOVACS GOAT A series) only use 2.4 GHz Wi-Fi. Reviewers of the Sunseeker S4 note the dock may need moving for a good 4G signal.
3. **Sky view (RTK models).** Satellite positioning needs open sky. Keep the dock, or the antenna, away from tall walls, dense trees and overhangs.
4. **Flat, firm ground.** Docking needs a level pad and a clear, straight approach in front. Avoid slopes, soft soil and low spots where water collects.
5. **Shelter from sprinklers and runoff.** Don't put it where irrigation sprays the charging contacts or where roof runoff pools.

Side yards look tidy but are often the worst choice: narrow, shaded and blocked from the sky. A corner of the main lawn with open sky usually works better.

## Antenna RTK vs network RTK vs LiDAR: what setup involves

Setup effort depends mostly on how your mower navigates. Our [navigation explainer](/posts/robot-mower-navigation-explained/) covers the tech. Here's what each means on install day.

| Navigation type | What you install | Setup effort | Examples |
|---|---|---|---|
| RTK with base station | Dock plus an antenna or reference station, sometimes with its own outlet | Highest | Husqvarna Automower iQ, Anthbot M9, Lymow One Plus |
| Network RTK (+ vision) | Dock only, if local coverage is good; an antenna if not | Low to medium | Navimow X4 and X3, i105N, WORX Vision Cloud, Sunseeker X7 Gen 2 |
| LiDAR (+ vision) | Dock only | Lowest | Navimow i215, Sunseeker S4, Dreame A3 AWD, ECOVACS GOAT |
| Hybrid | Dock only | Low | Mammotion LUBA 3 AWD |
| Vision only | Dock only | Lowest | eufy E15 / E18 |

**Base-station RTK.** Mount the antenna high, with as much open sky as possible, clear of walls, trees and metal roofs. Husqvarna's EPOS reference station needs its own power outlet, separate from the charging station. The Anthbot M9 antenna sits near the dock, and reviewers describe the whole job as about 10 minutes. Once you map, treat the antenna position as permanent: moving it usually means recalibrating or remapping.

**Network RTK.** The mower pulls correction data over the internet instead of from your own antenna. The Navimow X4 is designed to work this way, but in practice some yards still need the included antenna, depending on coverage at your address. Run the app's signal check before deciding. Also check which Sunseeker X7 you have: the original X7 needs a base station, and Gen 2 doesn't.

**LiDAR.** No satellites and no antenna. The mower builds a 3D map from laser scans, so it works under trees and next to buildings. Setup is the closest to drop-and-go of any type.

## Mapping your lawn: auto vs manual drive-around

There are two mapping styles, and many mowers offer both.

- **Automatic mapping.** The mower explores the lawn and proposes a boundary that you edit in the app. The Navimow i215, ECOVACS GOAT O1000 and Navimow X4 offer it.
- **Manual drive-around.** You steer the mower around the edge with the app's joystick, and it records the path. The Anthbot M9 and Lymow One Plus use this method (Lymow quotes 30–45 minutes).

Even with auto-mapping, check every edge before you save.

### Robot mower mapping tips

- **Map in daylight on dry grass.** Camera-based systems (eufy, and the vision layer on most others) need good light. Wet grass makes wheels slip and distorts the recorded path.
- **Go slow at corners.** Jerky steering leaves jagged boundaries.
- **Stay a few inches inside hard edges.** Walls, fences and raised beds catch the deck. You'll tidy the gap with a trimmer, or pick a mower with edge cutting.
- **Keep well back from drop-offs.** Retaining walls, ponds, pool edges and steep banks deserve a generous buffer. LiDAR mowers may need map edits near drop-offs, according to reviewers of the Navimow i215.
- **Close the loop where you started.** Most apps won't save an open boundary.
- **Map one zone at a time.** Front yard, back yard and side strip should be separate zones.

## No-go zones and channels between zones

**No-go zones** are areas inside a boundary that the mower skips. Draw them around flower beds, vegetable gardens, kids' play areas, tree roots that stick up, and any patch steeper than your model's rating. Most apps let you draw them on your phone after mapping. Newer AI-vision models also avoid many obstacles on their own, but don't count on that for fixed hazards. If pets or kids share the yard, our [safety guide](/posts/robot-mower-safety-pets-kids-wildlife/) covers what to fence off.

[[diagram:yard-map]]

**Channels** connect separate zones, for example a path across the driveway from the front lawn to the back. Keep them:

- **Wider than the mower**, with margin, so small position errors don't push a wheel into a bed.
- **On firm ground.** Gravel and loose mulch are hard on blades and wheels.
- **Gentle.** Boundary slope limits are often lower than in-lawn limits. The Automower iQ allows 45% inside the work area but only 15% at the boundary, and the ECOVACS GOAT drops from 50% to 20% across virtual boundaries.

Complex yards with many zones, gates and narrow passages need extra care. See our picks for [complex yards](/posts/best-robot-mower-for-complex-yards/).

## The first mow

Stay outside for the first full run. You're looking for stuck points, missed patches and boundary errors, not cut quality.

- **Start high.** Set the cutting height a notch above your target, then lower it over a week or two.
- **Watch the edges and channels.** If the mower hesitates or wanders, edit the boundary in the app.
- **Note where it gets stuck.** Roots, hoses and curbs cause most stalls. Fix the ground or draw a no-go zone.
- **Check the docking approach.** It should return and charge without help.

Expect a few weeks of tuning. Reviewers of the Dreame A3 AWD Pro say to plan on fine-tuning the map after the first few runs, and that's typical across brands.

## Scheduling: little and often

Robot mowers work best when they mow a small amount frequently, so the clippings are tiny and disappear into the lawn.

- **Peak season:** most owners schedule several sessions a week, more in spring growth. Your app's suggested schedule for your area is a good starting point.
- **Mow when it's dry.** Late morning, after dew burns off, gives the cleanest cut and best traction. Enable rain delay if your model has it ([more on rain](/posts/do-robot-mowers-work-in-rain/)).
- **Avoid night mowing if wildlife is around.** Quiet models like the Navimow i105N (58 dB) are tempting to run at night, but toads and other small animals are active then.
- **Keep it out of the way.** Skip times when kids play outside or the sprinklers run.
- **Ease off in summer heat.** Many lawns grow slower and stress more in July and August.

## Common setup mistakes

| Mistake | What happens | Fix |
|---|---|---|
| Dock in a shady side yard | RTK fix drops, mower can't find home | Move the dock (or antenna) to open sky |
| Weak Wi-Fi at the dock | App disconnects, updates fail | Use a mesh node or extender, or rely on 4G |
| Skipping the pre-mow | Stalls and a ragged first cut | Cut short with a regular mower first |
| Boundary too tight to walls | Deck scrapes, mower gets stuck | Remap a few inches inside |
| Ignoring drop-offs | Wheels go over the edge | Add a wide buffer or no-go zone |
| Steep or narrow channels | Mower stalls between zones | Widen the channel, reroute on flatter ground |
| Moving the antenna after mapping | Map no longer lines up | Pick a permanent spot first; remap if needed |
| Expecting perfection on day one | Frustration and returns | Allow two weeks of map and schedule tweaks |

If something still isn't working after setup, our [troubleshooting guide](/posts/robot-mower-problems-troubleshooting/) covers the common faults. Once it's running smoothly, keep it that way with our [robot mower maintenance guide](/posts/robot-mower-maintenance/).

## Which mowers are easiest to set up?

If setup effort is a big factor, favor LiDAR or network-RTK models with automatic mapping. Per reviewers, the [Navimow i215 LiDAR](amazon:segway-navimow-i215-lidar) offers one of the simplest setups for shaded small yards, and the [eufy E15 / E18](/mowers/eufy-e15-e18/) is the most plug-and-play for flat, simple lawns. For bigger properties, the [Navimow X4](amazon:segway-navimow-x4) offers auto or remote-control mapping, though some addresses still need its antenna. Skip base-station models if you can't run power to a second spot, unless you specifically want Husqvarna's dealer support. Compare everything in the [full model chart](/mowers/) or filter by yard with the [size matcher](/tools/size-matcher/).
