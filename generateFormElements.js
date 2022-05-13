var obj = {
    'entity1': { //Entity
        'attribute1': { //Field
            'isEmpty': "This value is required" //rule with error message
        },
        'attribute2': { //Field
            'isEmpty': "This value is required" //rule with error message
        }
    },
    'entity2': { //Entity
        'attribute1': { //Field
            'isEmpty': "This value is required" //rule with error message
        },
        'attribute2': { //Field
            'isEmpty': "This value is required" //rule with error message
        }
    }
};

/* Task: iterate this object assembling the name of the inputs to be able to find them with jQuery, 
   so we could add their respective error messages to the DOM 
*/

/* Expected output:

    {
        'mainEntity[entity1][attribute1]': ["This value is required"],
        'mainEntity[entity1][attribute2]': ["This value is required"],
        'mainEntity[entity2][attribute1]': ["This value is required"],
        'mainEntity[entity2][attribute2]': ["This value is required"],
    }

*/

function magic(obj, currentPath, finalObj) {
    Object.keys(obj).forEach(function(k) {
        if(typeof obj[k] === 'string')
            finalObj[currentPath] = [obj[k]];
        else
            magic(obj[k], currentPath + '[' + k + ']', finalObj);
    });
}

var finalObj = {};
magic(obj, 'mainEntity', finalObj);

console.log(finalObj);