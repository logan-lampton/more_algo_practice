// very similar to a binary search tree but with some different rules

// MaxBinaryHeap: parent nodes are always larger than the child nodes

// MinBinaryHeap: parent nodes are always smaller than child nodes

// Nodes in binary heaps can only have AT MOST two children
// Unlike binary search trees, there is no order to the nodes (so NOT left is smaller, right is larger)

// Binary Heaps are used to implement Priority Queues, which are VERY commonly used data structures
// Binary Heaps are also used quie a bit with graph traversal algorithms

// For any index of an array n
    // the left child is stored at 2n + 1
    // the right child is stored at 2n + 2

// For any child node at index n
    // its parent node is at index of Math.floor((n-1)/2)

// Heaps don't need a Node class

// MaxBinary Heap insertion
    // add the value to the end of the list, then it "bubbles up"

// Insert() pseudocode
    // Push the value into the values property on the heap
    // Bubble the value up to its correct spot
        // Create a variable called index which is the length of the values property - 1
        // Create a variable called parentIndex which is the floor of (index - 1)/2
        // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
            // Swap the value of the values element at the parentIndex with the value of the element property at child index
            // Set the index to be the parentIndex, and start over!

// Remove() pseudocode
    // remove the root
    // replace with the most recently added element
    // adjust the heap ("sink down")

// Remove() removes the largest element and replaces it with the last element in the heap
// Compare to the children and swap with the largest one
// Stop once there are no more children to swap with, or the children are smaller than the element

// Removing (also called extractMax)
    // replace the first value in the values property with the last one
    // pop the values property so that you can return the value at the end
    // have the new root "sink down" to the correct spot:
        // Parent index starts at 0 (the root)
        // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
        // Find the index of the right 

class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        // push the element to the array
        this.values.push(element);
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
            // if the element is smaller than or equal to the parent, stop the loop
            if(element <= parent) break;
            // set the array at parentIndex to the element
            this.values[parentIndex] = element;
            // set the array at the index of the end of the array to be the parent value
            this.values[index] = parent;
            // set the index for the new element to be where the original parent index was
            index = parentIndex;
        }
    }
    extractMax(){
        // create a variable for the largest value, which would be at index 0
        const max = this.values[0];
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
        return max;
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
                if(leftChild > element){
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                // the if statement looks to see if the element hasn't swapped with the left side AND the element value is less than the value of right child
                // making sure that it hasn't swapped with left child makes sure that the element ends up a child of the largest value between left and right child
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.insert(55);

