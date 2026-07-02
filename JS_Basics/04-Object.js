var obj1 = {
    name : 'Jay Goswami',
    age : 23,
    subject : "MERN",
    address : {
        city : "PBR",
        street : 7

    }
}

console.log(obj1.name);
console.log(obj1.address.street);

const users = [
    {
        id : 1,
        username :"Jay1221"
    },
    {
        id : 2,
        username :"Raj12343"
    },
    {
        id : 3,
        username :"Hitesh"
    },
    {
        id : 4,
        username :"Mansi"
    },

]

// console.log(users[2].username);


const obj3 = {
    id : 1,
    name : 'Raj',
    subject : "Python"
}

const obj4 = {
    u_id : 2,
    u_name : 'Krunal',
}

const obj5 = {
    obj3,
    obj4
}

// Spread Operator : ...
const obj6 = {
    ...obj3,
    ...obj4
}

console.clear();
console.log(obj6);

console.log(Object.keys(obj6));
console.log(Object.values(obj6));