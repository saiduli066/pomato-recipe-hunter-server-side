const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

const chefs = require('./data.json');


app.use(cors());

app.get('/', (req,res) => {
    res.send('Recipe Hunter is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
//    console.log(id);
    const chefDetails = chefs.find(chef => chef.id == id);
    res.send(chefDetails);
})

app.listen(port, () => {
    console.log(`Recipe hunter running is running on port: ${port}`);
})