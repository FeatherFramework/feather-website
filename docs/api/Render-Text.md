# Render <Badge type="warning" text="Client Side Only" />

Render is an API to help with in-world and on screen drawing. (Text, Sprites, etc.)

## WorldToScreen



Converts an in-world coordinate to a screen position

| Parameter     | Description       |
| ------------- | ----------------- |
| pos (vector3) | in-world position |

> Returns vector 2 screen coords.

> Returns Bool if its on screen

`object:WorldToScreen(vector3(x, y, z))`

Example Usage:

```lua

RegisterCommand('trigger', function()
    local coords, onscreen = FeatherCore.Render:WorldToScreen(GetEntityCoords(PlayerPedId()))

    print(coords.x, coords.y, onscreen)
end)
```

## WorldToHud



Converts in-world coordinate to a hud position (bounded to screen)

| Parameter     | Description       |
| ------------- | ----------------- |
| pos (vector3) | in-world position |

> Returns vector 2 screen coords

> Returns Bool if its on screen

`object:WorldToHud(vector3(x, y, z))`

Example Usage:

```lua

RegisterCommand('trigger', function()
    local coords, onscreen = FeatherCore.Render:WorldToHud(GetEntityCoords(PlayerPedId()))

    print(coords.x, coords.y, onscreen)
end)
```

## DrawSprite



Draw Sprites on screen

| Parameter        | Description                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| pos (vector2)    | table containing x and y coords of sprite position on screen                                                                                                                         |
| size (vector2)   | table containing x and y sizes (relative to screen x and y size, ranges from 0.0-1.0)                                                                                                |
| rotation (float) | number of sprite rotation in degrees                                                                                                                                                 |
| color (vector3)  | table of rgba values                                                                                                                                                                 |
| texturedict      | [Name of texture](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs) dictionary to load texture from (e.g. "CommonMenu", "MPWeaponsCommon", etc.)          |
| texturename      | [Name of texture](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs) to load from texture dictionary (e.g. "last_team_standing_icon", "tennis_icon", etc.) |

`featherRender:DrawSprite(pos, size, rotation, color, texturedict, texturename)`

Example Usage:

```lua

CreateThread(function()
    while  true  do
        Wait(0)
        local onScreen, _x, _y = GetScreenCoordFromWorldCoord(GetEntityCoords(PlayerPedId()))

        if onScreen then
            FeatherCore.Render:DrawSprite(vector2(_x, _y), vector2(0.2, 0.2), 190.0, {r: 255, g: 0, b: 0, a: 255},  "feeds", "hud_menu_4a")
        end
    end
end)

```

## Draw Rectangle



Draw a rectangle on screen

| Parameter       | Description                                                                        |
| --------------- | ---------------------------------------------------------------------------------- |
| pos (vector2)   | table containing x and y coords of sprite position on screen (ranges from 0.0-1.0) |
| size (vector2)  | table containing x and y sizes (ranges from 0.0-1.0)                               |
| color (vector3) | table of rgba values                                                               |

`featherRender:DrawRectangle(pos, size, color)`

Example Usage:

```lua

CreateThread(function()
    while  true  do
        Wait(0)
        local onScreen, _x, _y = GetScreenCoordFromWorldCoord(GetEntityCoords(PlayerPedId()))

        if onScreen then
            FeatherCore.Render:DrawRectangle(vector2(_x, _y), vector2(0.2, 0.2), {r: 255, g: 0, b: 0, a: 255})
        end
    end
end)

```

## Draw Marker



Draw a Marker in-world

| Parameter    | Description                            |
| ------------ | -------------------------------------- |
| type         |                                        |
| pos          | table containing x y and z coords      |
| dir          | table containing x y and z coords      |
| rot          | rotation of the marker                 |
| scale        | table containing x y and z scale       |
| color        | table of rgba values                   |
| bobupanddown | does it bounce (true/false)            |
| facecamera   | should it face the camera (true/false) |
| rotate       | does the marker rotate (true/false)    |
| drawonents   | (true/false)                           |

`featherRender:DrawMarker(type, pos, dir, rot, scale, color, bob, facevamera, rotate, drawonents)`

Example Usage:

```lua

CreateThread(function()
    while  true  do
        Wait(0)
        FeatherCore.Render:DrawMarker(0x50638AB9, GetEntityCoords(PlayerPedId()), vector3(0.0, 0.0, 0.0), vector3(0.0, 0.0, 0.0), vecotr3(0.15, 0.15, 0.15), {r: 255, g: 0, b: 0, a: 255}, false, false, false, false)
    end
end)

```

## Draw Text



Draw a Text on screen

| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| pos       | table containing x and y coords of text position (0-1, 0-1) |
| text      | the text to display                          |
| color     | table of rgba values                                        |
| scale     | scale of the text                                           |
| shadow    | if shadow is enabled (true/false)                           |

`FeatherCore.Render:DrawText(pos, text, color, scale, shadow)`

Example Usage:

```lua

CreateThread(function()
    while  true  do
        Wait(0)
        local onScreen, _x, _y = GetScreenCoordFromWorldCoord(GetEntityCoords(PlayerPedId()))

        if onScreen then
            FeatherCore.Render:DrawText(vector2(_x, _y), 'Feather Rules!', {r: 255, g: 0, b: 0, a: 255}, 1.0, false)
        end
    end
end)

```

## Draw Text 3D



Draw 3D Text on screen

| Parameter | Description       |
| --------- | ----------------- |
| x         | x coord           |
| y         | y coord           |
| z         | z coord           |
| text      | text to display   |
| scale     | scale of the text |
| color     | table of rgba values |
| font      | font of the text (1-16) Default: 1 |
| background| background of the text (0-64) Default: 0 |

`FeatherCore.Render:Draw3DText(pos, text, scale, color, font, background)`

Example Usage:

```lua

CreateThread(function()
    while  true  do
        Wait(0)
        local playerCoords = GetEntityCoords(PlayerPedId())
        FeatherCore.Render.Draw3DText(vector3(x, y, z), 'This will show at the coords', 0.2)
    end
end)

```