interface IStack<T> {
  isEmpty: () => boolean;
  push: (item: T) => void;
  pop: () => T | null;
  peek: () => T | null;
}

export class ArrayStack<T> implements IStack<T> {
  private contents: T[] = [];

  public isEmpty() {
    return this.contents.length === 0;
  }

  public push(item: T): void {
    this.contents.push(item);
  }

  public pop(): T {
    if (this.isEmpty()) return null;
    return this.contents.pop();
  }

  public peek() {
    if (this.isEmpty()) return null;
    return this.contents[this.contents.length - 1];
  }
}

// Linked-List Stack
class StackNode<T> {
  public data: T;
  public next: StackNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedListStack<T> implements IStack<T> {
  private root: StackNode<T> | null = null;

  public isEmpty() {
    return !!this.root;
  }

  public push(data: T): void {
    const newNode = new StackNode<T>(data);
    newNode.next = this.root;
    this.root = newNode;
  }

  public pop(): T {
    const node = this.root;
    this.root = this.root.next;
    return node.data;
  }

  public peek(): T {
    if (this.isEmpty()) return null;
    return this.root.data;
  }
}
