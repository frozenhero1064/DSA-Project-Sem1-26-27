export class Queue {
	constructor() {
		this.items = {};
		this.head = 0;
		this.tail = 0;
	}

	//Enqueue, complexity O(1)
	enqueue(element) {
		this.items[this.tail] = element;
		this.tail++;
	}

	//Dequeue, complexity O(1)
	dequeue(element) {
		if (this.isEmpty()) {return null;}
		const item = this.items[this.head];
		delete this.items[this.head];
		this.head++;
		return item;
	}

	isEmpty() {return this.tail - this.head == 0;}

	size() {return this.tail - this.head;}

	clear() {
		this.items = {};
		this.head = 0;
		this.tail = 0;
	}
}