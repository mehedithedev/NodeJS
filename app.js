const express = require('express');
const ejs = require('ejs');

// Linking the page route with app.js
const router = require('./routes/pages');

const app = express();
const PORT = 3000;

// implementing routes using middleware
app.use(router)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});