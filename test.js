var h= require('http');
var u5=require('url');
var q=require('querystring');
var f=require('fs');
var m1=require('./fact');

h.createServer(function(req,res){
	/*
	var u=req.url;
	res.write(u);
	
	var p=u5.parse(u);
	console.log(p);
	
	var q1=q.parse(p.query);
	console.log(q1);
	var a=parseInt(q1.num);
	console.log(a);
	var b=parseInt(q1.num2);
	console.log(b);
	var result = a+b;
	
	res.write("addition is"+result);
	*/
	var u=u5.parse(req.url);
   res.writeHead(200,{'Content-Type':'text/html'});
   switch(u.pathname)
   {
	   case '/':
	   f.readFile("mytry1.html", function(err,data){
		   
		   if(err)
		   {
			   res.write("PAGE NOT FOUND");
			   console.log(err);
		   }
		   else{
			res.write(data);
			res.end();
		   }
	   });
	   break;
	   
	   case '/fact':
	   var data=f.readFileSync("num.html");
	   res.write(data);
	   var q1=q.parse(u.query);
		//console.log(q1);
	   var a=parseInt(q1.num);
	   var ans = m1.factorial(a);
	   var result = ans.toString();
	   res.write(result);
	   res.end();
	   break;
	   
	   case '/calc':
	   var q1=q.parse(u.query);
	   console.log(u);
	   var choice=parseInt(q1.op);
	   //console.log(choice);
	   if(choice == 1)
	   {
		   var ans1=parseInt(q1.num1)+parseInt(q1.num2);
		   var data=f.readFileSync("mytry1.html");
		   res.write(data);
		   res.write(ans1.toString());
	   } 
	   else if(choice == 2)
	   {  var ans1=parseInt(q1.num1)-parseInt(q1.num2);
		   var data=f.readFileSync("mytry1.html");
		   res.write(data);
		   res.write("substraction = "+ans1.toString());
		   
	   }
	   res.end();
	   break;
	   
	   
	   default:
	   res.write("in default");
	   res.end();
	   break;
	   
	 
   }
	
	//res.end();
	
	
}).listen(4000);
console.log("running on 4000");