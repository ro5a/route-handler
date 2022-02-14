const { fstat } = require('fs');
var url= require('url');
function renderHTML(path, response){
    fs.readFile(path,null, function(error,data){
        if(error){
            response.writeHead(404);
            response.write('file not found!');
            
        }else{
            response.write(data);
        }
        response.end();
    });
}
module.exports={
hundleRequest: function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    var path = url.parse(request.url).pathname;
    switch(path){
        case'/' :
        renderHTML('./index.html',response);
        break;
        case'/post':
        renderHTML('./post.html',response);
        break;
        default:
            response.writeHead(404);
            response.write('Route not defined');
            response.end();
    }
}
};
