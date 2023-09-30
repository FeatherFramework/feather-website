# Character

## Core API <Badge type="tip" text="Server Side Only" />

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

### Get All Available
```lua
FeatherCore.Character.GetAvailableCharactersFromDB(src)
```

### Get Character by src

```lua
FeatherCore.Character.GetCharacterBySrc(src)
```

### Get Character by ID

```lua
FeatherCore.Character.GetCharacterByID(charid)
```

### Remove Character (despawn)

```lua
FeatherCore.Character.RemoveCharacter(src)
```

### Update Character Field
|Parameter| Description|
|--|--|
| src | character source |
| key | the key to change in the cache/db |
| value | the value to update the key with |

`FeatherCore.Character.UpdateAttribute(src, key, val)` 
  
Example Usage:
```lua
FeatherCore.Character.UpdateAttribute(src, 'lang', 'en_us')
```

### Add to character field
|Parameter| Description|
|--|--|
| src | character source |
| key | the key to change (dollars, gold, xp, tokens) |
| amount | float/int, how much to add |

`FeatherCore.Character.Add(src, key, amount)` 
  
Example Usage:
```lua
FeatherCore.Character.Add(src, 'dollars', 10)
```

### Subtract from character field
|Parameter| Description|
|--|--|
| src | character source |
| key | the key to change (dollars, gold, xp, tokens) |
| amount | float/int, how much to subtract |

`FeatherCore.Character.Subtract(src, key, amount)` 
  
Example Usage:
```lua
FeatherCore.Character.Subtract(src, 'dollars', 5)
```

## Character API
TBD