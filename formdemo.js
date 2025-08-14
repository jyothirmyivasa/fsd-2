const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body; // Extract data from form
    res.send(`
        <h2>Form Submitted Successfully!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `);
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
