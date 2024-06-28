# Character

## Core API <Badge type="tip" text="Server Side Only" />

### Detect when a character/player has spawned
Feather core sends a server and client event as soon as the player is loaded/spawned into the world.

Event: `Feather:Character:Spawned`

Example Usage:
```lua
RegisterNetEvent("Feather:Character:Spawned", function(character)
    -- character param is the character object (x, y, z, etc)
    -- Do something here now that the character is spawned
end)
```

### Create Character
Create a character in DB
|Parameter| Description|
|--|--|
| userid | the numerical id of the User |
| roldid | the numerical id of the role assigned to the user |
| firstname | the string value for firstname |
| lastname | the string value for lastname |
| dob | string in format mm-dd-yyyy |
| dollars | float value for money |
| gold | float value |
| tokens | float value |
| xp | float value |
| x | float value for position x |
| y | float value for position y |
| z | float value for position z |
| lang | string value of the active language for user |

`FeatherCore.Character.CreateCharacter(userid, roldid, firstname, lastname, dob, dollars, gold, tokens, xp, x, y, z, lang)` 
  
Example Usage:
```lua
CharacterAPI.CreateCharacter(1, 1, 'Test', 'Mcgee', '10-10-1941', 0, 0, 0, 0, 0, 0, 0, "en_us")
```

### Initiate(spawn)
|Parameter| Description|
|--|--|
| src | the source to initiate/spawn the character on |
| charid | int representation of the character id |

`FeatherCore.Character.InitiateCharacter(src, 1)`

Example Usage:
```lua
FeatherCore.Character.InitiateCharacter(src, 1)
```

### Get All Available Characters from DataBase
```lua
FeatherCore.Character.GetAvailableCharactersFromDB(src)
```

or

```lua
FeatherCore.Character.GetAllCharacters(src)
```

### Get Character

#### By Source

```lua
FeatherCore.Character.GetCharacter({ src = src })
```

#### By Character ID

```lua
FeatherCore.Character.GetCharacterByID({ id = charid })
```

### Remove Character (despawn)

```lua
local player = FeatherCore.Character.GetCharacter({ src = src })
player:RemoveCharacter()
```

### Get Character Data
```lua
local player = FeatherCore.Character.GetCharacterByID({ id = charid })
local character = player.char

print(character.xp)
```

### Update Character Field
|Parameter| Description|
|--|--|
| key | the key to change in the cache/db |
| value | the value to update the key with |

`player:UpdateAttribute(key, val)` 
  
Example Usage:
```lua
local player = FeatherCore.Character.GetCharacter({ src = src })
player:UpdateAttribute('lang', 'en_us')
```

### Add to character field
|Parameter| Description|
|--|--|
| key | the key to change (dollars, gold, xp, tokens) |
| amount | float/int, how much to add |

`player:Add(key, amount)` 
  
Example Usage:
```lua
local player = FeatherCore.Character.GetCharacter({ src = src })
player:Add('dollars', 10)
```

### Subtract from character field
|Parameter| Description|
|--|--|
| key | the key to change (dollars, gold, xp, tokens) |
| amount | float/int, how much to subtract |

`player:Subtract(src, key, amount)` 
  
Example Usage:
```lua
local player = FeatherCore.Character.GetCharacter({ src = src })
player:Subtract('dollars', 5)
```

### Logout

```lua
local player = FeatherCore.Character.GetCharacter({ src = src })
player:Logout()
```