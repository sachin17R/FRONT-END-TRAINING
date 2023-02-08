const os =require("os")

console.log(os.userInfo())
console.log(os.version())
console.log(os.hostname())
console.log(os.totalmem())
console.log(os.freemem())

const free = os.freemem();
const gb = (((free/1024)/1024)/1024);
console.log("free memory is "+gb+"  gb")

const tot = os.totalmem();
const tt = (((tot/1024)/1024)/1024);
console.log("total memory is "+tt+"  gb")
