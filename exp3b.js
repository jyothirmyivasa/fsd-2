 // Import modules
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mySecretKey", // used to sign session ID cookie
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }, // 1 minute for demo
  })
);

//  user 
const user = {
  username: "jyothi",
  password: "12345",
};

// Middleware to protect routes
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    res.send("Access denied! Please <a href='/login'>login</a> first.");
  }
}

// Login page
app.get("/login", (req, res) => {
  res.send(`
       <h2>Login</h2>
    <form method="POST" action="/login">
      Username: <input type="text" name="username" required><br><br>
      Password: <input type="password" name="password" required><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Login logic
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    req.session.user = username;
    res.send(`Welcome, ${username}! <a href='/dashboard'>Go to Dashboard</a>`);
  } else {
    res.send("Invalid credentials! <a href='/login'>Try again</a>");
  }
});

// Protected dashboard route
app.get("/dashboard", isAuthenticated, (req, res) => {
  res.send(`
    <h2>Dashboard</h2>
    <p>Hello, ${req.session.user}!</p>
     <p>WELCOME TO THIS PAGE</p>
    <a href='/logout'>Logout</a>
  `);
});

// Logout route
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.send("You are logged out. <a href='/login'>Login again</a>");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

