const { sequelize } = require('../models')
const logger = require('../utils/logger')
const User = sequelize.models.User
/**
 * Get all users
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = (async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

/**
 * Get a user with a specific id
 * @param {*} req 
 * @param {*} res 
 */
const getUserById = (async (req, res) => {
    const id = Number(req.params.id)  
    const user = await User.findByPk(id)
    if (!req.body.noNeedResponse) {
        res.json(user)
    } else {
        return user.toJSON()
    }    
})

/**
 * Create a new user
 * @param {*} req 
 * @param {*} res 
 */
const createUser = (async (req, res) => { 
    const newUser = {
        pseudo: req.body.pseudo,
        email: req.body.email,
        boards: req.body.boards
    }
    await User.create(newUser)
    res.status(200).send(newUser)
})

/**
 * Update a user
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = (async (req, res) => {
    const id = Number(req.params.id)  
    const updatedUser = req.body
    await User.update(updatedUser, {where: {id: id}})
    if (!req.body.noNeedResponse) {
        res.status(200).json('User updated with Id ' + id)
    }
})

/**
 * Add a user or multiple users to a board
 * @param {*} req 
 * @param {*} res 
 */
const addUsersToBoard = (async (req, res) => {
    const boardId = Number(req.params.id)  
    const usersId = req.body.usersId
    await usersId.forEach(async (userId) => {
        await User.findOne({ where: { id: userId } }).then(async (user) => {
            let userBoards = Array.from(JSON.parse(user.boards))
            userBoards.push({ board: boardId, owner: false })
            user.boards = userBoards
            await User.update({boards: user.boards}, {where: {id: userId}})
        })
    });
    if (usersId.length > 1) {
        res.status(200).json('Users are now in the board ' + boardId)
    } else {
        res.status(200).json('User ' + usersId[0] + ' is now in the board'+ boardId)
    }
    
})

/**
 * Delete a user
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = (async (req, res) => { 
    const id = Number(req.params.id)
    await User.destroy({ where: { id: id } })
    res.status(200).json('User deleted with Id '+ id)
})

module.exports = { getUsers , getUserById, createUser, updateUser, addUsersToBoard, deleteUser }