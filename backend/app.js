const express = require('express');
//const debug =require("debug")("node-angular");
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const Post = require('./models/post');
mongoose.connect('mongodb+srv://dineshbhumca:WNh6d2RrHPjhVFWs@cluster0-1pofh.mongodb.net/node-angular?retryWrites=true&w=majority',
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
  post.save().then(createdPost=>{
   let id = createdPost._id;
   res.status(201).json({
    message: 'Updated Successfully',
    id:id
  });
  })
  

})
// app.use("/api/posts", (req, res, next) => {
//   Post.find().then((document) => {
//     res.status(200).json({
//       message: "post fatch sucessfull",
//       posts: document
//     });

//   })
 
// }
// );
// app.use((req, res, next) => {
//   res.send('hello from express');
//   next();
// });
app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});


module.exports = app;