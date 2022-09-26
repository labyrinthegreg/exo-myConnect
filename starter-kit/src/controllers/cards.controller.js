const { sequelize } = require('../models')
const logger = require('../utils/logger')
const Card = sequelize.models.Card

/**
 * Get all cards
 * @param {*} req 
 * @param {*} res 
 */
const getCards = (async (req, res) => {
    const cards = await Card.findAll()
    res.json(cards)
})

/**
 * Get a card with a specific id
 * @param {*} req 
 * @param {*} res 
 */
const getCardById = (async (req, res) => {
    const id = Number(req.params.id)  
    const user = await Card.findByPk(id)
    res.json(user)
})

/**
 * Create a new card
 * @param {*} req 
 * @param {*} res 
 */
const createCard = (async (req, res) => { 
    const newCard = req.body
    const cardCreated = await Card.create(newCard)
    if (!req.body.noNeedResponse) {
        res.status(200).send(newCard)
    } else {
        return cardCreated.toJSON().id
    }
})

/**
 * Update a card
 * @param {*} req 
 * @param {*} res 
 */
const updateCard = (async (req, res) => {
    const id = Number(req.params.id)  
    const updatedCard = req.body
    await Card.update(updatedCard, {where : { id: id }})
    res.status(200).json('Card updated with Id ' + id)
})

/**
 * Delete a card
 * @param {*} req 
 * @param {*} res 
 */
const deleteCard = (async (req, res) => { 
    const id = Number(req.params.id)
    await Card.destroy({ where: { id: id } })
    res.status(200).json('Card deleted with Id '+ id)
})

module.exports = { getCards , getCardById, createCard, updateCard, deleteCard}