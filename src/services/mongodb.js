let mongoose = require('mongoose')

const mongodb_url = process.env.mongodb_url || 'mongodb://localhost:27017/maritim'

mongoose.connect(mongodb_url, { useNewUrlParser: true })
mongoose.set('useCreateIndex', true);