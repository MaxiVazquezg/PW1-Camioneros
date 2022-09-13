const { Camionero, Camion, CamioneroCamion, Paquete, Provincia} = require('./models')

Camionero.belongsToMany(Camion, { through: CamioneroCamion, foreignKey: 'camioneroDni' })
Camion.belongsToMany(Camionero, { through: CamioneroCamion, foreignKey: 'camionId' })

Provincia.hasMany(Paquete,{ foreignKey: 'provinciaId' })
Paquete.belongsTo(Provincia,{ foreignKey: 'provinciaId' })

Camionero.hasMany(Paquete,{ foreignKey: 'camioneroDni' })
Paquete.belongsTo(Camionero,{ foreignKey: 'camioneroDni' })
