const router = require('express').Router()

const camioneroRouter = require('./Camionero.routes')
const camionRouter = require('./Camion.routes')
const camiCamRouter = require('./CamionerCam.routes')
const paqueteRouter = require('./Paquete.routes')
const provinciaRouter = require('./Provincia.routes')


router.use('/camioneros', camioneroRouter)
router.use('/camiones', camionRouter)
router.use('/camionerosCamiones', camiCamRouter)
router.use('/paquetes', paqueteRouter )
router.use('/provincias', provinciaRouter)


module.exports = router;