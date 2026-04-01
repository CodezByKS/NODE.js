// // console.log("hello world")

// const EventEmitter = require

// import EventEmmiter from "events";
// const event = new EventEmmiter();

// event.on("greet", () =>{
//     console.log("hello family");
    
// })

// event.emit("greet");

// Blocking (bad in Node)

 



// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, World!');
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

const express = require('express');
const app = express();
app.use(express.json());

app.get('/student', (req, res) => {
  res.send('Hello, World... this is my first API!');
});

app.get('/', (req, res) => {
  res.send('Hello, World... this is defualt routes!');
});

const port = 3000 || process.env.PORT

app.listen(3000, () => {
  console.log(`Server running on port:${port}`);
});
