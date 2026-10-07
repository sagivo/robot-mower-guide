---
title: "Robot Mower Problems and Fixes: A Troubleshooting Guide (2026)"
seoTitle: "Robot Mower Problems & Fixes: Troubleshooting Guide"
description: "Robot mower problems solved: RTK signal lost, stuck on slopes, won't dock, not mowing, patchy cuts and battery drain. Likely causes and fixes for 30+ issues."
pubDate: 2026-10-07
updatedDate: 2026-10-07
category: guide
tag: "Ownership"
order: 34
heroKeywords: ["robot mower problems", "robot mower not mowing", "robot mower RTK signal lost", "robot mower stuck", "robot mower won't dock"]
picks:
  - id: dreame-a3-awd-pro
    label: "No satellite signal to lose"
  - id: segway-navimow-i215-lidar
    label: "Simplest setup under trees"
  - id: husqvarna-automower-iq
    label: "Dealer support when things break"
takeaways:
  - "Most robot mower problems trace back to <strong>four causes</strong>: poor sky view (RTK), dirty sensors, wet or long grass, and a badly placed dock."
  - "If your mower is <strong>not mowing</strong>, check the schedule, rain delay, PIN lock and battery temperature before assuming a fault."
  - "<strong>RTK signal lost</strong> under trees is a navigation limit, not a defect. Move the antenna, edit the map, or consider LiDAR."
  - "Clean the cameras, LiDAR window and charging contacts every week or two. It fixes a surprising share of errors."
  - "Before opening anything, contact support with photos, error codes and app logs. DIY repairs can void the warranty."
faq:
  - q: "Why is my robot mower not mowing?"
    a: "The most common reasons are a schedule that's off or set to the wrong time zone, an active rain delay, a PIN or child lock, a battery that's too hot or cold to start, or a lost position fix. Check the app's status and error messages first. If the mower reports no error and still won't start, restart it and update the firmware."
  - q: "Why does my robot mower keep losing RTK signal?"
    a: "RTK needs a clear view of the sky. Trees, walls and roof overhangs block satellites, and a poorly placed base antenna or patchy network-RTK coverage makes it worse. Move the antenna to an open spot, check the cable, trim the worst branches, or redraw the map to avoid the darkest corners. LiDAR mowers don't have this problem."
  - q: "Why does my robot mower keep getting stuck?"
    a: "Usually wet grass, long grass, soft ground, or a feature the mower can't climb, like a root, curb, hose or hole. Slope ratings assume dry, short grass. Raise the cutting height, mow more often, fill holes, add no-go zones around trouble spots, and keep the rain delay on."
  - q: "Why won't my robot mower go back to its dock?"
    a: "Common causes are a dock on uneven or sloped ground, dirty charging contacts, an obstacle in the approach path, or a weak position fix near the house. Level the dock, clean the contacts, clear a straight approach and make sure the mower has good signal at the dock. Re-pairing or re-setting the dock position in the app often fixes it."
  - q: "Does a robot mower warranty cover a dead battery?"
    a: "Often, within limits. Many brands cover batteries for a shorter period than the mower itself, and normal capacity loss over time usually isn't a defect. Register the mower when you buy it, keep the receipt, and contact support before replacing the battery yourself, because unauthorized repairs can void coverage."
---

Most robot mower problems come down to four things: a weak position signal, dirty sensors, wet or overgrown grass, and a badly placed dock. Fix those and most "broken" mowers start working again. Below, each common failure is laid out as problem, likely cause and fix, with brand-specific notes where manufacturers document them. If your mower has never worked right, start with our [robot mower setup guide](/posts/robot-mower-setup-guide/).

## Robot mower not mowing: first checks, schedule and locks

Start every diagnosis the same way: **read the app's error message** and note the code, **restart** the mower and app, **update the firmware** (support will ask you to anyway), and **clean** the cameras, LiDAR window, rain sensor and charging contacts. That clears a surprising share of problems.

| Problem | Likely cause | Fix |
|---|---|---|
| Sits in the dock at the scheduled time | Schedule disabled, wrong time zone, or a "do not disturb" or seasonal pause | Recheck the schedule and the phone and mower time zones |
| Won't leave after rain | Rain delay active, or a rain sensor still wet or dirty | Wait out the delay, wipe the sensor dry, shorten the delay in the app |
| Won't start at all | PIN or child lock active, lid or stop button engaged | Enter the PIN, close the lid, release the stop button |
| Starts, then stops right away | Battery too hot or cold, or a lift/tilt sensor tripped | Let it cool in shade or warm up; check that nothing is jammed under the shell |
| "Positioning" error before leaving | No RTK fix, or LiDAR can't match the map at the dock | See the navigation sections below |

**Brand note:** WORX documents a default rain delay of 180 minutes that starts once the sensor dries, adjustable or disableable in the app. Other brands use similar settings. If your mower "never mows" in a damp climate, the rain delay is the first thing to look at. Our [rain guide](/posts/do-robot-mowers-work-in-rain/) explains how to set it.

## Navigation and RTK problems

