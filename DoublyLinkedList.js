class Node {
  constructor(data, next = null, previous = null){
    this.data = data;
    this.next = next;
    this.previous = previous
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // insert first
  insertFirst(data){
    this.head = new Node(data, this.head, null)
    this.size++
    return true
  }

  // insert last 
  insertLast(data){
    if (!this.head){
      this.insertFirst(data, this.head, this.head)
      return true
    }
    
    const node = new Node(data)
    let current = this.head
    while(current.next){
      current = current.next
    }

    current.next = node
    node.next = null;
    node.previous = current
    this.size++
    return true
  }

  // insert by index
  insertAt(data, index){
    if (index === 0){
      return this.insertFirst(data)
    }

    if (index === this.size){
      return this.insertLast(data)
    }

    // validating index
    if (index < 0 || index > this.size - 1){
      return false
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
    node.previous = previous
    node.next = current

    previous.next = node
    current.previous = node

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

    let current = this.head;
    if (index === 0 ){
      this.head = current.next
      this.head.previous = null
      this.size--
      return true
    }

    let count = 0;
    let previous;
    while(count < index){
      count++
      previous = current
      current = current.next
    }

    previous.next = current.next
    if (index === this.size - 1){
      this.size--
      return true;
    } else {
      current.next.previous = previous
      this.size--
      return true;
    }
  }

  //get by index
  getAt(index){
    if (this.size === 0){
      return false
    }

    if (index < 0 || index > this.size - 1){
      return false
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
    if (!this.head){
      return false
    }

    let current = this.head

    while(current){
      console.log(current.data)
      current = current.next
    }
  }
}
