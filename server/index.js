const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const todos = require('./routes/todos');
require('./models');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use('/api/todos', todos);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
