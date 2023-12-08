---
title: Creating Actions
---

:::warning
The Actions API is still in development and might change. Every effort will be made to repair all existing actions in case any breaking changes are introduced but if you find one that is not working as expected please [report it](../feedback.md)!
:::

Each action is a python file which lives in `/asset_library/3d/asset_library/actions`. There's 2 directories in there, one for asset actions and one for component ones.

You can use these templates to start writing your own actions:<br/>
`/asset_library/3d/asset_library/actions/asset/_asset_action.py`<br/>
`/asset_library/3d/asset_library/actions/component/_component_action.py`<br/>
You can also find these templates at the bottom of this page.

:::tip
Any filename that starts with an underscore will be ignored.
:::

Within the action files you will have access to Warehouse's python API. This is yet to be documented though but you know what to do if you need help with that!

## Asset actions
Each action should have a `LABEL` constant which is used for the UI label of the action. The filename can be anything you want and will not be displayed to the user.

There should also be a `COMP_EXTS` constant which is a list of file extensions. When a user selects an asset or assets their components get filtered by this `COMP_EXTS` list. If none of the assets components' extensions are included the action is not shown to the user.

Finally a `main` function will be called by the server when a user runs the action. The following arguments will be provided:<br/>
- asset (dict): The relevant asset in dict form.
- broadcast_data (dict): To include when broadcasting updates back to the server/users. (To be documented)

## Component Actions
Each action should have a `LABEL` constant which is used for the UI label of the action. The filename can be anything you want and will not be displayed to the user.

There should also be a `EXTS` constant which is a list of file extensions. When a user selects a component or components their extensions are filtered by this `EXTS` list. If none of the extensions are included the action is not shown to the user.

Finally a `main` function will be called by the server when a user runs the action. The following arguments will be provided:<br/>
- asset (dict): The relevant asset in dict form.
- comp_names (list): Selected component names
- broadcast_data (dict): To include when broadcasting updates back to the server/users. (To be documented)

## Templates

```py title="/asset_library/3d/asset_library/actions/asset/_asset_action.py" showLineNumbers
from warehouse_server import api


LABEL = "Action Label"
COMP_EXTS = ["abc", "jpg"]


def main(asset, broadcast_data, **kwargs):
    pass
```

```python title="/asset_library/3d/asset_library/actions/component/_component_action.py" showLineNumbers
from warehouse_server import api


LABEL = "Action Label"
EXTS = ["abc", "jpg"]


def main(asset, comp_names, broadcast_data, **kwargs):
    pass
```
