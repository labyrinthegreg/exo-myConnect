const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Card extends Model { }
    
    Card.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            members: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: []
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            labels: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: []
            },
            checklist: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: []
            },
            deadline: {
                type: DataTypes.DATE,
                allowNull: true
            }
        }, {
        sequelize,
        modelName: 'Card',
    })
    return Card
}