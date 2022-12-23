// Generally a binary heap and I will be using binaryHeap.js for much of the code.

// A priority queue is a data structure where each element has a priority. Elements with higher priority are served before elements with lower priority.
// Oftentimes a lower number denotes a higher priority Ex: 1 is a higher priority than 10
// A very naive priority queue:
    // Make a list and assign a priority number to each task
    // Iterate over the list each time to find the highest priority item

// Priority queues have a node class, unlike binary heaps

// value in the node doesn't matter, since we will be using the priority to organize

// in this example, we use a min binary heap (so the lowest value bubbles to the top)

class Node {
    // Node class takes in a value and a priority
    constructor(val){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    // for a priority queue, change insert to take in a value and priority
    // for priority queue, the insert method is called, "enqueue"
    enqueue(val, priority){
        // add node to insert
        let newNode = new Node(val, priority);
        // push the new Node to the array
        this.values.push(newNode);
        // call bubbleUp method we create on the array
        this.bubbleUp();
    }
    bubbleUp(){
        // store a variable that is the new elements index, which is the array length - 1 (since arrays start at an index of 0)
        let index = this.values.length - 1
        // store the element in a variable (called element) which sets it to the the array at the index that we are adding the element at
        const element = this.values[index]
        // the while loop will run until the element bubbles to index 0, or is larger than the parent(s) (the break condition)
        while(index > 0){
            // find the parentIndex using floor of (n -1)/2
            let parentIndex = Math.floor((index - 1)/2);
            // define parent as the parentIndex
            let parent = this.values[parentIndex];
            // DIFFERENT THAN BINARY HEAP:
                // Want to compare if element.priority is less than parent.priority
                // to refactor to a min binary heap, want to make sure if the element priority is a higher value than the parent.priority, instead of the previous comparision to see if element is <= to parent
            if(element.priority >= parent.priority) break;
            // set the array at parentIndex to the element
            this.values[parentIndex] = element;
            // set the array at the index of the end of the array to be the parent value
            this.values[index] = parent;
            // set the index for the new element to be where the original parent index was
            index = parentIndex;
        }
    }
    // for a priority queue, "extractMax" is called "dequeue"
    dequeue(){
        // create a variable for the largest value, which would be at index 0
        // DIFFERENT: refer to const as min, instead of max, as we are now referring to the smallest value
        const min = this.values[0];
        // create a variable for the last value in the array and remove it via .pop()
        const end = this.values.pop();
        // creating an edge case for if there is only one item in the array, so that it doesn't keep popping and then adding itself again
        if(this.values.length > 0){
            // set the value in the index 0 position to be the end value that we just popped off
            this.values[0] = end;
            // call the method we will create for the "sink down"
            this.sinkDown();
        }
        // at the end of the method, return the max value, which we removed from the final array
        return min;
    }
    sinkDown(){
        // set a variable for the index and set it to the 0 index
        let index = 0;
        // create a variable for the length of the array
        const length = this.values.length;
        // create a variable for the element "sinking down" setting it to start at the 0 index of the array
        const element = this.values[0];
        while(true){
            // create a variable that grabs the left child index
            let leftChildIndex = 2 * index + 1;
            // create a variable that grabs the right child index
            let rightChildIndex = 2 * index + 2;
            // creating variables for left and right child, but leaving blank, since there is no guarantee that the element will have either child
            let leftChild, rightChild;
            // create variable to keep track of any swaps IF any swaps are made
            let swap = null;

            // if the left child index is less than the length of the array, set the left child to be the value of the left child index
            // Essentially, we are checking to see if there is a left child; if so, we set the value of the left child to what is at the index of the left child in the array
            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                // if leftChild value is greater than the value of the element, swap = the index of the left child
                // So the element index will swap with the index of left child
                // DIFFERENT THAN BINARY HEAP
                    // add compare the priority of leftChild with the priority of the element we are comparing
                if(leftChild.priority < element.priority){
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                // the if statement looks to see if the element hasn't swapped with the left side AND the element value is less than the value of right child
                // making sure that it hasn't swapped with left child makes sure that the element ends up a child of the largest value between left and right child
                if(
                    // DIFFERENT! Compare the priorities
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    // if we are certain that the right index value is greater than the element value and left child value, then the element index will swap with the right child index
                    swap = rightChildIndex;
                }
            }
            // if no swaps are made, we will break the loop; the conditional to break the loop
            if(swap === null) break;
            // if swap has a value, we move on...
            // the element's original index will become that of the swap variable (which will either be the index of right child or left child, based on our previous code)
            this.values[index] = this.values[swap];
            // Set the value for the index for swap in the array to be the value of element; so the swap that makes the element into the spot that the child was in
            this.values[swap] = element;
            // update the index of the element to that of where you moved it
            index = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

// In the real world, priority queues often will also compare when the request was made, the resources needed, etc.