const bufffff = Buffer.alloc(5);

const buf = Buffer.from("Hello World")

// Read
console.log(buf);
console.log(buf.toString());
console.log(buf.length);


// Write
const buf2 = Buffer.allocUnsafe(5);

buf2.write("Hello again!");

console.log(buf2.toString());