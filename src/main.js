const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use('/public', express.static('src/public'));

require('./db');

require('./handlers/home')(app);
require('./handlers/users')(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));
