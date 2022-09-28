const { Camionero, Camion, CamioneroCamion, Paquete, Provincia} = require('./models')

Camionero.belongsToMany(Camion, { through: CamioneroCamion, foreignKey: 'camioneroDni' })
Camion.belongsToMany(Camionero, { through: CamioneroCamion, foreignKey: 'camionId' })

Provincia.hasMany(Paquete, { foreignKey: 'provinciaId', as: 'paquetes' })
Paquete.belongsTo(Provincia, { foreignKey: 'provinciaId', as: 'provincia' })

//  Camionero.hasMany(Paquete,{ foreignKey: 'camioneroDni' })
//   Paquete.belongsTo(Camionero,{ foreignKey: 'camioneroDni' })
