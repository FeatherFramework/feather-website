# Inventory

## Initiate Inventory API

```lua
Feather = exports['feather-inventory'].initiate()
```

## Create a custom Inventory

### Register Foreign Key

<Badge type="tip" text="Server Side Only" />

Registers a Inventory Foreign Key for your script to utilize custom inventories. (This must be run on server startup)

| Parameter      | Description                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------- |
| tableName      | This must be the exact name of your table where the inventory owner will be. (e.g. stables) |
| foreignKeyType | The data type used in your tables primary key. (e.g. BIGINT UNSIGNED, VARCHAR(255), INT)    |
| primaryKeyName | The name of your primary key. (e.g. id)                                                     |

Example Usage:

```lua
Feather.Inventory.RegisterForeignKey('stables', 'BIGINT UNSIGNED', 'id')
```

### Register Inventory

<Badge type="tip" text="Server Side Only" />

Registers a custom inventory for an entity.

| Parameter        | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| tableName        | This must be the exact name of your table where the inventory owner will be. (e.g. stables) |
| id               | The Owners ID from the database (e.g. the database ID of the horse)                         |
| maxWeight        | Override the max weight for the inventory. (Pass nil to use config value)                   |
| restrictedItems  | Table of item names from the DB that you'd like to be restricted (Pass nil to no restrict)  |
| ignoreItemLimits | true to ignore the max quantity of the item or false to adhear                              |
| displayName      | A custom name for the inventory (shows on top of inventory)                                 |

Example Usage:

```lua
-- Accept all defaults
Feather.Inventory.RegisterInventory('stables', 6)

-- Override defaults
Feather.Inventory.RegisterInventory('stables', 6, 2500, {'apple', 'haycube'}, true)

-- No Restrictions
Feather.Inventory.RegisterInventory('stables', 6, 2500, nil, true)

-- Adhear to item limits. And don't restrict items
Feather.Inventory.RegisterInventory('stables', 6, 2500, nil, false)
```

## Inventory Can Hold

<Badge type="tip" text="Server Side Only" />

Verifies that the inventory you're attempting to put items in to can hold the specified items and quantity.

| Parameter   | Description                                          |
| ----------- | ---------------------------------------------------- |
| items       | Table of item names and quanity you're trying to add |
| inventoryId | UUID of the inventory you are trying to add to       |

Return Value:

This will return a table with the response from the API letting you know why it didn't work.

```lua
-- Failed Example
local returnValue = {
  status = false,
  -- One of the following messages.
  reason = 'Item is restricted.' -- First check
  reason = 'Max quantity exceeded.' -- Second check
  reason = 'Max weight exceeded.' -- Third check
}

-- Successful Example
local returnValue = {
  status = true,
  reason = ''
}
```

Example Usage:

```lua
local items = {
  {
    item = "fangs",
    quantity = 5
  },
  {
    item = "meat",
    quantity = 10
  }
}

Feather.Inventory.InventoryCanHold(items, 'c770bc77-3a77-11ee-b67f-18c04d04db03')
```

## Add Item

<Badge type="tip" text="Server Side Only" />

Add an item to a given inventory.

| Parameter   | Description                                            |
| ----------- | ------------------------------------------------------ |
| itemName    | The name of the item from the database.                |
| quantity    | The quantity of the item you'd like to add.            |
| metadata    | Any metadata you'd like to add to the item. Can be nil |
| inventoryId | The UUID of the inventory you are adding the item to. If adding to the active player, give this field src |

Example Usage:

```lua
-- Add 6 apples to my inventory
Feather.Inventory.AddItem('item_apple', 6, nil, 'c770bc77-3a77-11ee-b67f-18c04d04db03')

local metadata = { quality = 'poor', durability = 50, maxDurability = 100 }
Feather.Inventory.AddItem('item_apple', 6, metadata, 'c770bc77-3a77-11ee-b67f-18c04d04db03')

-- This adds to the active players inventory
Feather.Inventory.AddItem('item_apple', 6, nil, src)
```

## Remove Item By Name

<Badge type="tip" text="Server Side Only" />

Remove an item from a given inventory by name.

| Parameter   | Description                                             |
| ----------- | ------------------------------------------------------- |
| itemName    | The name of the item from the database.                 |
| quantity    | The quantity of the item you'd like to remove.          |
| inventoryId | The UUID of the inventory you are removing the item to. If removing from the active player, give this field src or nil |

Example Usage:

```lua
Feather.Inventory.RemoveItemByName('item_apple', 6)
```

## Remove Item By ID

<Badge type="tip" text="Server Side Only" />

Remove an item by its inventory ID. Only supports a single item as its targeting the primary key of the table. If you need to remove multiple items use RemoveItemByName.

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| id        | The ID of the item from the players inventory |

Example Usage:

```lua
Feather.Inventory.RemoveItemById(6)
```

## Set Metadata

<Badge type="tip" text="Server Side Only" />

Sets the metadata for a given item.

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| id        | The ID of the item from the players inventory. |
| metadata  | Table of key/value pairs to set                    |

Example Usage:

