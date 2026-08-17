

# Remote Procedure Callback - RPC

An RPC allows developers to easily communicate between the client and server without interrupting the runtime queue.

Learn more here: https://en.wikipedia.org/wiki/Remote_procedure_call

## Register your remote procedure

> FeatherCore.RPC.Register(name, callback [, options])

- `name<string>` - remote method name
- `callback<function>` - method function (see method callback)
- `options<table>` - optional procedure rate and payload policy

```lua
FeatherCore.RPC.Register("my-resource:doSomething", myProcedure, {
    windowMs = 1000,
    maxCalls = 5,
    maxPayloadBytes = 4096
})

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

> FeatherCore.RPC.Call(name, params, callback [, player, timeoutMs])

- `name<string>` - method name
- `params<table>` - params passed to method
- `callback<function>` - callback called when results are received
- `player<player>` - optional player source to call method on (only for server-side)
- `timeoutMs<number>` - optional callback timeout

```lua
FeatherCore.RPC.Call("my-resource:doSomethingRemote", { text = "World", delay = 1000 }, function (result, rpcError)
    if rpcError then
        print(rpcError.code, rpcError.message)
        return
    end
    print("[Example] Callback result: "..tostring(result))
end)
```

## Call RPC with async.

Calls remote method asynchronously. Can only be used inside `CreateThread`.

> FeatherCore.RPC.CallAsync(name, params [, player, timeoutMs])

- `name<string>` - method name
- `params<table>` - params passed to method
- `player<player>` - optional player source to call method on (only for server-side)
- `timeoutMs<number>` - optional callback timeout
- returns `result<any>, rpcError<table|nil>` - data or a structured timeout/rate-limit error

```lua
CreateThread(function ()
    -- Some params passed to server-side method
    local result, rpcError = FeatherCore.RPC.CallAsync("my-resource:doSomethingRemote", {
        text = "World",
        delay = 2000
    })
    if rpcError then print(rpcError.code, rpcError.message) return end
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
FeatherCore.RPC.Notify("my-resource:doSomethingRemote", { text = "World", delay = 1000 })
```

Use namespaced procedure names to avoid collisions. Notifications do not receive rate-limit errors; use `Call` when the caller needs confirmation.
