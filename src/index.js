const express = require('express');

const app = express();

const { PORT } = require('./constants');
const routers = require('./router');

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

app.use(routers);

app.listen(PORT, () => console.log(`The app is running on port ${PORT}...`))