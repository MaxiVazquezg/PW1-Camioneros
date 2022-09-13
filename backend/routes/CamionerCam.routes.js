const router = require('express').Router()
const { Camion, Camionero, CamioneroCamion} = require('../database/models')


router.post("/CamionerCam", (req, res) => {
    Camionero.findByPk(req.body.camioneroDni).then(camionero => {
        Camion.findByPk(req.body.camionId).then(camion => {
            CamioneroCamion.create({
                camioneroDni: camionero.dni,
                camionId: camion.id,
            }).then(camioneroCamion => {
                res.json(camioneroCamion)
            })
        })
    })
})

module.exports = router;