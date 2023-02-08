const fs = require("fs");

const file = "./ConsumeModule.js";
//////////////////////////////READING A FILE//////////////////////////////
// function SyncReading(){
    
//     const contents = fs.readFileSync(file,"utf-8")
    
//     console.log(contents)
// }

// SyncReading();

// function ASyncReading(){
    
//     fs.readFile(file,"utf-8",function(err,data){
//         if(err){
//             console.log(err)
//         }
//         else
//         console.log(data)
//     })
    
// }
// // ASyncReading();
// console.log("reading over")

// //////////////////////////////////////WRITING A FILE////////////////////////////////////

// const obj = {
//     "NAME":"SACHIN",
//     "AGE":23,
//     "ADDRESS": "MYSORE"
// }


// function writingFileSync(){
//     fs.writeFileSync("writtenFile.txt",JSON.stringify(obj),"utf-8")
// }

// writingFileSync();

// fs.writeFile("writtenFile.txt","this is asyncro file writinig /n",(err)=>{
//     if(err) console.log(err)
// })
// console.log("writing over")

///////////////append to file///////////////

function appendToFile(){
    fs.appendFileSync("writtenFile.txt", "\n content will be appending on the way \n","utf-8");

}

appendToFile();

function appendASyncFile(){
    fs.appendFile("writtenFile.txt","\n this is again appended value \n",(err)=>{
        if(err) console.log(err)
    });
}
appendASyncFile()
console.log("append over")