let UserModel = require('../models/user.model')
let express = require('express')
let router = express.Router()

router.get('/users', (req, res) => {
    UserModel.find().then(doc => {
        res.json(doc)
    })
        .catch(err => res.status(500).json(err))
})

router.post('/user', (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).send('Request body is missing')
        return
    }

    let model = new UserModel(req.body)
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) res.status(500).send(doc)

            res.status(201).send(doc)
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router