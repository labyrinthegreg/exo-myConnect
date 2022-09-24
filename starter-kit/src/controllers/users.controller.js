const users = require('../models/users.json')
const logger = require('../utils/logger')

/**
 * Get all users
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = ((req, res) => {
    res.json(users)
})

/**
 * Get a user with a specific id
 * @param {*} req 
 * @param {*} res 
 */
const getUserById = ((req, res) => {
    const id = Number(req.params.id)  
    res.json(users.find((user) => user.id === id))
})

/**
 * Create a new user
 * @param {*} req 
 * @param {*} res 
 */
const createUser = ((req, res) => { 
    const newUser = {
        id: req.body.id ? req.body.id : new Date().valueOf(),
        pseudo: req.body.pseudo,
        email: req.body.email,
        createdAt: new Date(Date.now()),
        boards: req.body.boards
    }
    users.push(newUser)
    res.status(200).send(newUser)
})

/**
 * Update a user
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = ((req, res) => {
    const id = Number(req.params.id)  
    const index = users.findIndex((user) => user.id === id)
    const updatedUser = {
        id: users[index].id,
        pseudo: req.body.pseudo,
        email: req.body.email,
        createdAt: users[ index ].createdAt,
        boards: req.body.boards
    }
    users[ index ] = updatedUser
    res.status(200).json('User updated with Id ' + id)
})

/**
 * Delete a user
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = ((req, res) => { 
    const id = Number(req.params.id)
    const index = users.findIndex((user) => user.id === id)
    users.splice(index, 1)
    res.status(200).json('User deleted with Id '+ id)
})

module.exports = { getUsers , getUserById, createUser, updateUser, deleteUser}