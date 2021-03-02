class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  };
};

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // Insert first 
  insertFirst(data){
    this.head = new Node(data, this.head) 
    this.size++
    return true
  };

  // insert last
  insertLast(data){
    let node = new Node(data)

    let current;

    if (!this.head){
      this.head = node
      return true  
    } else {
      current = this.head

      while(current.next){
        current = current.next
      }

      // current is the last element 
      current.next = node

      this.size++
      return true
    }
  }

  // insert by index
  insertAt(data, index){
    if (index > this.size - 1 || index < 0){
      return false;
    }

    // if it is first
    if (index === 0){
      this.insertFirst(data)
      return true
    }

    const node = new Node(data)
    let previous;
    let current = this.head
    let count = 0;

    while(count < index){
      previous = current
      current = current.next
      count++
    }

    node.next = current
    previous.next = node

    this.size++

    return true
  }

  // delete by index
  deleteAt(index){
    if (this.size === 0){
      return false
    }

    if (index < 0 || index > this.size - 1){
      return false
    }

    if (index === 0){
      this.head = null
      return true
    }
    let count = 0;
    let current = this.head;
    let previous;

    while(count < index){
      previous = current
      current = current.next
      count++
    }

    previous.next = current.next
    current.next = null
    return true

  }

  // get by index
  getAt(index){
    if (this.size === 0){
      return false
    }

    if (index < 0 || index > this.size - 1){
      return false 
    }

    if (index === 0){
      return this.head.data
    }

    let count = 0;
    let current = this.head;
    while (count < index){
      current = current.next
      count++
    }

    return current.data
  }

  // print
  printListData(){
    let current = this.head

    while(current){
      console.log(current.data)
      current = current.next
    }
  }
}

