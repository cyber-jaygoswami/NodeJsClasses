const obj1 = {
    name : 'Jay',
    subject : "MERN",

}


console.log(obj1.name);

// Object -> JSON
const jsonObj = JSON.stringify(obj1);

console.log(jsonObj);

// console.log(jsonObj.name); not allowed


// JSON -> Object
const convertedObj = JSON.parse(jsonObj);
console.log(convertedObj.name);

