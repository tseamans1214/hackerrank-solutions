class BTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  insert(newValue) {
    if (newValue < this.value) {
      if (this.left == null) {
        this.left = new BTree(newValue);
      } else {
        this.left.insert(newValue);
      }
    } else {
      if (this.right == null) {
        this.right = new BTree(newValue);
      } else {
        this.right.insert(newValue);
      }
    }
  }
  
  contains(searchValue) {
    if (searchValue == this.value) {
      return true;
    } else if (searchValue < this.value) { // Check Left node
      if (this.left == null) {
        return false;
      } else {
        return this.left.contains(searchValue);
      }
    } else { // Check Right node
      if (this.right == null) {
        return false;
      } else {
        return this.right.contains(searchValue);
      }
    }
  }
  // Prints Binary Tree with InOrder method
  // 1. Left Nodes
  // 2. Root Nodes
  // 3. Right Nodes
  inOrderPrint() {
    if (this.left != null) {
      this.left.inOrderPrint();
    }
    console.log(this.value);
    if (this.right != null) {
      this.right.inOrderPrint();
    }
  }

  // Prints Binary Tree with InOrder method
  // 1. Root Nodes
  // 2. Left Nodes
  // 3. Right Nodes
  preOrderPrint() {
    console.log(this.value);
    if (this.left != null) {
      this.left.preOrderPrint();
    }
    if (this.right != null) {
      this.right.preOrderPrint();
    }
  }
  
  // Prints Binary Tree with PostOrder method
  // 1. Left Nodes
  // 2. Right Nodes
  // 3. Root Nodes
  postOrderPrint() {
    if (this.left != null) {
      this.left.preOrderPrint();
    }
    if (this.right != null) {
      this.right.preOrderPrint();
    }
    console.log(this.value);
  }
}

let bTree = new BTree(5);
bTree.insert(3);
bTree.insert(2);
bTree.insert(4);
bTree.insert(7);
bTree.insert(10);
console.log("bTree constains 2: " + bTree.contains(2));
console.log("bTree constains 10: " + bTree.contains(10));
console.log("bTree constains 5: " + bTree.contains(5));
console.log("bTree constains 11: " + bTree.contains(11));
console.log("bTree constains 1: " + bTree.contains(1));
console.log("inOrderPrint:");
bTree.inOrderPrint();
console.log("preOrderPrint:");
bTree.preOrderPrint();
console.log("postOrderPrint:");
bTree.postOrderPrint();
