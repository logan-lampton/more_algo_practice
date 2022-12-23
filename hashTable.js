// Hash tables (also known as hash maps) are incredibly common and built into many languages, including JavaScript, Python and Ruby

// Hash tables are used to store key-value pairs
// They are like arrays, but the keys are not ordered
// Unlike arrays, hash tables are FAST for all of the following operations:
    // Finding values
    // Adding new values
    // Removing values

// Hash table examples in languages:
    // Python has Dictionaries (or Dict)
    // JS has Objects and Maps
        // (Objects have some restrictions, but are basically hash tables)
    // Java, Go, and Scala have Maps
    // Ruby has Hashes


// Making a hash table is reinventing the wheel, but we are building a model to better understand HOW they work
// Intro example:
    // Want human and computer readability
    // We'll be using an array
    // In order to look up values by key,  we need a way to convert keys into valid array indices
        // A function that performs this task, is called a hash function

// Conceptually:
    // We are storing a key and value at a certain index
    // To recall the data, we ask for what the index is of the key, then the value is returned

    //Hash function in our case, we be used to convert a key into a value
    //Hash functions have many other uses
        //  Hash tables, to protect data, store data, authenticate you when you log in on a website, crypto-currency, and much more!
    
// The definition of a basic hash function is a function that takes data of an arbitrary size (whether it's a thousand characters or a million characters) and it spits out data of a fixed size
    // It maps an input to an output of a fixed size
    // The output is the same size, no matter the size of the input
        // Ex: the hash result for "Hello this is a full sentence string!", is the same size as the hash result for "a"
            // Made up has results: 2378410983 and -9082631346

// What makes a good hash
    // (Though the example is not a cryptographically secure one)
    // 1. Fast (i.e. constant time)
    // 2. Distributes values uniformly
        // Doesn't cluster outputs at specific indices, but distributes them uniformly
        // NOT a dumb array that always returns everything at the middle of the array
    // Deterministic
        // (same input yields the same output)

// Example of a bad, slow Hash
function slowHash(key){
    for(var i = 0; i < 10000; i++){
        console.log("everyday i'm hashing");
    }
    return key[0].charCodeAt(0);
}
// bad because it loops 10,000 times, printing each time and then does the hashing

// Example of a bad, non-deterministic hash, since the returned output is not always the same for a given input
function randomHash(key){
    return Math.floor(Math.random() * 1000)
}

// Dealing with collisions
    // Even with a large array and a great hash function, collisions are inevitable
    // There are many strategies for dealing with collisions, but we'll focus on two:
        // 1. Separate Chaining
        // 2. Linear Probing

// Separate Chaining
    // With separate chaining, at each index in our array, we store values using a more sophisticated data structure (e.g. an array or a linked list).
    // This allows us to store multiple key-value pairs at the same index.
        // EX: index 4 reads as a nested array [["darkblue", "00008b"], ["salmon", "#fa8072"]]

// Linear Probing
    // With linear probing, when we find a collision, we search through the array to find the next empty slot.
    // You only store one thing at each position/index

// Hash table class
class HashTable {
    // size = 53 means that if we don't include a size, it will default to 53 (which is a solid prime number for us to use)
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        // hashes almost always take advantage of prime numbers to make sure that keys are spread out more uniformly to increase the speed; greatly reduces the number of collisions
        let WEIRD_PRIME = 31;
        // the Math.min keeps the loop contained to 100 max
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            // this grabs the code for each letter assigned to JS and the -96 returns 1 for "a" through 26 for "z"
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key){
        // hashes the key
        let index = this._hash(key);
        // searches for if the key value is at that index
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                // check to see if keyMap index i of key [0] is equal to key we are searching for
                if(this.keyMap[index][i][0] === key){
                    // we return the i of [1], which is just the value, not the entire key, value pair 
                    return this.keyMap[index] [i] [1]
                }
            }
        }
        // return undefined if nothing is at the index
        return undefined
    }
    values(){
        // just grabs the values of the key map
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    // check to see if any of the values are duplicate to only get unique values pushed to the array
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        // only want the values at index 1 for i and j
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
    keys(){
        // just grabs the keys of the key map
        let keysArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    // check to see if any of the keys are duplicate to only get unique values pushed to the array
                    // Note we check index of 0, instead of 1, since we are looking at the keys, instead of values
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!");

// Simple way to print all the data
ht.keys().forEach(function(key){
    console.log(ht.get(key));
})


// Set method pseudocode
    // 1. Accepts a key and a value
    // 2. Hashes the key
    // 3. Stores the key-value pair in the hash table array via a separate chaining

// Get method pseudocode
    // 1. Accepts a key
    // 2. Hashes the key
    // 3. Retrieves the key-value pair in the hash table
    // 4. If the key isn't found, returns "undefined"
