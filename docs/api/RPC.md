

# Remote Procedure Callback - RPC

An RPC allows developers to easily communicate between the client and server without interrupting the runtime queue.

Learn more here: https://en.wikipedia.org/wiki/Remote_procedure_call

## Register your remote prodecure

> FeatherCore.RPC.Register(name, callback)

- `name<string>` - remote method name
- `callback<function>` - method function (see method callback)

```lua
FeatherCore.RPC.Register("doSomething", myProcedure)

-- `params<table>` - params passed to method by remote caller
-- `res<function>` - function for returning values to the rpc call asynchronously
-- `player<player>` - player who called this method (only for server-side)
function myProcedure(params, res, player)
    return res("Hello "..tostring(params.text)..", "..GetPlayerName(player))

    -- The return is asynchronous, example:
    -- Citizen.SetTimeout(1000, function ()
    --    res("Hello from server (but delayed)")
    --end)
    -- WARNING: If you return anything from method callback, `ret` will be ignored and return value will be passed to caller
end
```

## Call RPC with inline callback.

Calls remote method.

> FeatherCore.RPC.Call(name, params, callback [, player])

- `name<string>` - method name
- `params<table>` - params passed to method
- `callback<function>` - callback called when results are received
- `player<player>` - optional player source to call method on (only for server-side)

```lua
FeatherCore.RPC.Call("doSomethingRemote", { text = "World", delay = 1000 }, function (result)
    print("[Example] Callback result: "..tostring(result))
end)
```

## Call RPC with async.

Calls remote method asynchronously. Can only be used inside `Citizen.CreateThread`.

> FeatherCore.RPC.CallAsync(name, params [, player])

- `name<string>` - method name
- `params<table>` - params passed to method
- `player<player>` - optional player source to call method on (only for server-side)
- returns `result<any>` - any data returned by remote method

```lua
Citizen.CreateThread(function ()
    -- Some params passed to server-side method
    local result = FeatherCore.RPC.CallAsync("doSomethingRemote", {
        text = "World",
        delay = 2000
    })
    print("[Example] Async result: "..tostring(result))
end)
```

## Notify Remote Procedure

Calls remote method without receiving return values.

> FeatherCore.RPC.Notify(name, params [, player])

- `name<string>` - method name
- `params<table>` - params passed to method
- `player<player>` - optional player source to call method on (only for server-side)

```lua
FeatherCore.RPC.Notify("doSomethingRemote", { text = "World", delay = 1000 }, function (result)
    print("[Example] Callback result: "..tostring(result))
end)
```