const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('this is homepage');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.listen(port, ()=>{
    console.log(`server listen on http://localhost:${port}`)
});