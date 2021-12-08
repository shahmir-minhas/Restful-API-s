const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

// mongoose connection
mongoose.connect("mongodb://localhost:27017/wikidb", { useNewUrlParser: true });

//article schema
const articleSchema = {
  title: String,
  content: String,
};

// Article Modal
const Article = mongoose.model("Article", articleSchema);

//TODO
app
  .route("/articles")
  // Get
  .get((req, res) => {
    Article.find((err, articles) => {
      err ? res.send(err) : res.send(articles);
    });
  })
  // Post
  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      err ? res.send(err) : res.send("successful");
    });
  })
  // Delete
  .delete((req, res) => {
    Article.deleteMany((err) => {
      err ? res.send(err) : res.send("deleted all entries");
    });
  });

// Specific DATA
app
  .route("/articles/:title")
  .get((req, res) => {
    Article.findOne({ title: req.params.title }, (err, article) => {
      err ? res.send(err) : res.send(article);
    });
  })
  .put((req, res) => {
    Article.updateOne(
      { title: req.params.title },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      (err) => {
        err ? res.send(err) : res.send("updated");
      }
    );
  })
  .patch((req, res) => {
    Article.updateOne(
      { title: req.params.title },
      { $set: req.body },
      (err) => {
        err ? res.send(err) : res.send("update patch success");
      }
    );
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.title }, (err) => {
      err ? res.send(err) : res.send("deleted article");
    });
  });

// server listening port
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
