const lists = require('../models/lists.json')
const logger = require('../utils/logger')
const {createCard}  = require('./cards.controller')

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
 * Create a new card in a existing list
 * @param {*} req 
 * @param {*} res 
 */
const createCardInList = ((req, res) => {
    const id = Number(req.params.id)
    const index = lists.findIndex((list) => list.id === id)
    req.body["id"] = new Date().valueOf()
    createCard(req, res)
    let updatedCards = lists[ index ].cards
    updatedCards.push(req.body.id)
    const updatedList = {
        id: lists[index].id,
        name: lists[index].name,
        cards: updatedCards,
        createdAt: lists[index].createdAt
    }
    lists[ index ] = updatedList
    res.status(200).json('Card added in list with Id ' + id)
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
 * Update a list of cards in an initial list and in a recipient list to swith a card between the two lists
 * @param {*} req 
 * @param {*} res 
 */
const switchCardList = ((req, res) => {
    const initialListId = Number(req.params.id)  
    const recipientListId = Number(req.body.recipientId) 
    const cardId = Number(req.body.cardId) 
    const initialListIndex = lists.findIndex((list) => list.id === initialListId)
    const recipientListIndex = lists.findIndex((list) => list.id === recipientListId)
    let initialListCards = lists[initialListIndex].cards
    let recipientListCards = lists[ recipientListIndex ].cards
    let initialCardIndex = initialListCards.findIndex(card => card === cardId)
    recipientListCards.push(initialListCards[initialCardIndex])
    initialListCards.splice(initialCardIndex, 1)
    const initialUpdatedList = {
        id: lists[initialListIndex].id,
        name: lists[initialListIndex].name,
        cards: initialListCards,
        createdAt: lists[initialListIndex].createdAt
    }
    const recipientUpdatedList = {
        id: lists[recipientListIndex].id,
        name: lists[recipientListIndex].name,
        cards: recipientListCards,
        createdAt: lists[recipientListIndex].createdAt
    }
    lists[ initialListIndex ] = initialUpdatedList
    lists[ recipientListIndex ] = recipientUpdatedList
    res.status(200).json('Card swith between list with id ' + initialListId + ' to list with id ' + recipientListId)
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

module.exports = {getLists , getListById, createList, createCardInList, updateList, switchCardList, deleteList}