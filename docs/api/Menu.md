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
| style             | CSS style overrides                      |
| contentslot.style | CSS style overrides for the content slot |
| draggable         | If the window can be dragged             |

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
    contentslot = {
        style = {
            ['height'] = '300px',
            ['min-height'] = '300px'
        }
    },
    draggable = true
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

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| value     | The text to display                                    |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
MyFirstPage:RegisterElement('header', {
    value = 'My First Menu',
    slot = "header",
    style = {}
})
```

## Add SubHeader to Page

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| value     | The text to display                                    |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
MyFirstPage:RegisterElement('subheader', {
    value = "First Page",
    slot = "header",
    style = {}
})
```

## Add Line to Page

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
MyFirstPage:RegisterElement('line', {
    slot = "header",
    style = {}
})
```

## Add BottomLine to Page

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
MyFirstPage:RegisterElement('bottomline', {
    -- slot = "header",
    -- style = {}
})
```

## Add TextView to Page

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| value     | The text to display                                    |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
TextDisplay = MyFirstPage:RegisterElement('textdisplay', {
    value = "Some Text",
    style = {}
})
```

## Add Input to Page

| Parameter   | Description                                                |
| ----------- | ---------------------------------------------------------- |
| label       | The text to display                                        |
| placeholder | The text to display when nothing is entered into the input |
| slot        | There are 3 slots available, (header, content, footer)     |
| style       | CSS style overrides                                        |

Example Usage:

```lua
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
    -- This gets triggered whenever the input value changes
    print("Input Triggered: ", data.value)
    inputValue = data.value
end)
```

## Add Button to Page

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| label     | The text to display                                    |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
MyFirstPage:RegisterElement('button', {
    label = "Update",
    style = {
        -- ['background-image'] = 'none',
        -- ['background-color'] = '#E8E8E8',
        -- ['color'] = 'black',
        -- ['border-radius'] = '6px'
    }
}, function()
    -- This gets triggered whenever the button is clicked
end)
```

## Add Arrows to Page

| Parameter | Description                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| label     | The text to display                                                                                                                   |
| start     | What index to default to display                                                                                                      |
| options   | This is the options to select through, this can be a string or table. If its a table you must have "display" so that a value shows up |
| slot      | There are 3 slots available, (header, content, footer)                                                                                |
| style     | CSS style overrides                                                                                                                   |

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
    }
}, function(data)
    -- This gets triggered whenever the arrow selected value changes
    print(TableToString(data.value))
end)
```

## Add Slider to Page

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| label     | The text to display                                    |
| start     | What number to start at                                |
| min       | The minimum number within the range                    |
| max       | The maximum number within the range                    |
| steps     | How many numbers to skip per slider tick               |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
MyFirstPage:RegisterElement('slider', {
    label = "Eye Color",
    start = 1,
    min = 0,
    max = 100,
    steps = 1
}, function(data)
    -- This gets triggered whenever the sliders selected value changes
    print(TableToString(data.value))
end)
```

## Add Toggle to Page

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| label     | The text to display                                    |
| start     | What boolean value to start at (true/false)            |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
MyFirstPage:RegisterElement("toggle", {
    label = "Glasses",
    start = true
}, function(data)
    -- This gets triggered whenever the toggle value changes
    print(data.value)
end)
```

## Add Custom HTML to Page

| Parameter | Description         |
| --------- | ------------------- |
| value     | The html to display |

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

## Add Slider to Page

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| total     | How many pages to show (display number) ex: 1/x        |
| current   | What page number to show (display number) ex: x/3      |
| slot      | There are 3 slots available, (header, content, footer) |
| style     | CSS style overrides                                    |

Example Usage:

```lua
MyFirstPage:RegisterElement('pagearrows', {
    slot = "footer",
    total = 3,
    current = 1,
    style = {}
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

Example Usage:

```lua
MyMenu:Open({
    -- cursorFocus = false,
    -- menuFocus = false,
    startupPage = MyFirstPage
})
```

## Close Menu

Example Usage:

```lua
MyMenu:Close()
```

## Close Menu

Example Usage:

```lua
MyMenu:Close()
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

## Full two page Example

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