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
const getUserById = (async (req, res) => {
    const id = Number(req.params.id)  
    const user = await users.find((user) => user.id === id)
    if (!req.body.noNeedResponse) {
        res.json(user)
    } else {
        return user
    }    
})

/**
 * Create a new user
 * @param {*} req 
 * @param {*} res 
 */
const createUser = (async (req, res) => { 
    const newUser = {
        id: req.body.id ? req.body.id : new Date().valueOf(),
        pseudo: req.body.pseudo,
        email: req.body.email,
        createdAt: new Date(Date.now()),
        boards: req.body.boards
    }
    await users.push(newUser) 
    res.status(200).send(newUser)
})

/**
 * Update a user
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = (async (req, res) => {
    const id = Number(req.params.id)  
    const index = users.findIndex((user) => user.id === id)
    const updatedUser = {
        id: users[index].id,
        pseudo: req.body.pseudo,
        email: req.body.email,
        createdAt: users[ index ].createdAt,
        boards: req.body.boards
    }
    await (users[ index ] = updatedUser)
    if (!req.body.noNeedResponse) {
        res.status(200).json('User updated with Id ' + id)
    }
})

/**
 * Delete a user
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = (async (req, res) => { 
    const id = Number(req.params.id)
    const index = users.findIndex((user) => user.id === id)
    await users.splice(index, 1)
    res.status(200).json('User deleted with Id '+ id)
})

module.exports = { getUsers , getUserById, createUser, updateUser, deleteUser}