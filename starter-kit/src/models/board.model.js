const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Board extends Model { }

    Board.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lists: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: [],
            },
            labels: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: [],
            }
        },
        {
            sequelize,
            modelName: 'Board',
            timestamps: true,
        })
    
    return Board
}