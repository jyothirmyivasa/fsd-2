const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    
        if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const id = parseInt(req.params.id);
    
        const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

        users[userIndex] = {
        ...users[userIndex],
        name: name || users[userIndex].name,
        email: email || users[userIndex].email
    };

    res.json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
        const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

        const deletedUser = users[userIndex];
    users = users.filter(u => u.id !== id);

    res.json({ message: 'User deleted', user: deletedUser });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});