class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    appendNode = (newNode) => {
        let node = this.head;
        if (node === null) {
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
}
printNodes = (list) => {
    let temp = list.head;
    console.log("temp values", temp.data);
    while(temp) {
        console.log(temp.data);
        temp = temp.next;
    }
    
}

let myList = new LinkedList();
let node = new ListNode(5);

myList.appendNode(node);
myList.appendNode(new ListNode(11));
myList.appendNode(new ListNode(32));

console.log(printNodes(myList));