import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/public/images'));

const users = [];
const posts = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/signin", (req, res) => {
    res.sendFile(__dirname + "/public/signin.html");
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/signup.html");
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.post("/signup", (req, res) => {
    const { name, password, passwordConfirmation, email } = req.body;
    if (password !== passwordConfirmation) {
        return res.send("Passwords do not match.");
    }
    const user = { name, password, email };
    users.push(user);
    res.send(`User ${name} signed up successfully with email ${email}.`);
});

app.post("/signin", (req, res) => {
    const { name, password } = req.body;
    const user = users.find(u => u.name === name && u.password === password);
    if (user) {
        res.redirect('/home');
    } else {
        res.send("Invalid credentials.");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
