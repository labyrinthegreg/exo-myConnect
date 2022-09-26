const {sequelize} = require('../models')
const logger = require('../utils/logger')
const { createCard } = require('./cards.controller')
const List = sequelize.models.List

/**
 * Get all lists
 * @param {*} req 
 * @param {*} res 
 */
const getLists = (async (req, res) => {
    const lists = await List.findAll()
    res.json(lists)
})

/**
 * Get a list with a specific id
 * @param {*} req 
 * @param {*} res 
 */
const getListById = (async (req, res) => {
    const id = Number(req.params.id)  
    const list = await List.findByPk(id)
    res.json(list)
})

/**
 * Create a new list
 * @param {*} req 
 * @param {*} res 
 */
const createList = (async (req, res) => { 
    const newList = req.body
    await List.create(newList)
    res.status(200).send(newList)
})


/**
 * Create a new card in a existing list
 * @param {*} req 
 * @param {*} res 
 */
const createCardInList = (async (req, res) => {
    const id = Number(req.params.id)
    req.body["noNeedResponse"] = true
    let cardId = await createCard(req, res)
    await List.findOne({ where: { id: id } }).then(async (list) => {
        let listCards =  Array.from(JSON.parse(list.cards))
    listCards.push(cardId)
    await List.update({cards: listCards}, {where: {id: id}})
    })
    res.status(200).json('Card added in list with Id ' + id)
})

/**
 * Update a list
 * @param {*} req 
 * @param {*} res 
 */
const updateList = (async (req, res) => {
    const id = Number(req.params.id)  
    const updatedList = req.body
    await List.update(updatedList, {where: {id: id} })
    res.status(200).json('List updated with Id ' + id)
})

/**
 * Update a list of cards in an initial list and in a recipient list to swith a card between the two lists
 * @param {*} req 
 * @param {*} res 
 */
const switchCardList = (async (req, res) => {
    const initialListId = Number(req.params.id)  
    const recipientListId = Number(req.body.recipientId) 
    const cardId = Number(req.body.cardId) 
    let initialListCards
    let recipientListCards
    await List.findByPk(initialListId).then(async (list) => {
        initialListCards = Array.from(JSON.parse(list.cards))
    })
    await List.findByPk(recipientListId).then(async (list) => { 
        recipientListCards = Array.from(JSON.parse(list.cards))
    })
    let initialCardIndex = initialListCards.findIndex(card => card === cardId)
    recipientListCards.push(initialListCards[initialCardIndex])
    initialListCards.splice(initialCardIndex, 1)
    await List.update({cards: initialListCards}, {where : {id: initialListId}})
    await List.update({cards: recipientListCards}, {where : {id: recipientListId}})
    res.status(200).json('Card swith between list with id ' + initialListId + ' to list with id ' + recipientListId)
})

/**
 * Delete a list
 * @param {*} req 
 * @param {*} res 
 */
const deleteList = ((req, res) => { 
    const id = Number(req.params.id)
    List.destroy({ where: { id: id } })
    res.status(200).json('List deleted with Id '+ id)
})

module.exports = {getLists , getListById, createList, createCardInList, updateList, switchCardList, deleteList}