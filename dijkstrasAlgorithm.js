// related to priority queue; uses that code
// uses a weighted graph (the edges have values)

// always initialize the shortest distance from A (starting vertex) to the other vertices as "infinity"
    // set the distance to A from A as "0"

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        // push object {}; don't need to write weight: weight, due to ES15 rules
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
}

// Simple priority queue (PQ)
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    };
    dequeue(){
        return this.values.shift();
    };
    sort(){
        this.values.sort((a, b) => a.priority - b.priority)
    };
}