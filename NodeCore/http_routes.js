// make routes using if else and  switch either use express js libaray

const http = require("http");
const fs = require("fs");
const htmlData = fs.readFileSync("./commonJs/index_res.html");
const userData = fs.readFileSync("./commonJs/users.json");
const port = 1000;

const server = http.createServer();
server.on('request', (req, res) => {
 const route = req.url.split('/')
console.log(route);

if(route[1] === 'user'){
  res.setHeader("content-type", "application/json");
  res.end(userData);
}else if (route[1] === 'html'){
      res.setHeader("content-type", "text/html");
      res.end(htmlData);

}else{
  res.end('Page not found')
}
});

// server.on("request", (req, res) => {
//   switch (req.url) {
//     case "/html":
//       res.setHeader("content-type", "text/html");
//       res.end(htmlData);
//       break;
//     case "/users":
//       res.setHeader("content-type", "application/json");
//       res.end(userData);
//       break;
//     default:
//       res.end("Page Not Found");

//       break;
//   }
// });

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server was Sucessfully connected");
  }
});
