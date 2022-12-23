// if using an array, push and pop is more efficient than ushift and shift
// this is because the array indexes all need to be reasigned each time you push and pop

// using a linked list is generally considered more efficient for stacks (but an array does work)

class Node {
    constructor(val){
        this.val = val;
        this.next = null;

    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}