# PrettyPrint

Feather provides an enhanced `print` functionality to the default Lua.

## Features

- Table printing support
- ANSI Color and text formatting support

## Setup

```lua
Citizen.CreateThread(function()
    --Use print as you normally would.
    FeatherCore.Print('%{bold} %{red}TEST', {
        hello = "world"
    })

    -- Print Output: TEST, { "hello" = "world"}
end)
```

## Colors

Colors and backgrounds can be used usilizing the `%{attribute}` format

| Type             | format                                           | Description                   |
| ---------------- | ------------------------------------------------ | ----------------------------- |
| Text Format      | %{bold}                                          | Make Text Font weight heavier |
| Text Color       | %{reset}                                         | Set back to default color     |
| Text Color       | %{red}                                           |                               |
| Text Color       | %{green}                                         |                               |
| Text Color       | %{orange}                                        |                               |
| Text Color       | %{navy}                                          |                               |
| Text Color       | %{magenta} or %{purple}                          |                               |
| Text Color       | %{cyan}                                          |                               |
| Text Color       | %{gray} or %{grey}                               |                               |
| Text Color       | %{lightgray} or %{lightgrey}                     |                               |
| Text Color       | %{peach}                                         |                               |
| Text Color       | %{lightgreen}                                    |                               |
| Text Color       | %{yellow}                                        |                               |
| Text Color       | %{blue}                                          |                               |
| Text Color       | %{pink}                                          |                               |
| Text Color       | %{babyblue}                                      |                               |
| Background Color | %{highlight red}                                 |                               |
| Background Color | %{highlight green}                               |                               |
| Background Color | %{highlight orange}                              |                               |
| Background Color | %{highlight navy}                                |                               |
| Background Color | %{highlight magenta}                             |                               |
| Background Color | %{highlight cyan}                                |                               |
| Background Color | %{highlight gray} or %{highlight grey}           |                               |
| Background Color | %{highlight lightgray} or %{highlight lightgrey} |                               |
| Background Color | %{highlight peach}                               |                               |
| Background Color | %{highlight lightgreen}                          |                               |
| Background Color | %{highlight yellow}                              |                               |
| Background Color | %{highlight blue}                                |                               |
| Background Color | %{highlight pink}                                |                               |
| Background Color | %{highlight babyblue}                            |                               |

Example Usage:

```lua
    print('%{blue}moon over the rainbow')
```

![image](https://user-images.githubusercontent.com/10902965/206995197-bf635488-75a1-4f40-866a-080b5f09b065.png)
