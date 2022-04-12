class BSTNode<T> {
  public data: T;
  public left: BSTNode<T> | null;
  public right: BSTNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BST<T> {
  public root: BSTNode<T>;

  public search(data: T) {
    // Tree is empty
    if (!this.root) return;

    let currentNode = this.root;

    while (data !== currentNode.data) {
      // Greater than the current element
      if (data > currentNode.data) {
        if (!currentNode.right) return;
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) return;
        currentNode = currentNode.left;
      }
    }
  }

  insert(data: T) {
    // empty tree, insert the first node (the root node)
    if (!this.root) {
      this.root = new BSTNode<T>(data);
      return this.root;
    }

    // start from the root node
    let current = this.root;

    while (true) {
      if (data > current.data) {
        // search for an empty position in the right subtree
        if (current.right) {
          current = current.right;
        } else {
          // insert node
          current.right = new BSTNode<T>(data);
          return current.right;
        }
      } else {
        // search for an empty position in the left subtree
        if (current.left) {
          current = current.left;
        } else {
          // insert node
          current.left = new BSTNode<T>(data);
          return current.left;
        }
      }
    }
  }

  inOrderTraversal(node: BSTNode<T> | undefined): void {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }

  preOrderTraversal(node: BSTNode<T> | undefined): void {
    if (node) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node: BSTNode<T> | undefined): void {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data);
    }
  }
}
