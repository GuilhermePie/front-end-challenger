import express from 'express'
import userController from '../apps/controllers/userController.js'
import productsController from '../apps/controllers/productsController.js';
import dollarController from '../apps/controllers/dollarController.js';

const router = express.Router()

router.post('/dummyjson/category', productsController.searchCategory);
router.post('/dummyjson/products/id', productsController.searchId);
router.post('/signUp', userController.cadastro);
router.post('/signIn', userController.login);
router.get('/dollar', dollarController.dollarPrice);


export default router;