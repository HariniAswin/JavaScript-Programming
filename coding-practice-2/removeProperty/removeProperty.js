/**
 * This function takes an object and property name, and if the object has a property prop,
 * the function removes the property from the object and returns true; in all other cases it returns false.
 * @param propertyToDelete
 */
function removeProperty(object, propertyName){
    if (object[propertyName]){
        delete object[propertyName];
        return true;
    }
    return false;
}


var obj = {
    "prop": "val0",
    "prop1": "val1",
    "prop2": "val2"
}

var propertyToDelete = "prop";
var deleted = removeProperty(obj, propertyToDelete);

console.log(JSON.stringify(obj));

