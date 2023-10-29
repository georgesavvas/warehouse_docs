---
title: Advanced Filtering
---

Next to the filter bar at the top of the UI you will find the filters button. Use it to get access to the full filtering features, including bitwise operations.

## Filters
Each filter looks for values on various fields on assets. A few examples are:
- [ ] A filter that looks for “hdri” in tags
- [ ] A filter that looks for components called “model”
- [ ] A filter that looks for components that end in “.exr”

## Filter Groups
A filter group contains multiple filters. It’s truthful depending on the state of the AND/OR buttons on the filter group. AND will be truthful when all filters are true, while OR is truthful when at least one of them is.

For example you can have a filter group with 2 filters inside, one looking for assets tagged with “vehicle” and the other one looking for “.abc” components. If the filter group is set to “AND” it’ll get you all assets that are both tagged with vehicle and have alembic components.
