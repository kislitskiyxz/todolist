const app = require('express')();
const routes = require('./routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

routes(app);
let http = require('http').Server(app);

http.listen(3002, '127.0.0.1');
console.log('SERVER INITIATED');
