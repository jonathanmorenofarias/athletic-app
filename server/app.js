const express = require('express');
const database = require('./database');

const itemRoutes = require('./routes/item');
const authRoutes = require('./routes/authentication');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');

const port = process.env.PORT || 3000
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: 'https://athletic-app.vercel.app' }));

//log the request method, endpoint and time
app.use((req, res, next) => {
    const time = new Date().getFullYear();
    console.log(req.method, req.url, time);
    next();
})


app.use(express.json());

app.use('/api/items', itemRoutes);
app.use('/api/user', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
//listen on env port or 3000 if none

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});