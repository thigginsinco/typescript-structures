/*
	Data Structures in TypeScript

	To Compile:
		tsc structures.ts
		(optionally: tsc structures.ts --noImplicitAny)
	To run:
		node structures.js

*/

// Basic wrapper for a primitive
class Item {
	constructor(
		public value: number | string | boolean
	) {}
}

class PriorityItem {
	constructor(
		public value: number | string | boolean,
		public priority: number 
	) {}
}
function assert(val1: any, val2: any, message: string) {
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

class Stack {
	// set up our storage, and keep it from prying eyes
	private storage: Item[];

	constructor() {
		// initialize our storage so that it actually is an array.
		this.storage = [];
	}

	addItem(i: Item): void {
		// void means that this function doesn't return anything.
		// to add an item, push that item onto the end of the array.
		this.storage.push(i);
	}

	getLastItem(): Item {
		// todo: remove and return the last item on the storage
		return this.storage.pop();
	}

	peekLastItem(): Item {
		// todo: return a reference to the last item in storage without removing
		let i: number = this.storage.length - 1;
		return this.storage[i];
	}

	isEmpty(): boolean {
		// todo: return true if storage is empty, false otherwise
		if (this.storage.length === 0) {
			return true;
		}else {
			return false;
		}
	}
}

let st: Stack = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");

st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");

let i: Item = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");

let i2: Item = st.getLastItem();
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
class Queue {
	// set up our storage, and keep it from prying eyes
	private storage2: Item[];

	constructor() {
		// initialize our storage so that it actually is an array.
		this.storage2 = [];
	}

	addItem(i: Item): void {
		// void means that this function doesn't return anything.
		// to add an item, push that item onto the end of the array.
		this.storage2.push(i);
	}

	getFirstItem(): Item {
		// todo: remove and return the 1st item on the storage
		return this.storage2.shift();
	}

	peekFirstItem(): Item {
		// todo: return a reference to the first item in storage without removing
		// let i: number = this.storage2.length - 1;
		return this.storage2[0];
	}

	isEmpty(): boolean {
		// todo: return true if storage is empty, false otherwise
		if (this.storage2.length === 0) {
			return true;
		}else {
			return false;
		}
	}
}

let qu: Queue = new Queue();
assert(qu.isEmpty(), true, "Queue is empty on creation");

qu.addItem(new Item(3));
assert(qu.isEmpty(), false, "Queue is not empty after one item added");

let j: Item = qu.peekFirstItem();
assert(j.value, 3, "Peeking 1st item gets us the last item");
assert(qu.isEmpty(), false, "Queue is not emptied by peeking");

let j2: Item = qu.getFirstItem();
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
class PriorityQueue {
	// set up our storage, and keep it from prying eyes
	private storage2: PriorityItem[];

	constructor() {
		// initialize our storage so that it actually is an array.
		this.storage2 = [];
	}

	addPriorityItem(i: PriorityItem): void {
		// void means that this function doesn't return anything.
		// to add an item, push that item onto the end of the array, with priority
		// console.log("value of i ", i);
		for (let j: number = 0; j < this.storage2.length; j ++ ) {
			if (i.priority < this.storage2[j].priority) {
				this.storage2.splice(j, 0, i);
				return;
			}
		}
		this.storage2.push(i);
	}

	getLowestPriorityItem(): PriorityItem {
		// todo: remove and return the highest priority on the storage
		return this.storage2.pop();
	}

	peekLowestPriorityItem(): PriorityItem {
		// todo: return a reference to the first item in storage without removing
		return this.storage2[this.storage2.length - 1];
	}

	isEmpty(): boolean {
		// todo: return true if storage is empty, false otherwise
		if (this.storage2.length === 0) {
			return true;
		}else {
			return false;
		}
	}
}

let pr: PriorityQueue = new PriorityQueue();
assert(pr.isEmpty(), true, "PriorityQueue is empty on creation");

pr.addPriorityItem(new PriorityItem(3, 1));
assert(pr.isEmpty(), false, "PriorityQueue is not empty after one item added");

pr.addPriorityItem(new PriorityItem(2, 7));
assert(pr.isEmpty(), false, "PriorityQueue is not empty after one item added");

let p: PriorityItem = pr.peekLowestPriorityItem();
assert(p.value, 2, "Peeking last item gets us the last item");
assert(pr.isEmpty(), false, "PriorityQueue is not emptied by peeking");

let p2: PriorityItem = pr.getLowestPriorityItem();
assert(p2.value, 2, "PriorityQueue returns last item on getLowestpriorityItem");
assert(pr.isEmpty(), false, "PriorityQueue is not returning lowest priority item");

let p3: PriorityItem = pr.getLowestPriorityItem();
assert(p3.value, 3, "PriorityQueue returns last item on getLowestpriorityItem");
assert(pr.isEmpty(), true, "PriorityQueue is not returning lowest priority item");
