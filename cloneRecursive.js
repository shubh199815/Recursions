/* 
    // This would be cloneable:
    var tree = {
        "left"  : { "left" : null, "right" : null, "data" : 3 },
        "right" : null,
        "data"  : 8
    };

    // This would kind-of work, but you would get 2 copies of the 
    // inner node instead of 2 references to the same copy
    var directedAcylicGraph = {
        "left"  : { "left" : null, "right" : null, "data" : 3 },
        "data"  : 8
    };
    directedAcyclicGraph["right"] = directedAcyclicGraph["left"];

    // Cloning this would cause a stack overflow due to infinite recursion:
    var cyclicGraph = {
        "left"  : { "left" : null, "right" : null, "data" : 3 },
        "data"  : 8
    };
    cyclicGraph["right"] = cyclicGraph;
*/


/*
    The below function will work adequately for the 6 simple types (Object, Array, Date, String, Number, or Boolean), as long as the data in the objects and arrays form a tree structure.
    That is, there isn't more than one reference to the same data in the object.
*/
function clone(obj) {
    var copy;
    if(obj == null || typeof obj != 'object')
        return obj;

    // Handle Date    
    if(obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime);
        return copy;
    }

    // Handle Array
    if(obj instanceof Array) {
        copy = [];
        for(let i=0; i<obj.length; i++)
            copy[i] = clone(obj[i]);
        return copy;
    }

    // Handle Object
    if(obj instanceof Object) {
        copy = {};
        for(var attr in obj) {
            if(obj.hasOwnProperty(attr))
                copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error('Unacle to clone. Object type is not supported!');
}
 