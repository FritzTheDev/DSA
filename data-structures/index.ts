import { LinkedList} from "./LinkedList";
import { Stack } from "./Stack";
import { BST } from "./Tree";

// Linked List
const stringList = new LinkedList<string>();
console.log(`
Linked List Section
-------------------`);
// insert data
stringList.insertAtEnd("james");
stringList.insertAtStart("jack");
stringList.insertAtEnd("jose");

console.log(`Before james comes: ${stringList.search((data) => data === "james").prev.data}`);
console.log(`The entire list: ${stringList.traverse()}`);
console.log(`The list's size: ${stringList.size()}`);

// Stack
const numberStack = new Stack<number>();

console.log(`
Stack Section
-------------`);
// insert data
numberStack.push(0);
numberStack.push(2);
numberStack.push(5);

console.log(`Top value is ${numberStack.peek()}`);
console.log(`Removed top value with .pop()`);
console.log(`Now the top value is ${numberStack.peek()}`);


// Binary Search Tree
const binarySearchTree = new BST<number>();

console.log(`
BST Section
-----------`);
binarySearchTree.insert(0);
binarySearchTree.insert(4);
binarySearchTree.insert(8);
binarySearchTree.insert(3);

binarySearchTree.inOrderTraversal(binarySearchTree.root);
binarySearchTree.postOrderTraversal(binarySearchTree.root);
binarySearchTree.preOrderTraversal(binarySearchTree.root);


