# Menu API

> Create highly customizable Menus within Lua

## Initialize Menu

```lua
FeatherMenu =  exports['feather-menu'].initiate()
```

## Register Menu

| Parameter         | Description                              |
| ----------------- | ---------------------------------------- |
| top               | How far from the top the menu should be  |
| left              | How far from the left the menu should be |
| 720width          | Width of the menu on a 720p window       |
| 1080width         | Width of the menu on a 1080p window      |
| 2kwidth           | Width of the menu on a 2k window         |
| 4kwidth           | Width of the menu on a 4k window         |
| font              | custom font support                      |
| style             | CSS style overrides                      |
| contentslot.style | CSS style overrides for the content slot |
| draggable         | If the window can be dragged             |
| canclose          | If the user can close the menu with "X"  |
| keyclicks         | A key:Value list for keyclick callbacks  |
| callbacks         | open/close/topage callbacks              |

Example Usage:

```lua
local MyMenu = FeatherMenu:RegisterMenu('feather:character:menu', {
    top = '40%',
    left = '20%',
    ['720width'] = '500px',
    ['1080width'] = '600px',
    ['2kwidth'] = '700px',
    ['4kwidth'] = '900px',
    style = {
        -- ['height'] = '500px'
        -- ['border'] = '5px solid white',
        -- ['background-image'] = 'none',
        -- ['background-color'] = '#515A5A'
    },
    font = {
        -- Font cdn url
        -- url = 'https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap',
        -- fontFamily = 'Jaro',

        -- Nui file path
        -- nuiUrl = 'nui://feather-core/ui/fonts/chinese-rocks.90c60ebd.ttf',
        -- fontFamily = 'chineserock'
    },
    contentslot = {
        style = { --This style is what is currently making the content slot scoped and scrollable. If you delete this, it will make the content height dynamic to its inner content.
            ['height'] = '300px',
            ['min-height'] = '300px'
        }
    },
    draggable = true,
    --canclose = false,
    keyclicks = { -- You can use https://tqlbox.com/key-codes to find the "key" values
        ['Backspace'] = function()
            print("Backspace clicked!")
        end,
        ['Delete'] = function()
            print("Delete clicked!")
        end
    }
}, {
    opened = function()
        print("MENU OPENED!")
    end,
    closed = function()
        print("MENU CLOSED!")
    end,
    topage = function(data)
        print("PAGE CHANGED ", data.pageid)
    end
})
```

## Register Page

Register a new page to the menu

| Parameter | Description                                     |
| --------- | ----------------------------------------------- |
| PageID    | The ID of the page (Must be unique to the menu) |

Example Usage:

```lua
local MyFirstPage = MyMenu:RegisterPage('first:page')
```

## Add Header to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/b3d9f125-047a-4408-82b6-e6ca4f2ae5cb)

::: tip
This element is what is draggable, without this element, you cannot drag a menu.
:::

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| value     | The text to display                                                                                                 |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement('header', {
    value = 'My First Menu',
    slot = "header",
    style = {}
})
```

## Add SubHeader to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/a04bc28a-2742-4576-ade6-41e8aa5a8049)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| value     | The text to display                                                                                                 |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement('subheader', {
    value = "First Page",
    slot = "header",
    style = {}
})
```

## Add Line to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/8a5f0815-f920-4a84-bbc4-87181f1cba4c)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement('line', {
    slot = "header",
    style = {}
})
```

## Add BottomLine to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/b011a362-fa10-42dc-9a7e-9d8cea56cf98)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement('bottomline', {
    -- slot = "header",
    -- style = {}
})
```

