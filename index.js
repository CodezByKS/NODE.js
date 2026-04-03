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

// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/student', (req, res) => {
//   res.send('Hello, World... this is my first API!');
// });

// app.get('/', (req, res) => {
//   res.send('Hello, World... this is defualt routes!');
// });

// const port = 3000 || process.env.PORT

// app.listen(3000, () => {
//   console.log(`Server running on port:${port}`);
// });


// const express = require('express');
// const app = express();
// app.use(express.json());

// app.use(express.json());
// let students = [];

// app.get('/students', (req, res) => {
//   res.json(students);
// });

// app.post('/students', (req, res) => {
//   id:students.length + 1,
//   name:req.bosy.name,
// };
// students.push(student);
// res.json(student);
// );

// app.put('/students/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const student = students.find(s => s.id === id);
//   student.name = req.body.name;
//   res.json(student);
// });

const express = require('express');
const app = express();

app.use(express.json());

let students = [];

app.get('/students', (req, res) => {
  res.json(students);
});
app.post('/students', (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name
  };

  students.push(student);
  res.json(student);
});

app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = req.body.name;
  res.json(student);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


// const express = require('express');
// const app = express();

// console.log('Hello World! This is the Express server.');

// app.get('/Student', (req, res) => {
//     res.send('This is the Express server!');
// });

// const port = 3000 || process.env.port;

// app.listen(port, () => {        
//   console.log(`Server is running on port ${port}`);
// });

// import express from "express";

// const app = express();
// app.use(express.json());

// let users = [];

// app.post("/users", (req, res) => {
//     const user = {
//         id: users.length + 1,
//         name: req.body.name
//     };

//     users.push(user);

//     res.json({
//         data: user,
//         message: "User added successfully"
//     });
// });

// app.get("/", (req, res) => {
//     res.json({ message: "Server is running 🚀" });
// });

// app.get("/users/:id", (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }
//     res.json({ data: user });
// });


// app.listen(3000, () => {
//     console.log("Server started on port 3000");
// });

// const add =(a, b) => {
//     return a + b;
// };
// let sum = add(5, 10);
// console.log(add(sum));