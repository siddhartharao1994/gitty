var h=require('http');
var u=require('url');
var q=require('querystring');
var f=require('fs');

h.createServer(function(req, res){
	res.writeHead(200,{'Content-Type':'html/text'})
	f.readFile("mytry1.html", function(err, data){

		if (err)
		{
			console.log("err has found");
			console.log(err);
		}
		else
		{
			res.write(data);
			res.end();
		}
	});

	
}).listen(7000);