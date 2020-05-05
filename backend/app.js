const express = require('express');
//const debug =require("debug")("node-angular");
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const Post = require('./models/post');
mongoose.connect('mongodb+srv://dineshbhumca:WNh6d2RrHPjhVFWs@cluster0-1pofh.mongodb.net/node-angular?retryWrites=true&w=majority/posts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.warn("connection done!");

}).catch(() => {
  console.log('connection faield');

});
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-control-allow-headers", "Origin,X-requested-with,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
  next();
});

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }))

app.post('/api/posts', (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save()
  res.status(201).json({
    message: 'Updated Successfully'
  });

})
app.use("/api/posts", (req, res, next) => {
  Post.find().then((document) => {
    res.status(200).json({
      message: "post fatch sucessfull",
      posts: document
    });

  })
});
app.use((req, res, next) => {
  res.send('hello from express')
});

module.exports = app;