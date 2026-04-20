class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        if (!this.head) {
            this.head = new Node(val);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(val);
        }
    }

    reverseBetween(m, n) {
        if (!this.head || m === n) return;

        let dummy = new Node(0);
        dummy.next = this.head;
        let pre = dummy;

        for (let i = 0; i < m - 1; i++) {
            pre = pre.next;
        }

        let curr = pre.next;
        for (let i = 0; i < n - m; i++) {
            let next = curr.next;
            curr.next = next.next;
            next.next = pre.next;
            pre.next = next;
        }

        this.head = dummy.next;
    }

    printList() {
        let current = this.head;
        let output = '';
        while (current) {
            output += current.val + ' ';
            current = current.next;
        }
        console.log(output);
    }
}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.printList(); // 1 2 3 4 5
ll.reverseBetween(2, 4);
ll.printList(); // 1 2 4 3 5
