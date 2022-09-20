const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({credentials:true,origin:"http://localhost:3000"}));

app.use(express.json(), express.urlencoded({ extended: true }));

require('./server/routes/user.routes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run on port ${PORT}...`));
