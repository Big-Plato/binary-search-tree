# Binary Search Tree (BST) Implementation in JavaScript

This repository contains a JavaScript implementation of a **Binary Search Tree (BST)**. A BST is a tree data structure where each node has at most two children, referred to as the left child and the right child. For any given node:
- All elements in the left subtree are less than the node's value.
- All elements in the right subtree are greater than the node's value.

The project includes functionality to build, manipulate, and visualize the BST, as well as utility functions like sorting and pretty-printing the tree.

## Features

- **Build Tree**: Constructs a balanced BST from a sorted array.
- **Insert**: Adds a new node to the BST.
- **Delete**: Removes a node from the BST.
- **Find**: Searches for a node with a specific value.
- **Traversal**:
  - **Level Order (BFS)**: Traverses the tree level by level.
  - **In-Order**: Traverses the tree in ascending order.
  - **Pre-Order**: Traverses the root, then the left subtree, then the right subtree.
  - **Post-Order**: Traverses the left subtree, then the right subtree, then the root.
- **Height**: Calculates the height of a node.
- **Depth**: Calculates the depth of a node.
- **Balance Check**: Determines if the tree is balanced.
- **Rebalance**: Rebalances the tree to ensure it remains balanced.
- **Pretty Print**: Visualizes the BST in a readable format in the console.

## Usage

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
```

3. Navigate to the project directory:

```bash
cd binary-search-tree
```

# Example:
```javascript
import { quickSort } from "./modules/quickSort.js";
import { prettyPrint } from "./modules/prettyPrint.js";
```

```javascript
// Create a random array
const arr = [10, 5, 15, 3, 7, 12, 18];
const bst = Bst(arr);

// Pretty print the tree
prettyPrint(bst.root);

// Insert a new node
bst.insert(bst.root, 8);
prettyPrint(bst.root);

// Delete a node
bst.deleteItem(bst.root, 10);
prettyPrint(bst.root);

// Find a node
console.log(bst.find(bst.root, 7));

// Traversal
console.log("Level Order:");
bst.levelOrder(bst.root);

console.log("In-Order:");
bst.inOrder(bst.root);

console.log("Pre-Order:");
bst.preOrder(bst.root);

console.log("Post-Order:");
bst.postOrder(bst.root);

// Check if the tree is balanced
console.log("Is Balanced:", bst.isBalanced(bst.root));

// Rebalance the tree
bst.rebalance(bst.root);
prettyPrint(bst.root);
```
## Modules
__quickSort.js__    
A utility function to sort an array using the QuickSort algorithm. This is used to ensure the input array is sorted before building the BST.

__prettyPrint.js__    
A utility function to visualize the BST in a structured and readable format in the console.

Input Array:
```javascript
[10, 5, 15, 3, 7, 12, 18]
```

```
BST Structure:

      10
    /   \
   5     15
  / \   /  \
 3   7 12  18
```
prettyPrint Output:
```
│       ┌── 18
│   ┌── 15
│   │   └── 12
└── 10
    │   ┌── 7
    └── 5
        └── 3
```

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
