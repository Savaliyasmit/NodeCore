const http = require('http')
const fs = require('fs')
const index_res = fs.readFileSync('./NodeCore/index_res.html','utf-8')
const data = {name:"smit" , age:19}

const server = http.createServer((req ,res)=>{
  
 //you have set header which file like html you always set header
   res.setHeader('content-type','text/html') 
//    res.setHeader('content-type','application/json') 

// write method using to send respones
// res.write('hello this is write mathod')

// you have always use method to end send respones otherwise localhost refresh again and again
//    res.end()
  
// you always set header to send respones   res.setHeader('content-type','text/html')  to see html content
 //   res.end('<h1>your send respones html element text</h1>')

//  first read file method after send a respones
res.end(index_res)

r

// also send json data
// res.end(JSON.stringify((data)))
})

// listen have get two argument first port and callback
server.listen(3030,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('server was Sucessfully connected');
    }
})