// const express = require("express");
// const route = express.Router();

// route.get('/', (req,res) => {
//   res.status(200).json("Hello from server")
// })

// route.get('/users', (req, res) => {
//     res.status(200).json({
//         username : "mananchhabra",
//         password : "12345678"
//     })
// })
// module.exports = route;
// export default route;

import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controllers/user-controller'
import { getPosts } from '../controllers/posts-controller';
const router = express.Router();
const postRouter = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

router.get('/posts', getPosts);

export default router;
