const path = require('path');

const routes = require('./controllers/');

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

