# Locale API

## Register Locale Translations
Registers a table of translations

> FeatherCore.locale.register(name, translation)

- `name<string>` - name of the translation
- `translation<table>` - a table of translations

```lua
FeatherCore.Locale.register("en_us", {
    loadscreen_title = "Loading the world...",
    loadscreen_subtitle = "In this dusty frontier, loading moments become tales whispered near campfires.",
    loadscreen_signature = "-Someone probably"
})
```

## Register Locale Translations
Registers a table of translations

> FeatherCore.locale.translate(src, name)

- `src` - player source (if client then 0)
-  `name<string>` - name of the translation

```lua
  -- (src, name). if on client src is 0
  FeatherCore.Locale.translate(0, "loadscreen_title")
```