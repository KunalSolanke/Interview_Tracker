const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, {
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true,
    retryWrites: true,
    useFindAndModify: true
});

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.on('open', () => {
    console.log('Db is connected')
})