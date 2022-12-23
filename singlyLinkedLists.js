// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    //unshift adds a node to the beginning of the list
    //the val is the value we want the first node we are unshifting to be
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //takes in an index and then counts through the list to return the object at that index
    get(i) {
        if(i < 0 || i >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== i) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(i, val) {
        let foundNode = this.get(i);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(i, val) {
        if(i < 0 || i > this.length) return false;
        if(i === this.length) return !!this.push(val);
        if(i === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(i -1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(i) {
        if(i < 0 || index >= this.length) return undefined;
        if(i === 0) return this.shift();
        if(i === this.length - 1) return this.pop();
        let previousNode = this.get(i - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList()

list.push("HELLO")
list.push("GOODBYE")