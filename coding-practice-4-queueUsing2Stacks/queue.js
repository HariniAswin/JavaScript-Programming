/**
 * This function implements a queue ↴ with 2 stacks. ↴
 * The queue contains enqueue and dequeue methods and is "first in first out" (FIFO).
 */

function Queue() {

    this.stackForPush = new Stack();
    this.stackForPop = new Stack();

}

/**
 * This function adds elements into stackForPush
 * @param val
 */
Queue.prototype.enqueue = function (val){
    this.stackForPush.push(val);
};

/**
 * This function pops elements from stackForPush to stackForPop.
 * Since stackForPop stores the elements in reverse direction, popping stackForPop will achieve FIFO
 */
Queue.prototype.dequeue = function () {
    if ( this.stackForPop.isEmpty() ){
        while ( !this.stackForPush.isEmpty() ){
            this.stackForPop.push(this.stackForPush.pop());
        }
    }

    this.stackForPop.pop();
};
