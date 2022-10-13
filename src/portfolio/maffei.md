---
title: maffei
layout: "base.njk"
---

# Maffei

Maffei is a single level, networked coop shooter where players defend humanity against AI invaders. 
The project is written in a combination of C++ and blueprint code for Unreal Engine 4.
Full source code and be viewed here https://github.com/williamhammond/CoopGame/.

## Overview

The game starts with a basic loading screen seen here:

There's some lag and incomplete rendering when a level starts. 
To correct this, I'm pretty I need to use Unreal's level streaming model and implement a callback so that I don't switch cameras until the level is fully loaded.

I relied on some built-in animations, some from a demo course, and made some aim offset animations myself.

I should probably add an indication to the player on what to do next, but the only objective for this level is to blow up some robots.
In this "Annihilation" game mode, I track the count of living enemies and players.
I implemented logic for other game modes, like a wave-based survival mode, but they aren't set up with real art assets.

And an unsuccessful run will look like this:

## Mechanics

### **Game Modes**

Aside from the primary level's game mode, I also implemented a wave mechanic where the player fights off exponentially waves of enemies for a high score.
Since this mode is a little more arcadey, there are powerups on the map.
I included health regen and super speed.
Technically, the shooter AIs can also pick up the powerups, although they aren't coded to seek them out.

### Enemies

There are two implemented enemies, the "tracker bot" and an AI version of the player cleverly named the "Shooter Bot."
The Shooter Bot uses Unreal's behavior tree, environment query system, and decorator system to implement its logic.
The tracker bot uses the environment query system to find the nearest player and basic physics to roll it towards the player.

## Issues and Learning

### **Project Organization**

The original layout for the project I inherited from the course structure was pretty haphazard.
After adding art assets and making substantial changes, it was becoming very hard to find assets.
I decided to reorganize the project without understanding the ordeal I was putting myself through. 
When renaming assets in Unreal, a special object called a "Redirector" is created.
The redirector acts as a shim that points references to the original name of the asset to the new name.
You have to manually "fix up" the redirector to delete the original asset.
The fixup can fail on occasion. The unexpected difficulty of renaming things has turned into a bit of a joke.

![](https://images.squarespace-cdn.com/content/v1/5ce82c28186bd30001708d1b/11c988e5-5379-47c7-a18d-35b34da58b95/redirector-meme.PNG)

Even while trying to re-read the documentation on redirectors for this post, I ended up encountering a redirect bug for [https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/Redirectors](https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/Redirectors)  to [https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/Redirectors/](https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/ProductionPipelines/Redirectors/) which landed me here:

![](https://images.squarespace-cdn.com/content/v1/5ce82c28186bd30001708d1b/e347bfb5-8d86-44fa-acf5-793db77cbf70/redirect-documentation-bug.PNG)

Ultimately though, it ended up being worth it.
There were a few mistakes I didn't get around to fixing but in general, it ended up being reasonable.

![](https://images.squarespace-cdn.com/content/v1/5ce82c28186bd30001708d1b/36ed26bb-61d3-46ef-b4bb-d5490e1e49e8/source-file-organization.PNG)

Source code organization

![](https://images.squarespace-cdn.com/content/v1/5ce82c28186bd30001708d1b/97a46bf9-fd0b-4a91-84f5-14f4921ea538/content-file-organization.PNG)

Asset Organization

### Blueprints and Visual Programming

The relationship between Unreal's visual programming system and code probably surprised me the most. 
I started with the bias that the blueprint system's primary use case was to make working in Unreal more accessible.
It does make scripting the engine more accessible, but I found myself using it for quick debugging and prototyping.
It also affects the way you think about structuring your code.
Even working on a solo project, I thought about how I'd structure the code to make it easier for game designers to iterate.
Questions like, "What should be exposed as a blueprint variable?", "Should these methods be primarily implementable as blueprints?" and "Is this being overengineered for blueprints?" kept coming up as I implemented things like different weapon types.

I also found blueprints particularly useful for implementing UI, although all my UI was very simple.

Another difficulty with blueprints was keeping them readable.
Bad blueprints literally become spaghetti code.

![](https://images.squarespace-cdn.com/content/v1/5ce82c28186bd30001708d1b/9a86ae19-e288-4a27-a1f8-2e390727a280/save-load-screen.PNG)

Pause Screen Logic

![](https://images.squarespace-cdn.com/content/v1/5ce82c28186bd30001708d1b/b146c698-453b-4ccd-86a4-bd4304bd3651/health-indicator-before.PNG)

Life Indicator Before

But with a bit of diligence, keeping them neat wasn't too hard.

![](https://images.squarespace-cdn.com/content/v1/5ce82c28186bd30001708d1b/82469481-f400-4bd9-93f3-afcfd255d0cc/health-indicator-after.PNG)

Health Indicator After

![](https://images.squarespace-cdn.com/content/v1/5ce82c28186bd30001708d1b/8fff595e-271b-44f6-8277-83f39eded931/player-event-graph.PNG)

Screen Switching Logic

### **Debugging & Testing**

Testing games is much different than testing other types of software.
I've experimented with Unity's testing framework's but not Unreal's.
I primarily relied on manual tests and Rider's debugger and print statements.
For more specialized things like EQS and behavior trees, I learned how to set breakpoints, visually follow the execution of the tree, and set flags to get more information out of EQS as the game AI was making decisions.
The most significant new skill I learned was how to include configurable "visual logging," where I could see what different systems were doing.

## Credits

I still need to add this to the game itself but thanks to everyone that made the free/reasonably priced art that made this feel like kind of a real game

- https://www.unrealengine.com/marketplace/en-US/product/journeyman-s-minimap
- https://www.unrealengine.com/marketplace/en-US/product/etasphera85
- https://www.unrealengine.com/marketplace/en-US/product/sci-fi-space-soldier-female
- https://freesound.org/people/Zovex/sounds/237974/
- https://freesound.org/people/Romariogrande/sounds/396231/
- https://freesound.org/people/Yoyodaman234/sounds/166507/
