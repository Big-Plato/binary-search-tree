import { quickSort } from "./modules/quickSort.js";
import { prettyPrint } from "./modules/prettyPrint.js";

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function Bst(arr) {
  const sortedArr = quickSort(arr);

  const length = () => {
    return sortedArr.length;
  };

  const buildTree = (sortedArr, start, end) => {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);

    let root = new Node(sortedArr[mid]);

    root.left = buildTree(sortedArr, start, mid - 1);
    root.right = buildTree(sortedArr, mid + 1, end);

    return root;
  };

  const root = buildTree(sortedArr, 0, sortedArr.length - 1);

  const insert = (root, value) => {
    if (root === null) return new Node(value);

    if (root.key === value) return root;

    if (value < root.key) {
      root.left = insert(root.left, value);
    } else if (value > root.key) {
      root.right = insert(root.right, value);
    }

    return root;
  };

  const getSucessor = (curr) => {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
      curr = curr.left;
    }
  };

  const deleteItem = (root, value) => {
    if (root === null) return root;

    if (root.key > value) {
      root.left = deleteItem(root.left, value);
    } else if (root.key < value) {
      root.right = deleteItem(root.right, value);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let succ = getSucessor(root);
      root.key = succ.key;
      root.right = deleteItem(root.right, succ.key);
    }
    return root;
  };

  const find = (root, value) => {
    if (root.key === value) {
      console.log(root);
      return root;
    }

    if (root.key > value) {
      root.left = find(root.left, value);
    } else {
      root.right = find(root.right, value);
    }
  };

  const levelOrder = (root, queue = []) => {
    // BFS
    if (root === null) return;

    queue.push(root);

    while (queue.length > 0) {
      const curr = queue[0];
      console.log(curr);
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
      queue.shift(); // takes off the first from queue
    }
  };

  const inOrder = (root) => {
    if (root === null) return;

    inOrder(root.left);
    console.log(root.key);
    inOrder(root.right);
  };

  const preOrder = (root) => {
    if (root === null) return;

    console.log(root.key);
    preOrder(root.left);
    preOrder(root.right);
  };

  const postOrder = (root) => {
    if (root === null) return;

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.key);
  };

  const height = (node) => {
    if (node === null) return 0;

    return 1 + Math.max(height(node.left), height(node.right));
  };

  const depth = (root, node) => {
    if (root === null) return;

    let dist = -1;

    if ((root.key === node) 
        || (dist = depth(root.left, node)) >= 0 
        || (dist = depth(root.right, node)) >= 0){
            return dist + 1;
    }
    return dist;
  };

  const isBalanced = (root) => {
    if (root === null) return true;

    let lHeight = height(root.left);
    let rHeight = height(root.right);

    if (Math.abs(lHeight - rHeight) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
  };

  const storeInOrder = (root, nodes) => {
    if (root === null) return;

    storeInOrder(root.left, nodes);

    nodes.push(root.key);

    storeInOrder(root.right, nodes);
  }

  const rebalance = (root) => {
    let nodes = [];

    storeInOrder(root, nodes);

    return buildBalancedTree(nodes, 0, nodes.length - 1);
  };

  return {
    length,
    root,
    insert,
    deleteItem,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
}

const bst1 = new Bst([1, 5, 7, 8, 4, 3, 2]);
const root = bst1.root;
bst1.insert(root, 10);
bst1.insert(root, 6);
bst1.deleteItem(root, 10);
// bst1.levelOrder(bst1.root);
bst1.insert(root, 10);
console.log(`The depth of the node is: ${bst1.depth(root, 10)}`);
console.log(height(10));
prettyPrint(root);
