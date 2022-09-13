const router = require('express').Router()
const { Paquete, Provincia} = require('../database/models')


router.get("/", (req, res) => {
    Provincia.findAll({
        attributes: [ 'codigo','nombre'],
        include: {
            model: Paquete,
            attributes: ['codigo','direccionDestinario','destinario','descripcion']
     }
    }).then(list => {
        res.json(list)
    })
})
router.post("/create", (req, res) => {
    Provincia.create({
        codigo: req.body.codigo,
        nombre: req.body.nombre
    }).then(provincia => {
        res.json(provincia)
    })
})

module.exports = router;