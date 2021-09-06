import {Router} from 'express'
import {getAll} from '../controllers/products.js'
import {addProduct, remove} from '../controllers/user-products.js'
const router = Router()

router.get('/api/product', getAll)

router.post('/api/user-product', addProduct)

router.delete('/api/user-product/:id_product', remove)

export default router