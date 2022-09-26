const { sequelize } = require('../models')
const Board = sequelize.models.Board
const {getUserById, updateUser } = require('./users.controller')
const logger = require('../utils/logger')
const { Sequelize } = require('sequelize')

/**
 * Get all boards
 * @param {*} req 
 * @param {*} res 
 */
const getBoards = (async (req, res) => {
    const boards = await Board.findAll()
    res.json(boards)
})

/**
 * Get a board with a specific id
 * @param {*} req 
 * @param {*} res 
 */
const getBoardById = (async (req, res) => {
    const id = Number(req.params.id)  
    const board = await Board.findByPk(id)
    res.json(board)
})

/**
 * Create a new board
 * @param {*} req 
 * @param {*} res 
 */
const createBoard = (async (req, res) => { 
    const ownerId = req.body.ownerId
    const newBoard = {
        name: req.body.name,
        lists: req.body.lists,
        labels: req.body.labels
    }
    const boardCreatedId = await (await Board.create(newBoard)).getDataValue('id')
    req.params[ 'id' ] = ownerId
    req.body['noNeedResponse'] = true
    let owner = await getUserById(req, res)
    let ownerBoards = Array.from(JSON.parse(owner.boards))
    ownerBoards.push({ board: boardCreatedId, owner: true })
    owner.boards = ownerBoards
    req.body = owner
    req.body[ 'noNeedResponse' ] = true
    await updateUser(req, res)
    res.status(200).send(newBoard)
})

/**
 * Update a board
 * @param {*} req 
 * @param {*} res 
 */
const updateBoard = (async(req, res) => {
    const id = Number(req.params.id)  
    const updatedBoard = req.body
    await Board.update(updatedBoard, {where : { id: id }})
    res.status(200).json('Board updated with Id ' + id)
})

/**
 * Delete a board
 * @param {*} req 
 * @param {*} res 
 */
const deleteBoard = (async (req, res) => { 
    const id = Number(req.params.id)
    await Board.destroy({ where: { id: id } })
    res.status(200).json('Board deleted with Id '+ id)
})

module.exports = {getBoards , getBoardById, createBoard, updateBoard, deleteBoard}