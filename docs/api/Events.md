# Game Events

Feather has a built-in network and entity event watcher that can be utilized by other scripts easily.

## Register Event Listener


Register a callback that will be triggered whenever an in-game client event triggers.

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| eventname | name of the event to watch/listen to                |
| callback  | fucntion to be triggered when an event is triggered |

`FeatherCore.Events:RegisterEventListener(eventname, callback)`

Example Usage:

```lua
-- Client
Citizen.CreateThread(function()
    FeatherCore.Events:RegisterEventListener('EVENT_PICKUP_CARRIABLE', function(args)
        print("EVENT TRIGGERED: EVENT_PICKUP_CARRIABLE", args[1], args[2])
    end)
end)
```

## Remove Event Listener


Removes an event from the listener queue, listener will no longer listen once removed. This frees up in-game memory andis best practice if using listeners in a dynamic, or temporary way.

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| listener  | object returns from RegisterEventListener |

`FeatherCore.Events:RenoveEventListener(listener)`

Example Usage:

```lua
-- Client
Citizen.CreateThread(function()
    local listener = FeatherCore.Events:RegisterEventListener('EVENT_PICKUP_CARRIABLE', function(args)
        print("EVENT TRIGGERED: EVENT_PICKUP_CARRIABLE", args[1], args[2])
    end)


    Wait(40000)

    FeatherCore.Events:RenoveEventListener(listener)
end)
```

# DevMode

<Badge type="warning" text="Client Side Only" />

This provides the ability to print every in-game event for development purpose.

| Parameter | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| state     | object returns from RegisterEventListener                                                   |
| type      | (optional, will default to all) the type of event to listen too (entities, network, or all) |

`FeatherCore.Events:DevMode(listener)`

Example Usage:

```lua
-- Client
Citizen.CreateThread(function()
    FeatherCore.Events:DevMode(true, 'entities')
    --  FeatherCore.Events:DevMode(true, 'network')
end)
```