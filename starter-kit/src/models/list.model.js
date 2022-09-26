const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class List extends Model { }

    List.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cards: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        }, 
    }, {
        sequelize,
        modelName: 'List',
        updatedAt: false
    })
}