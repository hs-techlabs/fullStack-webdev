const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts =[
     {
      id:uuidv4(),
      username:"krishna",
      content:"this is my first post",
     },
     {
      id:uuidv4(),
      username:"ram",
      content:"this is my second post",
     },
     {
      id:uuidv4(),
      username:"shyam",
      content:"this is my third post",
     },
];


app.get('/posts', (req, res) => {
  res.render("index.ejs",{posts});
});

app.get('/posts/new', (req, res) => {
  res.render("new.ejs");
});

app.post('/posts', (req, res) => {
  let { username, content } = req.body;
  posts.push({ id: uuidv4(), username, content });
  res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs",{post});
});

//for updating the post
app.patch('/posts/:id',(req,res)=>{
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect('/posts');
});


app.get('/posts/:id/edit',(req,res)=>{
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs",{post});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
