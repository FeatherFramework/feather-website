# Horses

You can leverage Feathers built in function for easy spawn and manipulate in-game horse entities.

## Create Horse

<Badge type="warning" text="Client Side Only" />

This will spawn a pedestrian in your game world

| Parameter  | Description                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelhash  | The [hash](https://github.com/femga/rdr3_discoveries/blob/f729ba03f75a591ce5c841642dc873345242f612/peds/peds_list.lua) of the model you want the ped to be |
| x          | x world position coordinate                                                                                                                                |
| y          | y world position coordinate                                                                                                                                |
| z          | z world position coordinate                                                                                                                                |
| heading    | The heading of the ped (Which way it is facing)                                                                                                            |
| gender     | Options: 'female' or 'male'                                                                                                                                |
| safeground | Should the ped spawn in a known ok location (default true, disable for more dine accuracy of ped placement)                                                |
| networked  | Should the ped be networked (default true)                                                                                                                 |

`FeatherCore.Horse:Create()`

Example Usage:

```lua
-- client side only
FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
```

## Freeze Ped

<Badge type="warning" text="Client Side Only" />

Freeze a ped where they stand

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| state     | freeze or unfreeze (true/false), default true |

`horse:Freeze()`

Example Usage:

```lua

-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
-- Freeze
horse:Freeze()
-- Unfreeze
horse:Freeze(false)
```

## Invincible Ped

<Badge type="warning" text="Client Side Only" />

Make a ped Invincible

| Parameter | Description                           |
| --------- | ------------------------------------- |
| state     | Invincible (true/false), default true |

`horse:Invincible()`

Example Usage:

```lua

-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
-- Invincible
horse:Invincible()
-- Not Invincible
horse:Invincible(false)
```

## Ped CanBeDamaged

<Badge type="warning" text="Client Side Only" />

Make a ped not take damage

| Parameter | Description                             |
| --------- | --------------------------------------- |
| state     | CanBeDamaged (true/false), default true |

`horse:CanBeDamaged()`

Example Usage:

```lua

-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
-- Can be Damaged
horse:CanBeDamaged()
-- Cannot be Damaged
horse:CanBeDamaged(false)
```

## Set Ped Heading

<Badge type="warning" text="Client Side Only" />

change the directon a ped is facing

| Parameter | Description                      |
| --------- | -------------------------------- |
| head      | the game world direction to face |

`horse:SetHeading()`

Example Usage:

```lua

-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:SetHeading(heading)
```

## Can Be Mounted

<Badge type="warning" text="Client Side Only" />

Set if the horse can be mounted or not

`horse:CanBeMounted()`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
-- Can Be Mounted
horse:CanBeMounted(heading)
-- Cannot Be Mounted
horse:CanBeMounted(heading)
```

## Set Blip

<Badge type="warning" text="Client Side Only" />

Set a blip on ped that follows

| Parameter | Description                                                                                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bliphash  | What the [blip](https://github.com/femga/rdr3_discoveries/blob/a4b4bcd5a3006b0c1434b03e4095d038164932f7/useful_info_from_rpfs/textures/blips_mp/README.md) should show on the map |
| title     | What the blip should say                                                                                                                                                          |

`horse:SetBlip()`

Example Usage:

```lua

-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:SetBlip('Horse Name', -1230993421)
```

## Set Prompt Name

<Badge type="warning" text="Client Side Only" />

Set the name on the target prompt for the horse

`horse:SetPromptName(title)`

Example Usage:

```lua
-- client side only
 local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
 MyHorse:SetPromptName(HorseName)
```

## Update Ped Variation

<Badge type="warning" text="Client Side Only" />

Should be called when making changes to things like Ped Expression and Meta Ped Outfits.

`horse:UpdatePedVariation()`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:UpdatePedVariation()
```

## Equip Meta Ped Outfit

<Badge type="warning" text="Client Side Only" />

Equip a [Meta Ped Outfit](https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_outfits.lua)

`horse:EquipMetaPedOutfit(outfitHash)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:EquipMetaPedOutfit(0x9F204EAA)
```

## Clear a ped task

<Badge type="warning" text="Client Side Only" />

Clear any active tasks

`horse:ClearTasks()`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:ClearTasks()
```

## Set Component Enabled

<Badge type="warning" text="Client Side Only" />

Equips a given component

`horse:SetComponentEnabled(component)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:SetComponentEnabled(0x150D0DAA)
```

## Remove Component

<Badge type="warning" text="Client Side Only" />

Removes a given component

`horse:RemoveComponent(component)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:RemoveComponent(0x150D0DAA)
```

## Is Mount Seat Free

<Badge type="warning" text="Client Side Only" />

Checks if a given seat is free. Default: -1 (Drivers Seat)

`horse:IsMountSeatFree(title)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:IsMountSeatFree(-1)
```

## Set Tag

<Badge type="warning" text="Client Side Only" />

Sets the title for the entity tag

`horse:SetTag(title)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:SetTag('Horse Name')
```

## Set Tag Visibility

<Badge type="warning" text="Client Side Only" />

Shows or hides the Entity Tag. Param value is the style.

```
0 - NONE,
1 - ICON,
2 - SIMPLE,
3 - COMPLEX
```

`horse:SetTagVisibility(value)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:SetTagVisibility(3)
```

## Is Tag Active

<Badge type="warning" text="Client Side Only" />

Checks to see if a tag is active for your horse

`horse:IsTagActive(value)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:IsTagActive()
```

## Set Player Owns Mount

<Badge type="warning" text="Client Side Only" />

Sets the owner of the mount (Enables Lead)

`horse:SetPlayerOwnsMount(playerPed)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:SetPlayerOwnsMount(PlayerPedId())
```

## Disable Shocking Event

<Badge type="warning" text="Client Side Only" />

Disables/Enables shocking events

`horse:DisableShockingEvents(playerPed)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
-- Disables Shocking Events
horse:DisableShockingEvents()
-- Eables Shocking Events
horse:DisableShockingEvents(false)
```

## Force Lock On

<Badge type="warning" text="Client Side Only" />

Forces lock on when targeting horse

`horse:ForceLockOn(playerPed)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
-- Forces Lock On
horse:ForceLockOn()
-- Disables Lock On
horse:ForceLockOn(false)
```

## Disable Flee From Gunshot

<Badge type="warning" text="Client Side Only" />

Disables your horse from fleeing from gunshots.

`horse:DisableFleeFromGunshot(playerPed)`

Example Usage:

```lua
-- client side only
local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
-- Disables fleeing
horse:DisableFleeFromGunshot()
-- Enables fleeing
horse:DisableFleeFromGunshot(false)
```

## Remove Ped

<Badge type="warning" text="Client Side Only" />

Remove a Ped

`horse:Remove()`

Example Usage:

```lua
-- client side only

local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:Remove()
```

## Get Horse

<Badge type="warning" text="Client Side Only" />

If you need access to the raw entity use the GetHorse class method.

`horse:GetHorse()`

Example Usage:

```lua
-- client side only

local horse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')
horse:GetHorse()
```

## Example Script

This example is to provide a way to spawn in a horse and set all of its basic flags until Feather Framework has a stables script. There are a few different commands that showcase the functionality of how this class works. This includes various components modeled after SavSin's horse. It also shocases a few scenarios and interactions available for horses.

```lua
Feather = exports['feather-core'].initiate()

local MyHorse
local HorseName = "Night Star"

RegisterCommand('horse', function()
  local x, y, z = table.unpack(GetEntityCoords(PlayerPedId()))
  local heading = GetEntityHeading(PlayerPedId())
  MyHorse = FeatherCore.Horse:Create('a_c_horse_americanstandardbred_black', x, y, z, heading, 'male')

  MyHorse:SetComponentEnabled(0x150D0DAA)
  MyHorse:SetComponentEnabled(0x127E0412)
  MyHorse:SetComponentEnabled(0x75178DD2)
  MyHorse:SetComponentEnabled(0x293E17B3)
  MyHorse:SetComponentEnabled(0x9DF8175C)
  MyHorse:SetComponentEnabled(0x4124CC49)
  MyHorse:SetComponentEnabled(0x9AD2AA40)
  MyHorse:SetComponentEnabled(0x84E5AFA)
  MyHorse:SetComponentEnabled(0xC907FCA9)
  MyHorse:SetComponentEnabled(0x5497E784)

  MyHorse:SetPlayerOwnsMount(PlayerPedId())
  MyHorse:DisableShockingEvents()
  MyHorse:ForceLockOn()
  MyHorse:DisableFleeFromGunshot()

  MyHorse:SetBlip(HorseName)
  MyHorse:SetPromptName(HorseName)
  MyHorse:SetTag(HorseName)
  MyHorse:SetTagVisibility(3)
end)

RegisterCommand('clean', function()
  MyHorse:Clean()
  MyHorse:ClearDamage()
  MyHorse:ClearBloodDamage()
end)

RegisterCommand('brush', function()
  MyHorse:PlayAnimation(PlayerPedId(), joaat('Interaction_Brush'),
    joaat('p_brushHorse02x'), 1)
end)

RegisterCommand('feed', function()
  MyHorse:PlayAnimation(PlayerPedId(), joaat('Interaction_Food'),
    joaat('s_horsnack_haycube01x'), true)
end)

RegisterCommand('wallow', function()
  MyHorse:StartScenario('WORLD_ANIMAL_HORSE_WALLOW')
end)

RegisterCommand('drink', function()
  MyHorse:StartScenario('WORLD_ANIMAL_HORSE_DRINK_GROUND')
end)

RegisterCommand('apo', function()
  RearUp()
end)

AddEventHandler('onResourceStop', function()
  MyHorse:Remove()
end)

```