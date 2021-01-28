// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let’s Code!
// -----------
/*
Methods needed for stack:
    1. push
    2. pop
    3. size
    4. peek
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(ele) {
        if (this.length) {
            let newNode = new Node(ele)
            newNode.next = this.top;
            this.top = newNode;
            this.length++
            return this.length;
        } else {
            let newNode = new Node(ele)
            this.top = newNode;
            this.length++
            return this.length;
        }
    }

    pop() {
        if (!this.length) {
            return null
        }
        else if (this.length === 1) {
            let returnValue = this.top.value
            this.top = null;
            this.length--
            return returnValue
        }
        else {
            let returnValue = this.top.value
            let newTop = this.top.next
            this.top = newTop;
            this.length--
            return returnValue
        }
    }
    size() {
        return this.length
    }
}

let test = new Stack()
test.push("hello")
test.push("goodbye")
console.log(test)
console.log(test.pop());


exports.Node = Node;
exports.Stack = Stack;
