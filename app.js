const express = require("express");
const morgan = require('morgan');
const postBank = require('./postBank');




const app = express();
app.use(express.static('public'));

// app.get("/", (req, res) => res.send("Hello World!"));

app.get('/', (req, res) =>{
 const posts = postBank.list();
 const webpage = `<!DOCTYPE html>
 <html>
 <head>
   <title>Wizard News</title>
   <link rel="stylesheet" href="/style.css" />
 </head>
 <body>
   <div class="news-list">
     <header><img src="/logo.png"/>Wizard News</header>
     ${posts.map(post => `
       <div class='news-item'>
         <p>
           <span class="news-position">${post.id}. ▲</span>${post.title}
           <small>(by ${post.name})</small>
         </p>
         <small class="news-info">
           ${post.upvotes} upvotes | ${post.date}
         </small>
       </div>`
     ).join('')}
   </div>
 </body>
</html>`

 res.send(webpage);
});


// ${posts.map(post => `<li>${"posts.title", 'posts.name'}</li>`)}
// previous port was 1337.
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
