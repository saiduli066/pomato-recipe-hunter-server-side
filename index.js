const express = require('express');
const app = express();
const port = process.ENV.PORT || 5000;

app.get('/', (req,res) => {
    res.send('Recipe hunter is running')
})

