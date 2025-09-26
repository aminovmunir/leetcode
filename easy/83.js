/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head
    let resultNode = {val: head.val ? head.val : 0, next: null}
    let currentNode = resultNode
    let nextNode = head.next
    while (nextNode) {
        if (nextNode.val !== currentNode.val) {
            currentNode.next = {val: nextNode.val ? nextNode.val : 0, next: null}
            currentNode = currentNode.next
        }
        nextNode = nextNode.next
    }
    return resultNode
};




const nodeList1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: null
        }
    }
};
const nodeList2 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
};
deleteDuplicates(nodeList1);
deleteDuplicates(nodeList2);