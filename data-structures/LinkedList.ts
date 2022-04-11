class ListNode<T> {
  public next: ListNode<T> | null = null; // The next "Link" in the Linked List
  public prev: ListNode<T> | null = null; // The next "Link" in the Linked List
  public data: T;

  constructor(data: T) {
    this.data = data;
  }
}

interface ILinkedList<T> {
  insertAtStart(data: T): ListNode<T>;
  insertAtEnd(data: T): ListNode<T>;
  deleteNode(node: ListNode<T>): void;
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): ListNode<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null = null;

  public insertAtStart(data: T): ListNode<T> {
    const node = new ListNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  public insertAtEnd(data: T): ListNode<T> {
    const node = new ListNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      // Recursive function to find the last node: i.e. the one that doesn't have "next" set.
      const getLast = (node: ListNode<T>): ListNode<T> => {
        return node.next ? getLast(node.next) : node;
      };

      const lastNode = getLast(this.head);
      node.prev = lastNode;
      lastNode.next = node;
    }

    return node;
  }

  public deleteNode(node: ListNode<T>): void {
    if (!node.prev) {
      this.head = node.next;
    } else {
      const prevNode = node.prev;
      prevNode.next = node.next;
    }
  }

  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (node: ListNode<T>): T[] => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    };

    return addToArray(this.head);
  }

  public size(): number {
    return this.traverse().length;
  }

  public search(comparator: (data: T) => boolean): ListNode<T> | null {
    const checkNext = (node: ListNode<T>): ListNode<T> | null => {
      if (comparator(node.data)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };
    return this.head ? checkNext(this.head) : null;
  }
}
