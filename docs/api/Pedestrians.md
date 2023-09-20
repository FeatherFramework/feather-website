# Pedestrians (Peds) <Badge type="warning" text="Client Side Only" />

You can leverage Feathers built in function for easy spawn and manipulate in-game pedestrian entities.

## Create Ped



This will spawn a pedestrian in your game world

| Parameter  | Description                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelhash  | The [hash](https://github.com/femga/rdr3_discoveries/blob/f729ba03f75a591ce5c841642dc873345242f612/peds/peds_list.lua) of the model you want the ped to be |
| x          | x world position coordinate                                                                                                                                |
| y          | y world position coordinate                                                                                                                                |
| z          | z world position coordinate                                                                                                                                |
| heading    | The heading of the ped (Which way it is facing)                                                                                                            |
| location   | Where to spawn ped. (world, vehicle, mount)                                                                                                                |
| safeground | Should the ped spawn in a known ok location (default true, disable for more dine accuracy of ped placement)                                                |
| options    | Extra Options for the Location you select. (See Mode Options below)                                                                                        |

**Modes Options**
| Location | Key | Options | example|
|--|--|--|--|
| world | None | None | None |
| vehicle | vehicle | vehicle entity | { vehicle = yourvehicle } |
| vehicle | seat | VS_ANY_PASSENGER, VS_DRIVER, VS_FRONT_RIGHT, VS_BACK_LEFT, VS_BACK_RIGHT, VS_EXTRA_LEFT_1, VS_EXTRA_RIGHT_1, VS_EXTRA_LEFT_2, VS_EXTRA_RIGHT_2, VS_EXTRA_LEFT_3, VS_EXTRA_RIGHT_3, VS_NUM_SEATS | { seat = "VS_FRONT_RIGHT" } |
| mount | mount | mount entity | { mount = yourmount } |

`featherPeds:Create()`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('u_f_m_tumgeneralstoreowner_01', coords.x, coords.y, coords.z, 0, 'world', false, isnetwork or false)
end)
```

## Freeze Ped



Freeze a ped where they stand

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| state     | freeze or unfreeze (true/false), default true |

`ped:Freeze()`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('u_f_m_tumgeneralstoreowner_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:Freeze()
end)
```

## Invincible Ped



Make a ped Invincible

| Parameter | Description                           |
| --------- | ------------------------------------- |
| state     | Invincible (true/false), default true |

`ped:Invincible()`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('u_f_m_tumgeneralstoreowner_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:Invincible()
end)
```

## Ped CanBeDamaged



Make a ped not take damage

| Parameter | Description                             |
| --------- | --------------------------------------- |
| state     | CanBeDamaged (true/false), default true |

`ped:CanBeDamaged()`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('u_f_m_tumgeneralstoreowner_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:CanBeDamaged()
end)
```

## Set Ped Heading



change the directon a ped is facing

| Parameter | Description                      |
| --------- | -------------------------------- |
| head      | the game world direction to face |

`ped:SetHeading()`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('u_f_m_tumgeneralstoreowner_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:SetHeading(0)
end)
```

## Set Ped Seeing Range



Change how far the ped can see

| Parameter | Description |
| --------- | ----------- |
| range     | 0.0 - 100.0 |

`ped:SeeingRange()`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('u_f_m_tumgeneralstoreowner_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:SeeingRange(70.0)
end)
```

## Set Ped Hearing Range



Change how far the ped can hear

| Parameter | Description |
| --------- | ----------- |
| range     | 0.0 - 100.0 |

`ped:HearingRange()`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('u_f_m_tumgeneralstoreowner_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:HearingRange(80.0)
end)
```

## Set Ped Can Mount



Change if a ped can mount something.

| Parameter | Description |
| --------- | ----------- |
| state     | true/false  |

`ped:CanBeMounted(true)`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('u_f_m_tumgeneralstoreowner_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:CanBeMounted(true)
end)
```

## Add Ped to Group



Add ped to a group

| Parameter | Description                  |
| --------- | ---------------------------- |
| group     | index of the group to add to |

`ped:AddPedToGroup(group)`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:AddPedToGroup(GetPedGroupIndex(PlayerPedId()))

end)
```

## Clear a ped task



Clear any active tasks

`ped:ClearTasks()`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:ClearTasks()

end)
```

## Get Task Status



Check the status of a ped task

`ped:GetTaskStatus(taskid)`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    while (ped:GetTaskStatus(0x4924437d) ~= 8) do
        Wait(1000)
    end

    print("Ped task done!")

end)
```

## Follow to offset



Add ped to a group

| Parameter | Description         |
| --------- | ------------------- |
| pedid     | id of ped to follow |

`ped:FollowToOffsetOfEntity(pedid)`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:FollowToOffsetOfEntity(PlayerPedId(), 0.0, -1.5, 0.0, 1.0, -1, 10, 1, 1)

end)
```

## Follow to offset



Add ped to a group