```lua
local metadata = { 
  display = 'Something to display under the item description',
  quality = 'poor',
  durability = 50,
  maxDurability = 100
}
Feather.Inventory.SetMetadata(6, metadata)
```

## Get Item

<Badge type="tip" text="Server Side Only" />

Gets an item from the Inventory Items Table

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| id        | The ID of the item from the players inventory. |

Example Usage:

```lua
Feather.Inventory.GetItem(6)
```

## GetItemCount

<Badge type="tip" text="Server Side Only" />

Retrieves the amount of a specific item a player has. Returns the quantity.

| Parameter   | Description                               |
| ----------- | ----------------------------------------- |
| itemName    | The name of the item you are looking for. |
| inventoryId | ID of the inventory, you can also feed in the src of a player instead of inventoryID   |

Example Usage:

```lua
Feather.Inventory.GetItemCount('item_train_ticket', 'c770bc77-3a77-11ee-b67f-18c04d04db03')
```

## Item Exists

<Badge type="tip" text="Server Side Only" />

Checks if an item exists in the DB.

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| itemName  | The name of the item you are looking for.  |

Example Usage:

```lua
Feather.Inventory.ItemExists('item_train_ticket')
```

## Inventory Has Item

<Badge type="tip" text="Server Side Only" />

Checks to see if a player has a specific item or items.

| Parameter | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| items     | A table of items you wish to check for. See below for an example of a properly formatted item table. |
| inventory | The inventory ID you're checking to see if it has items against. You can also feed in the src of a player instead of inventoryID                                    |

Example Usage:

```lua
local itemsToCheckFor = {
  {
    name = 'apple',
    quantity = 5
  },
  {
    name = 'jars',
    quantity = 2
  }
}

Feather.Inventory.PlayerHasItems(itemsToCheckFor, 'c770bc77-3a77-11ee-b67f-18c04d04db03')
```

## Register Usable Item

<Badge type="tip" text="Server Side Only" />

Registers a usable item with Feather Inventory

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| itemName  | The name of the item you are registering a call back for.       |
| callback  | A closure with the logic you will be using upon use of the item |

Example Usage:

```lua

Feather.Inventory.RegisterUsableItem('item_apple', function (item)
  print('You ate an apple!')
end)
```

## Can Hold/Store Item

<Badge type="tip" text="Server Side Only" />

Check to see if a player can store an item

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| items  | Table of items and their quantity. e.g. { {item="apple", quantity=5}, {item="matches", quantity=10} }      |
| inventoryId  | Player Source or Inventory UUID |

```lua
local canHold = Feather.Inventory.InventoryCanHold({ {item="apple", quantity=5}, {item="matches", quantity=10} }, src)

-- Success response { status = true, message = '' }

-- Failed response { status = false, message = 'Max Quantity Exceeded.' }
```

## Open Inventory ServerSide

<Badge type="tip" text="Server Side Only" />

Open an inventory (This is built into inventory with keypress, but if you would like to do so programatically)

```lua

-- Open player inventory
Feather.Inventory.OpenInventory(src, nil, 'player')

-- Open secondary/custom inventory
Feather.Inventory.OpenInventory(src, 'c770bc77-3a77-11ee-b67f-18c04d04db03')
```

## Close Inventory ServerSide

<Badge type="tip" text="Server Side Only" />

Close an inventory (This is built into inventory with keypress, but if you would like to do so programatically)

```lua
Feather.Inventory.CloseInventory(src)
```

## Open Inventory ClientSide

<Badge type="warning" text="Client Side Only" />

Open an inventory (This is built into inventory with keypress, but if you would like to do so programatically)

```lua

Feather.Inventory.Open(nil, "player")

-- or 

Feather.Inventory.Open('5ab95e93-c590-11ee-a5cf-40b07640984b')
```

## Close Inventory ClientSide

<Badge type="warning" text="Client Side Only" />

Close an inventory (This is built into inventory with keypress, but if you would like to do so programatically)

```lua
Feather.Inventory.Close()
```

## Get Player Inventory

<Badge type="tip" text="Server Side Only" />

Get contents of a a players inventory

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| key  | the key used when registering the inventory |
| inventoryId  | Player Source or Inventory UUID |

Returns: `id`, `uuid`, `max_weight`, `ignore_item_limit`

```lua
 local _, groundInventoryID = InventoryAPI.GetInventory(src)
```

## Get Custom Inventory

<Badge type="tip" text="Server Side Only" />

Get contents of a secondary/custom inventory

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| key  | the key used when registering the inventory |
| inventoryId  | Inventory UUID |

Returns: `id`, `uuid`, `max_weight`, `ignore_item_limit`

```lua
 local _, groundInventoryID = InventoryAPI.GetCustomInventory('stables', 'c770bc77-3a77-11ee-b67f-18c04d04db03')
```

## Get Items of Inventory
Gets the items from a specified inventory

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| inventoryId  | Player Source or Inventory UUID |


```lua
 InventoryAPI.GetInventoryItems('stables', 'c770bc77-3a77-11ee-b67f-18c04d04db03')
```