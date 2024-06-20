# Keys

## Key Codes

easy game keycodes are exposed to the API.

example

```lua
Feather.KeyCodes['A'] -- returns 0x7065027D
```

## Key Events <Badge type="warning" text="Client Side Only" />

### KeyJustPressed

```lua
Feather.Keys.whenKeyJustPressed(Feather.KeyCodes['A'])
```

### Register Key Listener

```lua
Feather.Keys:RegisterListener(keycode, function ()
    -- Do something
end)
```

### Remove Key Listener

```lua
local myKeyListener = Feather.Keys:RegisterListener(keycode, function ()
    -- Do something
end)

Feather.Keys:RemoveListener({ myKeyListener.keycode, myKeyListener.postition })
```

or

```lua
local myKeyListener = Feather.Keys:RegisterListener(keycode, function ()
    -- Do something
end)

myKeyListener:RemoveListener()
```