RTK mowers combine satellites with a correction signal from a base antenna or a network service. Block the sky and they lose precision. Our [navigation explainer](/posts/robot-mower-navigation-explained/) covers how it works.

[[diagram:navigation]]

| Problem | Likely cause | Fix |
|---|---|---|
| "RTK signal lost" or "positioning weak" in one area | Tree canopy, walls or roof overhangs blocking satellites | Trim branches, redraw the boundary away from the worst spot, or add a no-go zone |
| Weak signal everywhere | Antenna in a poor spot, damaged cable, or weak network-RTK coverage | Move the antenna to open ground with clear sky; inspect the cable; check coverage at your address |
| Mower drifts off its lines or crosses boundaries | Float (not fixed) RTK solution, or wheel slip | Wait for a fixed signal before mowing; mow when grass is dry; remap the problem edge |
| Map shifted after moving the antenna | Map is tied to the old base position | Most apps require remapping or re-calibrating after the base moves |
| Scheduled mow skipped for "poor positioning" | Signal quality below the mower's threshold at start time | Move the dock to a spot with better sky view, or schedule for a time of day with better satellite geometry |

**Brand notes:**

- **Segway Navimow:** the app includes a Satellite Signal Analyzer (under Settings) that shows which satellites the mower and network base can see. Navimow's guidance says the antenna needs a wide, unobstructed view of the sky, away from walls, trees and buildings, and to check the antenna cable first if signal degrades suddenly. On the [Navimow X4](/mowers/segway-navimow-x4/) and [X3](/mowers/segway-navimow-x3/), whether you need the antenna at all depends on network-RTK coverage at your address.
- **Husqvarna Automower iQ:** the EPOS reference station needs its own power outlet and a clear sky view. Husqvarna's platform can fall back to boundary wire in yards with poor sky view, which is a real advantage if your lot is heavily wooded. Owners have reported boundary errors and rear-wheel traction issues on the [Automower iQ](/mowers/husqvarna-automower-iq/).

**When RTK just isn't the right tool:** if your yard is mostly under trees, no amount of antenna moving will fix it. LiDAR mowers like the [Dreame A3 AWD Pro](amazon:dreame-a3-awd-pro) and [Segway Navimow i215 LiDAR](amazon:segway-navimow-i215-lidar) don't use satellites. Our [best robot mowers for complex yards](/posts/best-robot-mower-for-complex-yards/) covers the options.

## LiDAR and vision problems

LiDAR and camera mowers don't need satellites, but they need to see.

| Problem | Likely cause | Fix |
|---|---|---|
| "Relocalization" or "lost position" pauses | Dirty LiDAR window, or the yard changed (furniture moved, leaves fell, a hedge was cut) | Clean the window with a microfiber cloth; remap after big changes |
| Struggles in a big open lawn | LiDAR needs fixed features (walls, trees, fences) to localize; open fields have few | Check the manual's range limits; models that add RTK do better in open areas |
| Camera-only mower gets lost at dusk or in shade | Low light and hard shadows | Schedule daytime mowing; avoid sunrise and sunset |
| Bumps into or ignores obstacles | Dirty lens, or a low or thin object (hose, toy, stick) below the detection threshold | Clean cameras; clear the lawn before runs; add no-go zones |

**Brand notes:** owners of the [Dreame A3 AWD Pro](/mowers/dreame-a3-awd-pro/) report occasional position-loss pauses, and Dreame sells a mower cleaning kit. Fine-tuning the map after the first few runs is normal on LiDAR models. On the [eufy E15/E18](/mowers/eufy-e15-e18/), camera-only navigation is known to get lost on complex lawns and in poor light, so a simple, well-lit layout matters more than on any other model.

## Traction and getting stuck

| Problem | Likely cause | Fix |
|---|---|---|
| Spins on a slope | Wet or long grass, or a slope beyond the real-world rating | Mow when dry; keep grass shorter; mow up and down instead of across |
| Stuck in the same spot every run | Hole, rut, root or sudden grade change | Fill and level it, or add a no-go zone |
| High-centered on a curb or edge | Step higher than the mower can climb | Map the boundary back from the edge; add a ramp on paths you need it to cross |
| Wraps up hoses, sticks or cords | Clutter below the obstacle sensors | Clear the lawn before scheduled runs |
| Leaves ruts | Heavy mower repeating paths on soft soil | Vary the pattern angle; lengthen the rain delay |

Published slope ratings assume dry, short grass, so treat them as a best case. A 2WD mower rated 45% (about 24°) may struggle well below that on dew. Our [slope checker](/tools/slope-checker/) and [slope limits guide](/posts/robot-mower-slope-limits/) explain how to measure your grade.

**Brand notes:** BGR found the [ECOVACS GOAT A3000 LiDAR Pro](/mowers/ecovacs-goat-a-lidar-pro/) occasionally gets stuck and has to be carried free, and Husqvarna has a dedicated support article for the Automower "trapped" error. If your mower gets stuck on hills constantly, the honest fix may be AWD. See our [best robot mowers for hills](/posts/best-robot-mower-for-hills/).

## Robot mower won't dock or charge

