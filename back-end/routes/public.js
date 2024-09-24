import express from 'express'
import userController from '../apps/controllers/userController.js'
import productsController from '../apps/controllers/productsController.js';

const router = express.Router()

router.post('/dummyjson/category', productsController.searchCategory);
router.post('/signUp', userController.cadastro);
router.post('/signIn', userController.login);


export default router;