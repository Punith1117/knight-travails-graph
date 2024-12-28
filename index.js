import { getPossibleMoves } from "./possible-moves.js";

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return JSON.parse(JSON.stringify(this.items.shift())); // Removes and returns the first element (returns a copy and not reference)
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }
}

function isEqual(arr1, arr2) {
  if ((arr1[0] == arr2[0]) && (arr1[1] == arr2[1])) {
    return true
  } else 
    return false
}

function getShortestPath(start, end) {
  let path = [], movesDone = [], exists = false
  let q = new Queue();
  let task = [];
  task.push(start);
  task.push(path);
  q.enqueue(task)
  movesDone.push(start)
  while (true) {
    let task = q.dequeue();
    let currentPos = task[0]
    let path = task[1];
    path.push(currentPos);
    // console.log(path)
    if (isEqual(currentPos, end)) {
      return path
    }
    let possibleMoves = getPossibleMoves(currentPos);
        for (let move of possibleMoves) {
          for (let m of movesDone) {
            if (isEqual(m, move)) {
              exists = true
              break;
            }
          }
          if (false == exists) {
            let task = []
            task.push(move)
            task.push(path)
            q.enqueue(task)
            movesDone.push(move)
          }
          exists = false
        }
  }
}


let start = [0, 0]
let end = [3, 1]
let path = getShortestPath(start, end)
console.log('Shortest path: ')
console.log(path)