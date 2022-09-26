const { Sequelize , DataTypes} = require('sequelize');
const logger = require('../utils/logger');
require('dotenv').config({ path: '.env' })

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { host: 'localhost', dialect: 'mysql' })

const connectionDb = (async () => {
    try {
        await sequelize.authenticate();
        logger.log('Connection has been established successfully.');
    } catch (error) {
        logger.error('Unable to connect to the database:', error);
    }
})

const modelDefiners = [ require('./user.model') , require('./board.model'), require('./card.model'), require('./list.model')]

for (const modelDefiner of modelDefiners) { 
    modelDefiner(sequelize, DataTypes)
}

sequelize.sync( )

module.exports = { connectionDb, sequelize }