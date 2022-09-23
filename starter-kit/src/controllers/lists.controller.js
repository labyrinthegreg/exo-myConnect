const lists = require('../models/lists.json')

/**
 * Get all lists
 * @param {*} req 
 * @param {*} res 
 */
const getLists = ((req, res) => {
    res.json(lists)
})

/**
 * Get a list with a specific id
 * @param {*} req 
 * @param {*} res 
 */
const getListById = ((req, res) => {
    const id = Number(req.params.id)  
    res.json(lists.find((list) => list.id === id))
})

/**
 * Create a new list
 * @param {*} req 
 * @param {*} res 
 */
const createList = ((req, res) => { 
    const newList = {
        id: new Date().valueOf(),
        name: req.body.name,
        cards: req.body.cards,
        createdAt: new Date(Date.now())
    }
    lists.push(newList)
    res.status(200).send(newList)
})

/**
 * Update a list
 * @param {*} req 
 * @param {*} res 
 */
const updateList = ((req, res) => {
    const id = Number(req.params.id)  
    const index = lists.findIndex((list) => list.id === id)
    const updatedList = {
        id: lists[index].id,
        name: req.body.name,
        cards: req.body.cards,
        createdAt: lists[index].createdAt
    }
    lists[ index ] = updatedList
    res.status(200).json('List updated with Id ' + id)
})

/**
 * Delete a list
 * @param {*} req 
 * @param {*} res 
 */
const deleteList = ((req, res) => { 
    const id = Number(req.params.id)
    const index = lists.findIndex((list) => list.id === id)
    lists.splice(index, 1)
    res.status(200).json('List deleted with Id '+ id)
})

module.exports = {getLists , getListById, createList, updateList, deleteList}