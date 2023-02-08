const http = require("http");
const fs = require("fs");
const httpParse = require('url').parse;
const dir = __dirname;

http.createServer(function (req, res) {

    if (req.method == "GET") {
        const query = httpParse(req.url).query;
        if (query != null) {
            let obj = httpParse(req.url, true).query;
            const msg = `thanks Mr.${obj.txtname} for registering with us!!  your Email ${obj.txtemail} is registered successfully`;
            res.write(msg);
            
            res.end();
            return
        }
    }
    else if(req.method == "POST"){
        req.on("data",function(inputs){
            res.write(inputs);
            res.end();
            return;
        })
        req.on("end", function(){
            let post = querystring.parse(postedData);
            const msg = `Thanks Mr.${post['txtName']} for registering with Us! UR EMail ${post['txtEmail']} is registered and will be contacted`;
            res.write(msg);
            res.end();
            return;
        })
    }

     if (req.url == "/favicon.ico") {
        res.end();
    }
    else if (req.url == "/Register") {
        displaypage(res, req.url);
    }
    else if (req.url == "/Home") {
        displaypage(res, req.url);
    }
    else {
        errorPage(res);
    }
}).listen(1212);

function displaypage(res, url) {
    const file = dir + url + ".html";
    fs.createReadStream(file).pipe(res);
}


function errorPage(res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write("<h1 style='color:red'>OOPS! something went wrong</h1>");
    res.write("<hr>")
    res.write("<h2>your requested page is not present</h2>")
}
