# Objects <Badge type="warning" text="Client Side Only" />

You can leverage Feathers built in function for easy spawn and manipulate in-game Object entities.

## Create Object



This will spawn an object in your game world

| Parameter | Description                                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelhash | The [hash](https://github.com/femga/rdr3_discoveries/blob/f729ba03f75a591ce5c841642dc873345242f612/peds/peds_list.lua) of the model you want the ped to be |
| x         | x world position coordinate                                                                                                                                |
| y         | y world position coordinate                                                                                                                                |
| z         | z world position coordinate                                                                                                                                |
| heading   | The heading of the ped (Which way it is facing)                                                                                                            |
| networked | Where to spawn ped. (world, vehicle, mount)                                                                                                                |
| method    | standard or custom - Standard will run place on ground and a few other house keeping                                                                       |

`featherObjects:Create()`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')
end)
```

## Pickup Light



Add a light to the object

| Parameter | Description |
| --------- | ----------- |
| state     | True/False  |

`obj:PickupLight(state)`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    obj:PickupLight(true)
end)
```

## Freeze



Freeze Object

| Parameter | Description |
| --------- | ----------- |
| state     | True/False  |

`obj:Freeze(state)`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    obj:Freeze(true)
end)
```

## Set Heading



Set the heading of an object

| Parameter | Description                             |
| --------- | --------------------------------------- |
| heading   | number coord relative to the game world |

`obj:SetHeading(heading)`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    obj:SetHeading(0)
end)
```

## Place On Ground



place the object on the groun properly

| Parameter | Description |
| --------- | ----------- |
| state     | true/false  |

`obj:PlaceOnGround(state)`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    obj:PlaceOnGround(true)
end)
```

## Set As Mission



The engine will keep object when players leave the area

| Parameter | Description |
| --------- | ----------- |
| state     | true/false  |

`obj:SetAsMission(state)`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    obj:SetAsMission(true)
end)
```

## Set As No Longer Needed



The engine will remove when players leave the area

`obj:SetAsNoLongerNeeded()`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    obj:SetAsNoLongerNeeded()
end)
```

## Invincible



Set object as invincible

| Parameter | Description |
| --------- | ----------- |
| state     | true/false  |

`obj:Invincible(state)`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    obj:Invincible(true)
end)
```

## Horse Jumpable



Sets object as not jumpable by horse.

| Parameter | Description |
| --------- | ----------- |
| state     | true/false  |

`obj:SetNotHorseJumpable(state)`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    obj:SetNotHorseJumpable(true)
end)
```

## Remove



Remove Object

`obj:Remove()`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    Wait(5000)

    obj:Remove()
end)
```

## Get Object



Remove Object

`obj:GetObj()`

Example Usage:

```lua

CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local obj = FeatherCore.Object:Create('p_package09', coords.x, coords.y, coords.z, 0, true, 'standard')

    Wait(5000)

    local tobj = obj:GetObj()
end)
```