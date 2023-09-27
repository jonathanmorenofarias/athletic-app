const express = require('express');
const database = require('./database');
const itemRoutes = require('./routes/item');

const port = process.env.PORT || 3000
const app = express();

//log the request method, endpoint and time
app.use((req, res, next) => {
    const time = new Date().getFullYear();
    console.log(req.method, req.url, time);
    next();
})

app.use(express.json());

app.use('/api/items', itemRoutes);

//listen on env port or 3000 if none

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});