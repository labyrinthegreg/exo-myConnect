const express = require("express");
const router = express.Router();

const { getLists, getListById, createList, createCardInList, updateList, deleteList} = require("../controllers/lists.controller.js")

router.get('/', getLists)
router.get('/:id', getListById)
router.post('/', createList)
router.post('/card/:id', createCardInList)
router.put('/:id', updateList)
router.delete('/:id', deleteList)

module.exports = router