## Add Text Display to Page

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| value     | The text to display                                                                                                 |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
TextDisplay = MyFirstPage:RegisterElement('textdisplay', {
    value = "Some Text",
    style = {}
})
```

## Add Input to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/22c2c9de-e6a5-44ca-ac96-882ca4a7992c)

| Parameter   | Description                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| label       | The text to display                                                                                                 |
| placeholder | The text to display when nothing is entered into the input                                                          |
| slot        | There are 3 slots available, (header, content, footer)                                                              |
| persist     | Determines if the user input value should persist when changing pages                                               |
| style       | CSS style overrides                                                                                                 |
| id          | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
local inputValue = ''
MyFirstPage:RegisterElement('input', {
    label = "My First Input",
    placeholder = "Type something!",
    -- persist = false,
    style = {
        -- ['background-image'] = 'none',
        -- ['background-color'] = '#E8E8E8',
        -- ['color'] = 'black',
        -- ['border-radius'] = '6px'
    }
}, function(data)
    -- This gets triggered whenever the input value changes
    print("Input Triggered: ", data.value)
    inputValue = data.value
end)
```

## Add TextArea to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/d7026749-50dd-4b2e-882e-b10a820e65ad)

| Parameter   | Description                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| label       | The text to display                                                                                                 |
| placeholder | The text to display when nothing is entered into the input                                                          |
| slot        | There are 3 slots available, (header, content, footer)                                                              |
| style       | CSS style overrides                                                                                                 |
| rows        | How many rows for the areatext to take up                                                                           |
| cols        | How many cols for the areatext to take up. If not set, it will default to 100% width (dynamic)                      |
| resize      | Is the textarea resizable                                                                                           |
| persist     | Determines if the user input value should persist when changing pages                                               |
| id          | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
local inputValue = ''
MyFirstPage:RegisterElement('textarea', {
    label = "My First TextArea",
    placeholder = "Type something!",
    rows = "4",
    -- cols = "14",
    resize = false,
    -- persist = false,
    style = {
        -- ['background-image'] = 'none',
        -- ['background-color'] = '#E8E8E8',
        -- ['color'] = 'black',
        -- ['border-radius'] = '6px'
    }
}, function(data)
    print("Input Triggered: ", data.value)
    inputValue = data.value
end)
```

## Add Button to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/a361d4d2-21f3-43e9-b557-7963ee59db5f)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| label     | The text to display                                                                                                 |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| sound     | Play a rdr sound effect                                                                                             |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement('button', {
    label = "Update",
    style = {
        -- ['background-image'] = 'none',
        -- ['background-color'] = '#E8E8E8',
        -- ['color'] = 'black',
        -- ['border-radius'] = '6px'
    },
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- },
}, function()
    -- This gets triggered whenever the button is clicked
end)
```

## Add Arrows to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/25f43ecf-80dd-4afe-8d41-81941c35cc02)

| Parameter | Description                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| label     | The text to display                                                                                                                   |
| start     | What index to default to display                                                                                                      |
| options   | This is the options to select through, this can be a string or table. If its a table you must have "display" so that a value shows up |
| slot      | There are 3 slots available, (header, content, footer)                                                                                |
| style     | CSS style overrides                                                                                                                   |
| sound     | Play a rdr sound effect                                                                                                               |
| persist   | Determines if the user input value should persist when changing pages                                                                 |

Example Usage:

```lua
 MyFirstPage:RegisterElement('arrows', {
    label = "Hair Color",
    start = 2,
    options = {
        {
            display = "Black",
            extra = "data"
        },
        "Brown",
        "Blonde",
        "Red",
        "Silver",
        "White"
    },
    -- persist = false,
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- },
}, function(data)
    -- This gets triggered whenever the arrow selected value changes
    print(TableToString(data.value))
end)
```

## Add Dropdown Selector to Page

| Parameter | Description                                                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| label     | The text to display                                                                                                                |
| options   | This is the options to select through, this can be a string or table. If its a table you must have "text" so that a value shows up |
| slot      | There are 3 slots available, (header, content, footer)                                                                             |
| style     | CSS style overrides                                                                                                                |
| sound     | Play a rdr sound effect                                                                                                            |

Example Usage:

```lua
 MyFirstPage:RegisterElement('dropdown', {
    label = 'Select a color',
    slot = "content",
    options = {
        { text = "Black", value = "data" },
        { text = "Brown", value = "data"},
        { text = "Blonde", value = "data"},
        { text = "Red", value = "data"},
        { text = "Silver", value = "data"},
        { text = "White", value = "data"}
    },
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- },
}, function(data)
    -- This gets triggered whenever the dropdown selected value changes
    print(TableToString(data.value))
end)
```

