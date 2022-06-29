const http =require("http");
const server = http.createServer(function(req,res){
    res.write("<h1>Welcome to Node js first assignment</h1>");
    res.write("This is my first HTTP server \n")
    res.write(JSON.stringify({Name:"Mokshith",age:23}));
    res.end()
})
server.listen(4000)
