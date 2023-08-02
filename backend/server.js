require('dotenv').config();

const express = require('express');

const app = express();

app.use((req,res,next) => {
    res.json({"ab": "cd"});
    next();
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});

app.get('/', (req, res) => {
    res.send('Hello World');

});
