// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// app.use(bodyParser.urlencoded());

// app.get('/',(req,res) => {
//     fs.readFile('username.txt',(err,data)=>{
//         if(err){
//             console.log(err);
//             data ='No chat Exits'
//         }
//         res.send(`${data}<form action ="/"> onsubmit=document.getElementById('username').value=localStorage.getItem('username')"
//         method = "POST"><input id = "message" name = "message" type = "text" placeholder="message">
//         <input type="hidden" name="username" id="username"><br><br>
//         <button type = "submit">Send</button>
//         </form>`
//         );
//     });
// })
    
// app.post('/',(req,res)=>{
//     console.log(req.body.username);
//     console.log(req.body.message);
//     fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`,{flag:'a'} , (err) =>
//         err ? console.log(err) : res.redirect('/')
//     );
// });

// app.get('/login',(req,res) =>{
//     res.send(`<form action='/login' method = "POST" onSubmit = "localStorage.setItem('username')">
//     <input type = "text" name="username" placeholder="username" id="username">
//     <input type="hidden" name="username" id="username"><br><br>
//     <button type = "submit">Send</button>
//     </form>`);
//     res.redirect('/');
// })
// app.use((req, res, next) => {
//   res.status(404).send('<h1>Page not found</h1>');
// });

// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

// // In-memory store for the username
// let storedUsername = '';

// // Path to the chat log file
// const chatPath = path.join(__dirname, 'chat.txt');

// // Create the chat log file if it doesn't exist
// if (!fs.existsSync(chatPath)) {
//   fs.writeFileSync(chatPath, '');
// }

// app.get('/', (req, res) => {
//   fs.readFile(chatPath, 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//       data = 'No chat exists';
//     }
//     const chatEntries = data.split('\n').filter(Boolean);
//     const chatMessages = chatEntries.map(entry => {
//       const [username, message] = entry.split(':');
//       return `<div>${username}: ${message}</div>`;
//     }).join('');
//     res.send(`
//       <div>${storedUsername}</div>
//       ${chatMessages}
//       <form action="/" method="POST">
//         <input id="message" name="message" type="text" placeholder="message">
//         <input type="hidden" name="username" id="username" value="${storedUsername}">
//         <br><br>
//         <button type="submit">Send</button>
//       </form>
//     `);
//   });
// });

// app.post('/', (req, res) => {
//   const username = req.body.username;
//   const message = req.body.message;
//   const chatEntry = `${username}:${message}\n`;

//   fs.appendFile(chatPath, chatEntry, (err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Error writing to chat log');
//     } else {
//       res.redirect('/');
//     }
//   });
// });

// app.get('/login', (req, res) => {
//   res.send(`
//     <form action='/login' method="POST">
//       <input type="text" name="username" placeholder="Username" id="username" required>
//       <button type="submit">Join Chat</button>
//     </form>
//   `);
// });

// app.post('/login', (req, res) => {
//   storedUsername = req.body.username;
//   res.redirect('/');
// });

// app.use((req, res, next) => {
//   res.status(404).send('<h1>Page not found</h1>');
// });

// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// In-memory store for the username
let storedUsername = '';

// Path to the chat log file
const chatPath = path.join(__dirname, 'chat.txt');

// Create the chat log file if it doesn't exist
if (!fs.existsSync(chatPath)) {
  fs.writeFileSync(chatPath, '');
}

app.get('/', (req, res) => {
  fs.readFile(chatPath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      data = 'No chat exists';
    }
    const chatEntries = data.split('\n').filter(Boolean);
    const chatMessages = chatEntries.map(entry => {
      const [username, message] = entry.split(':');
      return `<div>${username}: ${message}</div>`;
    }).join('');
    res.send(`
      <div>${storedUsername}</div>
      ${chatMessages}
      <form action="/" method="POST">
        <input id="message" name="message" type="text" placeholder="message">
        <input type="hidden" name="username" id="username" value="${storedUsername}">
        <br><br>
        <button type="submit">Send</button>
      </form>
    `);
  });
});

app.post('/', (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  const chatEntry = `${username}:${message}\n`;

  fs.appendFile(chatPath, chatEntry, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error writing to chat log');
    } else {
      res.redirect('/');
    }
  });
});

app.get('/login', (req, res) => {
  res.send(`
    <form action='/login' method="POST">
      <input type="text" name="username" placeholder="Username" id="username" required>
      <button type="submit">Join Chat</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  storedUsername = req.body.username;
  res.redirect('/');
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