| Problem | Likely cause | Fix |
|---|---|---|
| Circles near the dock without connecting | Dock on uneven or sloped ground, or approach blocked | Level the pad; clear a straight approach (see your manual for the clearance) |
| Docks but doesn't charge | Dirty or corroded charging contacts, or a loose power cable | Clean contacts with a dry cloth; check the plug and the GFCI outlet |
| Can't find the dock near the house | Weak RTK fix by walls and eaves | Move the dock a few feet into open sky, then re-set its position in the app |
| Runs out of battery before returning | Return threshold too low, or a far-away zone | Raise the return-to-charge level; move the dock closer to the middle of the lawn |
| Dock relocated, now it won't return | Map still points to the old dock spot | Re-set or re-pair the dock position in the app |

Dock placement causes more ongoing headaches than any other setup choice: it needs flat ground, power, good signal and an easy approach. **Brand note:** reviewers note that the [Sunseeker S4](/mowers/sunseeker-s4/) dock may need moving to get a good 4G signal.

## Cutting quality problems

| Problem | Likely cause | Fix |
|---|---|---|
| Ragged or torn grass tips | Dull or chipped blades | Replace blades (usually cheap razor-style pivoting blades) |
| Missed strips or patches | Map gaps, obstacle zones set too wide, or overlap set too low | Increase path overlap; shrink no-go buffers; remap tricky areas |
| Uncut border around edges and beds | Robots can't cut right up to borders | Use edge mode or a mower with an edge disc or trimmer; trim the rest by hand |
| Clumps of clippings | Mowing wet or long grass | Mow when dry and more often; clean under the deck |
| Scalped humps | Cutting height too low for bumpy ground | Raise the height; level the worst humps |

Missed patches are among the most reported problems in reviews. The [Navimow X4](/mowers/segway-navimow-x4/), [Dreame A3 AWD Pro](/mowers/dreame-a3-awd-pro/) and [Lymow One Plus](/mowers/lymow-one-plus/) have all been noted for occasional missed spots. Raising path overlap usually helps at the cost of a longer run. Blade care is covered in our [maintenance guide](/posts/robot-mower-maintenance/).

## App and connectivity problems

| Problem | Likely cause | Fix |
|---|---|---|
| Mower shows offline | Out of Wi-Fi range, or a 2.4 GHz vs 5 GHz mismatch | Most mowers need 2.4 GHz; add an outdoor access point or rely on 4G |
| 4G not working | Subscription expired, or weak cell signal at the dock | Check the plan in the app; move the dock for better signal |
| App is slow or laggy | App or server issue, or a weak connection | Update the app; restart the phone; owners report some lag on certain brands |
| Can't pair after a reset | Mower still bound to the old account | Unbind in the app or contact support with proof of purchase |

A lapsed 4G plan can cost you remote control, theft tracking and, on some models, network RTK. Our [theft protection guide](/posts/robot-mower-theft-protection/) lists how much 4G each model includes.

## Battery problems

| Problem | Likely cause | Fix |
|---|---|---|
| Shorter runs than when new | Normal capacity loss, heat, slopes or long grass | Expect some decline over seasons; mow more often so each run is lighter |
| Won't charge in summer | Battery too hot | Shade the dock; schedule mowing in cooler hours |
| Dead after winter | Stored empty or in freezing temperatures | Store indoors at the charge level your manual recommends |
| Shuts off mid-run | Failing cell or a loose connector | Contact support; don't open the battery pack yourself |

Lithium batteries are consumables. Our [how long robot mowers last](/posts/how-long-do-robot-mowers-last/) guide covers typical battery life and replacement costs.

## When to contact support, and warranty tips

Contact support when:

- The same error persists after a restart, a cleaning and a firmware update.
- You see physical damage, burning smells, swelling batteries or water inside the shell.
- Drive motors or blade motors make grinding noises or stop.
- The mower can't hold a position fix even in open sky with the antenna well placed.

**Warranty tips that save money:**

1. **Register the mower** when you buy it. Some brands extend coverage on registration.
2. **Keep the receipt and serial number** in cloud storage.
3. **Document the problem** with photos, videos, error codes and dates.
4. **Don't open the shell or battery** before talking to support. Unauthorized repairs can void coverage.
5. **Know your coverage terms.** Mower and battery coverage periods often differ. Husqvarna's long warranty and dealer network are a big part of why the [Automower iQ](amazon:husqvarna-automower-iq) remains a sensible pick for buyers who value support over specs.
6. **Buy from a retailer with easy returns.** Big-box availability is a real plus of [WORX](/mowers/worx-landroid-vision-cloud/), and a return within the window is faster than any warranty claim.

## Bottom line

Most robot mower problems are fixable at home: clean the sensors, check the schedule and rain delay, improve the signal, level the dock, and mow when the grass is dry. A problem that keeps coming back may be a mismatch between mower and yard, like an RTK mower under heavy trees or a 2WD mower on a wet hill. If you're shopping, use the [size matcher](/tools/size-matcher/), the [comparison chart](/mowers/) and our [best robot lawn mowers of 2026](/posts/best-robot-lawn-mowers-2026/) to pick one that fits your yard from the start.
