const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class User extends Model { }
    
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        pseudo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        boards: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: []
        }
    },
        {
        sequelize,
        modelName: 'User',
        updatedAt: false
        })
    
    return User
}
