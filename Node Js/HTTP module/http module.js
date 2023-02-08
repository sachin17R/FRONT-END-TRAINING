const http = require("http");



http.createServer(function(req,res){
    console.log(req.url)

    if(req.url == "/sachin"){
        res.write("sachin page displayed `")
    }
    else if(req.url == "/pavan")[
        res.write("pavan page displayed")

    ]
    else if(req.url == "/vish"){
        res.write("vishwas page displayed")
    }
    else{
        res.write("thid id default page")
    }
    res.end();
}).listen(3338);