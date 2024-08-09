
// SinglyLinkedListNode {
//       int data;
//       SinglyLinkedListNode next;
//   }
function insertNodeAtPosition(llist, data, position) {
    // Create a new node with given data
    let newNode = new SinglyLinkedListNode();
    newNode.data = data;
    newNode.next = null;
    
    // Check is position given is the first position
    if (position === 0) {
        newNode.next = llist;
        return newNode;
    }
    let traverseNode = llist;
    // Loop until the given position, Start at 1 because position 0 is already handled
    for (let i=1; i<position; i++) {
        traverseNode = traverseNode.next;
    }
    // Set new node next to current node
    newNode.next = traverseNode.next;
    // Set previous node next to new node
    traverseNode.next = newNode;
    
    return llist;

}
