---
title: unityrts
layout: "base.njk"
---

# Unity RTS

The mechanics are straightforward; you’re given a single resource, “oil,” and you can make tanks.
If you lose your main base, you lose.
The last player standing wins.
The full source can be found [here](https://github.com/williamhammond/RealTimeStrategy).

## Overview

The game starts with a simple lobby screen.
{% addVideo "/assets/portfolio/unityrts/game-start.mp4"  %}

The player can construct "oil rigs" to get more resources per second and production building to generate more tanks.
There is a constraint that buildings must be placed within a certain distance to their main base.
{% addVideo "/assets/portfolio/unityrts/unit-creation.mp4"  %}

Pathing is solved using Unity's [NavMeshAgent](https://docs.unity3d.com/ScriptReference/AI.NavMeshAgent.html).
Nothing clever is done to prevent groups of units from splitting around obstacles.
{% addVideo "/assets/portfolio/unityrts/pathing.mp4"  %}

Buildings and units can be destroyed. If you lose your main base, you lose.
{% addVideo "/assets/portfolio/unityrts/game-over.mp4"  %}

## Networking

### Mirror

The network library I used for this is an open-source project, [Mirror](https://mirror-networking.gitbook.io/docs/).
It follows a client-server architecture with SyncVars (Synchronized variables) and RPCs (Remote Procedure Calls) as the primary building blocks.
The game is run with a dedicated server or under a host.
Generally, I have authority checks that ensure core logic is only run on the host server and the state is replicated to the clients.
Although, I wouldn't be surprised if there were still plenty of exploitable things on the client side.

The RPC model of Mirror meshes well with C#'s [event](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/event) system.
Take, for example, [ClientOnGameOver](https://github.com/williamhammond/RealTimeStrategy/blob/main/Assets/Scripts/Buildings/GameoverHandler.cs#L49-L53).
Many things will get cleaned up on the client-side, and the players need to know the game's result.
The UnitCommandHandler and UnitSelectionHandler are disabled, and the GameOverDisplay is rendered.
The event system gives a tidy way to handle the fan-out of RPCs.
When run on the server-side, the event system provides an easy-to-use [Event Queue](https://gameprogrammingpatterns.com/event-queue.html) abstraction.

### Steam

Mirror supports multiple transport layers, one of them being a Steam relay.
This required minimal code changes and let's us use Steam's APIs for friend discovery and authentication while still keeping the networking peer-to-peer.

{% addVideo "/assets/portfolio/unityrts/steam-clipped.mp4"  %}

## Issues and Learning

### C# and Scripting Model

I expected Unity's C# scripting model to be easier than Unreal's C++/Blueprint system.
However, I felt that blueprints were quicker and more natural for fast prototypes, the class model of Unreal's C++ code was a bit more straightforward, and the code felt more "sturdy."
Unity's live-reloading was nice, but it was pretty finicky, and I needed to configure it to avoid long pauses in the middle of playtesting.

### Minimap

Implementing the minimap was more fun than I expected.
A lot of the other logic in the game was very much general programming, just game themed or interacting with Unity's built-in systems like in the case of pathing.
I couldn't lean on any of my experience with other types of programming while making the minimap, though.

It's implemented using a rectangular transform for ray-tracing to detect when a player has interacted with the minimap, a [virtual camera](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.1/api/Cinemachine.CinemachineVirtualCamera.html) to render the orthographic view of the player's vision, and icons for prefabs that give their minimap representation.
