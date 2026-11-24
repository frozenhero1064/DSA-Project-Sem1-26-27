export class Stack {
	constructor() {this.items=[];}

	//Push, complexity O(1)
	push(element) {this.items.push(element);}

	//Pop, complexity O(1)
	pop() {
		if (this.isEmpty()) {return null;}

		return this.items.pop();
	}

	//Peek, complexity O(1)
	peek() {
		if (this.isEmpty()) {return null;}

		return this.items[this.items.length - 1];
	}

	isEmpty() {return this.items.length == 0;}

	size() {return this.items.length;}

	clear() {this.items = [];}
}