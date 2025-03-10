import { quickSort } from "./modules/quickSort.js"
import { prettyPrint } from "./modules/prettyPrint.js";

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function Bst (arr) {
    const sortedArr = quickSort(arr);

    const length = () => {
        return sortedArr.length;
    }

    const buildTree = (sortedArr, start, end) => {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);

        let root = new Node(sortedArr[mid]);

        root.left = buildTree(sortedArr, start, mid - 1);
        root.right = buildTree(sortedArr, mid + 1, end);

        return root;
    } 

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
    }

    const getSucessor = (curr) => {
        curr = curr.right;
        while(curr !== null && curr.left !== null) {
            curr = curr.left;
        }
    }

    const deleteItem = (root, value) => {
        if (root === null) return root;

        if (root.key > x) {
            root.left = deleteItem(root.left, value);
        } else if (root.key < x) {
            root.right = deleteItem(root.right, value);
        }
    }

    return { length, buildTree, root, insert }
}


const bst1 = new Bst([1, 5, 7, 8, 4, 3, 2]);
bst1.insert(bst1.root, 10);
bst1.insert(bst1.root, 6);