## Add Slider to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/9f29001b-9a2e-44ec-bc69-fad28158a193)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| label     | The text to display                                                                                                 |
| start     | What number to start at                                                                                             |
| min       | The minimum number within the range                                                                                 |
| max       | The maximum number within the range                                                                                 |
| steps     | How many numbers to skip per slider tick                                                                            |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| sound     | Play a rdr sound effect                                                                                             |
| persist   | Determines if the user input value should persist when changing pages                                               |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement('slider', {
    label = "Eye Color",
    start = 1,
    min = 0,
    max = 100,
    steps = 1,
    -- persist = false,
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- },
}, function(data)
    -- This gets triggered whenever the sliders selected value changes
    print(TableToString(data.value))
end)
```

## Add Toggle to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/9ea6e0c2-ec8c-4ed5-8a18-6085763b2523)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| label     | The text to display                                                                                                 |
| start     | What boolean value to start at (true/false)                                                                         |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| sound     | Play a rdr sound effect                                                                                             |
| persist   | Determines if the user input value should persist when changing pages                                               |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement("toggle", {
    label = "Glasses",
    start = true,
    -- persist = false,
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- }
}, function(data)
    -- This gets triggered whenever the toggle value changes
    print(data.value)
end)
```

## Add Checkbox to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/436f9739-bb5d-4c04-b029-19e61257a38d)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| label     | The text to display                                                                                                 |
| start     | What boolean value to start at (true/false)                                                                         |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| sound     | Play a rdr sound effect                                                                                             |
| persist   | Determines if the user input value should persist when changing pages                                               |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement("checkbox", {
    label = "Test",
    start = true
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- }
}, function(data)
    print(data.value)
end)
```

## Add GridSelector to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/5dd4713c-8d9d-4a1d-a198-027c6d0c45bc)

| Parameter   | Description                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| leftlabel   | The text to display on the left side of the grid                                                                    |
| rightlabel  | The text to display on the right side of the grid                                                                   |
| toplabel    | The text to display on the top of the grid                                                                          |
| bottomlabel | The text to display on the bottom of the grid                                                                       |
| maxy        | The Maximum number the grid can reach on the y axis                                                                 |
| maxx        | The Maximum number the grid can reach on the x axis                                                                 |
| arrowsteps  | The distance the circle moves when utilizing the arrow keys                                                         |
| precision   | How many decimal places (example: 1 = 1.0, 2 = 1.00)                                                                |
| slot        | There are 3 slots available, (header, content, footer)                                                              |
| style       | CSS style overrides                                                                                                 |
| sound       | Play a rdr sound effect                                                                                             |
| persist     | Determines if the user input value should persist when changing pages                                               |
| id          | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement('gridslider', {
    leftlabel = 'thin',
    rightlabel = 'heavy',
    toplabel = 'tall',
    bottomlabel = 'short',
    maxx = 1,
    maxy = 1,
    arrowsteps = 10,
    precision = 1
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- }
}, function(data)
    print(TableToString(data.value)) -- Returns {x = 0, y = 0}
end)
```

## Add Custom HTML to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/ff2f5be7-909d-4c9e-abda-fde2d2cb3d2f)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| value     | The html to display                                                                                                 |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement("html", {
    value = {
        [[
            <img width="100px" height="100px" style="margin: 0 auto;" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" />
            <div style="color:red;">
                HELLO!!
            </div>
        ]]
    }
})
```

## Add Page Arrows to Page

![image](https://github.com/FeatherFramework/feather-website/assets/10902965/541c7387-2517-4ecf-a8b3-d4d8314f9046)

| Parameter | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| total     | How many pages to show (display number) ex: 1/x                                                                     |
| current   | What page number to show (display number) ex: x/3                                                                   |
| slot      | There are 3 slots available, (header, content, footer)                                                              |
| style     | CSS style overrides                                                                                                 |
| sound     | Play a rdr sound effect                                                                                             |
| persist   | Determines if the user input value should persist when changing pages                                               |
| id        | A custom ID you can give an element (This will prevent duplicates if you are registering an element more than once) |

Example Usage:

```lua
MyFirstPage:RegisterElement('pagearrows', {
    slot = "footer",
    total = 3,
    current = 1,
    style = {},
    -- persist = false,
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- }
}, function(data)
    if data.value == 'forward' then
        print('Forward')
    else
        print('BACK')
    end
