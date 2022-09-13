//index
const router = require('express').Router();
const path = require('path');

const camionerosRouter= require('./camioneros.routes')
const camionesRouter= require('./camiones.routes')


router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})

router.use('/camioners', camionerosRouter)
router.use('/camions', camionesRouter)


module.exports = router;