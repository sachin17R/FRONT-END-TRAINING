const emmiter = require("events")

const eventClass = new emmiter();

eventClass.on("insert",function(){
    console.log("insert 11111111111")
})

eventClass.on("delete",function(){
    console.log("delete111111111")
})

eventClass.on("slide",()=>{
    console.log("slideh1111")
})

eventClass.on("click",(inv)=>{
    inv();
})


eventClass.emit("insert")
eventClass.emit("delete")
eventClass.emit("slide")
eventClass.emit("slide")

function showcode(){
    console.log("onclick triggered now")
}

eventClass.emit("click",showcode)

