let obj = {};
obj.name="sachin";
obj.id=3338;
obj.address="mysore";
obj.salary=28000

for ( let key in obj){
    console.log(obj[key]);
}
console.log(JSON.stringify(obj));


console.log(JSON.stringify(obj))

let obj1 = {}
obj1.name="sachin R";
obj1.id=22229;
obj1.address = "mysore";
obj1.salary= 46464;

for( let i in obj1){
    console.log(obj1[i])
}

class employee{
    constructor(name,id,address,salary){
        this.empname=name;
        this.empid=id;
        this.empaddress=address;
        this.empsal=salary;
    }
}
const empobj = new employee("sachin", 22228, "mysore", 363636);

const click = function(){
    document.getElementById("head").style.color = "red"
    document.write(ba);
}
