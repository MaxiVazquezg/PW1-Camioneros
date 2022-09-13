const { Model } = require('sequelize')
const sequelize = require('../sequelize')

class CamioneroCamion extends Model {}

CamioneroCamion.init({}, {
    sequelize,
    modelName: 'camioneroCamion',
    tableName: 'camionerosCamiones'
})

module.exports = CamioneroCamion