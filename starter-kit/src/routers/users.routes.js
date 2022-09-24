const express = require("express");
const router = express.Router();

const { getUsers, getUserById, createUser, updateUser, addUsersToBoard, deleteUser} = require("../controllers/users.controller.js")

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.put('/board/:id', addUsersToBoard)
router.delete('/:id', deleteUser)

module.exports = router