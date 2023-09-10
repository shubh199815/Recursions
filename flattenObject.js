// Input : 
user = {
    name: 'John',
    address: {
        personal: {
            city: 'Doe City',
            area: 'Doe Area'
        },
        office: {
            city: 'Nowhere',
            area: {
                landmark: 'W'
            }
        }
    }
};

function magic(obj, parent) {
    for(let key in obj) {
        if(typeof obj[key] === 'object')
            magic(obj[key], parent + '_' + key);
        else
            finalObj[parent + '_' + key] = obj[key];
    }
}

var finalObj = {};
magic(user, 'user');

console.log(finalObj);

/*  Expected Output: 

    finalObj = {
        user_name: 'John',
        user_address_personal_city: 'Doe City',
        user_address_personal_area: 'Doe Area',
        user_address_office_city: 'Nowhere',
        user_address_office_area_landmark: 'W',
    }
*/


const flatten = (obj) => {
    const flattened = {};

    Object.keys(obj).forEach((key) => {
        const val = obj[key];

        if(typeof val === 'object' && val != null && !Array.isArray(val)){
            Object.assign(flattened, flatten(val));
        }
        else {
            flattened[key] = val;
        }
    });
    return flattened;
}


/*  Expected Output: 

    finalObj = {
        name: 'John',
        city: 'Doe City',
        area: 'Doe Area',
        city: 'Nowhere',
        landmark: 'W',
    }
*/