end)
```

## Open Menu

| Parameter   | Description                          |
| ----------- | ------------------------------------ |
| cursorFocus | Nui Cursor Focus (true/false)        |
| menuFocus   | Nui Menu Focus (true/false)          |
| startupPage | What page to default to when opening |
| sound       | Play a rdr sound effect              |

Example Usage:

```lua
MyMenu:Open({
    -- cursorFocus = false,
    -- menuFocus = false,
    startupPage = MyFirstPage,
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- }
})
```

## Close Menu

| Parameter | Description             |
| --------- | ----------------------- |
| sound     | Play a rdr sound effect |

Example Usage:

```lua
MyMenu:Close({
    -- sound = {
    --     action = "SELECT",
    --     soundset = "RDRO_Character_Creator_Sounds"
    -- }
})
```

## Route to/Show a Page

> The menu must be open already

Example Usage:

```lua
MyFirstPage:RouteTo()
```

## Update a Page Element's data

> The parameters and values are based on the original element registered.

Example Usage:

```lua
TextDisplay:update({
    value = "Hello World!",
    style = {}
})
```

Eample 2 usage:

> Override a value like a slider

```lua
SliderDisplay:update({
    value = 1
})
```

## Unregister Element

Example Usage:

```lua
TextDisplay:UnRegister()
```

## Events

### Opened Menu

```lua
RegisterNetEvent('FeatherMenu:opened', function(menudata)
  print("MENU OPENED", menudata.menuid)
end)
```

### Closed Menu

```lua
RegisterNetEvent('FeatherMenu:closed', function(menudata)
  print("MENU CLOSED", menudata.menuid)
end)
```

### Page Routed

```lua
RegisterNetEvent('FeatherMenu:Page:RoutedTo', function(menudata)
  print("MENU OPENED", menudata.menuid, menudata.pageid)
end)
```

## Full three page Example

![image](https://github.com/FeatherFramework/feather-menu/assets/10902965/a6b73f8e-a851-4478-b332-5b20559ac9a5)
![image](https://github.com/FeatherFramework/feather-menu/assets/10902965/2a689fa2-b51d-426a-a754-a8287ed4c755)

```lua
local function TableToString(o)
    if type(o) == 'table' then
        local s = '{ '
        for k, v in pairs(o) do
            if type(k) ~= 'number' then k = '"' .. k .. '"' end
            s = s .. '[' .. k .. '] = ' .. TableToString(v) .. ','
        end
        return s .. '} '
    else
        return tostring(o)
    end
end

FeatherMenu =  exports['feather-menu'].initiate()

