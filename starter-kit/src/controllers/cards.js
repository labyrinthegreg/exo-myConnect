const cards = []

const getCards = ((req, res) => {
    res.json(cards)
})

module.exports = { getCards }