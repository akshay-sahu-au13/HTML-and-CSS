 import constants,{PORT} from './constants';
 
const http = require('http');
console.log(PORT)
console.log(constants);
 let server = http.createServer((req,resp) => {
    console.log(`Listening to http://localhost:5000`+req.url)
    resp.end('<h1>Server is started using Node.js</h1>')
 });
// console.log(server)
 server.listen(PORT, ()=>{
     console.log(`listening to http://localhost:5000`);
 });
