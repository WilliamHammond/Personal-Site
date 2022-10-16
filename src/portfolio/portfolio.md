---
title: Portfolio
layout: "base.njk"
eleventyNavigation:
  key: Portfolio
  order: 3
---

## [Unity RTS](/portfolio/unityrts)

A basic Unity networked RTS I built following a tutorial.
I made some minor changes and typically implemented things ahead of the course. The project is integrated with steam, networked using the Mirror library, and automatically formatted using csharpier.

{% image "./assets/portfolio/unityrts/intro.png", "Image of an RTS map"%}

## [Coop Shooter](/portfolio/maffei)

This project was an extension of a class I did.
The project the course focused around was a 3rd coop shooter in the style of Gears of War.
After completing the course I made a series of changes to customize the game and learn more about Unreal.

{% image "./assets/portfolio/coopgame/intro.png", "Image of 3rd person shooter"%}

## [Renaissance Mech Fight](/portfolio/mechfight)

This game was made for the 2022 48 hour Global Game Jam.
The theme of the game jam was “duality”. The original premise of the game was you play as an arms dealer selling arms to both sides of the conflict and you need to try and maximize profits without one side wiping out the other.
It eventually turned into you playing as Da Vinci’s apprentice, selling his war machines to rival artists. I worked on the combat logic, game state, and sound effects.

<a href="https://williamhammond.itch.io/mech-fight">Mech Fight by williamhammond</a>

{% image "./assets/portfolio/mechfight/intro.png", "Image of the mech fight game"%}

##  2D Tactical Shooter

NotWorms is a WIP 2D Tactical shooter. Currently, only basic movement, combat, and turn logic are implemented.
It does implement Unity unit tests, automatically runs csharpier on save, and has a CI/CD setup that:

- Verifies the code was linted
- Runs the unit tests
- Builds the game for web-gl and publishes it as a github page (although this is currently broken after I added networking)

The full code can be found here https://github.com/williamhammond/NotWorms.

##  Engine

A WIP game engine I’m writing based off of Jason Gregory’s Game Engine Architecture, Eric Lengyel’s Foundations of Game Engine Development, and Robert Nystrom’s Game Programming Patterns.
Currently it’s a bare-bone math library, but I did some fun stuff with the CI/CD including automatic testing, linting, builds on multiple platforms, automatic tests, and automatic micro-benchmarks with persisted results.
Full code can be found here https://github.com/williamhammond/engine/.

{% image "./assets/portfolio/engine/intro.jpg", "Stock image of a Jet engine"%}

##  AI Bots

I’ve written a few simple bots for RTS games including AoE2 and Starcraft 2.

https://github.com/williamhammond/boomer-bot  
https://github.com/williamhammond/cheesebot
