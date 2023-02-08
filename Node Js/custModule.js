module.exports.addfunc = function(a,b){
    console.log(a*b);
}


module.exports.mull = function(){
    console.log("this is mull functiion")

    
        console.log("divide func callled")
    
}

module.exports.empClass = class{
    constructor(id,name,add){
        this.id=id;
        this.name=name;
        this.add=add;
    }
    showing(){
        console.log(`${this.id}---${this.name}---${this.add}`)
    }
}
