// const http = require ("http");

// const server = http.createServer((req,res)=>{
//     if (req.url == "/"){
//         res.end(" home page");
//     } else if (req.url =="/read" && req.method == "post"){
      
//       let str="";
//       req.on("data",(chunk) =>{
//         str+= chunk;
//       });
//       req.on("end",() =>{
//         console.log(str);
//       })
//         res.end("data fetch succ");
//     }else{
//         res.end("not found");
//     }
// });


// server.listen(8080,() =>{
//     console.log("started");
// });