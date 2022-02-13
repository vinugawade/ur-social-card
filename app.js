const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Vinu'
    });
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});