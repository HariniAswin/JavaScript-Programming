/**
 * This function implements stack.
 * The stack contains push, pop and top and is based on LIFO (Last In First Out).
 */

function Stack() {
    this.top = null;
    this.stackStore = [];
}

Stack.prototype.push = function(data) {
    this.stackStore.push(data);
}

Stack.prototype.pop = function () {
    return this.stackStore.pop();
}

Stack.prototype.top = function () {
    if ( this.stackStore.length > 0 ){
        return this.stackStore[this.stackStore.length - 1];
    }
    return null;
}

Stack.prototype.isEmpty = function () {
    if ( this.stackStore.length == 0 ){
        return true;
    }
    return false;
}