| Parameter | Description             |
| --------- | ----------------------- |
| skinhash  | hash of skin meta cloth |

`ped:ChangeOutfit(skinhash)`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('A_C_DogBluetickCoonhound_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:ChangeOutfit(0xDC567AF8)

end)
```

## Set Ped Blip



Set a blip on ped that follows

| Parameter | Description                                                                                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bliphash  | What the [blip](https://github.com/femga/rdr3_discoveries/blob/a4b4bcd5a3006b0c1434b03e4095d038164932f7/useful_info_from_rpfs/textures/blips_mp/README.md) should show on the map |
| title     | What the blip should say                                                                                                                                                          |

`ped:SetBlip(bliphash, title)`

Example Usage:

```lua



Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:SetBlip(953018525, 'Person')
end)
```

## Give Ped Weapon



Give a ped a weapon (they will only use it if they are set to be agro)

| Parameter            | Description                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| weaponhash           | What the [weapon](https://github.com/femga/rdr3_discoveries/blob/f729ba03f75a591ce5c841642dc873345242f612/weapons/weapons.lua) will be |
| ammocount            | how much ammo                                                                                                                          |
| forceinhand          | Force the weapon to be held                                                                                                            |
| forceinholster       | Force the weapon to be holstered                                                                                                       |
| attachpoint          | Where to attach to the body                                                                                                            |
| allowmultiplecopies  | How many of this gun can the ped have                                                                                                  |
| ignoreunlocks        | Ingore unlockables                                                                                                                     |
| permanentdegredation | permanent degredation                                                                                                                  |

`ped:GiveWeapon(weaponhash, ammocount, forceinhand, forceinholster, attachpoint, allowmultiplecopies, ignoreunlocks, permanentdegredation)`

Example Usage:

```lua


Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)
    ped:AttackTarget(PlayerPedId())

    ped:GiveWeapon(0x64356159, 500, true, true, 3, false, true, true)
end)
```

## Set Ped Flee Attribute



Enable or disable pedestrian flee attributes

| Parameter | Description                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| flag      | What [flee attribute](https://github.com/femga/rdr3_discoveries/tree/master/AI/FLEE_ATTRIBUTES) to enable/disable |
| enabled   | is active of not (true/false)                                                                                     |

`ped:FleeAtribute(flag, enabled)`

Example Usage:

```lua


Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:FleeAtribute('DISABLE_ENTER_VEHICLES', true)
end)
```

## Set Ped Combat Attributes



Enable or disable pedestrian combat attributes

| Parameter    | Description                                                                                                                                                                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributes   | This is a list of [attributes](https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_ATTRIBUTES) you want to change Example { {flag = 1, enabled = false}, {flag = 2, enabled = false} }                                                                                 |
| attackrange  | The distance for aggro                                                                                                                                                                                                                                                             |
| abilitylevel | how good or not the ped is at fighting                                                                                                                                                                                                                                             |
| movement     | What kind of movement (0: Stationary (Will just stand in place), 1: Defensive (Will try to find cover and very likely to blind fire), 2: Offensive (Will attempt to charge at enemy but take cover as well), 3: Suicidal Offensive (Will try to flank enemy in a suicidal attack)) |

`ped:SetPedCombatAttributes(attributes, attackrange, abilitylevel, movement)`

Example Usage:

```lua


Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:SetPedCombatAttributes({
        {flag = 0, enabled = false}
    }, 1, 0, 2)
end)
```

## Set Ped Combat Style



Set the pedestrians combat style

| Parameter  | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| combathash | The [combat style](https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_STYLES) for the ped |
| duration   | How long the ped has this combat style                                                                 |

`ped:SetCombatStyle(combathash, duration)`

Example Usage:

```lua


Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:SetCombatStyle('SituationAllStop', 240.0)
end)
```

## Clear Ped Combat Style



Clear the pedestrians combat style

`ped:ClearCombatStyle()`

Example Usage:

```lua


Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:ClearCombatStyle()
end)
```

## Attack Target



Set a target for the ped to attack

| Parameter | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| target    | the ped to attack (can be player)                                               |
| style     | How long the ped has this combat style (GUARD, COMBAT_ANIMAL, LAW, LAW_SHERIFF) |

`ped:AttackTarget(target, style)`

Example Usage:

```lua


Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:AttackTarget(PlayerPedId(), 'LAW')
end)
```

## Remove Ped



Remove a Ped

`ped:Remove()`

Example Usage:

```lua


Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    ped:Remove()
end)
```

## Get Ped



If there are natives this util does not yet support, you can use this to get the ped to utilize against any native.

`ped:GetPed()`

Example Usage:

```lua


Citizen.CreateThread(function()
    local coords = {
        z = 118.38395690917968, y = 802.531982421875, x = -279.46728515625
    }

    local ped = FeatherCore.Ped:Create('s_m_m_valdeputy_01', coords.x, coords.y, coords.z, 0, 'world', false)

    local rawped = ped:GetPed()

    -- Use rawped with whatever native required the ped entity
end)
```