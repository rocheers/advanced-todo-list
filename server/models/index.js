const mongoose = require('mongoose');

mongoose.connect('mongodb://root:1qq2ww@ds018238.mlab.com:18238/todos')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(`Could not connect to MongoDB...${err}`));
