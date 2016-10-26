/*
    Data Structures in TypeScript

    To Compile:
        tsc structures.ts
        (optionally: tsc structures.ts --noImplicitAny)
    To run:
        node structures.js

*/
// Basic wrapper for a primitive
var Item = (function () {
    function Item(value) {
        this.value = value;
    }
    return Item;
}());
var PriorityItem = (function () {
    function PriorityItem(value, priority) {
        this.value = value;
        this.priority = priority;
    }
    return PriorityItem;
}());
function assert(val1, val2, message) {
    if (val1 !== val2) {
        console.log("Assertion Failed: ", message);
        console.log(val1, "does not equal", val2);
    }
}
// 1. Stack
/*
 * A stack is a LIFO (Last In First Out) data structure. We use a stack when we
 * need to keep track of data that is nested, or when we need to make sure that
 * we solve all the sub-problems before solving a main problem. JavaScript uses
 * a stack to keep track of our function calls.
 */
var Stack = (function () {
    function Stack() {
        // initialize our storage so that it actually is an array.
        this.storage = [];
    }
    Stack.prototype.addItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    };
    Stack.prototype.getLastItem = function () {
        // todo: remove and return the last item on the storage
        return this.storage.pop();
    };
    Stack.prototype.peekLastItem = function () {
        // todo: return a reference to the last item in storage without removing
        var i = this.storage.length - 1;
        return this.storage[i];
    };
    Stack.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Stack;
}());
var st = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");
st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");
var i = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");
var i2 = st.getLastItem();
assert(i2.value, 3, "Stack returns last item on getLastItem");
assert(st.isEmpty(), true, "Stack is empty after popping last item");
// 2. Queue
/*
 * A queue is a FIFO (First In First Out) data structure. We use a queue when we
 * want to handle things in the order they are recieved. JavaScript uses a queue
 * to handle asynch functions in the order that they fire.
 */
// Write, from scratch, an implementation of a Queue, and at least one test for
// each method on the Queue.
var Queue = (function () {
    function Queue() {
        // initialize our storage so that it actually is an array.
        this.storage2 = [];
    }
    Queue.prototype.addItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage2.push(i);
    };
    Queue.prototype.getFirstItem = function () {
        // todo: remove and return the 1st item on the storage
        return this.storage2.shift();
    };
    Queue.prototype.peekFirstItem = function () {
        // todo: return a reference to the first item in storage without removing
        // let i: number = this.storage2.length - 1;
        return this.storage2[0];
    };
    Queue.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage2.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Queue;
}());
var qu = new Queue();
assert(qu.isEmpty(), true, "Queue is empty on creation");
qu.addItem(new Item(3));
assert(qu.isEmpty(), false, "Queue is not empty after one item added");
var j = qu.peekFirstItem();
assert(j.value, 3, "Peeking 1st item gets us the last item");
assert(qu.isEmpty(), false, "Queue is not emptied by peeking");
var j2 = qu.getFirstItem();
assert(j2.value, 3, "Queue returns 1st item on getLastItem");
assert(qu.isEmpty(), true, "Queue is empty after popping last item");
// 3. Pick a Data Structure
// priority queue
/* Pick one structure from http://en.wikipedia.org/wiki/List_of_data_structures
 * and implement it in
 * TypeScript. Be sure to include tests! Make sure to choose something that
 * will be a good challenge for you! (Go with "Heap" if you're unsure. Ask Erty
 * if you need help :)
 */
var PriorityQueue = (function () {
    function PriorityQueue() {
        // initialize our storage so that it actually is an array.
        this.storage2 = [];
    }
    PriorityQueue.prototype.addPriorityItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array, with priority
        // console.log("value of i ", i);
        for (var j_1 = 0; j_1 < this.storage2.length; j_1++) {
            if (i.priority < this.storage2[j_1].priority) {
                this.storage2.splice(j_1, 0, i);
                return;
            }
        }
        this.storage2.push(i);
    };
    PriorityQueue.prototype.getLowestPriorityItem = function () {
        // todo: remove and return the highest priority on the storage
        return this.storage2.pop();
    };
    PriorityQueue.prototype.peekLowestPriorityItem = function () {
        // todo: return a reference to the first item in storage without removing
        return this.storage2[this.storage2.length - 1];
    };
    PriorityQueue.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage2.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return PriorityQueue;
}());
var pr = new PriorityQueue();
assert(pr.isEmpty(), true, "PriorityQueue is empty on creation");
pr.addPriorityItem(new PriorityItem(3, 1));
assert(pr.isEmpty(), false, "PriorityQueue is not empty after one item added");
pr.addPriorityItem(new PriorityItem(2, 7));
assert(pr.isEmpty(), false, "PriorityQueue is not empty after one item added");
var p = pr.peekLowestPriorityItem();
assert(p.value, 2, "Peeking last item gets us the last item");
assert(pr.isEmpty(), false, "PriorityQueue is not emptied by peeking");
var p2 = pr.getLowestPriorityItem();
assert(p2.value, 2, "PriorityQueue returns last item on getLowestpriorityItem");
assert(pr.isEmpty(), false, "PriorityQueue is not returning lowest priority item");
var p3 = pr.getLowestPriorityItem();
assert(p3.value, 3, "PriorityQueue returns last item on getLowestpriorityItem");
assert(pr.isEmpty(), true, "PriorityQueue is not returning lowest priority item");
