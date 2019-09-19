const mongoose = require('mongoose');

// This allows us to use es6 promises (.then's) with mongooses' methods
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

mongoose.connection.once('open', () => console.log(`Connected to mongo at ${process.env.DB_URL}` ));

module.exports = mongoose;