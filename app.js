const express = require("express");
const morgan = require('morgan');
const postBank = require('./postBank');




const app = express();

// app.get("/", (req, res) => res.send("Hello World!"));

app.get('/', (req, res) =>{
 const posts = postBank.list();
 const webpage = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
     <div>
       <ul>
          ${posts.map(post => `<li>${post.title} ${post.name}</li>`).join(' ')}
       </ul>
     </div>
 </body>
 </html>`;

 res.send(webpage);
});


// ${posts.map(post => `<li>${"posts.title", 'posts.name'}</li>`)}
// previous port was 1337.
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
