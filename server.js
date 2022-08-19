const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));