# Keys in React

## Overview

In React, keys are special string attributes used to identify elements in a list. They help React keep track of which items have changed, been added, or removed, which enhances the performance of list rendering by minimizing the number of DOM operations.

## Why Keys are Important

- **Performance Optimization**: Keys help React identify which items have changed, allowing it to update only those items instead of re-rendering the entire list. This makes the rendering process more efficient.
- **Stable Identity**: Keys provide a stable identity to elements within a list, ensuring that elements are preserved even if their order changes.

## How to Use Keys

### Basic Usage

When rendering a list of elements, you should assign a unique key to each element. This key should be unique among its siblings.

# Common Pitfalls
- **Using Non-Unique Keys:** Ensure that keys are unique among siblings. Repeated keys can cause unexpected behavior.
- **Dynamic Data:** When dealing with dynamic data, ensure that keys remain consistent across renders to avoid component state issues.
