const boards = require('../models/boards.json')
const logger = require('../utils/logger')

/**
 * Get all boards
 * @param {*} req 
 * @param {*} res 
 */
const getBoards = ((req, res) => {
    res.json(boards)
})

/**
 * Get a board with a specific id
 * @param {*} req 
 * @param {*} res 
 */
const getBoardById = ((req, res) => {
    const id = Number(req.params.id)  
    res.json(boards.find((board) => board.id === id))
})

/**
 * Create a new board
 * @param {*} req 
 * @param {*} res 
 */
const createBoard = ((req, res) => { 
    const newBoard = {
        id: new Date().valueOf(),
        name: req.body.name,
        lists: req.body.lists,
        updatedAt: new Date(Date.now()),
        createdAt: new Date(Date.now()),
        labels: req.body.labels
    }
    boards.push(newBoard)
    res.status(200).send(newBoard)
})

/**
 * Update a board
 * @param {*} req 
 * @param {*} res 
 */
const updateBoard = ((req, res) => {
    const id = Number(req.params.id)  
    const index = boards.findIndex((board) => board.id === id)
    const updatedBoard = {
        id: boards[index].id,
        name: req.body.name,
        lists: req.body.lists,
        updatedAt: new Date(Date.now()),
        createdAt: boards[index].createdAt,
        labels: req.body.labels
    }
    boards[ index ] = updatedBoard
    res.status(200).json('Board updated with Id ' + id)
})

/**
 * Delete a board
 * @param {*} req 
 * @param {*} res 
 */
const deleteBoard = ((req, res) => { 
    const id = Number(req.params.id)
    const index = boards.findIndex((board) => board.id === id)
    boards.splice(index, 1)
    res.status(200).json('Board deleted with Id '+ id)
})

module.exports = {getBoards , getBoardById, createBoard, updateBoard, deleteBoard}