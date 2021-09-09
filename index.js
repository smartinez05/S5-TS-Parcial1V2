const express = require('express');

const app = express();

app.use(require('./requires/juan'));
app.use(require('./requires/manuel'));
app.use(require('./requires/sebastian'));
app.use(require('./requires/pablo'));

app.listen(3000);