// Import required modules
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

// Middleware to parse cookies
app.use(cookieParser());

// Configure express-session middleware
app.use(
  session({
    secret: "mySecretKey", // Used to sign the session ID cookie
    resave: false,         // Don't save session if unmodified
    saveUninitialized: true, // Save new sessions
    cookie: {
      maxAge: 60000 // Session expires after 1 minute (in ms)
    }
  })
);

// Route for home page (Session demo)
app.get("/", (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
    res.send("Welcome! This is your first visit.");
  } else {
    req.session.views++;
    res.send(`You have visited this page ${req.session.views} times.`);
  }
});

// Route to manually set a cookie
app.get("/setcookie", (req, res) => {
  res.cookie("username", "Prasanth", { maxAge: 300000, httpOnly: true });
  res.send("Cookie has been set with name 'username'.");
});

// Route to read cookies
app.get("/getcookies", (req, res) => {
  res.send(`Cookies: ${JSON.stringify(req.cookies)}`);
});

// Route to destroy the session and clear cookies
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error destroying session");
    }
    res.clearCookie("connect.sid"); // Clear session cookie
    res.clearCookie("username");    // Clear custom cookie
    res.send("Session and cookies cleared.");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
