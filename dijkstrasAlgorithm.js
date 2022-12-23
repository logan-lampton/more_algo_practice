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
    dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        // array to return at the end
        let path = [];
        // smallest makes it so we don't need to initialize each time on the while loop for dequeueing
        let smallest;

        // build up initial state
        // use a for in loop
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                // stop the code if we've already found the smallest
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    // compare candidate to the currenct value of the neighboring node (to see if this is a faster route from the initial value to the neighboring value, as opposed to any previously mapped edges routes)
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        // updating smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous (array on how we got to the neighbor)
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
                return path.concat(smallest).reverse();
            }
        }
    }
}

// Simple priority queue (PQ)
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    // push
    // the priority is the value (likely distance in our case) for the edge
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