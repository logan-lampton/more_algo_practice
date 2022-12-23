//trees are used in:
// HTML DOM
// Network routing
// Abstract planning out code (Abstract Syntax Tree)
// AI
// Folders in operating systems
// Computer File Systems
// JSON

// Trees come up all the time
// We will be studying binary search trees
// Binary trees - every parent can have AT MOST two children per node (0, 1, or 2 children)
// In a binary search tree:
    // Every node to the left of a parent node is always less than the parent
    // Every node to the right of a parent node is always greater than the parent


// classes below:

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        const newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(val){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}

// example creating nodes without additional methods:
    // const tree = new BinarySearchTree();
    // tree.root = new Node(10);
    // tree.root.right = new Node(15);
    // tree.root.left = new Node(7);
    // tree.root.left.right = new Node(9);

// many binary trees ignore duplicates and will get hung up if a duplicate is put in
// this tree makes duplicates return "undefined"