RegisterCommand('TestMenu', function()
    local MyMenu = FeatherMenu:RegisterMenu('feather:character:menu', {
        top = '40%',
        left = '20%',
        ['720width'] = '500px',
        ['1080width'] = '600px',
        ['2kwidth'] = '700px',
        ['4kwidth'] = '900px',
        style = {
            -- ['height'] = '500px'
            -- ['border'] = '5px solid white',
            -- ['background-image'] = 'none',
            -- ['background-color'] = '#515A5A'
        },
        contentslot = {
            style = {
                ['height'] = '300px',
                ['min-height'] = '300px'
            }
        },
        draggable = true
    })

    local MyFirstPage = MyMenu:RegisterPage('first:page')
    local MySecondPage = MyMenu:RegisterPage('second:page')
    local MyThirdPage = MyMenu:RegisterPage('third:page')

    ------ FIRST PAGE CONTENT  ------
    MyFirstPage:RegisterElement('header', {
        value = 'My First Menu',
        slot = "header",
        style = {}
    })

    MyFirstPage:RegisterElement('subheader', {
        value = "First Page",
        slot = "header",
        style = {}
    })

    MyFirstPage:RegisterElement('line', {
        slot = "header",
    })


    local inputValue = ''
    MyFirstPage:RegisterElement('input', {
        label = "My First Input",
        placeholder = "Type something!",
        style = {
            -- ['background-image'] = 'none',
            -- ['background-color'] = '#E8E8E8',
            -- ['color'] = 'black',
            -- ['border-radius'] = '6px'
        }
    }, function(data)
        print("Input Triggered: ", data.value)
        inputValue = data.value
    end)

    MyFirstPage:RegisterElement('button', {
        label = "Update",
        style = {
            -- ['background-image'] = 'none',
            -- ['background-color'] = '#E8E8E8',
            -- ['color'] = 'black',
            -- ['border-radius'] = '6px'
        }
    }, function()
        TextDisplay:update({
            value = inputValue,
            style = {}
        })
    end)

    MyFirstPage:RegisterElement('arrows', {
        label = "Hair Color",
        start = 2,
        options = {
            {
                display = "Black",
                extra = "data"
            },
            "Brown",
            "Blonde",
            "Red",
            "Silver",
            "White"
        }
    }, function(data)
        print(TableToString(data.value))
    end)


    MyFirstPage:RegisterElement('slider', {
        label = "Eye Color",
        start = 1,
        min = 0,
        max = 100,
        steps = 1
    }, function(data)
        print(TableToString(data.value))
    end)

    MyFirstPage:RegisterElement("toggle", {
        label = "Glasses",
        start = true
    }, function(data)
        print(data.value)
    end)

    MyFirstPage:RegisterElement("html", {
        value = {
            [[
                <img width="100px" height="100px" style="margin: 0 auto;" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" />
                <div style="color:red;">
                    HELLO!!
                </div>
            ]]
        }
    })


    MyFirstPage:RegisterElement('bottomline')

    TextDisplay = MyFirstPage:RegisterElement('textdisplay', {
        value = "Some Text",
        style = {}
    })

    MyFirstPage:RegisterElement('line', {
        slot = "footer",
    })

    MyFirstPage:RegisterElement('pagearrows', {
        slot = "footer",
        total = 3,
        current = 1,
        style = {}
    }, function(data)
        if data.value == 'forward' then
            MySecondPage:RouteTo()
        else
            print('BACK')
        end
    end)


    ------ SECOND PAGE CONTENT  ------
    MySecondPage:RegisterElement('header', {
        value = 'My First Menu',
        slot = "header",
        style = {}
    })

    MySecondPage:RegisterElement('subheader', {
        value = "Second Page",
        slot = "header",
        style = {}
    })

    MySecondPage:RegisterElement('line', {
        slot = "header",
    })

    MySecondPage:RegisterElement('header', {
        value = 'Awesome Stuff!',
        draggable = false,
        style = {}
    })


    MySecondPage:RegisterElement('line', {
        slot = "footer",
    })

    MySecondPage:RegisterElement('pagearrows', {
        slot = "footer",
        total = 3,
        current = 2,
        style = {}
    }, function(data)
        if data.value == 'forward' then
            MyThirdPage:RouteTo()
        else
            MyFirstPage:RouteTo()
        end
    end)

    ------ THIRD PAGE CONTENT  ------
    MyThirdPage:RegisterElement('header', {
        value = 'My First Menu',
        slot = "header",
        style = {}
    })

    MyThirdPage:RegisterElement('subheader', {
        value = "Third Page",
        slot = "header",
        style = {}
    })

    MyThirdPage:RegisterElement('line', {
        slot = "header"
    })

    MyThirdPage:RegisterElement('line', {
        slot = "footer"
    })

    MyThirdPage:RegisterElement('pagearrows', {
        slot = "footer",
        total = 3,
        current = 3,
        style = {}
    }, function(data)
        if data.value == 'forward' then
            print('FORWARD')
        else
            MySecondPage:RouteTo()
        end
    end)

    MyMenu:Open({
        -- cursorFocus = false,
        -- menuFocus = false,
        startupPage = MyFirstPage
    })
end)

