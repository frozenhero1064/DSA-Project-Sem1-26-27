import {Stack} from './dsa/Stack.js';
import {Queue} from './dsa/Queue.js';

const undoStack = new Stack();
undoStack.push("Move 1: Open block (0,0)");
undoStack.push("Move 2: Flag at block (1,2)");
console.log("Test Undo Stack (pop)", undoStack.pop());

const bfsQueue = new Queue();
bfsQueue.enqueue("Block (3,3)");
bfsQueue.enqueue("Block (3,4)");
console.log("Test BFS Queue (dequeue):", bfsQueue.dequeue());