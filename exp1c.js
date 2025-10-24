const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

const checkApiKey = (req, res, next) => {
    if (req.query.apiKey === '12345') {
        next();
    } else {
        res.status(403).send('Forbidden: Invalid API key');
    }
};

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/secure', checkApiKey, (req, res) => {
    res.send('You have accessed a secure route!');
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
