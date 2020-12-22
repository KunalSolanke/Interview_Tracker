const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://daksh:daksh1234@cluster0.ondvs.mongodb.net/interview_tracker?retryWrites=true&w=majority"

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