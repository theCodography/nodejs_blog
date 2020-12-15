const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const route = require('./routes');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//* HTTP logger
app.use(morgan('combined'));

//* Template engine
app.engine(
    'hbs',
    handlebars({
        /* config */
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// * Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
