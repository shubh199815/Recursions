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

/*  Expected Output: 

    finalObj = {
        user_name: 'John',
        user_address_personal_city: 'Doe City',
        user_address_personal_area: 'Doe Area',
        user_address_office_city: 'Nowhere',
        user_address_office_area_landmark: 'W',
    }
*/

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