```

## Use Notification

| Parameter       | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| type            | info, success, warning, error, default                               |
| hideProgressBar | hide the progressbar (true/false)                                    |
| rtl             | rtl language (true/false)                                            |
| transition      | bounce, flip, slide, zoom                                            |
| autoClose       | time to close in milliseconds                                        |
| position        | top-left top-center top-right bottom-left bottom-center bottom-right |
| style           | CSS style overrides                                                  |
| toastStyle      | CSS style overrides                                                  |
| progressStyle   | CSS style overrides                                                  |
| icon            | Can copy/paste emoji here. Or set to true for default icons.         |

Example Usage:

```lua
FeatherMenu:Notify({ message = 'hello world' }, function(data)
 -- Callback on opened and closed.
 print(data.type .. ' : ' .. data.id)
end)
```

## **ImageBoxContainer Registration**

This component allows you to register multiple **image boxes** inside a container, where each image box can have a label, tooltip, image, and sound. The container will listen for **click events** and can display descriptions dynamically.

<img width="800" height="450" alt="image" src="https://github.com/user-attachments/assets/c189e413-7e13-4554-af70-d291c3f5da5d" />


| Parameter  | Description                                                                                                    |
|------------|----------------------------------------------------------------------------------------------------------------|
| `slot`     | Defines where the image box container will be placed (e.g., `header`, `content`, `footer`).                    |
| `items`    | An array of **image box items**, each containing `type`, `index`, `data`, and other properties.                |
| `type`     | Specifies that the element is an `imagebox`.                                                                   |
| `index`    | A unique identifier for each image box within the container.                                                   |
| `data`     | Contains the properties for the individual `imagebox`.                                                         |
| `label`    | The label displayed below the image.                                                                           |
| `tooltip`  | The description shown when hovering over the image box.                                                        |
| `style`    | CSS style overrides for customizing the appearance of the image box.                                           |
| `img`      | The image URL to be displayed in the image box.                                                                |
| `disabled` | If set to `true`, the image box will be visually dimmed and non-interactive.                                   |
| `sound`    | Optional sound configuration that plays when the image box is clicked.                                         |

## **Example Usage:**

```lua
MyFirstPage::RegisterElement('imageboxcontainer', {
    slot = "content",
    items = {
        {
            type = "imagebox",
            index = 201,
            data = {
                img = "",
                label = "x5",
                tooltip = "Restores health",
                style = { margin = "5px" },
                sound = { action = "SELECT", soundset = "HUD_SHOP" },
                disabled = false
            }
        },
        {
            type = "imagebox",
            index = 202,
            data = {
                img = "nui://feather-inventory/ui/images/items/adjust_seat.png",
                label = "HOT",
                tooltip = "Keeps you hydrated",
                style = { margin = "5px" },
                sound = { action = "SELECT", soundset = "HUD_SHOP" },
                disabled = false
            }
        },
        -- Additional Image Boxes
        {
            type = "imagebox",
            index = 203,
            data = {
                img = "nui://feather-inventory/ui/images/items/clothing_hl_player_hat_045_1.png",
                label = "99",
                tooltip = "Tasty snack",
                style = { margin = "5px" },
                sound = { action = "SELECT", soundset = "HUD_SHOP" }
            }
        },
        {
            type = "imagebox",
            index = 204,
            data = {
                img = "nui://feather-inventory/ui/images/items/clothing_hl_player_hat_046_1.png",
                label = "★",
                tooltip = "Can revive your horse",
                style = { margin = "5px" },
                sound = { action = "SELECT", soundset = "HUD_SHOP" }
            }
        }
    }
}, function(data)
    print("[ImageBoxContainer] Child clicked:")
    print(json.encode(data.child))  -- This prints the clicked image box data
end)
