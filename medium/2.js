/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next) 
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = { val: 0, next: null }
    let sum = l1.val + l2.val
    let more = false
    if (sum > 9) {
        more = true
        result.val = sum - 10
    } else {
        result.val = sum
    }
    let node1 = l1
    let node2 = l2
    let currentNode = result
    while ((node1 && node1.next) || (node2 && node2.next)) {
        if (node1) node1 = node1.next
        if (node2) node2 = node2.next
        if (node1 && node2) {
            sum = node1.val + node2.val
        } else if (node1) {
            sum = node1.val
        } else if (node2) {
            sum = node2.val
        }
        if (more) {
            sum++
        }
        if (sum > 9) {
            sum = sum - 10
            more = true
        } else {
            more = false
        }
        currentNode.next = { val: sum, next: null }
        currentNode = currentNode.next
    }
    if (more) {
        currentNode.next = { val: 1, next: null }
    }
    return result
};