var router   = require('express').Router()



router.get('/', function(req, res, next) {
    res.send({
        result: true,
        version: APP_VERSION,
        started: APP_STARTED
    })
})



module.exports = router
