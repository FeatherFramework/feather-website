# Instancing

## Server Side
### Create Instance
Create a player instance

|Parameter| Description|
|--|--|
| id | The id of the instance (usually an integer) |
| tsrc | The player source, if nil, it will use the source enacting the instance |

`FeatherCore.Instance.create(id, playersource)`

Example Usage:

```lua
FeatherCore.Instance.create(id)

-- OR

FeatherCore.Instance.create(id, source)
```

### Leave Instance <Badge type="tip" text="Server Side Only" />
Leave a player instance

|Parameter| Description|
|--|--|
| id | The id of the instance (usually an integer) |
| tsrc | The player source, if nil, it will use the source enacting the instance |

`FeatherCore.Instance.Leave(id, playersource)`

Example Usage:

```lua
FeatherCore.Instance.Leave(id)

-- OR

FeatherCore.Instance.Leave(id, source)
```

### Get players in instance <Badge type="tip" text="Server Side Only" />
get all players in an instance

|Parameter| Description|
|--|--|
| id | The id of the instance (usually an integer) |

`FeatherCore.Instance.getInstanceCharacters(id)`

Example Usage:

```lua
FeatherCore.Instance.getInstanceCharacters(id)
```

## Client Side
TBD