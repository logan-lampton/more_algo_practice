class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
        //same as singly linked list Node class, with the addition of this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    //removes the node from the beginning of the list
    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head === null;
            this.tail === null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    //add one value to the front of the list
    unshift() {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let count, current;
        //working from start
        if(index <= this.length/2) {
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
        } else {
            //working from end
            count = this.length - 1;
            current = this.tail
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode != null) {
            foundNode.val = val;
            return true;
        } else {
            return false;
        }
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        // !! makes it a boolean value
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        // find using get method I created
        if(index < 0 || index >= index.length) return false;
        //removing the first item
        if(index === 0) return this.shift();
        //removing the last item
        if(index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}