const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./utils/FBAuth");

const { getAllPosts, makeOnePost } = require("./handlers/posts");

const { signup, login, uploadImage } = require("./handlers/users");

/* Post Route */
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, makeOnePost);

/* users route */
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.https.onRequest(app);
