const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chefs = require('./data.json')
app.get('/', (req,res) => {
    res.send('Recipe hunter is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`Recipe hunter running is running in port: ${port}`);
})