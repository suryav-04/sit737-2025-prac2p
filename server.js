const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my Node.js Web Server  hello!</h1>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
