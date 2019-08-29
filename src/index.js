require('dotenv').config()
let express = require('express')
let cors = require('cors');
let app = express()
let bodyParser = require('body-parser')

require('./services/mongodb')

const user_route = require('./routes/user.route')

app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(user_route)

app.get('/', (req, res) => res.send('Hi welcome to contact API'))

app.use((req, res, next) => {
    res.status(404).send('We think you are lost')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server is listening to ${PORT}`))