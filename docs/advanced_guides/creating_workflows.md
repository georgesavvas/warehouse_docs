---
title: Creating Workflows
---

:::warning
This section is due a makeover, please hold tight! In the meantime I recommend you [get in touch](../feedback.md) if you require any changes to existing workflows or any new ones.
:::

Workflows exist both globally and on a per asset basis. Global ones should be more generic and fit a wide range of use cases. More specific workflows should exist on the assets themselves.

## Global workflows
To create a global workflow head over to the hamburger menu on the left side of the filter bar at the top of the UI, click on it and select “Workflows”. A list of current workflows will be displayed, as well as options to create a new one at the top.

## Asset workflows
While editing an asset, the “workflows” column will contain existing ones. You can add a new one by hitting the plus icon above the list.

## Concepts
Workflows consist of 3 things. The workflow name, the workflow filters and the graph. The filters work similarly to regular asset filters and dictate which assets the workflow will show up for. For example a workflow that processes an exr sequence should only be available on assets with exr components. The graph is the core of the workflow and is a node based set of instructions.

## Editing the graph
When editing a workflow’s graph you will notice 4 main sections. On the top left it’s the currently selected node’s parameters, below that you will find a preview of the UI users will see when running the workflow. This area can also be used to test run your workflow without leaving the editor. In the centre there’s the node graph and on the right side the logging area, which is used to display useful info when testing your workflow.
