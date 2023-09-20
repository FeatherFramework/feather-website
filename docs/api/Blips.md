# Blips <Badge type="warning" text="Client Side Only" />

You can leverage Feathers built in function for map blips.

## Create a Blip


Create a marker (blip) on the players map

| Parameter | Description                                                                                                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text      | What the blip will display on the map                                                                                                                                              |
| bliphash  | The hashname of the blip ([found here](https://github.com/femga/rdr3_discoveries/blob/a4b4bcd5a3006b0c1434b03e4095d038164932f7/useful_info_from_rpfs/textures/blips_mp/README.md)) |
| scale     | How big the blip is                                                                                                                                                                |
| x         | The x coordinate in the game world                                                                                                                                                 |
| y         | The y coordinate in the game world                                                                                                                                                 |
| z         | The z coordinate in the game world                                                                                                                                                 |
| vector3   | instead of params send whole vector3 just add nil to x y z                                                                                                                         |

Example Usage:

```lua

Citizen.CreateThread(function()

    local  blip = FeatherCore.Blip:SetBlip('Gift', 'blip_special_series_1', 0.2, x, y, z, vector3 or nil)
end)
```

## Get Raw Blip


If you want to use any natives that are not yet included, you can utilize the raw blip.

```lua
Citizen.CreateThread(function()
    local  blip = FeatherCore.Blip:SetBlip('Gift', 'blip_special_series_1', 0.2, x, y, z,vector3 or nil)

    local rawblip = blip.rawblip
    -- OR
    -- local rawblip = blip:Get()

    -- use rawblip with any other native.
end)
```

## Delete a Blip


Delete a marker (blip) on the players map

```lua
Citizen.CreateThread(function()
    local  blip = FeatherCore.Blip:SetBlip('Gift', 'blip_special_series_1', 0.2, x, y, z,vecotr3 or nil)

    blip:Remove()
    -- OR
    --- FeatherCore.Blip:RemoveBlip(blip.rawblip)
end)
```

## Add Radius to Blip


Create a Radius blip

| Parameter    | Description                                                                                                                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius       | A decimal radius                                                                                                                                                                                                           |
| bliphahashsh | The hashname of the blip ([found here](https://github.com/femga/rdr3_discoveries/blob/a4b4bcd5a3006b0c1434b03e4095d038164932f7/useful_info_from_rpfs/textures/blips_mp/README.md)) [Optional, will default to -1282792512] |

Example Usage:

```lua

Citizen.CreateThread(function()
    local  blip = FeatherCore.Blip:SetBlip('Gift', 'blip_special_series_1', 0.2, x, y, z,vector3 or nil)

    blip:AddRadius(64.0, -1282792512)
    -- OR
    -- FeatherCore.Blip:AddRadius(64.0, x, y, z, -1282792512)
end)
```