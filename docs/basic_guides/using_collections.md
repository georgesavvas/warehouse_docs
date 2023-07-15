---
title: Using Collections
sidebar_position: 2
---

Warehouse uses collections to categorise assets. There are 2 sets available, Studio collections which are shared between everyone in the studio and Private collections which are unique to you.

Most collections have a set of rules that return a subset of available assets in the library. When they are nested into each other assets are filtered starting from the outermost parent. For example if you have a collection that returns assets tagged with “texture” and inside it you also have a collection that returns anything tagged with “concrete”, selecting the latter will only return assets that are both tagged with “texture” and “concrete”.
