const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route example
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 