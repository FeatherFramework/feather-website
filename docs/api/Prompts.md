# Prompts <Badge type="warning" text="Client Side Only" />

You can leverage Feathers built in function for easy in-game prompts.

## Setup a Prompt Group



This sets up the Prompt Group, which will allow you to attach future prompts to this group so that they can be displayed. Optionally you can set the groupId yourself. This is useful for when creating a prompt when targeting an entity. This is required.

**Example Usage:**

```lua


Citizen.CreateThread(function()
	local  PromptGroup = FeatherCore.Prompt:SetupPromptGroup() --Setup Prompt Group

    -- Optional: Setting the Prompt Group for entities. (Used for prompts when targeting)
    local promptGroupId = Citizen.InvokeNative(0xB796970BD125FCE8, targetEntity) -- PromptGetGroupIdForTargetEntity
    local  PromptGroup = FeatherCore.Prompt:SetupPromptGroup(promptGroupId)
end)
```

## Register Prompt



Once you have the Prompt Group setup, you can now register a prompt to display within the group.

| Parameter | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| title     | What the Prompt group will display next to the press button          |
| button    | The hash key                                                         |
| enabled   | If 0 you cannot click, if 1 you can click                            |
| visible   | If 0 you cannot see the prompt, if 1 you can see the group           |
| pulsing   | If true prompt will urgently pulse, if false it will not             |
| mode      | What kind of prompt. (Options: click, hold, customhold, mash, timed) |
| options   | Extra Options for the Mode you select. (See Mode Options below)      |

**Modes Options**
| Mode | Key | Options | example|
|--|--|--|--|
| click | None | None | None |
| hold | timedeventhash | SHORT_TIMED_EVENT_MP, SHORT_TIMED_EVENT, MEDIUM_TIMED_EVENT, LONG_TIMED_EVENT, RUSTLING_CALM_TIMING, PLAYER_FOCUS_TIMING, PLAYER_REACTION_TIMING | { timedeventhash = "SHORT_TIMED_EVENT" } |
| customhold | holdtime | Miliseconds | { holdtime = 3000 }|
| mash | mashamount | > 0 | { mashamount = 20 }|
| timed | depletiontime | Miliseconds | { depletiontime = 10000}|

`PromptGroup:RegisterPrompt(title, button, enabled, visible, pulsing, mode, options)`

Example Usage:

```lua



Citizen.CreateThread(function()
	local PromptGroup = FeatherCore.Prompt:SetupPromptGroup() --Setup Prompt Group

	local firstprompt = PromptGroup:RegisterPrompt("Press Me", 0x4CC0E2FE, 1, 1, true, 'hold', {timedeventhash = "MEDIUM_TIMED_EVENT"}) --Register your first prompt

    while  true  do
        Citizen.Wait(0)
    end
end)
```

## Display Prompt Group



Now that you have a Group setup and a registered Prompt, you can now display the group!

| Parameter | Description                           |
| --------- | ------------------------------------- |
| text      | Text to display under all the prompts |

`PromptGroup:ShowGroup(text)`

Example Usage:

```lua



Citizen.CreateThread(function()
	local PromptGroup = FeatherCore.Prompt:SetupPromptGroup() --Setup Prompt Group

	local firstprompt = PromptGroup:RegisterPrompt("Press Me", 0x4CC0E2FE, 1, 1, true, 'hold', {timedeventhash = "MEDIUM_TIMED_EVENT"}) --Register your first prompt

    while  true  do
        Citizen.Wait(0)
		PromptGroup:ShowGroup("My first prompt group") --Show your prompt group
    end
end)
```

## Handle Prompt Completion Events



You can trigger code when a prompt has a completion event triggered (Example: clicked, held, etc)

| Parameter      | Description                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| hideoncomplete | Some Options may hide or disapear when completed, Set this to false to not hide. This will default to true if nothing is entered |

`firstprompt:HasCompleted()`

Example Usage:

```lua



Citizen.CreateThread(function()
	local  PromptGroup = FeatherCore.Prompt:SetupPromptGroup() --Setup Prompt Group

	local firstprompt = PromptGroup:RegisterPrompt("Press Me", 0x4CC0E2FE, 1, 1, true, 'hold', {timedeventhash = "MEDIUM_TIMED_EVENT"}) --Register your first prompt

    while  true  do
        Citizen.Wait(0)

        --Show your prompt group
		PromptGroup:ShowGroup("My first prompt group")

		-- Lets listed for the prompt click and enact some code!
        if firstprompt:HasCompleted() then
            print("First Prompt Completed!")
        end
    end
end)
```

## Handle Prompt Failure Events



You can trigger code when a prompt has a failure event triggered (Example: timed, mashed)

| Parameter      | Description                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| hideoncomplete | Some Options may hide or disapear when completed, Set this to false to not hide. This will default to true if nothing is entered |

`firstprompt:HasFailed()`

Example Usage:

```lua



Citizen.CreateThread(function()
	local  PromptGroup = FeatherCore.Prompt:SetupPromptGroup() --Setup Prompt Group

	local firstprompt = PromptGroup:RegisterPrompt("Press Me", 0x4CC0E2FE, 1, 1, true, 'hold', {timedeventhash = "MEDIUM_TIMED_EVENT"}) --Register your first prompt

    while  true  do
        Citizen.Wait(0)

        --Show your prompt group
		PromptGroup:ShowGroup("My first prompt group")

		-- Lets listed for the prompt click and enact some code!
        if firstprompt:HasCompleted() then
            print("First Prompt Completed!")
        end

        if firstprompt:HasFailed() then
            print("First Prompt Failed!")
        end
    end
end)
```

## Delete Prompt



Remove a prompt completely

`firstprompt:DeletePrompt()`

Example Usage:

```lua



Citizen.CreateThread(function()
	local  PromptGroup = FeatherCore.Prompt:SetupPromptGroup() --Setup Prompt Group

	local firstprompt = PromptGroup:RegisterPrompt("Press Me", 0x4CC0E2FE, 1, 1, true, 'hold', {timedeventhash = "MEDIUM_TIMED_EVENT"}) --Register your first prompt

    while  true  do
        Citizen.Wait(0)

        --Show your prompt group
		PromptGroup:ShowGroup("My first prompt group")

		Wait(3000)

        firstprompt:DeletePrompt()
    end
end)
```

## Toggle Prompt Visibility



Make a prompt visible or hidden

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| toggle    | true or false; true = visible, false = hidden |

`firstprompt:TogglePrompt(toggle)`

Example Usage:

```lua



Citizen.CreateThread(function()
	local  PromptGroup = FeatherCore.Prompt:SetupPromptGroup() --Setup Prompt Group

	local firstprompt = PromptGroup:RegisterPrompt("Press Me", 0x4CC0E2FE, 1, 1, true, 'hold', {timedeventhash = "MEDIUM_TIMED_EVENT"}) --Register your first prompt

    while  true  do
        Citizen.Wait(0)

        --Show your prompt group
		PromptGroup:ShowGroup("My first prompt group")

		Wait(3000)

        firstprompt:TogglePrompt(false)
    end
end)
```