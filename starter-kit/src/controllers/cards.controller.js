const cards = require('../models/cards.json')
const logger = require('../utils/logger')

/**
 * Get all cards
 * @param {*} req 
 * @param {*} res 
 */
const getCards = ((req, res) => {
    res.json(cards)
})

/**
 * Get a card with a specific id
 * @param {*} req 
 * @param {*} res 
 */
const getCardById = ((req, res) => {
    const id = Number(req.params.id)  
    res.json(cards.find((card) => card.id === id))
})

/**
 * Create a new card
 * @param {*} req 
 * @param {*} res 
 */
const createCard = ((req, res) => { 
    const newCard = {
        id: req.body.id ? req.body.id : new Date().valueOf(),
        name: req.body.name,
        members: req.body.members,
        description: req.body.description,
        labels: req.body.labels,
        checklist: req.body.checklist,
        deadline: req.body.deadline,
        updatedAt: new Date(Date.now()),
        createdAt: new Date(Date.now())
    }
    cards.push(newCard)
    if (!req.body.id) {
        res.status(200).send(newCard)
    }
})

/**
 * Update a card
 * @param {*} req 
 * @param {*} res 
 */
const updateCard = ((req, res) => {
    const id = Number(req.params.id)  
    const index = cards.findIndex((card) => card.id === id)
    const updatedCard = {
        id: cards[index].id,
        name: req.body.name,
        members: req.body.members,
        description: req.body.description,
        labels: req.body.labels,
        checklist: req.body.checklist,
        deadline: req.body.deadline,
        updatedAt: new Date(Date.now()),
        createdAt: cards[index].createdAt
    }
    cards[ index ] = updatedCard
    res.status(200).json('Card updated with Id ' + id)
})

/**
 * Delete a card
 * @param {*} req 
 * @param {*} res 
 */
const deleteCard = ((req, res) => { 
    const id = Number(req.params.id)
    const index = cards.findIndex((card) => card.id === id)
    cards.splice(index, 1)
    res.status(200).json('Card deleted with Id '+ id)
})

module.exports = { getCards , getCardById, createCard, updateCard, deleteCard}