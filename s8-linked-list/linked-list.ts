class ListNode<T> {
  next?: ListNode<T>

  constructor(public value: T) {
  }
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insertAt(index: number, value: T) {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds');
    }
    const node = new ListNode(value);
    if (index === 0) {
      node.next = this.root;
      this.root = node;
    } else {
      let current = this.root;
      for (let i = 0; i < index - 1; i++) {
        current = current?.next;
      }
      node.next = current?.next;
      current!.next = node;
    }
    this.length++;
  }

  removeAt(index: number) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }
    if (index === 0) {
      this.root = this.root?.next;
    } else {
      let current = this.root;
      for (let i = 0; i < index - 1; i++) {
        current = current?.next;
      }
      current!.next = current?.next?.next;
    }
    this.length--;
  }

  getNumberOfElements() {
    return this.length;
  }

  print() {
    let current = this.root;
    let result = '';
    while (current) {
      result += current.value + ' -> ';
      current = current.next;numberList.print();

    }
    console.log(result);
  }
}

const numberList = new LinkedList<number>();
numberList.add(1);
numberList.add(2);
numberList.add(3);
console.log(numberList.getNumberOfElements());
numberList.print();
numberList.insertAt(1, 4);
numberList.removeAt(2);
numberList.print();
const nameList = new LinkedList<string>();
nameList.add('Max');
nameList.add('John');
nameList.add('Fred');
console.log(nameList.getNumberOfElements());
nameList.print();
nameList.insertAt(1, 'Mary');
nameList.removeAt(2);
nameList.print();