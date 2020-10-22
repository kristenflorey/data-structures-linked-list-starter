// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) {
            return undefined
        } else if (this.head === this.tail){
            let node = this.head
            this.head = null;
            this.tail = null;
            this.length--;
            return node
        } else {
            let newNode = this.head
            let oldTail = this.tail
            while (newNode.next !== this.tail) {
                newNode = newNode.next
            }
            newNode.next = null
            this.tail = newNode
            this.length--
            return oldTail

        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.tail = newNode
        } else {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
        return this
    }

    // TODO: Implement the removeHead method here
//     removeHead() {
//         if(!this.head) {
//             return undefined
//         } else if (this.head === this.tail){
//             let node = this.head
//             this.head = null;
//             this.tail = null;
//             this.length--;
//             return node
//     } else {
//         let node = this.head;
//         this.head = node.next;
//         node.next = null;
//         this.length--;
//         return node
//     }
// }
    removeHead() {
        if(!this.head) {
            return undefined;
        }
        let node = this.head;
        this.head = node.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return node;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head
        while(node.value !== target && node !== this.tail) {
            node = node.next
        }
        return (node.value === target)
    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
